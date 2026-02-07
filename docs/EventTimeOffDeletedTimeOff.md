# EventTimeOffDeletedTimeOff


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The unique identifier for the time-off. | [default to undefined]
**personId** | **number** | The identifier referencing the person associated with the time-off. | [default to undefined]
**startDate** | **string** | The start date of the time-off. | [default to undefined]
**endDate** | **string** | The end date of the time-off. | [default to undefined]
**note** | **string** |  | [default to undefined]
**minutesPerDay** | **number** |  | [default to undefined]
**person** | [**EventSubresourcePerson**](EventSubresourcePerson.md) |  | [default to undefined]

## Example

```typescript
import { EventTimeOffDeletedTimeOff } from 'runn-typescript-sdk';

const instance: EventTimeOffDeletedTimeOff = {
    id,
    personId,
    startDate,
    endDate,
    note,
    minutesPerDay,
    person,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
