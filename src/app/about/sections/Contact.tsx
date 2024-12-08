"use client";

import { sendEmailAction, SendEmailActionState } from "@/actions/email-send.action";
import PushButton from "@/components/Button/PushButton";
import TextInput from "@/components/Input/TextInput";
import AnimatedTitle from "@/components/Title/AnimatedTitle";
import useForm from "@/hooks/use-form";
import { cn } from "@/util";
import { AnimatePresence, motion } from "framer-motion";
import { useActionState } from "react";
import { Check, X } from "react-feather";

type ContactForm = Record<"name" | "email" | "message", string>;

export default function Contact() {
  const [data, create] = useForm<ContactForm>();
  const [actionState, formAction] = useActionState(
    sendEmailAction.bind(
      null,
      data.current.name,
      data.current.email,
      data.current.message,
    ),
    {} as SendEmailActionState
  );

  return <section id="contact" className="p-viewport space-y-5 flex flex-col items-center">
    <AnimatedTitle text="Contact" />
    <form action={formAction} className={cn(
      "p-5 flex flex-col gap-5 [&>label]:space-y-2.5 w-max",
      "bg-ctp-crust",
      "[&>label>p]:text-ctp-text",
      "rounded-md",
      "w-[65ch] max-w-full",
      "shadow-black/50 shadow-inner",
      "relative isolate",
    )}>
      <AnimatePresence>
        {actionState.success !== undefined
          && (actionState.success
            ? <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              className="absolute bg-ctp-green rounded-md p-1 font-bold flex items-center -bottom-2.5 -right-2.5">
              <Check />
              Success
            </motion.div>
            : <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              className="absolute bg-ctp-red rounded-md p-1 font-bold flex items-center -top-2.5 -left-2.5">
              <X />
              Try Again Later
            </motion.div>
          )}
      </AnimatePresence>
      <label>
        <p>Name</p>
        <TextInput
          className="!bg-ctp-base w-full"
          {...create("name")}
          placeholder="your good name"
          required />
      </label>
      <label>
        <p>Email</p>
        <TextInput
          className="!bg-ctp-base w-full"
          type="email"
          placeholder="your email"
          {...create("email")}
          required />
      </label>
      <label>
        <p>Message</p>
        <textarea
          placeholder="your messange"
          className="block w-full rounded-md bg-ctp-base p-5 outline-ctp-sky placeholder:text-ctp-red text-ctp-sky"
          {...create("message") as object}
        />
      </label>
      <PushButton
        type="submit">
        Submit
      </PushButton>
    </form>
  </section>;
}
