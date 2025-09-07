# UpdateProjectRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**isConfirmed** | **boolean** |  | [optional] [default to undefined]
**isArchived** | **boolean** |  | [optional] [default to undefined]
**isTemplate** | **boolean** |  | [optional] [default to undefined]
**budget** | **number** | Budget value in local currency | [optional] [default to undefined]
**expensesBudget** | **number** | Expenses budget value in local currency | [optional] [default to undefined]
**clientId** | **number** |  | [optional] [default to undefined]
**teamId** | **number** |  | [optional] [default to undefined]
**pricingModel** | **string** |  | [optional] [default to undefined]
**rateType** | **string** |  | [optional] [default to undefined]
**references** | [**Array&lt;Reference&gt;**](Reference.md) |  | [optional] [default to undefined]
**tags** | [**Array&lt;UpdatePersonRequestTagsInner&gt;**](UpdatePersonRequestTagsInner.md) |  | [optional] [default to undefined]
**managerIds** | **Set&lt;number&gt;** | List of User IDs that manage the project. | [optional] [default to undefined]

## Example

```typescript
import { UpdateProjectRequest } from 'runn-typescript-sdk';

const instance: UpdateProjectRequest = {
    name,
    isConfirmed,
    isArchived,
    isTemplate,
    budget,
    expensesBudget,
    clientId,
    teamId,
    pricingModel,
    rateType,
    references,
    tags,
    managerIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
