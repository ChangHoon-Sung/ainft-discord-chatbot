<h1 align="center">Welcome to Discord Bot 👋</h1>

## Introduction

`Discord-Bot` 을 가져다가 원하는 부분만 수정해서 Discord Bot을 만들 수 있습니다. Discord Bot API 중 가장 많이 사용하는 /command 기능과 /trigger 기능만 남겨 놓았습니다. 해당 부분을 간단히 수정해서 원하는 Discord Bot을 만들 수 있습니다.

> An **open source** `discord.js` bot template which is based on official [discord.js guide](https://discordjs.guide/) to get started on making your very personal discord bot!

### Features:

#### • **Slash Command Handler:**

- Slash Command(/command)를 손쉽게 수정해서 만들 수 있습니다.
- ./interactions/slash 폴더 아래 slash command 파일을 추가하고 [`CommandInteraction`](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) object를 넣는 식으로 command를 추가 할 수 있습니다 . 자세한 내용은 아래 [documentation of discord.js](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) 를 참고해 주세요.
- 대충 [setChannel.js](https://github.com/Laeyoung/discord-bot/blob/master/interactions/slash/setChannel.js) 를 복붙한 후에 바꾸는 식으로 하면 됩니다.  
- **중요:** Discord Bot은 2가지 형태로 등록을 할 수 있습니다. 내가 지정한 Discord Server (개발문서에서는 Guild라는 용어를 사용)만 사용하게 하는 것과 Global 하게 모든 Server에서 사용하게 하는 방법, 2가지가 있습니다. 전자는 내가 설정한 서버에서만 사용 할 수 있고, 새로 생성한 Slash Command가 바로 반영이 됩니다. 후자는 반영이 되는데 최대 1시간까지 걸릴 수 있습니다.

#### • **Trigger Handler:**

- Trigger는 유저가 `특정 채널`에 보낸 보낸 메세지에 `특정 문구`가 있을 때, 동작을 합니다.
- 채널은 설정을 해야하며, `/set-channel` 명령어를 이용해 설정 할 수 있습니다.
- 기본 설정은 아래와 같이 설정 되어 있습니다.
  - keywords: `ainft`
  - prefixes: `yeoreum`
  - suffixes: `?`
- 예를 들어, `?`로 끝나는 문장에 Trigger가 됩니다.
- 자세한 내용은 다음 파일을 참고해보세요, [`chatbot.js`](https://github.com/Laeyoung/discord-bot/blob/master/triggers/chatbot.js).

## Requirements

Node.js 16+

## Install

```sh
npm install
```

## Envs

- rename [`sample.env`](https://github.com/NamVr/DiscordBot-Template/blob/master/sample.env) to `.env` and fill the token and other values.

## Run

### for production
```sh
npm start
```

### for develop
```sh
npm run dev
```


## 📝 Acknowledgments

This project is based on [DiscordBot-Template](https://github.com/NamVr/DiscordBot-Template) by [Naman Vrati](https://github.com/NamVr)

---
