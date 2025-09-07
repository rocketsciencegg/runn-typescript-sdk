## runn-typescript-sdk@1.0.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install runn-typescript-sdk@1.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://api.runn.io*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**addPeopleToSkill**](docs/DefaultApi.md#addpeopletoskill) | **POST** /skills/{skillId}/people/ | Add people to a skill
*DefaultApi* | [**addPersonSkill**](docs/DefaultApi.md#addpersonskill) | **POST** /people/{personId}/skills/ | Add a skill to a person
*DefaultApi* | [**addPersonToProject**](docs/DefaultApi.md#addpersontoproject) | **POST** /people/{personId}/projects/ | Add project to a person
*DefaultApi* | [**addPersonToTeam**](docs/DefaultApi.md#addpersontoteam) | **POST** /people/{personId}/teams/ | Add a person to a team
*DefaultApi* | [**addPlaceholderSkill**](docs/DefaultApi.md#addplaceholderskill) | **POST** /placeholders/{placeholderId}/skills/ | Add a skill to a placeholder
*DefaultApi* | [**addPlaceholderToTeam**](docs/DefaultApi.md#addplaceholdertoteam) | **POST** /placeholders/{placeholderId}/teams/ | Add a placeholder to a team
*DefaultApi* | [**addProjectTagToProject**](docs/DefaultApi.md#addprojecttagtoproject) | **POST** /project-tags/{projectTagId}/project/{projectId} | Add a project tag to a project
*DefaultApi* | [**addWorkstreamToProject**](docs/DefaultApi.md#addworkstreamtoproject) | **POST** /projects/{projectId}/project-workstreams/{workstreamId}/ | Add a workstream to a project
*DefaultApi* | [**allocateViewToUser**](docs/DefaultApi.md#allocateviewtouser) | **POST** /users/{userId}/views/{viewId} | Allocate a view to a user
*DefaultApi* | [**convertLegacyId**](docs/DefaultApi.md#convertlegacyid) | **GET** /legacy-id/{model}/{legacyId} | Convert a legacy ID from API v0 to a new ID
*DefaultApi* | [**createActual**](docs/DefaultApi.md#createactual) | **POST** /actuals/ | Create or update an actual
*DefaultApi* | [**createActualsBulk**](docs/DefaultApi.md#createactualsbulk) | **POST** /actuals/bulk/ | Create or update actuals in bulk
*DefaultApi* | [**createAssignment**](docs/DefaultApi.md#createassignment) | **POST** /assignments/ | Create an assignment
*DefaultApi* | [**createCheckboxCustomField**](docs/DefaultApi.md#createcheckboxcustomfield) | **POST** /custom-fields/checkbox/ | Create a checkbox custom field
*DefaultApi* | [**createClient**](docs/DefaultApi.md#createclient) | **POST** /clients/ | Create a client
*DefaultApi* | [**createClientsBulk**](docs/DefaultApi.md#createclientsbulk) | **POST** /clients/bulk/ | Create clients in bulk
*DefaultApi* | [**createDateCustomField**](docs/DefaultApi.md#createdatecustomfield) | **POST** /custom-fields/date/ | Create a date custom field
*DefaultApi* | [**createHolidayTimeOff**](docs/DefaultApi.md#createholidaytimeoff) | **POST** /time-offs/holidays/ | Create a holiday time off
*DefaultApi* | [**createInvitation**](docs/DefaultApi.md#createinvitation) | **POST** /invitations/ | Create an invitation for a user
*DefaultApi* | [**createLeaveTimeOff**](docs/DefaultApi.md#createleavetimeoff) | **POST** /time-offs/leave/ | Create a leave time off
*DefaultApi* | [**createLeaveTimeOffsBulk**](docs/DefaultApi.md#createleavetimeoffsbulk) | **POST** /time-offs/leave/bulk/ | Create leave time offs in bulk
*DefaultApi* | [**createNoteForProject**](docs/DefaultApi.md#createnoteforproject) | **POST** /projects/{projectId}/notes/ | Create a project note
*DefaultApi* | [**createPeopleTag**](docs/DefaultApi.md#createpeopletag) | **POST** /people-tags/ | Create a people tag
*DefaultApi* | [**createPerson**](docs/DefaultApi.md#createperson) | **POST** /people/ | Create a person
*DefaultApi* | [**createPersonContract**](docs/DefaultApi.md#createpersoncontract) | **POST** /people/{personId}/contracts/ | Add a new contract to a person
*DefaultApi* | [**createPlaceholder**](docs/DefaultApi.md#createplaceholder) | **POST** /placeholders/ | Create a placeholder
*DefaultApi* | [**createProject**](docs/DefaultApi.md#createproject) | **POST** /projects/ | Create a project
*DefaultApi* | [**createProjectBudgetRole**](docs/DefaultApi.md#createprojectbudgetrole) | **POST** /projects/{projectId}/budget-roles/ | Create a project budget role
*DefaultApi* | [**createProjectMilestone**](docs/DefaultApi.md#createprojectmilestone) | **POST** /projects/{projectId}/milestones/ | Create a milestone for a project
*DefaultApi* | [**createProjectOtherExpense**](docs/DefaultApi.md#createprojectotherexpense) | **POST** /projects/{projectId}/other-expenses/ | Create an other expense for a project
*DefaultApi* | [**createProjectPersonRequest**](docs/DefaultApi.md#createprojectpersonrequest) | **POST** /projects/{projectId}/person-requests/ | Create a person request on a project
*DefaultApi* | [**createProjectPhase**](docs/DefaultApi.md#createprojectphase) | **POST** /projects/{projectId}/phases/ | Create a phase for a project
*DefaultApi* | [**createProjectTag**](docs/DefaultApi.md#createprojecttag) | **POST** /project-tags/ | Create a project tag
*DefaultApi* | [**createRateCard**](docs/DefaultApi.md#createratecard) | **POST** /rate-cards/ | Create a rate card
*DefaultApi* | [**createRole**](docs/DefaultApi.md#createrole) | **POST** /roles/ | Create a role
*DefaultApi* | [**createSelectCustomField**](docs/DefaultApi.md#createselectcustomfield) | **POST** /custom-fields/select/ | Create a select custom field
*DefaultApi* | [**createSelectCustomFieldOption**](docs/DefaultApi.md#createselectcustomfieldoption) | **POST** /custom-fields/select/{selectFieldId}/options | Create a select custom field option
*DefaultApi* | [**createSkill**](docs/DefaultApi.md#createskill) | **POST** /skills/ | Create a skill
*DefaultApi* | [**createTeam**](docs/DefaultApi.md#createteam) | **POST** /teams/ | Create a team
*DefaultApi* | [**createTextCustomField**](docs/DefaultApi.md#createtextcustomfield) | **POST** /custom-fields/text/ | Create a text custom field
*DefaultApi* | [**createWorkstream**](docs/DefaultApi.md#createworkstream) | **POST** /workstreams/ | Create a workstream
*DefaultApi* | [**deleteActual**](docs/DefaultApi.md#deleteactual) | **DELETE** /actuals/{actualId}/ | Delete a specific actual
*DefaultApi* | [**deleteAssignment**](docs/DefaultApi.md#deleteassignment) | **DELETE** /assignments/{assignmentId}/ | Delete an assignment
*DefaultApi* | [**deleteCheckboxCustomField**](docs/DefaultApi.md#deletecheckboxcustomfield) | **DELETE** /custom-fields/checkbox/{checkboxFieldId} | Delete a checkbox custom field
*DefaultApi* | [**deleteDateCustomField**](docs/DefaultApi.md#deletedatecustomfield) | **DELETE** /custom-fields/date/{dateFieldId} | Delete a date custom field
*DefaultApi* | [**deleteHolidayTimeOff**](docs/DefaultApi.md#deleteholidaytimeoff) | **DELETE** /time-offs/holidays/{timeOffId} | Delete a holiday time off
*DefaultApi* | [**deleteInvitation**](docs/DefaultApi.md#deleteinvitation) | **DELETE** /invitations/{invitationId} | Delete an invitation
*DefaultApi* | [**deleteLeaveTimeOff**](docs/DefaultApi.md#deleteleavetimeoff) | **DELETE** /time-offs/leave/{timeOffId}/ | Delete a leave time off
*DefaultApi* | [**deleteLeaveTimeOffsBulk**](docs/DefaultApi.md#deleteleavetimeoffsbulk) | **DELETE** /time-offs/leave/bulk/ | Delete leave time offs in bulk
*DefaultApi* | [**deletePeopleTag**](docs/DefaultApi.md#deletepeopletag) | **DELETE** /people-tags/{peopleTagId} | Delete a people tag
*DefaultApi* | [**deletePerson**](docs/DefaultApi.md#deleteperson) | **DELETE** /people/{personId} | Delete a person
*DefaultApi* | [**deletePersonContract**](docs/DefaultApi.md#deletepersoncontract) | **DELETE** /people/{personId}/contracts/{contractId} | Delete a contract for a person
*DefaultApi* | [**deleteProject**](docs/DefaultApi.md#deleteproject) | **DELETE** /projects/{projectId}/ | Delete a project
*DefaultApi* | [**deleteProjectBudgetRole**](docs/DefaultApi.md#deleteprojectbudgetrole) | **DELETE** /projects/{projectId}/budget-roles/{roleId} | Delete a project budget role
*DefaultApi* | [**deleteProjectMilestone**](docs/DefaultApi.md#deleteprojectmilestone) | **DELETE** /projects/{projectId}/milestones/{milestoneId} | Delete a milestone for a project
*DefaultApi* | [**deleteProjectPhase**](docs/DefaultApi.md#deleteprojectphase) | **DELETE** /projects/{projectId}/phases/{phaseId} | Delete a phase for a project
*DefaultApi* | [**deleteRateCard**](docs/DefaultApi.md#deleteratecard) | **DELETE** /rate-cards/{rateCardId} | Delete a rate card
*DefaultApi* | [**deleteRosteredTimeOff**](docs/DefaultApi.md#deleterosteredtimeoff) | **DELETE** /time-offs/rostered-off/{timeOffId} | Delete a rostered time off
*DefaultApi* | [**deleteSelectCustomField**](docs/DefaultApi.md#deleteselectcustomfield) | **DELETE** /custom-fields/select/{selectFieldId} | Delete a select custom field
*DefaultApi* | [**deleteSelectCustomFieldOption**](docs/DefaultApi.md#deleteselectcustomfieldoption) | **DELETE** /custom-fields/select/{selectFieldId}/options/{selectOptionId} | Delete a select custom field option
*DefaultApi* | [**deleteSkill**](docs/DefaultApi.md#deleteskill) | **DELETE** /skills/{skillId} | Delete a skill
*DefaultApi* | [**deleteTeam**](docs/DefaultApi.md#deleteteam) | **DELETE** /teams/{teamId}/ | Delete a team
*DefaultApi* | [**deleteTextCustomField**](docs/DefaultApi.md#deletetextcustomfield) | **DELETE** /custom-fields/text/{textFieldId} | Delete a text custom field
*DefaultApi* | [**deleteUser**](docs/DefaultApi.md#deleteuser) | **DELETE** /users/{userId} | Delete a user
*DefaultApi* | [**deleteWorkstream**](docs/DefaultApi.md#deleteworkstream) | **DELETE** /workstreams/{workstreamId}/ | Delete a workstream
*DefaultApi* | [**getClient**](docs/DefaultApi.md#getclient) | **GET** /clients/{clientId} | Show a client
*DefaultApi* | [**getCurrentUser**](docs/DefaultApi.md#getcurrentuser) | **GET** /me/ | Who am I?
*DefaultApi* | [**getHolidayGroup**](docs/DefaultApi.md#getholidaygroup) | **GET** /holiday-groups/{holidayGroupId} | Show a holiday group
*DefaultApi* | [**getLeaveTimeOff**](docs/DefaultApi.md#getleavetimeoff) | **GET** /time-offs/leave/{timeOffId}/ | Show a leave time off
*DefaultApi* | [**getPeopleTag**](docs/DefaultApi.md#getpeopletag) | **GET** /people-tags/{peopleTagId} | Show a people tag
*DefaultApi* | [**getPerson**](docs/DefaultApi.md#getperson) | **GET** /people/{personId} | Show a person
*DefaultApi* | [**getPersonCurrentContract**](docs/DefaultApi.md#getpersoncurrentcontract) | **GET** /people/{personId}/contracts/current | Show current contract for a person
*DefaultApi* | [**getPersonCurrentTeam**](docs/DefaultApi.md#getpersoncurrentteam) | **GET** /people/{personId}/teams/current | Show current team
*DefaultApi* | [**getPersonHoursReport**](docs/DefaultApi.md#getpersonhoursreport) | **GET** /reports/hours/people/{personId} | Get by-day entries for a person with assignments and actuals
*DefaultApi* | [**getProject**](docs/DefaultApi.md#getproject) | **GET** /projects/{projectId} | Show a project
*DefaultApi* | [**getProjectBudgetRole**](docs/DefaultApi.md#getprojectbudgetrole) | **GET** /projects/{projectId}/budget-roles/{roleId} | Get a project budget role
*DefaultApi* | [**getProjectHoursReport**](docs/DefaultApi.md#getprojecthoursreport) | **GET** /reports/hours/projects/{projectId} | Get by-day entries for a project with assignments and actuals
*DefaultApi* | [**getProjectPersonRequest**](docs/DefaultApi.md#getprojectpersonrequest) | **GET** /projects/{projectId}/person-requests/{personRequestId} | Show a single person request for a project
*DefaultApi* | [**getProjectPhase**](docs/DefaultApi.md#getprojectphase) | **GET** /projects/{projectId}/phases/{phaseId} | Show a phase for a project
*DefaultApi* | [**getProjectTag**](docs/DefaultApi.md#getprojecttag) | **GET** /project-tags/{projectTagId} | Show a project tag
*DefaultApi* | [**getProjectTimesheetLock**](docs/DefaultApi.md#getprojecttimesheetlock) | **GET** /projects/{projectId}/timesheet-lock/ | Show a timesheet lock for a project
*DefaultApi* | [**getProjectTotalsReport**](docs/DefaultApi.md#getprojecttotalsreport) | **GET** /reports/totals/projects/{projectId} | Show totals for a project with assignments and actuals
*DefaultApi* | [**getProjectWorkstream**](docs/DefaultApi.md#getprojectworkstream) | **GET** /projects/{projectId}/project-workstreams/{workstreamId}/ | View project workstream
*DefaultApi* | [**getRateCard**](docs/DefaultApi.md#getratecard) | **GET** /rate-cards/{rateCardId} | Show a rate card
*DefaultApi* | [**getRole**](docs/DefaultApi.md#getrole) | **GET** /roles/{roleId} | Show a role
*DefaultApi* | [**getSkill**](docs/DefaultApi.md#getskill) | **GET** /skills/{skillId} | Show a skill
*DefaultApi* | [**getTeam**](docs/DefaultApi.md#getteam) | **GET** /teams/{teamId}/ | Show a team
*DefaultApi* | [**getUser**](docs/DefaultApi.md#getuser) | **GET** /users/{userId} | Show a user
*DefaultApi* | [**getWorkstream**](docs/DefaultApi.md#getworkstream) | **GET** /workstreams/{workstreamId}/ | Show a workstream
*DefaultApi* | [**listActuals**](docs/DefaultApi.md#listactuals) | **GET** /actuals/ | List actuals
*DefaultApi* | [**listAssignments**](docs/DefaultApi.md#listassignments) | **GET** /assignments/ | List assignments
*DefaultApi* | [**listBudgetRoles**](docs/DefaultApi.md#listbudgetroles) | **GET** /budget-roles/ | List budget roles
*DefaultApi* | [**listCheckboxCustomFields**](docs/DefaultApi.md#listcheckboxcustomfields) | **GET** /custom-fields/checkbox/ | List checkbox custom fields
*DefaultApi* | [**listClientProjects**](docs/DefaultApi.md#listclientprojects) | **GET** /clients/{clientId}/projects/ | List a client\&#39;s projects
*DefaultApi* | [**listClients**](docs/DefaultApi.md#listclients) | **GET** /clients/ | List clients
*DefaultApi* | [**listContracts**](docs/DefaultApi.md#listcontracts) | **GET** /contracts/ | List contracts
*DefaultApi* | [**listDateCustomFields**](docs/DefaultApi.md#listdatecustomfields) | **GET** /custom-fields/date/ | List date custom fields
*DefaultApi* | [**listEvents**](docs/DefaultApi.md#listevents) | **GET** /activity-log/ | List events
*DefaultApi* | [**listHolidayGroupHolidays**](docs/DefaultApi.md#listholidaygroupholidays) | **GET** /holiday-groups/{holidayGroupId}/holidays | Show holidays for a holiday group
*DefaultApi* | [**listHolidayGroups**](docs/DefaultApi.md#listholidaygroups) | **GET** /holiday-groups/ | List holiday groups
*DefaultApi* | [**listHolidayTimeOffs**](docs/DefaultApi.md#listholidaytimeoffs) | **GET** /time-offs/holidays/ | List holiday time offs
*DefaultApi* | [**listInvitations**](docs/DefaultApi.md#listinvitations) | **GET** /invitations/ | List invitations
*DefaultApi* | [**listLeaveTimeOffs**](docs/DefaultApi.md#listleavetimeoffs) | **GET** /time-offs/leave/ | List leave time offs
*DefaultApi* | [**listMilestones**](docs/DefaultApi.md#listmilestones) | **GET** /milestones/ | List project milestones
*DefaultApi* | [**listNotesForProject**](docs/DefaultApi.md#listnotesforproject) | **GET** /projects/{projectId}/notes/ | List notes for a project
*DefaultApi* | [**listOtherExpenses**](docs/DefaultApi.md#listotherexpenses) | **GET** /other-expenses/ | List other expenses
*DefaultApi* | [**listPeople**](docs/DefaultApi.md#listpeople) | **GET** /people/ | List people
*DefaultApi* | [**listPeopleCurrentContracts**](docs/DefaultApi.md#listpeoplecurrentcontracts) | **GET** /people/contracts/current | List people current contracts
*DefaultApi* | [**listPeopleCustomFields**](docs/DefaultApi.md#listpeoplecustomfields) | **GET** /people/custom-fields | List people custom fields
*DefaultApi* | [**listPeopleNotes**](docs/DefaultApi.md#listpeoplenotes) | **GET** /people/notes | List people notes
*DefaultApi* | [**listPeopleSkills**](docs/DefaultApi.md#listpeopleskills) | **GET** /people/skills | List people skills
*DefaultApi* | [**listPeopleTags**](docs/DefaultApi.md#listpeopletags) | **GET** /people-tags/ | List people tags
*DefaultApi* | [**listPersonActuals**](docs/DefaultApi.md#listpersonactuals) | **GET** /people/{personId}/actuals/ | List actuals for a person
*DefaultApi* | [**listPersonAssignments**](docs/DefaultApi.md#listpersonassignments) | **GET** /people/{personId}/assignments/ | List assignments for a person
*DefaultApi* | [**listPersonContracts**](docs/DefaultApi.md#listpersoncontracts) | **GET** /people/{personId}/contracts/ | List contracts for a person
*DefaultApi* | [**listPersonHolidays**](docs/DefaultApi.md#listpersonholidays) | **GET** /people/{personId}/time-offs/holidays | List holidays for a person
*DefaultApi* | [**listPersonLeave**](docs/DefaultApi.md#listpersonleave) | **GET** /people/{personId}/time-offs/leave | List leave for a person
*DefaultApi* | [**listPersonProjects**](docs/DefaultApi.md#listpersonprojects) | **GET** /people/{personId}/projects/ | List projects for a person
*DefaultApi* | [**listPersonRequests**](docs/DefaultApi.md#listpersonrequests) | **GET** /person-requests/ | List person requests
*DefaultApi* | [**listPersonRosteredTimeOffs**](docs/DefaultApi.md#listpersonrosteredtimeoffs) | **GET** /people/{personId}/time-offs/rostered-off | List rostered time offs for a person
*DefaultApi* | [**listPersonSkills**](docs/DefaultApi.md#listpersonskills) | **GET** /people/{personId}/skills/ | List skills for a person
*DefaultApi* | [**listPhases**](docs/DefaultApi.md#listphases) | **GET** /phases/ | List phases
*DefaultApi* | [**listPlaceholders**](docs/DefaultApi.md#listplaceholders) | **GET** /placeholders/ | List placeholders
*DefaultApi* | [**listProjectActuals**](docs/DefaultApi.md#listprojectactuals) | **GET** /projects/{projectId}/actuals/ | List actuals for a project
*DefaultApi* | [**listProjectAssignments**](docs/DefaultApi.md#listprojectassignments) | **GET** /projects/{projectId}/assignments/ | List assignments for a project
*DefaultApi* | [**listProjectBudgetRoles**](docs/DefaultApi.md#listprojectbudgetroles) | **GET** /projects/{projectId}/budget-roles/ | Get a paginated list of project budget roles for a project
*DefaultApi* | [**listProjectCustomFields**](docs/DefaultApi.md#listprojectcustomfields) | **GET** /projects/custom-fields | List project custom fields
*DefaultApi* | [**listProjectMembers**](docs/DefaultApi.md#listprojectmembers) | **GET** /project-members/ | List members of projects
*DefaultApi* | [**listProjectMilestones**](docs/DefaultApi.md#listprojectmilestones) | **GET** /projects/{projectId}/milestones/ | List milestones for a project
*DefaultApi* | [**listProjectNotes**](docs/DefaultApi.md#listprojectnotes) | **GET** /project-notes/ | List project notes
*DefaultApi* | [**listProjectOtherExpenses**](docs/DefaultApi.md#listprojectotherexpenses) | **GET** /projects/{projectId}/other-expenses/ | List other expenses for a project
*DefaultApi* | [**listProjectPeople**](docs/DefaultApi.md#listprojectpeople) | **GET** /projects/{projectId}/people/ | List people assigned to a project
*DefaultApi* | [**listProjectPersonRequests**](docs/DefaultApi.md#listprojectpersonrequests) | **GET** /projects/{projectId}/person-requests/ | List the person requests for a project
*DefaultApi* | [**listProjectPhases**](docs/DefaultApi.md#listprojectphases) | **GET** /projects/{projectId}/phases/ | List phases for a project
*DefaultApi* | [**listProjectRates**](docs/DefaultApi.md#listprojectrates) | **GET** /project-rates/ | List role rates
*DefaultApi* | [**listProjectRoleRates**](docs/DefaultApi.md#listprojectrolerates) | **GET** /projects/{projectId}/project-rates/ | List role rates for a project
*DefaultApi* | [**listProjectTags**](docs/DefaultApi.md#listprojecttags) | **GET** /project-tags/ | List project tags
*DefaultApi* | [**listProjectTotalsReport**](docs/DefaultApi.md#listprojecttotalsreport) | **GET** /reports/totals/projects/ | List totals for projects with assignments and actuals
*DefaultApi* | [**listProjectWorkstreams**](docs/DefaultApi.md#listprojectworkstreams) | **GET** /project-workstreams/ | List project workstreams
*DefaultApi* | [**listProjectWorkstreamsForProject**](docs/DefaultApi.md#listprojectworkstreamsforproject) | **GET** /projects/{projectId}/project-workstreams/ | List workstreams assigned to a project
*DefaultApi* | [**listProjects**](docs/DefaultApi.md#listprojects) | **GET** /projects/ | List projects
*DefaultApi* | [**listRateCards**](docs/DefaultApi.md#listratecards) | **GET** /rate-cards/ | List rate cards
*DefaultApi* | [**listRoles**](docs/DefaultApi.md#listroles) | **GET** /roles/ | List roles
*DefaultApi* | [**listRosteredTimeOffs**](docs/DefaultApi.md#listrosteredtimeoffs) | **GET** /time-offs/rostered-off/ | List rostered time offs
*DefaultApi* | [**listSelectCustomFields**](docs/DefaultApi.md#listselectcustomfields) | **GET** /custom-fields/select/ | Show a select custom field
*DefaultApi* | [**listSkillPeople**](docs/DefaultApi.md#listskillpeople) | **GET** /skills/{skillId}/people/ | List people for a skill
*DefaultApi* | [**listSkills**](docs/DefaultApi.md#listskills) | **GET** /skills/ | List skills
*DefaultApi* | [**listTeamPeople**](docs/DefaultApi.md#listteampeople) | **GET** /teams/{teamId}/people/ | List people in a team
*DefaultApi* | [**listTeams**](docs/DefaultApi.md#listteams) | **GET** /teams/ | List teams
*DefaultApi* | [**listTextCustomFields**](docs/DefaultApi.md#listtextcustomfields) | **GET** /custom-fields/text/ | Show a text custom field
*DefaultApi* | [**listUserViews**](docs/DefaultApi.md#listuserviews) | **GET** /users/{userId}/views/ | List allocated views for a user
*DefaultApi* | [**listUsers**](docs/DefaultApi.md#listusers) | **GET** /users/ | List users
*DefaultApi* | [**listViews**](docs/DefaultApi.md#listviews) | **GET** /views/ | List views
*DefaultApi* | [**listWorkstreams**](docs/DefaultApi.md#listworkstreams) | **GET** /workstreams/ | List workstreams
*DefaultApi* | [**removePersonFromTeam**](docs/DefaultApi.md#removepersonfromteam) | **DELETE** /people/{personId}/teams/{teamId} | Remove a person from a team
*DefaultApi* | [**removePersonSkill**](docs/DefaultApi.md#removepersonskill) | **DELETE** /people/{personId}/skills/{skillId} | Remove a skill from a person
*DefaultApi* | [**removePlaceholderFromTeam**](docs/DefaultApi.md#removeplaceholderfromteam) | **DELETE** /placeholders/{placeholderId}/teams/{teamId} | Remove a placeholder from a team
*DefaultApi* | [**removePlaceholderSkill**](docs/DefaultApi.md#removeplaceholderskill) | **DELETE** /placeholders/{placeholderId}/skills/{skillId} | Remove a skill from a placeholder
*DefaultApi* | [**removeProjectTagFromProject**](docs/DefaultApi.md#removeprojecttagfromproject) | **DELETE** /project-tags/{projectTagId}/project/{projectId} | Remove a project tag from a project
*DefaultApi* | [**removeViewFromUser**](docs/DefaultApi.md#removeviewfromuser) | **DELETE** /users/{userId}/views/{viewId}/ | Remove allocated view from user
*DefaultApi* | [**removeWorkstreamFromProject**](docs/DefaultApi.md#removeworkstreamfromproject) | **DELETE** /projects/{projectId}/project-workstreams/{workstreamId}/ | Delete project workstream
*DefaultApi* | [**updateActualTimeEntry**](docs/DefaultApi.md#updateactualtimeentry) | **POST** /actuals/time-entry | Update an actual
*DefaultApi* | [**updateCheckboxCustomField**](docs/DefaultApi.md#updatecheckboxcustomfield) | **PATCH** /custom-fields/checkbox/{checkboxFieldId} | Update a checkbox custom field
*DefaultApi* | [**updateClient**](docs/DefaultApi.md#updateclient) | **PATCH** /clients/{clientId} | Update a client
*DefaultApi* | [**updateContract**](docs/DefaultApi.md#updatecontract) | **PATCH** /contracts/{contractId} | Update a contract
*DefaultApi* | [**updateDateCustomField**](docs/DefaultApi.md#updatedatecustomfield) | **PATCH** /custom-fields/date/{dateFieldId} | Update a date custom field
*DefaultApi* | [**updatePeopleTag**](docs/DefaultApi.md#updatepeopletag) | **PATCH** /people-tags/{peopleTagId} | Update a people tag
*DefaultApi* | [**updatePerson**](docs/DefaultApi.md#updateperson) | **PATCH** /people/{personId} | Update a person
*DefaultApi* | [**updatePersonCheckboxCustomField**](docs/DefaultApi.md#updatepersoncheckboxcustomfield) | **PATCH** /people/{personId}/custom-fields/checkbox/ | Add a checkbox custom value to a person
*DefaultApi* | [**updatePersonDateCustomField**](docs/DefaultApi.md#updatepersondatecustomfield) | **PATCH** /people/{personId}/custom-fields/date/ | Add a date custom value to a person
*DefaultApi* | [**updatePersonSelectCustomField**](docs/DefaultApi.md#updatepersonselectcustomfield) | **PATCH** /people/{personId}/custom-fields/select/ | Add custom select options to a person
*DefaultApi* | [**updatePersonSkill**](docs/DefaultApi.md#updatepersonskill) | **PATCH** /people/{personId}/skills/{skillId} | Update a skill for a person
*DefaultApi* | [**updatePersonTextCustomField**](docs/DefaultApi.md#updatepersontextcustomfield) | **PATCH** /people/{personId}/custom-fields/text/ | Add a text custom value to a person
*DefaultApi* | [**updateProject**](docs/DefaultApi.md#updateproject) | **PATCH** /projects/{projectId} | Update a project
*DefaultApi* | [**updateProjectBudgetRole**](docs/DefaultApi.md#updateprojectbudgetrole) | **PATCH** /projects/{projectId}/budget-roles/{roleId} | Update a project budget role
*DefaultApi* | [**updateProjectCheckboxCustomField**](docs/DefaultApi.md#updateprojectcheckboxcustomfield) | **PATCH** /projects/{projectId}/custom-fields/checkbox/ | Add a checkbox custom value to a project
*DefaultApi* | [**updateProjectDateCustomField**](docs/DefaultApi.md#updateprojectdatecustomfield) | **PATCH** /projects/{projectId}/custom-fields/date/ | Add a date custom field value to a project
*DefaultApi* | [**updateProjectMilestone**](docs/DefaultApi.md#updateprojectmilestone) | **PATCH** /projects/{projectId}/milestones/{milestoneId} | Update a milestone for a project
*DefaultApi* | [**updateProjectOtherExpense**](docs/DefaultApi.md#updateprojectotherexpense) | **PATCH** /projects/{projectId}/other-expenses/{otherExpenseId}/ | Update an other expense on a project
*DefaultApi* | [**updateProjectPersonRequest**](docs/DefaultApi.md#updateprojectpersonrequest) | **PATCH** /projects/{projectId}/person-requests/{personRequestId} | Update the status of a person request on a project
*DefaultApi* | [**updateProjectPhase**](docs/DefaultApi.md#updateprojectphase) | **PATCH** /projects/{projectId}/phases/{phaseId} | Update a phase for a project
*DefaultApi* | [**updateProjectRoleRate**](docs/DefaultApi.md#updateprojectrolerate) | **PATCH** /projects/{projectId}/project-rates/{projectRateId}/ | Update a rate for a role on a project
*DefaultApi* | [**updateProjectSelectCustomField**](docs/DefaultApi.md#updateprojectselectcustomfield) | **PATCH** /projects/{projectId}/custom-fields/select/ | Add a select custom field to a project
*DefaultApi* | [**updateProjectTag**](docs/DefaultApi.md#updateprojecttag) | **PATCH** /project-tags/{projectTagId} | Update a project tag
*DefaultApi* | [**updateProjectTextCustomField**](docs/DefaultApi.md#updateprojecttextcustomfield) | **PATCH** /projects/{projectId}/custom-fields/text/ | Add a text custom field value to a project
*DefaultApi* | [**updateProjectTimesheetLock**](docs/DefaultApi.md#updateprojecttimesheetlock) | **PATCH** /projects/{projectId}/timesheet-lock/ | Update a timesheet lock for a project
*DefaultApi* | [**updateRole**](docs/DefaultApi.md#updaterole) | **PATCH** /roles/{roleId} | Update a role
*DefaultApi* | [**updateSelectCustomField**](docs/DefaultApi.md#updateselectcustomfield) | **PATCH** /custom-fields/select/{selectFieldId} | Update a select custom field
*DefaultApi* | [**updateSelectCustomFieldOption**](docs/DefaultApi.md#updateselectcustomfieldoption) | **PATCH** /custom-fields/select/{selectFieldId}/options/{selectOptionId} | Update a select custom field option
*DefaultApi* | [**updateSkill**](docs/DefaultApi.md#updateskill) | **PATCH** /skills/{skillId} | Update a skill
*DefaultApi* | [**updateTeam**](docs/DefaultApi.md#updateteam) | **PATCH** /teams/{teamId}/ | Update a team
*DefaultApi* | [**updateTextCustomField**](docs/DefaultApi.md#updatetextcustomfield) | **PATCH** /custom-fields/text/{textFieldId} | Update a text custom field
*DefaultApi* | [**updateWorkstream**](docs/DefaultApi.md#updateworkstream) | **PATCH** /workstreams/{workstreamId}/ | Update a workstream


### Documentation For Models

 - [Actor](docs/Actor.md)
 - [ActorApi](docs/ActorApi.md)
 - [ActorCsv](docs/ActorCsv.md)
 - [ActorIntegration](docs/ActorIntegration.md)
 - [ActorRunnSupport](docs/ActorRunnSupport.md)
 - [ActorSystem](docs/ActorSystem.md)
 - [ActorUser](docs/ActorUser.md)
 - [Actual](docs/Actual.md)
 - [ActualInput](docs/ActualInput.md)
 - [ActualTimeEntry](docs/ActualTimeEntry.md)
 - [AddPeopleToSkill201Response](docs/AddPeopleToSkill201Response.md)
 - [AddPeopleToSkillRequest](docs/AddPeopleToSkillRequest.md)
 - [AddPeopleToSkillRequestPeopleInner](docs/AddPeopleToSkillRequestPeopleInner.md)
 - [AddPersonSkillRequest](docs/AddPersonSkillRequest.md)
 - [AddPersonSkillRequestLevel](docs/AddPersonSkillRequestLevel.md)
 - [AddPersonToProjectRequest](docs/AddPersonToProjectRequest.md)
 - [AddPersonToTeamRequest](docs/AddPersonToTeamRequest.md)
 - [Assignment](docs/Assignment.md)
 - [BadRequest](docs/BadRequest.md)
 - [Client](docs/Client.md)
 - [ClientInput](docs/ClientInput.md)
 - [CollectionPerson](docs/CollectionPerson.md)
 - [CollectionPersonManagersInner](docs/CollectionPersonManagersInner.md)
 - [Competency](docs/Competency.md)
 - [Conflict](docs/Conflict.md)
 - [Contract](docs/Contract.md)
 - [ContractInput](docs/ContractInput.md)
 - [CreateActualsBulkRequest](docs/CreateActualsBulkRequest.md)
 - [CreateAssignmentRequest](docs/CreateAssignmentRequest.md)
 - [CreateCheckboxCustomFieldRequest](docs/CreateCheckboxCustomFieldRequest.md)
 - [CreateClientsBulkRequest](docs/CreateClientsBulkRequest.md)
 - [CreateDateCustomFieldRequest](docs/CreateDateCustomFieldRequest.md)
 - [CreateInvitationRequest](docs/CreateInvitationRequest.md)
 - [CreateInvitationRequestAllOfAnyOf](docs/CreateInvitationRequestAllOfAnyOf.md)
 - [CreateInvitationRequestAllOfAnyOf1](docs/CreateInvitationRequestAllOfAnyOf1.md)
 - [CreateLeaveTimeOffsBulkRequest](docs/CreateLeaveTimeOffsBulkRequest.md)
 - [CreateNoteForProjectRequest](docs/CreateNoteForProjectRequest.md)
 - [CreatePersonRequest](docs/CreatePersonRequest.md)
 - [CreatePersonRequestRosteredDays](docs/CreatePersonRequestRosteredDays.md)
 - [CreatePlaceholderRequest](docs/CreatePlaceholderRequest.md)
 - [CreateProjectBudgetRoleRequest](docs/CreateProjectBudgetRoleRequest.md)
 - [CreateProjectMilestoneRequest](docs/CreateProjectMilestoneRequest.md)
 - [CreateProjectMilestoneRequestIcon](docs/CreateProjectMilestoneRequestIcon.md)
 - [CreateProjectPersonRequestRequest](docs/CreateProjectPersonRequestRequest.md)
 - [CreateProjectPhaseRequest](docs/CreateProjectPhaseRequest.md)
 - [CreateProjectRequest](docs/CreateProjectRequest.md)
 - [CreateProjectRequestAnyOf](docs/CreateProjectRequestAnyOf.md)
 - [CreateProjectRequestAnyOf1](docs/CreateProjectRequestAnyOf1.md)
 - [CreateProjectRequestAnyOf1FromTemplate](docs/CreateProjectRequestAnyOf1FromTemplate.md)
 - [CreateRateCardRequest](docs/CreateRateCardRequest.md)
 - [CreateRateCardRequestReferencesInner](docs/CreateRateCardRequestReferencesInner.md)
 - [CreateRoleRequest](docs/CreateRoleRequest.md)
 - [CreateSelectCustomFieldRequest](docs/CreateSelectCustomFieldRequest.md)
 - [CreateSelectCustomFieldRequestOptionsInner](docs/CreateSelectCustomFieldRequestOptionsInner.md)
 - [CustomCheckboxFieldCollection](docs/CustomCheckboxFieldCollection.md)
 - [CustomDateFieldCollection](docs/CustomDateFieldCollection.md)
 - [CustomFieldCheckbox](docs/CustomFieldCheckbox.md)
 - [CustomFieldDate](docs/CustomFieldDate.md)
 - [CustomFieldSelect](docs/CustomFieldSelect.md)
 - [CustomFieldText](docs/CustomFieldText.md)
 - [CustomSelectFieldCollection](docs/CustomSelectFieldCollection.md)
 - [CustomTextFieldCollection](docs/CustomTextFieldCollection.md)
 - [DeleteLeaveTimeOffsBulkRequest](docs/DeleteLeaveTimeOffsBulkRequest.md)
 - [Event](docs/Event.md)
 - [EventActualDeleted](docs/EventActualDeleted.md)
 - [EventActualDeletedActual](docs/EventActualDeletedActual.md)
 - [EventAssignmentDeleted](docs/EventAssignmentDeleted.md)
 - [EventAssignmentDeletedAssignment](docs/EventAssignmentDeletedAssignment.md)
 - [EventContractDeleted](docs/EventContractDeleted.md)
 - [EventContractDeletedContract](docs/EventContractDeletedContract.md)
 - [EventPersonDeleted](docs/EventPersonDeleted.md)
 - [EventPersonDeletedPerson](docs/EventPersonDeletedPerson.md)
 - [EventProjectDeleted](docs/EventProjectDeleted.md)
 - [EventProjectDeletedProject](docs/EventProjectDeletedProject.md)
 - [EventSubresourcePerson](docs/EventSubresourcePerson.md)
 - [EventSubresourcePhase](docs/EventSubresourcePhase.md)
 - [EventSubresourceProject](docs/EventSubresourceProject.md)
 - [EventSubresourceRole](docs/EventSubresourceRole.md)
 - [EventSubresourceWorkstream](docs/EventSubresourceWorkstream.md)
 - [EventTimeOffDeleted](docs/EventTimeOffDeleted.md)
 - [EventTimeOffDeletedTimeOff](docs/EventTimeOffDeletedTimeOff.md)
 - [GetCurrentUser200Response](docs/GetCurrentUser200Response.md)
 - [GetPersonCurrentContract404Response](docs/GetPersonCurrentContract404Response.md)
 - [GetPersonCurrentTeam200Response](docs/GetPersonCurrentTeam200Response.md)
 - [GetPersonCurrentTeam200ResponseValuesInner](docs/GetPersonCurrentTeam200ResponseValuesInner.md)
 - [GetPersonHoursReport200Response](docs/GetPersonHoursReport200Response.md)
 - [GetProjectHoursReport200Response](docs/GetProjectHoursReport200Response.md)
 - [GetProjectTimesheetLock200Response](docs/GetProjectTimesheetLock200Response.md)
 - [Holiday](docs/Holiday.md)
 - [HolidayGroup](docs/HolidayGroup.md)
 - [Invitation](docs/Invitation.md)
 - [ListActuals200Response](docs/ListActuals200Response.md)
 - [ListAssignments200Response](docs/ListAssignments200Response.md)
 - [ListBudgetRoles200Response](docs/ListBudgetRoles200Response.md)
 - [ListCheckboxCustomFields200Response](docs/ListCheckboxCustomFields200Response.md)
 - [ListClientProjects200Response](docs/ListClientProjects200Response.md)
 - [ListClients200Response](docs/ListClients200Response.md)
 - [ListContracts200Response](docs/ListContracts200Response.md)
 - [ListDateCustomFields200Response](docs/ListDateCustomFields200Response.md)
 - [ListEvents200Response](docs/ListEvents200Response.md)
 - [ListHolidayGroupHolidays200Response](docs/ListHolidayGroupHolidays200Response.md)
 - [ListHolidayGroups200Response](docs/ListHolidayGroups200Response.md)
 - [ListInvitations200Response](docs/ListInvitations200Response.md)
 - [ListMilestones200Response](docs/ListMilestones200Response.md)
 - [ListOtherExpenses200Response](docs/ListOtherExpenses200Response.md)
 - [ListPeople200Response](docs/ListPeople200Response.md)
 - [ListPeopleCustomFields200Response](docs/ListPeopleCustomFields200Response.md)
 - [ListPeopleNotes200Response](docs/ListPeopleNotes200Response.md)
 - [ListPeopleSkills200Response](docs/ListPeopleSkills200Response.md)
 - [ListPeopleTags200Response](docs/ListPeopleTags200Response.md)
 - [ListPeopleTags200ResponseValuesInner](docs/ListPeopleTags200ResponseValuesInner.md)
 - [ListPersonHolidays200Response](docs/ListPersonHolidays200Response.md)
 - [ListPersonHolidays200ResponseValuesInner](docs/ListPersonHolidays200ResponseValuesInner.md)
 - [ListPersonLeave200Response](docs/ListPersonLeave200Response.md)
 - [ListPersonRequests200Response](docs/ListPersonRequests200Response.md)
 - [ListPersonSkills200Response](docs/ListPersonSkills200Response.md)
 - [ListPhases200Response](docs/ListPhases200Response.md)
 - [ListPlaceholders200Response](docs/ListPlaceholders200Response.md)
 - [ListProjectCustomFields200Response](docs/ListProjectCustomFields200Response.md)
 - [ListProjectMembers200Response](docs/ListProjectMembers200Response.md)
 - [ListProjectMembers200ResponseValuesInner](docs/ListProjectMembers200ResponseValuesInner.md)
 - [ListProjectNotes200Response](docs/ListProjectNotes200Response.md)
 - [ListProjectRates200Response](docs/ListProjectRates200Response.md)
 - [ListProjectTags200Response](docs/ListProjectTags200Response.md)
 - [ListProjectTotalsReport200Response](docs/ListProjectTotalsReport200Response.md)
 - [ListProjectWorkstreams200Response](docs/ListProjectWorkstreams200Response.md)
 - [ListProjectWorkstreams200ResponseValuesInner](docs/ListProjectWorkstreams200ResponseValuesInner.md)
 - [ListProjectWorkstreamsForProject200Response](docs/ListProjectWorkstreamsForProject200Response.md)
 - [ListRateCards200Response](docs/ListRateCards200Response.md)
 - [ListRoles200Response](docs/ListRoles200Response.md)
 - [ListSelectCustomFields200Response](docs/ListSelectCustomFields200Response.md)
 - [ListSkills200Response](docs/ListSkills200Response.md)
 - [ListTeams200Response](docs/ListTeams200Response.md)
 - [ListTextCustomFields200Response](docs/ListTextCustomFields200Response.md)
 - [ListUserViews200Response](docs/ListUserViews200Response.md)
 - [ListUsers200Response](docs/ListUsers200Response.md)
 - [ListWorkstreams200Response](docs/ListWorkstreams200Response.md)
 - [Milestone](docs/Milestone.md)
 - [ModifiedAfter](docs/ModifiedAfter.md)
 - [NotFound](docs/NotFound.md)
 - [Person](docs/Person.md)
 - [PersonCompetency](docs/PersonCompetency.md)
 - [PersonCompetencyAllOfLevel](docs/PersonCompetencyAllOfLevel.md)
 - [PersonCustomField](docs/PersonCustomField.md)
 - [PersonCustomFieldCustomFieldsInner](docs/PersonCustomFieldCustomFieldsInner.md)
 - [PersonCustomFields](docs/PersonCustomFields.md)
 - [PersonCustomFieldsCheckboxInner](docs/PersonCustomFieldsCheckboxInner.md)
 - [PersonCustomFieldsDateInner](docs/PersonCustomFieldsDateInner.md)
 - [PersonCustomFieldsSelectInner](docs/PersonCustomFieldsSelectInner.md)
 - [PersonCustomFieldsSelectInnerValuesInner](docs/PersonCustomFieldsSelectInnerValuesInner.md)
 - [PersonCustomFieldsTextInner](docs/PersonCustomFieldsTextInner.md)
 - [PersonNote](docs/PersonNote.md)
 - [PersonNotesInner](docs/PersonNotesInner.md)
 - [PersonRequest](docs/PersonRequest.md)
 - [PersonSkillsInner](docs/PersonSkillsInner.md)
 - [Placeholder](docs/Placeholder.md)
 - [PlaceholderInput](docs/PlaceholderInput.md)
 - [Project](docs/Project.md)
 - [ProjectAggregate](docs/ProjectAggregate.md)
 - [ProjectAggregateActuals](docs/ProjectAggregateActuals.md)
 - [ProjectAggregateAssignments](docs/ProjectAggregateAssignments.md)
 - [ProjectBudgetRole](docs/ProjectBudgetRole.md)
 - [ProjectCustomField](docs/ProjectCustomField.md)
 - [ProjectNote](docs/ProjectNote.md)
 - [ProjectOtherExpense](docs/ProjectOtherExpense.md)
 - [ProjectOtherExpense1](docs/ProjectOtherExpense1.md)
 - [ProjectPhase](docs/ProjectPhase.md)
 - [ProjectRate](docs/ProjectRate.md)
 - [ProjectTag](docs/ProjectTag.md)
 - [ProjectWorkstream](docs/ProjectWorkstream.md)
 - [RateCard](docs/RateCard.md)
 - [RateCardRatesInner](docs/RateCardRatesInner.md)
 - [RateCardRatesInnerRole](docs/RateCardRatesInnerRole.md)
 - [Reference](docs/Reference.md)
 - [ReportsHoursPeople](docs/ReportsHoursPeople.md)
 - [ReportsHoursPeopleActuals](docs/ReportsHoursPeopleActuals.md)
 - [ReportsHoursPeopleAssignments](docs/ReportsHoursPeopleAssignments.md)
 - [ReportsHoursProjects](docs/ReportsHoursProjects.md)
 - [Role](docs/Role.md)
 - [RosteredDays](docs/RosteredDays.md)
 - [Skill](docs/Skill.md)
 - [SortOrder](docs/SortOrder.md)
 - [Tag](docs/Tag.md)
 - [Team](docs/Team.md)
 - [TimeOff](docs/TimeOff.md)
 - [TimeOffHolidayInput](docs/TimeOffHolidayInput.md)
 - [TimeOffLeaveInput](docs/TimeOffLeaveInput.md)
 - [Unauthorized](docs/Unauthorized.md)
 - [UnprocessableEntity](docs/UnprocessableEntity.md)
 - [UpdateCheckboxCustomFieldRequest](docs/UpdateCheckboxCustomFieldRequest.md)
 - [UpdateClientRequest](docs/UpdateClientRequest.md)
 - [UpdateContractRequest](docs/UpdateContractRequest.md)
 - [UpdateContractRequestRosteredDays](docs/UpdateContractRequestRosteredDays.md)
 - [UpdateDateCustomFieldRequest](docs/UpdateDateCustomFieldRequest.md)
 - [UpdatePeopleTagRequest](docs/UpdatePeopleTagRequest.md)
 - [UpdatePersonCheckboxCustomFieldRequest](docs/UpdatePersonCheckboxCustomFieldRequest.md)
 - [UpdatePersonDateCustomFieldRequest](docs/UpdatePersonDateCustomFieldRequest.md)
 - [UpdatePersonRequest](docs/UpdatePersonRequest.md)
 - [UpdatePersonRequestTagsInner](docs/UpdatePersonRequestTagsInner.md)
 - [UpdatePersonSelectCustomFieldRequest](docs/UpdatePersonSelectCustomFieldRequest.md)
 - [UpdatePersonSelectCustomFieldRequestValuesInner](docs/UpdatePersonSelectCustomFieldRequestValuesInner.md)
 - [UpdatePersonSkillRequest](docs/UpdatePersonSkillRequest.md)
 - [UpdatePersonTextCustomFieldRequest](docs/UpdatePersonTextCustomFieldRequest.md)
 - [UpdateProjectBudgetRoleRequest](docs/UpdateProjectBudgetRoleRequest.md)
 - [UpdateProjectBudgetRoleRequestAnyOf](docs/UpdateProjectBudgetRoleRequestAnyOf.md)
 - [UpdateProjectBudgetRoleRequestAnyOf1](docs/UpdateProjectBudgetRoleRequestAnyOf1.md)
 - [UpdateProjectMilestoneRequest](docs/UpdateProjectMilestoneRequest.md)
 - [UpdateProjectPersonRequest200Response](docs/UpdateProjectPersonRequest200Response.md)
 - [UpdateProjectPersonRequestRequest](docs/UpdateProjectPersonRequestRequest.md)
 - [UpdateProjectPhaseRequest](docs/UpdateProjectPhaseRequest.md)
 - [UpdateProjectRequest](docs/UpdateProjectRequest.md)
 - [UpdateProjectRoleRateRequest](docs/UpdateProjectRoleRateRequest.md)
 - [UpdateProjectTimesheetLockRequest](docs/UpdateProjectTimesheetLockRequest.md)
 - [UpdateProjectTimesheetLockRequestAnyOf](docs/UpdateProjectTimesheetLockRequestAnyOf.md)
 - [UpdateProjectTimesheetLockRequestAnyOf1](docs/UpdateProjectTimesheetLockRequestAnyOf1.md)
 - [UpdateRoleRequest](docs/UpdateRoleRequest.md)
 - [UpdateSelectCustomFieldOption200Response](docs/UpdateSelectCustomFieldOption200Response.md)
 - [UpdateSelectCustomFieldOption200ResponseOption](docs/UpdateSelectCustomFieldOption200ResponseOption.md)
 - [UpdateSelectCustomFieldOptionRequest](docs/UpdateSelectCustomFieldOptionRequest.md)
 - [UpdateWorkstreamRequest](docs/UpdateWorkstreamRequest.md)
 - [User](docs/User.md)
 - [UserPermissions](docs/UserPermissions.md)
 - [View](docs/View.md)
 - [Workstream](docs/Workstream.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="bearerAuth"></a>
### bearerAuth

- **Type**: Bearer authentication

