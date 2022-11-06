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
const { game } = require("../../game");

module.exports = {
	// The data needed to register slash commands to Discord.
	data: new SlashCommandBuilder()
		.setName("push")
		.setDescription(
			"push the button and reset the timer"
		),

	async execute(interaction) {
		if(game.timestamp == null){
			const embed = new MessageEmbed()
				.setTitle('The game is not started yet.')
				.setColor(0xD0312D);
			await interaction.reply({ embeds: [embed], ephemeral: true });
			return;
		}

		game.updateTimer(
			async () => {
				// send a message to the channel
				const embed = new MessageEmbed()
					.setColor(0x4286f4)
					.setTitle(`Game Over! Winner is ${game.winner}`)
					.setDescription(
						`The game is over! Total jackpot Reward is 10BTC.\n` +
						`The winner is ${game.winner}. Type /new-game to start a new game.`
					);
				await interaction.channel.send({ embeds: [embed] });
			},
			interaction.user.username
		);

		const privateEmbed = new MessageEmbed().setColor(0x4286f4)
			.setTitle(`Pushed!`)
			.setDescription(interaction.user.username + " pushed the button! Timer has been reset.");
		await interaction.reply({ embeds: [privateEmbed], ephemeral: true });

		const publicEmbed = new MessageEmbed().setColor(0x4286f4)
			.setTitle(`Pushed!`)
			.setDescription("Someone pushed the button! Timer has been reset.\n" + " Winning Time: <t:" + game.timestamp + ">");
		await interaction.channel.send({ embeds: [publicEmbed] });
	},
};
