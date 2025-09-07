# Person


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**firstName** | **string** |  | [default to undefined]
**lastName** | **string** |  | [default to undefined]
**email** | **string** |  | [default to undefined]
**isArchived** | **boolean** |  | [default to undefined]
**references** | [**Array&lt;Reference&gt;**](Reference.md) |  | [default to undefined]
**notes** | [**Array&lt;PersonNotesInner&gt;**](PersonNotesInner.md) |  | [default to undefined]
**teamId** | **number** |  | [default to undefined]
**tags** | [**Array&lt;Tag&gt;**](Tag.md) |  | [default to undefined]
**skills** | [**Array&lt;PersonSkillsInner&gt;**](PersonSkillsInner.md) |  | [default to undefined]
**holidaysGroupId** | **number** |  | [default to undefined]
**customFields** | [**PersonCustomFields**](PersonCustomFields.md) |  | [default to undefined]
**managers** | [**Array&lt;CollectionPersonManagersInner&gt;**](CollectionPersonManagersInner.md) |  | [default to undefined]
**createdAt** | **string** | Timestamp of when the object was created. | [default to undefined]
**updatedAt** | **string** | Timestamp of when the object was last updated. | [default to undefined]

## Example

```typescript
import { Person } from 'runn-typescript-sdk';

const instance: Person = {
    id,
    firstName,
    lastName,
    email,
    isArchived,
    references,
    notes,
    teamId,
    tags,
    skills,
    holidaysGroupId,
    customFields,
    managers,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
