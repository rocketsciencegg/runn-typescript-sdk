# CreateRoleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**defaultHourCost** | **number** |  | [optional] [default to 0]
**standardRate** | **number** |  | [optional] [default to 0]
**references** | [**Array&lt;Reference&gt;**](Reference.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CreateRoleRequest } from 'runn-typescript-sdk';

const instance: CreateRoleRequest = {
    name,
    defaultHourCost,
    standardRate,
    references,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
