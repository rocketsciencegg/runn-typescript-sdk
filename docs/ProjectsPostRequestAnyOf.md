# ProjectsPostRequestAnyOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emoji** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [default to undefined]
**isConfirmed** | **boolean** |  | [optional] [default to undefined]
**isTemplate** | **boolean** |  | [optional] [default to undefined]
**budget** | **number** | Budget value in local currency | [optional] [default to undefined]
**expensesBudget** | **number** | Expenses budget value in local currency | [optional] [default to undefined]
**clientId** | **number** |  | [default to undefined]
**teamId** | **number** |  | [optional] [default to undefined]
**pricingModel** | **string** | Defaults to \&#39;tm\&#39; if not specified | [optional] [default to undefined]
**rateCardId** | **number** | Used to create initial project rates. Uses standard rate card if not specified | [optional] [default to undefined]
**rateType** | **string** | Defaults to account rate type if not specified | [optional] [default to undefined]
**references** | [**Array&lt;Reference&gt;**](Reference.md) |  | [optional] [default to undefined]
**managerIds** | **Set&lt;number&gt;** | List of User IDs that manage the project. | [optional] [default to undefined]

## Example

```typescript
import { ProjectsPostRequestAnyOf } from 'runn-typescript-sdk';

const instance: ProjectsPostRequestAnyOf = {
    emoji,
    name,
    isConfirmed,
    isTemplate,
    budget,
    expensesBudget,
    clientId,
    teamId,
    pricingModel,
    rateCardId,
    rateType,
    references,
    managerIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
