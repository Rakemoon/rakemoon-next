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
