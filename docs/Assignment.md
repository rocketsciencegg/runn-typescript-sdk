# Assignment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The unique identifier for the assignment. | [default to undefined]
**personId** | **number** | id referencing the person associated with the assignment. | [default to undefined]
**startDate** | **string** | The start date of the assignment. Format: YYYY-MM-DD | [default to undefined]
**endDate** | **string** | The end date of the assignment. Format: YYYY-MM-DD | [default to undefined]
**projectId** | **number** | The ID referencing the project to which the assignment belongs. | [default to undefined]
**minutesPerDay** | **number** | The number of minutes allocated to the assignment per day. | [default to undefined]
**roleId** | **number** | The ID referencing the role associated with the assignment. | [default to undefined]
**isActive** | **boolean** | A flag indicating whether the assignment is currently active. | [default to undefined]
**note** | **string** |  | [default to undefined]
**isBillable** | **boolean** | A flag indicating whether the assignment is billable. | [default to undefined]
**phaseId** | **number** |  | [default to undefined]
**isNonWorkingDay** | **boolean** | A flag indicating if the assignment falls on a non-working day. | [default to undefined]
**isTemplate** | **boolean** | A flag indicating if the assignment is a template. | [default to undefined]
**isPlaceholder** | **boolean** | A flag indicating if the assignment\&#39;s person is a placeholder. | [default to undefined]
**workstreamId** | **number** |  | [default to undefined]
**createdAt** | **string** | Timestamp of when the object was created. | [default to undefined]
**updatedAt** | **string** | Timestamp of when the object was last updated. | [default to undefined]

## Example

```typescript
import { Assignment } from 'runn-typescript-sdk';

const instance: Assignment = {
    id,
    personId,
    startDate,
    endDate,
    projectId,
    minutesPerDay,
    roleId,
    isActive,
    note,
    isBillable,
    phaseId,
    isNonWorkingDay,
    isTemplate,
    isPlaceholder,
    workstreamId,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
