# PeoplePersonIdPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstName** | **string** |  | [optional] [default to undefined]
**lastName** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**tags** | [**Array&lt;PeoplePersonIdPatchRequestTagsInner&gt;**](PeoplePersonIdPatchRequestTagsInner.md) |  | [optional] [default to undefined]
**teamId** | **number** |  | [optional] [default to undefined]
**references** | [**Array&lt;Reference&gt;**](Reference.md) |  | [optional] [default to undefined]
**isArchived** | **boolean** |  | [optional] [default to undefined]
**managers** | [**Array&lt;PeoplePersonIdPatchRequestManagersInner&gt;**](PeoplePersonIdPatchRequestManagersInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PeoplePersonIdPatchRequest } from 'runn-typescript-sdk';

const instance: PeoplePersonIdPatchRequest = {
    firstName,
    lastName,
    email,
    tags,
    teamId,
    references,
    isArchived,
    managers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
