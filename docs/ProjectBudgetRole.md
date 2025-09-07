# ProjectBudgetRole

Project budget role

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectId** | **number** |  | [default to undefined]
**roleId** | **number** |  | [default to undefined]
**estimatedMinutes** | **number** | Estimated Minutes: The total number of minutes budgeted for a role on a project. | [default to undefined]
**estimatedBudget** | **number** | The budget in local currency. This value is calculated live and rounded using ROUND_HALF_UP. estimatedBudget &#x3D; estimatedMinutes / 60 * projectRateMinute | [default to undefined]
**createdAt** | **string** | Timestamp of when the object was created. | [default to undefined]
**updatedAt** | **string** | Timestamp of when the object was last updated. | [default to undefined]

## Example

```typescript
import { ProjectBudgetRole } from 'runn-typescript-sdk';

const instance: ProjectBudgetRole = {
    projectId,
    roleId,
    estimatedMinutes,
    estimatedBudget,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
