# UpdatePersonRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstName** | **string** |  | [optional] [default to undefined]
**lastName** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**tags** | [**Array&lt;UpdatePersonRequestTagsInner&gt;**](UpdatePersonRequestTagsInner.md) |  | [optional] [default to undefined]
**references** | [**Array&lt;Reference&gt;**](Reference.md) |  | [optional] [default to undefined]
**isArchived** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { UpdatePersonRequest } from 'runn-typescript-sdk';

const instance: UpdatePersonRequest = {
    firstName,
    lastName,
    email,
    tags,
    references,
    isArchived,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
