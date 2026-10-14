import Image from "next/image";
import Navigation from "@/Components/navigation/Navigation";


export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navigation />

      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[#050507]" />

        <div className="absolute left-1/2 top-[-18rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-violet-600/[0.08] blur-[140px]" />

        <div className="absolute right-[-12rem] top-[35%] h-[28rem] w-[28rem] rounded-full bg-blue-600/[0.04] blur-[140px]" />
      </div>

     {/* Hero */}
<section
  id="home"
  className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28 sm:px-10 sm:pt-32 lg:px-16"
>
  {/* =====================================================
      CINEMATIC HERO BACKGROUND
      ===================================================== */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
  >
    {/* Deep violet atmosphere */}
    <div className="absolute left-[58%] top-[35%] h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/[0.11] blur-[120px] sm:h-[42rem] sm:w-[42rem]" />

    {/* Blue atmospheric haze */}
    <div className="absolute right-[-12rem] top-[15%] h-[34rem] w-[34rem] rounded-full bg-blue-700/[0.075] blur-[140px]" />

    {/* Lower purple atmosphere */}
    <div className="absolute bottom-[-16rem] left-[25%] h-[34rem] w-[45rem] rounded-full bg-violet-600/[0.08] blur-[130px]" />

    {/* Left subtle glow */}
    <div className="absolute left-[-15rem] top-[42%] h-[28rem] w-[28rem] rounded-full bg-indigo-600/[0.045] blur-[120px]" />

    {/* Fine futuristic grid */}
    <div
      className="absolute inset-0 opacity-[0.18]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "90px 90px",
        maskImage:
          "linear-gradient(to bottom, black 0%, black 35%, transparent 82%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 35%, transparent 82%)",
      }}
    />

    {/* Cinematic curved light */}
    <div className="absolute -left-[15%] bottom-[12%] h-px w-[75%] rotate-[9deg] bg-gradient-to-r from-transparent via-violet-500/35 to-transparent blur-[1px]" />

    <div className="absolute left-[50%] bottom-[4%] h-px w-[70%] -rotate-[7deg] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent blur-[1px]" />

    {/* Small atmospheric points */}
    <span className="absolute left-[8%] top-[31%] h-1 w-1 rounded-full bg-violet-300/60 shadow-[0_0_14px_rgba(167,139,250,0.9)]" />

    <span className="absolute left-[52%] top-[19%] h-1 w-1 rounded-full bg-white/40 shadow-[0_0_12px_rgba(255,255,255,0.8)]" />

    <span className="absolute right-[10%] top-[34%] h-1 w-1 rounded-full bg-violet-300/60 shadow-[0_0_14px_rgba(167,139,250,0.9)]" />

    <span className="absolute right-[27%] bottom-[22%] h-1 w-1 rounded-full bg-blue-300/40 shadow-[0_0_12px_rgba(96,165,250,0.7)]" />
  </div>

  {/* =====================================================
      MAIN HERO CONTENT
      ===================================================== */}
  <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-2">
    
    {/* ===================================================
        LEFT SIDE
        =================================================== */}
    <div className="max-w-3xl">
      {/* Category */}
      <div className="mb-6 flex items-center gap-3">
        <span className="h-px w-8 bg-violet-400/70" />

        <p className="text-[10px] font-medium tracking-[0.35em] text-violet-300/85 sm:text-xs">
          WEB DEVELOPER
        </p>
      </div>

      {/* Name */}
      <h1 className="text-5xl font-semibold leading-[0.88] tracking-[-0.065em] sm:text-7xl md:text-8xl lg:text-[7rem]">
        SALEEM
        <br />
        <span className="text-gradient">JAFFAR.</span>
      </h1>

      {/* Title */}
      <p className="mt-7 text-xs font-medium tracking-[0.28em] text-white/60 sm:text-sm sm:tracking-[0.32em]">
        SOFTWARE ENGINEERING STUDENT
      </p>

      {/* Description */}
      <p className="mt-6 max-w-xl text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
        Web developer building advanced, futuristic and immersive digital
        experiences.
      </p>

      {/* Buttons */}
      <div className="mt-9 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium !text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(139,92,246,0.25)]"
        >
          <span className="!text-black">EXPLORE WORK</span>

          <span className="text-base !text-black transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        <a
          href="#about"
          className="glass inline-flex rounded-full px-6 py-3 text-sm font-medium text-white/75 transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-400/[0.08] hover:text-white"
        >
          ABOUT ME
        </a>
      </div>

      {/* Hero information */}
      <div className="mt-12 flex flex-wrap gap-x-8 gap-y-5 border-t border-white/[0.08] pt-5 sm:mt-16 sm:gap-x-10">
        <InfoItem
          label="LOCATION"
          value="KOHAT, PAKISTAN"
        />

        <InfoItem
          label="FOCUS"
          value="WEB DEVELOPMENT"
        />

        <InfoItem
          label="STATUS"
          value="LEARNING & BUILDING"
        />
      </div>
    </div>

    {/* ===================================================
        RIGHT SIDE — S 313 DIGITAL IDENTITY
        =================================================== */}
    <div className="relative flex min-h-[25rem] -translate-y-3 items-center justify-center lg:min-h-[36rem] lg:-translate-y-12">
      
      {/* Large ambient glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.13] blur-[90px] sm:h-[24rem] sm:w-[24rem] lg:h-[24rem] lg:w-[24rem]"
      />

      {/* =================================================
          OUTER HUD CIRCLE
          ================================================= */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[21rem] w-[21rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/[0.13] sm:h-[27rem] sm:w-[27rem] lg:h-[27rem] lg:w-[27rem]"
      />

      {/* Second circle */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[17rem] w-[17rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/[0.18] sm:h-[22rem] sm:w-[22rem] lg:h-[21rem] lg:w-[21rem]"
      />

      {/* Inner circle */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[13rem] w-[13rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07] bg-violet-500/[0.025] shadow-[inset_0_0_50px_rgba(139,92,246,0.08),0_0_60px_rgba(139,92,246,0.08)] sm:h-[17rem] sm:w-[17rem] lg:h-[17rem] lg:w-[17rem]"
      />

      {/* =================================================
          ORBIT
          ================================================= */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[10rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rotate-[24deg] rounded-[50%] border border-violet-400/[0.15] sm:h-[13rem] sm:w-[30rem] lg:h-[13rem] lg:w-[30rem]"
      >
        <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-violet-300 shadow-[0_0_18px_rgba(167,139,250,0.95)]" />
      </div>

      {/* Second orbit */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[8rem] w-[21rem] -translate-x-1/2 -translate-y-1/2 -rotate-[18deg] rounded-[50%] border border-blue-400/[0.10] sm:h-[11rem] sm:w-[26rem] lg:h-[11rem] lg:w-[27rem]"
      >
        <span className="absolute -left-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-blue-300 shadow-[0_0_15px_rgba(96,165,250,0.9)]" />
      </div>

      {/* =================================================
          LOGO CONTAINER
          ================================================= */}
      <div className="relative z-10 flex h-[13rem] w-[13rem] items-center justify-center sm:h-[17rem] sm:w-[17rem] lg:h-[18.5rem] lg:w-[18.5rem]">
        
        {/* Very subtle inner glow */}
        <div
          aria-hidden="true"
          className="absolute inset-[18%] rounded-full bg-violet-500/[0.07] blur-2xl"
        />

        {/* LOGO — intentionally small */}
        <Image
          src="/brand/s313-logo.png"
          alt="S 313 logo"
          width={509}
          height={655}
          priority
          className="relative z-10 h-auto w-[5.5rem] object-contain drop-shadow-[0_0_22px_rgba(167,139,250,0.30)] sm:w-[7rem] lg:w-[7.5rem]"
        />
      </div>

      {/* Digital identity label */}
      <div className="absolute bottom-[9%] left-1/2 -translate-x-1/2 text-[8px] tracking-[0.32em] text-violet-300/25">
        DIGITAL IDENTITY
      </div>

      {/* Small coordinates */}
      <div className="absolute right-[3%] top-[18%] hidden text-[8px] tracking-[0.3em] text-white/15 lg:block">
        S / 313
      </div>
    </div>
  </div>

  {/* =====================================================
      SCROLL INDICATOR
      ===================================================== */}
  <div className="absolute bottom-8 right-7 hidden items-center gap-3 lg:flex">
    <span className="text-[8px] tracking-[0.3em] text-white/20">
      SCROLL
    </span>

    <span className="h-10 w-px bg-gradient-to-b from-violet-400/60 to-transparent" />
  </div>
</section>

      {/* About */}
     <section
  id="about"
  className="min-h-[70vh] border-t border-white/[0.06] px-6 py-32 sm:px-10 lg:px-16"
>
  <div className="mx-auto max-w-7xl">
    <div className="mb-5 flex items-center gap-3 text-[10px] tracking-[0.25em] text-violet-300/60">
      <span>01</span>

      <span className="h-px w-8 bg-violet-400/30" />

      <span>ABOUT</span>
    </div>

    <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
      <div>
        <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
          Building my path
          <br />
          <span className="text-gradient">through software.</span>
        </h2>

        <p className="mt-8 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
          I&apos;m Saleem Jaffar, a Software Engineering student from Kohat,
          Pakistan, currently focused on web development.
        </p>

        <p className="mt-5 max-w-2xl text-base leading-8 text-white/40 sm:text-lg">
          I chose software engineering because I love the field and want to
          innovate within it. I&apos;m exploring different areas of software
          engineering while building my skills and discovering where I can
          create the most meaningful digital experiences.
        </p>

        <p className="mt-5 max-w-2xl text-base leading-8 text-white/40 sm:text-lg">
          My current focus is creating advanced, futuristic and immersive
          websites. My long-term path extends beyond web development into
          application development, game development and whatever comes next.
        </p>
      </div>

      <div className="flex flex-col justify-end">
        <div className="glass rounded-3xl p-6 sm:p-8">
          <p className="text-[10px] tracking-[0.25em] text-violet-300/60">
            CURRENT IDENTITY
          </p>

          <div className="mt-7 space-y-6">
            <AboutDetail
              label="EDUCATION"
              value="BSc Software Engineering"
            />

            <AboutDetail
              label="INSTITUTION"
              value="Pak Austria Fachhochschule"
            />

            <AboutDetail
              label="SEMESTER"
              value="3rd Semester"
            />

            <AboutDetail
              label="CURRENT FOCUS"
              value="Web Development"
            />

            <AboutDetail
              label="BASED IN"
              value="Kohat, Pakistan"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

     {/* Skills */}
<section
  id="skills"
  className="relative overflow-hidden border-t border-white/[0.06] px-6 py-32 sm:px-10 lg:px-16"
>
  {/* =====================================================
      SKILLS ATMOSPHERE
      ===================================================== */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
  >
    <div className="absolute left-[8%] top-[18%] h-[24rem] w-[24rem] rounded-full bg-violet-600/[0.045] blur-[120px]" />

    <div className="absolute right-[-8rem] top-[30%] h-[30rem] w-[30rem] rounded-full bg-blue-600/[0.035] blur-[130px]" />

    <div className="absolute bottom-[-12rem] left-[45%] h-[26rem] w-[26rem] rounded-full bg-violet-500/[0.04] blur-[120px]" />

    <div
      className="absolute inset-0 opacity-[0.1]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "90px 90px",
        maskImage:
          "linear-gradient(to bottom, transparent, black 20%, black 75%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black 20%, black 75%, transparent)",
      }}
    />
  </div>

  <div className="relative mx-auto max-w-7xl">
    {/* ===================================================
        SECTION HEADER
        =================================================== */}
    <div className="mb-14 flex items-center gap-3 text-[10px] tracking-[0.25em] text-violet-300/60">
      <span>02</span>

      <span className="h-px w-8 bg-violet-400/30" />

      <span>SKILLS</span>
    </div>

    {/* ===================================================
        INTRO
        =================================================== */}
    <div className="max-w-3xl">
      <p className="text-[10px] tracking-[0.3em] text-white/25">
        TECHNOLOGY SYSTEM
      </p>

      <h2 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
        Tools I use to
        <br />
        <span className="text-gradient">build ideas.</span>
      </h2>

      <p className="mt-7 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
        A growing technology stack built through software engineering
        studies, web development practice and hands-on projects.
      </p>
    </div>

    {/* ===================================================
        TECHNOLOGY CATEGORIES
        =================================================== */}
    <div className="mt-16 grid gap-5 lg:grid-cols-2">
      {/* Programming */}
      <SkillCategory
        number="01"
        title="PROGRAMMING"
        description="Core languages and web fundamentals."
        skills={[
          "C++",
          "C",
          "JavaScript",
          "TypeScript",
          "HTML",
          "CSS",
        ]}
      />

      {/* Frontend */}
      <SkillCategory
        number="02"
        title="FRONTEND"
        description="Interfaces, responsive layouts and modern React development."
        skills={[
          "React",
          "Next.js",
          "Tailwind CSS",
          "Responsive UI",
          "DOM APIs",
          "Browser APIs",
        ]}
      />

      {/* Backend */}
      <SkillCategory
        number="03"
        title="BACKEND"
        description="Server-side fundamentals and connecting applications to APIs."
        skills={[
          "Node.js",
          "REST APIs",
          "API Integration",
          "Authentication Concepts",
        ]}
      />

      {/* Database */}
      <SkillCategory
        number="04"
        title="DATABASE"
        description="Working with relational data and database fundamentals."
        skills={[
          "SQL",
          "PostgreSQL",
          "Database Concepts",
        ]}
      />

      {/* 3D / Creative */}
      <SkillCategory
        number="05"
        title="3D / CREATIVE"
        description="Building immersive visual experiences for the web."
        skills={[
          "Three.js",
          "React Three Fiber",
          "Drei",
          "WebGL",
          "3D Scenes",
          "Lighting & Materials",
          "Camera Animation",
          "3D Planet Rendering",
        ]}
      />

      {/* Tools */}
      <SkillCategory
        number="06"
        title="DEVELOPMENT TOOLS"
        description="Tools used for development, debugging and project workflows."
        skills={[
          "Git",
          "GitHub",
          "Vite",
          "npm",
          "VS Code",
          "Chrome DevTools",
          "PowerShell",
        ]}
      />
    </div>

    {/* ===================================================
        TECHNOLOGY FLOW
        =================================================== */}
    <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/[0.07] bg-white/[0.02] p-6 sm:p-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-[9px] tracking-[0.28em] text-violet-300/55">
            CURRENT DIRECTION
          </p>

          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-white/85 sm:text-3xl">
            Learning. Building. Evolving.
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-7 text-white/35">
            The stack is continuously expanding as I move deeper into
            software engineering and modern digital development.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <TechNode label="CODE" active />

          <span className="text-white/15">→</span>

          <TechNode label="DESIGN" />

          <span className="text-white/15">→</span>

          <TechNode label="BUILD" />

          <span className="text-white/15">→</span>

          <TechNode label="CREATE" />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Experience */}
      <section
        id="experience"
        className="relative min-h-[90vh] overflow-hidden border-t border-white/[0.06] px-6 py-32 sm:px-10 lg:px-16"
      >
        {/* Experience atmosphere */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute left-[-10rem] top-[18%] h-[26rem] w-[26rem] rounded-full bg-violet-600/[0.045] blur-[130px]" />
          <div className="absolute right-[-12rem] bottom-[5%] h-[30rem] w-[30rem] rounded-full bg-blue-600/[0.035] blur-[140px]" />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
              backgroundSize: "90px 90px",
              maskImage:
                "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-5 flex items-center gap-3 text-[10px] tracking-[0.25em] text-violet-300/60">
            <span>03</span>
            <span className="h-px w-8 bg-violet-400/30" />
            <span>EXPERIENCE</span>
          </div>

          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            {/* Experience identity */}
            <div className="lg:sticky lg:top-28 lg:h-fit">
              <p className="text-[10px] tracking-[0.3em] text-white/25">
                PROFESSIONAL EXPERIENCE
              </p>

              <h2 className="mt-5 text-5xl font-semibold leading-[0.92] tracking-[-0.055em] sm:text-7xl">
                Learning
                <br />
                <span className="text-gradient">in motion.</span>
              </h2>

              <p className="mt-7 max-w-md text-base leading-8 text-white/40 sm:text-lg">
                My first professional development experience helped turn
                software engineering fundamentals into practical web
                development work.
              </p>

              <div className="glass mt-10 overflow-hidden rounded-[1.75rem] p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] tracking-[0.25em] text-violet-300/60">
                    INTERNSHIP
                  </span>

                  <span className="flex items-center gap-2 text-[8px] tracking-[0.18em] text-white/25">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.65)]" />
                    COMPLETED
                  </span>
                </div>

                <div className="mt-7">
                  <h3 className="text-2xl font-semibold tracking-[-0.035em] text-white/90">
                    Technik Nest
                  </h3>
                  <p className="mt-2 text-sm text-violet-300/60">
                    Web Development Intern
                  </p>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-4 border-t border-white/[0.06] pt-5">
                  <div>
                    <span className="block text-[8px] tracking-[0.2em] text-white/20">
                      DURATION
                    </span>
                    <span className="mt-2 block text-xs text-white/60">
                      1.5 MONTHS
                    </span>
                  </div>

                  <div>
                    <span className="block text-[8px] tracking-[0.2em] text-white/20">
                      FIELD
                    </span>
                    <span className="mt-2 block text-xs text-white/60">
                      WEB DEVELOPMENT
                    </span>
                  </div>
                </div>

                <div className="mt-6 h-px overflow-hidden bg-white/[0.05]">
                  <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />
                </div>
              </div>
            </div>

            {/* Experience timeline */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute bottom-7 left-[5px] top-7 hidden w-px bg-gradient-to-b from-violet-400/45 via-violet-400/15 to-transparent sm:block"
              />

              <div className="space-y-4">
                <ExperienceItem
                  number="01"
                  title="Modern JavaScript Essentials"
                  description="Built a stronger foundation in modern JavaScript concepts and practical development patterns."
                />

                <ExperienceItem
                  number="02"
                  title="TypeScript Fundamentals"
                  description="Worked with TypeScript fundamentals and learned how typed development improves structure and reliability."
                />

                <ExperienceItem
                  number="03"
                  title="React Fundamentals"
                  description="Worked with React fundamentals, components, Hooks and state management."
                />

                <ExperienceItem
                  number="04"
                  title="Next.js Fundamentals"
                  description="Learned the fundamentals of Next.js and its approach to building modern web applications."
                />

                <ExperienceItem
                  number="05"
                  title="Next.js API Routes"
                  description="Worked with API routes and backend functionality within Next.js applications."
                />

                <ExperienceItem
                  number="06"
                  title="Architecture Planning"
                  description="Participated in end-project kickoff and architecture planning, translating requirements into a structured development direction."
                  last
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="relative min-h-[90vh] overflow-hidden border-t border-white/[0.06] px-6 py-32 sm:px-10 lg:px-16"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-32 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/[0.06] blur-[110px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-5 flex items-center gap-3 text-[10px] tracking-[0.25em] text-violet-300/60">
            <span>04</span>
            <span className="h-px w-8 bg-violet-400/30" />
            <span>PROJECTS</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[9px] tracking-[0.25em] text-white/20">
                SELECTED WORK
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
                Ideas turned
                <br />
                <span className="text-gradient">into systems.</span>
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-white/45 sm:text-lg lg:justify-self-end">
              A growing collection of projects built while learning software
              engineering, web development and creative digital experiences.
            </p>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-12 lg:grid-rows-2">
            <ProjectCard
              number="01"
              title="Personal Portfolio"
              category="FLAGSHIP EXPERIENCE"
              description="My evolving personal portfolio, designed as a futuristic digital environment for presenting my identity, skills, work and long-term development vision."
              technologies={["Next.js", "React", "TypeScript", "Three.js"]}
              featured
            />

            <ProjectCard
              number="02"
              title="Personal Expense Tracker"
              category="WEB APPLICATION"
              description="A practical application focused on organizing and tracking personal expenses through a clean, responsive interface."
              technologies={["React", "TypeScript", "Vite"]}
            />

            <ProjectCard
              number="03"
              title="Local Skills OS"
              category="SOFTWARE PROJECT"
              description="A local software project exploring practical development, system interaction and technical experimentation."
              technologies={["Local Development"]}
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.06] pt-5">
            <span className="text-[9px] tracking-[0.2em] text-white/20">
              03 PROJECTS · CONTINUOUSLY EVOLVING
            </span>
            <span className="text-[9px] tracking-[0.2em] text-violet-300/35">
              BUILD · LEARN · REPEAT
            </span>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section
        id="journey"
        className="relative min-h-[90vh] overflow-hidden border-t border-white/[0.06] px-6 py-32 sm:px-10 lg:px-16"
      >
        {/* Quiet atmosphere: gradients and CSS only, no continuously running scene. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-10rem] top-[18%] h-[25rem] w-[25rem] rounded-full bg-violet-600/[0.05] blur-[120px]" />
          <div className="absolute bottom-[4%] right-[-9rem] h-[28rem] w-[28rem] rounded-full bg-blue-600/[0.04] blur-[130px]" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
              backgroundSize: "90px 90px",
              maskImage: "linear-gradient(to bottom, transparent, black 22%, black 78%, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black 22%, black 78%, transparent)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-5 flex items-center gap-3 text-[10px] tracking-[0.25em] text-violet-300/60">
            <span>05</span>
            <span className="h-px w-8 bg-violet-400/30" />
            <span>JOURNEY</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-[9px] tracking-[0.28em] text-white/25">A PATH IN PROGRESS</p>
              <h2 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Learning today.
                <br />
                <span className="text-gradient">Building tomorrow.</span>
              </h2>
            </div>
            <div className="lg:justify-self-end lg:pb-1">
              <p className="max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
                Every stage adds a new way to create. This is the direction I’m working toward—not a fixed finish line, but a journey of learning, practice and discovery.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-9 bg-violet-400/50" />
                <span className="text-[9px] tracking-[0.22em] text-violet-300/55">MY DEVELOPMENT PATH</span>
              </div>
            </div>
          </div>

          <div className="mt-14 rounded-[2rem] border border-white/[0.07] bg-white/[0.018] p-4 sm:mt-16 sm:p-7 lg:p-9">
            <div className="mb-7 flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] pb-5">
              <div>
                <p className="text-[9px] tracking-[0.24em] text-white/25">PROGRESSION MAP</p>
                <p className="mt-2 text-sm text-white/55">From foundations to new possibilities</p>
              </div>
              <span className="rounded-full border border-violet-400/[0.13] bg-violet-400/[0.04] px-3 py-1.5 text-[8px] tracking-[0.18em] text-violet-200/60">IN PROGRESS</span>
            </div>

            <div className="relative">
              <div aria-hidden="true" className="absolute bottom-8 left-[19px] top-8 w-px bg-gradient-to-b from-violet-300/50 via-violet-300/20 to-white/[0.04] sm:left-[23px]" />
              <div className="space-y-3 sm:space-y-4">
                <JourneyItem
                  number="01"
                  status="FOUNDATION · ONGOING"
                  title="Software Engineering"
                  description="Studying the foundations of software engineering through my BSc while exploring the wider field and strengthening my problem-solving skills."
                  active
                />
                <JourneyItem
                  number="02"
                  status="CURRENT FOCUS"
                  title="Web Development"
                  description="Developing modern, responsive and immersive websites, and working toward building polished digital experiences with thoughtful design and engineering."
                  active
                  featured
                />
                <JourneyItem
                  number="03"
                  status="NEXT STAGE"
                  title="App Development"
                  description="Expand my skills into application development after strengthening my web development foundation."
                />
                <JourneyItem
                  number="04"
                  status="FUTURE EXPLORATION"
                  title="Game Development"
                  description="Explore game development as another creative and technical way to build interactive experiences."
                />
                <JourneyItem
                  number="05"
                  status="OPEN HORIZON"
                  title="Beyond the Known"
                  description="Continue discovering new disciplines, tools and ideas across software engineering as my interests and experience grow."
                  last
                />
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/[0.06] pt-5 text-[8px] tracking-[0.18em] text-white/25 sm:text-[9px]">
              <span className="text-violet-300/60">LEARN</span><span>→</span><span>EXPERIMENT</span><span>→</span><span>BUILD</span><span>→</span><span>EVOLVE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section
        id="resume"
        className="relative min-h-[85vh] overflow-hidden border-t border-white/[0.06] px-6 py-32 sm:px-10 lg:px-16"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-8rem] top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-violet-600/[0.06] blur-[130px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-5 flex items-center gap-3 text-[10px] tracking-[0.25em] text-violet-300/60">
            <span>06</span>
            <span className="h-px w-8 bg-violet-400/30" />
            <span>RESUME</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-[9px] tracking-[0.3em] text-white/25">
                PROFESSIONAL PROFILE
              </p>

              <h2 className="mt-5 text-5xl font-semibold leading-[0.92] tracking-[-0.055em] sm:text-7xl">
                A profile
                <br />
                <span className="text-gradient">in progress.</span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-white/45 sm:text-lg">
                A concise overview of my education, development experience,
                technical skills and direction as a software engineering
                student and web developer.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="/resume/saleem-jaffar-resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium !text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(139,92,246,0.22)]"
                >
                  <span className="!text-black">VIEW RESUME</span>
                  <span aria-hidden="true" className="!text-black">↗</span>
                </a>

                <a
                  href="/resume/saleem-jaffar-resume.pdf"
                  download
                  className="glass inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-medium text-white/75 transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-400/[0.08] hover:text-white"
                >
                  DOWNLOAD PDF
                </a>
              </div>

              <p className="mt-4 text-[9px] tracking-[0.12em] text-white/20">
                PLACE YOUR PDF AT /public/resume/saleem-jaffar-resume.pdf
              </p>
            </div>

            <div className="glass relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-violet-500/[0.07] blur-[70px]" />

              <div className="relative">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-5">
                  <div>
                    <p className="text-[9px] tracking-[0.25em] text-violet-300/60">
                      IDENTITY FILE
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-white/90">
                      SALEEM JAFFAR
                    </h3>
                  </div>

                  <span className="rounded-full border border-violet-400/[0.13] bg-violet-400/[0.04] px-3 py-1.5 text-[8px] tracking-[0.16em] text-violet-200/55">
                    S / 313
                  </span>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <ResumeStat label="ROLE" value="WEB DEVELOPER" />
                  <ResumeStat label="EDUCATION" value="BSc SE" />
                  <ResumeStat label="SEMESTER" value="03" />
                  <ResumeStat label="EXPERIENCE" value="INTERNSHIP" />
                  <ResumeStat label="LOCATION" value="KOHAT, PK" />
                  <ResumeStat label="STATUS" value="LEARNING" />
                </div>

                <div className="mt-8 border-t border-white/[0.06] pt-6">
                  <p className="text-[9px] tracking-[0.22em] text-white/20">
                    CORE DIRECTION
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/45">
                    Software engineering → Web development → App development →
                    Game development → Beyond.
                  </p>
                </div>

                <div className="mt-7 h-px bg-gradient-to-r from-transparent via-violet-400/45 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
  id="contact"
  className="relative min-h-[85vh] overflow-hidden border-t border-white/[0.06] px-6 py-32 sm:px-10 lg:px-16"
>
  {/* Ambient contact glow */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.07] blur-[140px]"
  />

  <div className="relative mx-auto max-w-7xl">
    <div className="mb-5 flex items-center gap-3 text-[10px] tracking-[0.25em] text-violet-300/60">
      <span>07</span>

      <span className="h-px w-8 bg-violet-400/30" />

      <span>CONTACT</span>
    </div>

    <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
      {/* Main message */}
      <div>
        <p className="text-[10px] tracking-[0.3em] text-white/25">
          OPEN TO CONNECTIONS
        </p>

        <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
          LET&apos;S BUILD
          <br />
          <span className="text-gradient">SOMETHING</span>
          <br />
          EXTRAORDINARY.
        </h2>

        <p className="mt-8 max-w-xl text-base leading-8 text-white/45 sm:text-lg">
          Have an idea, a project, or simply want to connect? I&apos;m always
          interested in learning, building and exploring new possibilities
          through technology.
        </p>

       <a
         href="mailto:saleemjaffar914@gmail.com"
         className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium !text-black transition-transform duration-300 hover:scale-[1.03]"
       >
         Start a Conversation
       <span aria-hidden="true" className="!text-black">
         ↗
       </span>
       </a>

      </div>

      {/* Contact information */}
      <div className="flex flex-col justify-end">
        <div className="glass rounded-3xl p-6 sm:p-8">
          <p className="text-[10px] tracking-[0.25em] text-violet-300/60">
            CONTACT DETAILS
          </p>

          <div className="mt-8 space-y-7">
            <ContactDetail
              label="EMAIL"
              value="saleemjaffar914@gmail.com"
              href="mailto:saleemjaffar914@gmail.com"
            />

            <ContactDetail
              label="PHONE"
              value="+92 346-105-3255"
              href="tel:+923461053255"
            />

            <ContactDetail
              label="LOCATION"
              value="Kohat, Pakistan"
            />
          </div>

          <div className="mt-8 border-t border-white/[0.06] pt-6">
            <p className="text-[9px] tracking-[0.2em] text-white/20">
              PROFESSIONAL LINKS
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <PlaceholderLink label="GITHUB" />
              <PlaceholderLink label="LINKEDIN" />
              <PlaceholderLink label="INSTAGRAM" />
            </div>

            <p className="mt-4 text-[10px] leading-5 text-white/25">
              Links will be added later.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] px-6 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-[10px] tracking-[0.15em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} SALEEM JAFFAR</span>

          <span>
            SOFTWARE ENGINEERING · WEB DEVELOPMENT
          </span>
        </div>
      </footer>
    </main>
  );
}

function InfoItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <span className="block text-[9px] tracking-[0.2em] text-white/25">
        {label}
      </span>

      <span className="mt-1 block text-[10px] tracking-[0.15em] text-white/55">
        {value}
      </span>
    </div>
  );
}

function AboutDetail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-b border-white/[0.06] pb-5 last:border-0 last:pb-0">
      <p className="text-[9px] tracking-[0.2em] text-white/25">
        {label}
      </p>

      <p className="mt-2 text-sm text-white/70">
        {value}
      </p>
    </div>
  );
}

