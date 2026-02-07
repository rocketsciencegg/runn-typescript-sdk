# EventAssignmentDeletedAssignment

Details about the assignment that was deleted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The unique identifier of the assignment. | [default to undefined]
**personId** | **number** | The unique identifier of the person associated with the assignment. | [default to undefined]
**startDate** | **string** | The start date of the assignment. Format: YYYY-MM-DD | [default to undefined]
**endDate** | **string** | The end date of the assignment. Format: YYYY-MM-DD | [default to undefined]
**projectId** | **number** | The ID referencing the project to which the assignment belongs. | [default to undefined]
**minutesPerDay** | **number** | The number of minutes allocated to the assignment per day. | [default to undefined]
**roleId** | **number** | The unique identifier of the role associated with the assignment. | [default to undefined]
**isActive** | **boolean** | A flag indicating whether the assignment is currently active. | [default to undefined]
**note** | **string** |  | [default to undefined]
**isBillable** | **boolean** | A flag indicating whether the assignment is billable. | [default to undefined]
**phaseId** | **number** |  | [default to undefined]
**isNonWorkingDay** | **boolean** | A flag indicating if the assignment falls on a non-working day. | [default to undefined]
**isTemplate** | **boolean** | A flag indicating if the assignment is a template. | [default to undefined]
**workstreamId** | **number** |  | [default to undefined]
**project** | [**EventSubresourceProject**](EventSubresourceProject.md) |  | [default to undefined]
**person** | [**EventSubresourcePerson**](EventSubresourcePerson.md) |  | [default to undefined]
**role** | [**EventSubresourceRole**](EventSubresourceRole.md) |  | [default to undefined]
**phase** | [**EventSubresourcePhase**](EventSubresourcePhase.md) |  | [default to undefined]
**workstream** | [**EventSubresourceWorkstream**](EventSubresourceWorkstream.md) |  | [default to undefined]

## Example

```typescript
import { EventAssignmentDeletedAssignment } from 'runn-typescript-sdk';

const instance: EventAssignmentDeletedAssignment = {
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
    workstreamId,
    project,
    person,
    role,
    phase,
    workstream,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
