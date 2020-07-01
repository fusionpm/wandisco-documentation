---
id: command-reference
title: Command Reference
sidebar_label: Command Reference
---

:::note Public Preview
LiveData Migrator is in public preview. This gives you access to all product functionality for review, but limits operation time to 10 minutes during the preview period.
:::

Find a comprehensive description of each command available from the LiveData Migrator action prompt here. Review the [LiveData Migrator Operation](./operation.md) guide for information on how to use the commands to perform migration.

Each command description below includes the information available from the action prompt using the `help` command. Tab-completion will also give you guidance when entering commands on the available options and to auto-complete values needed.

## Built-in Commands

----
### `clear`

Clear the interactive action prompt screen output with the `clear` command. You can also type `<Ctrl-L>` to achieve the same, even while typing another command.

```text title="Clear the shell screen"
SYNOPSYS
        clear
```

----
### `exit` or `quit`

Entering either `exit` or `quit` will stop operation of LiveData Migrator when it is run from the command line. All processing will cease, and you will be returned to your system shell.

If your LiveData Migrator command line is connected to a LiveData Migrator system service, this command will end your interactive session with that service, which will remain in operation to continue processing Live migrations.

If this command is encountered during non-interactive processing of input (such as when you pipe input to an instance as part of another shell script) no further commands contained in that input will be processed.

```text title="Exit the shell"
SYNOPSYS
        exit

ALSO KNOWN AS
        quit
```

----
### `help`

Use the `help` command to get details of all commands available from the action prompt.

```text title="Display help about available commands"
SYNOPSYS
        help [[-C] string]

OPTIONS
        -C or --command  string
                The command to obtain help for.
                [Optional, default = <none>]
```

#### Optional Parameters
* **`--command`**, **`-C`** The command for which help information is wanted

#### Examples

```text
WANdisco LiveMigrator >> help
AVAILABLE COMMANDS

Built-In Commands
        clear: Clear the shell screen.
        exit, quit: Exit the shell.
        help: Display help about available commands.
        history: Display or save the history of previously run commands
        postprocessors: Display the available post processors
        script: Read and execute commands from a file.
        stacktrace: Display the full stacktrace of the last error.

Exclusion Commands
        exclusion add file-size: Create a new file size rule.
        exclusion add regex: Create a new regex exclusion rule.
        exclusion del: Delete an exclusion rule.
        exclusion list: List all exclusion rules.
        exclusion show: Get details for a particular exclusion rule.

Filesystem Commands
        filesystem add adls2 sharedKey: Add an ADLS2 via HCFS API FileSystem With Shared Key
        filesystem add hdfs: Add an Hadoop HDFS FileSystem
        filesystem add local: Add an Local FileSystem via HCFS FileSystem
        filesystem add s3a: Add an S3A via HCFS API FileSystem.
        filesystem clear: Delete all targets.
        filesystem del: Delete a target.
        filesystem list: List of targets.
        filesystem show: Get target details.
        filesystem types: List the types of target Filesystems available

Migration Commands
        migration abort: Abort a migration.
        migration del: Delete a migration.
        migration exclusion add: Add an exclusion to a migration.
        migration exclusion del: Remove an exclusion from a migration.
        migration list: List running and active migrations.
      * migration new: Create a new migration.
        migration run: Start or resume a migration.
        migration show: Get migration details.
        status: Get migration status.

Source Commands
        source clear: Delete all sources.
        source del: Delete a source.
        source fs show: Show the source FileSystem Configuration

Commands marked with (*) are currently unavailable.
Type `help <command>` to learn more.
```

```text
WANdisco LiveMigrator >> help migration\ list

NAME
        migration list - List running and active migrations.

SYNOPSYS
        migration list
```

----
### `history`

Enter `history` at the action prompt to list all previously entered commands.

Entering `history --file <filename>` will save up to 500 most recently entered commands in text form to the file specified. Use this to record commands that you have executed.

