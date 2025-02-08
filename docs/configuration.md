# Configuration

## Overview

The CLI can be configured using:
- Environment variables
- Configuration file (`~/.project-id8/config.yaml`)
- Command line arguments

## Global Options

All commands support these global options:

- **`--app` / `-a`**: Specifies the application/resource group
- **`--env` / `-e`**: Specifies the environment (e.g., `dev`, `staging`, `prod`)

## Setting Defaults

Set default context to avoid repeating options:

```bash
id8 config:set app payment-service
id8 config:set env dev
``` 

## Configuration Precedence

1. Command line arguments
2. Environment variables
3. Configuration file
4. Default values

## Command Line

```bash
id8 config:set kubeConfig ~/.kube/config
id8 config:set kubeContext platform-cluster
```

## Configuration File

```yaml
# ~/.project-id8/config.yaml
default:
  app: payment-service
  env: dev
platform:
  kubeConfig: ~/.kube/config
  kubeContext: platform-cluster
```

## Environment Variables

```bash
PLATFORM_APP=payment-service
PLATFORM_ENV=dev
PLATFORM_KUBE_CONFIG=~/.kube/config
PLATFORM_KUBE_CONTEXT=platform-cluster
``` 
