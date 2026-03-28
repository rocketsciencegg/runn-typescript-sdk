# InvitationsPostRequestAllOfAnyOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**editProjectsPermission** | **string** | Permissions for editing projects. (deprecated: use manageProjectsPermission) | [default to undefined]
**editOthersPermission** | **string** | Permissions for editing other parts of the account (people, clients, teams etc.). (deprecated: use managePeoplePermission) | [default to undefined]

## Example

```typescript
import { InvitationsPostRequestAllOfAnyOf } from 'runn-typescript-sdk';

const instance: InvitationsPostRequestAllOfAnyOf = {
    editProjectsPermission,
    editOthersPermission,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
