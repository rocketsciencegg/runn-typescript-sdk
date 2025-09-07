# CustomFieldDate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Unique identifier for the custom field date | [default to undefined]
**name** | **string** | Display name for the custom field date | [default to undefined]
**description** | **string** | Description for the custom field date | [default to undefined]
**model** | **string** | The field type of the custom field | [default to undefined]
**required** | **boolean** | Whether or not the date is a required field | [default to undefined]
**showInPlanner** | **boolean** | Whether or not the custom field date is shown in the project or person planner in the app UI | [default to undefined]
**sortOrder** | **number** | The sort order of the custom field date | [default to undefined]
**filterableInPlanner** | **boolean** | Whether or not the custom field select is filterable in the project or person planner in the app UI | [default to undefined]

## Example

```typescript
import { CustomFieldDate } from 'runn-typescript-sdk';

const instance: CustomFieldDate = {
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
