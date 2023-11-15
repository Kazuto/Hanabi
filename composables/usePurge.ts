import { TextChannel, GuildMember } from 'discord.js';

export const clearChannel = async function (
  channel: TextChannel,
  member: GuildMember
) {
  console.info(
    `[START] ${member.displayName} requested to purge channel ${channel.name}`
  );

  const fetched = await channel.messages.fetch({ limit: 100 });

  channel.bulkDelete(fetched, true).catch((error) => {
    console.error('Error deleting messages:', error);
  });

  console.info(`[END] ${fetched.size} messages were purged`);
};
