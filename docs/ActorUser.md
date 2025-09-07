# ActorUser

The user actor represents a user. This usually means a user who interacted with the web application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**userId** | **number** |  | [default to undefined]
**userEmail** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ActorUser } from 'runn-typescript-sdk';

const instance: ActorUser = {
    type,
    userId,
    userEmail,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
