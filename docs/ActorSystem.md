# ActorSystem

The system actor represents an action performed by the system, such as a scheduled task, migration, or other automated process. Some actions may not have a specific actor and will default to the system actor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]

## Example

```typescript
import { ActorSystem } from 'runn-typescript-sdk';

const instance: ActorSystem = {
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