```text title="Display or save the history of previously run commands"
SYNOPSYS
        history [[--file] file]

OPTIONS
        --file  file
                A file to save history to.
                [Optional, default = <none>]
```

#### Optional Parameters

* **`--file`** The name of the file in which to save the history of commands

----
### `script`

Load and execute commands from a text file using the `script --file <filename>` command. This file should have one command per line, and each will be executed as though they were entered directly at the action prompt in that sequence.

```text title="Read and execute commands from a file"
SYNOPSYS
        script [--file] file

OPTIONS
        --file  file
                [Mandatory]
```

#### Mandatory Parameters

* **`--file`** The name of the file containing script commands

----
### `stacktrace`

 Use the `stacktrace` command to get full technical information about the source of an error during LiveData Migrator operation.

```text title="Display the full stacktrace of the last error"
SYNOPSYS
        stacktrace
```

## Source Commands

----
### `source clear`

Clear all information that LiveData Migrator maintains about the source file system by issuing the `source clear` command. This will allow you to define an alternative source to one previously defined or detected automatically.

```text title="Delete all sources"
SYNOPSYS
        source clear
```

----
### `source del`

Use `source del` to delete information about a specific source file system by identifier. You can obtain the identifier for a source file system with the output of the `source fs show` command.

```text title="Delete a source"
SYNOPSYS
        source del [--file-system-id] string

OPTIONS
        --file-system-id  string

                [Mandatory]
```

#### Mandatory Parameters

* **`--file-system-id`** The identifier of the source file system resource to delete

----
### `source fs show`

Get information about the source file system configuration.

```text title="Show the source file system configuration"
SYNOPSYS
        source fs show [--verbose]

OPTIONS
        --verbose
                [Optional, default = false]
```

#### Optional Parameters

* **`--verbose`** Include all configuration properties for the source file system in the response.

#### Examples

```
WANdisco LiveMigrator >> source fs show
[ {
  "fsId" : "auto-discovered-source-hdfs",
  "fsType" : "hdfs",
  "isSource" : true,
  "properties" : {
    "fs.defaultFS" : "hdfs://myhost.localdomain:8020"
  },
  "eventsPosition" : 0
} ]
```

## File System Commands

----
### `filesystem add adls2 sharedKey`

Add an Azure Data Lake Storage Gen 2 container as a migration target using the `filesystem add adls2-hcfs sharedKey` command, which requires credentials in the form of an account key.

```text title="Add an ADLS Gen 2 file system"
SYNOPSYS
        filesystem add adls2 sharedKey [--file-system-id] string
                                       [--storage-account-name] string
                                       [--fs.azure.shared.key] string
                                       [--container.name] string
                                       [--insecure]
                                       [[--properties-file] list]
                                       [[--properties] list]

OPTIONS
        --file-system-id  string

                [Mandatory]

        --storage-account-name  string

                [Mandatory]

        --fs.azure.shared.key  string

                [Mandatory]

        --container.name  string

                [Mandatory]

        --insecure
                [Optional, default = false]

        --properties-file  list
                Load properties from this file
                [Optional, default = <none>]

        --properties  list
                Override properties in comma separated key/value list
                [Optional, default = <none>]
```

#### Mandatory Parameters

* **`--file-system-id`** The identifier to give the new file system resource
* **`--storage-account-name`** The name of the ADLS Gen 2 storage account to target
* **`--fs.azure.shared.key`** The shared account key to use as credentials to write to the storage account
* **`--container.name`** The name of the container in the storage account to which content will be migrated

#### Optional Parameters

* **`--insecure`** When provided, LiveData Migrator will not use TLS to encrypt communication with ADLS Gen 2. This may improve throughput, but should only be used when you have other means of securing communication.
* **`--properties-files`** Reference a list of existing properties files, each that contains Hadoop configuration properties in the format used by `core-site.xml` or `hdfs-site.xml`
* **`--properties`** Specify properties to use in a comma-separated key/value list

#### Examples

