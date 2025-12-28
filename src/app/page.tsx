import Section from "@/components/Section";
import Writing from "@/components/Writing";
import { Fragment } from "react";

const investments = [
  ["Bluefish", "https://bluefishai.com"],
  ["TwelveLabs", "https://twelvelabs.io"],
  ["Perplexity", "https://www.perplexity.ai"],
  ["ElevenLabs", "https://elevenlabs.io"],
  ["Wabi", "https://wabi.ai"],
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
          I invest in early-stage tech startups building AI applications,
          enabling AI infrastructure, consumer AI and insanely talented
          technical teams building at the frontier. I typically invest at the
          Seed / Series A and selectively at early growth. There is so much more
          for us to do to make AI truly useful in our everyday lives and work,
          to unleash human creativity at scale, solve intractable problems with
          the help of intelligent AI systems and discover what else we can
          build. I love working with insightful, opinionated founders who have a
          differentiated take on the future.
        </p>
        <p>
          Current investments:{" "}
          {investments.map(([name, link]) => (
            <Fragment key={name}>
              <a href={link}>{name}</a>,{" "}
            </Fragment>
          ))}{" "}
          and other AI startups in stealth.{" "}
        </p>
        <p>The best way to reach me is to email ann at 10e10 dot capital.</p>
        <p>
          It’s a privilege to work with talented startup teams that live in
          relentless pursuit of the mission and even more so to be a tiny part
          of an enduring company. I felt that in my own startup experiences,
          especially at iconic platform companies like Uber and Twitter. We get
          to write a tiny bit of history when we’re part of something bigger
          than ourselves that shapes the world.
        </p>
        <p>
          I’ve worn many hats working with exceptional founders – partner at a
          top tier multi-stage VC, board member, operator and scaling exec,
          angel investor, advisor. If I can pay forward one lesson it’s that
          everything changes constantly but relationships endure. Work with the
          smartest optimists you know, focus on winning as a team not titles or
          hierarchy, care about people and be a leader that knows how to listen.
          Startups are a fundamentally human endeavor.
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
