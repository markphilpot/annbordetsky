import Section from "@/components/Section";
import Highlight from "@/components/Highlight";
import SkewHighlight from "@/components/SkewHighlight";
import { NotoV1FamilyManWomanGirlBoy } from "@/components/icons";

export default function Home() {
  return (
    <>
      <Section>
        <h2>about</h2>
        <ul>
          <li>
            Partner at NEA investing in AI Applications at Seed / Series A (
            <a href={"https://www.nea.com/team/ann-bordetsky"}>bio</a>)
          </li>
          <li>
            Prior to VC, startup and growth stage operator roles at
            consequential companies
          </li>
          <li>
            Business leadership roles at Uber and Twitter during hyper growth
            years{" "}
          </li>
          <li>
            Chief Operating Officer at Rival through acquisition to LiveNation /
            Ticketmaster{" "}
          </li>
          <li>
            Specialize in category creating products and building into
            greenfield markets
          </li>
          <li>
            Live happily in SF Bay Area with my family{" "}
            <NotoV1FamilyManWomanGirlBoy
              className={"inline-block size-6 -mt-1"}
            />
          </li>
          <li>
            Berkeley undergrad and Stanford grad school, 4 years in DC / Policy
            in between
          </li>
        </ul>
      </Section>
      <Section>
        <h2>what motivates me</h2>
        <ul>
          <li>Generating fundamental human progress through technology</li>
          <li>
            Working alongside clever, courageous, creative people on a worthy
            mission{" "}
          </li>
          <li>
            Building iconic and enduring products that touch lives of millions
            of people daily{" "}
          </li>
          <li>
            Results. Making things happen in the world and seeing real impact
          </li>
          <li>
            Partnerships and collaboration, I truly enjoy making 1+1 = 3 with
            others
          </li>
          <li>
            Seeing people I’ve coached and worked with thrive and achieve their
            potential
          </li>
          <li>
            Solving seemingly intractable problems under pressure. Have the gray
            hairs to prove it
          </li>
        </ul>
      </Section>
      <Section>
        <h2>
          <Highlight>operating principles</Highlight>
        </h2>
        <ol>
          <li>
            When you commit, give it 200%. Bring a founder mentality regardless
            of title or tenure.{" "}
          </li>
          <li>
            Be an honest broker. Trust and transparency go together, they forge
            real bonds.{" "}
          </li>
          <li>
            Believe in the power of teams. Building high-performing teams is how
            you keep winning.{" "}
          </li>
          <li>
            Top talent thrives in meritocracies, not mediocracies. Give people
            room to grow.{" "}
          </li>
          <li>In negotiations, don’t play zero sum games. Grow the pie. </li>
          <li>
            Failure is a feature, not a bug. Bounce back, learn, get
            better.{" "}
          </li>
          <li>
            Debate until you understand each other. It’s more valuable than
            consensus.{" "}
          </li>
          <li>
            Be present in conversations, especially 1-1s. Engage in active
            listening.{" "}
          </li>
          <li>
            Emotional self-regulation is an essential skill in leadership. Do
            the work on yourself.{" "}
          </li>
          <li>
            Say thank you and tell people you appreciate them. We’re not made of
            stone!
          </li>
        </ol>
      </Section>
      <Section>
        <h2>how I work with founders</h2>
        <h4>
          <Highlight>before it&apos;s obvious</Highlight>
        </h4>
        <p>
          Investing at seed and series A, almost always in founders building
          into emerging, high growth (big if true!) markets with a vision for a
          category defining application or platform company. Deep conviction in
          founder market fit, product velocity and correct timing.
          Post-investment, serve as a catalyst, anything I can do to help reach
          escape velocity. In this AI market, product velocity x momentum is how
          you earn the right to figure out everything else.
        </p>
        <h4>
          <Highlight>before it&apos;s inevitable</Highlight>
        </h4>
        <p>
          Partnering founders at the early-growth stage of company building once
          there’s undeniable PMF, exciting revenue growth and clear inflection
          point to scale. Inevitability comes from building an exceptional
          execution machine, accelerating GTM and establishing a strong brand
          moat (not just VC ‘heat’). I like to work with founders on what I know
          best, building and scaling business functions that drive growth (GTM,
          BD / Partnerships, Growth, Mktg), competition chess, compound product
          strategy and attracting A+ leadership talent.
        </p>
        <p>
          Some things to <a href={"/writing"}>read</a>
        </p>
      </Section>
    </>
  );
}
