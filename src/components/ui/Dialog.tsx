"use client";

import { cn } from "@/util";
import { useEffect, useRef, useState } from "react";
import PushButton from "../Button/PushButton";
import { AnimatePresence, motion } from "framer-motion";

type Props = React.HTMLAttributes<HTMLDialogElement>;

export default function Dialog({ className, children, ...props }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (isOpen) dialog?.showModal();
  }, [isOpen]);

  return <>
    <AnimatePresence>
      {
        isOpen && <motion.dialog
          {...props}
          className={cn(
            "bg-ctp-crust",
            "rounded-md",
            "p-2",
            className,
          )}
          ref={ref}
          initial={{ opacity: 0, y: 300 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{ opacity: 0, scale: 1.2 }}
        >
          <PushButton onClick={() => setIsOpen(false)}>
            close
          </PushButton>
          {children}
        </motion.dialog>
      }
    </AnimatePresence>
    <PushButton onClick={() => setIsOpen(true)}>open</PushButton>
  </>
}
