# CreateSelectCustomFieldRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**model** | **string** | The field type of the custom field | [default to undefined]
**_options** | [**Array&lt;CreateSelectCustomFieldRequestOptionsInner&gt;**](CreateSelectCustomFieldRequestOptionsInner.md) |  | [default to undefined]
**singleSelect** | **boolean** |  | [default to false]
**required** | **boolean** |  | [default to false]
**showInPlanner** | **boolean** |  | [default to false]
**filterableInPlanner** | **boolean** |  | [default to true]

## Example

```typescript
import { CreateSelectCustomFieldRequest } from 'runn-typescript-sdk';

const instance: CreateSelectCustomFieldRequest = {
    name,
    description,
    model,
    _options,
    singleSelect,
    required,
    showInPlanner,
    filterableInPlanner,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
