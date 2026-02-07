# RateCard


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**isArchived** | **boolean** |  | [default to undefined]
**references** | [**Array&lt;CreateRateCardRequestReferencesInner&gt;**](CreateRateCardRequestReferencesInner.md) |  | [default to undefined]
**isBlendedRateCard** | **boolean** |  | [default to undefined]
**blendedRate** | **number** |  | [default to undefined]
**rateType** | **string** |  | [default to undefined]
**projectIds** | **Array&lt;number&gt;** |  | [default to undefined]
**rates** | [**Array&lt;RateCardRatesInner&gt;**](RateCardRatesInner.md) |  | [default to undefined]
**createdAt** | **string** | Timestamp of when the object was created. | [default to undefined]
**updatedAt** | **string** | Timestamp of when the object was last updated. | [default to undefined]

## Example

```typescript
import { RateCard } from 'runn-typescript-sdk';

const instance: RateCard = {
    id,
    name,
    description,
    isArchived,
    references,
    isBlendedRateCard,
    blendedRate,
    rateType,
    projectIds,
    rates,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
