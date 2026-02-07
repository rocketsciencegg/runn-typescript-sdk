# EventSubresourcePerson

A subset of details about the person used on an event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The unique identifier of the person | [default to undefined]
**firstName** | **string** | The first name of the person | [default to undefined]
**lastName** | **string** | The last name of the person | [default to undefined]
**email** | **string** | The email address of the person | [default to undefined]
**isPlaceholder** | **boolean** | A flag indicating if the person is a placeholder | [default to undefined]

## Example

```typescript
import { EventSubresourcePerson } from 'runn-typescript-sdk';

const instance: EventSubresourcePerson = {
    id,
    firstName,
    lastName,
    email,
    isPlaceholder,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
