# ActorApi

The api actor represents an action performed by an api key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**tokenId** | **number** | The id of the api key. | [default to undefined]
**tokenName** | **string** | The name of the api key. | [default to undefined]
**apiVersion** | **string** | The api version. | [default to undefined]

## Example

```typescript
import { ActorApi } from 'runn-typescript-sdk';

const instance: ActorApi = {
    type,
    tokenId,
    tokenName,
    apiVersion,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
