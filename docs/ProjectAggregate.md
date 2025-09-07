# ProjectAggregate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The project identifier | [default to undefined]
**billableMinutes** | **number** | Sum of billable minutes (using actuals if available, falling back to assignments) | [default to undefined]
**nonBillableMinutes** | **number** | Sum of non-billable minutes (using actuals if available, falling back to assignments) | [default to undefined]
**totalMinutes** | **number** | Total of the sums of billable and non-billable minutes | [default to undefined]
**assignments** | [**ProjectAggregateAssignments**](ProjectAggregateAssignments.md) |  | [default to undefined]
**actuals** | [**ProjectAggregateActuals**](ProjectAggregateActuals.md) |  | [default to undefined]

## Example

```typescript
import { ProjectAggregate } from 'runn-typescript-sdk';

const instance: ProjectAggregate = {
    id,
    billableMinutes,
    nonBillableMinutes,
    totalMinutes,
    assignments,
    actuals,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
