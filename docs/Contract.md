# Contract


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**costPerHour** | **number** |  | [default to undefined]
**employmentType** | **string** |  | [default to undefined]
**minutesPerDay** | **number** |  | [default to undefined]
**rosteredDays** | [**RosteredDays**](RosteredDays.md) |  | [default to undefined]
**startDate** | **string** | Format: YYYY-MM-DD | [default to undefined]
**endDate** | **string** | Format: YYYY-MM-DD | [default to undefined]
**roleId** | **number** |  | [default to undefined]
**personId** | **number** |  | [default to undefined]
**jobTitle** | **string** | This feature is currently hidden, and can not be seen in the app | [default to undefined]
**createdAt** | **string** | Timestamp of when the object was created. | [default to undefined]
**updatedAt** | **string** | Timestamp of when the object was last updated. | [default to undefined]

## Example

```typescript
import { Contract } from 'runn-typescript-sdk';

const instance: Contract = {
    id,
    costPerHour,
    employmentType,
    minutesPerDay,
    rosteredDays,
    startDate,
    endDate,
    roleId,
    personId,
    jobTitle,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
