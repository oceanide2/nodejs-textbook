// It can get enviroment parameter with process.env module
// so that it cannot contain confidential information in the file.
// If environment parameter is NOT set, variable is undefined.

const id = process.env.ID;
const email = process.env.EMAIL;

console.log(`id : ${id}`);
console.log(`email : ${email}`);
