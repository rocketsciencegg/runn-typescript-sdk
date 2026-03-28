# AssignmentsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phaseId** | **number** | The phase this assignment is for, if any | [optional] [default to undefined]
**personId** | **number** | The person this assignment is for | [default to undefined]
**projectId** | **number** | The project this assignment is for | [default to undefined]
**roleId** | **number** | The role the person will be in for this assignment | [default to undefined]
**startDate** | **string** | The date this assignment starts. Format: YYYY-MM-DD | [default to undefined]
**endDate** | **string** | The date this assignment ends. When using isNonWorkingDay&#x3D;true, this needs to be the same as the startDate. Format: YYYY-MM-DD | [default to undefined]
**minutesPerDay** | **number** | How many minutes per day are assigned | [default to 0]
**note** | **string** | A note about this assignment | [optional] [default to undefined]
**isBillable** | **boolean** | Whether this assignment is billable. This can only be set if this assignment is for a project without a non-billable pricing model or if it is for an external client | [optional] [default to true]
**isNonWorkingDay** | **boolean** | Determine whether this assignment is for a single weekend day or a single holiday. If left blank it will be set automatically | [optional] [default to undefined]
**workstreamId** | **number** | The workstream this assignment is for, if any | [optional] [default to undefined]

## Example

```typescript
import { AssignmentsPostRequest } from 'runn-typescript-sdk';

const instance: AssignmentsPostRequest = {
    phaseId,
    personId,
    projectId,
    roleId,
    startDate,
    endDate,
    minutesPerDay,
    note,
    isBillable,
    isNonWorkingDay,
    workstreamId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
