# EventActualDeletedActual

Details about the actual that was deleted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The id of the actual at the time it was deleted. | [default to undefined]
**date** | **string** | The date of the actual at the time it was deleted. | [default to undefined]
**personId** | **number** | The id of the person associated with the actual. | [default to undefined]
**roleId** | **number** | The id of the role associated with the actual. | [default to undefined]
**projectId** | **number** | The id of the project associated with the actual. | [default to undefined]
**phaseId** | **number** | The id referencing the phase of the actual, if applicable. | [default to undefined]
**workstreamId** | **number** | The id of the workstream associated with the actual. | [default to undefined]
**billableMinutes** | **number** | The number of billable minutes for the actual | [default to undefined]
**nonbillableMinutes** | **number** | The number of nonbillable minutes for the actual | [default to undefined]
**billableNote** | **string** | A note or comment related to the billable minutes, if any. | [default to undefined]
**nonbillableNote** | **string** | A note or comment related to the nonbillable minutes, if any. | [default to undefined]
**person** | [**EventSubresourcePerson**](EventSubresourcePerson.md) |  | [default to undefined]
**role** | [**EventSubresourceRole**](EventSubresourceRole.md) |  | [default to undefined]
**project** | [**EventSubresourceProject**](EventSubresourceProject.md) |  | [default to undefined]
**workstream** | [**EventSubresourceWorkstream**](EventSubresourceWorkstream.md) |  | [default to undefined]

## Example

```typescript
import { EventActualDeletedActual } from 'runn-typescript-sdk';

const instance: EventActualDeletedActual = {
    id,
    date,
    personId,
    roleId,
    projectId,
    phaseId,
    workstreamId,
    billableMinutes,
    nonbillableMinutes,
    billableNote,
    nonbillableNote,
    person,
    role,
    project,
    workstream,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
