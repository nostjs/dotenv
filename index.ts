import dotenv from 'dotenv';

const result = dotenv.config();
 
if (result.error) {
  throw result.error;
}

function get(env: string, val?: string) {
  const res = process.env[env];

  if (res) {
    return res;
  } else {
    if (val) {
      return val;
    } else {
      throw new Error(`environment variable '${env}' could not be found.`);
    }
  }
}

function set(env: string, val: string): void {
  process.env[env] = val;
}

export default {
  get,
  set,
}

// console.log(result.parsed);