function SkillGroup({
  number,
  title,
  skills,
}: {
  number: string;
  title: string;
  skills: string[];
}) {
  return (
    <div className="glass group rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-white/[0.06] sm:p-7">
      <div className="flex items-center justify-between">
        <span className="text-[10px] tracking-[0.2em] text-violet-300/60">
          {number}
        </span>

        <span className="h-2 w-2 rounded-full bg-violet-400/50 transition-all duration-500 group-hover:scale-150 group-hover:bg-violet-300" />
      </div>

      <h3 className="mt-8 text-sm font-medium tracking-[0.15em] text-white/80">
        {title}
      </h3>

      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[11px] text-white/45 transition-colors duration-300 group-hover:text-white/65"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function SkillCategory({
  number,
  title,
  description,
  skills,
}: {
  number: string;
  title: string;
  description: string;
  skills: string[];
}) {
  return (
    <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-white/[0.025] p-6 transition-all duration-500 hover:border-violet-400/[0.18] hover:bg-violet-400/[0.035] sm:p-7">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/[0.06] blur-[60px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-[9px] tracking-[0.25em] text-violet-300/55">
            {number}
          </p>

          <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-white/85">
            {title}
          </h3>
        </div>

        <span className="text-[8px] tracking-[0.2em] text-white/15">
          SYSTEM
        </span>
      </div>

      <p className="relative mt-3 max-w-md text-sm leading-6 text-white/35">
        {description}
      </p>

      <div className="relative mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/[0.07] bg-black/10 px-3 py-1.5 text-[9px] tracking-[0.08em] text-white/45 transition-colors duration-300 group-hover:border-violet-400/[0.12] group-hover:text-white/65"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="relative mt-7 h-px overflow-hidden bg-white/[0.05]">
        <div className="h-full w-1/4 bg-gradient-to-r from-transparent via-violet-400/40 to-transparent transition-all duration-500 group-hover:w-1/2" />
      </div>
    </div>
  );
}

