# Role


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**isArchived** | **boolean** |  | [default to undefined]
**defaultHourCost** | **number** |  | [default to undefined]
**standardRate** | **number** |  | [default to undefined]
**references** | [**Array&lt;Reference&gt;**](Reference.md) |  | [default to undefined]
**personIds** | **Array&lt;number&gt;** |  | [default to undefined]
**createdAt** | **string** | Timestamp of when the object was created. | [default to undefined]
**updatedAt** | **string** | Timestamp of when the object was last updated. | [default to undefined]

## Example

```typescript
import { Role } from 'runn-typescript-sdk';

const instance: Role = {
    id,
    name,
    isArchived,
    defaultHourCost,
    standardRate,
    references,
    personIds,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
