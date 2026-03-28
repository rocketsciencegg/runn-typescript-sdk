# UserPermissions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**financial** | **string** |  | [default to undefined]
**editProjects** | **string** | Edit projects permission (deprecated: use manageProjects) | [default to undefined]
**manageProjects** | **string** |  | [default to undefined]
**editOthers** | **string** | Edit others permission (deprecated: use managePeople) | [default to undefined]
**managePeople** | **string** |  | [default to undefined]
**manageAccount** | **boolean** |  | [default to undefined]
**addAllPeopleToProjects** | **boolean** |  | [default to undefined]
**viewPlanner** | **boolean** |  | [default to undefined]

## Example

```typescript
import { UserPermissions } from 'runn-typescript-sdk';

const instance: UserPermissions = {
    type,
    financial,
    editProjects,
    manageProjects,
    editOthers,
    managePeople,
    manageAccount,
    addAllPeopleToProjects,
    viewPlanner,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
