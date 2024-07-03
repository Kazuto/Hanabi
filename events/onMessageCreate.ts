import { Message, TextChannel, GuildMember } from 'discord.js';
import { clearChannel } from '../composables/usePurge.ts';
import { isAdmin, notAdminError } from '../composables/useRoles.ts';

export default async (message: Message) => {
  if (message.author.bot) return;

  if (!message.content.startsWith('!')) return;

  const channel: TextChannel = message.channel as TextChannel;
  const member: GuildMember = message.member as GuildMember;

  if (message.content.startsWith('!purge')) {
    if ((await isAdmin(member)) === false) {
      channel.send(notAdminError);

      return;
    }

    await clearChannel(channel, member, message.content.split(' ')[1]);

    return;
  }
};
