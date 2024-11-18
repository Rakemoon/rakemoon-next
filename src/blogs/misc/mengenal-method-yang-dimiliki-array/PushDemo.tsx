"use client";

import PushButton from "@/components/Button/PushButton";
import AnimatedCode from "@/components/Layout/AnimatedCode";
import HalfBleedContainer from "@/components/MDX/HalfBleedContainer";
import { useState, useDeferredValue, useMemo } from "react";

const toPushed = ["ayam", "unta", "bebek", "angsa"];

export default function PushDemo() {
  const [samples, setSamples] = useState(["kambing", "sapi", "kerbau"]);
  const code = useMemo(() => `const hewan = [\n${samples.map(x => `  "${x}"`).join(",\n")}\n];`, [samples]);
  const deferedCode = useDeferredValue(code);

  return <HalfBleedContainer className="ctp-mocha bg-ctp-crust flex flex-col">
    <div className="bg-ctp-base p-5 border-2 border-dashed border-ctp-overlay0 rounded-md mb-5">
      <AnimatedCode lang="js" code={deferedCode} />
    </div>
    <div className="flex gap-5 flex-wrap">
      <div className="bg-ctp-base p-5 border-2 border-dashed border-ctp-overlay0 rounded-md grow-[2]">
        <AnimatedCode lang="js" code={`hewan.push("${toPushed[0]}");`} />
      </div>
      <PushButton
        className="grow basis-20"
        onClick={() => {
          const popped = toPushed.shift()!
          toPushed.push(popped);
          setSamples(x => [...x, popped]);
        }}
      >
        Jalankan
      </PushButton>
    </div>
  </HalfBleedContainer>;
}
