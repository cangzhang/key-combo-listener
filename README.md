# Key Comb Listener

👂 for key comb and 🔥.

## Installation

With yarn:
```
yarn add key-comb-listener
```

With npm:
```
npm install key-comb-listener --save
```

## How to use

Use it like this:

```javascript
import keyCombListener from 'key-comb-listener';

const keyComb = ['ArrowUp', 'ArrowDown'];
const timeout = 5000;
const listener = keyCombListener(keyComb, timeout, result => {
    if (result.done) {
        return console.log(`🔥 something!`);
    }

    console.log(`keep 👂`, result);
})

document.addEventListener(`keydown`, listener);
```

## Configuration

`key-comb-listener` accepts 3 parameters.
| Param    | Type       | Default Value |
|----------|------------|---------------|
| key comb | string[]   | []            |
| timeout  | number(ms) | Infinity      |
| callback | function   | () => null    |

## TODO
- [x] ~~typescript support~~
