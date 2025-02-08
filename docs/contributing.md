# Contributing Guide

## Prerequisites

- [Deno](https://deno.land/) 2.1.7 or higher
- [Git](https://git-scm.com/) 2.x or higher

## Development Process

1. Fork the repository
2. Create a feature branch following our branch naming convention
3. Make your changes
4. Write or update tests
5. Submit a pull request

## Code Style

We follow the [Deno Style Guide](https://deno.land/manual/contributing/style_guide) with these additional guidelines:
- Follow best practices and idioms
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions focused and small
- Use TypeScript strictly typed code
- Format code using `deno fmt`
- Ensure all linting passes with `deno lint`

## Branch Naming

Use the following conventions for branch names:
- Feature branches: `feature/description`
- Bug fixes: `fix/description`
- Documentation: `docs/description`
- Release branches: `release/v1.2.3`

Example: `feature/add-kubernetes-support`

## Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/). Each commit message must be structured as:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

Where `type` is one of:
- feat: A new feature
- fix: A bug fix
- docs: Documentation changes
- style: Code style changes
- refactor: Code refactoring
- perf: Performance improvements
- test: Adding or updating tests
- build: Build system changes
- ci: CI/CD changes
- chore: Other changes

Examples:
```bash
feat(k8s): add support for Kubernetes deployments
fix(config): resolve environment variable parsing issue
docs(readme): update installation instructions
```

## Running Locally

```bash
# Run the CLI without compiling
deno task dev --version
```

## Building the CLI

```bash
# Build the CLI
deno task build
```

## Running the CLI

```bash
# Run the CLI
./dist/id8 --version

# Optionally, set an alias in your shell
alias id8-dev=$(readlink -f ./dist/id8)
```

## Testing

```bash
# Run all tests
deno test

# Run specific test file
deno test src/commands/platform/test.ts

# Run tests with coverage
deno test --coverage=coverage
```

## CI/CD Process

Our CI/CD pipeline includes:
1. Automated tests on pull requests
2. Code quality checks:
   - Formatting validation
   - Linting
   - Type checking
3. Conventional commit validation
4. Coverage reporting
5. Automated releases when merging to main

## Pull Request Process

1. Update documentation for any new features
2. Add tests for new functionality
3. Ensure CI passes
4. Get review from maintainers
5. Squash commits before merge

## Getting Help

- Join our community chat
- Ask questions in GitHub discussions
- Tag issues with 'help wanted' 