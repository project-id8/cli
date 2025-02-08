import { Command } from "@cliffy/command";

export default new Command()
  .description("Configure application settings")
  .arguments("<key> [value:string]")
  .action((key, value) => {
    if (value) {
      console.log(`Setting ${key}=${value}`);
    } else {
      console.log(`Getting value for ${key}`);
    }
  });
