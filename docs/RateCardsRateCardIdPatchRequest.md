# RateCardsRateCardIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**references** | [**Array&lt;RateCardsPostRequestReferencesInner&gt;**](RateCardsPostRequestReferencesInner.md) |  | [optional] [default to undefined]
**isBlendedRateCard** | **boolean** |  | [optional] [default to undefined]
**blendedRate** | **number** |  | [optional] [default to undefined]
**rateType** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { RateCardsRateCardIdPatchRequest } from 'runn-typescript-sdk';

const instance: RateCardsRateCardIdPatchRequest = {
    name,
    description,
    references,
    isBlendedRateCard,
    blendedRate,
    rateType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