function TechNode({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <span
      className={`rounded-full border px-3 py-2 text-[8px] tracking-[0.16em] transition-colors duration-300 ${
        active
          ? "border-violet-400/20 bg-violet-400/[0.08] text-violet-300/75"
          : "border-white/[0.07] bg-white/[0.02] text-white/30"
      }`}
    >
      {label}
    </span>
  );
}

function ExperienceItem({
  number,
  title,
  description,
  last = false,
}: {
  number: string;
  title: string;
  description: string;
  last?: boolean;
}) {
  return (
    <article className={`group relative pl-0 sm:pl-10 ${last ? "" : "pb-2"}`}>
      <div
        aria-hidden="true"
        className="absolute left-0 top-7 hidden h-3 w-3 items-center justify-center rounded-full border border-violet-400/40 bg-[#050507] sm:flex"
      >
        <div className="h-1 w-1 rounded-full bg-violet-400/80 transition-all duration-500 group-hover:scale-[1.8] group-hover:bg-violet-300" />
      </div>

      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.07] bg-white/[0.025] p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-violet-400/[0.18] hover:bg-violet-400/[0.035] sm:p-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-violet-500/[0.06] blur-[50px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        <div className="relative flex items-start gap-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-black/20">
            <span className="text-[9px] tracking-[0.12em] text-violet-300/60">
              {number}
            </span>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-[8px] tracking-[0.2em] text-white/20">
                  TECHNIK NEST
                </p>

                <h3 className="mt-2 text-base font-medium tracking-[-0.02em] text-white/90 sm:text-lg">
                  {title}
                </h3>
              </div>

              <span className="rounded-full border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-[8px] tracking-[0.14em] text-white/20 transition-colors duration-300 group-hover:border-violet-400/[0.12] group-hover:text-violet-300/50">
                DEVELOPMENT
              </span>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/40">
              {description}
            </p>
          </div>
        </div>

        <div className="relative mt-5 h-px overflow-hidden bg-white/[0.05]">
          <div className="h-full w-12 bg-gradient-to-r from-violet-400/0 via-violet-400/45 to-violet-400/0 transition-all duration-700 group-hover:w-28" />
        </div>
      </div>
    </article>
  );
}

