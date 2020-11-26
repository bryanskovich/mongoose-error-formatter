# mongoose-error-formatter
Format common mongoose errors

### Installation

```
npm install mongoose-error-formatter
```

### Usage
```javascript
const formatError = require("mongoose-error-formatter");

/**Parse mongoose error */
const formattedMessage = formatError(error)
console.log(formattedMessage)

```