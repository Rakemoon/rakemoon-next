"use server"

import { sendDiscordWebhook } from "@/util"

export async function sendEmailAction(name: string, email: string, message: string): Promise<SendEmailActionState> {
  const response = await sendDiscordWebhook(process.env.DISCORD_WEBHOOK!, {
    embeds: [
      {
        title: "New Email Received!",
        color: 0x020202,
        description: message,
        thumbnail: {
          url: "https://images-ext-1.discordapp.net/external/IZxKXIeljcv_LdPWHX1VqBm0fKrQZby444vqfHDaDto/https/cdn-icons-png.flaticon.com/256/2374/2374449.png?format=webp&quality=lossless&width=320&height=320"
        },
        timestamp: (new Date).toISOString(),
        fields: [
          {
            name: "Name",
            value: name,
            inline: true
          },
          {
            name: "Email",
            value: email,
            inline: true,
          }
        ]
      }
    ]
  });
  return { success: response.ok };
}

export type SendEmailActionState = {
  success?: boolean;
}
