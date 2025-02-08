# Release Process

This document describes the process for creating and publishing new releases of
the ID8 CLI.

## Preparing a Release

We use an automated prepare-release workflow that can be triggered from GitHub
Actions:

1. Go to the "Actions" tab
2. Select "Prepare Release"
3. Click "Run workflow"
4. Choose the release type:
   - `auto` (default) - determines version based on conventional commits
   - `major` - for breaking changes
   - `minor` - for new features
   - `patch` - for bug fixes
5. Optionally specify a pre-release tag (e.g., 'beta')
6. Choose whether to do a dry run

The workflow will:

- Validate conventional commits
- Update version numbers
- Create a release branch
- Push changes for review

## Manual Release Process

If you need to create a release manually:

1. Update version numbers in relevant files:
   - `deno.json`
   - Any other version constants in the code

2. Create and push a new tag:

```bash
# Create a new version tag
git tag -a v0.1.0 -m "Release v0.1.0"

# Push the tag
git push origin v0.1.0
```

## Automated Steps

The GitHub Action will automatically:

1. Build binaries for all supported platforms:
   - macOS ARM64 (Apple Silicon)
   - macOS x64 (Intel)
   - Linux x64
   - Linux ARM64

2. Create a GitHub release with:
   - All platform binaries
   - SHA256 checksums
   - Release notes

3. Update the Homebrew formula:
   - Download the release checksums
   - Update version and SHA256 hashes in `homebrew/id8.rb`
   - Commit and push the changes

## Verification

After the GitHub Actions complete:

1. Verify the release was created on GitHub
2. Check that the formula was updated correctly
3. Test the installation:
   ```bash
   # Clear existing installation
   brew uninstall id8

   # Install new version
   brew update
   brew install id8

   # Verify version
   id8 --version
   ```

## Commit Requirements

All commits in the release must follow the
[Conventional Commits](https://www.conventionalcommits.org/) specification:

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

## Troubleshooting

If something goes wrong:

1. Check the GitHub Actions logs for build failures
2. If the formula update failed:
   - Check if the checksums in the formula match the release
   - Verify the platform-specific comments are present (e.g. `# arm64_darwin`)
   - Try updating the formula manually using the checksums from the release
3. If needed, you can delete the tag and release:
   ```bash
   # Delete local tag
   git tag -d v0.1.0

   # Delete remote tag
   git push --delete origin v0.1.0
   ```
