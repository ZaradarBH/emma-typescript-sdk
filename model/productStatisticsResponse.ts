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

export class ProductStatisticsResponse {
    /**
    * emma\'s internal service type
    */
    'service'?: string;
    /**
    * ID of VM
    */
    'vmId'?: number;
    /**
    * VM name
    */
    'vmName'?: string;
    /**
    * ID of a head product
    */
    'headProductId'?: number;
    /**
    * Head product name
    */
    'headProductName'?: string;
    /**
    * User currency
    */
    'currency'?: string;
    /**
    * Product monthly cost
    */
    'cost'?: number;
    /**
    * Provider name
    */
    'providerName'?: string;
    /**
    * Location country
    */
    'country'?: string;
    /**
    * Location name
    */
    'location'?: string;
    /**
    * Location latitude
    */
    'latitude'?: number;
    /**
    * Location longitude
    */
    'longitude'?: number;
    /**
    * Product UI status
    */
    'statusNormalized'?: string;
    /**
    * Total CPU, vCPUs
    */
    'cpuTotal'?: number;
    /**
    * Total memory, MB
    */
    'ramTotal'?: number;
    /**
    * Total disk size, GB
    */
    'diskUsageTotal'?: number;
    /**
    * Average CPU utilization for the last hour
    */
    'cpuUsage'?: number;
    /**
    * Average memory utilization for the last hour
    */
    'ramUsage'?: number;
    /**
    * Average disk utilization for the last hour
    */
    'diskUsage'?: number;
    /**
    * Internal service parameter
    */
    'emptyValue'?: ProductStatisticsResponse.EmptyValueEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "service",
            "baseName": "service",
            "type": "string"
        },
        {
            "name": "vmId",
            "baseName": "vmId",
            "type": "number"
        },
        {
            "name": "vmName",
            "baseName": "vmName",
            "type": "string"
        },
        {
            "name": "headProductId",
            "baseName": "headProductId",
            "type": "number"
        },
        {
            "name": "headProductName",
            "baseName": "headProductName",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "cost",
            "baseName": "cost",
            "type": "number"
        },
        {
            "name": "providerName",
            "baseName": "providerName",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string"
        },
        {
            "name": "latitude",
            "baseName": "latitude",
            "type": "number"
        },
        {
            "name": "longitude",
            "baseName": "longitude",
            "type": "number"
        },
        {
            "name": "statusNormalized",
            "baseName": "statusNormalized",
            "type": "string"
        },
        {
            "name": "cpuTotal",
            "baseName": "cpuTotal",
            "type": "number"
        },
        {
            "name": "ramTotal",
            "baseName": "ramTotal",
            "type": "number"
        },
        {
            "name": "diskUsageTotal",
            "baseName": "diskUsageTotal",
            "type": "number"
        },
        {
            "name": "cpuUsage",
            "baseName": "cpuUsage",
            "type": "number"
        },
        {
            "name": "ramUsage",
            "baseName": "ramUsage",
            "type": "number"
        },
        {
            "name": "diskUsage",
            "baseName": "diskUsage",
            "type": "number"
        },
        {
            "name": "emptyValue",
            "baseName": "emptyValue",
            "type": "ProductStatisticsResponse.EmptyValueEnum"
        }    ];

    static getAttributeTypeMap() {
        return ProductStatisticsResponse.attributeTypeMap;
    }
}

export namespace ProductStatisticsResponse {
    export enum EmptyValueEnum {
        NUMBER_0 = <any> 0,
        NUMBER_1 = <any> 1
    }
}
