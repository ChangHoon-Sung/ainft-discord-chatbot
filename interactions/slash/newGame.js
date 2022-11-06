/**
 * @file Sample help command with slash command.
 * @author Naman Vrati
 * @author Thomas Fournier <thomas@artivain.com>
 * @since 3.0.0
 * @version 3.1.0
 */

// Deconstructed the constants we need in this file.

const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const { game, REWARD_INCREASE_INTERVAL_SEC, MAX_REWARD } = require("../../game");

module.exports = {
	// The data needed to register slash commands to Discord.
	data: new SlashCommandBuilder()
		.setName("new-game")
		.setDescription(
			"Start a new game! (only works when the game is over)"
		),

	async execute(interaction) {
		// when the game object's timestamp is not null, it means the game is not over yet.
		if (game.timestamp) {
			const embed = new MessageEmbed()
				.setTitle('The game is not over yet.')
				.setColor(0xD0312D);
			interaction.reply({ embeds: [embed], ephemeral: true });
			return;
		}

		// when the game object's timestamp is null, it means the game is over.
		// so, we can start a new game.
		game.startNewGame(
			async () => {
				const embed = new MessageEmbed()
					.setColor(0x4286f4)
					.setTitle(`🎲 Game Over!\tWinner is ${game.winner} 🎉`)
					.setDescription(
						`Total reward: ${game.reward} AIN.\n` +
						`The winner is ${game.winner}.\n\nType \`/new-game\` to start a new game.`
					);
				await interaction.channel.send({ embeds: [embed] });
			},
			interaction.user.username
		);

		// send a message to the channel
		const embed = new MessageEmbed().setColor(0x4286f4)
			.setTitle(`🎲 New Game Started!`)
			.setDescription(
				interaction.user.username +
				` started the new game! \`/push\` the button and take the jackpot reward! \n` +
				` Reward will be increased by 1 AIN every ${REWARD_INCREASE_INTERVAL_SEC} seconds. (max ${MAX_REWARD}) \n` +
				` Winning Time: <t:${game.timestamp}:T>`);
		await interaction.reply({ embeds: [embed] });
	},
};