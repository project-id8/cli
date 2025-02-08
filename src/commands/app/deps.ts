import { Command } from "@cliffy/command";

export default new Command()
  .description("Manage application dependencies")
  .command(
    "add",
    new Command()
      .description("Add a dependency")
      .option("--depends-on <app:string>", "Dependent application name", {
        required: true,
      })
      .action(async (options) => {
        console.log("Adding dependency:", options.dependsOn);
      }),
  )
  .command(
    "graph",
    new Command()
      .description("View dependency graph")
      .action(async () => {
        console.log("Generating dependency graph...");
      }),
  );
