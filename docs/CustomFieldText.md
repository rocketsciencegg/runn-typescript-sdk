# CustomFieldText


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Unique identifier for the custom field text | [default to undefined]
**name** | **string** | Display name for the custom field text | [default to undefined]
**description** | **string** |  | [default to undefined]
**model** | **string** | The field type of the custom field | [default to undefined]
**required** | **boolean** | Whether or not the text is a required field | [default to undefined]
**showInPlanner** | **boolean** | Whether or not the custom field text is shown in the project or person planner in the app UI | [default to undefined]
**sortOrder** | **number** | The sort order of the custom field text | [default to undefined]
**filterableInPlanner** | **boolean** | Whether or not the custom field text is filterable in the project or person planner in the app UI | [default to undefined]

## Example

```typescript
import { CustomFieldText } from 'runn-typescript-sdk';

const instance: CustomFieldText = {
    id,
    name,
    description,
    model,
    required,
    showInPlanner,
    sortOrder,
    filterableInPlanner,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
