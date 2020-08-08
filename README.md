# Star Wars Clash

Star Wars card game built using [SWAPI](https://swapi.dev/). The application allows a user to select a random card from one of the card decks and clash them by comparing the common attribute. The stronger card wins. The game tracks score for each player.

## Demo

[You can see it in action right here.](https://star-wars-clash.netlify.app/)

## Requirements

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [npm](https://www.npmjs.com/) - Node.js dependency manager

## Setup

### Dependencies

Install dependencies:

```
$ npm install
```

### IDE

IntelliJ IDEA / WebStorm / PhpStorm:

1. Install the following plugins:

   - [Prettier](https://plugins.jetbrains.com/plugin/10456-prettier)
   - [EditorConfig](https://plugins.jetbrains.com/plugin/7294-editorconfig)
   - [.ignore](https://plugins.jetbrains.com/plugin/7495--ignore)

2. Go to `File > Settings > Languages & Frameworks > JavaScript > Prettier`

   Check `Run on save for files` and use below as a value:

   ```
   {**/*,*}.{js,ts,html,scss,json,md}
   ```

From now on every change in code base will be automatically formatted by [Prettier](https://prettier.io/).

## Development

1. Run server:

   ```
   $ npm start
   ```

2. Navigate to [http://localhost:4200/](http://localhost:4200/).

3. Change some code.

## Tests

Run unit tests:

```
$ npm run test
```

Run E2E tests:

```
$ npm run e2e
```

## Build

Run build command:

```
$ npm run build
```

The build artifacts will be stored in the `dist/` directory.
