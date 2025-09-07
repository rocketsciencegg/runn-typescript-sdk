# PersonRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**personId** | **number** | The ID of the placeholder associated with this request | [default to undefined]
**projectId** | **number** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**requesterId** | **number** | The ID of the user who requested this person | [default to undefined]
**updaterId** | **number** | The ID of the user who last updated this request | [default to undefined]
**createdAt** | **string** | Timestamp of when the object was created. | [default to undefined]
**updatedAt** | **string** | Timestamp of when the object was last updated. | [default to undefined]

## Example

```typescript
import { PersonRequest } from 'runn-typescript-sdk';

const instance: PersonRequest = {
    id,
    personId,
    projectId,
    status,
    requesterId,
    updaterId,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
