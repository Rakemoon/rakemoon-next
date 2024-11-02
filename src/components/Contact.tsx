"use client";

import { getLang } from "@/langs";
import Title from "./ui/Title";
import TitleBadge from "./ui/TitleBadge";
import { useEffect, useMemo, useReducer, useActionState } from "react";
import Card from "./ui/Card";
import ContactLinks from "./ui/ContactLinks";
import { sendEmailAction, SendEmailActionState } from "@/actions/email-send.action";

type ContactState = {
  name: string;
  email: string;
  message: string;
}

type ContactReducerAction = {
  type: "set:name" | "set:email" | "set:message" | "clear:all";
  value: string;
};

function contactReducer(state: ContactState, { type, value }: ContactReducerAction): ContactState {
  switch (type) {
    case "set:name": return { ...state, name: value };
    case "set:email": return { ...state, email: value };
    case "set:message": return { ...state, message: value };
    case "clear:all": return { name: "", email: "", message: "" };
  }
}


export default function Contact() {
  const [state, dispatch] = useReducer(
    contactReducer,
    {
      email: "",
      message: "",
      name: ""
    } satisfies ContactState
  );
  const [actionState, formAction] = useActionState(sendEmailAction.bind(null, state.name, state.email, state.message), {} as SendEmailActionState)

  const title = getLang("CONTACT_TITLE")();
  const badge = getLang("CONTACT_BADGE")();

  const inputStyleClass = useMemo(() => {
    const className = "bg-transparent rounded-md border-foreground dark:border-2 p-2.5 outline-none focus:border-blue-400 peer block w-full dark:shadow-none shadow-md shadow-stone-500";
    return className;
  }, []);

  const inputContainerStyleClass = useMemo(() => {
    const className = "flex flex-col-reverse";
    return className;
  }, []);

  const labelStyleClass = useMemo(() => {
    const className = "group peer-focus:translate-y-1/2 peer-focus:translate-x-2.5 peer-focus:scale-75 transition bg-background w-fit";
    return className;
  }, []);

  useEffect(() => {
    const { success } = actionState;
    if (typeof success === "boolean") {
      alert(success ? "Success sending the email!" : "Failed to send the email, try again later");
      dispatch({ type: "clear:all", value: "" });
    }
  }, [actionState])

  return <section
    className="section flex items-center justify-center"
    id={Contact.sectionId}>
    <div className="flex gap-5 items-end max-md:flex-col-reverse max-md:items-center max-md:w-full">
      <ContactLinks />
      <div className="flex flex-col gap-2.5 before:w-full before:h-full relative before:absolute before:-z-20 before:bg-foreground bg-background before:top-2.5 before:left-2.5 p-2.5 border-2 rounded-md before:rounded-md max-md:w-5/6">
        <TitleBadge>{badge}</TitleBadge>
        <Title>{title}</Title>
        <form
          className="flex flex-col gap-2.5 max-w-full border-t pt-5"
          action={formAction}>
          <label className={inputContainerStyleClass}>
            <input
              type="text"
              onChange={e => dispatch({ type: "set:name", value: e.target.value })}
              value={state.name}
              className={inputStyleClass}
              required
            />
            <p className={labelStyleClass}>Name</p>
          </label>
          <label className={inputContainerStyleClass}>
            <input
              type="email"
              onChange={e => dispatch({ type: "set:email", value: e.target.value })}
              value={state.email}
              className={inputStyleClass}
              required
            />
            <p className={labelStyleClass}>Email</p>
          </label>
          <label className={inputContainerStyleClass}>
            <textarea
              onChange={e => dispatch({ type: "set:message", value: e.target.value })}
              value={state.message}
              className={inputStyleClass + " resize-y"}
              required
            />
            <p className={labelStyleClass}>Message</p>
          </label>
          <button className="w-max mt-2.5 self-center">
            <Card>Send</Card>
          </button>
        </form>
      </div>
    </div>
  </section>;
}

Contact.sectionId = "contact";
