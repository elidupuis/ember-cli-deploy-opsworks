# ember-cli-deploy-opsworks

> An ember-cli-plugin to create an AWS OpsWorks deployment

[![npm](https://img.shields.io/npm/v/ember-cli-deploy-opsworks.svg)](https://www.npmjs.com/package/ember-cli-deploy-opsworks)  [![CI](https://github.com/elidupuis/ember-cli-deploy-archive/actions/workflows/ci.yaml/badge.svg)](https://github.com/elidupuis/ember-cli-deploy-archive/actions/workflows/ci.yaml)

**This ember-cli-deploy plugin is no longer maintained. If you'd like to take it over, ping me and I'll transfer ownership.**

## What is an ember-cli-deploy plugin?

A plugin is an addon that can be executed as a part of the ember-cli-deploy pipeline. A plugin will implement one or more of the ember-cli-deploy's pipeline hooks.

For more information on what plugins are and how they work, please refer to the [Plugin Documentation][1].

## Quick Start
To get up and running quickly, do the following:

- Ensure [ember-cli-deploy-build][2] is installed and configured.

- Install this plugin

```bash
$ ember install ember-cli-deploy-opsworks
```

- Run the pipeline

```bash
$ ember deploy
```

## ember-cli-deploy Hooks Implemented

For detailed information on what plugin hooks are and how they work, please refer to the [Plugin Documentation][1].

- `activate`

## Configuration Options

For detailed information on how configuration of plugins works, please refer to the [Plugin Documentation][1].

Place the following configuration into `config/deploy.js`;

```javascript
ENV.opsworks = {
  stackId: process.env.AWS_STACK_ID,
  appId: process.env.AWS_APP_ID,
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_SECRET
}
```

[1]: http://ember-cli.github.io/ember-cli-deploy/plugins "Plugin Documentation"
[2]: https://github.com/ember-cli-deploy/ember-cli-deploy-build "ember-cli-deploy-build"
