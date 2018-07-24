const cp = require('child_process');

process.on('exit', (code) => {
  console.log(`父进程运行总时长: ${process.uptime()}`);
});

function fibonacci(n) {
  return n < 2 ? 1 : fibonacci(n-1) + fibonacci(n-2);
}

cp.fork(`${__dirname}/3-fork-child.js`);

let time1 = process.hrtime();
console.log(`time1: ${time1}`);
console.info('fibo45:' + fibonacci(45));
console.info('fibo45耗时', process.hrtime(time1));