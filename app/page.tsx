import { CopyEmail } from "./components/copy-email";
import { NameCycle } from "./components/name-cycle";

type Item = {
  year?: string;
  label: string;
  href?: string;
  description?: string;
  external?: boolean;
};

const currently: Item[] = [
  {
    label: "RaventHQ",
    href: "https://raventhq.xyz",
    description: "Building tools, mostly the AI-shaped ones.",
    external: true,
  },
  {
    label: "Serverpod",
    href: "https://serverpod.dev",
    description: "Developer relations.",
    external: true,
  },
  {
    label: "Juicyway",
    href: "https://juicyway.com",
    description: "Consulting on the cross-border mobile app.",
    external: true,
  },
  {
    label: "Instalog",
    href: "https://instalog.dev",
    description: "AI code review on GitHub. A side thing.",
    external: true,
  },
];

const work: Item[] = [
  {
    year: "2026",
    label: "Instalog",
    href: "https://instalog.dev",
    description:
      "AI code reviewer for GitHub. Rust, with a Semgrep gate up front so the bill stays small.",
    external: true,
  },
  {
    year: "2026",
    label: "another",
    href: "https://github.com/zfinix/another",
    description:
      "Tauri + Rust desktop app that mirrors and controls Android devices over USB.",
    external: true,
  },
  {
    year: "2026",
    label: "OpenChow",
    href: "https://github.com/zfinix/openchow",
    description:
      "Reverse-engineered MCP servers for Chowdeck, Glovo, and Mano.",
    external: true,
  },
  {
    year: "2025",
    label: "SuperNote",
    href: "https://supernote.app",
    description: "A note-taking app I built, my own thing.",
    external: true,
  },
  {
    year: "2025",
    label: "Tikfetch",
    href: "https://tikfetch.com",
    description: "TikTok video downloader. Web, mobile, and an API.",
    external: true,
  },
  {
    year: "2025",
    label: "mcp_server_dart",
    href: "https://github.com/zfinix/mcp_server_dart",
    description: "Annotation-driven MCP framework for Dart.",
    external: true,
  },
  {
    year: "2024",
    label: "nigerian_banks_signal",
    href: "https://github.com/zfinix/nigerian_banks_signal",
    description:
      "A small MVVM example using Signals + Dio to fetch every Nigerian bank.",
    external: true,
  },
  {
    year: "2023",
    label: "irev-results",
    href: "https://github.com/zfinix/irev-results",
    description:
      "Scraping INEC's IREV portal to track Nigerian election results in real time.",
    external: true,
  },
  {
    year: "2022",
    label: "worddle",
    href: "https://github.com/zfinix/worddle",
    description:
      "A Wordle clone in Flutter, written the week the original blew up.",
    external: true,
  },
  {
    year: "2021",
    label: "awesome-dart-web3",
    href: "https://github.com/zfinix/awesome-dart-web3",
    description:
      "A list of Web3 tools for Dart and Flutter. Some people seem to like it.",
    external: true,
  },
  {
    year: "2021",
    label: "arduino_projects",
    href: "https://github.com/zfinix/arduino_projects",
    description:
      "A pile of Flutter + Arduino experiments. Software pretending to know hardware.",
    external: true,
  },
  {
    year: "2020",
    label: "dataoversound",
    href: "https://github.com/zfinix/dataoversound",
    description: "Sending data across a room as sound, in Dart.",
    external: true,
  },
];

const talks: Item[] = [
  {
    year: "2025",
    label:
      "Building an AI Chat CLI in Dart: Real-Time Conversations with Gemini + OpenRouter",
    description: "Build With AI, Flutter Lagos.",
    href: "https://x.com/chiziaruhoma/status/1948703061137915924",
    external: true,
  },
  {
    year: "2022",
    label: "DevFest Lagos",
    description: "Speaker.",
  },
  {
    year: "2021",
    label: "Flutter Architecture with Riverpod",
    description: "DevFest Lagos.",
    href: "https://www.youtube.com/watch?v=yNwUj9Xnxpw",
    external: true,
  },
  {
    year: "2020",
    label: "DevFest Lagos",
    description: "First big-audience talk.",
  },
];

const writing: Item[] = [
  {
    year: "2025",
    label: "Building an MCP in Rust",
    href: "https://chiziaruhoma.substack.com/p/building-an-mcp-in-rust",
    external: true,
  },
  {
    year: "2025",
    label: "Why I'm Betting on Rust and AI",
    href: "https://chiziaruhoma.substack.com/p/why-im-betting-on-rust-and-ai",
    external: true,
  },
  {
    year: "2025",
    label: "Job Hunting in Nigeria: A Harsh Reality",
    href: "https://chiziaruhoma.substack.com/p/job-hunting-in-nigeria-a-harsh-reality-c32cb2be4017",
    external: true,
  },
  {
    year: "2024",
    label: "Flutter Mobile Security: 5 easy steps to secure your app",
    href: "https://chiziaruhoma.substack.com/p/flutter-mobile-security-5-easy-steps-to-secure-your-app-5d16cfa898b9",
    external: true,
  },
  {
    year: "2023",
    label: "Building a Chrome Extension with Flutter",
    href: "https://chiziaruhoma.substack.com/p/building-a-chrome-extension-with-flutter-751e0674df09",
    external: true,
  },
  {
    year: "2023",
    label: "Building a Tweet Screenshot API with Dart Frog & Puppeteer",
    href: "https://chiziaruhoma.substack.com/p/building-a-tweet-screenshot-api-with-dart-frog-puppeteer-7e8da301dd32",
    external: true,
  },
  {
    year: "2022",
    label: "Flutter Web3: Smart Contract Interaction in Dart",
    href: "https://chiziaruhoma.substack.com/p/flutter-web3-smart-contract-interaction-in-dart-5669595a0068",
    external: true,
  },
  {
    year: "2022",
    label: "Flutter Web3: Working with the Ethereum Name Service",
    href: "https://chiziaruhoma.substack.com/p/flutter-web3-working-with-the-ethereum-name-service-4fc2d8cfb3f",
    external: true,
  },
  {
    year: "2021",
    label: "Flutter IoT Series: Interfacing a 16X2 LCD with WeMos D1-R1",
    href: "https://chiziaruhoma.substack.com/p/flutter-iot-series-interfacing-a-16x2-lcd-with-wemos-d1-r1-7e16b1e7e9c0",
    external: true,
  },
  {
    year: "2021",
    label: "Baby Steps to Becoming Senior",
    href: "https://chiziaruhoma.substack.com/p/baby-steps-to-becoming-senior-158de706a2a0",
    external: true,
  },
  {
    year: "2021",
    label: "Top CI/CD providers for Flutter",
    href: "https://chiziaruhoma.substack.com/p/top-ci-cd-providers-for-flutter-e47445a3cfa3",
    external: true,
  },
  {
    year: "2020",
    label: "Beyond UI: Flutter + Socket.io: Real-time Communication",
    href: "https://chiziaruhoma.substack.com/p/beyond-ui-flutter-socket-io-real-time-communication-35301d9c60cd",
    external: true,
  },
];

