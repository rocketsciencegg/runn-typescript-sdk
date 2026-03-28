# InvitationsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | Email for the invitation. | [default to undefined]
**userType** | **string** | Permission level | [default to undefined]
**financialPermission** | **string** | Financial permission level | [default to undefined]
**fromUser** | **string** | Email address of user the invite should be sent from (must be a Runn user with admin permissions). | [default to undefined]
**editProjectsPermission** | **string** | Permissions for editing projects. (deprecated: use manageProjectsPermission) | [default to undefined]
**editOthersPermission** | **string** | Permissions for editing other parts of the account (people, clients, teams etc.). (deprecated: use managePeoplePermission) | [default to undefined]
**manageProjectsPermission** | **string** | Permissions for managing projects. | [default to undefined]
**manageOthersPermission** | **string** | Permissions for managing other parts of the account (people, clients, teams etc.). (deprecated: use managePeoplePermission) | [default to undefined]

## Example

```typescript
import { InvitationsPostRequest } from 'runn-typescript-sdk';

const instance: InvitationsPostRequest = {
    email,
    userType,
    financialPermission,
    fromUser,
    editProjectsPermission,
    editOthersPermission,
    manageProjectsPermission,
    manageOthersPermission,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
