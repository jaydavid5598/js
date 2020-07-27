let input = process.argv[2];
let inputSplit = input.split(".");

let first = inputSplit[0].split("").map(Number);
let second = inputSplit[1].split("").map(Number);

let ftotal = first.reduce((acc, f) => acc + f, 0);
let stotal = second.reduce((acc, s) => acc + s, 0);

return console.log(ftotal + stotal);
