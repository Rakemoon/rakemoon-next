import { getLang } from "@/langs";
import Title from "./ui/Title";
import TitleBadge from "./ui/TitleBadge";

export default function Contact() {
  const title = getLang("CONTACT_TITLE")();
  const badge = getLang("CONTACT_BADGE")();

  return <section
    className="section"
    id={Contact.sectionId}>
    <TitleBadge>{badge}</TitleBadge>
    <Title>{title}</Title>
  </section>;
}

Contact.sectionId = "contact";
