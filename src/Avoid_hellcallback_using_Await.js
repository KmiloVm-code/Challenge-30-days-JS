import { doTask1, doTask2, doTask3 } from './tasks2.js';

export async function runCode() {
  const strings = [];
  strings.push(await doTask1())
  strings.push(await doTask2())
  strings.push(await doTask3())

  return strings;
}

console.log(await runCode());