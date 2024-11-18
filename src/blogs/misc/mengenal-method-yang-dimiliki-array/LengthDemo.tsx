"use client";

import DemoRange from "@/components/Input/DemoRange";
import AnimatedCode from "@/components/Layout/AnimatedCode";
import HalfBleedContainer from "@/components/MDX/HalfBleedContainer";
import { useState, useDeferredValue, useMemo } from "react";

export default function LengthDemo() {
  const [samples, setSamples] = useState([] as number[]);
  const code = useMemo(() => `const nomor = [${samples.join(", ")}];\nconsole.log(nomor.length) // ${samples.length}`, [samples]);
  const deferedCode = useDeferredValue(code);

  return <HalfBleedContainer className="ctp-mocha bg-ctp-crust flex flex-col">
    <p className="mb-5 text-ctp-text">Cobalah untuk mengatur <i>slider </i> dibawah ini!</p>
    <DemoRange
      defaultValue={0}
      min={0}
      max={5}
      onChange={e => {
        const value = +e.target.value;
        setSamples(Array.from({ length: value }, (_, i) => i));
      }}
    />
    <div className="bg-ctp-base -mx-5 p-5 border-2 border-dashed border-ctp-overlay0 rounded-md">
      <AnimatedCode lang="js" code={deferedCode} />
    </div>
  </HalfBleedContainer>;
}
