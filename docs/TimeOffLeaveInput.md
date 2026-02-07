# TimeOffLeaveInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**personId** | **number** | The unique identifier for the person. | [default to undefined]
**startDate** | **string** | The start date of the time-off. Format: YYYY-MM-DD | [default to undefined]
**endDate** | **string** | The end date of the time-off. Format: YYYY-MM-DD | [default to undefined]
**note** | **string** | A note or comment related to the time-off, if any. | [optional] [default to undefined]
**minutesPerDay** | **number** | The minutes per day taken as time off. Omit this property if time-off is for full day(s) as per person\&#39;s contract. | [optional] [default to undefined]

## Example

```typescript
import { TimeOffLeaveInput } from 'runn-typescript-sdk';

const instance: TimeOffLeaveInput = {
    personId,
    startDate,
    endDate,
    note,
    minutesPerDay,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
