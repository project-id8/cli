# Platform Management

## Overview

The platform commands are intended to help with the management of the platform
itself.

## Application Lifecycle

### Bootstrapping

```bash
# Bootstrap the platform
# Note: Expects kubeConfig and kubeContext to be set
id8 platform:bootstrap
```

### Configuration

```bash
# Set configuration variables
id8 platform:config set kubeConfig ~/.kube/config
id8 platform:config set kubeContext default
```
