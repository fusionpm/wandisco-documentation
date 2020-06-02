---
id: hdp_sandbox_lhv_client-s3_lan
title: Hortonworks (HDP) Sandbox to AWS Databricks with LiveAnalytics
sidebar_label: HDP Sandbox to AWS Databricks with LiveAnalytics
---

Use this quickstart if you want to configure Fusion to replicate from a non-kerberized Hortonworks (HDP) Sandbox to an AWS Databricks cluster.

This uses the [WANdisco LiveAnalytics](https://wandisco.com/products/live-analytics) solution, comprising both the Fusion Plugin for Databricks Delta Lake and Live Hive.

What this guide will cover:

- Installing WANdisco Fusion and a HDP Sandbox using the [docker-compose](https://docs.docker.com/compose/) tool.
- Integrating WANdisco Fusion with AWS Databricks.
- Live replication of sample data and Hive metadata.

If you would like to try something different with the HDP Sandbox, see:

* [Migration of data to AWS S3](./hdp_sandbox-s3_lm.md)
* [Live replication of data to AWS S3](./hdp_sandbox-s3_ld.md)

## Prerequisites

|For info on how to create a suitable VM with all services installed, see our [AWS VM creation](../preparation/aws_vm_creation.md) guide. See our [VM Preparation](../preparation/vm_prep.md) guide for how to install the services only.|
|---|

To complete this install, you will need:

* AWS S3 bucket.
  * Only [regions that support Signature Version 2](https://docs.aws.amazon.com/general/latest/gr/signature-version-2.html) are currently supported.
* AWS Databricks cluster.
* Linux Virtual Machine (e.g. AWS EC2 instance).
  * Minimum size recommendation = **4 vcpus, 32 GiB memory** (e.g. [r5.xlarge](https://aws.amazon.com/ec2/instance-types/)).
  * A minimum of 24GB available storage for the `/var/lib/docker` directory.

* The following services must be installed on the VM:
  * [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  * [Docker](https://docs.docker.com/install/) (v19.03.5 or higher)
  * [Docker Compose for Linux](https://docs.docker.com/compose/install/#install-compose) (v1.25.0 or higher)

### Info you will require

* AWS S3 details:

  * [Bucket name](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/create-bucket.html) (Example: `fusion-bucket`)
  * [Bucket region](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints) (Example: `eu-west-1`)
  * [Access key](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey) (Example: `AOIPUFY7ETYAHBCYT765`)
  * [Secret key](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys) (Example: `TY76eI3no3cdaWghr5tBkzPOP090bcD9c0lqpoL5`)

* Credentials for your AWS Databricks cluster:
  * [Databricks Service Address (Instance name)](https://docs.databricks.com/workspace/workspace-details.html#workspace-instance-and-id) (Example: `cust-success.cloud.databricks.com`)
  * [Bearer Token](https://docs.databricks.com/dev-tools/api/latest/authentication.html#generate-a-token) (Example: `dapibe21cfg45efae945t6f0b57dfd1dffb4`)
  * [Databricks Cluster ID](https://docs.databricks.com/workspace/workspace-details.html#cluster-url) (Example: `0234-125567-cowls978`)
  * [JDBC/ODBC HTTP path](https://docs.databricks.com/bi/jdbc-odbc-bi.html#construct-the-jdbc-url) (Example: `sql/protocolv1/o/8445611090456789/0234-125567-cowls978`)

_These instructions have been tested on Ubuntu LTS._

## Installation

Log in to your VM prior to starting these steps.

### Setup Fusion

1. Clone the Fusion docker repository to your AWS VM instance:

   `git clone https://github.com/WANdisco/fusion-docker-compose.git`

1. Change to the repository directory:

   `cd fusion-docker-compose`

1. Run the setup script:

   `./setup-env.sh`

1. Choose the `HDP Sandbox to S3, Live Hive and Databricks integration` option when prompted.

1. You have now completed the setup, to create and start your containers run:

   `docker-compose up -d`

   Docker will now download all required images and create the containers.

## Configuration

### Check HDP services are started

The HDP sandbox services can take up to 5-10 minutes to start. To check that the HDFS service is started:

1. Log in to Ambari via a web browser.

   `http://<docker_IP_address>:8080`

   Username: `admin`
   Password: `admin`

1. Select the **HDFS** service.

1. Wait until all the HDFS components are showing as **Started**.

### Configure the S3 storage

1. Log in to Fusion via a web browser.

   `http://<docker_IP_address>:8081`

   Enter your email address and choose a password you will remember.

1. Click on the **Settings** cog for the **s3** storage, and fill in the details for your AWS S3 bucket. See the [Info you will require](#info-you-will-require) section for reference.

1. Click **Apply Configuration** and wait for this to complete.

### Configure Fusion Plugin for Databricks Delta Lake

1. Click on the **Settings** cog in the **s3** storage, and fill in the details for your Databricks cluster. See the [Info you will require](#info-you-will-require) section for reference.

1. Click **Activate** and wait for the status to show as **Active** before continuing.

## Replication

Follow the steps below to demonstrate live replication of HCFS data and Hive metadata from the HDP sandbox to the AWS Databricks cluster.

### Create replication rules

1. On the dashboard, create a **HCFS** rule with the following parameters:

   * Rule Name = `warehouse`
   * Path for all storages = `/apps/hive/warehouse`
   * Default exclusions
   * Preserve HCFS Block Size = *True*

1. Now create a **Hive** rule with the following parameters:

   * Rule Name = `Demo`
   * Pattern to match database names = `databricks_demo`
   * Pattern to match table names = `*`

   Both rules will now be displayed.

### Test HCFS replication

1. On the terminal for the **Docker host**, upload a test file to the `/apps/hive/warehouse` path in HDFS on the **sandbox-hdp** container.

   `docker-compose exec -u hdfs sandbox-hdp hdfs dfs -put /etc/services /apps/hive/warehouse/test_file`

1. Check that the `test_file` is now located in your `/apps/hive/warehouse` directory on your AWS S3 bucket.

#### Test large data sets (optional)

If you want to replicate larger amounts of data, see our [HDP Sandbox testing](../testing/test_hdp_sandbox.md) guide.

### Test Hive replication

Your Databricks cluster must be **running** before testing Hive replication. Sample data is provided in this HDP Sandbox.

1. Log in to **Hue** via a web browser.

   `http://<docker_IP_address>:8000`

   Username: `hdfs`
   Password: `hdfs`

1. To create a database for the sample data, add the query below inside the **Hive** box and click the **play** button:

   `CREATE DATABASE IF NOT EXISTS retail_demo;`

1. Create a table inside the database that points to the sample data, add the query below inside the **Hive** box and click the **play** button:

   ```sql
   CREATE TABLE retail_demo.customer_addresses_dim_hive
   (
   Customer_Address_ID  bigint,
   Customer_ID          bigint,
   Valid_From_Timestamp timestamp,
   Valid_To_Timestamp   timestamp,
   House_Number         string,
   Street_Name          string,
   Appt_Suite_No        string,
   City                 string,
   State_Code           string,
   Zip_Code             string,
   Zip_Plus_Four        string,
   Country              string,
   Phone_Number         string
   )
   ROW FORMAT DELIMITED FIELDS TERMINATED BY '\t'
   STORED AS TEXTFILE
   LOCATION '/retail_demo/customer_addresses_dim_hive/';
   ```

1. Create a second database matching the Database name in the Hive replication rule created earlier:

   `CREATE DATABASE IF NOT EXISTS databricks_demo;`

1. Create a table inside this second database:

   ```sql
   CREATE TABLE databricks_demo.customer_addresses_dim_hive
   (
   Customer_Address_ID  bigint,
   Customer_ID          bigint,
   Valid_From_Timestamp timestamp,
   Valid_To_Timestamp   timestamp,
   House_Number         string,
   Street_Name          string,
   Appt_Suite_No        string,
   City                 string,
   State_Code           string,
   Zip_Code             string,
   Zip_Plus_Four        string,
   Country              string,
   Phone_Number         string
   )
   stored as ORC;
   ```

1. Now insert data into the table:

   `INSERT INTO databricks_demo.customer_addresses_dim_hive SELECT * FROM retail_demo.customer_addresses_dim_hive WHERE state_code = 'CA';`

   _The data will take a couple of minutes to be replicated and appear in the Databricks cluster. This is because during the first transfer of Hive data, the Datatransformer jar (`etl.jar`) will also be installed in the Databricks library._

1. A Hive job will launch that inserts the data values provided in this example.
   Select the **jobs** service. If successful, the STATUS will be **SUCCEEDED**.

### Setup Databricks Notebook to view data

1. Create a [Cluster Notebook](https://docs.databricks.com/notebooks/notebooks-manage.html#create-a-notebook) with the details:

   * Name: **WD-demo**
   * Language: **SQL**
   * Cluster: (Choose your cluster)

   You should now see a blank notebook.

1. Inside the **Cmd 1** box, add the query and **Run Cell**:

   `SELECT * FROM databricks_demo.customer_addresses_dim_hive;`

1. Wait for the query to return, then select the drop-down graph type and choose **Map**.

1. Under the Plot Options, remove all **Keys** that are present.

1. Configure the map as follows:

   * Keys: **state_code**
   * Values: **customer_id**

   You should now see a plot of USA with color shading - dependent on the population density.

1. If desired, you can repeat this process except using the Texas state code instead of California.

   Back in the **Hue** interface, run the following command:

   `INSERT INTO databricks_demo.customer_addresses_dim_hive SELECT * FROM retail_demo.customer_addresses_dim_hive WHERE state_code = 'TX';`

   Repeat from step 3 to observe the results for Texas.

_You have now successfully replicated data from your HDP Sandbox to your AWS S3 bucket and Databricks cluster. Contact [WANdisco](https://wandisco.com/contact) for further information about Fusion and what it can offer you._

## Troubleshooting

* See our [Troubleshooting](../troubleshooting/hdp_sandbox_troubleshooting.md) guide for help with this install.

* See the [shutdown and start up](../operation/hdp_sandbox_fusion_stop_start.md) guide for when you wish to safely shutdown or start back up the environment.
