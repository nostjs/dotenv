# dotenv
DotENV even easier yet.

## Installation
1. Install the @nostjs/dotenv package on your project:
```
$ npm i --save @nostjs/dotenv
```
2. Create a .env file:
```
$ touch .env
```

## Usage
Example .env file:
```
MONGODB_URI=mongodb://localhost:27017/users
```

getting environment variables:
*TypeScript*
```typescript
import env from '@nostjs/dotenv';

const result = env.get('MONGODB_URI');

console.log(result); //MONGODB_URI=mongodb://localhost:27017/users
```
*Common JS*
```javascript
const env = require('@nostjs/dotenv');

const result = env.get('MONGODB_URI');

console.log(result); //MONGODB_URI=mongodb://localhost:27017/users
```