```
WANdisco LiveMigrator >> filesystem add adls2 sharedKey --file-system-id mytarget --storage-account-name psmadls2 --container.name lm2target --fs.azure.shared.key Ri5NxHGqoQ79DBGLVn+COK/sRDwbNqAREDACTEDaMxRkvXt2ijUtAkVqVCBj/vaS/NbzR5rtjE2CZ31ejVpUVA==
{
  "fsId" : "lm2target",
  "fsType" : "adls2-hcfs",
  "isSource" : false,
  "properties" : {
    "fsId" : "lm2target",
    "fsType" : "adls2-hcfs",
    "fs.defaultFS" : "abfss://lm2target@psmadls2.dfs.core.windows.net/",
    "fs.azure.account.auth.type.psmadls2.dfs.core.windows.net" : "SharedKey",
    "fs.azure.account.key.psmadls2.dfs.core.windows.net" : "Ri5NxHGqoQ79DBGLVn+COK/sRDwbNqAREDACTEDaMxRkvXt2ijUtAkVqVCBj/vaS/NbzR5rtjE2CZ31ejVpUVA==",
    "fs.abfss.impl" : "org.apache.hadoop.fs.azurebfs.SecureAzureBlobFileSystem",
    "fs.AbstractFileSystem.abfss.impl" : "org.apache.hadoop.fs.azurebfs.Abfss",
    "fs.abfss.impl.disable.cache" : "true"
  },
  "eventsPosition" : 0
}
```

----
### `filesystem add hdfs`

Add a Hadoop Distributed File System as either a migration source or target using the `filesystem add hdfs` command.

Creating an HDFS file system resource with this command will normally only be used when migrating to that HDFS as a target (rather than another storage service like ADLS Gen 2). LiveData Migrator will normally auto-detect the *source* HDFS file system when started from the command line. When started as a system service, you will need to define an HDFS source with this command, including the `--source` parameter.

```text title="Add a Hadoop Distributed File System"
SYNOPSYS
        filesystem add hdfs [--file-system-id] string
                            [--fs.defaultFS] string
                            [[--user] string]
                            [--source]
                            [[--properties-files] list]
                            [[--properties] list]

OPTIONS
        --file-system-id  string
                Name of the filesystem
                [Mandatory]

        --fs.defaultFS  string

                [Mandatory]

        --user  string
                FileSystem username to perform migration actions as
                [Optional, default = <none>]

        --source        Add this filesystem as the source for migrations
                [Optional, default = false]

        --properties-files  list
                Load properties from these files
                [Optional, default = <none>]

        --properties  list
                Override properties in comma separated key/value list
                [Optional, default = <none>]
```

#### Mandatory Parameters

* **`--file-system-id`** The identifier to give the new file system resource.
* **`--fs.defaultFS`** A string that defines how LiveData Migrator accesses HDFS, which can be specified in a number of forms:

  * As a single HDFS URI, such as `hdfs://192.168.1.10:8020` (using an IP address) or `hdfs://myhost.localdomain:8020` (using a hostname),
  * As a comma-separated list of HDFS URIs, like `hdfs://nn1.localdomain:8020,hdfs://nn2.localdomain:8020` to allow for integration with HA-enabled Hadoop environments, or
  * As an HDFS URI that references a nameservice ID defined in the cluster properties, like `hdfs://mynameservice`, where there is a configuration property for the cluster that defines the value of the `dfs.nameservices` value to include that nameservice ID, like `mynameservice` and all required configuration properties for that nameservice, like `dfs.ha.namenodes.mynameservice`, `dfs.namenode.rpc-address.mynameservice.nn1`, and `dfs.namenode.http-address.mynameservice.nn1`, etc.

#### Optional Parameters

* **`--user`** The name of the HDFS user to be used when performing operations against the file system. This user must be an HDFS super user, such as `hdfs`.
* **`--source`** Provide this parameter to use the file system resource created as a source.
* **`--properties-files`** Reference a list of existing properties files, each that contains Hadoop configuration properties in the format used by `core-site.xml` or `hdfs-site.xml`.
* **`--properties`** Specify properties to use in a comma-separated key/value list.

