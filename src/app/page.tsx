import Section from "@/components/Section";

export default function Home() {
  return (
    <>
      <Section>
        <h2>about ann</h2>
        <p>Paragraph</p>

        <span className={"bg-accent px-2 rounded font-bold"}>
          This text will be highlighted
        </span>
      </Section>
      <Section>
        <h2>about ann</h2>
        <p>Paragraph</p>

        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>

        <span className={"bg-accent px-2 rounded font-bold"}>
          This text will be highlighted
        </span>
      </Section>
      <Section>
        <h2>about ann</h2>
        <p>Paragraph</p>

        <span className={"bg-accent px-2 rounded font-bold"}>
          This text will be highlighted
        </span>
      </Section>
    </>
  );
}
