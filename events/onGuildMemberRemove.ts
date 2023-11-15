import { Client, GuildMember, PartialGuildMember } from 'discord.js';
import useUpdateStats from '../composables/useUpdateStats.ts';

export default async (
  client: Client,
  member: GuildMember | PartialGuildMember
) => {
  console.info(`${member.user.tag} left the server.`);

  await useUpdateStats(client);
};
