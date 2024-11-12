import { DiscordWebhookExecuteParams } from "@/types";

export function isElementInViewport(el: Element) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
}

export function sendDiscordWebhook(webhook_url: string, value: DiscordWebhookExecuteParams) {
  return fetch(webhook_url, {
    method: "POST",
    headers: {
      ["Content-Type"]: "application/json"
    },
    body: JSON.stringify(value)
  });
}

export function oneLineTrim(args: TemplateStringsArray, ...subs: unknown[]) {
  return String.raw(args, ...subs).replaceAll(/\n|\r\n/g, " ").trim().trim();
}

export function cn(...args: (null | undefined | boolean | number | string | Record<string, boolean>)[]) {
  let result = "";
  let first = true;
  for (const arg of args) {
    if (!Boolean(arg)) continue;
    let value = ""
    if (typeof arg === "object") {
      let first2 = true;
      for (const k in arg) {
        if (!arg[k]) continue;
        value += first2 ? k : ` ${k}`;
        first2 = false;
      }
    } else value = `${arg}`;
    result += first ? value : ` ${value}`;
    first = false;
  }
  return result;
}

export function* range(length: number) {
  for (let i = 0; i < length; i++) yield i;
}

export function timeoutPromise(timeMs: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, timeMs));
}

export function requestGeoLocation(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export async function waitPromisable<Err, Res>(promise: PromiseLike<Res>) {
  let result: Res | null = null;
  let error: Err | null = null;
  try {
    result = await promise;
  } catch (e) {
    error = e as never;
  }
  return [error, result] as [typeof error, typeof result];
}
