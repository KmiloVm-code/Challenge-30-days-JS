export function doTask1_old(callback) {
  setTimeout(() => callback('Task 1'), 300);
}

export function doTask2_(callback) {
  setTimeout(() => callback('Task 2'), 300);
}

export function doTask3_old(callback) {
  setTimeout(() => callback('Task 3'), 300);
}


export const doTask1 = () => new Promise((resolve, reject) => window.setTimeout(() => resolve('Task 1'), 300));

export const doTask2 = () => new Promise((resolve, reject) => window.setTimeout(() => resolve('Task 2'), 300));

export const doTask3 = () => new Promise((resolve, reject) => window.setTimeout(() => resolve('Task 3'), 300));