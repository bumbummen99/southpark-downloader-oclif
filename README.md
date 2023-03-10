oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g southpark-downloader
$ spdl COMMAND
running command...
$ spdl (--version)
southpark-downloader/0.0.0 linux-x64 node-v19.5.0
$ spdl --help [COMMAND]
USAGE
  $ spdl COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`spdl hello PERSON`](#spdl-hello-person)
* [`spdl hello world`](#spdl-hello-world)
* [`spdl help [COMMANDS]`](#spdl-help-commands)
* [`spdl plugins`](#spdl-plugins)
* [`spdl plugins:install PLUGIN...`](#spdl-pluginsinstall-plugin)
* [`spdl plugins:inspect PLUGIN...`](#spdl-pluginsinspect-plugin)
* [`spdl plugins:install PLUGIN...`](#spdl-pluginsinstall-plugin-1)
* [`spdl plugins:link PLUGIN`](#spdl-pluginslink-plugin)
* [`spdl plugins:uninstall PLUGIN...`](#spdl-pluginsuninstall-plugin)
* [`spdl plugins:uninstall PLUGIN...`](#spdl-pluginsuninstall-plugin-1)
* [`spdl plugins:uninstall PLUGIN...`](#spdl-pluginsuninstall-plugin-2)
* [`spdl plugins update`](#spdl-plugins-update)

## `spdl hello PERSON`

Say hello

```
USAGE
  $ spdl hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/bumbummen99/southpark-downloader/blob/v0.0.0/dist/commands/hello/index.ts)_

## `spdl hello world`

Say hello world

```
USAGE
  $ spdl hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ spdl hello world
  hello world! (./src/commands/hello/world.ts)
```

## `spdl help [COMMANDS]`

Display help for spdl.

```
USAGE
  $ spdl help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for spdl.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.4/src/commands/help.ts)_

## `spdl plugins`

List installed plugins.

```
USAGE
  $ spdl plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ spdl plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.3.0/src/commands/plugins/index.ts)_

## `spdl plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ spdl plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ spdl plugins add

EXAMPLES
  $ spdl plugins:install myplugin 

  $ spdl plugins:install https://github.com/someuser/someplugin

  $ spdl plugins:install someuser/someplugin
```

## `spdl plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ spdl plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ spdl plugins:inspect myplugin
```

## `spdl plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ spdl plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ spdl plugins add

EXAMPLES
  $ spdl plugins:install myplugin 

  $ spdl plugins:install https://github.com/someuser/someplugin

  $ spdl plugins:install someuser/someplugin
```

## `spdl plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ spdl plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ spdl plugins:link myplugin
```

## `spdl plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ spdl plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ spdl plugins unlink
  $ spdl plugins remove
```

## `spdl plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ spdl plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ spdl plugins unlink
  $ spdl plugins remove
```

## `spdl plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ spdl plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ spdl plugins unlink
  $ spdl plugins remove
```

## `spdl plugins update`

Update installed plugins.

```
USAGE
  $ spdl plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
