# User


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**firstName** | **string** |  | [default to undefined]
**lastName** | **string** |  | [default to undefined]
**email** | **string** |  | [default to undefined]
**personId** | **number** |  | [default to undefined]
**permissions** | [**UserPermissions**](UserPermissions.md) |  | [default to undefined]
**createdAt** | **string** | Timestamp of when the object was created. | [default to undefined]
**updatedAt** | **string** | Timestamp of when the object was last updated. | [default to undefined]

## Example

```typescript
import { User } from 'runn-typescript-sdk';

const instance: User = {
    id,
    firstName,
    lastName,
    email,
    personId,
    permissions,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
