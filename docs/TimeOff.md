# TimeOff


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The unique identifier for the assignment. | [default to undefined]
**personId** | **number** | The identifier referencing the person associated with the time-off. | [default to undefined]
**startDate** | **string** | The start date of the time-off. Format: YYYY-MM-DD | [default to undefined]
**endDate** | **string** | The end date of the time-off. Format: YYYY-MM-DD | [default to undefined]
**note** | **string** |  | [default to undefined]
**createdAt** | **string** | Timestamp of when the object was created. | [default to undefined]
**updatedAt** | **string** | Timestamp of when the object was last updated. | [default to undefined]
**minutesPerDay** | **number** |  | [default to undefined]

## Example

```typescript
import { TimeOff } from 'runn-typescript-sdk';

const instance: TimeOff = {
    id,
    personId,
    startDate,
    endDate,
    note,
    createdAt,
    updatedAt,
    minutesPerDay,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
