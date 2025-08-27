import { Command } from "commander";
import generator from "../src/generator.js";
const program = new Command();

// Inputs do CLI-TOOL
program
  .option("-l, --length <number>", "tamanho da password", "12")
  .option("-n, --numbers", "incluir numeros", true)
  .option("-s, --symbols", "incluir simbolos", true)
  .option("-u, --uppercase", "incluir letras maisculas", true);

program.parse(process.argv);

const options = program.opts();

let password = generator({
  length: parseInt(options.length, 10),
  numbers: options.numbers,
  symbols: options.symbols,
  uppercase: options.uppercase,
});
console.log(password);
