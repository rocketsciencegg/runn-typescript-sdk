# Invitation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Unique identifier for the invitation. | [default to undefined]
**email** | **string** | Email for the invitation. | [default to undefined]
**userType** | **string** | Permission level | [default to undefined]
**financialPermission** | **string** | Financial permission level | [default to undefined]
**editProjectsPermission** | **string** | Edit projects permission level (deprecated: use manageProjectsPermission) | [default to undefined]
**editOthersPermission** | **string** | Edit others permission level (deprecated: use managePeoplePermission) | [default to undefined]
**manageProjectsPermission** | **string** | Manage projects permission level | [default to undefined]
**managePeoplePermission** | **string** | Manage people permission level | [default to undefined]
**manageAccountPermission** | **boolean** | Manage account permission level | [default to undefined]
**addAllPeopleToProjectsPermission** | **boolean** | Add all people to projects permission level | [default to undefined]
**viewPlannerPermission** | **boolean** | View planner permission level | [default to undefined]
**createdAt** | **string** | Timestamp of when the object was created. | [default to undefined]
**sentAt** | **string** | Date and time when the invitation was last sent | [default to undefined]
**expiresAt** | **string** | Date and time when the invitation expires | [default to undefined]

## Example

```typescript
import { Invitation } from 'runn-typescript-sdk';

const instance: Invitation = {
    id,
    email,
    userType,
    financialPermission,
    editProjectsPermission,
    editOthersPermission,
    manageProjectsPermission,
    managePeoplePermission,
    manageAccountPermission,
    addAllPeopleToProjectsPermission,
    viewPlannerPermission,
    createdAt,
    sentAt,
    expiresAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
