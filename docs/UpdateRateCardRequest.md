# UpdateRateCardRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**references** | [**Array&lt;CreateRateCardRequestReferencesInner&gt;**](CreateRateCardRequestReferencesInner.md) |  | [optional] [default to undefined]
**isBlendedRateCard** | **boolean** |  | [optional] [default to undefined]
**blendedRate** | **number** |  | [optional] [default to undefined]
**rateType** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateRateCardRequest } from 'runn-typescript-sdk';

const instance: UpdateRateCardRequest = {
    name,
    description,
    references,
    isBlendedRateCard,
    blendedRate,
    rateType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
