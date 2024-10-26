import Title from "./ui/Title";
import TitleBadge from "./ui/TitleBadge";

export default function Contact() {
  return <section
    className="section"
    id={Contact.sectionId}>
    <TitleBadge>Get in touch</TitleBadge>
    <Title>Contact</Title>
  </section>;
}

Contact.sectionId = "contact";
Contact.sectionName = "Contact";
