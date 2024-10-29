export type LangRecord = Record<Uppercase<string>, (...args: string[]) => unknown>;

export type DiscordEmbed = {
  title?: string;
  type?: "rich" | "image" | "video" | "gifv" | "article" | "link" | "poll_result";
  description?: string;
  url?: string;
  timestamp?: string;
  color?: number;
  footer?: {
    text: string;
    icon_url?: string;
    proxy_icon_url?: string;
  };
  image?: {
    url: string;
    proxy_url?: string;
    height?: number;
    width?: number;
  };
  thumbnail?: {
    url: string;
    proxy_url?: string;
    height?: number;
    width?: number;
  };
  video?: {
    url: string;
    proxy_url?: string;
    height?: number;
    width?: number;
  };
  provider?: {
    name?: string;
    url?: string;
  };
  author?: {
    name: string;
    url: string;
    icon_url?: string;
    proxy_icon_url?: string;
  };
  fields?: {
    name: string;
    value: string;
    inline?: boolean;
  }[];
};

export type DiscordWebhookExecuteParams = {
  content?: string;
  username?: string;
  avatar_url?: string;
  tts?: string;
  embeds?: DiscordEmbed[];
}

export type ProjectList = {
  name: string;
  summary: string;
  imagePath: string;
  stacks: string[];
  links: [name: string, href: string][];
}
