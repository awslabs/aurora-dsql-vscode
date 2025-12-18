# Aurora DSQL Driver for SQLTools

A Visual Studio Code extension for Aurora DSQL that integrates with SQLTools, enabling developers to connect to and query Amazon Aurora DSQL databases directly from VS Code. 

## Overview

Features:

- IAM authentication configuration.
- Standard database operations like browsing schemas, tables, and executing SQL queries.


## Prerequisites

- [SQLTools extension](https://vscode-sqltools.mteixeira.dev) installed

## Installation

1. Start Visual Studio Code
2. Open the Extensions view
3. Search for 'Aurora DSQL Driver'
4. Click 'Install'

## Create an Aurora DSQL Connection

1. Click the SQLTools icon in the left sidebar.
2. In the SQLTools pane, hover over CONNECTIONS and click the Add New Connection icon.
3. In the SQLTools Settings tab select Aurora DSQL from the list.
4. Fill in the connection parameters. 
5. Click the 'Test Connection button' to test the connection
6. Click Save click Save Connection.


## Developer

### Prerequisites

- Typescript
- Nodejs
- Visual Studio Code

### Building

In the project directory run the following commands

```
npm install
npm run compile
```

### Run tests

```
# Run all tests
npm test

# Run only unit tests
npm run test:unit

# Run only integration tests
npm run test:integration
```


