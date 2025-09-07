# Actual


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The unique identifier for the actual | [default to undefined]
**date** | **string** | The date the actual took place. Format: YYYY-MM-DD | [default to undefined]
**billableMinutes** | **number** | The number of billable minutes for the actual | [default to undefined]
**nonbillableMinutes** | **number** | The number of nonbillable minutes for the actual | [default to undefined]
**billableNote** | **string** | A note or comment related to the billable minutes, if any. | [default to undefined]
**nonbillableNote** | **string** | A note or comment related to the nonbillable minutes, if any. | [default to undefined]
**phaseId** | **number** | The ID referencing the phase of the actual, if applicable. | [default to undefined]
**personId** | **number** | The ID referencing the person associated with the actual. | [default to undefined]
**projectId** | **number** | The ID referencing the project associated with the actual. | [default to undefined]
**roleId** | **number** | The ID referencing the role associated with the actual. | [default to undefined]
**workstreamId** | **number** | The ID referencing the workstream of the actual, if applicable. | [default to undefined]
**createdAt** | **string** | Timestamp of when the object was created. | [default to undefined]
**updatedAt** | **string** | Timestamp of when the object was last updated. | [default to undefined]

## Example

```typescript
import { Actual } from 'runn-typescript-sdk';

const instance: Actual = {
    id,
    date,
    billableMinutes,
    nonbillableMinutes,
    billableNote,
    nonbillableNote,
    phaseId,
    personId,
    projectId,
    roleId,
    workstreamId,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
