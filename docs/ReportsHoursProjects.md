# ReportsHoursProjects


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | The date of the entry. Multi-day assignments will get split over multiple days. Format: YYYY-MM-DD | [default to undefined]
**roleId** | **number** | The project-specific role for the associated person | [default to undefined]
**personId** | **number** | The person related to this entry | [default to undefined]
**projectId** | **number** | The project for this entry | [default to undefined]
**workstreamId** | **number** | The workstream for this entry | [default to undefined]
**phaseId** | **number** | Associated phase (using actual phase, and falling back to assignment phase) | [default to undefined]
**billableMinutes** | **number** | Billable minutes for this day. Returns Actual minutes where it exists, otherwise returns Assignment minutes. | [default to undefined]
**nonBillableMinutes** | **number** | Non-billable minutes for this day. Returns Actual minutes where it exists, otherwise returns Assignment minutes. | [default to undefined]
**totalMinutes** | **number** | Total minutes for this day (sum of billable and non-billable) | [default to undefined]
**assignments** | [**ReportsHoursPeopleAssignments**](ReportsHoursPeopleAssignments.md) |  | [default to undefined]
**actuals** | [**ReportsHoursPeopleActuals**](ReportsHoursPeopleActuals.md) |  | [default to undefined]

## Example

```typescript
import { ReportsHoursProjects } from 'runn-typescript-sdk';

const instance: ReportsHoursProjects = {
    date,
    roleId,
    personId,
    projectId,
    workstreamId,
    phaseId,
    billableMinutes,
    nonBillableMinutes,
    totalMinutes,
    assignments,
    actuals,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
