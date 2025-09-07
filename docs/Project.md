# Project


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**isTemplate** | **boolean** |  | [default to undefined]
**isArchived** | **boolean** |  | [default to undefined]
**isConfirmed** | **boolean** |  | [default to undefined]
**pricingModel** | **string** |  | [default to undefined]
**rateType** | **string** |  | [default to undefined]
**teamId** | **number** |  | [default to undefined]
**budget** | **number** |  | [default to undefined]
**expensesBudget** | **number** |  | [default to undefined]
**references** | [**Array&lt;Reference&gt;**](Reference.md) |  | [default to undefined]
**clientId** | **number** |  | [default to undefined]
**rateCardId** | **number** |  | [default to undefined]
**customFields** | [**PersonCustomFields**](PersonCustomFields.md) |  | [default to undefined]
**managerIds** | **Array&lt;number&gt;** |  | [default to undefined]
**tags** | [**Array&lt;Tag&gt;**](Tag.md) |  | [default to undefined]
**createdAt** | **string** | Timestamp of when the object was created. | [default to undefined]
**updatedAt** | **string** | Timestamp of when the object was last updated. | [default to undefined]

## Example

```typescript
import { Project } from 'runn-typescript-sdk';

const instance: Project = {
    id,
    name,
    isTemplate,
    isArchived,
    isConfirmed,
    pricingModel,
    rateType,
    teamId,
    budget,
    expensesBudget,
    references,
    clientId,
    rateCardId,
    customFields,
    managerIds,
    tags,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
