# UpdateProjectPhaseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the project phase. Must be at least 1 character long. | [optional] [default to undefined]
**startDate** | **string** | The start date of the project phase in ISO8061 format: YYYY-MM-DD | [optional] [default to undefined]
**endDate** | **string** | The end date of the project phase in ISO8061 format: YYYY-MM-DD | [optional] [default to undefined]
**color** | **string** | Hex color of the phase. Only a subset of colors is allowed. | [optional] [default to ColorEnum__67D0D5]

## Example

```typescript
import { UpdateProjectPhaseRequest } from 'runn-typescript-sdk';

const instance: UpdateProjectPhaseRequest = {
    name,
    startDate,
    endDate,
    color,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
