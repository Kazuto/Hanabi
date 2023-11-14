import { Message, TextChannel, GuildMember } from 'discord.js/typings';
import { clearChannel } from '../composables/usePurge';
import { isAdmin, notAdminError } from '../composables/useRoles';

export default (client) =>
  client.on('messageCreate', (message: Message) => {
    if (message.author.bot) return;

    if (!message.content.startsWith('!')) return;

    const channel: TextChannel = message.channel as TextChannel;
    const member: GuildMember = message.member as GuildMember;

    if (message.content == '!purge') {
      if (!isAdmin(channel, member)) {
        channel.send(notAdminError);

        return;
      }

      clearChannel(channel, member);
    }
  });
