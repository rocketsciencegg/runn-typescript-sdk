# EventProjectDeleted

A project was deleted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eventId** | **string** |  | [default to undefined]
**type** | **string** | The unique type of the event | [default to undefined]
**actor** | [**Actor**](Actor.md) |  | [default to undefined]
**timestamp** | **string** | The time the event occurred in ISO8601 format. | [default to undefined]
**project** | [**EventProjectDeletedProject**](EventProjectDeletedProject.md) |  | [default to undefined]

## Example

```typescript
import { EventProjectDeleted } from 'runn-typescript-sdk';

const instance: EventProjectDeleted = {
    eventId,
    type,
    actor,
    timestamp,
    project,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
