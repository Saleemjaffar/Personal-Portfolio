"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "ABOUT", id: "about" },
  { label: "SKILLS", id: "skills" },
  { label: "EXPERIENCE", id: "experience" },
  { label: "PROJECTS", id: "projects" },
  { label: "JOURNEY", id: "journey" },
  { label: "RESUME", id: "resume" },
  { label: "CONTACT", id: "contact" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top),
          );

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0, 0.15, 0.3, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavigation = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);

    const target = document.getElementById(id);

    if (!target) return;

    window.setTimeout(() => {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 20);
  };

  return (
    <>
      {/* Desktop + mobile floating navigation */}
      <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 sm:top-5 sm:w-[calc(100%-2rem)]">
        <div className="relative overflow-hidden rounded-full border border-white/[0.09] bg-[#08080b]/65 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl backdrop-saturate-150">
          {/* Soft light behind the glass */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(167,139,250,0.10),transparent_32%),radial-gradient(circle_at_85%_100%,rgba(96,165,250,0.06),transparent_35%)]"
          />

          <div className="relative flex h-14 items-center justify-between px-3 sm:h-16 sm:px-4">
            {/* Logo */}
            <button
              type="button"
              onClick={() => handleNavigation("home")}
              aria-label="Go to home"
              className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.025] transition-all duration-300 hover:border-violet-400/25 hover:bg-violet-400/[0.06]"
            >
              <span className="text-sm font-semibold tracking-[-0.08em] text-white/90 transition-colors duration-300 group-hover:text-violet-200">
                SJ.
              </span>
            </button>

            {/* Desktop navigation */}
            <nav
              aria-label="Primary navigation"
              className="hidden items-center gap-1 lg:flex"
            >
              {navItems.map((item) => {
                const active = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavigation(item.id)}
                    className={`group relative flex items-center gap-2 rounded-full px-3.5 py-2.5 text-[9px] font-medium tracking-[0.18em] transition-all duration-300 xl:px-4 ${
                      active
                        ? "bg-white/[0.07] text-white"
                        : "text-white/35 hover:bg-white/[0.04] hover:text-white/75"
                    }`}
                  >
                    <span>{item.label}</span>

                    <span
                      aria-hidden="true"
                      className={`absolute bottom-1.5 left-1/2 h-px -translate-x-1/2 transition-all duration-300 ${
                        active
                          ? "w-5 bg-violet-300/70"
                          : "w-0 bg-violet-300/0 group-hover:w-3 group-hover:bg-violet-300/40"
                      }`}
                    />
                  </button>
                );
              })}
            </nav>

            {/* Desktop contact action */}
            <button
              type="button"
              onClick={() => handleNavigation("contact")}
              className="hidden shrink-0 rounded-full border border-violet-300/[0.16] bg-violet-400/[0.06] px-4 py-2.5 text-[9px] font-medium tracking-[0.18em] text-violet-100/75 transition-all duration-300 hover:border-violet-300/30 hover:bg-violet-400/[0.11] hover:text-white lg:block"
            >
              LET&apos;S TALK
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.025] transition-all duration-300 hover:border-violet-400/25 hover:bg-violet-400/[0.06] lg:hidden"
            >
              <span className="relative flex h-4 w-4 flex-col justify-center gap-1.5">
                <span
                  className={`block h-px w-4 bg-white/70 transition-transform duration-300 ${
                    menuOpen ? "translate-y-[3px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-px w-4 bg-white/70 transition-opacity duration-300 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-px w-4 bg-white/70 transition-transform duration-300 ${
                    menuOpen ? "-translate-y-[3px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>

          {/* Mobile navigation panel */}
          <div
            className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden ${
              menuOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="border-t border-white/[0.06] px-3 pb-3 pt-2">
                <nav aria-label="Mobile navigation" className="space-y-1">
                  {navItems.map((item) => {
                    const active = activeSection === item.id;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleNavigation(item.id)}
                        className={`flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-left transition-all duration-300 ${
                          active
                            ? "border border-violet-400/[0.10] bg-violet-400/[0.06]"
                            : "border border-transparent bg-white/[0.015] hover:bg-white/[0.04]"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={`text-[10px] font-medium tracking-[0.2em] ${
                              active ? "text-white/90" : "text-white/45"
                            }`}
                          >
                            {item.label}
                          </span>
                        </span>

                        <span
                          className={`text-xs transition-all duration-300 ${
                            active
                              ? "translate-x-0 text-violet-300/70 opacity-100"
                              : "-translate-x-1 text-white/0 opacity-0"
                          }`}
                        >
                          →
                        </span>
                      </button>
                    );
                  })}
                </nav>

                <button
                  type="button"
                  onClick={() => handleNavigation("contact")}
                  className="mt-2 flex w-full items-center justify-between rounded-2xl border border-violet-300/[0.12] bg-violet-400/[0.05] px-4 py-3.5 text-[10px] font-medium tracking-[0.2em] text-violet-100/75 transition-all duration-300 hover:border-violet-300/25 hover:bg-violet-400/[0.09] hover:text-white"
                >
                  <span>LET&apos;S TALK</span>
                  <span>↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile backdrop */}
      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/45 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </>
  );
}
