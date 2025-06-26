"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PushButton from "@/components/Button/PushButton";
import Navbar from "@/components/Navbar/Navbar";

const spring = (i: number) => ({
  type: "spring",
  damping: 20,
  stiffness: 300,
  delay: i * 0.1,
});

const initialColors = [
  "#FF008C",
  "#D309E1",
  "#9C1AFF",
  "#7700FF",
  "#771100",
  "#efe",
  "#afa",
  "#220011",
  "#768911",
];

function shuffle<T>(a: T[]) {
  for (let i = 0; i < a.length; i++) {
    const randomIndex = Math.floor(Math.random() * a.length);
    [a[i], a[randomIndex]] = [a[randomIndex], a[i]];
  }
  return a;
}

export default function Experiment() {
  const [colors, setColors] = useState(initialColors);
  const onClick = useCallback(() => setColors(x => shuffle(x).slice(0)), []);
  const onDelete = useCallback(() => setColors(x => x.slice(1)), []);
  const onAdd = useCallback(() => setColors(x => [...x, "blue"]), []);
  return <main className="flex flex-col h-screen">
    <Navbar />
    <div className="grid place-content-center grow">
      <div className="flex justify-around mb-5">
        <PushButton onClick={onClick}>
          Shuffle
        </PushButton>
        <PushButton onClick={onDelete}>
          Delete
        </PushButton>
        <PushButton onClick={onAdd}>
          Add
        </PushButton>
      </div>
      <ul className="grid grid-cols-3 w-96 max-w-full aspect-square">
        <AnimatePresence mode="popLayout">
          {colors.map((background, i) =>
            <motion.li
              key={background}
              className="rounded-md"
              layout
              transition={spring(i)}
              style={{ background }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ rotate: 360, scale: 0 }}
            />
          )}
        </AnimatePresence>
      </ul>
    </div>
  </main>;
}
