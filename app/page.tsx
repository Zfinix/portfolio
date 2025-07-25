"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import { GithubIcon, LinkedinIcon, MailIcon, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { LinkPreview } from "./components/link-preview"
import {
  Flutter,
  Preact,
  TypeScript,
  Supabase,
  Redis,
  Kotlin,
  Swift,
  Dart,
  PostgreSQL,
  DigitalOcean,
  Nextjs,
  Java,
  JavaScript,
  Vue,
  Cloudflare,
  Docker,
  MySQL,
  SQLite,
  MongoDB,
  HuggingFace,
  Gemini,
  RustDark,
  RustLight
} from "@ridemountainpig/svgl-react"
import ElevenLabs from "./logos/eleven-labs"

export default function Home() {
  const { setTheme, theme } = useTheme()

  return (
    <main className="text-zinc-900 dark:text-zinc-100 max-w-xl mx-auto px-4 py-4 min-h-screen flex flex-col justify-between">
      <div>
        <section className="mb-6">
          <h1 className="text-xl font-medium tracking-tight mt-4mb-4 flex items-baseline justify-between">
            <span>Hey, I&apos;m Chizi</span>
            <button
              className="w-8 h-8 flex items-center justify-center rounded-md bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>
          </h1>

          <div className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mb-8">
            Senior Engineer with 8+ years building high-impact mobile platforms, cross-platform SDKs, and AI-powered developer tools. Currently building{" "}
            <LinkPreview url="https://supernote.app">
              <span className="text-zinc-900 dark:text-zinc-100 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                SuperNote
              </span>
            </LinkPreview>{" "}
            and{" "}
            <LinkPreview url="https://instalog.dev">
              <span className="text-zinc-900 dark:text-zinc-100 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                Instalog
              </span>
            </LinkPreview>.
          </div>

          <div className="flex items-center gap-5">
            <div className="flex flex-row gap-4">
              <a
                target="_blank"
                className="overflow-hidden transition-all text-zinc-900/60 dark:text-zinc-100/60 hover:text-zinc-900/100 dark:hover:text-zinc-100/100"
                href="mailto:chizi@supernote.app"
              >
                <MailIcon className="h-5 w-5" />
                <p className="sr-only">email</p>
              </a>
              <LinkPreview url="https://github.com/zfinix">
                <span className="overflow-hidden transition-all text-zinc-900/60 dark:text-zinc-100/60 hover:text-zinc-900/100 dark:hover:text-zinc-100/100">
                  <GithubIcon className="h-5 w-5" />
                  <p className="sr-only">github</p>
                </span>
              </LinkPreview>
              <LinkPreview url="https://linkedin.com/in/chiziaruhoma">
                <span className="overflow-hidden transition-all text-zinc-900/60 dark:text-zinc-100/60 hover:text-zinc-900/100 dark:hover:text-zinc-100/100">
                  <LinkedinIcon className="h-5 w-5" />
                  <p className="sr-only">linkedin</p>
                </span>
              </LinkPreview>
            </div>
          </div>
        </section>

        <Tabs defaultValue="projects" className="flex flex-col gap-2">
          <TabsList className="text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg mb-4 border-none bg-transparent p-0 -ml-[8px]">
            <TabsTrigger
              value="projects"
              className="!bg-transparent !border-none !shadow-none !font-light data-[state=active]:!font-bold transition-all duration-300 ease-out !text-neutral-400 dark:!text-neutral-400 data-[state=active]:!text-neutral-800 dark:data-[state=active]:!text-neutral-100"
            >
              Projects
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className="!bg-transparent !border-none !shadow-none !font-light data-[state=active]:!font-bold transition-all duration-300 ease-out !text-neutral-400 dark:!text-neutral-400 data-[state=active]:!text-neutral-800 dark:data-[state=active]:!text-neutral-100"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="tools"
              className="!bg-transparent !border-none !shadow-none !font-light data-[state=active]:!font-bold transition-all duration-300 ease-out !text-neutral-400 dark:!text-neutral-400 data-[state=active]:!text-neutral-800 dark:data-[state=active]:!text-neutral-100"
            >
              Tools
            </TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="flex-1 outline-none">
            <section className="mb-12">
              <div className="space-y-8">
                <ul className="space-y-8">
                  <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-md font-medium">SuperNote</h3>
                      <div className="flex flex-row gap-2">
                        <LinkPreview url="https://github.com/zfinix/supernote">
                          <span className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                            GitHub
                          </span>
                        </LinkPreview>
                        <LinkPreview url="https://supernote.app">
                          <span className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                            View
                          </span>
                        </LinkPreview>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                      An AI-first study tool that converts YouTube, TikTok, PDFs, and voice into structured notes, quizzes, and flashcards.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-1">
                        <Flutter className="w-4 h-4" />
                        <span className="text-xs text-zinc-400 dark:text-zinc-500">Flutter</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Preact className="w-4 h-4" />
                        <span className="text-xs text-zinc-400 dark:text-zinc-500">React</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TypeScript className="w-4 h-4" />
                        <span className="text-xs text-zinc-400 dark:text-zinc-500">TypeScript</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Supabase className="w-4 h-4" />
                        <span className="text-xs text-zinc-400 dark:text-zinc-500">Supabase</span>
                      </div>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500">OpenRouter</span>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500">LangChain</span>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500">ElevenLabs</span>
                    </div>
                  </li>

                  <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-md font-medium">Instalog</h3>
                      <div className="flex flex-row gap-2">
                        <LinkPreview url="https://github.com/zfinix/instalog">
                          <span className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                            GitHub
                          </span>
                        </LinkPreview>
                        <LinkPreview url="https://instalog.dev">
                          <span className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                            View
                          </span>
                        </LinkPreview>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                      A real-time logging, crash reporting, and AI debugging SDK built with mobile-native integrations; serving 10K+ sessions/week across platforms.
                    </p>
                    <div className="flex flex-wrap gap-2">

                      <div className="flex items-center gap-1">
                        {theme === "dark" ? (
                          <RustDark className="w-4 h-4" />
                        ) : (
                          <RustLight className="w-4 h-4 text-zinc-700" />
                        )}
                        <span className="text-xs text-zinc-400 dark:text-zinc-500">Rust</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Supabase className="w-4 h-4" />
                        <span className="text-xs text-zinc-400 dark:text-zinc-500">Supabase</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Redis className="w-4 h-4" />
                        <span className="text-xs text-zinc-400 dark:text-zinc-500">Redis</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Kotlin className="w-4 h-4" />
                        <span className="text-xs text-zinc-400 dark:text-zinc-500">Kotlin</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Swift className="w-4 h-4" />
                        <span className="text-xs text-zinc-400 dark:text-zinc-500">Swift</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Dart className="w-4 h-4" />
                        <span className="text-xs text-zinc-400 dark:text-zinc-500">Dart</span>
                      </div>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500">React Native</span>
                    </div>
                  </li>

                  <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-md font-medium">Tikfetch</h3>
                      <div className="flex flex-row gap-2">
                        <LinkPreview url="https://tikfetch.xyz">
                          <span className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                            View
                          </span>
                        </LinkPreview>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                      A zero-login TikTok downloader with smart caption parsing and near-zero cold starts; processed over 500K fetches.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-1">
                        <TypeScript className="w-4 h-4" />
                        <span className="text-xs text-zinc-400 dark:text-zinc-500">TypeScript</span>
                      </div>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500">BetterAuth</span>
                      <div className="flex items-center gap-1">
                        <Redis className="w-4 h-4" />
                        <span className="text-xs text-zinc-400 dark:text-zinc-500">Redis</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <PostgreSQL className="w-4 h-4" />
                        <span className="text-xs text-zinc-400 dark:text-zinc-500">PostgreSQL</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DigitalOcean className="w-4 h-4" />
                        <span className="text-xs text-zinc-400 dark:text-zinc-500">DigitalOcean</span>
                      </div>
                    </div>
                  </li>

                  <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-md font-medium">NBX Smart Battery Passport</h3>
                      <div className="flex flex-row gap-2">
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">Enterprise</span>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                      A $500K+ blockchain platform for sustainability and logistics with privacy-preserving modules using ZKPs and secure enclaves.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-1">
                        <Flutter className="w-4 h-4" />
                        <span className="text-xs text-zinc-400 dark:text-zinc-500">Flutter</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Kotlin className="w-4 h-4" />
                        <span className="text-xs text-zinc-400 dark:text-zinc-500">Kotlin</span>
                      </div>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500">Cardano SDKs</span>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500">ZKPs</span>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500">Blockchain</span>
                    </div>
                  </li>

                  <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-md font-medium">Eden Life Mobile App</h3>
                      <div className="flex flex-row gap-2">
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">100K+ MAU</span>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                      Re-architected household services app that cut onboarding time from 24 mins to 4 mins, resulting in a 3× increase in activation rates.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-1">
                        <Flutter className="w-4 h-4" />
                        <span className="text-xs text-zinc-400 dark:text-zinc-500">Flutter</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Kotlin className="w-4 h-4" />
                        <span className="text-xs text-zinc-400 dark:text-zinc-500">Kotlin</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Swift className="w-4 h-4" />
                        <span className="text-xs text-zinc-400 dark:text-zinc-500">Swift</span>
                      </div>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500">GetStream SDK</span>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500">Real-time Chat</span>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </TabsContent>

          <TabsContent value="experience" className="flex-1 outline-none">
            <section className="mb-12">
              <div className="space-y-8">
                <ul className="space-y-8">
                  <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-md font-medium">Founder & Lead Engineer</h3>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">Feb 2025 - Present</span>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">Ravent • Wilmington, DE</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                      Building intelligent SaaS, apps & products. Led development of SuperNote, Instalog, and Tikfetch.xyz serving thousands of users.
                    </p>
                  </li>

                  <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-md font-medium">Lead Software Engineer (Mobile)</h3>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">Jun 2021 - Present</span>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">Juicyway • Lagos, Remote • Contract</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                      Led fintech application development ensuring regulatory compliance. Designed responsive UI/UX and implemented security protocols for SOC compliance. Instrumental in $3M pre-seed funding and supporting 3,000+ customers across multiple countries.
                    </p>
                  </li>

                  <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-md font-medium">Senior Software Engineer</h3>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">Mar 2023 - Feb 2025</span>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">Unbox Universe (NBX) • Remote</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                      Led mobile development for blockchain sustainability platform. Delivered $500K+ smart battery passport across 3 EU countries. Contributed to €12M Series A raise.
                    </p>
                  </li>

                  <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-md font-medium">Lead Mobile Engineer</h3>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">Aug 2022 - Feb 2023</span>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">Eden Life Inc. • Remote</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                      Re-architected mobile app, reducing onboarding time by 83% and boosting weekly active users by 2.6×. Scaled to 100K+ monthly active sessions.
                    </p>
                  </li>

                  <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-md font-medium">Senior Software Engineer</h3>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">Feb 2022 - Aug 2022</span>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">Tendermint (Cosmos) • Las Vegas, NV</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                      Built gRPC SDKs and secure wallet signing features for Cosmos blockchain ecosystem. Contributed to Starport and Emeris platforms.
                    </p>
                  </li>

                  <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-md font-medium">Senior Software Engineer</h3>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">Jan 2021 - Mar 2022</span>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">Bottlepay (Acquired by NYDIG) • Newcastle, UK</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                      Delivered crypto payment flows with hardware signing and multi-sig features. Reduced Bitcoin and Lightning transaction latency by 35%.
                    </p>
                  </li>
                </ul>
              </div>
            </section>
          </TabsContent>

          <TabsContent value="tools" className="flex-1 outline-none">
            <section className="mb-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-md font-medium mb-3">Languages</h3>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2">
                      <Dart className="w-5 h-5" />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">Dart</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TypeScript className="w-5 h-5" />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">TypeScript</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Kotlin className="w-5 h-5" />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">Kotlin</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Swift className="w-5 h-5" />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">Swift</span>
                    </div>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">Rust</span>
                    <div className="flex items-center gap-2">
                      <Java className="w-5 h-5" />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">Java</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <JavaScript className="w-5 h-5" />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">JavaScript</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-md font-medium mb-3">Frameworks & Libraries</h3>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2">
                      <Flutter className="w-5 h-5" />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">Flutter</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Preact className="w-5 h-5" />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">React</span>
                    </div>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">React Native</span>
                    <div className="flex items-center gap-2">
                      <Nextjs className="w-5 h-5" />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">Next.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Swift className="w-5 h-5" />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">SwiftUI</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Vue className="w-5 h-5" />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">Vue</span>
                    </div>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">LangChain</span>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">LangGraph</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-md font-medium mb-3">Cloud & Infrastructure</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">AWS</span>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">GCP</span>
                    <div className="flex items-center gap-2">
                      <Supabase className="w-5 h-5" />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">Supabase</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DigitalOcean className="w-5 h-5" />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">DigitalOcean</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Cloudflare className="w-5 h-5" />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">Cloudflare</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Docker className="w-5 h-5" />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">Docker</span>
                    </div>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">GitHub Actions</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-md font-medium mb-3">Databases</h3>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2">
                      <PostgreSQL className="w-5 h-5" />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">PostgreSQL</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Redis className="w-5 h-5" />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">Redis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MySQL className="w-5 h-5" />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">MySQL</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <SQLite className="w-5 h-5" />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">SQLite</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MongoDB className="w-5 h-5" />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">MongoDB</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-md font-medium mb-3">AI & ML</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">OpenAI</span>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">OpenRouter</span>
                    <div className="flex items-center gap-2">
                      <HuggingFace className="w-5 h-5" />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">HuggingFace</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gemini className="w-5 h-5" />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">Gemini</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ElevenLabs className="w-3 h-3" />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">ElevenLabs</span>
                    </div>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">RAG Pipelines</span>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">Embeddings</span>
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </div>

      <footer className="pt-4 text-xs text-zinc-400 dark:text-zinc-500 flex justify-between items-center">
        <div>chizi.app</div>
        <div>Built with Next.js</div>
      </footer>
    </main>
  )
}
