import { Command } from "@cliffy/command";

export default new Command()
  .description("Sets CLI configuration variables")
  .arguments("<pairs...>")
  .action((options, ...args) => {
    console.log("Not implemented.", {options, args});
  })