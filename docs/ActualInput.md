# ActualInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | The date this actual is for. Format: YYYY-MM-DD | [default to undefined]
**billableMinutes** | **number** | The number of minutes that are billable. Either this or nonbillableMinutes must be set | [default to 0]
**nonbillableMinutes** | **number** | The number of minutes that are non billable. Either this or billableMinutes must be set | [default to 0]
**billableNote** | **string** | A note about the billable minutes | [optional] [default to undefined]
**nonbillableNote** | **string** | A note about the nonbillable minutes | [optional] [default to undefined]
**phaseId** | **number** | The phase this actual is for, if any | [optional] [default to undefined]
**personId** | **number** | The person this actual is for | [default to undefined]
**projectId** | **number** | The project this actual is for | [default to undefined]
**roleId** | **number** | The role the person was in when for this actual | [default to undefined]
**workstreamId** | **number** | The workstream the actual belongs to | [optional] [default to undefined]

## Example

```typescript
import { ActualInput } from 'runn-typescript-sdk';

const instance: ActualInput = {
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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
