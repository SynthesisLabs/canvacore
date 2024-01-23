# Canvacore
Powerful image manipulation tool written in javascript.

[![downloadsBadge](https://img.shields.io/npm/dt/canvacore?style=for-the-badge)](https://npmjs.com/canvacore)
[![versionBadge](https://img.shields.io/npm/v/canvacore?style=for-the-badge)](https://npmjs.com/canvacore)

## Installation

```sh
$ npm install --save canvacore
```

## Example RankCard

```js
const { RankCard } = require("canvacore");
const data = require("Get your data somehow");

const card = await new RankCard()
    .setUsername(username)
    .setAvatar(avatar)
    .setCurrentXP(data.currentXP)
    .setRequiredXP(data.requiredXP)
    .setLevel(data.level)
    .build()

    // Do whatever you want with the card ->
```