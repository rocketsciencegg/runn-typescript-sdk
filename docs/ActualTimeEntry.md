# ActualTimeEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | The date the actual is for. Format: YYYY-MM-DD | [default to undefined]
**billableMinutes** | **number** | The number of billable minutes to either add to a matching actual or create a new actual with | [default to 0]
**billableNote** | **string** | A note about the billable minutes | [optional] [default to undefined]
**nonbillableNote** | **string** | A note about the nonbillable minutes | [optional] [default to undefined]
**nonbillableMinutes** | **number** | The number of nonbillable minutes to either add to a matching actual or create a new actual with | [default to 0]
**phaseId** | **number** | The optional phase the actual is for. Leaving this undefined will not update the phase id on any existing actual. Providing &#x60;null&#x60; will clear it. Providing a value will update the phase id | [optional] [default to undefined]
**personId** | **number** | The person this time entry is for | [default to undefined]
**projectId** | **number** | The project this time entry is for | [default to undefined]
**roleId** | **number** | The role the person was in for the actual | [default to undefined]
**workstreamId** | **number** | The optional workstream the actual is for. Leaving this undefined will not update the workstream id on any existing actual. Providing &#x60;null&#x60; will clear it. Providing a value will update the workstream id | [optional] [default to undefined]

## Example

```typescript
import { ActualTimeEntry } from 'runn-typescript-sdk';

const instance: ActualTimeEntry = {
    date,
    billableMinutes,
    billableNote,
    nonbillableNote,
    nonbillableMinutes,
    phaseId,
    personId,
    projectId,
    roleId,
    workstreamId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
