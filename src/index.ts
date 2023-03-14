// import { add } from './lib.mjs';
// const r = add(1, 2);
// console.log(r)

import fs from 'fs'
const s = fs.readFileSync('./readme.md', 'utf-8')
console.log(s)

// import pkg from 'my-pkg'
// pkg.log()

import { log } from 'my-pkg'
log()
