# ProjectPhase

Project phases divide your project into smaller sections so you can group similar tasks and assignments together.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Unique identifier for the phase | [default to undefined]
**name** | **string** | The name of the project phase | [default to undefined]
**color** | **string** | Color of the project phase (hex code) | [default to undefined]
**startDate** | **string** | Start date of the project phase in ISO 8601 format | [default to undefined]
**endDate** | **string** | End date of the phase in ISO 8601 format | [default to undefined]
**updatedAt** | **string** | Timestamp of when the object was last updated. | [default to undefined]
**createdAt** | **string** | Timestamp of when the object was created. | [default to undefined]
**projectId** | **number** | The project the phase is associated with. | [default to undefined]

## Example

```typescript
import { ProjectPhase } from 'runn-typescript-sdk';

const instance: ProjectPhase = {
    id,
    name,
    color,
    startDate,
    endDate,
    updatedAt,
    createdAt,
    projectId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
