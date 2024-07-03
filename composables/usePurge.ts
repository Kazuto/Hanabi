import { TextChannel, GuildMember } from 'discord.js';

export const clearChannel = async function (
  channel: TextChannel,
  member: GuildMember,
  param: string | undefined
) {
  console.info(
    `[START] ${member.displayName} requested to purge channel ${channel.name}`
  );

  let limit = 100;

  if (param !== undefined) {
    limit = parseInt(param.trim());

    if (isNaN(limit)) {
      channel.send('`limit` must be a number.');

      return;
    }

    if (limit > 100) {
      channel.send('`limit` must be less than or equal to 100.');

      return;
    }
  }

  const fetched = await channel.messages.fetch({ limit });

  channel.bulkDelete(fetched, true).catch((error) => {
    console.error('Error deleting messages:', error);
  });

  console.info(`[END] ${fetched.size} messages were purged`);
};
