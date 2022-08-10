const os = require("os");

// Info about current user
const user = os.userInfo();
console.log(user);

// Info about system uptime
// const uptime = os.uptime();
console.log(`The systems uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