----
### `filesystem add local`

Add a local file system as either a migration source or target using the `filesystem add local` command.

```text title="Add a local file system"
SYNOPSYS
        filesystem add local [--file-system-id] string
                             [[--fs-root] string]
                             [--source]
                             [[--properties-files] list]
                             [[--properties] list]

OPTIONS
        --file-system-id  string
                Name of the filesystem
                [Mandatory]

        --fs-root  string
                Location in the local filesystem to chroot to
                [Optional, default = /]

        --source   Add this filesystem as the source for migrations
                [Optional, default = false]

        --properties-files  list
                Load properties from these files
                [Optional, default = <none>]

        --properties  list
                Override properties in comma separated key/value list
                [Optional, default = <none>]
```

#### Mandatory Parameters

* **`--file-system-id`** The identifier to give the new file system resource.

#### Optional Parameters

* **`--fs-root`** The path to a location in the file system to treat as the root from which content will be migrated.
* **`--source`** Provide this parameter to use the file system resource created as a source.
* **`--properties-files`** Reference a list of existing properties files, each that contains Hadoop configuration properties in the format used by `core-site.xml` or `hdfs-site.xml`.
* **`--properties`** Specify properties to use in a comma-separated key/value list.

----
### `filesystem add s3a`

Add an S3 bucket as a target file system using the `filesystem add s3a` command.

```text tile="Add an S3 file system"
SYNOPSYS
        filesystem add s3a [--file-system-id] string
                           [--bucket-name] string
                           [[--access-key] string]
                           [[--secret-key] string]
                           [--credentials-provider] string
                           [[--properties-files] list]
                           [[--properties] list]

OPTIONS
        --file-system-id  string

                [Mandatory]

        --bucket-name  string

                [Mandatory]

        --access-key  string

                [Optional, default = <none>]

        --secret-key  string

                [Optional, default = <none>]

        --credentials-provider  string

                [Mandatory]

        --properties-files  list
                Load properties from these files
                [Optional, default = <none>]

        --properties  list
                Override properties in comma separated key/value list
                [Optional, default = <none>]
```

#### Mandatory Parameters

* **`--file-system-id`** The identifier for the new file system resource
* **`--bucket-name`** The name of your S3 bucket
* **`--credentials-provider`** The Java class name of a credentials provider for authenticating with the S3 endpoint, e.g. `org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider`.
  Providers available include:
  * **`org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider`**
    
    Use this provider to offer credentials as an access key and secret access key with the `--access-key` and `--secret-key` Parameters.

  * **`com.amazonaws.auth.InstanceProfileCredentialsProvider`**

    Use this provider when running LiveData Migrator on an EC2 instance that has [been assigned an IAM role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html) with policies that allow it to access the S3 bucket.

  * **`com.amazonaws.auth.DefaultAWSCredentialsProviderChain`**

    A commonly-used credentials provider chain that looks for credentials in this order:

    * Environment Variables - `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`, or `AWS_ACCESS_KEY` and `AWS_SECRET_KEY`
    * Java System Properties - `aws.accessKeyId` and `aws.secretKey`
    * Web Identity Token credentials from the environment or container
    * Credential profiles file at the default location (`~/.aws/credentials`) shared by all AWS SDKs and the AWS CLI
    * Credentials delivered through the Amazon EC2 container service if `AWS_CONTAINER_CREDENTIALS_RELATIVE_URI` environment variable is set and security manager has permission to access the variable,
    * Instance profile credentials delivered through the Amazon EC2 metadata service

#### Optional parameters

* **`--access-key`** When using the `org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider` credentials provider, specify the access key with this parameter
* **`--secret-key`** When using the `org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider` credentials provider, specify the secret key using this parameter
* **`--properties-files`** Reference a list of existing properties files, each that contains Hadoop configuration properties in the format used by `core-site.xml` or `hdfs-site.xml`
* **`--properties`** Specify properties to use in a comma-separated key/value list

