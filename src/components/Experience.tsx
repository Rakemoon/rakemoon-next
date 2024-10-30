"use client"

import { getLang } from "@/langs";
import Title from "./ui/Title";
import TitleBadge from "./ui/TitleBadge";
import Card from "./ui/Card";
import { useOnView } from "@/hooks/use-observer";

type Experience = {
  when: string;
  as: string;
  at: string;
  does: string[];
}

export default function Experience() {
  const title = getLang("EXPERIENCE_TITLE")();
  const badge = getLang("EXPERIENCE_BADGE")();

  const experiences: Experience[] = [
    {
      when: "2019 June - 2022 July",
      as: "Computer and Engineering Network Student",
      at: "SMKN 1 Panjalu",
      does: [
        "Learn about TCP/IP and VoIP",
        "Experienced work as team and make Blog Website",
        "Analyzed how debian work to create DNS Server",
        "Learn and Try using Mikrotik Route",
      ]
    },
    {
      when: "2021 January - 2021 March",
      as: "Internship Student",
      at: "Ajat Computer System",
      does: [
        "Analyzed problems and worked with teams to develop solutions about OS Installation and Build Computer",
        "Provide clerical support, addressing routine and special requirements"
      ]
    }
  ]

  return <section
    className="section flex flex-col gap-5 transition-transform"
    id="experience">
    <TitleBadge>{badge}</TitleBadge>
    <Title>{title}</Title>

    <ul className={
      "flex flex-col gap-10 relative " +
      "before:absolute before:inset-0 before:mx-auto before:w-[4px] before:bg-foreground " +
      "before:h-full before:-z-10 max-lg:before:mx-10"
    }>
      {experiences
        .map((x, i) => <li
          key={x.when}>
          <MyCard
            {...x}
            odd={!!(i & 1)} />
        </li>
        )}
    </ul>
  </section>;
}

function MyCard(props: Experience & { odd: boolean }) {
  const [cardRef, isCardOnView] = useOnView<HTMLDivElement>();
  const [timelineRef, isTimelineOnView] = useOnView<HTMLSpanElement>();
  const [circleRef, isCircleOnView] = useOnView<HTMLDivElement>();

  return <div className={
    `flex ${props.odd ? "flex-row-reverse" : ""} justify-center gap-10 max-lg:flex-row-reverse max-lg:justify-end relative ` +
    "max-lg:gap-2.5"
  }>
    <div className="w-[45%] overflow-hidden max-lg:w-full">
      <Card className={
        "h-full w-full flex flex-col gap-2.5 transition duration-1000 " +
        (props.odd ? "" : "ml-auto ") +
        (isCardOnView ? "" : `opacity-0 ${props.odd ? "translate-x-1/2" : "-translate-x-1/2"}`)
      } ref={cardRef}>
        <h3 className="text-xl font-semibold w-fit">{props.as}</h3>
        <h4 className="text-base font-semibold text-white text-opacity-50">{props.at}</h4>
        <ul className="list-disc pl-5">
          {props.does.map(x => <li key={x}>{x}</li>)}
        </ul>
      </Card>
    </div>
    <div
      className={
        "min-w-20 aspect-square bg-background rounded-full self-center max-lg:self-start justify-self-center border-[4px] transition duration-1000 " +
        (isCircleOnView ? "" : "scale-0")
      }
      ref={circleRef}></div>
    <div className="w-[45%] flex max-lg:absolute max-lg:w-fit max-lg:h-fit max-lg:-top-2 max-lg:right-2 overflow-hidden">
      <i ref={timelineRef} className={
        "w-max block my-auto transition duration-1000 " +
        "max-lg:bg-background max-lg:border max-lg:border-dashed max-lg:rounded-md max-lg:p-1 max-lg:text-xs " +
        (props.odd ? "ml-auto " : "") +
        (isTimelineOnView ? "" : `opacity-0 ${props.odd ? "-translate-x-1/2" : "translate-x-1/2"}`)
      }>
        {props.when}
      </i>
    </div>
  </div>;
}