const elsewhere: Item[] = [
  { label: "GitHub", href: "https://github.com/zfinix", external: true },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/chiziaruhoma",
    external: true,
  },
  { label: "X", href: "https://x.com/zfinix", external: true },
];

function ExternalArrow() {
  return (
    <svg
      className="w-3 h-3 flex-shrink-0 ml-1 inline-block"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 17L17 7M7 7h10v10"
      />
    </svg>
  );
}

function ItemLink({ item }: { item: Item }) {
  if (!item.href) {
    return <span className="text-[14px]">{item.label}</span>;
  }
  return (
    <a
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      className="link-underline inline-flex items-baseline w-fit text-[14px]"
    >
      <span>{item.label}</span>
      {item.external && <ExternalArrow />}
    </a>
  );
}

function ItemRow({ item }: { item: Item }) {
  return (
    <div className="flex flex-col gap-1">
      <ItemLink item={item} />
      {item.description && (
        <div className="text-gray-600 text-[12px] leading-relaxed">
          {item.description}
        </div>
      )}
    </div>
  );
}

function YearRow({ item }: { item: Item }) {
  return (
    <div className="md:grid md:grid-cols-[1fr_200px] md:gap-12 flex flex-col gap-1">
      <div className="flex flex-col gap-1 min-w-0">
        <ItemLink item={item} />
        {item.description && (
          <div className="text-gray-600 text-[12px] leading-relaxed">
            {item.description}
          </div>
        )}
      </div>
      <div className="text-black text-[12px] tabular-nums md:pt-[3px]">
        {item.year}
      </div>
    </div>
  );
}

function Section({
  label,
  children,
  tight,
}: {
  label: string;
  children: React.ReactNode;
  tight?: boolean;
}) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-black font-semibold text-[16px]">{label}</h2>
      <div className={`flex flex-col ${tight ? "gap-1" : "gap-4"}`}>
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <hr className="max-w-3xl mx-auto border-gray-200" />

      <main className="max-w-3xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="flex flex-col gap-16">
          <div className="md:grid md:grid-cols-[1fr_200px] md:gap-12 flex flex-col gap-12">
            <section className="flex flex-col gap-7">
              <div>
                <div className="text-[14px] text-gray-500 leading-none mb-3">
                  I&apos;m
                </div>
                <div className="text-[56px] md:text-[80px] font-medium tracking-[-0.045em] leading-[0.95]">
                  <NameCycle />
                  <span className="text-gray-300">.</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 max-w-prose text-[14px] leading-[1.65]">
                <p>
                  I build AI tools and the apps that put them in front of
                  people. Mostly with Expo and Rust now, after years of Flutter
                  and Dart before that.
                </p>
                <p>
                  I&apos;m at my best taking a messy product idea and turning it
                  into something people actually use end to end. Native code,
                  backends, shipping, the whole thing.
                </p>
                <p>
                  I&apos;ve spent the last ten years doing this across
                  fintech, consumer apps, and a stretch of Web3, on small
                  founding teams and as a solo developer.
                </p>
                <p>
                  Outside of work I reverse engineer apps for fun,
                  contribute to open source, and build small things just to see
                  if I can.
                </p>
              </div>
            </section>

            <aside className="md:pt-3">
              <Section label="Now">
                {currently.map((item) => (
                  <ItemRow key={item.label} item={item} />
                ))}
              </Section>
            </aside>
          </div>

          <Section label="Built">
            {work.map((item) => (
              <YearRow key={item.label} item={item} />
            ))}
          </Section>

          <Section label="Said">
            {talks.map((item) => (
              <YearRow key={item.label} item={item} />
            ))}
          </Section>

          <Section label="Written">
            {writing.map((item) => (
              <YearRow key={item.label} item={item} />
            ))}
          </Section>

          <Section label="Find me" tight>
            {elsewhere.map((item) => (
              <ItemLink key={item.label} item={item} />
            ))}
            <CopyEmail />
          </Section>
        </div>
      </main>

      <footer className="max-w-3xl mx-auto px-6 md:px-10 pb-10 pt-6 border-t border-gray-200 text-gray-400 text-[12px] flex justify-between">
        <span>© Chizi Ogbonda</span>
        <span>Last updated 2026</span>
      </footer>
    </div>
  );
}