----
### `filesystem clear`

Delete all target file system references with the `filesystem clear`. This leaves any migrated content intact in those targets, but removes all resources that act as references to the target file systems.

```text title="Delete all targets"
NAME
        filesystem clear - Delete all targets.

SYNOPSYS
        filesystem clear
```

----
### `filesystem del`

Delete a specific file system resource by identifier. This leaves all migrated content intact at that target, but removes the resource that acts as a reference to that file system.

```text title="Delete a target"
SYNOPSYS
        filesystem del [--file-system-id] string

OPTIONS
        --file-system-id  string

                [Mandatory]
```

#### Mandatory Parameters

* **`--file-system-id`** The identifier of the file system resource to delete.

----
### `filesystem list`

List defined file system resources.

```text title="List targets"
SYNOPSYS
        filesystem list [--verbose]

OPTIONS
        --verbose
                [Optional, default = false]
```

#### Mandatory Parameters

* **`--verbose`** Include all properties for each file system in the JSON result.

#### Examples

```
WANdisco LiveMigrator >> filesystem list
[ {
  "fsId" : "mytarget",
  "fsType" : "adls2",
  "isSource" : false,
  "properties" : {
    "fs.container.name" : "lm2target",
    "fs.auth.type" : "SharedKey",
    "fs.account.name" : "psmadls2",
    "fs.scheme" : "abfss"
  },
  "eventsPosition" : 0
} ]
```

----
### `filesystem show`

View details for a file system resource.

```text title="Get target details"
SYNOPSYS
        filesystem show [--file-system-id] string  [--verbose]

OPTIONS
        --file-system-id  string

                [Mandatory]

        --verbose
                [Optional, default = false]
```

#### Mandatory Parameters

* **`--file-system-id`** The identifier of the file system resource to show.

#### Examples

```
WANdisco LiveMigrator >> filesystem show --file-system-id mytarget
{
  "fsId" : "mytarget",
  "fsType" : "adls2",
  "isSource" : false,
  "properties" : {
    "fs.container.name" : "lm2target",
    "fs.auth.type" : "SharedKey",
    "fs.account.name" : "psmadls2",
    "fs.scheme" : "abfss"
  },
  "eventsPosition" : 0
}
```

----
### `filesystem types`

View information about the file system types available for use with LiveData Migrator. File systems that provide an `eventListenerType` other than `no-op` can be used in migrations that will migrate ongoing changes during operation.

```text title="List the types of target file systems available"
SYNOPSYS
        filesystem types
```

#### Examples

```
WANdisco LiveMigrator >> filesystem types
[ {
  "eventListenerType" : "no-op",
  "fs" : "adls1",
  "fsDescription" : "ADLS Filesystem via the Hadoop HCFS API",
  "sourceCapable" : false
}, {
  "eventListenerType" : "no-op",
  "fs" : "adls2",
  "fsDescription" : "ADLS2 Filesystem via the Hadoop HCFS API",
  "sourceCapable" : false
}, {
  "eventListenerType" : "no-op",
  "fs" : "local",
  "fsDescription" : "Hadoop HCFS Wrapper for Local Storage",
  "sourceCapable" : false
}, {
  "eventListenerType" : "inotify",
  "fs" : "hdfs",
  "fsDescription" : "Hadoop HDFS Filesystem",
  "sourceCapable" : true
}, {
  "eventListenerType" : "no-op",
  "fs" : "s3a",
  "fsDescription" : "S3A Filesystem via the Hadoop HCFS API",
  "sourceCapable" : false
} ]
```

## Migration Commands

----
### `migration abort`

Stop a migration from transferring and content to its target, placing it into the `ABORTED` state. You cannot resume an aborted migration.

```text title="Abort a migration"
SYNOPSYS
        migration abort [--migration-id] string

OPTIONS
        --migration-id  string

                [Mandatory]
```

