import { useRouter } from "next/navigation";

export default function useLocale() {
  const router = useRouter();
  console.log(router);
}
