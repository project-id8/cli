# ID8 CLI

The `id8` CLI is a command line tool designed for platform engineering teams
adopting GitOps practices. It provides a unified interface to manage
applications and platform services through infrastructure-as-code.

[![Release](https://img.shields.io/github/v/release/project-id8/cli)](https://github.com/project-id8/cli/releases)
[![Build Status](https://github.com/project-id8/cli/workflows/Release/badge.svg)](https://github.com/project-id8/cli/actions)
[![License](https://img.shields.io/github/license/project-id8/cli)](LICENSE)

## Requirements

- Deno 2.1.7 or higher
- Git 2.x or higher

## Features

- Application-centric platform management
- GitOps-first workflow with infrastructure-as-code
- Environment promotion and configuration management
- Secure secrets handling with external secret stores
- Built-in observability tooling
- Automated compliance and policy enforcement

## Quick Start

1. Install the CLI:

```bash
# Using homebrew
brew tap id8/cli https://github.com/project-id8/cli/homebrew
brew install id8

# Verify installation
id8 --version
```

2. Set your default context:

```bash
id8 config set --app my-service
id8 config set --env dev
```

3. Start managing your application:

```bash
# Initialize a new application
id8 app:init

# View application status
id8 app:status
```

## Documentation

- [Installation Guide](docs/installation.md)
- [Platform Management](docs/platform.md)
- [Configuration](docs/configuration.md)
- [Application Management](docs/apps.md)
- [Environment Management](docs/environments.md)
- [Release Process](docs/releasing.md)

## Contributing

See our [Contributing Guide](docs/contributing.md) for details on our code of
conduct and development process.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.

## Support

For support, please:

1. Check the [documentation](https://docs.project-id8.org)
2. Open an issue on GitHub
3. Contact the platform engineering team

## Roadmap

- [ ] Platform management
- [ ] Application management
- [ ] Environment management
- [ ] Configuration management
- [ ] Policy enforcement
- [ ] Cost management
- [ ] Resource optimization
