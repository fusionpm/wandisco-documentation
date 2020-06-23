---
id: operation
title: Operation
sidebar_label: Operation
---

:::note Public Preview
LiveData Migrator is in public preview. This gives you access to all product functionality for review, but limits operation time to 10 minutes during the preview period.
:::

Here, you'll find information about how to interact with LiveData Migrator to create and manage resources that control your migrations.

If you're new to the concept of LiveData, or want to know what LiveData Migrator does, please read the [introduction to LiveData Migrator](./about.md) before learning [how to install](./getting-started.md) and use the product.

## Operating LiveData Migrator

Control how LiveData Migrator performs migrations using commands at the action prompt `WANdisco LiveMigrator >>`. The prompt is available immediately when you run LiveData Migrator from the command line.

If you are running it as a system service, you will need to [configure](./configuration.md#ssh-access) and use SSH to access the action prompt. By default, SSH access is insecure, with username `user`, and password `password` on port 2222.

```text
$ ssh user@localhost -p 2222
```

Change this using the [configuration properties](./configuration.md#ssh-access) for SSH access to:
1. **Comment out the SSH password configuration property** `ssh.shell.password` so that password access is disabled, and
2. **Specify an authorized keys file** with `ssh.shell.authorized-public-keys-file` to allow access only from authorized clients that hold a matching private key.

### Interactive Commands

The action prompt provides many features to guide you during operation, including:

| Feature | How to use it |
|---|---|
| **Interactive help** | Type `help` at the action prompt. |
| **Review available commands** | Commands that cannot be used without creating other resources first are tagged with `*` in the output of the `help` command. |
| **Command completion** | Hit the `<tab>` key at any time to get assistance or to complete partially-entered commands. |
| **Cancel input** | Type `<Ctrl-C>` before entering a command to return to an empty action prompt. |
| **Syntax indication** | Invalid commands are highlighted as you type. |
| **Clear the display** | Type `<Ctrl-L>` at any time. |
| **Show command history** | Type `history` at the action prompt. |
| **Previous commands** | Navigate previous commands using the up and down arrows, and use standard emacs shortcuts. |
| **Interactive or scripted operation** | You can interact with the command line interface directly, or send it commands on standard input to incorporate it into shell scripts. |

### LiveData Migrator Resources

You define three different types of resources when operating LiveData Migrator:

**File systems**: Create and manage file system resources to specify how LiveData Migrator connects to and uses file systems as migration sources and targets.

**Migrations**: Initiate data migration by creating migration resources. A migration references the source and target file system resources, and adds additional information to specify the path for content to be migrated, and may reference exclusion resources.

**Exclusions**: Constrain the content migrated by creating and referencing exclusion resources. Use different types of exclusions to enforce constaints with different conditions, e.g. by file size or by a regular expression match against the file name.

## LiveData Migrator Commands

There are five types of commands in LiveData Migrator: *Built-in*, *Exclusion*, *File System*, *Migration* and *Source* commands.  Each will respond with either JSON-formatted output, or with plain text output. You can find a summary of those commands here, each of which links to details in the [LiveData Migrator Command Reference](./command-reference.md).

Find a full list of commands that can be used at the action prompt with the `help` command. Get command specific help by typing `help <command>` for each command available.

Use tab-completion to become familar with the commands available and options that should be provided to them. Type the `<tab>` key if you are uncertain whether a command requires an additional parameter, or if you need to provide a specific value. It will help auto-complete parameter values, and display options available for any command.

### [Built-In Commands](./command-reference.md#built-in-commands)

The built-in commands are always available in a LiveData Migrator command line interactive session. They are unrelated to migration resources and operation (other than `exit`/`quit`), but help you to interact with LiveData Migrator and automate processing through scripts for the action prompt.

| Command | Action |
|:---|:---|
| [`clear`](./command-reference.md#clear) | Clear the shell screen |
| [`exit`](./command-reference.md#exit)/[`quit`](./command-reference.md#exit) | Exit the interactive session with the action prompt, and stop LiveData Migrator if not running as a system service. You can also exit the session with `<Ctrl-D>`. |
| [`help`](./command-reference.md#help) | Display help about available commands |
| [`history`](./command-reference.md#history) | Display or save the history of previously run commands |
| [`script`](./command-reference.md#script) | Read and execute commands from a file |
| [`stacktrace`](./command-reference.md#stacktrace) | Display the full stacktrace of the last error |

### [Exclusion Commands](./command-reference.md#exclusion-commands)

Define exclusion resources to constrain the content migrated by a migration resource. Different types of exclusions allow you to selectively ignore content from the source file system so that you have full control over what is transferred to, and modified in the target during migration. Exclusions need to be associated with migrations to take effect for them. You can do this when you create a migration resource, or associate exclusions with an existing migration.

Modifying exclusions on a migration that is in progress will change the future actions performed for that migration, but will not affect previously migrated content. Adding exclusions when a migration is created ensures a migration outcome consistent in full with those exclusions.

| Command | Action |
|:---|:---|
| [`exclusion add file-size`](./command-reference.md#exclusion-add-file-size) | Create a new file size rule |
| [`exclusion add regex`](./command-reference.md#exclusion-add-regex) | Create a new regex exclusion rule |
| [`exclusion del`](./command-reference.md#exclusion-del) | Delete an exclusion rule |
| [`exclusion list`](./command-reference.md#exclusion-list) | List all exclusion rules |
| [`exclusion show`](./command-reference.md#exclusion-show) | Get details for a particular exclusion rule |

### [File System Commands](./command-reference.md#file-system-commands)

Create file system resources to provide LiveData Migrator with the information needed to read content from your source and migrate content to your target. A range of different file system types are supported as targets, including [ADLS Gen 2](https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction), [HDFS](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html), local file systems, and [S3A](https://hadoop.apache.org/docs/current/hadoop-aws/tools/hadoop-aws/index.html). LiveData Migrator currently supports HDFS file systems as a migration source.

You can define multiple target file systems, and have migrations operating at the same time to them.

| Command | Action |
|:---|:---|
| [`filesystem add adls2 sharedKey`](./command-reference.md#filesystem-add-adls2-sharedkey) | Add an ADLS Gen 2 file system resource |
| [`filesystem add hdfs`](./command-reference.md#filesystem-add-hdfs) | Add a Hadoop HDFS file system resource |
| [`filesystem add local`](./command-reference.md#filesystem-add-local) | Add a local file system resource |
| [`filesystem add s3a`](./command-reference.md#filesystem-add-s3a) | Add an S3 file system resource |
| [`filesystem clear`](./command-reference.md#filesystem-clear) | Delete all target file systems |
| [`filesystem del`](./command-reference.md#filesystem-del) | Delete a target file system |
| [`filesystem list`](./command-reference.md#filesystem-list) | List of target file systems |
| [`filesystem show`](./command-reference.md#filesystem-show) | Get target file system details |
| [`filesystem types`](./command-reference.md#filesystem-types) | List the types of target file systems available |

### [Migration Commands](./command-reference.md#migration-commands)

Create migration resources to define and initiate data migration. Migration occurs from your source file system to a target defined using a `filesystem` command. Migrations will transfer existing data, as well as any subsequent changes made to data in their scope, automatically maintaining the data in the target to be as current as possible with any changes to the source while LiveData Migrator remains in operation.

You will typically create multiple migrations so that you can select specific content from your source file system by location. It is also possible to migrate to multiple independent file systems at the same time by defining multiple migration resources.

| Command | Action |
|:---|:---|
| [`migration abort`](./command-reference.md#migration-abort) | Abort a migration |
| [`migration del`](./command-reference.md#migration-del) | Delete a migration |
| [`migration exclusion add`](./command-reference.md#migration-exclusion-add) | Add an exclusion to a migration |
| [`migration exclusion del`](./command-reference.md#migration-exclusion-del) | Remove an exclusion from a migration |
| [`migration list`](./command-reference.md#migration-list) | List running and active migrations |
| [`migration new`](./command-reference.md#migration-new) | Create a new migration |
| [`migration run`](./command-reference.md#migration-run) | Start or resume a migration |
| [`migration show`](./command-reference.md#migration-show) | Get migration details |
| [`status`](./command-reference.md#status) | Get migration status |

Migrations exist in one of eight states:

`NONSCHEDULED`
: A *non-scheduled migration* has been defined but not yet started. Create a migration in this state by not specifying the `--auto-start` parameter on creation.

`SCHEDULED`
: A *scheduled* migration will start when directed to run.

`STARTING`
: A *starting* migration is being started and will soon begin transferring content to the target.

`RUNNING`
: A *running* migration is scanning through source content and transferring content to the target, as well as responding to change notifications from the source if applicable.

`LIVE`
: A *live* migration has completed scanning through source content, continues to respond to change notifications from the source, and will transfer content to and make changes in the target as required.

`PAUSING`
: A *pausing* migration has been instructed to pause transfer, but is temporarily continuing to make changes to the target.

`PAUSED`
: A *paused* migration has been instructed to pause transfer, and is not transferring content or making other changes to the target.

`ABORTED`
: An *aborted* migration will not make any changes to the target and cannot be run again.

### [Source Commands](./command-reference.md#source-commands)

LiveData Migrator migrates data from a source file system. The source file system is normally detected on startup when launched using `hadoop jar live-migrator.jar`, but will not be detected automatically if LiveData Migrator is launched as a system service, or if your Hadoop configuration does not contain the information needed to connect to the Hadoop file system. You can manage the source file system through these commands.

| Command | Action |
|:---|:---|
| [`source clear`](./command-reference.md#source-clear) | Delete all sources |
| [`source del`](./command-reference.md#source-del) | Delete a source |
| [`source fs show`](./command-reference.md#source-fs-show) | Show the source FileSystem configuration |

Use the `--source` parameter on the [`filesystem add hdfs`](./command-reference.md#filesystem-add-hdfs) command to create a suitable HDFS source file system when running as a system service.