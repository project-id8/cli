import { Command } from "@cliffy/command";
import { snapshotTest } from "@cliffy/testing";
import configCommand from "./config.ts";

// Test help output
await snapshotTest({
  name: "platform config command help",
  meta: import.meta,
  args: ["--help"],
  fn: async () => {
    await new Command()
      .command("platform:config", configCommand)
      .parse();
  },
});

// Test config set command
await snapshotTest({
  name: "platform config set command",
  meta: import.meta,
  args: ["platform:config", "set", "kubeConfig", "/path/to/config"],
  fn: async () => {
    await new Command()
      .command("platform:config", configCommand)
      .parse();
  },
});
