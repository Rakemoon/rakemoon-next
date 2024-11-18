"use client";

import DemoRange from "@/components/Input/DemoRange";
import AnimatedCode from "@/components/Layout/AnimatedCode";
import HalfBleedContainer from "@/components/MDX/HalfBleedContainer";
import { useState, useDeferredValue, useMemo } from "react";

const pushSample = ["kambing", "sapi", "kerbau", "ayam", "unta", "bebek", "angsa"];

export default function SliceDemo() {
  const [params, setFirstParam] = useState([0, 0]);
  const samples = useMemo(() => pushSample.slice(params[0], params[1]), [params]);
  const code = useMemo(() => `const hewan = [
${pushSample.map(x => `  "${x}"`).join(",\n")}
];
const hasil = hewan.slice(${params[0]}, ${params[1]});
console.log(hasil);
/**
 * [
${samples.map(x => ` *  "${x}"`).join(",\n")}
 * ]
 */`, [params, samples]);
  const deferedCode = useDeferredValue(code);

  return <HalfBleedContainer className="ctp-mocha bg-ctp-crust flex flex-col">
    <div className="bg-ctp-base p-5 border-2 border-dashed border-ctp-overlay0 rounded-md mb-5">
      <AnimatedCode lang="js" code={deferedCode} />
    </div>
    <div className="flex gap-5 flex-wrap">
      <label className="flex flex-col gap-5 grow">
        <span className="text-ctp-text">
          Indeks Awal
        </span>
        <DemoRange
          value={params[0]}
          min={0}
          max={pushSample.length}
          onChange={e => {
            const value = +e.target.value;
            setFirstParam(x => [value, x[1]]);
          }}
        />
      </label>
      <label className="flex flex-col gap-5 grow">
        <span className="text-ctp-text">
          Indeks Akhir
        </span>
        <DemoRange
          value={params[1]}
          min={0}
          max={pushSample.length}
          onChange={e => {
            const value = +e.target.value;
            setFirstParam(x => [x[0], value]);
          }}
        />
      </label>
    </div>
    <div className="mt-5 text-ctp-text">
    </div>
  </HalfBleedContainer>;
}
