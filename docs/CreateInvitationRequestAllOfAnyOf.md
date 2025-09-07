# CreateInvitationRequestAllOfAnyOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**editProjectsPermission** | **string** | Permissions for editing projects. (deprecated: use manageProjectsPermission) | [default to undefined]
**editOthersPermission** | **string** | Permissions for editing other parts of the account (people, clients, teams etc.) | [default to undefined]

## Example

```typescript
import { CreateInvitationRequestAllOfAnyOf } from 'runn-typescript-sdk';

const instance: CreateInvitationRequestAllOfAnyOf = {
    editProjectsPermission,
    editOthersPermission,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
