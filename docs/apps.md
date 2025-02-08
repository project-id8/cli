# Application Management

## Overview

Applications are the core unit of management in the platform. Each application
represents a service, component, or project that can be deployed and managed
across environments.

## Application Lifecycle

### Initialization

```bash
# Create a new application
id8 app:init --name my-service

# Initialize with a template
id8 app:init --name my-service --template nodejs-api
```

### Configuration

```bash
# Configure application settings
id8 app:config --app my-service --env dev set SOME_VAR=3
```

### Dependencies

```bash
# Add dependency on another application
id8 app:deps add --app my-service --depends-on auth-service

# View dependency graph
id8 app:deps graph --app my-service
```
