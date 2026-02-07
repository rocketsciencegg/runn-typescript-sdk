# Actor

An actor represents an entity that can perform actions such as a user, api key, or system process. Each actor type has a unique set of properties. The `type` property is used to determine the actor type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**userId** | **number** | The id of the user who uploaded the csv file. | [default to undefined]
**userEmail** | **string** | The email of the user who uploaded the csv file. | [optional] [default to undefined]
**tokenId** | **number** | The id of the api key. | [default to undefined]
**tokenName** | **string** | The name of the api key. | [default to undefined]
**apiVersion** | **string** | The api version. | [default to undefined]
**id** | **number** | The id of the integration. | [default to undefined]
**name** | **string** | The name of the integration. | [default to undefined]

## Example

```typescript
import { Actor } from 'runn-typescript-sdk';

const instance: Actor = {
    type,
    userId,
    userEmail,
    tokenId,
    tokenName,
    apiVersion,
    id,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
