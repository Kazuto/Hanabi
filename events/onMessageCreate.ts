import { Message, TextChannel, GuildMember } from 'discord.js';
import { clearChannel } from '../composables/usePurge.ts';
import { isAdmin, notAdminError } from '../composables/useRoles.ts';

export default async (message: Message) => {
  if (message.author.bot) return;

  if (!message.content.startsWith('!')) return;

  const channel: TextChannel = message.channel as TextChannel;
  const member: GuildMember = message.member as GuildMember;

  if (message.content == '!purge') {
    if (await isAdmin(member)) {
      await clearChannel(channel, member);

      return;
    }

    channel.send(notAdminError);

    return;
  }
};
