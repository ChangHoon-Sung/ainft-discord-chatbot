<h1 align="center">Button Game 🎲</h1>

![screenshot](https://64.media.tumblr.com/b8c3caca1a55015b615c5c41914c0801/a7f9c3b74b56eb6c-6e/s2048x3072/e52abb75132601e7208b67421022d702d1b536fb.pnj)

## Introduction

간단한 Button Game을 구현한 `Discord-Bot`입니다. 
> Button Game은 원버튼 게임입니다. 게임을 시작하면 타이머가 작동하고, 시작한 사람은 최초의 승리 예정자가 됩니다. 이때 누군가가 버튼을 누르면 타이머가 초기화되고, 승리 예정자가 버튼을 누른 사람으로 바뀝니다. 애석하게도, 승리 예정자는 버튼을 누를 수 없습니다. 게임의 시간이 흐름에 따라 점수는 점점 증가합니다. 아무도 버튼을 누르지 않아 타이머가 종료되면 승리 예정자가 승리를 확정짓고, 모든 점수를 가져갑니다!

버튼 게임의 특징은 단순하고 참여와 보상이 확실하다는 것입니다. 위 게임의 룰과 보상을 적절히 활용하여, 유저가 디스코드 커뮤니티에 접속해야 하는 또 하나의 동기를 부여해보세요.

## Command

- /new-game: 새로운 게임을 시작합니다. 이미 진행 중인 게임이 있으면 무시합니다.
- /push: 버튼을 눌러 타이머를 초기화하고, 자신을 승리 예정자로 등록합니다. 현 승리 예정자가 누르면 무시합니다.

## 규칙 관련 핵심 변수 (game.js)
- TIMER_AMOUNT_SEC: 버튼을 누른 순간으로부터 승리까지의 타이머 시간 (초), 기본값: 30
- REWARD_INCREASE_INTERVAL_SEC: 보상이 증가하는 주기 (초), 기본값: 5
- MAX_REWARD: 적립 가능한 최대 보상 한계, 기본값: 100

## 다양한 변형 규칙 (미구현)
- 점수 -> 코인, 토큰, 기프티콘 등 보상 다변화
- 최대 N회 기회 부여로 난이도 조절 및 심리적 요소 추가
- 특별한 보상 증가율이 적용된 이벤트 매치

## TODO
- 동시다발적으로 빠르게 커맨드 입력 시 지연 발생 문제
- 무한히 게임이 진행되지 않도록 조치 필요 (매크로 방지, 참여 횟수 제한 등)

## Requirements

Node.js 16+

## Install

```sh
npm install
```

## Envs (required)

- `sample.env`을 `.env`로 이름을 변경하고, 관련 환경 변수를 적절하게 채워 넣으세요.

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
