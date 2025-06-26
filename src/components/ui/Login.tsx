import { ChangeEventHandler, useCallback, useState } from "react";

type Data = Partial<Record<"email" | "password" | "name", string>>;

const useForm = <D extends Record<never, never>>(defaultData?: D) => {
  const [data, setData] = useState(defaultData ?? ({} as D));

  const createHandler = useCallback((key: keyof D) => {
    return {
      value: Reflect.get(data, key) ?? "",
      name: key,
      onChange: (e => {
        const value = e.target.value;
        setData(prev => {
          Reflect.set(prev, key, value);
          return { ...prev };
        });
      }) satisfies ChangeEventHandler<HTMLInputElement>
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [data, createHandler] as [D, typeof createHandler];
}

export default function RegisterPage() {

  const [, createHandler] = useForm<Data>();

  const onSubmit = () => {
    // action here.....
  };

  return <form onSubmit={onSubmit}>
    <input type="text" {...createHandler("name")} />
    <input type="email" {...createHandler("email")} />
    <input type="password" {...createHandler("password")} />
    <button type="submit">Submit</button>
  </form>
}
