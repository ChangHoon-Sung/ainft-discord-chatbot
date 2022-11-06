<h1 align="center">Button Game 🎲</h1>

## Introduction

간단한 Button Game을 구현한 `Discord-Bot`입니다.
> Button Game은 원버튼 게임입니다. 게임을 시작하면 타이머가 작동하고, 시작한 사람은 최초의 승리 예정자가 됩니다. 이때 버튼을 누르면 타이머가 초기화되고, 승리 예정자가 버튼을 누른 사람으로 바뀝니다. 승리 예정자는 버튼을 누를 수 없습니다. 게임의 시간이 흐름에 따라 보상의 크기는 점점 증가합니다. 아무도 버튼을 누르지 않아 타이머가 종료되면 승리 예정자가 승리하고, 모든 보상을 가져갑니다!


### Features:

#### • **Slash Command Handler:**

- /new-game: 게임이 진행 중이지 않다면, 새로운 게임을 시작합니다. 이미 진행 중인 게임이 있으면 무시합니다.
- /push: 버튼을 눌러 타이머를 초기화하고, 자신을 승리 예정자로 등록합니다. 현 승리 예정자가 누르면 무시합니다.


### TODO:
- 동시다발적으로 빠르게 커맨드 입력 시 지연 발생 문제
- 무한히 버튼을 누르는 매크로를 방지하는 기능

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
