# EventActualDeleted

An actual was deleted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eventId** | **string** |  | [default to undefined]
**type** | **string** | The unique type of the event | [default to undefined]
**actor** | [**Actor**](Actor.md) |  | [default to undefined]
**timestamp** | **string** | The time the event occurred in ISO8601 format. | [default to undefined]
**actual** | [**EventActualDeletedActual**](EventActualDeletedActual.md) |  | [default to undefined]

## Example

```typescript
import { EventActualDeleted } from 'runn-typescript-sdk';

const instance: EventActualDeleted = {
    eventId,
    type,
    actor,
    timestamp,
    actual,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
