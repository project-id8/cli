import { Command } from "@cliffy/command";

export default new Command()
  .description("Initialize a new environment")
  .arguments("<name:string>")
  .option("--template <template:string>", "Template environment to copy from")
  .action(async (options, name) => {
    console.log("Initializing environment:", name);
    if (options.template) {
      console.log("Using template:", options.template);
    }
  });
