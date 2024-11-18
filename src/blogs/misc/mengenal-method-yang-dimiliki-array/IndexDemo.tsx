"use client";

import DemoRange from "@/components/Input/DemoRange";
import AnimatedCode from "@/components/Layout/AnimatedCode";
import HalfBleedContainer from "@/components/MDX/HalfBleedContainer";
import { useState } from "react";

export default function IndexDemo() {
  const samples = ["kambing", "sapi", "kerbau"];
  const [code, setCode] = useState(`console.log(hewan[0]) // "kambing"`);

  return <HalfBleedContainer className="ctp-mocha bg-ctp-crust flex flex-col">
    <p className="mb-5 text-ctp-text">Cobalah untuk mengatur <i>slider </i> dibawah ini!</p>
    <DemoRange
      defaultValue={0}
      min={0}
      max={2}
      onChange={e => {
        const value = +e.target.value;
        setCode(`console.log(hewan[${value}]) // "${samples[value]}"`);
      }}
    />
    <div className="bg-ctp-base -mx-5 p-5 border-2 border-dashed border-ctp-overlay0 rounded-md">
      <AnimatedCode lang="js" code={code} />
    </div>
  </HalfBleedContainer>;
}
