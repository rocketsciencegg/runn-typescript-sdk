# EventContractDeletedContract


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The unique identifier of the contract. | [default to undefined]
**personId** | **number** | The unique identifier of the person associated with the contract. | [default to undefined]
**roleId** | **number** | The unique identifier of the role associated with the contract. | [default to undefined]
**startDate** | **string** | The start date of the contract. | [default to undefined]
**endDate** | **string** | The end date of the contract. If the contract was ongoing, this field will be null. | [default to undefined]
**person** | [**EventSubresourcePerson**](EventSubresourcePerson.md) |  | [default to undefined]
**role** | [**EventSubresourceRole**](EventSubresourceRole.md) |  | [default to undefined]

## Example

```typescript
import { EventContractDeletedContract } from 'runn-typescript-sdk';

const instance: EventContractDeletedContract = {
    id,
    personId,
    roleId,
    startDate,
    endDate,
    person,
    role,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
