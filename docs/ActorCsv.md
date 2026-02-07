# ActorCsv

The csv actor represents an action performed by a csv file upload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**userId** | **number** | The id of the user who uploaded the csv file. | [optional] [default to undefined]
**userEmail** | **string** | The email of the user who uploaded the csv file. | [optional] [default to undefined]

## Example

```typescript
import { ActorCsv } from 'runn-typescript-sdk';

const instance: ActorCsv = {
    type,
    userId,
    userEmail,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
