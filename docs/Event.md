# Event

An event represents an action that occurred.       Every event has a `type`, `actor`, and `timestamp` property.       Use the `type` property to determine which event occurred.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eventId** | **string** |  | [default to undefined]
**type** | **string** | The unique type of the event | [default to undefined]
**actor** | [**Actor**](Actor.md) |  | [default to undefined]
**timestamp** | **string** | The time the event occurred in ISO8601 format. | [default to undefined]
**project** | [**EventProjectDeletedProject**](EventProjectDeletedProject.md) |  | [default to undefined]
**person** | [**EventPersonDeletedPerson**](EventPersonDeletedPerson.md) |  | [default to undefined]
**contract** | [**EventContractDeletedContract**](EventContractDeletedContract.md) |  | [default to undefined]
**actual** | [**EventActualDeletedActual**](EventActualDeletedActual.md) |  | [default to undefined]
**timeOff** | [**EventTimeOffDeletedTimeOff**](EventTimeOffDeletedTimeOff.md) |  | [default to undefined]
**assignment** | [**EventAssignmentDeletedAssignment**](EventAssignmentDeletedAssignment.md) |  | [default to undefined]

## Example

```typescript
import { Event } from 'runn-typescript-sdk';

const instance: Event = {
    eventId,
    type,
    actor,
    timestamp,
    project,
    person,
    contract,
    actual,
    timeOff,
    assignment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
