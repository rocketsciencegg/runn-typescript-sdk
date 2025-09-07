# CreatePersonRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstName** | **string** |  | [default to undefined]
**lastName** | **string** |  | [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**holidaysGroupId** | **number** |  | [optional] [default to undefined]
**tags** | [**Array&lt;UpdatePersonRequestTagsInner&gt;**](UpdatePersonRequestTagsInner.md) |  | [optional] [default to undefined]
**references** | [**Array&lt;Reference&gt;**](Reference.md) |  | [optional] [default to undefined]
**roleId** | **number** |  | [default to undefined]
**startDate** | **string** | Defaults to today. Format: YYYY-MM-DD | [optional] [default to undefined]
**endDate** | **string** | Format: YYYY-MM-DD | [optional] [default to undefined]
**employmentType** | **string** | The type of employment for the contract. | [optional] [default to EmploymentTypeEnum_Employee]
**costPerHour** | **number** | Defaults to the role\&#39;s cost per hour | [optional] [default to undefined]
**minutesPerDay** | **number** | Defaults to the account\&#39;s default minutes per day | [optional] [default to undefined]
**rosteredDays** | [**CreatePersonRequestRosteredDays**](CreatePersonRequestRosteredDays.md) |  | [optional] [default to undefined]
**jobTitle** | **string** | This feature is currently hidden, and can not be seen in the app | [optional] [default to undefined]

## Example

```typescript
import { CreatePersonRequest } from 'runn-typescript-sdk';

const instance: CreatePersonRequest = {
    firstName,
    lastName,
    email,
    holidaysGroupId,
    tags,
    references,
    roleId,
    startDate,
    endDate,
    employmentType,
    costPerHour,
    minutesPerDay,
    rosteredDays,
    jobTitle,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
