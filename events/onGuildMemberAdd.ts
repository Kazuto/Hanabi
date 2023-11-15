import { Client, GuildMember, TextChannel } from 'discord.js';
import useUpdateStats from '../composables/useUpdateStats.ts';

export default async (client: Client, member: GuildMember) => {
  const { DISCORD_WELCOME_CHANNEL_ID: channelId } = process.env;

  if (channelId === undefined) return;

  const channel: TextChannel = member.guild.channels.cache.find(
    (channel) => channel.id === channelId
  ) as TextChannel;

  if (!channel) return;

  channel.send(`Welcome to the server, ${member}`);

  await useUpdateStats(client);
};