#### Mandatory Parameters

* **`--migration-id`** The identifier of the migration to abort

#### Examples

```
WANdisco LiveMigrator >> migration abort --migration-id 4ffa620b6ebb0cd34f2c591220d93830f91ccc7e
```

----
### `migration del`

Delete an aborted migration resource.

```text title="Delete a migration"
SYNOPSYS
        migration del [--migration-id] string

OPTIONS
        --migration-id  string

                [Mandatory]
```

#### Mandatory Parameters

* **`--migration-id`** The identifier of the migration to delete

----
### `migration exclusion add`

Associate an exclusion resource with a migration so that the exclusion policy applies to items processed for the migration. Exclusions must be associated with a migration before they take effect.

```text title="Add an exclusion to a migration"
SYNOPSYS
        migration exclusion add [--migration-id] string
                                [--exclusion-id] string

OPTIONS
        --migration-id  string

                [Mandatory]

        --exclusion-id  string

                [Mandatory]
```

#### Mandatory Parameters

* **`--migration-id`** The identifier of the migration with which to associate the exclusion
* **`--exclusion-id`** The identifier of the exclusion to associate with the migration

----
### `migration exclusion del`

Remove an exclusion from association with a migration so that its policy no longer applies to items processed for the migration.

```text title="Remove an exclusion from a migration"
SYNOPSYS
        migration exclusion del [--migration-id] string
                                [--exclusion-id] string

OPTIONS
        --migration-id  string

                [Mandatory]

        --exclusion-id  string

                [Mandatory]
```

#### Mandatory Parameters

* **`--migration-id`** The identifier of the migration from which to remove the exclusion
* **`--exclusion-id`** The identifier of the exclusion to remove from the migration

----
### `migration list`

Present the list of all migrations defined.

```text title="List running and active migrations"
SYNOPSYS
        migration list
```

#### Examples

```text
WANdisco LiveMigrator >> migration list
[ {
  "migrationId" : "f5a541f49bc31500086e7fe22c26226bfa3f2ab0",
  "path" : "/repl1",
  "source" : "auto-discovered-source-hdfs",
  "target" : "mytarget",
  "state" : "NONSCHEDULED",
  "exclusions" : [ ],
  "migrationStartTime" : "2020-06-05T04:28:12.835+0000",
  "migrationEdge" : "/repl1",
  "scannerSummary" : {
    "progressSummary" : {
      "filesScanned" : 0,
      "directoriesScanned" : 0,
      "bytesScanned" : 0
    },
    "contentSummary" : null
  },
  "migrationCompleteTime" : null,
  "abortReason" : null,
  "filesSeen" : 0,
  "dirsSeen" : 0,
  "sizeOfMigration" : 0
} ]
```

----
### `migration new`

Create a new migration to initiate data migration from your source file system.

```text title="Create a new migration"
SYNOPSYS
        migration new [--path] string
                      [--target] string
                      [[--exclusions] string]
                      [--auto-start]

OPTIONS
        --path  string

                [Mandatory]

        --target  string

                [Mandatory]

        --exclusions  string

                [Optional, default = <none>]

        --auto-start
                [Optional, default = false]
```

#### Mandatory Parameters:

* **`--path`** Defines the source file system directory that is the scope of the migration. All content (other than that excluded) will be migrated to the target.
* **`--target`** Specifies the name of the target file system resource to which migration will occur.

#### Optional Parameters

* **`--exclusions`** A comma-separated list of exclusions by name
* **`--auto-start`** Provide this parameter if you want the migration to start immediately. If not provided, the migration will only take effect once run.

#### Examples

