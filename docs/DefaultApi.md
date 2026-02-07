# DefaultApi

All URIs are relative to *https://api.runn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addPeopleToSkill**](#addpeopletoskill) | **POST** /skills/{skillId}/people/ | Add people to a skill|
|[**addPersonSkill**](#addpersonskill) | **POST** /people/{personId}/skills/ | Add a skill to a person|
|[**addPersonToProject**](#addpersontoproject) | **POST** /people/{personId}/projects/ | Add project to a person|
|[**addPersonToTeam**](#addpersontoteam) | **POST** /people/{personId}/teams/ | Add a person to a team|
|[**addPlaceholderSkill**](#addplaceholderskill) | **POST** /placeholders/{placeholderId}/skills/ | Add a skill to a placeholder|
|[**addPlaceholderToTeam**](#addplaceholdertoteam) | **POST** /placeholders/{placeholderId}/teams/ | Add a placeholder to a team|
|[**addProjectTagToProject**](#addprojecttagtoproject) | **POST** /project-tags/{projectTagId}/project/{projectId} | Add a project tag to a project|
|[**addWorkstreamToProject**](#addworkstreamtoproject) | **POST** /projects/{projectId}/project-workstreams/{workstreamId}/ | Add a workstream to a project|
|[**allocateViewToUser**](#allocateviewtouser) | **POST** /users/{userId}/views/{viewId} | Allocate a view to a user|
|[**convertLegacyId**](#convertlegacyid) | **GET** /legacy-id/{model}/{legacyId} | Convert a legacy ID from API v0 to a new ID|
|[**createActual**](#createactual) | **POST** /actuals/ | Create or update an actual|
|[**createActualsBulk**](#createactualsbulk) | **POST** /actuals/bulk/ | Create or update actuals in bulk|
|[**createAssignment**](#createassignment) | **POST** /assignments/ | Create an assignment|
|[**createCheckboxCustomField**](#createcheckboxcustomfield) | **POST** /custom-fields/checkbox/ | Create a checkbox custom field|
|[**createClient**](#createclient) | **POST** /clients/ | Create a client|
|[**createClientsBulk**](#createclientsbulk) | **POST** /clients/bulk/ | Create clients in bulk|
|[**createDateCustomField**](#createdatecustomfield) | **POST** /custom-fields/date/ | Create a date custom field|
|[**createHolidayTimeOff**](#createholidaytimeoff) | **POST** /time-offs/holidays/ | Create a holiday time off|
|[**createInvitation**](#createinvitation) | **POST** /invitations/ | Create an invitation for a user|
|[**createLeaveTimeOff**](#createleavetimeoff) | **POST** /time-offs/leave/ | Create a leave time off|
|[**createLeaveTimeOffsBulk**](#createleavetimeoffsbulk) | **POST** /time-offs/leave/bulk/ | Create leave time offs in bulk|
|[**createNoteForProject**](#createnoteforproject) | **POST** /projects/{projectId}/notes/ | Create a project note|
|[**createPeopleTag**](#createpeopletag) | **POST** /people-tags/ | Create a people tag|
|[**createPerson**](#createperson) | **POST** /people/ | Create a person|
|[**createPersonContract**](#createpersoncontract) | **POST** /people/{personId}/contracts/ | Add a new contract to a person|
|[**createPlaceholder**](#createplaceholder) | **POST** /placeholders/ | Create a placeholder|
|[**createProject**](#createproject) | **POST** /projects/ | Create a project|
|[**createProjectBudgetRole**](#createprojectbudgetrole) | **POST** /projects/{projectId}/budget-roles/ | Create a project budget role|
|[**createProjectMilestone**](#createprojectmilestone) | **POST** /projects/{projectId}/milestones/ | Create a milestone for a project|
|[**createProjectOtherExpense**](#createprojectotherexpense) | **POST** /projects/{projectId}/other-expenses/ | Create an other expense for a project|
|[**createProjectPersonRequest**](#createprojectpersonrequest) | **POST** /projects/{projectId}/person-requests/ | Create a person request on a project|
|[**createProjectPhase**](#createprojectphase) | **POST** /projects/{projectId}/phases/ | Create a phase for a project|
|[**createProjectTag**](#createprojecttag) | **POST** /project-tags/ | Create a project tag|
|[**createRateCard**](#createratecard) | **POST** /rate-cards/ | Create a rate card|
|[**createRole**](#createrole) | **POST** /roles/ | Create a role|
|[**createSelectCustomField**](#createselectcustomfield) | **POST** /custom-fields/select/ | Create a select custom field|
|[**createSelectCustomFieldOption**](#createselectcustomfieldoption) | **POST** /custom-fields/select/{selectFieldId}/options | Create a select custom field option|
|[**createSkill**](#createskill) | **POST** /skills/ | Create a skill|
|[**createTeam**](#createteam) | **POST** /teams/ | Create a team|
|[**createTextCustomField**](#createtextcustomfield) | **POST** /custom-fields/text/ | Create a text custom field|
|[**createWorkstream**](#createworkstream) | **POST** /workstreams/ | Create a workstream|
|[**deleteActual**](#deleteactual) | **DELETE** /actuals/{actualId}/ | Delete a specific actual|
|[**deleteAssignment**](#deleteassignment) | **DELETE** /assignments/{assignmentId}/ | Delete an assignment|
|[**deleteCheckboxCustomField**](#deletecheckboxcustomfield) | **DELETE** /custom-fields/checkbox/{checkboxFieldId} | Delete a checkbox custom field|
|[**deleteDateCustomField**](#deletedatecustomfield) | **DELETE** /custom-fields/date/{dateFieldId} | Delete a date custom field|
|[**deleteHolidayTimeOff**](#deleteholidaytimeoff) | **DELETE** /time-offs/holidays/{timeOffId} | Delete a holiday time off|
|[**deleteInvitation**](#deleteinvitation) | **DELETE** /invitations/{invitationId} | Delete an invitation|
|[**deleteLeaveTimeOff**](#deleteleavetimeoff) | **DELETE** /time-offs/leave/{timeOffId}/ | Delete a leave time off|
|[**deleteLeaveTimeOffsBulk**](#deleteleavetimeoffsbulk) | **DELETE** /time-offs/leave/bulk/ | Delete leave time offs in bulk|
|[**deletePeopleTag**](#deletepeopletag) | **DELETE** /people-tags/{peopleTagId} | Delete a people tag|
|[**deletePerson**](#deleteperson) | **DELETE** /people/{personId} | Delete a person|
|[**deletePersonContract**](#deletepersoncontract) | **DELETE** /people/{personId}/contracts/{contractId} | Delete a contract for a person|
|[**deleteProject**](#deleteproject) | **DELETE** /projects/{projectId}/ | Delete a project|
|[**deleteProjectBudgetRole**](#deleteprojectbudgetrole) | **DELETE** /projects/{projectId}/budget-roles/{roleId} | Delete a project budget role|
|[**deleteProjectMilestone**](#deleteprojectmilestone) | **DELETE** /projects/{projectId}/milestones/{milestoneId} | Delete a milestone for a project|
|[**deleteProjectPhase**](#deleteprojectphase) | **DELETE** /projects/{projectId}/phases/{phaseId} | Delete a phase for a project|
|[**deleteRateCard**](#deleteratecard) | **DELETE** /rate-cards/{rateCardId} | Delete a rate card|
|[**deleteRosteredTimeOff**](#deleterosteredtimeoff) | **DELETE** /time-offs/rostered-off/{timeOffId} | Delete a rostered time off|
|[**deleteSelectCustomField**](#deleteselectcustomfield) | **DELETE** /custom-fields/select/{selectFieldId} | Delete a select custom field|
|[**deleteSelectCustomFieldOption**](#deleteselectcustomfieldoption) | **DELETE** /custom-fields/select/{selectFieldId}/options/{selectOptionId} | Delete a select custom field option|
|[**deleteSkill**](#deleteskill) | **DELETE** /skills/{skillId} | Delete a skill|
|[**deleteTeam**](#deleteteam) | **DELETE** /teams/{teamId}/ | Delete a team|
|[**deleteTextCustomField**](#deletetextcustomfield) | **DELETE** /custom-fields/text/{textFieldId} | Delete a text custom field|
|[**deleteUser**](#deleteuser) | **DELETE** /users/{userId} | Delete a user|
|[**deleteWorkstream**](#deleteworkstream) | **DELETE** /workstreams/{workstreamId}/ | Delete a workstream|
|[**getClient**](#getclient) | **GET** /clients/{clientId} | Show a client|
|[**getCurrentUser**](#getcurrentuser) | **GET** /me/ | Who am I?|
|[**getHolidayGroup**](#getholidaygroup) | **GET** /holiday-groups/{holidayGroupId} | Show a holiday group|
|[**getLeaveTimeOff**](#getleavetimeoff) | **GET** /time-offs/leave/{timeOffId}/ | Show a leave time off|
|[**getPeopleTag**](#getpeopletag) | **GET** /people-tags/{peopleTagId} | Show a people tag|
|[**getPerson**](#getperson) | **GET** /people/{personId} | Show a person|
|[**getPersonCurrentContract**](#getpersoncurrentcontract) | **GET** /people/{personId}/contracts/current | Show current contract for a person|
|[**getPersonCurrentTeam**](#getpersoncurrentteam) | **GET** /people/{personId}/teams/current | Show current team|
|[**getPersonHoursReport**](#getpersonhoursreport) | **GET** /reports/hours/people/{personId} | Get by-day entries for a person with assignments and actuals|
|[**getProject**](#getproject) | **GET** /projects/{projectId} | Show a project|
|[**getProjectBudgetRole**](#getprojectbudgetrole) | **GET** /projects/{projectId}/budget-roles/{roleId} | Get a project budget role|
|[**getProjectHoursReport**](#getprojecthoursreport) | **GET** /reports/hours/projects/{projectId} | Get by-day entries for a project with assignments and actuals|
|[**getProjectPersonRequest**](#getprojectpersonrequest) | **GET** /projects/{projectId}/person-requests/{personRequestId} | Show a single person request for a project|
|[**getProjectPhase**](#getprojectphase) | **GET** /projects/{projectId}/phases/{phaseId} | Show a phase for a project|
|[**getProjectTag**](#getprojecttag) | **GET** /project-tags/{projectTagId} | Show a project tag|
|[**getProjectTimesheetLock**](#getprojecttimesheetlock) | **GET** /projects/{projectId}/timesheet-lock/ | Show a timesheet lock for a project|
|[**getProjectTotalsReport**](#getprojecttotalsreport) | **GET** /reports/totals/projects/{projectId} | Show totals for a project with assignments and actuals|
|[**getProjectWorkstream**](#getprojectworkstream) | **GET** /projects/{projectId}/project-workstreams/{workstreamId}/ | View project workstream|
|[**getRateCard**](#getratecard) | **GET** /rate-cards/{rateCardId} | Show a rate card|
|[**getRole**](#getrole) | **GET** /roles/{roleId} | Show a role|
|[**getSkill**](#getskill) | **GET** /skills/{skillId} | Show a skill|
|[**getTeam**](#getteam) | **GET** /teams/{teamId}/ | Show a team|
|[**getUser**](#getuser) | **GET** /users/{userId} | Show a user|
|[**getWorkstream**](#getworkstream) | **GET** /workstreams/{workstreamId}/ | Show a workstream|
|[**listActuals**](#listactuals) | **GET** /actuals/ | List actuals|
|[**listAssignments**](#listassignments) | **GET** /assignments/ | List assignments|
|[**listBudgetRoles**](#listbudgetroles) | **GET** /budget-roles/ | List budget roles|
|[**listCheckboxCustomFields**](#listcheckboxcustomfields) | **GET** /custom-fields/checkbox/ | List checkbox custom fields|
|[**listClientProjects**](#listclientprojects) | **GET** /clients/{clientId}/projects/ | List a client\&#39;s projects|
|[**listClients**](#listclients) | **GET** /clients/ | List clients|
|[**listContracts**](#listcontracts) | **GET** /contracts/ | List contracts|
|[**listDateCustomFields**](#listdatecustomfields) | **GET** /custom-fields/date/ | List date custom fields|
|[**listEvents**](#listevents) | **GET** /activity-log/ | List events|
|[**listHolidayGroupHolidays**](#listholidaygroupholidays) | **GET** /holiday-groups/{holidayGroupId}/holidays | Show holidays for a holiday group|
|[**listHolidayGroups**](#listholidaygroups) | **GET** /holiday-groups/ | List holiday groups|
|[**listHolidayTimeOffs**](#listholidaytimeoffs) | **GET** /time-offs/holidays/ | List holiday time offs|
|[**listInvitations**](#listinvitations) | **GET** /invitations/ | List invitations|
|[**listLeaveTimeOffs**](#listleavetimeoffs) | **GET** /time-offs/leave/ | List leave time offs|
|[**listMilestones**](#listmilestones) | **GET** /milestones/ | List project milestones|
|[**listNotesForProject**](#listnotesforproject) | **GET** /projects/{projectId}/notes/ | List notes for a project|
|[**listOtherExpenses**](#listotherexpenses) | **GET** /other-expenses/ | List other expenses|
|[**listPeople**](#listpeople) | **GET** /people/ | List people|
|[**listPeopleCurrentContracts**](#listpeoplecurrentcontracts) | **GET** /people/contracts/current | List people current contracts|
|[**listPeopleCustomFields**](#listpeoplecustomfields) | **GET** /people/custom-fields | List people custom fields|
|[**listPeopleNotes**](#listpeoplenotes) | **GET** /people/notes | List people notes|
|[**listPeopleSkills**](#listpeopleskills) | **GET** /people/skills | List people skills|
|[**listPeopleTags**](#listpeopletags) | **GET** /people-tags/ | List people tags|
|[**listPersonActuals**](#listpersonactuals) | **GET** /people/{personId}/actuals/ | List actuals for a person|
|[**listPersonAssignments**](#listpersonassignments) | **GET** /people/{personId}/assignments/ | List assignments for a person|
|[**listPersonContracts**](#listpersoncontracts) | **GET** /people/{personId}/contracts/ | List contracts for a person|
|[**listPersonHolidays**](#listpersonholidays) | **GET** /people/{personId}/time-offs/holidays | List holidays for a person|
|[**listPersonLeave**](#listpersonleave) | **GET** /people/{personId}/time-offs/leave | List leave for a person|
|[**listPersonProjects**](#listpersonprojects) | **GET** /people/{personId}/projects/ | List projects for a person|
|[**listPersonRequests**](#listpersonrequests) | **GET** /person-requests/ | List person requests|
|[**listPersonRosteredTimeOffs**](#listpersonrosteredtimeoffs) | **GET** /people/{personId}/time-offs/rostered-off | List rostered time offs for a person|
|[**listPersonSkills**](#listpersonskills) | **GET** /people/{personId}/skills/ | List skills for a person|
|[**listPhases**](#listphases) | **GET** /phases/ | List phases|
|[**listPlaceholders**](#listplaceholders) | **GET** /placeholders/ | List placeholders|
|[**listProjectActuals**](#listprojectactuals) | **GET** /projects/{projectId}/actuals/ | List actuals for a project|
|[**listProjectAssignments**](#listprojectassignments) | **GET** /projects/{projectId}/assignments/ | List assignments for a project|
|[**listProjectBudgetRoles**](#listprojectbudgetroles) | **GET** /projects/{projectId}/budget-roles/ | Get a paginated list of project budget roles for a project|
|[**listProjectCustomFields**](#listprojectcustomfields) | **GET** /projects/custom-fields | List project custom fields|
|[**listProjectMembers**](#listprojectmembers) | **GET** /project-members/ | List members of projects|
|[**listProjectMilestones**](#listprojectmilestones) | **GET** /projects/{projectId}/milestones/ | List milestones for a project|
|[**listProjectNotes**](#listprojectnotes) | **GET** /project-notes/ | List project notes|
|[**listProjectOtherExpenses**](#listprojectotherexpenses) | **GET** /projects/{projectId}/other-expenses/ | List other expenses for a project|
|[**listProjectPeople**](#listprojectpeople) | **GET** /projects/{projectId}/people/ | List people assigned to a project|
|[**listProjectPersonRequests**](#listprojectpersonrequests) | **GET** /projects/{projectId}/person-requests/ | List the person requests for a project|
|[**listProjectPhases**](#listprojectphases) | **GET** /projects/{projectId}/phases/ | List phases for a project|
|[**listProjectRates**](#listprojectrates) | **GET** /project-rates/ | List role rates|
|[**listProjectRoleRates**](#listprojectrolerates) | **GET** /projects/{projectId}/project-rates/ | List role rates for a project|
|[**listProjectTags**](#listprojecttags) | **GET** /project-tags/ | List project tags|
|[**listProjectTotalsReport**](#listprojecttotalsreport) | **GET** /reports/totals/projects/ | List totals for projects with assignments and actuals|
|[**listProjectWorkstreams**](#listprojectworkstreams) | **GET** /project-workstreams/ | List project workstreams|
|[**listProjectWorkstreamsForProject**](#listprojectworkstreamsforproject) | **GET** /projects/{projectId}/project-workstreams/ | List workstreams assigned to a project|
|[**listProjects**](#listprojects) | **GET** /projects/ | List projects|
|[**listRateCards**](#listratecards) | **GET** /rate-cards/ | List rate cards|
|[**listRoles**](#listroles) | **GET** /roles/ | List roles|
|[**listRosteredTimeOffs**](#listrosteredtimeoffs) | **GET** /time-offs/rostered-off/ | List rostered time offs|
|[**listSelectCustomFields**](#listselectcustomfields) | **GET** /custom-fields/select/ | Show a select custom field|
|[**listSkillPeople**](#listskillpeople) | **GET** /skills/{skillId}/people/ | List people for a skill|
|[**listSkills**](#listskills) | **GET** /skills/ | List skills|
|[**listTeamPeople**](#listteampeople) | **GET** /teams/{teamId}/people/ | List people in a team|
|[**listTeams**](#listteams) | **GET** /teams/ | List teams|
|[**listTextCustomFields**](#listtextcustomfields) | **GET** /custom-fields/text/ | Show a text custom field|
|[**listUserViews**](#listuserviews) | **GET** /users/{userId}/views/ | List allocated views for a user|
|[**listUsers**](#listusers) | **GET** /users/ | List users|
|[**listViews**](#listviews) | **GET** /views/ | List views|
|[**listWorkstreams**](#listworkstreams) | **GET** /workstreams/ | List workstreams|
|[**removePersonFromTeam**](#removepersonfromteam) | **DELETE** /people/{personId}/teams/{teamId} | Remove a person from a team|
|[**removePersonSkill**](#removepersonskill) | **DELETE** /people/{personId}/skills/{skillId} | Remove a skill from a person|
|[**removePlaceholderFromTeam**](#removeplaceholderfromteam) | **DELETE** /placeholders/{placeholderId}/teams/{teamId} | Remove a placeholder from a team|
|[**removePlaceholderSkill**](#removeplaceholderskill) | **DELETE** /placeholders/{placeholderId}/skills/{skillId} | Remove a skill from a placeholder|
|[**removeProjectTagFromProject**](#removeprojecttagfromproject) | **DELETE** /project-tags/{projectTagId}/project/{projectId} | Remove a project tag from a project|
|[**removeViewFromUser**](#removeviewfromuser) | **DELETE** /users/{userId}/views/{viewId}/ | Remove allocated view from user|
|[**removeWorkstreamFromProject**](#removeworkstreamfromproject) | **DELETE** /projects/{projectId}/project-workstreams/{workstreamId}/ | Delete project workstream|
|[**updateActualTimeEntry**](#updateactualtimeentry) | **POST** /actuals/time-entry | Update an actual|
|[**updateCheckboxCustomField**](#updatecheckboxcustomfield) | **PATCH** /custom-fields/checkbox/{checkboxFieldId} | Update a checkbox custom field|
|[**updateClient**](#updateclient) | **PATCH** /clients/{clientId} | Update a client|
|[**updateContract**](#updatecontract) | **PATCH** /contracts/{contractId} | Update a contract|
|[**updateDateCustomField**](#updatedatecustomfield) | **PATCH** /custom-fields/date/{dateFieldId} | Update a date custom field|
|[**updatePeopleTag**](#updatepeopletag) | **PATCH** /people-tags/{peopleTagId} | Update a people tag|
|[**updatePerson**](#updateperson) | **PATCH** /people/{personId} | Update a person|
|[**updatePersonCheckboxCustomField**](#updatepersoncheckboxcustomfield) | **PATCH** /people/{personId}/custom-fields/checkbox/ | Add a checkbox custom value to a person|
|[**updatePersonDateCustomField**](#updatepersondatecustomfield) | **PATCH** /people/{personId}/custom-fields/date/ | Add a date custom value to a person|
|[**updatePersonSelectCustomField**](#updatepersonselectcustomfield) | **PATCH** /people/{personId}/custom-fields/select/ | Add custom select options to a person|
|[**updatePersonSkill**](#updatepersonskill) | **PATCH** /people/{personId}/skills/{skillId} | Update a skill for a person|
|[**updatePersonTextCustomField**](#updatepersontextcustomfield) | **PATCH** /people/{personId}/custom-fields/text/ | Add a text custom value to a person|
|[**updateProject**](#updateproject) | **PATCH** /projects/{projectId} | Update a project|
|[**updateProjectBudgetRole**](#updateprojectbudgetrole) | **PATCH** /projects/{projectId}/budget-roles/{roleId} | Update a project budget role|
|[**updateProjectCheckboxCustomField**](#updateprojectcheckboxcustomfield) | **PATCH** /projects/{projectId}/custom-fields/checkbox/ | Add a checkbox custom value to a project|
|[**updateProjectDateCustomField**](#updateprojectdatecustomfield) | **PATCH** /projects/{projectId}/custom-fields/date/ | Add a date custom field value to a project|
|[**updateProjectMilestone**](#updateprojectmilestone) | **PATCH** /projects/{projectId}/milestones/{milestoneId} | Update a milestone for a project|
|[**updateProjectOtherExpense**](#updateprojectotherexpense) | **PATCH** /projects/{projectId}/other-expenses/{otherExpenseId}/ | Update an other expense on a project|
|[**updateProjectPersonRequest**](#updateprojectpersonrequest) | **PATCH** /projects/{projectId}/person-requests/{personRequestId} | Update the status of a person request on a project|
|[**updateProjectPhase**](#updateprojectphase) | **PATCH** /projects/{projectId}/phases/{phaseId} | Update a phase for a project|
|[**updateProjectRoleRate**](#updateprojectrolerate) | **PATCH** /projects/{projectId}/project-rates/{projectRateId}/ | Update a rate for a role on a project|
|[**updateProjectSelectCustomField**](#updateprojectselectcustomfield) | **PATCH** /projects/{projectId}/custom-fields/select/ | Add a select custom field to a project|
|[**updateProjectTag**](#updateprojecttag) | **PATCH** /project-tags/{projectTagId} | Update a project tag|
|[**updateProjectTextCustomField**](#updateprojecttextcustomfield) | **PATCH** /projects/{projectId}/custom-fields/text/ | Add a text custom field value to a project|
|[**updateProjectTimesheetLock**](#updateprojecttimesheetlock) | **PATCH** /projects/{projectId}/timesheet-lock/ | Update a timesheet lock for a project|
|[**updateRole**](#updaterole) | **PATCH** /roles/{roleId} | Update a role|
|[**updateSelectCustomField**](#updateselectcustomfield) | **PATCH** /custom-fields/select/{selectFieldId} | Update a select custom field|
|[**updateSelectCustomFieldOption**](#updateselectcustomfieldoption) | **PATCH** /custom-fields/select/{selectFieldId}/options/{selectOptionId} | Update a select custom field option|
|[**updateSkill**](#updateskill) | **PATCH** /skills/{skillId} | Update a skill|
|[**updateTeam**](#updateteam) | **PATCH** /teams/{teamId}/ | Update a team|
|[**updateTextCustomField**](#updatetextcustomfield) | **PATCH** /custom-fields/text/{textFieldId} | Update a text custom field|
|[**updateWorkstream**](#updateworkstream) | **PATCH** /workstreams/{workstreamId}/ | Update a workstream|

# **addPeopleToSkill**
> AddPeopleToSkill201Response addPeopleToSkill(addPeopleToSkillRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    AddPeopleToSkillRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let skillId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let addPeopleToSkillRequest: AddPeopleToSkillRequest; //

const { status, data } = await apiInstance.addPeopleToSkill(
    skillId,
    acceptVersion,
    addPeopleToSkillRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addPeopleToSkillRequest** | **AddPeopleToSkillRequest**|  | |
| **skillId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**AddPeopleToSkill201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addPersonSkill**
> Competency addPersonSkill(addPersonSkillRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    AddPersonSkillRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let addPersonSkillRequest: AddPersonSkillRequest; //

const { status, data } = await apiInstance.addPersonSkill(
    personId,
    acceptVersion,
    addPersonSkillRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addPersonSkillRequest** | **AddPersonSkillRequest**|  | |
| **personId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Competency**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addPersonToProject**
> addPersonToProject(addPersonToProjectRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    AddPersonToProjectRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let addPersonToProjectRequest: AddPersonToProjectRequest; //

const { status, data } = await apiInstance.addPersonToProject(
    personId,
    acceptVersion,
    addPersonToProjectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addPersonToProjectRequest** | **AddPersonToProjectRequest**|  | |
| **personId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |
|**409** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addPersonToTeam**
> addPersonToTeam(addPersonToTeamRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    AddPersonToTeamRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let addPersonToTeamRequest: AddPersonToTeamRequest; //

const { status, data } = await apiInstance.addPersonToTeam(
    personId,
    acceptVersion,
    addPersonToTeamRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addPersonToTeamRequest** | **AddPersonToTeamRequest**|  | |
| **personId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addPlaceholderSkill**
> Competency addPlaceholderSkill(addPlaceholderSkillRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    AddPlaceholderSkillRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let placeholderId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let addPlaceholderSkillRequest: AddPlaceholderSkillRequest; //

const { status, data } = await apiInstance.addPlaceholderSkill(
    placeholderId,
    acceptVersion,
    addPlaceholderSkillRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addPlaceholderSkillRequest** | **AddPlaceholderSkillRequest**|  | |
| **placeholderId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Competency**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addPlaceholderToTeam**
> addPlaceholderToTeam(addPersonToTeamRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    AddPersonToTeamRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let placeholderId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let addPersonToTeamRequest: AddPersonToTeamRequest; //

const { status, data } = await apiInstance.addPlaceholderToTeam(
    placeholderId,
    acceptVersion,
    addPersonToTeamRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addPersonToTeamRequest** | **AddPersonToTeamRequest**|  | |
| **placeholderId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addProjectTagToProject**
> ProjectTag addProjectTagToProject()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectTagId: number; // (default to undefined)
let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.addProjectTagToProject(
    projectTagId,
    projectId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectTagId** | [**number**] |  | defaults to undefined|
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**ProjectTag**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addWorkstreamToProject**
> ProjectWorkstream addWorkstreamToProject()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let workstreamId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.addWorkstreamToProject(
    projectId,
    workstreamId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] |  | defaults to undefined|
| **workstreamId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**ProjectWorkstream**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **allocateViewToUser**
> allocateViewToUser()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userId: number; //The Id of the user to allocate the view to. (default to undefined)
let viewId: number; //The Id of the view to allocate to the user. (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.allocateViewToUser(
    userId,
    viewId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**number**] | The Id of the user to allocate the view to. | defaults to undefined|
| **viewId** | [**number**] | The Id of the view to allocate to the user. | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |
|**409** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **convertLegacyId**
> number convertLegacyId()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let model: 'accounts' | 'actuals' | 'assignments' | 'clients' | 'contracts' | 'help_documents' | 'invitations' | 'milestones' | 'notes' | 'people' | 'phases' | 'project_member' | 'project_rates' | 'projects' | 'rate_cards' | 'role_charge_our_rate' | 'roles' | 'tags' | 'teams' | 'time_offs' | 'users' | 'user_accounts' | 'holiday_groups' | 'skills' | 'other_expenses' | 'people_notes'; // (default to undefined)
let legacyId: string; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.convertLegacyId(
    model,
    legacyId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **model** | [**&#39;accounts&#39; | &#39;actuals&#39; | &#39;assignments&#39; | &#39;clients&#39; | &#39;contracts&#39; | &#39;help_documents&#39; | &#39;invitations&#39; | &#39;milestones&#39; | &#39;notes&#39; | &#39;people&#39; | &#39;phases&#39; | &#39;project_member&#39; | &#39;project_rates&#39; | &#39;projects&#39; | &#39;rate_cards&#39; | &#39;role_charge_our_rate&#39; | &#39;roles&#39; | &#39;tags&#39; | &#39;teams&#39; | &#39;time_offs&#39; | &#39;users&#39; | &#39;user_accounts&#39; | &#39;holiday_groups&#39; | &#39;skills&#39; | &#39;other_expenses&#39; | &#39;people_notes&#39;**]**Array<&#39;accounts&#39; &#124; &#39;actuals&#39; &#124; &#39;assignments&#39; &#124; &#39;clients&#39; &#124; &#39;contracts&#39; &#124; &#39;help_documents&#39; &#124; &#39;invitations&#39; &#124; &#39;milestones&#39; &#124; &#39;notes&#39; &#124; &#39;people&#39; &#124; &#39;phases&#39; &#124; &#39;project_member&#39; &#124; &#39;project_rates&#39; &#124; &#39;projects&#39; &#124; &#39;rate_cards&#39; &#124; &#39;role_charge_our_rate&#39; &#124; &#39;roles&#39; &#124; &#39;tags&#39; &#124; &#39;teams&#39; &#124; &#39;time_offs&#39; &#124; &#39;users&#39; &#124; &#39;user_accounts&#39; &#124; &#39;holiday_groups&#39; &#124; &#39;skills&#39; &#124; &#39;other_expenses&#39; &#124; &#39;people_notes&#39;>** |  | defaults to undefined|
| **legacyId** | [**string**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**number**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createActual**
> Actual createActual()

Minutes values represent the total time for a day and overwrite any previous actual on the same day (for the same project/person/role/workstream). [Learn more](https://developer.runn.io/docs/actuals-notes).

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ActualInput
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let actualInput: ActualInput; // (optional)

const { status, data } = await apiInstance.createActual(
    acceptVersion,
    actualInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **actualInput** | **ActualInput**|  | |
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Actual**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createActualsBulk**
> Array<Actual> createActualsBulk(createActualsBulkRequest)

Create or update up to 100 \'actuals\' in a single API call. [Learn more](https://developer.runn.io/docs/actuals-notes).

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateActualsBulkRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let createActualsBulkRequest: CreateActualsBulkRequest; //

const { status, data } = await apiInstance.createActualsBulk(
    acceptVersion,
    createActualsBulkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createActualsBulkRequest** | **CreateActualsBulkRequest**|  | |
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Array<Actual>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Invalid actualId format. |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createAssignment**
> Array<Assignment> createAssignment(createAssignmentRequest)

Creates a new assignment and returns a list of assignments. If the specified time period of the assignment overlaps with scheduled leave, the assignment is split into multiple segments. Each segment is returned as a separate assignment in the response.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateAssignmentRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let createAssignmentRequest: CreateAssignmentRequest; //

const { status, data } = await apiInstance.createAssignment(
    acceptVersion,
    createAssignmentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAssignmentRequest** | **CreateAssignmentRequest**|  | |
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Array<Assignment>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Assignment created successfully. Returns an array of assignment references, possibly multiple if split due to overlapping leave. |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createCheckboxCustomField**
> CustomFieldCheckbox createCheckboxCustomField(createCheckboxCustomFieldRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateCheckboxCustomFieldRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let createCheckboxCustomFieldRequest: CreateCheckboxCustomFieldRequest; //

const { status, data } = await apiInstance.createCheckboxCustomField(
    acceptVersion,
    createCheckboxCustomFieldRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCheckboxCustomFieldRequest** | **CreateCheckboxCustomFieldRequest**|  | |
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**CustomFieldCheckbox**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createClient**
> Client createClient()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ClientInput
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let clientInput: ClientInput; // (optional)

const { status, data } = await apiInstance.createClient(
    acceptVersion,
    clientInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientInput** | **ClientInput**|  | |
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Client**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createClientsBulk**
> Array<Client> createClientsBulk(createClientsBulkRequest)

Create up to 100 \'clients\' in a single API call. [Learn more](https://developer.runn.io/docs/clients-notes).

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateClientsBulkRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let createClientsBulkRequest: CreateClientsBulkRequest; //

const { status, data } = await apiInstance.createClientsBulk(
    acceptVersion,
    createClientsBulkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createClientsBulkRequest** | **CreateClientsBulkRequest**|  | |
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Array<Client>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createDateCustomField**
> CustomFieldDate createDateCustomField(createDateCustomFieldRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateDateCustomFieldRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let createDateCustomFieldRequest: CreateDateCustomFieldRequest; //

const { status, data } = await apiInstance.createDateCustomField(
    acceptVersion,
    createDateCustomFieldRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createDateCustomFieldRequest** | **CreateDateCustomFieldRequest**|  | |
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**CustomFieldDate**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createHolidayTimeOff**
> TimeOff createHolidayTimeOff()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    TimeOffHolidayInput
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let timeOffHolidayInput: TimeOffHolidayInput; // (optional)

const { status, data } = await apiInstance.createHolidayTimeOff(
    acceptVersion,
    timeOffHolidayInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **timeOffHolidayInput** | **TimeOffHolidayInput**|  | |
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**TimeOff**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createInvitation**
> Invitation createInvitation()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateInvitationRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let createInvitationRequest: CreateInvitationRequest; // (optional)

const { status, data } = await apiInstance.createInvitation(
    acceptVersion,
    createInvitationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createInvitationRequest** | **CreateInvitationRequest**|  | |
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Invitation**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createLeaveTimeOff**
> TimeOff createLeaveTimeOff()

 #### Create or Update  This endpoint may return an existing time off if the new time off is a subset of an existing one.  #### Automatic Merging  If one or more existing time offs overlap with the specified start/end date, they will be automatically merged.  #### Partial Time Offs  If the `minutesPerDay` field is provided, automatic merging will only occur if any overlapping time off has the same `minutesPerDay` value. If the `minutesPerDay` value differs, the request will fail.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    TimeOffLeaveInput
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let timeOffLeaveInput: TimeOffLeaveInput; // (optional)

const { status, data } = await apiInstance.createLeaveTimeOff(
    acceptVersion,
    timeOffLeaveInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **timeOffLeaveInput** | **TimeOffLeaveInput**|  | |
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**TimeOff**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createLeaveTimeOffsBulk**
> Array<TimeOff> createLeaveTimeOffsBulk(createLeaveTimeOffsBulkRequest)

 #### Create or Update  This endpoint may return existing time offs if the new time off is a subset of an existing one.  #### Automatic Merging  If one or more existing time offs overlap with the specified start/end date, they will be automatically merged.  #### Partial Time Offs  If the `minutesPerDay` field is provided, automatic merging will only occur if any overlapping time off has the same `minutesPerDay` value. If the `minutesPerDay` value differs, the request will fail.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateLeaveTimeOffsBulkRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let createLeaveTimeOffsBulkRequest: CreateLeaveTimeOffsBulkRequest; //

const { status, data } = await apiInstance.createLeaveTimeOffsBulk(
    acceptVersion,
    createLeaveTimeOffsBulkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createLeaveTimeOffsBulkRequest** | **CreateLeaveTimeOffsBulkRequest**|  | |
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Array<TimeOff>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createNoteForProject**
> ProjectNote createNoteForProject(createNoteForProjectRequest)

Defaults creator to \'API\' user

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateNoteForProjectRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let createNoteForProjectRequest: CreateNoteForProjectRequest; //

const { status, data } = await apiInstance.createNoteForProject(
    projectId,
    acceptVersion,
    createNoteForProjectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createNoteForProjectRequest** | **CreateNoteForProjectRequest**|  | |
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**ProjectNote**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPeopleTag**
> ListPeopleTags200ResponseValuesInner createPeopleTag(updateSelectCustomFieldOptionRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateSelectCustomFieldOptionRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updateSelectCustomFieldOptionRequest: UpdateSelectCustomFieldOptionRequest; //

const { status, data } = await apiInstance.createPeopleTag(
    acceptVersion,
    updateSelectCustomFieldOptionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSelectCustomFieldOptionRequest** | **UpdateSelectCustomFieldOptionRequest**|  | |
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**ListPeopleTags200ResponseValuesInner**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPerson**
> Person createPerson(createPersonRequest)

Also creates a new contract for the person

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreatePersonRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let createPersonRequest: CreatePersonRequest; //

const { status, data } = await apiInstance.createPerson(
    acceptVersion,
    createPersonRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPersonRequest** | **CreatePersonRequest**|  | |
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Person**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPersonContract**
> Contract createPersonContract()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ContractInput
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let contractInput: ContractInput; // (optional)

const { status, data } = await apiInstance.createPersonContract(
    personId,
    acceptVersion,
    contractInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contractInput** | **ContractInput**|  | |
| **personId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Contract**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPlaceholder**
> PlaceholderInput createPlaceholder(createPlaceholderRequest)

Also creates a contract that defaults to the role cost. Please note that placeholders with no project or assignments will be deleted within 24 hours.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreatePlaceholderRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let createPlaceholderRequest: CreatePlaceholderRequest; //

const { status, data } = await apiInstance.createPlaceholder(
    acceptVersion,
    createPlaceholderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPlaceholderRequest** | **CreatePlaceholderRequest**|  | |
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**PlaceholderInput**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createProject**
> Project createProject()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateProjectRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let createProjectRequest: CreateProjectRequest; // (optional)

const { status, data } = await apiInstance.createProject(
    acceptVersion,
    createProjectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createProjectRequest** | **CreateProjectRequest**|  | |
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Project**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createProjectBudgetRole**
> createProjectBudgetRole()

Create a project budget role for a project. You cannot create a              project budget role using estimated budget if a project rate does              not exist for the role because the project rate is used to set              the estimatedMinutes.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateProjectBudgetRoleRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let createProjectBudgetRoleRequest: CreateProjectBudgetRoleRequest; // (optional)

const { status, data } = await apiInstance.createProjectBudgetRole(
    projectId,
    acceptVersion,
    createProjectBudgetRoleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createProjectBudgetRoleRequest** | **CreateProjectBudgetRoleRequest**|  | |
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |
|**409** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createProjectMilestone**
> Milestone createProjectMilestone(createProjectMilestoneRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateProjectMilestoneRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let createProjectMilestoneRequest: CreateProjectMilestoneRequest; //

const { status, data } = await apiInstance.createProjectMilestone(
    projectId,
    acceptVersion,
    createProjectMilestoneRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createProjectMilestoneRequest** | **CreateProjectMilestoneRequest**|  | |
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Milestone**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createProjectOtherExpense**
> ProjectOtherExpense createProjectOtherExpense(projectOtherExpense)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ProjectOtherExpense
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; //Unique identifier for the project the expense is for. (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let projectOtherExpense: ProjectOtherExpense; //A non-labour expense for a project.

const { status, data } = await apiInstance.createProjectOtherExpense(
    projectId,
    acceptVersion,
    projectOtherExpense
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectOtherExpense** | **ProjectOtherExpense**| A non-labour expense for a project. | |
| **projectId** | [**number**] | Unique identifier for the project the expense is for. | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**ProjectOtherExpense**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | A non-labour expense for a project. |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createProjectPersonRequest**
> PersonRequest createProjectPersonRequest(createProjectPersonRequestRequest)

Person requests are used to request a placeholder role be filled with a person in the account or to request a new person be hired. This endpoint can be used to create a new person request.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateProjectPersonRequestRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let createProjectPersonRequestRequest: CreateProjectPersonRequestRequest; //

const { status, data } = await apiInstance.createProjectPersonRequest(
    projectId,
    acceptVersion,
    createProjectPersonRequestRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createProjectPersonRequestRequest** | **CreateProjectPersonRequestRequest**|  | |
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**PersonRequest**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createProjectPhase**
> ProjectPhase createProjectPhase(createProjectPhaseRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateProjectPhaseRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let createProjectPhaseRequest: CreateProjectPhaseRequest; //

const { status, data } = await apiInstance.createProjectPhase(
    projectId,
    acceptVersion,
    createProjectPhaseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createProjectPhaseRequest** | **CreateProjectPhaseRequest**|  | |
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**ProjectPhase**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Project phases divide your project into smaller sections so you can group similar tasks and assignments together. |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createProjectTag**
> ProjectTag createProjectTag(updateSelectCustomFieldOptionRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateSelectCustomFieldOptionRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updateSelectCustomFieldOptionRequest: UpdateSelectCustomFieldOptionRequest; //

const { status, data } = await apiInstance.createProjectTag(
    acceptVersion,
    updateSelectCustomFieldOptionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSelectCustomFieldOptionRequest** | **UpdateSelectCustomFieldOptionRequest**|  | |
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**ProjectTag**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createRateCard**
> RateCard createRateCard(createRateCardRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateRateCardRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let createRateCardRequest: CreateRateCardRequest; //

const { status, data } = await apiInstance.createRateCard(
    acceptVersion,
    createRateCardRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createRateCardRequest** | **CreateRateCardRequest**|  | |
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**RateCard**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createRole**
> Role createRole(createRoleRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateRoleRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let createRoleRequest: CreateRoleRequest; //

const { status, data } = await apiInstance.createRole(
    acceptVersion,
    createRoleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createRoleRequest** | **CreateRoleRequest**|  | |
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Role**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createSelectCustomField**
> CustomFieldSelect createSelectCustomField(createSelectCustomFieldRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateSelectCustomFieldRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let createSelectCustomFieldRequest: CreateSelectCustomFieldRequest; //

const { status, data } = await apiInstance.createSelectCustomField(
    acceptVersion,
    createSelectCustomFieldRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createSelectCustomFieldRequest** | **CreateSelectCustomFieldRequest**|  | |
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**CustomFieldSelect**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createSelectCustomFieldOption**
> UpdateSelectCustomFieldOption200Response createSelectCustomFieldOption(updateSelectCustomFieldOptionRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateSelectCustomFieldOptionRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let selectFieldId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updateSelectCustomFieldOptionRequest: UpdateSelectCustomFieldOptionRequest; //

const { status, data } = await apiInstance.createSelectCustomFieldOption(
    selectFieldId,
    acceptVersion,
    updateSelectCustomFieldOptionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSelectCustomFieldOptionRequest** | **UpdateSelectCustomFieldOptionRequest**|  | |
| **selectFieldId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**UpdateSelectCustomFieldOption200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createSkill**
> Skill createSkill(updateSelectCustomFieldOptionRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateSelectCustomFieldOptionRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updateSelectCustomFieldOptionRequest: UpdateSelectCustomFieldOptionRequest; //

const { status, data } = await apiInstance.createSkill(
    acceptVersion,
    updateSelectCustomFieldOptionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSelectCustomFieldOptionRequest** | **UpdateSelectCustomFieldOptionRequest**|  | |
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Skill**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTeam**
> Team createTeam(updateSelectCustomFieldOptionRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateSelectCustomFieldOptionRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updateSelectCustomFieldOptionRequest: UpdateSelectCustomFieldOptionRequest; //

const { status, data } = await apiInstance.createTeam(
    acceptVersion,
    updateSelectCustomFieldOptionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSelectCustomFieldOptionRequest** | **UpdateSelectCustomFieldOptionRequest**|  | |
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Team**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTextCustomField**
> CustomFieldText createTextCustomField(createCheckboxCustomFieldRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateCheckboxCustomFieldRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let createCheckboxCustomFieldRequest: CreateCheckboxCustomFieldRequest; //

const { status, data } = await apiInstance.createTextCustomField(
    acceptVersion,
    createCheckboxCustomFieldRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCheckboxCustomFieldRequest** | **CreateCheckboxCustomFieldRequest**|  | |
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**CustomFieldText**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createWorkstream**
> Workstream createWorkstream(updateSelectCustomFieldOptionRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateSelectCustomFieldOptionRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updateSelectCustomFieldOptionRequest: UpdateSelectCustomFieldOptionRequest; //

const { status, data } = await apiInstance.createWorkstream(
    acceptVersion,
    updateSelectCustomFieldOptionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSelectCustomFieldOptionRequest** | **UpdateSelectCustomFieldOptionRequest**|  | |
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Workstream**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteActual**
> deleteActual()

Deletes the actual record identified by the provided unique identifier `actualId`. This operation is irreversible and removes the actual record from the system.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let actualId: number; //Unique identifier of the actual to be deleted. (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.deleteActual(
    actualId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **actualId** | [**number**] | Unique identifier of the actual to be deleted. | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful deletion of the actual record. |  -  |
|**400** | Invalid actualId format. |  -  |
|**401** | Default Response |  -  |
|**404** | The actual record with the specified ID was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteAssignment**
> Assignment deleteAssignment()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let assignmentId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.deleteAssignment(
    assignmentId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assignmentId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Assignment**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteCheckboxCustomField**
> deleteCheckboxCustomField()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let checkboxFieldId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.deleteCheckboxCustomField(
    checkboxFieldId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkboxFieldId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteDateCustomField**
> deleteDateCustomField()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let dateFieldId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.deleteDateCustomField(
    dateFieldId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateFieldId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteHolidayTimeOff**
> deleteHolidayTimeOff()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let timeOffId: number; //The unique identifier for the time-off. (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.deleteHolidayTimeOff(
    timeOffId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **timeOffId** | [**number**] | The unique identifier for the time-off. | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteInvitation**
> deleteInvitation()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let invitationId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.deleteInvitation(
    invitationId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **invitationId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteLeaveTimeOff**
> deleteLeaveTimeOff()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let timeOffId: number; //The unique identifier for the time-off. (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.deleteLeaveTimeOff(
    timeOffId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **timeOffId** | [**number**] | The unique identifier for the time-off. | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteLeaveTimeOffsBulk**
> deleteLeaveTimeOffsBulk(deleteLeaveTimeOffsBulkRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteLeaveTimeOffsBulkRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let deleteLeaveTimeOffsBulkRequest: DeleteLeaveTimeOffsBulkRequest; //

const { status, data } = await apiInstance.deleteLeaveTimeOffsBulk(
    acceptVersion,
    deleteLeaveTimeOffsBulkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteLeaveTimeOffsBulkRequest** | **DeleteLeaveTimeOffsBulkRequest**|  | |
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deletePeopleTag**
> deletePeopleTag()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let peopleTagId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.deletePeopleTag(
    peopleTagId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **peopleTagId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deletePerson**
> deletePerson()

Delete a person by their ID; fails when person has existing assignments or actuals to preserve           historical reports. Override this behaviour by using the force query flag.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let force: boolean; // (default to false)
let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.deletePerson(
    force,
    personId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **force** | [**boolean**] |  | defaults to false|
| **personId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deletePersonContract**
> deletePersonContract()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let contractId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.deletePersonContract(
    personId,
    contractId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **personId** | [**number**] |  | defaults to undefined|
| **contractId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteProject**
> deleteProject()

Delete a project by id. You cannot delete a project that has any actuals or assignments.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.deleteProject(
    projectId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful deletion of the project. |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |
|**409** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteProjectBudgetRole**
> deleteProjectBudgetRole()

Delete a project budget role for a project. You cannot delete a              project budget role if it is implicitly created from a project membership.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let roleId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.deleteProjectBudgetRole(
    projectId,
    roleId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] |  | defaults to undefined|
| **roleId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |
|**409** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteProjectMilestone**
> deleteProjectMilestone()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let milestoneId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.deleteProjectMilestone(
    projectId,
    milestoneId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] |  | defaults to undefined|
| **milestoneId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteProjectPhase**
> ProjectPhase deleteProjectPhase()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let phaseId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.deleteProjectPhase(
    projectId,
    phaseId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] |  | defaults to undefined|
| **phaseId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**ProjectPhase**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Project phases divide your project into smaller sections so you can group similar tasks and assignments together. |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteRateCard**
> deleteRateCard()

Rate cards that are internal, standard, or have projects cannot be deleted

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let rateCardId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.deleteRateCard(
    rateCardId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rateCardId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteRosteredTimeOff**
> deleteRosteredTimeOff()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let timeOffId: number; //The unique identifier for the time-off. (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.deleteRosteredTimeOff(
    timeOffId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **timeOffId** | [**number**] | The unique identifier for the time-off. | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteSelectCustomField**
> deleteSelectCustomField()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let selectFieldId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.deleteSelectCustomField(
    selectFieldId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **selectFieldId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteSelectCustomFieldOption**
> deleteSelectCustomFieldOption()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let selectFieldId: number; // (default to undefined)
let selectOptionId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.deleteSelectCustomFieldOption(
    selectFieldId,
    selectOptionId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **selectFieldId** | [**number**] |  | defaults to undefined|
| **selectOptionId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteSkill**
> deleteSkill()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let skillId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.deleteSkill(
    skillId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **skillId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteTeam**
> deleteTeam()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let teamId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.deleteTeam(
    teamId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **teamId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteTextCustomField**
> deleteTextCustomField()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let textFieldId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.deleteTextCustomField(
    textFieldId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **textFieldId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteUser**
> deleteUser()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.deleteUser(
    userId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteWorkstream**
> deleteWorkstream()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let workstreamId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.deleteWorkstream(
    workstreamId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workstreamId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getClient**
> Client getClient()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let clientId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.getClient(
    clientId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Client**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCurrentUser**
> GetCurrentUser200Response getCurrentUser()

Get information about the currently authenticated user.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.getCurrentUser(
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**GetCurrentUser200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getHolidayGroup**
> HolidayGroup getHolidayGroup()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let holidayGroupId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.getHolidayGroup(
    holidayGroupId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **holidayGroupId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**HolidayGroup**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getLeaveTimeOff**
> TimeOff getLeaveTimeOff()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let timeOffId: number; //The unique identifier for the time-off. (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.getLeaveTimeOff(
    timeOffId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **timeOffId** | [**number**] | The unique identifier for the time-off. | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**TimeOff**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPeopleTag**
> ListPeopleTags200ResponseValuesInner getPeopleTag()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let peopleTagId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.getPeopleTag(
    peopleTagId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **peopleTagId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**ListPeopleTags200ResponseValuesInner**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPerson**
> Person getPerson()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.getPerson(
    personId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **personId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Person**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPersonCurrentContract**
> Contract getPersonCurrentContract()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.getPersonCurrentContract(
    personId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **personId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Contract**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPersonCurrentTeam**
> GetPersonCurrentTeam200Response getPersonCurrentTeam()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 20)

const { status, data } = await apiInstance.getPersonCurrentTeam(
    personId,
    acceptVersion,
    cursor,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **personId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 20|


### Return type

**GetPersonCurrentTeam200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPersonHoursReport**
> GetPersonHoursReport200Response getPersonHoursReport()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let startDate: string; //Only include entries that start on or after this date. Format: YYYY-MM-DD (optional) (default to undefined)
let endDate: string; //Only include entries that end on or before this date. Format: YYYY-MM-DD (optional) (default to undefined)

const { status, data } = await apiInstance.getPersonHoursReport(
    personId,
    acceptVersion,
    cursor,
    limit,
    startDate,
    endDate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **personId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **startDate** | [**string**] | Only include entries that start on or after this date. Format: YYYY-MM-DD | (optional) defaults to undefined|
| **endDate** | [**string**] | Only include entries that end on or before this date. Format: YYYY-MM-DD | (optional) defaults to undefined|


### Return type

**GetPersonHoursReport200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProject**
> Project getProject()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.getProject(
    projectId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Project**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProjectBudgetRole**
> ProjectBudgetRole getProjectBudgetRole()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let roleId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.getProjectBudgetRole(
    projectId,
    roleId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] |  | defaults to undefined|
| **roleId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**ProjectBudgetRole**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Project budget role |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProjectHoursReport**
> GetProjectHoursReport200Response getProjectHoursReport()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let startDate: string; //Only include entries that start on or after this date. Format: YYYY-MM-DD (optional) (default to undefined)
let endDate: string; //Only include entries that end on or before this date. Format: YYYY-MM-DD (optional) (default to undefined)

const { status, data } = await apiInstance.getProjectHoursReport(
    projectId,
    acceptVersion,
    cursor,
    limit,
    startDate,
    endDate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **startDate** | [**string**] | Only include entries that start on or after this date. Format: YYYY-MM-DD | (optional) defaults to undefined|
| **endDate** | [**string**] | Only include entries that end on or before this date. Format: YYYY-MM-DD | (optional) defaults to undefined|


### Return type

**GetProjectHoursReport200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProjectPersonRequest**
> PersonRequest getProjectPersonRequest()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let personRequestId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.getProjectPersonRequest(
    projectId,
    personRequestId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] |  | defaults to undefined|
| **personRequestId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**PersonRequest**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProjectPhase**
> ProjectPhase getProjectPhase()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let phaseId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.getProjectPhase(
    projectId,
    phaseId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] |  | defaults to undefined|
| **phaseId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**ProjectPhase**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Project phases divide your project into smaller sections so you can group similar tasks and assignments together. |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProjectTag**
> ProjectTag getProjectTag()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectTagId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.getProjectTag(
    projectTagId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectTagId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**ProjectTag**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProjectTimesheetLock**
> GetProjectTimesheetLock200Response getProjectTimesheetLock()

This feature currently in beta and only available to selected customers.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.getProjectTimesheetLock(
    projectId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**GetProjectTimesheetLock200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProjectTotalsReport**
> ProjectAggregate getProjectTotalsReport()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; //The unique identifier for the project. (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.getProjectTotalsReport(
    projectId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] | The unique identifier for the project. | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**ProjectAggregate**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProjectWorkstream**
> ProjectWorkstream getProjectWorkstream()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let workstreamId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.getProjectWorkstream(
    projectId,
    workstreamId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] |  | defaults to undefined|
| **workstreamId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**ProjectWorkstream**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRateCard**
> RateCard getRateCard()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let rateCardId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.getRateCard(
    rateCardId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rateCardId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**RateCard**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRole**
> Role getRole()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let roleId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.getRole(
    roleId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roleId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Role**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSkill**
> Skill getSkill()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let skillId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.getSkill(
    skillId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **skillId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Skill**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTeam**
> Team getTeam()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let teamId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.getTeam(
    teamId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **teamId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Team**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUser**
> User getUser()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.getUser(
    userId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**User**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWorkstream**
> Workstream getWorkstream()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let workstreamId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.getWorkstream(
    workstreamId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workstreamId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Workstream**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listActuals**
> ListActuals200Response listActuals()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 100)
let sortBy: 'createdAt' | 'updatedAt' | 'id'; //Field to sort by: createdAt or updatedAt or id (optional) (default to 'id')
let order: 'asc' | 'desc'; //Sort order: asc or desc (optional) (default to 'asc')
let minDate: string; //Start date to filter by. Format: YYYY-MM-DD (optional) (default to undefined)
let maxDate: string; //End date (inclusive). Format: YYYY-MM-DD (optional) (default to undefined)
let projectId: number; // (optional) (default to undefined)
let roleId: number; // (optional) (default to undefined)
let personId: number; // (optional) (default to undefined)
let workstreamId: number; // (optional) (default to undefined)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listActuals(
    acceptVersion,
    cursor,
    limit,
    sortBy,
    order,
    minDate,
    maxDate,
    projectId,
    roleId,
    personId,
    workstreamId,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 100|
| **sortBy** | [**&#39;createdAt&#39; | &#39;updatedAt&#39; | &#39;id&#39;**]**Array<&#39;createdAt&#39; &#124; &#39;updatedAt&#39; &#124; &#39;id&#39;>** | Field to sort by: createdAt or updatedAt or id | (optional) defaults to 'id'|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sort order: asc or desc | (optional) defaults to 'asc'|
| **minDate** | [**string**] | Start date to filter by. Format: YYYY-MM-DD | (optional) defaults to undefined|
| **maxDate** | [**string**] | End date (inclusive). Format: YYYY-MM-DD | (optional) defaults to undefined|
| **projectId** | [**number**] |  | (optional) defaults to undefined|
| **roleId** | [**number**] |  | (optional) defaults to undefined|
| **personId** | [**number**] |  | (optional) defaults to undefined|
| **workstreamId** | [**number**] |  | (optional) defaults to undefined|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListActuals200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listAssignments**
> ListAssignments200Response listAssignments()

Get a list of assignments, paginated

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 100)
let sortBy: 'createdAt' | 'updatedAt' | 'id'; //Field to sort by: createdAt or updatedAt or id (optional) (default to 'id')
let order: 'asc' | 'desc'; //Sort order: asc or desc (optional) (default to 'asc')
let personId: number; // (optional) (default to undefined)
let roleId: number; // (optional) (default to undefined)
let projectId: number; // (optional) (default to undefined)
let startDate: string; //Format: YYYY-MM-DD (optional) (default to undefined)
let endDate: string; //Format: YYYY-MM-DD (optional) (default to undefined)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listAssignments(
    acceptVersion,
    cursor,
    limit,
    sortBy,
    order,
    personId,
    roleId,
    projectId,
    startDate,
    endDate,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 100|
| **sortBy** | [**&#39;createdAt&#39; | &#39;updatedAt&#39; | &#39;id&#39;**]**Array<&#39;createdAt&#39; &#124; &#39;updatedAt&#39; &#124; &#39;id&#39;>** | Field to sort by: createdAt or updatedAt or id | (optional) defaults to 'id'|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sort order: asc or desc | (optional) defaults to 'asc'|
| **personId** | [**number**] |  | (optional) defaults to undefined|
| **roleId** | [**number**] |  | (optional) defaults to undefined|
| **projectId** | [**number**] |  | (optional) defaults to undefined|
| **startDate** | [**string**] | Format: YYYY-MM-DD | (optional) defaults to undefined|
| **endDate** | [**string**] | Format: YYYY-MM-DD | (optional) defaults to undefined|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListAssignments200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listBudgetRoles**
> ListBudgetRoles200Response listBudgetRoles()

List all budget roles across all projects

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 100)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listBudgetRoles(
    acceptVersion,
    cursor,
    limit,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 100|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListBudgetRoles200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listCheckboxCustomFields**
> ListCheckboxCustomFields200Response listCheckboxCustomFields()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let model: 'PERSON' | 'PROJECT'; //The field type of the custom field (optional) (default to undefined)

const { status, data } = await apiInstance.listCheckboxCustomFields(
    acceptVersion,
    cursor,
    limit,
    model
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **model** | [**&#39;PERSON&#39; | &#39;PROJECT&#39;**]**Array<&#39;PERSON&#39; &#124; &#39;PROJECT&#39;>** | The field type of the custom field | (optional) defaults to undefined|


### Return type

**ListCheckboxCustomFields200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listClientProjects**
> ListClientProjects200Response listClientProjects()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let includeArchived: boolean; // (default to false)
let clientId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listClientProjects(
    includeArchived,
    clientId,
    acceptVersion,
    cursor,
    limit,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **includeArchived** | [**boolean**] |  | defaults to false|
| **clientId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListClientProjects200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listClients**
> ListClients200Response listClients()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let sortBy: 'id' | 'createdAt' | 'updatedAt'; // (default to 'id')
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let name: string; //If provided, will only return clients with a name that is a substring of this value (case-insensitive). (optional) (default to undefined)
let order: SortOrder; // (optional) (default to undefined)
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listClients(
    sortBy,
    acceptVersion,
    name,
    order,
    cursor,
    limit,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sortBy** | [**&#39;id&#39; | &#39;createdAt&#39; | &#39;updatedAt&#39;**]**Array<&#39;id&#39; &#124; &#39;createdAt&#39; &#124; &#39;updatedAt&#39;>** |  | defaults to 'id'|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **name** | [**string**] | If provided, will only return clients with a name that is a substring of this value (case-insensitive). | (optional) defaults to undefined|
| **order** | **SortOrder** |  | (optional) defaults to undefined|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListClients200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listContracts**
> ListContracts200Response listContracts()

See GET /people/{personId}/contracts to view all contracts for a specific person. See POST /people/{personId}/contracts to create a new contract for a person

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let sortBy: 'id' | 'createdAt' | 'updatedAt'; // (default to 'id')
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)
let order: SortOrder; // (optional) (default to undefined)

const { status, data } = await apiInstance.listContracts(
    sortBy,
    acceptVersion,
    cursor,
    limit,
    modifiedAfter,
    order
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sortBy** | [**&#39;id&#39; | &#39;createdAt&#39; | &#39;updatedAt&#39;**]**Array<&#39;id&#39; &#124; &#39;createdAt&#39; &#124; &#39;updatedAt&#39;>** |  | defaults to 'id'|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|
| **order** | **SortOrder** |  | (optional) defaults to undefined|


### Return type

**ListContracts200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listDateCustomFields**
> ListDateCustomFields200Response listDateCustomFields()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let model: 'PERSON' | 'PROJECT'; //The field type of the custom field (optional) (default to undefined)

const { status, data } = await apiInstance.listDateCustomFields(
    acceptVersion,
    cursor,
    limit,
    model
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **model** | [**&#39;PERSON&#39; | &#39;PROJECT&#39;**]**Array<&#39;PERSON&#39; &#124; &#39;PROJECT&#39;>** | The field type of the custom field | (optional) defaults to undefined|


### Return type

**ListDateCustomFields200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listEvents**
> ListEvents200Response listEvents()

Get a list of events that have occurred. Expand the RESPONSES (200) panel below to see supported events from live accounts. Test accounts are not supported. More events will be added in the future.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let eventType: Array<'project_deleted' | 'person_deleted' | 'contract_deleted' | 'actual_deleted' | 'time_off_deleted' | 'assignment_deleted'>; //Filter by event type, e.g. project_deleted. If not provided, all event types are returned. (optional) (default to undefined)
let occurredAfter: string; //Only return events that occurred after this time. ISO 8601 format. (optional) (default to undefined)
let orderBy: 'asc' | 'desc'; //Order the events by when they occurred. (optional) (default to 'desc')

const { status, data } = await apiInstance.listEvents(
    acceptVersion,
    cursor,
    limit,
    eventType,
    occurredAfter,
    orderBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **eventType** | **Array<&#39;project_deleted&#39; &#124; &#39;person_deleted&#39; &#124; &#39;contract_deleted&#39; &#124; &#39;actual_deleted&#39; &#124; &#39;time_off_deleted&#39; &#124; &#39;assignment_deleted&#39;>** | Filter by event type, e.g. project_deleted. If not provided, all event types are returned. | (optional) defaults to undefined|
| **occurredAfter** | [**string**] | Only return events that occurred after this time. ISO 8601 format. | (optional) defaults to undefined|
| **orderBy** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Order the events by when they occurred. | (optional) defaults to 'desc'|


### Return type

**ListEvents200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**422** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listHolidayGroupHolidays**
> ListHolidayGroupHolidays200Response listHolidayGroupHolidays()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let holidayGroupId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)

const { status, data } = await apiInstance.listHolidayGroupHolidays(
    holidayGroupId,
    acceptVersion,
    cursor,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **holidayGroupId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|


### Return type

**ListHolidayGroupHolidays200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listHolidayGroups**
> ListHolidayGroups200Response listHolidayGroups()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let sortBy: 'createdAt' | 'updatedAt' | 'id'; //Field to sort by: createdAt or updatedAt or id (optional) (default to 'id')
let order: 'asc' | 'desc'; //Sort order: asc or desc (optional) (default to 'asc')

const { status, data } = await apiInstance.listHolidayGroups(
    acceptVersion,
    cursor,
    limit,
    sortBy,
    order
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **sortBy** | [**&#39;createdAt&#39; | &#39;updatedAt&#39; | &#39;id&#39;**]**Array<&#39;createdAt&#39; &#124; &#39;updatedAt&#39; &#124; &#39;id&#39;>** | Field to sort by: createdAt or updatedAt or id | (optional) defaults to 'id'|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sort order: asc or desc | (optional) defaults to 'asc'|


### Return type

**ListHolidayGroups200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listHolidayTimeOffs**
> ListPersonHolidays200Response listHolidayTimeOffs()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let sortBy: 'id' | 'createdAt' | 'updatedAt'; // (default to 'id')
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let order: SortOrder; // (optional) (default to undefined)
let personId: number; // (optional) (default to undefined)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listHolidayTimeOffs(
    sortBy,
    acceptVersion,
    cursor,
    limit,
    order,
    personId,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sortBy** | [**&#39;id&#39; | &#39;createdAt&#39; | &#39;updatedAt&#39;**]**Array<&#39;id&#39; &#124; &#39;createdAt&#39; &#124; &#39;updatedAt&#39;>** |  | defaults to 'id'|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **order** | **SortOrder** |  | (optional) defaults to undefined|
| **personId** | [**number**] |  | (optional) defaults to undefined|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListPersonHolidays200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listInvitations**
> ListInvitations200Response listInvitations()

Get a list of invitations. Does not contain the invitation token for security reasons

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let sortBy: 'createdAt' | 'sentAt' | 'id'; //Field to sort by: createdAt or sentAt or id (optional) (default to 'id')
let order: 'asc' | 'desc'; //Sort order: asc or desc (optional) (default to 'asc')

const { status, data } = await apiInstance.listInvitations(
    acceptVersion,
    cursor,
    limit,
    sortBy,
    order
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **sortBy** | [**&#39;createdAt&#39; | &#39;sentAt&#39; | &#39;id&#39;**]**Array<&#39;createdAt&#39; &#124; &#39;sentAt&#39; &#124; &#39;id&#39;>** | Field to sort by: createdAt or sentAt or id | (optional) defaults to 'id'|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sort order: asc or desc | (optional) defaults to 'asc'|


### Return type

**ListInvitations200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listLeaveTimeOffs**
> ListPersonLeave200Response listLeaveTimeOffs()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let sortBy: 'id' | 'createdAt' | 'updatedAt'; // (default to 'id')
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let order: SortOrder; // (optional) (default to undefined)
let personId: number; // (optional) (default to undefined)
let startDate: string; //Format: YYYY-MM-DD (optional) (default to undefined)
let endDate: string; //Format: YYYY-MM-DD (optional) (default to undefined)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listLeaveTimeOffs(
    sortBy,
    acceptVersion,
    cursor,
    limit,
    order,
    personId,
    startDate,
    endDate,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sortBy** | [**&#39;id&#39; | &#39;createdAt&#39; | &#39;updatedAt&#39;**]**Array<&#39;id&#39; &#124; &#39;createdAt&#39; &#124; &#39;updatedAt&#39;>** |  | defaults to 'id'|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **order** | **SortOrder** |  | (optional) defaults to undefined|
| **personId** | [**number**] |  | (optional) defaults to undefined|
| **startDate** | [**string**] | Format: YYYY-MM-DD | (optional) defaults to undefined|
| **endDate** | [**string**] | Format: YYYY-MM-DD | (optional) defaults to undefined|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListPersonLeave200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listMilestones**
> ListMilestones200Response listMilestones()

List all milestones across all projects

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 100)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listMilestones(
    acceptVersion,
    cursor,
    limit,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 100|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListMilestones200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listNotesForProject**
> ListProjectNotes200Response listNotesForProject()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)

const { status, data } = await apiInstance.listNotesForProject(
    projectId,
    acceptVersion,
    cursor,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|


### Return type

**ListProjectNotes200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listOtherExpenses**
> ListOtherExpenses200Response listOtherExpenses()

List all other expenses across all projects

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 100)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listOtherExpenses(
    acceptVersion,
    cursor,
    limit,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 100|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListOtherExpenses200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPeople**
> ListPeople200Response listPeople()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let sortBy: 'createdAt' | 'updatedAt' | 'id'; //Field to sort by: createdAt or updatedAt or id (optional) (default to 'id')
let order: 'asc' | 'desc'; //Sort order: asc or desc (optional) (default to 'asc')
let includePlaceholders: boolean; // (optional) (default to false)
let email: string; //If provided, will only return people with an email that are a substring of this value (case-insensitive). (optional) (default to undefined)
let firstName: string; //If provided, will only return people with a first name that is a substring of this value (case-insensitive). (optional) (default to undefined)
let lastName: string; //If provided, will only return people with a last name that is a substring of this value (case-insensitive). (optional) (default to undefined)
let modifiedAfter: ModifiedAfter; //If provided, will only return objects modified after this timestamp. Format: YYYY-MM-DD or YYYY-MM-DDTHH:MM:SSZ. Note: A person is considered \"modified\" if any of its core properties change. Actions that count as modifying a person include changing first name, last name, email, references, tags and archiving. A person is not considered modified just because another object it is associated with is changed (e.g. a contract, project or an assignment). (optional) (default to undefined)
let externalId: string; //External ID value (optional) (default to undefined)

const { status, data } = await apiInstance.listPeople(
    acceptVersion,
    cursor,
    limit,
    sortBy,
    order,
    includePlaceholders,
    email,
    firstName,
    lastName,
    modifiedAfter,
    externalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **sortBy** | [**&#39;createdAt&#39; | &#39;updatedAt&#39; | &#39;id&#39;**]**Array<&#39;createdAt&#39; &#124; &#39;updatedAt&#39; &#124; &#39;id&#39;>** | Field to sort by: createdAt or updatedAt or id | (optional) defaults to 'id'|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sort order: asc or desc | (optional) defaults to 'asc'|
| **includePlaceholders** | [**boolean**] |  | (optional) defaults to false|
| **email** | [**string**] | If provided, will only return people with an email that are a substring of this value (case-insensitive). | (optional) defaults to undefined|
| **firstName** | [**string**] | If provided, will only return people with a first name that is a substring of this value (case-insensitive). | (optional) defaults to undefined|
| **lastName** | [**string**] | If provided, will only return people with a last name that is a substring of this value (case-insensitive). | (optional) defaults to undefined|
| **modifiedAfter** | **ModifiedAfter** | If provided, will only return objects modified after this timestamp. Format: YYYY-MM-DD or YYYY-MM-DDTHH:MM:SSZ. Note: A person is considered \&quot;modified\&quot; if any of its core properties change. Actions that count as modifying a person include changing first name, last name, email, references, tags and archiving. A person is not considered modified just because another object it is associated with is changed (e.g. a contract, project or an assignment). | (optional) defaults to undefined|
| **externalId** | [**string**] | External ID value | (optional) defaults to undefined|


### Return type

**ListPeople200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPeopleCurrentContracts**
> ListContracts200Response listPeopleCurrentContracts()

List current contracts across all people

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 100)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listPeopleCurrentContracts(
    acceptVersion,
    cursor,
    limit,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 100|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListContracts200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPeopleCustomFields**
> ListPeopleCustomFields200Response listPeopleCustomFields()

List all custom fields across all people

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 100)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listPeopleCustomFields(
    acceptVersion,
    cursor,
    limit,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 100|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListPeopleCustomFields200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPeopleNotes**
> ListPeopleNotes200Response listPeopleNotes()

List all person notes across all people

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 100)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listPeopleNotes(
    acceptVersion,
    cursor,
    limit,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 100|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListPeopleNotes200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPeopleSkills**
> ListPeopleSkills200Response listPeopleSkills()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let includePlaceholders: boolean; // (optional) (default to false)
let modifiedAfter: ModifiedAfter; //If provided, will only return objects modified after this timestamp. Format: YYYY-MM-DD or YYYY-MM-DDTHH:MM:SSZ. (optional) (default to undefined)

const { status, data } = await apiInstance.listPeopleSkills(
    acceptVersion,
    cursor,
    limit,
    includePlaceholders,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **includePlaceholders** | [**boolean**] |  | (optional) defaults to false|
| **modifiedAfter** | **ModifiedAfter** | If provided, will only return objects modified after this timestamp. Format: YYYY-MM-DD or YYYY-MM-DDTHH:MM:SSZ. | (optional) defaults to undefined|


### Return type

**ListPeopleSkills200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPeopleTags**
> ListPeopleTags200Response listPeopleTags()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let sortBy: 'createdAt' | 'updatedAt' | 'id'; //Field to sort by: createdAt or updatedAt or id (optional) (default to 'id')
let order: 'asc' | 'desc'; //Sort order: asc or desc (optional) (default to 'asc')
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listPeopleTags(
    acceptVersion,
    cursor,
    limit,
    sortBy,
    order,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **sortBy** | [**&#39;createdAt&#39; | &#39;updatedAt&#39; | &#39;id&#39;**]**Array<&#39;createdAt&#39; &#124; &#39;updatedAt&#39; &#124; &#39;id&#39;>** | Field to sort by: createdAt or updatedAt or id | (optional) defaults to 'id'|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sort order: asc or desc | (optional) defaults to 'asc'|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListPeopleTags200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPersonActuals**
> ListActuals200Response listPersonActuals()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let projectId: number; // (optional) (default to undefined)
let roleId: number; // (optional) (default to undefined)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listPersonActuals(
    personId,
    acceptVersion,
    cursor,
    limit,
    projectId,
    roleId,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **personId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **projectId** | [**number**] |  | (optional) defaults to undefined|
| **roleId** | [**number**] |  | (optional) defaults to undefined|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListActuals200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPersonAssignments**
> ListAssignments200Response listPersonAssignments()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let projectId: number; // (optional) (default to undefined)
let roleId: number; // (optional) (default to undefined)
let startDate: string; //Include assignments that start or overlap with this date. Format: YYYY-MM-DD (optional) (default to undefined)
let endDate: string; //Include assignments that end on or overlap with this date. Format: YYYY-MM-DD (optional) (default to undefined)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listPersonAssignments(
    personId,
    acceptVersion,
    cursor,
    limit,
    projectId,
    roleId,
    startDate,
    endDate,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **personId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **projectId** | [**number**] |  | (optional) defaults to undefined|
| **roleId** | [**number**] |  | (optional) defaults to undefined|
| **startDate** | [**string**] | Include assignments that start or overlap with this date. Format: YYYY-MM-DD | (optional) defaults to undefined|
| **endDate** | [**string**] | Include assignments that end on or overlap with this date. Format: YYYY-MM-DD | (optional) defaults to undefined|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListAssignments200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPersonContracts**
> ListContracts200Response listPersonContracts()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 20)

const { status, data } = await apiInstance.listPersonContracts(
    personId,
    acceptVersion,
    cursor,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **personId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 20|


### Return type

**ListContracts200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPersonHolidays**
> ListPersonHolidays200Response listPersonHolidays()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)

const { status, data } = await apiInstance.listPersonHolidays(
    personId,
    acceptVersion,
    cursor,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **personId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|


### Return type

**ListPersonHolidays200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPersonLeave**
> ListPersonLeave200Response listPersonLeave()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)

const { status, data } = await apiInstance.listPersonLeave(
    personId,
    acceptVersion,
    cursor,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **personId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|


### Return type

**ListPersonLeave200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPersonProjects**
> ListClientProjects200Response listPersonProjects()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)

const { status, data } = await apiInstance.listPersonProjects(
    personId,
    acceptVersion,
    cursor,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **personId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|


### Return type

**ListClientProjects200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPersonRequests**
> ListPersonRequests200Response listPersonRequests()

List all person requests across all projects

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 100)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listPersonRequests(
    acceptVersion,
    cursor,
    limit,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 100|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListPersonRequests200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPersonRosteredTimeOffs**
> ListPersonLeave200Response listPersonRosteredTimeOffs()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)

const { status, data } = await apiInstance.listPersonRosteredTimeOffs(
    personId,
    acceptVersion,
    cursor,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **personId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|


### Return type

**ListPersonLeave200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPersonSkills**
> ListPersonSkills200Response listPersonSkills()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listPersonSkills(
    personId,
    acceptVersion,
    cursor,
    limit,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **personId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListPersonSkills200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPhases**
> ListPhases200Response listPhases()

List all phases across all projects

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 100)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listPhases(
    acceptVersion,
    cursor,
    limit,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 100|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListPhases200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPlaceholders**
> ListPlaceholders200Response listPlaceholders()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let sortBy: 'createdAt' | 'updatedAt' | 'id'; //Field to sort by: createdAt or updatedAt or id (optional) (default to 'id')
let order: 'asc' | 'desc'; //Sort order: asc or desc (optional) (default to 'asc')
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listPlaceholders(
    acceptVersion,
    cursor,
    limit,
    sortBy,
    order,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **sortBy** | [**&#39;createdAt&#39; | &#39;updatedAt&#39; | &#39;id&#39;**]**Array<&#39;createdAt&#39; &#124; &#39;updatedAt&#39; &#124; &#39;id&#39;>** | Field to sort by: createdAt or updatedAt or id | (optional) defaults to 'id'|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sort order: asc or desc | (optional) defaults to 'asc'|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListPlaceholders200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listProjectActuals**
> ListActuals200Response listProjectActuals()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let personId: number; // (optional) (default to undefined)
let roleId: number; // (optional) (default to undefined)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listProjectActuals(
    projectId,
    acceptVersion,
    cursor,
    limit,
    personId,
    roleId,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **personId** | [**number**] |  | (optional) defaults to undefined|
| **roleId** | [**number**] |  | (optional) defaults to undefined|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListActuals200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listProjectAssignments**
> ListAssignments200Response listProjectAssignments()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let personId: number; // (optional) (default to undefined)
let roleId: number; // (optional) (default to undefined)
let startDate: string; //Include assignments that start or overlap with this date. Format: YYYY-MM-DD (optional) (default to undefined)
let endDate: string; //Include assignments that end on or overlap with this date. Format: YYYY-MM-DD (optional) (default to undefined)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listProjectAssignments(
    projectId,
    acceptVersion,
    cursor,
    limit,
    personId,
    roleId,
    startDate,
    endDate,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **personId** | [**number**] |  | (optional) defaults to undefined|
| **roleId** | [**number**] |  | (optional) defaults to undefined|
| **startDate** | [**string**] | Include assignments that start or overlap with this date. Format: YYYY-MM-DD | (optional) defaults to undefined|
| **endDate** | [**string**] | Include assignments that end on or overlap with this date. Format: YYYY-MM-DD | (optional) defaults to undefined|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListAssignments200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listProjectBudgetRoles**
> ListBudgetRoles200Response listProjectBudgetRoles()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)

const { status, data } = await apiInstance.listProjectBudgetRoles(
    projectId,
    acceptVersion,
    cursor,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|


### Return type

**ListBudgetRoles200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listProjectCustomFields**
> ListProjectCustomFields200Response listProjectCustomFields()

List all custom fields across all projects

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 100)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listProjectCustomFields(
    acceptVersion,
    cursor,
    limit,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 100|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListProjectCustomFields200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listProjectMembers**
> ListProjectMembers200Response listProjectMembers()

This endpoint excludes changes for when people are removed from a project

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 100)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listProjectMembers(
    acceptVersion,
    cursor,
    limit,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 100|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListProjectMembers200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listProjectMilestones**
> ListMilestones200Response listProjectMilestones()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let startDate: string; //Milestones on this date or newer. Defaults to Monday of the current week. Format: YYYY-MM-DD. (optional) (default to undefined)
let endDate: string; //Milestones on this date or older. Format: YYYY-MM-DD. (optional) (default to undefined)

const { status, data } = await apiInstance.listProjectMilestones(
    projectId,
    acceptVersion,
    cursor,
    limit,
    startDate,
    endDate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **startDate** | [**string**] | Milestones on this date or newer. Defaults to Monday of the current week. Format: YYYY-MM-DD. | (optional) defaults to undefined|
| **endDate** | [**string**] | Milestones on this date or older. Format: YYYY-MM-DD. | (optional) defaults to undefined|


### Return type

**ListMilestones200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listProjectNotes**
> ListProjectNotes200Response listProjectNotes()

List all project notes across all projects

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 100)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listProjectNotes(
    acceptVersion,
    cursor,
    limit,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 100|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListProjectNotes200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listProjectOtherExpenses**
> ListOtherExpenses200Response listProjectOtherExpenses()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; //Unique identifier for the project the expenses are for. (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 20)

const { status, data } = await apiInstance.listProjectOtherExpenses(
    projectId,
    acceptVersion,
    cursor,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] | Unique identifier for the project the expenses are for. | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 20|


### Return type

**ListOtherExpenses200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listProjectPeople**
> ListPeople200Response listProjectPeople()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let includeArchived: boolean; // (default to true)
let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)

const { status, data } = await apiInstance.listProjectPeople(
    includeArchived,
    projectId,
    acceptVersion,
    cursor,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **includeArchived** | [**boolean**] |  | defaults to true|
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|


### Return type

**ListPeople200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listProjectPersonRequests**
> ListPersonRequests200Response listProjectPersonRequests()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)

const { status, data } = await apiInstance.listProjectPersonRequests(
    projectId,
    acceptVersion,
    cursor,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|


### Return type

**ListPersonRequests200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listProjectPhases**
> ListPhases200Response listProjectPhases()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 20)

const { status, data } = await apiInstance.listProjectPhases(
    projectId,
    acceptVersion,
    cursor,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 20|


### Return type

**ListPhases200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listProjectRates**
> ListProjectRates200Response listProjectRates()

List all role rates across all projects

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 100)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listProjectRates(
    acceptVersion,
    cursor,
    limit,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 100|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListProjectRates200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listProjectRoleRates**
> ListProjectRates200Response listProjectRoleRates()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)

const { status, data } = await apiInstance.listProjectRoleRates(
    projectId,
    acceptVersion,
    cursor,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|


### Return type

**ListProjectRates200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listProjectTags**
> ListProjectTags200Response listProjectTags()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let sortBy: 'createdAt' | 'updatedAt' | 'id'; //Field to sort by: createdAt or updatedAt or id (optional) (default to 'id')
let order: 'asc' | 'desc'; //Sort order: asc or desc (optional) (default to 'asc')
let includeArchived: boolean; // (optional) (default to false)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listProjectTags(
    acceptVersion,
    cursor,
    limit,
    sortBy,
    order,
    includeArchived,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **sortBy** | [**&#39;createdAt&#39; | &#39;updatedAt&#39; | &#39;id&#39;**]**Array<&#39;createdAt&#39; &#124; &#39;updatedAt&#39; &#124; &#39;id&#39;>** | Field to sort by: createdAt or updatedAt or id | (optional) defaults to 'id'|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sort order: asc or desc | (optional) defaults to 'asc'|
| **includeArchived** | [**boolean**] |  | (optional) defaults to false|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListProjectTags200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listProjectTotalsReport**
> ListProjectTotalsReport200Response listProjectTotalsReport()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let includeArchived: boolean; // (default to false)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 10)

const { status, data } = await apiInstance.listProjectTotalsReport(
    includeArchived,
    acceptVersion,
    cursor,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **includeArchived** | [**boolean**] |  | defaults to false|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 10|


### Return type

**ListProjectTotalsReport200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listProjectWorkstreams**
> ListProjectWorkstreams200Response listProjectWorkstreams()

List all project workstreams across all projects

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listProjectWorkstreams(
    acceptVersion,
    cursor,
    limit,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListProjectWorkstreams200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listProjectWorkstreamsForProject**
> ListProjectWorkstreamsForProject200Response listProjectWorkstreamsForProject()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let includeArchived: boolean; // (default to true)
let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)

const { status, data } = await apiInstance.listProjectWorkstreamsForProject(
    includeArchived,
    projectId,
    acceptVersion,
    cursor,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **includeArchived** | [**boolean**] |  | defaults to true|
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|


### Return type

**ListProjectWorkstreamsForProject200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listProjects**
> ListClientProjects200Response listProjects()

See `GET /people/{id}/projects` for all projects by person

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let includeArchived: boolean; // (default to true)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let sortBy: 'createdAt' | 'updatedAt' | 'id'; //Field to sort by: createdAt or updatedAt or id (optional) (default to 'id')
let order: 'asc' | 'desc'; //Sort order: asc or desc (optional) (default to 'asc')
let modifiedAfter: ModifiedAfter; //If provided, will only return objects modified after this timestamp. Format: YYYY-MM-DD or YYYY-MM-DDTHH:MM:SSZ. Note: A project is considered \"modified\" if any of its core properties change. Actions that count as modifying a project include changing the name, client, status, pricing model, rate type , team, budget, expenses budget, references, and archiving. A project is not considered modified just because another object it is associated with is changed (e.g. actuals, assignments, budget roles, custom fields, milestones, notes, other expenses, people, people requests, phases, rates, timesheet locks & workstreams). (optional) (default to undefined)
let externalId: string; //External ID value (optional) (default to undefined)
let name: string; //Case-insensitive substring match on project name (e.g. `Acme`). (optional) (default to undefined)

const { status, data } = await apiInstance.listProjects(
    includeArchived,
    acceptVersion,
    cursor,
    limit,
    sortBy,
    order,
    modifiedAfter,
    externalId,
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **includeArchived** | [**boolean**] |  | defaults to true|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **sortBy** | [**&#39;createdAt&#39; | &#39;updatedAt&#39; | &#39;id&#39;**]**Array<&#39;createdAt&#39; &#124; &#39;updatedAt&#39; &#124; &#39;id&#39;>** | Field to sort by: createdAt or updatedAt or id | (optional) defaults to 'id'|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sort order: asc or desc | (optional) defaults to 'asc'|
| **modifiedAfter** | **ModifiedAfter** | If provided, will only return objects modified after this timestamp. Format: YYYY-MM-DD or YYYY-MM-DDTHH:MM:SSZ. Note: A project is considered \&quot;modified\&quot; if any of its core properties change. Actions that count as modifying a project include changing the name, client, status, pricing model, rate type , team, budget, expenses budget, references, and archiving. A project is not considered modified just because another object it is associated with is changed (e.g. actuals, assignments, budget roles, custom fields, milestones, notes, other expenses, people, people requests, phases, rates, timesheet locks &amp; workstreams). | (optional) defaults to undefined|
| **externalId** | [**string**] | External ID value | (optional) defaults to undefined|
| **name** | [**string**] | Case-insensitive substring match on project name (e.g. &#x60;Acme&#x60;). | (optional) defaults to undefined|


### Return type

**ListClientProjects200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listRateCards**
> ListRateCards200Response listRateCards()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let sortBy: 'createdAt' | 'updatedAt' | 'id'; //Field to sort by: createdAt or updatedAt or id (optional) (default to 'id')
let order: 'asc' | 'desc'; //Sort order: asc or desc (optional) (default to 'asc')
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listRateCards(
    acceptVersion,
    cursor,
    limit,
    sortBy,
    order,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **sortBy** | [**&#39;createdAt&#39; | &#39;updatedAt&#39; | &#39;id&#39;**]**Array<&#39;createdAt&#39; &#124; &#39;updatedAt&#39; &#124; &#39;id&#39;>** | Field to sort by: createdAt or updatedAt or id | (optional) defaults to 'id'|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sort order: asc or desc | (optional) defaults to 'asc'|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListRateCards200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listRoles**
> ListRoles200Response listRoles()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let name: string; //If provided, will only return roles with a name that is a substring of this value (case-insensitive). (optional) (default to undefined)
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let sortBy: 'createdAt' | 'updatedAt' | 'id'; //Field to sort by: createdAt or updatedAt or id (optional) (default to 'id')
let order: 'asc' | 'desc'; //Sort order: asc or desc (optional) (default to 'asc')
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listRoles(
    acceptVersion,
    name,
    cursor,
    limit,
    sortBy,
    order,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **name** | [**string**] | If provided, will only return roles with a name that is a substring of this value (case-insensitive). | (optional) defaults to undefined|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **sortBy** | [**&#39;createdAt&#39; | &#39;updatedAt&#39; | &#39;id&#39;**]**Array<&#39;createdAt&#39; &#124; &#39;updatedAt&#39; &#124; &#39;id&#39;>** | Field to sort by: createdAt or updatedAt or id | (optional) defaults to 'id'|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sort order: asc or desc | (optional) defaults to 'asc'|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListRoles200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listRosteredTimeOffs**
> ListPersonLeave200Response listRosteredTimeOffs()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let sortBy: 'id' | 'createdAt' | 'updatedAt'; // (default to 'id')
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let order: SortOrder; // (optional) (default to undefined)
let personId: number; // (optional) (default to undefined)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listRosteredTimeOffs(
    sortBy,
    acceptVersion,
    cursor,
    limit,
    order,
    personId,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sortBy** | [**&#39;id&#39; | &#39;createdAt&#39; | &#39;updatedAt&#39;**]**Array<&#39;id&#39; &#124; &#39;createdAt&#39; &#124; &#39;updatedAt&#39;>** |  | defaults to 'id'|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **order** | **SortOrder** |  | (optional) defaults to undefined|
| **personId** | [**number**] |  | (optional) defaults to undefined|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListPersonLeave200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listSelectCustomFields**
> ListSelectCustomFields200Response listSelectCustomFields()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let model: 'PERSON' | 'PROJECT'; //The field type of the custom field (optional) (default to undefined)

const { status, data } = await apiInstance.listSelectCustomFields(
    acceptVersion,
    cursor,
    limit,
    model
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **model** | [**&#39;PERSON&#39; | &#39;PROJECT&#39;**]**Array<&#39;PERSON&#39; &#124; &#39;PROJECT&#39;>** | The field type of the custom field | (optional) defaults to undefined|


### Return type

**ListSelectCustomFields200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listSkillPeople**
> ListPeople200Response listSkillPeople()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let skillId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)

const { status, data } = await apiInstance.listSkillPeople(
    skillId,
    acceptVersion,
    cursor,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **skillId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|


### Return type

**ListPeople200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listSkills**
> ListSkills200Response listSkills()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let sortBy: 'id' | 'createdAt' | 'updatedAt'; // (default to 'id')
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let order: SortOrder; // (optional) (default to undefined)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listSkills(
    sortBy,
    acceptVersion,
    cursor,
    limit,
    order,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sortBy** | [**&#39;id&#39; | &#39;createdAt&#39; | &#39;updatedAt&#39;**]**Array<&#39;id&#39; &#124; &#39;createdAt&#39; &#124; &#39;updatedAt&#39;>** |  | defaults to 'id'|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **order** | **SortOrder** |  | (optional) defaults to undefined|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListSkills200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listTeamPeople**
> ListPeople200Response listTeamPeople()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let teamId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)

const { status, data } = await apiInstance.listTeamPeople(
    teamId,
    acceptVersion,
    cursor,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **teamId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|


### Return type

**ListPeople200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listTeams**
> ListTeams200Response listTeams()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)
let sortBy: 'createdAt' | 'updatedAt' | 'id'; //Field to sort by: createdAt or updatedAt or id (optional) (default to 'id')
let order: 'asc' | 'desc'; //Sort order: asc or desc (optional) (default to 'asc')

const { status, data } = await apiInstance.listTeams(
    acceptVersion,
    cursor,
    limit,
    modifiedAfter,
    sortBy,
    order
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|
| **sortBy** | [**&#39;createdAt&#39; | &#39;updatedAt&#39; | &#39;id&#39;**]**Array<&#39;createdAt&#39; &#124; &#39;updatedAt&#39; &#124; &#39;id&#39;>** | Field to sort by: createdAt or updatedAt or id | (optional) defaults to 'id'|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sort order: asc or desc | (optional) defaults to 'asc'|


### Return type

**ListTeams200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listTextCustomFields**
> ListTextCustomFields200Response listTextCustomFields()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let model: 'PERSON' | 'PROJECT'; //The field type of the custom field (optional) (default to undefined)

const { status, data } = await apiInstance.listTextCustomFields(
    acceptVersion,
    cursor,
    limit,
    model
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **model** | [**&#39;PERSON&#39; | &#39;PROJECT&#39;**]**Array<&#39;PERSON&#39; &#124; &#39;PROJECT&#39;>** | The field type of the custom field | (optional) defaults to undefined|


### Return type

**ListTextCustomFields200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listUserViews**
> ListUserViews200Response listUserViews()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)

const { status, data } = await apiInstance.listUserViews(
    userId,
    acceptVersion,
    cursor,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|


### Return type

**ListUserViews200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listUsers**
> ListUsers200Response listUsers()

See `POST /invitations` for creating users

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listUsers(
    acceptVersion,
    cursor,
    limit,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListUsers200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listViews**
> ListUserViews200Response listViews()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listViews(
    acceptVersion,
    cursor,
    limit,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListUserViews200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listWorkstreams**
> ListWorkstreams200Response listWorkstreams()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ModifiedAfter
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 50)
let sortBy: 'createdAt' | 'updatedAt' | 'id'; //Field to sort by: createdAt or updatedAt or id (optional) (default to 'id')
let order: 'asc' | 'desc'; //Sort order: asc or desc (optional) (default to 'asc')
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.listWorkstreams(
    acceptVersion,
    cursor,
    limit,
    sortBy,
    order,
    modifiedAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 50|
| **sortBy** | [**&#39;createdAt&#39; | &#39;updatedAt&#39; | &#39;id&#39;**]**Array<&#39;createdAt&#39; &#124; &#39;updatedAt&#39; &#124; &#39;id&#39;>** | Field to sort by: createdAt or updatedAt or id | (optional) defaults to 'id'|
| **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sort order: asc or desc | (optional) defaults to 'asc'|
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**ListWorkstreams200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removePersonFromTeam**
> removePersonFromTeam()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let teamId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let cursor: string; //Cursor for paginated requests (optional) (default to undefined)
let limit: number; //The number of results per page (optional) (default to 20)

const { status, data } = await apiInstance.removePersonFromTeam(
    personId,
    teamId,
    acceptVersion,
    cursor,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **personId** | [**number**] |  | defaults to undefined|
| **teamId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **cursor** | [**string**] | Cursor for paginated requests | (optional) defaults to undefined|
| **limit** | [**number**] | The number of results per page | (optional) defaults to 20|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removePersonSkill**
> removePersonSkill()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let skillId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.removePersonSkill(
    personId,
    skillId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **personId** | [**number**] |  | defaults to undefined|
| **skillId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removePlaceholderFromTeam**
> removePlaceholderFromTeam()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let placeholderId: number; // (default to undefined)
let teamId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.removePlaceholderFromTeam(
    placeholderId,
    teamId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **placeholderId** | [**number**] |  | defaults to undefined|
| **teamId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removePlaceholderSkill**
> removePlaceholderSkill()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let placeholderId: number; // (default to undefined)
let skillId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.removePlaceholderSkill(
    placeholderId,
    skillId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **placeholderId** | [**number**] |  | defaults to undefined|
| **skillId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeProjectTagFromProject**
> removeProjectTagFromProject()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectTagId: number; // (default to undefined)
let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.removeProjectTagFromProject(
    projectTagId,
    projectId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectTagId** | [**number**] |  | defaults to undefined|
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeViewFromUser**
> removeViewFromUser()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userId: number; // (default to undefined)
let viewId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.removeViewFromUser(
    userId,
    viewId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**number**] |  | defaults to undefined|
| **viewId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeWorkstreamFromProject**
> ProjectWorkstream removeWorkstreamFromProject()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let workstreamId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.removeWorkstreamFromProject(
    projectId,
    workstreamId,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] |  | defaults to undefined|
| **workstreamId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**ProjectWorkstream**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateActualTimeEntry**
> Actual updateActualTimeEntry()

Returns Actual with updated minutes. Creates a new actual when there is none to update [Learn more](https://developer.runn.io/docs/actuals-notes).

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ActualTimeEntry
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let actualTimeEntry: ActualTimeEntry; // (optional)

const { status, data } = await apiInstance.updateActualTimeEntry(
    acceptVersion,
    actualTimeEntry
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **actualTimeEntry** | **ActualTimeEntry**|  | |
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Actual**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCheckboxCustomField**
> CustomFieldCheckbox updateCheckboxCustomField()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateCheckboxCustomFieldRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let checkboxFieldId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updateCheckboxCustomFieldRequest: UpdateCheckboxCustomFieldRequest; // (optional)

const { status, data } = await apiInstance.updateCheckboxCustomField(
    checkboxFieldId,
    acceptVersion,
    updateCheckboxCustomFieldRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCheckboxCustomFieldRequest** | **UpdateCheckboxCustomFieldRequest**|  | |
| **checkboxFieldId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**CustomFieldCheckbox**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateClient**
> Client updateClient()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateClientRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let clientId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updateClientRequest: UpdateClientRequest; // (optional)

const { status, data } = await apiInstance.updateClient(
    clientId,
    acceptVersion,
    updateClientRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateClientRequest** | **UpdateClientRequest**|  | |
| **clientId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Client**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateContract**
> Contract updateContract()

Update a contract

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateContractRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let contractId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updateContractRequest: UpdateContractRequest; // (optional)

const { status, data } = await apiInstance.updateContract(
    contractId,
    acceptVersion,
    updateContractRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateContractRequest** | **UpdateContractRequest**|  | |
| **contractId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Contract**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateDateCustomField**
> CustomFieldDate updateDateCustomField()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateDateCustomFieldRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let dateFieldId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updateDateCustomFieldRequest: UpdateDateCustomFieldRequest; // (optional)

const { status, data } = await apiInstance.updateDateCustomField(
    dateFieldId,
    acceptVersion,
    updateDateCustomFieldRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateDateCustomFieldRequest** | **UpdateDateCustomFieldRequest**|  | |
| **dateFieldId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**CustomFieldDate**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePeopleTag**
> ListPeopleTags200ResponseValuesInner updatePeopleTag(updatePeopleTagRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdatePeopleTagRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let peopleTagId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updatePeopleTagRequest: UpdatePeopleTagRequest; //

const { status, data } = await apiInstance.updatePeopleTag(
    peopleTagId,
    acceptVersion,
    updatePeopleTagRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePeopleTagRequest** | **UpdatePeopleTagRequest**|  | |
| **peopleTagId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**ListPeopleTags200ResponseValuesInner**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePerson**
> Person updatePerson()

To add a new role or job title to a person, see POST /people/{personId}/contracts

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdatePersonRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updatePersonRequest: UpdatePersonRequest; // (optional)

const { status, data } = await apiInstance.updatePerson(
    personId,
    acceptVersion,
    updatePersonRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePersonRequest** | **UpdatePersonRequest**|  | |
| **personId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Person**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePersonCheckboxCustomField**
> UpdatePersonCheckboxCustomFieldRequest updatePersonCheckboxCustomField(updatePersonCheckboxCustomFieldRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdatePersonCheckboxCustomFieldRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updatePersonCheckboxCustomFieldRequest: UpdatePersonCheckboxCustomFieldRequest; //

const { status, data } = await apiInstance.updatePersonCheckboxCustomField(
    personId,
    acceptVersion,
    updatePersonCheckboxCustomFieldRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePersonCheckboxCustomFieldRequest** | **UpdatePersonCheckboxCustomFieldRequest**|  | |
| **personId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**UpdatePersonCheckboxCustomFieldRequest**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePersonDateCustomField**
> UpdatePersonDateCustomFieldRequest updatePersonDateCustomField(updatePersonDateCustomFieldRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdatePersonDateCustomFieldRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updatePersonDateCustomFieldRequest: UpdatePersonDateCustomFieldRequest; //

const { status, data } = await apiInstance.updatePersonDateCustomField(
    personId,
    acceptVersion,
    updatePersonDateCustomFieldRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePersonDateCustomFieldRequest** | **UpdatePersonDateCustomFieldRequest**|  | |
| **personId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**UpdatePersonDateCustomFieldRequest**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePersonSelectCustomField**
> UpdatePersonSelectCustomFieldRequest updatePersonSelectCustomField(updatePersonSelectCustomFieldRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdatePersonSelectCustomFieldRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updatePersonSelectCustomFieldRequest: UpdatePersonSelectCustomFieldRequest; //

const { status, data } = await apiInstance.updatePersonSelectCustomField(
    personId,
    acceptVersion,
    updatePersonSelectCustomFieldRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePersonSelectCustomFieldRequest** | **UpdatePersonSelectCustomFieldRequest**|  | |
| **personId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**UpdatePersonSelectCustomFieldRequest**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePersonSkill**
> Competency updatePersonSkill(updatePersonSkillRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdatePersonSkillRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let skillId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updatePersonSkillRequest: UpdatePersonSkillRequest; //

const { status, data } = await apiInstance.updatePersonSkill(
    personId,
    skillId,
    acceptVersion,
    updatePersonSkillRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePersonSkillRequest** | **UpdatePersonSkillRequest**|  | |
| **personId** | [**number**] |  | defaults to undefined|
| **skillId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Competency**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePersonTextCustomField**
> UpdatePersonTextCustomFieldRequest updatePersonTextCustomField(updatePersonTextCustomFieldRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdatePersonTextCustomFieldRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updatePersonTextCustomFieldRequest: UpdatePersonTextCustomFieldRequest; //

const { status, data } = await apiInstance.updatePersonTextCustomField(
    personId,
    acceptVersion,
    updatePersonTextCustomFieldRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePersonTextCustomFieldRequest** | **UpdatePersonTextCustomFieldRequest**|  | |
| **personId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**UpdatePersonTextCustomFieldRequest**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateProject**
> Project updateProject()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateProjectRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updateProjectRequest: UpdateProjectRequest; // (optional)

const { status, data } = await apiInstance.updateProject(
    projectId,
    acceptVersion,
    updateProjectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateProjectRequest** | **UpdateProjectRequest**|  | |
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Project**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateProjectBudgetRole**
> ProjectBudgetRole updateProjectBudgetRole()

Update a project budget role for a project. You cannot update a              project budget role using estimated budget if a project rate does              not exist for the role because the project rate is used to set              the estimatedMinutes.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateProjectBudgetRoleRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let roleId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updateProjectBudgetRoleRequest: UpdateProjectBudgetRoleRequest; // (optional)

const { status, data } = await apiInstance.updateProjectBudgetRole(
    projectId,
    roleId,
    acceptVersion,
    updateProjectBudgetRoleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateProjectBudgetRoleRequest** | **UpdateProjectBudgetRoleRequest**|  | |
| **projectId** | [**number**] |  | defaults to undefined|
| **roleId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**ProjectBudgetRole**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Project budget role |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateProjectCheckboxCustomField**
> UpdatePersonCheckboxCustomFieldRequest updateProjectCheckboxCustomField(updatePersonCheckboxCustomFieldRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdatePersonCheckboxCustomFieldRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updatePersonCheckboxCustomFieldRequest: UpdatePersonCheckboxCustomFieldRequest; //

const { status, data } = await apiInstance.updateProjectCheckboxCustomField(
    projectId,
    acceptVersion,
    updatePersonCheckboxCustomFieldRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePersonCheckboxCustomFieldRequest** | **UpdatePersonCheckboxCustomFieldRequest**|  | |
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**UpdatePersonCheckboxCustomFieldRequest**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateProjectDateCustomField**
> UpdatePersonDateCustomFieldRequest updateProjectDateCustomField(updatePersonDateCustomFieldRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdatePersonDateCustomFieldRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updatePersonDateCustomFieldRequest: UpdatePersonDateCustomFieldRequest; //

const { status, data } = await apiInstance.updateProjectDateCustomField(
    projectId,
    acceptVersion,
    updatePersonDateCustomFieldRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePersonDateCustomFieldRequest** | **UpdatePersonDateCustomFieldRequest**|  | |
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**UpdatePersonDateCustomFieldRequest**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateProjectMilestone**
> Milestone updateProjectMilestone()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateProjectMilestoneRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let milestoneId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updateProjectMilestoneRequest: UpdateProjectMilestoneRequest; // (optional)

const { status, data } = await apiInstance.updateProjectMilestone(
    projectId,
    milestoneId,
    acceptVersion,
    updateProjectMilestoneRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateProjectMilestoneRequest** | **UpdateProjectMilestoneRequest**|  | |
| **projectId** | [**number**] |  | defaults to undefined|
| **milestoneId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Milestone**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateProjectOtherExpense**
> ProjectOtherExpense updateProjectOtherExpense()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ProjectOtherExpense1
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; //Unique identifier for the project the expense is for. (default to undefined)
let otherExpenseId: number; //Unique identifier for the other expense to update. (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let projectOtherExpense1: ProjectOtherExpense1; //A non-labour expense for a project. (optional)

const { status, data } = await apiInstance.updateProjectOtherExpense(
    projectId,
    otherExpenseId,
    acceptVersion,
    projectOtherExpense1
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectOtherExpense1** | **ProjectOtherExpense1**| A non-labour expense for a project. | |
| **projectId** | [**number**] | Unique identifier for the project the expense is for. | defaults to undefined|
| **otherExpenseId** | [**number**] | Unique identifier for the other expense to update. | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**ProjectOtherExpense**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A non-labour expense for a project. |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateProjectPersonRequest**
> UpdateProjectPersonRequest200Response updateProjectPersonRequest(updateProjectPersonRequestRequest)

Person requests are used to request a placeholder role be filled with another person in the account or to request a new person be hired. This endpoint can be used to update the status of a request to \'REQUESTED\' or \'NEED_TO_HIRE\', respectively.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateProjectPersonRequestRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let personRequestId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updateProjectPersonRequestRequest: UpdateProjectPersonRequestRequest; //

const { status, data } = await apiInstance.updateProjectPersonRequest(
    projectId,
    personRequestId,
    acceptVersion,
    updateProjectPersonRequestRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateProjectPersonRequestRequest** | **UpdateProjectPersonRequestRequest**|  | |
| **projectId** | [**number**] |  | defaults to undefined|
| **personRequestId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**UpdateProjectPersonRequest200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateProjectPhase**
> ProjectPhase updateProjectPhase()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateProjectPhaseRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let phaseId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updateProjectPhaseRequest: UpdateProjectPhaseRequest; // (optional)

const { status, data } = await apiInstance.updateProjectPhase(
    projectId,
    phaseId,
    acceptVersion,
    updateProjectPhaseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateProjectPhaseRequest** | **UpdateProjectPhaseRequest**|  | |
| **projectId** | [**number**] |  | defaults to undefined|
| **phaseId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**ProjectPhase**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Project phases divide your project into smaller sections so you can group similar tasks and assignments together. |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateProjectRoleRate**
> ProjectRate updateProjectRoleRate(updateProjectRoleRateRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateProjectRoleRateRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let projectRateId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updateProjectRoleRateRequest: UpdateProjectRoleRateRequest; //

const { status, data } = await apiInstance.updateProjectRoleRate(
    projectId,
    projectRateId,
    acceptVersion,
    updateProjectRoleRateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateProjectRoleRateRequest** | **UpdateProjectRoleRateRequest**|  | |
| **projectId** | [**number**] |  | defaults to undefined|
| **projectRateId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**ProjectRate**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateProjectSelectCustomField**
> UpdatePersonSelectCustomFieldRequest updateProjectSelectCustomField(updatePersonSelectCustomFieldRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdatePersonSelectCustomFieldRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updatePersonSelectCustomFieldRequest: UpdatePersonSelectCustomFieldRequest; //

const { status, data } = await apiInstance.updateProjectSelectCustomField(
    projectId,
    acceptVersion,
    updatePersonSelectCustomFieldRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePersonSelectCustomFieldRequest** | **UpdatePersonSelectCustomFieldRequest**|  | |
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**UpdatePersonSelectCustomFieldRequest**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateProjectTag**
> ProjectTag updateProjectTag(updatePeopleTagRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdatePeopleTagRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectTagId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updatePeopleTagRequest: UpdatePeopleTagRequest; //

const { status, data } = await apiInstance.updateProjectTag(
    projectTagId,
    acceptVersion,
    updatePeopleTagRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePeopleTagRequest** | **UpdatePeopleTagRequest**|  | |
| **projectTagId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**ProjectTag**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateProjectTextCustomField**
> UpdatePersonTextCustomFieldRequest updateProjectTextCustomField(updatePersonTextCustomFieldRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdatePersonTextCustomFieldRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updatePersonTextCustomFieldRequest: UpdatePersonTextCustomFieldRequest; //

const { status, data } = await apiInstance.updateProjectTextCustomField(
    projectId,
    acceptVersion,
    updatePersonTextCustomFieldRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePersonTextCustomFieldRequest** | **UpdatePersonTextCustomFieldRequest**|  | |
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**UpdatePersonTextCustomFieldRequest**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateProjectTimesheetLock**
> GetProjectTimesheetLock200Response updateProjectTimesheetLock()

This feature currently in beta and only available to selected customers.This will return an error and message if all timesheets haven\'t been filled out to selected date.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateProjectTimesheetLockRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updateProjectTimesheetLockRequest: UpdateProjectTimesheetLockRequest; // (optional)

const { status, data } = await apiInstance.updateProjectTimesheetLock(
    projectId,
    acceptVersion,
    updateProjectTimesheetLockRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateProjectTimesheetLockRequest** | **UpdateProjectTimesheetLockRequest**|  | |
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**GetProjectTimesheetLock200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateRole**
> Role updateRole()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateRoleRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let roleId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updateRoleRequest: UpdateRoleRequest; // (optional)

const { status, data } = await apiInstance.updateRole(
    roleId,
    acceptVersion,
    updateRoleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateRoleRequest** | **UpdateRoleRequest**|  | |
| **roleId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Role**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateSelectCustomField**
> CustomFieldSelect updateSelectCustomField()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateCheckboxCustomFieldRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let selectFieldId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updateCheckboxCustomFieldRequest: UpdateCheckboxCustomFieldRequest; // (optional)

const { status, data } = await apiInstance.updateSelectCustomField(
    selectFieldId,
    acceptVersion,
    updateCheckboxCustomFieldRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCheckboxCustomFieldRequest** | **UpdateCheckboxCustomFieldRequest**|  | |
| **selectFieldId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**CustomFieldSelect**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateSelectCustomFieldOption**
> UpdateSelectCustomFieldOption200Response updateSelectCustomFieldOption(updateSelectCustomFieldOptionRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateSelectCustomFieldOptionRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let selectFieldId: number; // (default to undefined)
let selectOptionId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updateSelectCustomFieldOptionRequest: UpdateSelectCustomFieldOptionRequest; //

const { status, data } = await apiInstance.updateSelectCustomFieldOption(
    selectFieldId,
    selectOptionId,
    acceptVersion,
    updateSelectCustomFieldOptionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSelectCustomFieldOptionRequest** | **UpdateSelectCustomFieldOptionRequest**|  | |
| **selectFieldId** | [**number**] |  | defaults to undefined|
| **selectOptionId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**UpdateSelectCustomFieldOption200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateSkill**
> Skill updateSkill(updateSelectCustomFieldOptionRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateSelectCustomFieldOptionRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let skillId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updateSelectCustomFieldOptionRequest: UpdateSelectCustomFieldOptionRequest; //

const { status, data } = await apiInstance.updateSkill(
    skillId,
    acceptVersion,
    updateSelectCustomFieldOptionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSelectCustomFieldOptionRequest** | **UpdateSelectCustomFieldOptionRequest**|  | |
| **skillId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Skill**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateTeam**
> Team updateTeam(updateSelectCustomFieldOptionRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateSelectCustomFieldOptionRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let teamId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updateSelectCustomFieldOptionRequest: UpdateSelectCustomFieldOptionRequest; //

const { status, data } = await apiInstance.updateTeam(
    teamId,
    acceptVersion,
    updateSelectCustomFieldOptionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSelectCustomFieldOptionRequest** | **UpdateSelectCustomFieldOptionRequest**|  | |
| **teamId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Team**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateTextCustomField**
> CustomFieldText updateTextCustomField()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateCheckboxCustomFieldRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let textFieldId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updateCheckboxCustomFieldRequest: UpdateCheckboxCustomFieldRequest; // (optional)

const { status, data } = await apiInstance.updateTextCustomField(
    textFieldId,
    acceptVersion,
    updateCheckboxCustomFieldRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCheckboxCustomFieldRequest** | **UpdateCheckboxCustomFieldRequest**|  | |
| **textFieldId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**CustomFieldText**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWorkstream**
> Workstream updateWorkstream()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateWorkstreamRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let workstreamId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let updateWorkstreamRequest: UpdateWorkstreamRequest; // (optional)

const { status, data } = await apiInstance.updateWorkstream(
    workstreamId,
    acceptVersion,
    updateWorkstreamRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateWorkstreamRequest** | **UpdateWorkstreamRequest**|  | |
| **workstreamId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**Workstream**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

