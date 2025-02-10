"use client"

import { useState, useEffect } from "react"
import TerminalPrompt from "./components/terminal-prompt"
import TerminalOutput from "./components/terminal-output"
import TerminalInput from "./components/terminal-input"

const resumeData = {
  name: "CHIZIARUHOMA OGBONDA",
  contact: {
    email: "chiziaruhoma@gmail.com",
    website: "g.dev/chizi",
    linkedin: "linkedin.com/in/chiziaruhoma",
    github: "github.com/zfinix",
  },
  title: "SENIOR SOFTWARE ENGINEER",
  summary:
    "Google Developer Expert (GDE) | Blockchain & Fintech Specialist | Mobile Architecture Leader\n7+ years of experience delivering scalable DeFi, Web3, and mobile solutions. Recognized for technical leadership, open-source contributions, and driving 300%+ user growth in fintech applications.",
  skills: [
    "Blockchain & Web3: Smart Contracts (Solidity, Rust), Zero-Knowledge Proofs (ZKP), Cosmos SDK, Cardano, DeFi",
    "Mobile Development: Flutter/Dart (GDE), Kotlin, Swift, Clean Architecture, UI/UX Optimization",
    "Leadership: Agile Team Leadership (5+ engineers), Cross-Functional Collaboration, SDLC Management",
    "Fintech Expertise: Regulatory Compliance (EU/GDPR), Financial Systems, Digital Wallets, Cryptocurrency",
  ],
  experience: [
    {
      company: "Unbox Universe (NBX)",
      position: "Senior Mobile Developer",
      period: "Mar 2023 – Present",
      achievements: [
        "Led a team of 3 engineers in developing blockchain-integrated mobile solutions for sustainable infrastructure.",
        "Architected a Smart Battery Passport system on the Cardano blockchain, aligning with EU 2026 compliance.",
        "Developed a digital wallet system managing over $500,000 in SAMHSA grant distributions.",
        "Contributed to Unbox Universe's growth, leading to a €12 million Series A funding round led by HSBC Asset Management.",
        "Integrated Zero-Knowledge Proofs (ZKP) for secure supply chain data sharing, reducing vulnerabilities by 40%.",
        "Engineered waste management infrastructure for 2M+ Gaza residents, reducing operational costs by 25%.",
      ],
    },
    {
      company: "Juicyway Inc.",
      position: "Senior Product Engineer",
      period: "Jan 2021 – Present",
      achievements: [
        "Sole engineer responsible for developing and maintaining the company's fintech applications using Flutter/Dart, ensuring regulatory compliance.",
        "Single handedly designed and implemented responsive UI/UX for multiple financial applications with a super performant and optimized user experience.",
        "Implemented security protocols to ensure strict compliance with SOC, Government and Regulated Compliace Bodies",
        "Collaborated with QA teams to uphold high software quality standards, resulting in a robust and reliable product.",
        "Was a key contributor to Juicyway's growth, supporting over 3,000 customers across Nigeria, the US, Nigeria, Canada, and a dozen other countries, providing seamless cross-border payment solutions.",
        "Instrumental in Juicyway's successful $3 million pre-seed funding round, aimed at expanding marketing, business development, and technological improvements.",
      ],
    },
    {
      company: "Eden Life Inc.",
      position: "Lead Mobile Developer",
      period: "Dec 2021 – Sep 2023",
      achievements: [
        "Revamped the core Flutter/Dart mobile application, leading to a 96% improvement in onboarding completion.",
        "Spearheaded a Product-Led Growth initiative, increasing user signups by 300%.",
        "Reduced onboarding time from 24 minutes to just 4 minutes, achieving a 95.05% conversion rate.",
        "Integrated GetStream SDK-based chat system to support over 300 daily customer conversations.",
        "Played a key role in Eden Life's expansion, contributing to its growth to 99 employees and services across Nigeria and Kenya.",
      ],
    },
    {
      company: "Tendermint Inc.",
      position: "Senior Mobile Engineer, DevX",
      period: "Feb 2022 – Aug 2022",
      achievements: [
        "Developed Flutter/Dart SDKs for seamless integration with the Cosmos blockchain, enhancing the developer experience.",
        "Built secure transaction signing modules and gRPC API implementations for blockchain networks, ensuring robust and efficient communication.",
        "Led technical discovery and solution design in an Agile development environment, fostering innovation and rapid iteration.",
        "Contributed to the development of Starport, an all-in-one platform for developers to build and launch any crypto app on a sovereign blockchain.",
        "Supported the rollout of Emeris, a platform enabling users to benefit from cross-chain DeFi, including features like staking, an airdrop tracker, and a cross-chain DEX aggregator.",
      ],
    },
    {
      company: "Bottlepay Inc. (Acquired)",
      position: "Senior Mobile Developer",
      period: "January 2021 - March 2022",
      achievements: [
        "Designed and implemented cryptocurrency and blockchain payment features using Flutter/Dart, enhancing the app's functionality and user experience.",
        "Developed an in-app referral system adopted by over 6,000 users across the EU/UK, contributing to user acquisition and engagement.",
        "Created an in-house Flutter package repository for blockchain integrations, streamlining development processes and promoting code reuse.",
        "Applied Test-Driven Development (TDD) methodology, ensuring robust code quality and security.",
        "Contributed to Bottlepay's growth, leading to its acquisition by NYDIG in November 2021 for approximately $300 million.",
      ],
    },
  ],
  education: [
    {
      institution: "University of London",
      degree: "Computer Science (1 year completed)",
      period: "2020 – 2021",
      details:
        "Studied Computer Science at the University of London before transitioning into full-time software engineering, accumulating 5+ years of hands-on industry experience.",
    },
  ],
  certifications: [
    {
      title: "Google Developer Expert (GDE) - Flutter & Dart",
      period: "2020 – Present",
    },
  ],
}

