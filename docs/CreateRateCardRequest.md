# CreateRateCardRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**references** | [**Array&lt;CreateRateCardRequestReferencesInner&gt;**](CreateRateCardRequestReferencesInner.md) |  | [default to undefined]
**isBlendedRateCard** | **boolean** |  | [default to undefined]
**blendedRate** | **number** |  | [default to undefined]
**rateType** | **string** |  | [default to undefined]

## Example

```typescript
import { CreateRateCardRequest } from 'runn-typescript-sdk';

const instance: CreateRateCardRequest = {
    name,
    description,
    references,
    isBlendedRateCard,
    blendedRate,
    rateType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
