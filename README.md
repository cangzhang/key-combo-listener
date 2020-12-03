# Key Combo Listener

👂 for key combo and 🔥.

With typescript support of course.

## Installation

With yarn:
```
yarn add key-combo-listener
```

With npm:
```
npm install key-combo-listener --save
```

## How to use

Use it like this:

```javascript
import keyComboListener from 'key-combo-listener';

const keyCombo = ['ArrowUp', 'ArrowDown'];
const timeout = 5000;
const listener = keyComboListener(keyCombo, timeout, result => {
    if (result.done) {
        return console.log(`🔥 something!`);
    }

    console.log(`keep 👂`, result);
})

document.addEventListener(`keydown`, listener);
```

## Configuration

`key-combo-listener` accepts 3 parameters.
| Param    | Type       | Default Value |
|----------|------------|---------------|
| key comb | string[]   | []            |
| timeout  | number(ms) | Infinity      |
| callback | function   | () => null    |

## TODO
- [x] ~~typescript support~~
