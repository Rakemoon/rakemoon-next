import { useCallback, useRef } from "react";

export default function useForm<T extends Record<string, string>>() {
  const data = useRef({} as T);

  const create = useCallback((key: keyof T) => ({
    name: key,
    defaultValue: data.current[key] ?? "",
    onChange: ((event) => {
      data.current[key] = event.target.value as never;
    }) satisfies React.ChangeEventHandler<HTMLInputElement>,
  }), []);

  return [data, create] as [data: typeof data, create: typeof create];
}
