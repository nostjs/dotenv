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
Add this line in the .env file:
```
MONGODB=mongodb://localhost:27017/users
```

Getting environment variables:
```typescript
// TypeScript
import env from '@nostjs/dotenv';
const result = env.get('MONGODB');
console.log(result); // mongodb://localhost:27017/users
```
```javascript
// Common JS
const env = require('@nostjs/dotenv');
const result = env.get('MONGODB');
console.log(result); // mongodb://localhost:27017/users
```
Getting environment variables (default values):
```typescript
// TypeScript
import env from '@nostjs/dotenv';
const result = env.get('ENV', 'PRODUCTION');
console.log(result); // PRODUCTION
```
```javascript
// Common JS
const env = require('@nostjs/dotenv');
const result = env.get('ENV', 'PRODUCTION');
console.log(result); // PRODUCTION
```
Getting environment variables (if there is no):
```typescript
// TypeScript
import env from '@nostjs/dotenv';
const result = env.get('ENV'); // An error will be thrown
console.log(result);
```
```javascript
// Common JS
const env = require('@nostjs/dotenv');
const result = env.get('ENV');  // An error will be thrown
console.log(result);
```