function ProjectCard({
  number,
  title,
  category,
  description,
  technologies,
  featured = false,
}: {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/[0.18] hover:bg-violet-400/[0.035] sm:p-7 ${
        featured ? "lg:col-span-7 lg:row-span-2 lg:min-h-[560px]" : "lg:col-span-5 lg:min-h-[270px]"
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-500/[0.055] blur-[75px] transition-all duration-700 group-hover:bg-violet-500/[0.11]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_25%,rgba(167,139,250,0.045)_50%,transparent_75%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-black/20 text-[9px] tracking-[0.12em] text-violet-300/60">
              {number}
            </span>

            {featured && (
              <span className="rounded-full border border-violet-400/[0.12] bg-violet-400/[0.04] px-2.5 py-1 text-[8px] tracking-[0.15em] text-violet-300/45">
                FEATURED
              </span>
            )}
          </div>

          <span className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-[8px] tracking-[0.15em] text-white/25">
            {category}
          </span>
        </div>

        {featured ? (
          <div className="relative mt-auto pt-20">
            <div className="mb-8 flex h-40 items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/[0.06] bg-black/20 sm:h-52">
              <div className="relative h-24 w-24 rounded-full border border-violet-300/20 sm:h-32 sm:w-32">
                <div className="absolute inset-3 rounded-full border border-white/[0.07]" />
                <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/70 shadow-[0_0_24px_rgba(167,139,250,0.55)]" />
                <div className="absolute left-1/2 top-1/2 h-[140%] w-px -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gradient-to-b from-transparent via-violet-300/25 to-transparent" />
                <div className="absolute left-1/2 top-1/2 h-[140%] w-px -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-gradient-to-b from-transparent via-violet-300/15 to-transparent" />
              </div>
            </div>

            <p className="text-[9px] tracking-[0.22em] text-white/20">
              PERSONAL SYSTEM / 001
            </p>

            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white/90 sm:text-4xl">
              {title}
            </h3>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
              {description}
            </p>
          </div>
        ) : (
          <div className="relative mt-10">
            <p className="text-[9px] tracking-[0.22em] text-white/20">
              PROJECT / {number}
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-white/90">
              {title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/40">
              {description}
            </p>
          </div>
        )}

        <div className="relative mt-auto pt-8">
          <div className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/[0.07] bg-black/10 px-3 py-1.5 text-[9px] tracking-[0.06em] text-white/35 transition-colors duration-300 group-hover:border-violet-400/[0.12] group-hover:text-white/60"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4">
            <span className="text-[8px] tracking-[0.2em] text-white/20">
              SELECTED PROJECT
            </span>

            <span className="text-sm text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-violet-300/70">
              ↗
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

function JourneyItem({
  number,
  status,
  title,
  description,
  active = false,
  featured = false,
  last = false,
}: {
  number: string;
  status: string;
  title: string;
  description: string;
  active?: boolean;
  featured?: boolean;
  last?: boolean;
}) {
  return (
    <article className={`group relative pl-10 sm:pl-14 ${last ? "" : ""}`}>
      <span
        aria-hidden="true"
        className={`absolute left-[13px] top-7 z-10 h-3 w-3 rounded-full border sm:left-[17px] ${
          active
            ? "border-violet-200/70 bg-violet-300 shadow-[0_0_0_5px_rgba(167,139,250,0.08),0_0_18px_rgba(167,139,250,0.55)]"
            : "border-white/20 bg-[#0b0b10] group-hover:border-violet-300/50"
        }`}
      />
      <div className={`relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 sm:rounded-3xl sm:p-6 ${
        featured
          ? "border-violet-300/[0.22] bg-violet-400/[0.055] shadow-[inset_0_0_35px_rgba(139,92,246,0.035)] hover:border-violet-300/35"
          : active
            ? "border-white/[0.10] bg-white/[0.035] hover:border-violet-300/20 hover:bg-white/[0.05]"
            : "border-white/[0.06] bg-black/[0.12] hover:border-white/[0.12] hover:bg-white/[0.025]"
      }`}>
        {featured && <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-violet-300/60 to-transparent" />}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
          <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-[9px] tracking-[0.12em] ${
            active ? "border-violet-300/20 bg-violet-300/[0.07] text-violet-200/75" : "border-white/[0.07] bg-white/[0.02] text-white/30"
          }`}>
            {number}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <h3 className={`text-lg font-medium tracking-[-0.025em] sm:text-xl ${featured ? "text-white/95" : "text-white/80"}`}>
                {title}
              </h3>
              <span className={`rounded-full border px-2.5 py-1 text-[7px] tracking-[0.15em] ${
                active ? "border-violet-300/[0.15] bg-violet-300/[0.04] text-violet-200/60" : "border-white/[0.07] text-white/25"
              }`}>
                {status}
              </span>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/40 sm:text-[15px]">{description}</p>
          </div>
          <span aria-hidden="true" className={`hidden pt-1 text-sm transition-transform duration-300 group-hover:translate-x-1 sm:block ${active ? "text-violet-300/55" : "text-white/15"}`}>↗</span>
        </div>
      </div>
    </article>
  );
}

function ContactDetail({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="block text-[9px] tracking-[0.2em] text-white/25">
        {label}
      </span>

      <span className="mt-2 block text-sm text-white/70 transition-colors duration-300 group-hover:text-violet-300">
        {value}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="group block border-b border-white/[0.06] pb-5 last:border-0 last:pb-0"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="group border-b border-white/[0.06] pb-5 last:border-0 last:pb-0">
      {content}
    </div>
  );
}

function ResumeStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-black/10 p-4">
      <span className="block text-[8px] tracking-[0.18em] text-white/20">
        {label}
      </span>
      <span className="mt-2 block text-[10px] tracking-[0.08em] text-white/60">
        {value}
      </span>
    </div>
  );
}

function PlaceholderLink({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[9px] tracking-[0.15em] text-white/30">
      {label}
    </span>
  );
}

function PortfolioSection({
  id,
  number,
  title,
  description,
}: {
  id: string;
  number: string;
  title: string;
  description: string;
}) {
  return (
    <section
      id={id}
      className="min-h-[70vh] border-t border-white/[0.06] px-6 py-32 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 flex items-center gap-3 text-[10px] tracking-[0.25em] text-violet-300/60">
          <span>{number}</span>

          <span className="h-px w-8 bg-violet-400/30" />

          <span>SECTION</span>
        </div>

        <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
          {title}
        </h2>

        <p className="mt-5 max-w-xl text-base leading-7 text-white/40">
          {description}
        </p>
      </div>
    </section>
  );
}