```
WANdisco LiveMigrator >> migration new --exclusions 100mbfiles --path /repl1 --target mytarget
{
  "migrationId" : "5c7271676c8f858ad11011bfa155fc8e43b8fe32",
  "path" : "/repl1",
  "source" : "auto-discovered-source-hdfs",
  "target" : "mytarget",
  "state" : "NONSCHEDULED",
  "exclusions" : [ {
    "type" : "FileSizeExclusion",
    "id" : "100mbfiles",
    "description" : "Files greater than 100 MB",
    "maxBytes" : 104857600,
    "maxBytesFormatted" : "100 MB"
  } ],
  "migrationStartTime" : "2020-06-05T04:35:01.690+0000",
  "migrationEdge" : "/repl1",
  "scannerSummary" : {
    "progressSummary" : {
      "filesScanned" : 0,
      "directoriesScanned" : 0,
      "bytesScanned" : 0
    },
    "contentSummary" : null
  },
  "migrationCompleteTime" : null,
  "abortReason" : null,
  "filesSeen" : 0,
  "dirsSeen" : 0,
  "sizeOfMigration" : 0
}
```

----
### `migration run`

Start a migration that was created without the `--auto-start` parameter, or resume a migration that was paused.

```text title="Start or resume a migration"
SYNOPSYS
        migration run [--migration-id] string

OPTIONS
        --migration-id  string

                [Mandatory]
```

#### Mandatory Parameters

* **`--migration-id`** The identifier of the migration to run

----
### `migration show`

Provide a JSON description of a specific migration.

```text title="Get migration details"
NAME
        migration show - Get migration details.

SYNOPSYS
        migration show [--migration-id] string

OPTIONS
        --migration-id  string

                [Mandatory]
```

#### Mandatory Parameters

* **`--migration-id`** The identifier of the migration to show

#### Examples

```
WANdisco LiveMigrator >> migration show --migration-id 5c7271676c8f858ad11011bfa155fc8e43b8fe32
{
  "migrationId" : "5c7271676c8f858ad11011bfa155fc8e43b8fe32",
  "path" : "/repl1",
  "source" : "auto-discovered-source-hdfs",
  "target" : "mytarget",
  "state" : "NONSCHEDULED",
  "exclusions" : [ {
    "type" : "FileSizeExclusion",
    "id" : "100mbfiles",
    "description" : "Files greater than 100 MB",
    "maxBytes" : 104857600,
    "maxBytesFormatted" : "100 MB"
  } ],
  "migrationStartTime" : "2020-06-05T04:35:01.690+0000",
  "migrationEdge" : "/repl1",
  "scannerSummary" : {
    "progressSummary" : {
      "filesScanned" : 0,
      "directoriesScanned" : 0,
      "bytesScanned" : 0
    },
    "contentSummary" : null
  },
  "migrationCompleteTime" : null,
  "abortReason" : null,
  "filesSeen" : 0,
  "dirsSeen" : 0,
  "sizeOfMigration" : 0
}
```

----
### `status`

Get a text description of the overall status of migrations. Information is provided on
* the total number of migrations defined,
* average bandwidth being used over 10s, 60s, and 300s intervals,
* peak bandwidth observed over 300s interval,
* average file transfer rate per second over  10s, 60s, and 300s intervals,
* peak file transfer rate per second over a 300s interval,
* list of live migrations with source path and migration id,
* list of running migrations with source path and migration id, and
* a list of non-running migrations source source path and migration id.

```text title="Get migration status"
NAME
        status - Get migration status.

SYNOPSYS
        status
```

#### Examples

```
WANdisco LiveMigrator >> status

Total Migrations:  1
Average Bandwidth: 0.00 Gb/s, 0.00 Gb/s, 0.00 Gb/s
Peak Bandwidth:    0.00 Gb/s
Average Files/s:   0, 0, 0
Peak Files/s:      0

Live: 0

Running: 0

Ready: 1
     /repl1 5c7271676c8f858ad11011bfa155fc8e43b8fe32
```

## Exclusion Commands

----
### `exclusion add file-size`

