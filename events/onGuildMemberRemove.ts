import useUpdateStats from '../composables/useUpdateStats';

export default (client) =>
  client.on('guildMemberRemove', () => {
    useUpdateStats(client);
  });
