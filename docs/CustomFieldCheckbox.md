# CustomFieldCheckbox


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Unique identifier for the custom field checkbox | [default to undefined]
**name** | **string** | Display name for the custom field checkbox | [default to undefined]
**description** | **string** |  | [default to undefined]
**model** | **string** | The field type of the custom field | [default to undefined]
**required** | **boolean** | Whether or not the checkbox is a required field | [default to undefined]
**showInPlanner** | **boolean** | Whether or not the custom field checkbox is shown in the project or person planner in the app UI | [default to undefined]
**sortOrder** | **number** | The sort order of the custom field checkbox | [default to undefined]
**filterableInPlanner** | **boolean** | Whether or not the custom field checkbox is filterable in the project or person planner in the app UI | [default to undefined]

## Example

```typescript
import { CustomFieldCheckbox } from 'runn-typescript-sdk';

const instance: CustomFieldCheckbox = {
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
