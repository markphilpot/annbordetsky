import Section from "@/components/Section";
import { Fragment } from "react";

const writing = [
  [
    "2026-01-06",
    "10 Themes for 2026",
    "https://annbordetsky.substack.com/p/10-themes-for-2026"
  ],
  [
    "2025-08-20",
    "Bluefish: The AI Marketing Platform for the Agentic Era",
    "https://www.nea.com/blog/bluefish-the-ai-marketing-platform-for-the-agentic-era",
  ],
  [
    "2025-08-05",
    "August: Configurable Legal AI",
    "https://www.nea.com/blog/august-high-impact-configurable-legal-ai-for-midsize-firms",
  ],
  [
    "2025-07-31",
    "Call for 100x Ideas: AI investment themes",
    "https://www.nea.com/blog/a-call-for-100x-ideas",
  ],
  [
    "2025-06-30",
    "Context is the Currency in Consumer AI",
    "https://www.nea.com/blog/context-in-consumer-ai",
  ],
  [
    "2025-04-25",
    "Glacier: How AI and Robotics are Closing the Loop",
    "https://www.nea.com/blog/glacier-qa-how-ai-robotics-are-closing-the-loop",
  ],
  [
    "2025-02-05",
    "Tomorrow’s Titans: Vertical AI",
    "https://www.nea.com/blog/tomorrows-titans-vertical-ai",
  ],
  [
    "2025-01-30",
    "ElevenLabs: AI’s Natural Interface",
    "https://www.nea.com/blog/elevenlabs-ais-natural-interface",
  ],
  [
    "2025-01-14",
    "Consumer AI: Personalized Intelligence",
    "https://www.nea.com/blog/personalized-intelligence",
  ],
  [
    "2024-11-04",
    "Perplexity: How AI is revolutionizing search",
    "https://www.nea.com/blog/perplexity-qa-revolutionizing-search",
  ],
  [
    "2024-06-13",
    "AI in Consumer: Mental Health",
    "https://www.nea.com/blog/the-current-6-consumer-bottlenecks-in-mental-health",
  ],
  [
    "2024-06-06",
    "Rewriting the Startup Playbook for the Age of AI",
    "https://www.nea.com/blog/4-trends-for-ai-startups-and-generative-ai-companies",
  ],
  [
    "2024-05-03",
    "AI in Consumer: Generative Music",
    "https://www.nea.com/blog/future-of-ai-generated-music-industry-artists-fans",
  ],

  [
    "2024-03-28",
    "Investing in Perplexity AI: The End of Traditional Search",
    "https://www.nea.com/blog/our-investment-in-perplexity-ai-answer-engines-and-the-end-of-traditional-search",
  ],
  [
    "2024-02-14",
    "Creativity is the AI Killer Use Case",
    "https://www.nea.com/blog/creative-ai-use-case",
  ],
  [
    "2024-01-22",
    "The App Layer Strikes Back",
    "https://x.com/annbordetsky/status/1749453246798987627",
  ],
  [
    "2023-07-05",
    "Future of Consumer Social",
    "https://www.nea.com/blog/8-hypotheses-on-the-future-of-consumer-social",
  ],
  [
    "2023-05-04",
    "The Marketplace Building Playbook",
    "https://www.nea.com/blog/the-marketplace-building-playbook",
  ],
];

const talks = [
  [
    "Oct 2025",
    "TechCrunch Disrupt 2025 on Finding PMF",
    "https://techcrunch.com/2025/08/05/crack-the-code-to-startup-traction-with-insights-from-chef-robotics-nea-and-iconiq-at-techcrunch-disrupt-2025/",
  ],
  [
    "June 2025",
    "TechCrunch AI Sessions: Launching against entrenched incumbents",
    "https://youtu.be/66YUe6Y3KWg?si=AnlQSX_SRC8ph2g2",
  ],
  [
    "May 2025",
    "Startup Grind: Spotting the Next Game-Changing Consumer AI Tool",
    "https://youtu.be/Xo6_OIw8038?si=aB4qTJyTI8wRI0PX",
  ],
  [
    "April 2024",
    "AI Rabbithole Conference: Next Wave of AI",
    "https://youtu.be/p9QVeGA7RYQ?si=bxY_JMbXDU0btdEV",
  ],
];

export default function Writing() {
  return (
    <>
      <Section>
        <h3>Writing</h3>
        <div className={"grid grid-cols-4"}>
          {writing.map(([date, title, link]) => (
            <Fragment key={title}>
              <div className={"text-right mr-6"}>{date}</div>
              <div className={"col-span-3"}>
                <a href={link}>{title}</a>
              </div>
            </Fragment>
          ))}
        </div>
      </Section>
      <Section>
        <h3>Talks</h3>
        <div className={"grid grid-cols-4"}>
          {talks.map(([date, title, link]) => (
            <Fragment key={title}>
              <div className={"text-right mr-6"}>{date}</div>
              <div className={"col-span-3"}>
                <a href={link}>{title}</a>
              </div>
            </Fragment>
          ))}
        </div>
      </Section>
    </>
  );
}