Create an exclusion that can be applied to migrations to constrain the files transferred by a policy based on file size. Once associated with a migration using [`migration exclusion add`](#migration-exclusion-add), files that match the policy will not be migrated.

```text title="Create a new exclusion by file size policy"
SYNOPSYS
        exclusion add file-size [--id] string
                                [--description] string
                                [--value] long
                                [--unit] string

OPTIONS
        --id  string

                [Mandatory]

        --description  string

                [Mandatory]

        --value  long

                [Mandatory]

        --unit  string

                [Mandatory]
```

#### Mandatory Parameters

* **`--id`** The identifier for the exclusion policy
* **`--description`** A user-friendly description for the policy
* **`--value`** The numerical value for the file size, in a unit defined by
* **`--unit`** A string to define the unit used, either `B` for bytes, `GB` for gibibytes, `KB` for kibibytes, `MB` for mebibytes, `PB` for pebibytes, or `TB` for tebibytes.

#### Examples

```
WANdisco LiveMigrator >> exclusion add file-size --description "Files greater than 100 MB" --id 100mbfiles --unit MB --value 100
{
  "type" : "FileSizeExclusion",
  "id" : "100mbfiles",
  "description" : "Files greater than 100 MB",
  "maxBytes" : 104857600,
  "maxBytesFormatted" : "100 MB"
}
```

----
### `exclusion add regex`

Create an exclusion that can be applied to migrations to constrain the files transferred by a policy based on matching file name by regular expression. Once associated with a migration using [`migration exclusion add`](#migration-exclusion-add), files that match the policy will not be migrated.

```text title="Create a new exclusion by regular expression policy"
SYNOPSYS
        exclusion add regex [--id] string
                            [--description] string
                            [--regex] string

OPTIONS
        --id  string

                [Mandatory]

        --description  string

                [Mandatory]

        --regex  string

                [Mandatory]
```

#### Mandatory Parameters

* **`--id`** The identifier for the exclusion policy
* **`--description`** A user-friendly description for the policy
* **`--regex`** A regular expression in a syntax similar to that used by Perl

#### Examples

```
WANdisco LiveData Migrator >> exclusion add regex --description "No paths that start with test"  --id exclusion1 --regex ^test\.*
{
  "type" : "RegexExclusion",
  "id" : "exclusion1",
  "description" : "No paths that start with test",
  "fsRestriction" : false,
  "regex" : "^test.*"
}
```

----
### `exclusion del`

Delete an exclusion policy so that it is no longer available for migrations.

```title text="Delete an exclusion policy"
NAME
        exclusion del - Delete an exclusion rule.

SYNOPSYS
        exclusion del [--id] string

OPTIONS
        --id  string

                [Mandatory]
```

#### Mandatory Parameters

* **`--id`** The identifier for the exclusion policy to delete

----
### `exclusion list`

List all exclusion policies defined.

```text title="List all exclusion policies"
NAME
        exclusion list - List all exclusion rules.

SYNOPSYS
        exclusion list
```

#### Examples

```
WANdisco LiveMigrator >> exclusion list
[ {
  "type" : "FileSizeExclusion",
  "id" : "10bytes",
  "description" : "Greater than 10 bytes",
  "maxBytes" : 10,
  "maxBytesFormatted" : "10 B"
}, {
  "type" : "FileSizeExclusion",
  "id" : "100mbfiles",
  "description" : "Files greater than 100 MB",
  "maxBytes" : 104857600,
  "maxBytesFormatted" : "100 MB"
} ]
```

----
### `exclusion show`

Get details for an individual exclusion policy by identifier.

```text title="Get details for a specific exclusion rule"
SYNOPSYS
        exclusion show [--id] string

OPTIONS
        --id  string

                [Mandatory]
```

#### Mandatory Parameters

* **`--id`** The identifier for the exclusion policy to show

#### Examples

```
WANdisco LiveMigrator >> exclusion show --id 100mbfiles
{
  "type" : "FileSizeExclusion",
  "id" : "100mbfiles",
  "description" : "Files greater than 100 MB",
  "maxBytes" : 104857600,
  "maxBytesFormatted" : "100 MB"
}
```
