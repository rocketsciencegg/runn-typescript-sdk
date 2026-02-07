# CustomFieldSelect


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Unique identifier for the custom field select | [default to undefined]
**name** | **string** | Display name for the custom field select | [default to undefined]
**description** | **string** |  | [default to undefined]
**model** | **string** | The field type of the custom field | [default to undefined]
**_options** | [**Array&lt;UpdateSelectCustomFieldOption200ResponseOption&gt;**](UpdateSelectCustomFieldOption200ResponseOption.md) | All selectable options | [default to undefined]
**singleSelect** | **boolean** | Whether this select is a single or multi select | [default to undefined]
**required** | **boolean** | Whether or not the select is a required field | [default to undefined]
**showInPlanner** | **boolean** | Whether or not the custom field select is shown in the project or person planner in the app UI | [default to undefined]
**sortOrder** | **number** | The sort order of the custom field select | [default to undefined]
**filterableInPlanner** | **boolean** | Whether or not the custom field select is filterable in the project or person planner in the app UI | [default to undefined]

## Example

```typescript
import { CustomFieldSelect } from 'runn-typescript-sdk';

const instance: CustomFieldSelect = {
    id,
    name,
    description,
    model,
    _options,
    singleSelect,
    required,
    showInPlanner,
    sortOrder,
    filterableInPlanner,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