const themes = {
  default: {
    bg: "bg-black",
    text: "text-green-400",
    promptColor: "text-white",
    highlightColor: "text-yellow-400",
    name: "Default (Green on Black)",
  },
  solarized: {
    bg: "bg-[#002b36]",
    text: "text-[#839496]",
    promptColor: "text-[#b58900]",
    highlightColor: "text-[#cb4b16]",
    name: "Solarized Dark",
  },
  monokai: {
    bg: "bg-[#272822]",
    text: "text-[#f8f8f2]",
    promptColor: "text-[#a6e22e]",
    highlightColor: "text-[#f92672]",
    name: "Monokai",
  },
  dracula: {
    bg: "bg-[#282a36]",
    text: "text-[#f8f8f2]",
    promptColor: "text-[#ff79c6]",
    highlightColor: "text-[#50fa7b]",
    name: "Dracula",
  },
}

export default function Page() {
  const [output, setOutput] = useState<JSX.Element[]>([])
  const [currentPath, setCurrentPath] = useState("~")
  const [currentTheme, setCurrentTheme] = useState<keyof typeof themes>("default")

  useEffect(() => {
    if (output.length === 0) {
      addOutput(
        <TerminalOutput theme={themes[currentTheme]}>
          Welcome to Chiziaruhoma's interactive resume! Type 'help' for available commands.
        </TerminalOutput>,
      )
    }
  }, [currentTheme, output.length])

  const addOutput = (newOutput: JSX.Element) => {
    setOutput((prev) => [...prev, newOutput])
  }

  const handleCommand = (command: string) => {
    addOutput(
      <TerminalPrompt theme={themes[currentTheme]}>
        {currentPath}$ {command}
      </TerminalPrompt>,
    )

    const commandParts = command.split(" ")
    const mainCommand = commandParts[0].toLowerCase()

    switch (mainCommand) {
      case "help":
        addOutput(
          <TerminalOutput theme={themes[currentTheme]}>
            Available commands:
            <ul className="list-disc list-inside">
              <li>
                <strong>summary</strong>: <span className="text-gray-400">Display a brief summary</span>
              </li>
              <li>
                <strong>skills</strong>: <span className="text-gray-400">List core competencies</span>
              </li>
              <li>
                <strong>experience</strong>: <span className="text-gray-400">Show work experience</span>
              </li>
              <li>
                <strong>education</strong>: <span className="text-gray-400">Show education details</span>
              </li>
              <li>
                <strong>certifications</strong>: <span className="text-gray-400">List certifications</span>
              </li>
              <li>
                <strong>contact</strong>: <span className="text-gray-400">Display contact information</span>
              </li>
              <li>
                <strong>theme</strong>: <span className="text-gray-400">Change the color scheme</span>
              </li>
              <li>
                <strong>clear</strong>: <span className="text-gray-400">Clear the terminal</span>
              </li>
            </ul>
          </TerminalOutput>,
        )
        break
      case "summary":
        addOutput(<TerminalOutput theme={themes[currentTheme]}>{resumeData.summary}</TerminalOutput>)
        break
      case "skills":
        addOutput(
          <TerminalOutput theme={themes[currentTheme]}>
            <ul className="list-disc list-inside">
              {resumeData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </TerminalOutput>,
        )
        break
      case "experience":
        resumeData.experience.forEach((job) => {
          addOutput(
            <TerminalOutput theme={themes[currentTheme]}>
              <div className="font-bold">
                {job.company} | {job.position}
              </div>
              <div>{job.period}</div>
              <ul className="list-disc list-inside">
                {job.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </TerminalOutput>,
          )
        })
        break
      case "education":
        resumeData.education.forEach((edu) => {
          addOutput(
            <TerminalOutput theme={themes[currentTheme]}>
              <div className="font-bold">{edu.institution}</div>
              <div>
                {edu.degree} | {edu.period}
              </div>
              <div>{edu.details}</div>
            </TerminalOutput>,
          )
        })
        break
      case "certifications":
        addOutput(
          <TerminalOutput theme={themes[currentTheme]}>
            <ul className="list-disc list-inside">
              {resumeData.certifications.map((cert, index) => (
                <li key={index}>
                  {cert.title} | {cert.period}
                </li>
              ))}
            </ul>
          </TerminalOutput>,
        )
        break
      case "contact":
        addOutput(
          <TerminalOutput theme={themes[currentTheme]}>
            <ul className="list-none">
              <li>Email: {resumeData.contact.email}</li>
              <li>Website: {resumeData.contact.website}</li>
              <li>LinkedIn: {resumeData.contact.linkedin}</li>
              <li>GitHub: {resumeData.contact.github}</li>
            </ul>
          </TerminalOutput>,
        )
        break
      case "theme":
        const themeNames = Object.keys(themes)
        if (commandParts[1] && themeNames.includes(commandParts[1])) {
          setCurrentTheme(commandParts[1] as keyof typeof themes)
          addOutput(
            <TerminalOutput theme={themes[currentTheme]}>
              Theme changed to {themes[commandParts[1] as keyof typeof themes].name}
            </TerminalOutput>,
          )
        } else {
          addOutput(
            <TerminalOutput theme={themes[currentTheme]}>
              Available themes:
              <ul className="list-disc list-inside">
                {themeNames.map((theme) => (
                  <li key={theme}>
                    <strong>{theme}</strong>: {themes[theme as keyof typeof themes].name}
                  </li>
                ))}
              </ul>
              Usage: theme [theme-name]
            </TerminalOutput>,
          )
        }
        break
      case "clear":
        setOutput([])
        break
      default:
        addOutput(
          <TerminalOutput theme={themes[currentTheme]}>
            Command not recognized. Type <strong>help</strong> for available commands.
          </TerminalOutput>,
        )
    }
  }

  return (
    <div
      className={`min-h-screen ${themes[currentTheme].bg} ${themes[currentTheme].text} font-mono p-4 pt-16 overflow-auto cascadia-code`}
    >
      <div className="max-w-2xl mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl font-bold">{resumeData.name}</h1>
          <h2 className="text-xl">{resumeData.title}</h2>
        </header>

        <main>
          {output.map((out, index) => (
            <div key={index}>{out}</div>
          ))}
        </main>

        <TerminalInput onCommand={handleCommand} currentPath={currentPath} theme={themes[currentTheme]} />
      </div>
    </div>
  )
}
;<style jsx global>{`
  .cascadia-code {
    font-family: 'Cascadia Code', monospace;
  }
`}</style>

