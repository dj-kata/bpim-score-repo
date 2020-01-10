# BPIM-Score-Repo
This repository is being maintained for the purposes shown below.
1. To store definition files used in BPIManager
2. To maintain the script that enables editing definition files on the CLI

## Directories

| Dir | Description |
| -- | -- |
| input | metadata,divided into sp11,sp12,dp11,dp12.  |
| output | release file |
| original | the backup of original metadata(ver2020/01/11) |

## Usage
**node ./main.js build --n \<filename\> --o \<outputVersion\> --r \<requireVersion\>**

Build the release version of the definition file.  

| Options | Type | Description |
| -- | -- | -- |
| filename | String | the filename that will be created.  |
| outputVersion | String | the version that will be displayed for users. |
| requireVersion | String | the minimum BPIManager version that users need to update to use the released defFile. |

**node ./main.js update --t \<targetFile\> --m \<editMode\>**

Update metadata in input files.

| Options | Type | Description |
| -- | -- | -- |
| targetFile | sp11 \| sp12 \| dp11 \| dp12 | Decide the target file to edit. |
| editMode | 0 \| 1 | Specify the edit mode. 0:WR 1:Kaiden-Avg |

## Requirements
Node version >= 10.15.3
