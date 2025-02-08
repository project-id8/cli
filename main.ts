import { Command } from "@cliffy/command";
import { CompletionsCommand } from "@cliffy/command/completions";
import configSet from "./src/commands/config/set.ts";
import appInit from "./src/commands/app/init.ts";
import appConfig from "./src/commands/app/config.ts";
import appDeps from "./src/commands/app/deps.ts";
import envInit from "./src/commands/env/init.ts";
import platformBootstrap from "./src/commands/platform/bootstrap.ts";
import platformConfig from "./src/commands/platform/config.ts";

await new Command()
  .name("id8")
  .version("0.1.0")
  .versionOption(
    "-v, --version",
    "Print version info.",
    function (this: Command) {
      console.log(this.getVersion());
    },
  )
  .description("ID8 Platform CLI")
  .env("DEBUG=<enable:boolean>", "Enable debug output.")
  .option("--debug", "Enable debug output.")
  .option("-a, --app <app:string>", "Specify the application")
  .option("-e, --env <environment:string>", "Specify the environment")
  .action((options, ...args) => {
    console.log("Not implemented.", { options, args });
  })
  // Built-in commands
  .command("completions", new CompletionsCommand().global())
  // Config commands
  .command("config:set", configSet)
  // App commands
  .command("app:init", appInit)
  .command("app:config", appConfig)
  .command("app:deps", appDeps)
  // Environment commands
  .command("env:init", envInit)
  // Platform commands
  .command("platform:bootstrap", platformBootstrap)
  .command("platform:config", platformConfig)
  .parse(Deno.args);
