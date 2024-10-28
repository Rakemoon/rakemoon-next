import { getLang } from "@/langs";
import Title from "./ui/Title";
import TitleBadge from "./ui/TitleBadge";
import Description from "./ui/Description";
import Card from "./ui/Card";

export default function Overview() {
  const title = getLang("OVERVIEW_TITLE")();
  const badge = getLang("OVERVIEW_BADGE")();
  const description = getLang("OVERVIEW_DESCRIPTION")();
  const cards = getLang("OVERVIEW_CARDS")();

  return <section
    className="section flex flex-col gap-5"
    id="overview">
    <div className="max-w-[50rem] flex flex-col gap-2.5">
      <TitleBadge>{badge}</TitleBadge>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </div>
    <div className="flex gap-2.5 flex-wrap max-md:justify-center max-w-[50rem]">
      {
        cards.map(x => <Card key={x.title}>{x.title}</Card>)
      }
    </div>
  </section>;
}
