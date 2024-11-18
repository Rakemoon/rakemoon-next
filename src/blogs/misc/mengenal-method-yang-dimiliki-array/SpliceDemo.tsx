"use client";

import PushButton from "@/components/Button/PushButton";
import DemoRange from "@/components/Input/DemoRange";
import AnimatedCode from "@/components/Layout/AnimatedCode";
import HalfBleedContainer from "@/components/MDX/HalfBleedContainer";
import { useState, useDeferredValue, useMemo } from "react";

const pushSample = ["ayam", "unta", "bebek", "angsa"];

export default function SpliceDemo() {
  const [firstParam, setFirstParam] = useState([0, 0]);
  const [toPushed, setToPushed] = useState([] as string[]);
  const [samples, setSamples] = useState(["kambing", "sapi", "kerbau"]);
  const code = useMemo(() => `const hewan = [\n${samples.map(x => `  "${x}"`).join(",\n")}\n];`, [samples]);
  const deferedCode = useDeferredValue(code);

  const getComment = () => {
    const [idx, length] = firstParam;
    const comment = [] as React.ReactNode[];
    if (length > 0) {
      if (length > 1) comment.push(<p key="comment-1">Dari indeks <strong>{idx}</strong> sampai indeks <strong>{idx + length - 1}</strong> data akan dihapus</p>);
      else comment.push(<p key="comment-1">Data yang ada pada indeks <strong>{idx}</strong> akan dihapus</p>);
    };
    if (toPushed.length) {
      if (comment.length) comment.push(<p key="comment-2">Lalu akan digantikan dengan <strong>{toPushed.length}</strong> data baru</p>);
      else comment.push(<p key="comment-1"><strong>{toPushed.length}</strong> data baru akan ditambahkan sebelum indeks <strong>{idx}</strong></p>)
    }
    return comment;
  };

  return <HalfBleedContainer className="ctp-mocha bg-ctp-crust flex flex-col">
    <div className="bg-ctp-base p-5 border-2 border-dashed border-ctp-overlay0 rounded-md mb-5">
      <AnimatedCode lang="js" code={deferedCode} />
    </div>
    <div className="bg-ctp-base p-5 border-2 border-dashed border-ctp-overlay0 rounded-md mb-5">
      <AnimatedCode lang="js" code={`hewan.splice(\n${[...firstParam, ...toPushed.map(x => `"${x}"`)].map(x => "  " + x).join(",\n")}\n);`} />
    </div>
    <div className="flex gap-5 flex-wrap">
      <label className="flex flex-col gap-5 grow">
        <span className="text-ctp-text">
          Indeks
        </span>
        <DemoRange
          value={firstParam[0]}
          min={0}
          max={samples.length - 1}
          onChange={e => {
            const value = +e.target.value;
            setFirstParam([value, 0]);
          }}
        />
      </label>
      <label className="flex flex-col gap-5 grow">
        <span className="text-ctp-text">
          Banyak Data
        </span>
        <DemoRange
          value={firstParam[1]}
          min={0}
          max={samples.length - firstParam[0]}
          onChange={e => {
            const value = +e.target.value;
            setFirstParam(x => [x[0], value]);
          }}
        />
      </label>
      <label className="flex flex-col gap-5 grow">
        <span className="text-ctp-text">
          Data Baru
        </span>
        <DemoRange
          defaultValue={0}
          min={0}
          max={pushSample.length}
          onChange={e => {
            const value = +e.target.value;
            setToPushed(pushSample.slice(0, value));

          }}
        />
      </label>
      <PushButton
        className="grow-[2] basis-40"
        onClick={() => {
          samples.splice(...firstParam as [number, number], ...toPushed);
          setSamples(samples.slice(0));
          setToPushed([]);
          setFirstParam([0, 0]);
        }}
      >
        Jalankan
      </PushButton>
    </div>
    <div className="mt-5 text-ctp-text">
      {getComment()}
    </div>
  </HalfBleedContainer>;
}
