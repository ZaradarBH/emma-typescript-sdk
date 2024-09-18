/**
 * Public EMMA API
 * ### About Infrastructure API  **Base URL:** **<u>https://api.emma.ms/external</u>**   This **Infrastructure API** is for managing the emma cloud infrastructure within a project. The API enables you to view, create, edit, and delete _Virtual machines, Spot instances, Applications, Kubernetes clusters, SSH keys, Security groups, and Backup policies_. For creating the resources you can use the endpoints with the dictionaries: _Data centers, Locations, Providers, Operating systems, Virtual machines configurations, Spot instances configurations, Kubernetes clusters configurations._   ### Authentication   #### 1. Create service application   To access the API, enter your project, navigate to **Settings** > **Service Apps**, and create a service application. Select the access level **Read**, **Operate**, or **Manage**.   - **Read** - only GET methods are allowed in the API.   - **Operate** - some operations are allowed with the resources (e.g. _Start, Reboot,_ and _Shutdown_ of the Virtual machines).   - **Manage** - full creating, updating, and deleting of the resources is allowed.    #### 2. Get access token   - Copy the **Client ID** and **Client Secret** in the service application.  - Send an API request to the endpoint **_/issue-token** as specified in the **Authentication** section of the API documentation. You will receive access and refresh tokens in the response.   _For Linux / Mac:_  ```  curl -X POST https://api.emma.ms/external/v1/issue-token \\  -H \"Content-Type: application/json\" \\  -d \'{\"clientId\": \"YOUR-CLIENT-ID\", \"clientSecret\": \"YOUR-CLIENT-SECRET\"}\'  ```  _For Windows:_  ```  curl -X POST https://api.emma.ms/external/v1/issue-token ^  -H \"Content-Type: application/json\" ^  -d \"{\\\"clientId\\\": \\\"YOUR-CLIENT-ID\\\", \\\"clientSecret\\\": \\\"YOUR-CLIENT-SECRET\\\"}\"  ```   #### 3. Use access token in requests  The Bearer access token is a text string, included in the request header, for example:   _For Linux / Mac:_  ```  curl -X GET https://api.emma.ms/external/v1/locations -H \"Authorization: Bearer YOUR-ACCESS-TOKEN-HERE\"  ```   Use this token for the API requests.    #### 4. Refresh token  The access token will expire in 10 minutes. A new access token may be created using the refresh token (without Client ID and Client Secret).   To get a new access token send a request to the **_/refresh-token** endpoint:    _For Linux / Mac:_  ```  curl -X POST https://api.emma.ms/external/v1/refresh-token \\  -H \"Content-Type: application/json\" \\  -d \'{\"refreshToken\": \"YOUR-REFRESH-TOKEN\"}\'  ```       ### Possible response status codes   We use standard HTTP response codes to show the success or failure of requests.   `2xx` - successful responses.   `4xx` - client error responses (the response contains an explanation of the error).   `5xx` - server error responses.   The API uses the following status codes:   | Status Code | Description                  | Notes                                                                  |  |-------------|------------------------------|------------------------------------------------------------------------|  | 200         | OK                           | The request was successful.                                             |  | 201         | Created                      | The object was successfully created. This code is only used with objects that are created immediately.  | 204         | No content                   | A successful request, but there is no additional information to send back in the response body (in a case when the object was deleted).    | 400         | Bad Request                  | The request could not be understood by the server. Incoming parameters might not be valid. |  | 401         | Unauthorized            | The client is unauthenticated. The client must authenticate itself to get the requested response. |  | 403         | Forbidden                   | The client does not have access rights to the content.  | 404         | Not Found                    | The requested resource is not found.                                    |  | 409         | Conflict | This response is sent when a request conflicts with the current state of the object (e.g. deleting the security group with the compute instances in it).|  | 422         | Unprocessable Content   | The request was well-formed but was unable to be followed due to incorrect field values (e.g. creation of a virtual machine in the non-existent data center).  |  | 500         | Internal server Error                 | The server could not return the representation due to an internal server error. | 
 *
 * The version of the OpenAPI document: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { KubernetesNodeGroupsInnerNodesInnerDisksInner } from './kubernetesNodeGroupsInnerNodesInnerDisksInner';
import { KubernetesNodeGroupsInnerNodesInnerNetworksInner } from './kubernetesNodeGroupsInnerNodesInnerNetworksInner';
import { Tag } from './tag';
import { VmCost } from './vmCost';
import { VmDataCenter } from './vmDataCenter';
import { VmLocation } from './vmLocation';
import { VmOs } from './vmOs';
import { VmProvider } from './vmProvider';
import { VmSecurityGroup } from './vmSecurityGroup';
import { VmSubnetwork } from './vmSubnetwork';

export class Vm {
    /**
    * ID of the virtual machine
    */
    'id'?: number;
    /**
    * Date and time when the virtual machine was created
    */
    'createdAt'?: string;
    /**
    * Name of the user who created the virtual machine
    */
    'createdByName'?: string;
    /**
    * ID of the user who created the virtual machine
    */
    'createdById'?: number;
    /**
    * Date and time when the virtual machine was last edited
    */
    'modifiedAt'?: string;
    /**
    * Name of the user who last edited the virtual machine
    */
    'modifiedByName'?: string;
    /**
    * ID of the user who last edited the virtual machine
    */
    'modifiedById'?: number;
    /**
    * Name of the virtual machine
    */
    'name'?: string;
    /**
    * Project ID
    */
    'projectId'?: number;
    /**
    * Status of the virtual machine
    */
    'status'?: Vm.StatusEnum;
    'provider'?: VmProvider;
    'location'?: VmLocation;
    'dataCenter'?: VmDataCenter;
    'os'?: VmOs;
    /**
    * Number of virtual Central Processing Units (vCPUs)
    */
    'vCpu'?: number;
    /**
    * Type of virtual Central Processing Units (vCPUs)
    */
    'vCpuType'?: Vm.VCpuTypeEnum;
    /**
    * Cloud network type
    */
    'cloudNetworkType'?: Vm.CloudNetworkTypeEnum;
    /**
    * Capacity of the RAM in gigabytes
    */
    'ramGb'?: number;
    /**
    * List of volumes
    */
    'disks'?: Array<KubernetesNodeGroupsInnerNodesInnerDisksInner>;
    /**
    * 
    */
    'networks'?: Array<KubernetesNodeGroupsInnerNodesInnerNetworksInner>;
    'securityGroup'?: VmSecurityGroup;
    'subnetwork'?: VmSubnetwork;
    /**
    * SSH key ID
    */
    'sshKeyId'?: number;
    /**
    * User name
    */
    'userName'?: string;
    'cost'?: VmCost;
    'tags'?: Array<Tag> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "string"
        },
        {
            "name": "createdByName",
            "baseName": "createdByName",
            "type": "string"
        },
        {
            "name": "createdById",
            "baseName": "createdById",
            "type": "number"
        },
        {
            "name": "modifiedAt",
            "baseName": "modifiedAt",
            "type": "string"
        },
        {
            "name": "modifiedByName",
            "baseName": "modifiedByName",
            "type": "string"
        },
        {
            "name": "modifiedById",
            "baseName": "modifiedById",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "number"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Vm.StatusEnum"
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "VmProvider"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "VmLocation"
        },
        {
            "name": "dataCenter",
            "baseName": "dataCenter",
            "type": "VmDataCenter"
        },
        {
            "name": "os",
            "baseName": "os",
            "type": "VmOs"
        },
        {
            "name": "vCpu",
            "baseName": "vCpu",
            "type": "number"
        },
        {
            "name": "vCpuType",
            "baseName": "vCpuType",
            "type": "Vm.VCpuTypeEnum"
        },
        {
            "name": "cloudNetworkType",
            "baseName": "cloudNetworkType",
            "type": "Vm.CloudNetworkTypeEnum"
        },
        {
            "name": "ramGb",
            "baseName": "ramGb",
            "type": "number"
        },
        {
            "name": "disks",
            "baseName": "disks",
            "type": "Array<KubernetesNodeGroupsInnerNodesInnerDisksInner>"
        },
        {
            "name": "networks",
            "baseName": "networks",
            "type": "Array<KubernetesNodeGroupsInnerNodesInnerNetworksInner>"
        },
        {
            "name": "securityGroup",
            "baseName": "securityGroup",
            "type": "VmSecurityGroup"
        },
        {
            "name": "subnetwork",
            "baseName": "subnetwork",
            "type": "VmSubnetwork"
        },
        {
            "name": "sshKeyId",
            "baseName": "sshKeyId",
            "type": "number"
        },
        {
            "name": "userName",
            "baseName": "userName",
            "type": "string"
        },
        {
            "name": "cost",
            "baseName": "cost",
            "type": "VmCost"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<Tag>"
        }    ];

    static getAttributeTypeMap() {
        return Vm.attributeTypeMap;
    }
}

export namespace Vm {
    export enum StatusEnum {
        PoweredOn = <any> 'POWERED_ON',
        PoweredOff = <any> 'POWERED_OFF',
        Busy = <any> 'BUSY',
        Draft = <any> 'DRAFT'
    }
    export enum VCpuTypeEnum {
        Shared = <any> 'shared',
        Standard = <any> 'standard',
        Hpc = <any> 'hpc'
    }
    export enum CloudNetworkTypeEnum {
        Isolated = <any> 'isolated',
        MultiCloud = <any> 'multi-cloud',
        Default = <any> 'default'
    }
}
