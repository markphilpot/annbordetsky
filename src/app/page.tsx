import Section from "@/components/Section";
import Writing from "@/components/Writing";
import { Fragment } from "react";

const investments = [
  ["Wabi", "https://wabi.ai"],
  ["Bluefish", "https://bluefishai.com"],
  ["TwelveLabs", "https://twelvelabs.io"],
  ["Perplexity", "https://www.perplexity.ai"],
  ["ElevenLabs", "https://elevenlabs.io"],
  ["Juicebox", "https://juicebox.ai"],
  ["Casa", "https://my.casa"],
  ["August", "https://august.law"],
  ["Ceramic", "https://ceramic.ai"],
  ["Suno", "https://www.suno.com"],
  ["Pika", "https://pika.art"],
  ["Contra", "https://www.contra.com"],
  ["Glacier", "https://endwaste.io"],
];

export default function Home() {
  return (
    <>
      <Section>
        <p>
          I invest in AI applications and enabling infrastructure at the
          earliest stages (before it’s obvious) and selectively at early growth
          (before it’s inevitable). Often in categories that are so new they
          don’t have a name yet and in founders who are{" "}
          <em>innate world builders.</em>
        </p>
        <p>
          World builders construct a new reality for us to inhabit, how
          something ought to work. It usually comes with an insightful and
          opinionated take based on personal pain points or deep domain
          knowledge. World builders are high-agency visionaries and systems
          thinkers who can think forward and backward to solve problems. They
          have the potential to build empires because they create thriving
          ecosystems through their products, companies and partnerships.
        </p>
        <p>
          Each world, each startup is an infinite game the founder wants to keep
          playing.
        </p>
        <p>
          When I’m lucky enough to be a part of the journey, my goal is to be a
          helpful business partner to the founder and their team. Responsive,
          collaborative and providing strategic assists.
        </p>
        <p>
          Select recent investments:{" "}
          {investments.map(([name, link]) => (
            <Fragment key={name}>
              <a href={link}>{name}</a>,{" "}
            </Fragment>
          ))}{" "}
          and other AI startups in stealth.{" "}
        </p>
        <p>
          You can find me on <a href={"https://x.com/annbordetsky"}>X</a> and on{" "}
          <a href={"https://www.linkedin.com/in/annbordetsky/"}>LinkedIn</a>.
          Warm intros preferred.
        </p>
      </Section>
      <Section>
        <h3>Operating principles</h3>
        <ul>
          <li>
            When you commit, give it 200%. Bring a founder mentality regardless
            of title or tenure{" "}
          </li>
          <li>
            Be an honest broker. Trust and transparency go together, they forge
            real bonds{" "}
          </li>
          <li>
            Believe in the power of teams. Building high-performing teams is how
            you keep winning
          </li>
          <li>
            Top talent thrives in meritocracies, not mediocracies. Give people
            room to grow
          </li>
          <li>In negotiations, don’t play zero sum games. Grow the pie</li>
          <li>
            Failure is a feature, not a bug. Bounce back, learn, get better
          </li>
          <li>
            Debate until you understand each other. It’s more valuable than
            consensus
          </li>
          <li>
            Be present in conversations, especially 1-1s. Engage in active
            listening{" "}
          </li>
          <li>
            Emotional self-regulation is an essential skill in leadership. Do
            the work on yourself{" "}
          </li>
          <li>
            Say thank you and tell people you appreciate them. We’re not made of
            stone!
          </li>
        </ul>
      </Section>
      <Writing />
    </>
  );
}
