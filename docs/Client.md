# Client


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**website** | **string** |  | [default to undefined]
**isArchived** | **boolean** |  | [default to undefined]
**references** | [**Array&lt;Reference&gt;**](Reference.md) |  | [default to undefined]
**createdAt** | **string** | Timestamp of when the object was created. | [default to undefined]
**updatedAt** | **string** | Timestamp of when the object was last updated. | [default to undefined]

## Example

```typescript
import { Client } from 'runn-typescript-sdk';

const instance: Client = {
    id,
    name,
    website,
    isArchived,
    references,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
