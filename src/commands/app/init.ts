import { Command } from "@cliffy/command";

export default new Command()
  .description("Initialize a new application")
  .option("--name <name:string>", "Application name", { required: true })
  .option("--template <template:string>", "Application template")
  .action(async (options) => {
    console.log("Initializing application:", options.name);
    if (options.template) {
      console.log("Using template:", options.template);
    }
  }); 