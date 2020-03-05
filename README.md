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

const listener = keyCombListener(['ArrowUp', 'ArrowDown'], Infinity, result => {
    if (result.done) {
        return console.log(`🔥 something!`);
    }

    console.log(result, `keep 👂`)
})

document.addEventListener(`keydown`, listener)
```
