# DefaultApi

All URIs are relative to *https://api.runn.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**activityLogGet**](#activitylogget) | **GET** /activity-log/ | List events|
|[**actualsActualIdDelete**](#actualsactualiddelete) | **DELETE** /actuals/{actualId}/ | Delete a specific actual|
|[**actualsBulkPost**](#actualsbulkpost) | **POST** /actuals/bulk/ | Create or update actuals in bulk|
|[**actualsGet**](#actualsget) | **GET** /actuals/ | List actuals|
|[**actualsPost**](#actualspost) | **POST** /actuals/ | Create or update an actual|
|[**actualsTimeEntryPost**](#actualstimeentrypost) | **POST** /actuals/time-entry | Update an actual|
|[**assignmentsAssignmentIdDelete**](#assignmentsassignmentiddelete) | **DELETE** /assignments/{assignmentId}/ | Delete an assignment|
|[**assignmentsGet**](#assignmentsget) | **GET** /assignments/ | List assignments|
|[**assignmentsPost**](#assignmentspost) | **POST** /assignments/ | Create an assignment|
|[**budgetRolesGet**](#budgetrolesget) | **GET** /budget-roles/ | List budget roles|
|[**clientsBulkPost**](#clientsbulkpost) | **POST** /clients/bulk/ | Create clients in bulk|
|[**clientsClientIdGet**](#clientsclientidget) | **GET** /clients/{clientId} | Show a client|
|[**clientsClientIdPatch**](#clientsclientidpatch) | **PATCH** /clients/{clientId} | Update a client|
|[**clientsClientIdProjectsGet**](#clientsclientidprojectsget) | **GET** /clients/{clientId}/projects/ | List a client\&#39;s projects|
|[**clientsGet**](#clientsget) | **GET** /clients/ | List clients|
|[**clientsPost**](#clientspost) | **POST** /clients/ | Create a client|
|[**contractsContractIdPatch**](#contractscontractidpatch) | **PATCH** /contracts/{contractId} | Update a contract|
|[**contractsGet**](#contractsget) | **GET** /contracts/ | List contracts|
|[**customFieldsCheckboxCheckboxFieldIdDelete**](#customfieldscheckboxcheckboxfieldiddelete) | **DELETE** /custom-fields/checkbox/{checkboxFieldId} | Delete a checkbox custom field|
|[**customFieldsCheckboxCheckboxFieldIdPatch**](#customfieldscheckboxcheckboxfieldidpatch) | **PATCH** /custom-fields/checkbox/{checkboxFieldId} | Update a checkbox custom field|
|[**customFieldsCheckboxGet**](#customfieldscheckboxget) | **GET** /custom-fields/checkbox/ | List checkbox custom fields|
|[**customFieldsCheckboxPost**](#customfieldscheckboxpost) | **POST** /custom-fields/checkbox/ | Create a checkbox custom field|
|[**customFieldsDateDateFieldIdPatch**](#customfieldsdatedatefieldidpatch) | **PATCH** /custom-fields/date/{dateFieldId} | Update a date custom field|
|[**customFieldsDateGet**](#customfieldsdateget) | **GET** /custom-fields/date/ | List date custom fields|
|[**customFieldsDateIdDelete**](#customfieldsdateiddelete) | **DELETE** /custom-fields/date/{id} | Delete a date custom field|
|[**customFieldsDatePost**](#customfieldsdatepost) | **POST** /custom-fields/date/ | Create a date custom field|
|[**customFieldsSelectGet**](#customfieldsselectget) | **GET** /custom-fields/select/ | Show a select custom field|
|[**customFieldsSelectPost**](#customfieldsselectpost) | **POST** /custom-fields/select/ | Create a select custom field|
|[**customFieldsSelectSelectFieldIdDelete**](#customfieldsselectselectfieldiddelete) | **DELETE** /custom-fields/select/{selectFieldId} | Delete a select custom field|
|[**customFieldsSelectSelectFieldIdOptionsPost**](#customfieldsselectselectfieldidoptionspost) | **POST** /custom-fields/select/{selectFieldId}/options | Create a select custom field option|
|[**customFieldsSelectSelectFieldIdOptionsSelectOptionIdDelete**](#customfieldsselectselectfieldidoptionsselectoptioniddelete) | **DELETE** /custom-fields/select/{selectFieldId}/options/{selectOptionId} | Delete a select custom field option|
|[**customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatch**](#customfieldsselectselectfieldidoptionsselectoptionidpatch) | **PATCH** /custom-fields/select/{selectFieldId}/options/{selectOptionId} | Update a select custom field option|
|[**customFieldsSelectSelectFieldIdPatch**](#customfieldsselectselectfieldidpatch) | **PATCH** /custom-fields/select/{selectFieldId} | Update a select custom field|
|[**customFieldsTextGet**](#customfieldstextget) | **GET** /custom-fields/text/ | Show a text custom field|
|[**customFieldsTextPost**](#customfieldstextpost) | **POST** /custom-fields/text/ | Create a text custom field|
|[**customFieldsTextTextFieldIdDelete**](#customfieldstexttextfieldiddelete) | **DELETE** /custom-fields/text/{textFieldId} | Delete a text custom field|
|[**customFieldsTextTextFieldIdPatch**](#customfieldstexttextfieldidpatch) | **PATCH** /custom-fields/text/{textFieldId} | Update a text custom field|
|[**holidayGroupsGet**](#holidaygroupsget) | **GET** /holiday-groups/ | List holiday groups|
|[**holidayGroupsHolidayGroupIdGet**](#holidaygroupsholidaygroupidget) | **GET** /holiday-groups/{holidayGroupId} | Show a holiday group|
|[**holidayGroupsHolidayGroupIdHolidaysGet**](#holidaygroupsholidaygroupidholidaysget) | **GET** /holiday-groups/{holidayGroupId}/holidays | Show holidays for a holiday group|
|[**invitationsGet**](#invitationsget) | **GET** /invitations/ | List invitations|
|[**invitationsInvitationIdDelete**](#invitationsinvitationiddelete) | **DELETE** /invitations/{invitationId} | Delete an invitation|
|[**invitationsPost**](#invitationspost) | **POST** /invitations/ | Create an invitation for a user|
|[**legacyIdModelLegacyIdGet**](#legacyidmodellegacyidget) | **GET** /legacy-id/{model}/{legacyId} | Convert a legacy ID from API v0 to a new ID|
|[**meGet**](#meget) | **GET** /me/ | Who am I?|
|[**milestonesGet**](#milestonesget) | **GET** /milestones/ | List project milestones|
|[**otherExpensesGet**](#otherexpensesget) | **GET** /other-expenses/ | List other expenses|
|[**peopleContractsCurrentGet**](#peoplecontractscurrentget) | **GET** /people/contracts/current | List people current contracts|
|[**peopleCustomFieldsGet**](#peoplecustomfieldsget) | **GET** /people/custom-fields | List people custom fields|
|[**peopleGet**](#peopleget) | **GET** /people/ | List people|
|[**peopleNotesGet**](#peoplenotesget) | **GET** /people/notes | List people notes|
|[**peoplePersonIdActualsGet**](#peoplepersonidactualsget) | **GET** /people/{personId}/actuals/ | List actuals for a person|
|[**peoplePersonIdAssignmentsGet**](#peoplepersonidassignmentsget) | **GET** /people/{personId}/assignments/ | List assignments for a person or placeholder|
|[**peoplePersonIdContractsContractIdDelete**](#peoplepersonidcontractscontractiddelete) | **DELETE** /people/{personId}/contracts/{contractId} | Delete a contract for a person|
|[**peoplePersonIdContractsCurrentGet**](#peoplepersonidcontractscurrentget) | **GET** /people/{personId}/contracts/current | Show current contract for a person|
|[**peoplePersonIdContractsGet**](#peoplepersonidcontractsget) | **GET** /people/{personId}/contracts/ | List contracts for a person|
|[**peoplePersonIdContractsPost**](#peoplepersonidcontractspost) | **POST** /people/{personId}/contracts/ | Add a new contract to a person|
|[**peoplePersonIdCustomFieldsCheckboxPatch**](#peoplepersonidcustomfieldscheckboxpatch) | **PATCH** /people/{personId}/custom-fields/checkbox/ | Add a checkbox custom value to a person or placeholder|
|[**peoplePersonIdCustomFieldsDatePatch**](#peoplepersonidcustomfieldsdatepatch) | **PATCH** /people/{personId}/custom-fields/date/ | Add a date custom value to a person or placeholder|
|[**peoplePersonIdCustomFieldsSelectPatch**](#peoplepersonidcustomfieldsselectpatch) | **PATCH** /people/{personId}/custom-fields/select/ | Add custom select options to a person or placeholder|
|[**peoplePersonIdCustomFieldsTextPatch**](#peoplepersonidcustomfieldstextpatch) | **PATCH** /people/{personId}/custom-fields/text/ | Add a text custom value to a person or placeholder|
|[**peoplePersonIdDelete**](#peoplepersoniddelete) | **DELETE** /people/{personId} | Delete a person or placeholder|
|[**peoplePersonIdGet**](#peoplepersonidget) | **GET** /people/{personId} | Show a person or placeholder|
|[**peoplePersonIdPatch**](#peoplepersonidpatch) | **PATCH** /people/{personId} | Update a person or placeholder|
|[**peoplePersonIdProjectsGet**](#peoplepersonidprojectsget) | **GET** /people/{personId}/projects/ | List projects for a person or placeholder|
|[**peoplePersonIdProjectsPost**](#peoplepersonidprojectspost) | **POST** /people/{personId}/projects/ | Add project to a person or placeholder|
|[**peoplePersonIdSkillsGet**](#peoplepersonidskillsget) | **GET** /people/{personId}/skills/ | List skills for a person or placeholder|
|[**peoplePersonIdSkillsPost**](#peoplepersonidskillspost) | **POST** /people/{personId}/skills/ | Add a skill to a person or placeholder|
|[**peoplePersonIdSkillsSkillIdDelete**](#peoplepersonidskillsskilliddelete) | **DELETE** /people/{personId}/skills/{skillId} | Remove a skill from a person or placeholder|
|[**peoplePersonIdSkillsSkillIdPatch**](#peoplepersonidskillsskillidpatch) | **PATCH** /people/{personId}/skills/{skillId} | Update a skill for a person or placeholder|
|[**peoplePersonIdTeamsCurrentGet**](#peoplepersonidteamscurrentget) | **GET** /people/{personId}/teams/current | Show current team for a person or placeholder|
|[**peoplePersonIdTeamsPost**](#peoplepersonidteamspost) | **POST** /people/{personId}/teams/ | Add a person or placeholder to a team|
|[**peoplePersonIdTeamsTeamIdDelete**](#peoplepersonidteamsteamiddelete) | **DELETE** /people/{personId}/teams/{teamId} | Remove a person or placeholder from a team|
|[**peoplePersonIdTimeOffsHolidaysGet**](#peoplepersonidtimeoffsholidaysget) | **GET** /people/{personId}/time-offs/holidays | List holidays for a person|
|[**peoplePersonIdTimeOffsLeaveGet**](#peoplepersonidtimeoffsleaveget) | **GET** /people/{personId}/time-offs/leave | List leave for a person|
|[**peoplePersonIdTimeOffsRosteredOffGet**](#peoplepersonidtimeoffsrosteredoffget) | **GET** /people/{personId}/time-offs/rostered-off | List rostered time offs for a person|
|[**peoplePost**](#peoplepost) | **POST** /people/ | Create a person|
|[**peopleSkillsGet**](#peopleskillsget) | **GET** /people/skills | List people skills|
|[**peopleTagsGet**](#peopletagsget) | **GET** /people-tags/ | List people tags|
|[**peopleTagsPeopleTagIdDelete**](#peopletagspeopletagiddelete) | **DELETE** /people-tags/{peopleTagId} | Delete a people tag|
|[**peopleTagsPeopleTagIdGet**](#peopletagspeopletagidget) | **GET** /people-tags/{peopleTagId} | Show a people tag|
|[**peopleTagsPeopleTagIdPatch**](#peopletagspeopletagidpatch) | **PATCH** /people-tags/{peopleTagId} | Update a people tag|
|[**peopleTagsPost**](#peopletagspost) | **POST** /people-tags/ | Create a people tag|
|[**personRequestsGet**](#personrequestsget) | **GET** /person-requests/ | List person requests|
|[**phasesGet**](#phasesget) | **GET** /phases/ | List phases|
|[**placeholdersGet**](#placeholdersget) | **GET** /placeholders/ | List placeholders|
|[**placeholdersPlaceholderIdSkillsPost**](#placeholdersplaceholderidskillspost) | **POST** /placeholders/{placeholderId}/skills/ | Add a skill to a placeholder|
|[**placeholdersPlaceholderIdSkillsSkillIdDelete**](#placeholdersplaceholderidskillsskilliddelete) | **DELETE** /placeholders/{placeholderId}/skills/{skillId} | Remove a skill from a placeholder|
|[**placeholdersPlaceholderIdTeamsPost**](#placeholdersplaceholderidteamspost) | **POST** /placeholders/{placeholderId}/teams/ | Add a placeholder to a team|
|[**placeholdersPlaceholderIdTeamsTeamIdDelete**](#placeholdersplaceholderidteamsteamiddelete) | **DELETE** /placeholders/{placeholderId}/teams/{teamId} | Remove a placeholder from a team|
|[**placeholdersPost**](#placeholderspost) | **POST** /placeholders/ | Create a placeholder|
|[**projectMembersGet**](#projectmembersget) | **GET** /project-members/ | List members of projects|
|[**projectNotesGet**](#projectnotesget) | **GET** /project-notes/ | List project notes|
|[**projectRatesGet**](#projectratesget) | **GET** /project-rates/ | List role rates|
|[**projectTagsGet**](#projecttagsget) | **GET** /project-tags/ | List project tags|
|[**projectTagsPost**](#projecttagspost) | **POST** /project-tags/ | Create a project tag|
|[**projectTagsProjectTagIdGet**](#projecttagsprojecttagidget) | **GET** /project-tags/{projectTagId} | Show a project tag|
|[**projectTagsProjectTagIdPatch**](#projecttagsprojecttagidpatch) | **PATCH** /project-tags/{projectTagId} | Update a project tag|
|[**projectTagsProjectTagIdProjectProjectIdDelete**](#projecttagsprojecttagidprojectprojectiddelete) | **DELETE** /project-tags/{projectTagId}/project/{projectId} | Remove a project tag from a project|
|[**projectTagsProjectTagIdProjectProjectIdPost**](#projecttagsprojecttagidprojectprojectidpost) | **POST** /project-tags/{projectTagId}/project/{projectId} | Add a project tag to a project|
|[**projectWorkstreamsGet**](#projectworkstreamsget) | **GET** /project-workstreams/ | List project workstreams|
|[**projectsCustomFieldsGet**](#projectscustomfieldsget) | **GET** /projects/custom-fields | List project custom fields|
|[**projectsGet**](#projectsget) | **GET** /projects/ | List projects|
|[**projectsPost**](#projectspost) | **POST** /projects/ | Create a project|
|[**projectsProjectIdActualsGet**](#projectsprojectidactualsget) | **GET** /projects/{projectId}/actuals/ | List actuals for a project|
|[**projectsProjectIdAssignmentsGet**](#projectsprojectidassignmentsget) | **GET** /projects/{projectId}/assignments/ | List assignments for a project|
|[**projectsProjectIdBudgetRolesGet**](#projectsprojectidbudgetrolesget) | **GET** /projects/{projectId}/budget-roles/ | Get a paginated list of project budget roles for a project|
|[**projectsProjectIdBudgetRolesPost**](#projectsprojectidbudgetrolespost) | **POST** /projects/{projectId}/budget-roles/ | Create a project budget role|
|[**projectsProjectIdBudgetRolesRoleIdDelete**](#projectsprojectidbudgetrolesroleiddelete) | **DELETE** /projects/{projectId}/budget-roles/{roleId} | Delete a project budget role|
|[**projectsProjectIdBudgetRolesRoleIdGet**](#projectsprojectidbudgetrolesroleidget) | **GET** /projects/{projectId}/budget-roles/{roleId} | Get a project budget role|
|[**projectsProjectIdBudgetRolesRoleIdPatch**](#projectsprojectidbudgetrolesroleidpatch) | **PATCH** /projects/{projectId}/budget-roles/{roleId} | Update a project budget role|
|[**projectsProjectIdCustomFieldsCheckboxPatch**](#projectsprojectidcustomfieldscheckboxpatch) | **PATCH** /projects/{projectId}/custom-fields/checkbox/ | Add a checkbox custom value to a project|
|[**projectsProjectIdCustomFieldsDatePatch**](#projectsprojectidcustomfieldsdatepatch) | **PATCH** /projects/{projectId}/custom-fields/date/ | Add a date custom field value to a project|
|[**projectsProjectIdCustomFieldsSelectPatch**](#projectsprojectidcustomfieldsselectpatch) | **PATCH** /projects/{projectId}/custom-fields/select/ | Add a select custom field to a project|
|[**projectsProjectIdCustomFieldsTextPatch**](#projectsprojectidcustomfieldstextpatch) | **PATCH** /projects/{projectId}/custom-fields/text/ | Add a text custom field value to a project|
|[**projectsProjectIdDelete**](#projectsprojectiddelete) | **DELETE** /projects/{projectId}/ | Delete a project|
|[**projectsProjectIdGet**](#projectsprojectidget) | **GET** /projects/{projectId} | Show a project|
|[**projectsProjectIdMilestonesGet**](#projectsprojectidmilestonesget) | **GET** /projects/{projectId}/milestones/ | List milestones for a project|
|[**projectsProjectIdMilestonesMilestoneIdDelete**](#projectsprojectidmilestonesmilestoneiddelete) | **DELETE** /projects/{projectId}/milestones/{milestoneId} | Delete a milestone for a project|
|[**projectsProjectIdMilestonesMilestoneIdPatch**](#projectsprojectidmilestonesmilestoneidpatch) | **PATCH** /projects/{projectId}/milestones/{milestoneId} | Update a milestone for a project|
|[**projectsProjectIdMilestonesPost**](#projectsprojectidmilestonespost) | **POST** /projects/{projectId}/milestones/ | Create a milestone for a project|
|[**projectsProjectIdNotesGet**](#projectsprojectidnotesget) | **GET** /projects/{projectId}/notes/ | List notes for a project|
|[**projectsProjectIdNotesPost**](#projectsprojectidnotespost) | **POST** /projects/{projectId}/notes/ | Create a project note|
|[**projectsProjectIdOtherExpensesGet**](#projectsprojectidotherexpensesget) | **GET** /projects/{projectId}/other-expenses/ | List other expenses for a project|
|[**projectsProjectIdOtherExpensesOtherExpenseIdPatch**](#projectsprojectidotherexpensesotherexpenseidpatch) | **PATCH** /projects/{projectId}/other-expenses/{otherExpenseId}/ | Update an other expense on a project|
|[**projectsProjectIdOtherExpensesPost**](#projectsprojectidotherexpensespost) | **POST** /projects/{projectId}/other-expenses/ | Create an other expense for a project|
|[**projectsProjectIdPatch**](#projectsprojectidpatch) | **PATCH** /projects/{projectId} | Update a project|
|[**projectsProjectIdPeopleGet**](#projectsprojectidpeopleget) | **GET** /projects/{projectId}/people/ | List people assigned to a project|
|[**projectsProjectIdPersonRequestsGet**](#projectsprojectidpersonrequestsget) | **GET** /projects/{projectId}/person-requests/ | List the person requests for a project|
|[**projectsProjectIdPersonRequestsPersonRequestIdGet**](#projectsprojectidpersonrequestspersonrequestidget) | **GET** /projects/{projectId}/person-requests/{personRequestId} | Show a single person request for a project|
|[**projectsProjectIdPersonRequestsPersonRequestIdPatch**](#projectsprojectidpersonrequestspersonrequestidpatch) | **PATCH** /projects/{projectId}/person-requests/{personRequestId} | Update the status of a person request on a project|
|[**projectsProjectIdPersonRequestsPost**](#projectsprojectidpersonrequestspost) | **POST** /projects/{projectId}/person-requests/ | Create a person request on a project|
|[**projectsProjectIdPhasesGet**](#projectsprojectidphasesget) | **GET** /projects/{projectId}/phases/ | List phases for a project|
|[**projectsProjectIdPhasesPhaseIdDelete**](#projectsprojectidphasesphaseiddelete) | **DELETE** /projects/{projectId}/phases/{phaseId} | Delete a phase for a project|
|[**projectsProjectIdPhasesPhaseIdGet**](#projectsprojectidphasesphaseidget) | **GET** /projects/{projectId}/phases/{phaseId} | Show a phase for a project|
|[**projectsProjectIdPhasesPhaseIdPatch**](#projectsprojectidphasesphaseidpatch) | **PATCH** /projects/{projectId}/phases/{phaseId} | Update a phase for a project|
|[**projectsProjectIdPhasesPost**](#projectsprojectidphasespost) | **POST** /projects/{projectId}/phases/ | Create a phase for a project|
|[**projectsProjectIdProjectRatesGet**](#projectsprojectidprojectratesget) | **GET** /projects/{projectId}/project-rates/ | List role rates for a project|
|[**projectsProjectIdProjectRatesProjectRateIdPatch**](#projectsprojectidprojectratesprojectrateidpatch) | **PATCH** /projects/{projectId}/project-rates/{projectRateId}/ | Update a rate for a role on a project|
|[**projectsProjectIdProjectWorkstreamsGet**](#projectsprojectidprojectworkstreamsget) | **GET** /projects/{projectId}/project-workstreams/ | List workstreams assigned to a project|
|[**projectsProjectIdProjectWorkstreamsWorkstreamIdDelete**](#projectsprojectidprojectworkstreamsworkstreamiddelete) | **DELETE** /projects/{projectId}/project-workstreams/{workstreamId}/ | Delete project workstream|
|[**projectsProjectIdProjectWorkstreamsWorkstreamIdGet**](#projectsprojectidprojectworkstreamsworkstreamidget) | **GET** /projects/{projectId}/project-workstreams/{workstreamId}/ | View project workstream|
|[**projectsProjectIdProjectWorkstreamsWorkstreamIdPost**](#projectsprojectidprojectworkstreamsworkstreamidpost) | **POST** /projects/{projectId}/project-workstreams/{workstreamId}/ | Add a workstream to a project|
|[**projectsProjectIdTimesheetLockGet**](#projectsprojectidtimesheetlockget) | **GET** /projects/{projectId}/timesheet-lock/ | Show a timesheet lock for a project|
|[**projectsProjectIdTimesheetLockPatch**](#projectsprojectidtimesheetlockpatch) | **PATCH** /projects/{projectId}/timesheet-lock/ | Update a timesheet lock for a project|
|[**rateCardsGet**](#ratecardsget) | **GET** /rate-cards/ | List rate cards|
|[**rateCardsPost**](#ratecardspost) | **POST** /rate-cards/ | Create a rate card|
|[**rateCardsRateCardIdDelete**](#ratecardsratecardiddelete) | **DELETE** /rate-cards/{rateCardId} | Delete a rate card|
|[**rateCardsRateCardIdGet**](#ratecardsratecardidget) | **GET** /rate-cards/{rateCardId} | Show a rate card|
|[**rateCardsRateCardIdPatch**](#ratecardsratecardidpatch) | **PATCH** /rate-cards/{rateCardId} | Update a rate card|
|[**reportsHoursPeoplePersonIdGet**](#reportshourspeoplepersonidget) | **GET** /reports/hours/people/{personId} | Get by-day entries for a person with assignments and actuals|
|[**reportsHoursProjectsProjectIdGet**](#reportshoursprojectsprojectidget) | **GET** /reports/hours/projects/{projectId} | Get by-day entries for a project with assignments and actuals|
|[**reportsPeoplePersonIdGet**](#reportspeoplepersonidget) | **GET** /reports/people/{personId}/ | Show metrics (beta)|
|[**reportsProjectsProjectIdGet**](#reportsprojectsprojectidget) | **GET** /reports/projects/{projectId}/ | Show metrics (beta)|
|[**reportsTotalsProjectsGet**](#reportstotalsprojectsget) | **GET** /reports/totals/projects/ | List totals for projects with assignments and actuals|
|[**reportsTotalsProjectsProjectIdGet**](#reportstotalsprojectsprojectidget) | **GET** /reports/totals/projects/{projectId} | Show totals for a project with assignments and actuals|
|[**rolesGet**](#rolesget) | **GET** /roles/ | List roles|
|[**rolesPost**](#rolespost) | **POST** /roles/ | Create a role|
|[**rolesRoleIdGet**](#rolesroleidget) | **GET** /roles/{roleId} | Show a role|
|[**rolesRoleIdPatch**](#rolesroleidpatch) | **PATCH** /roles/{roleId} | Update a role|
|[**skillsGet**](#skillsget) | **GET** /skills/ | List skills|
|[**skillsPost**](#skillspost) | **POST** /skills/ | Create a skill|
|[**skillsSkillIdDelete**](#skillsskilliddelete) | **DELETE** /skills/{skillId} | Delete a skill|
|[**skillsSkillIdGet**](#skillsskillidget) | **GET** /skills/{skillId} | Show a skill|
|[**skillsSkillIdPatch**](#skillsskillidpatch) | **PATCH** /skills/{skillId} | Update a skill|
|[**skillsSkillIdPeopleGet**](#skillsskillidpeopleget) | **GET** /skills/{skillId}/people/ | List people for a skill|
|[**skillsSkillIdPeoplePost**](#skillsskillidpeoplepost) | **POST** /skills/{skillId}/people/ | Add people to a skill|
|[**teamsGet**](#teamsget) | **GET** /teams/ | List teams|
|[**teamsPost**](#teamspost) | **POST** /teams/ | Create a team|
|[**teamsTeamIdDelete**](#teamsteamiddelete) | **DELETE** /teams/{teamId}/ | Delete a team|
|[**teamsTeamIdGet**](#teamsteamidget) | **GET** /teams/{teamId}/ | Show a team|
|[**teamsTeamIdPatch**](#teamsteamidpatch) | **PATCH** /teams/{teamId}/ | Update a team|
|[**teamsTeamIdPeopleGet**](#teamsteamidpeopleget) | **GET** /teams/{teamId}/people/ | List people in a team|
|[**timeOffsHolidaysGet**](#timeoffsholidaysget) | **GET** /time-offs/holidays/ | List holiday time offs|
|[**timeOffsHolidaysPost**](#timeoffsholidayspost) | **POST** /time-offs/holidays/ | Create a holiday time off|
|[**timeOffsHolidaysTimeOffIdDelete**](#timeoffsholidaystimeoffiddelete) | **DELETE** /time-offs/holidays/{timeOffId} | Delete a holiday time off|
|[**timeOffsLeaveBulkDelete**](#timeoffsleavebulkdelete) | **DELETE** /time-offs/leave/bulk/ | Delete leave time offs in bulk|
|[**timeOffsLeaveBulkPost**](#timeoffsleavebulkpost) | **POST** /time-offs/leave/bulk/ | Create leave time offs in bulk|
|[**timeOffsLeaveGet**](#timeoffsleaveget) | **GET** /time-offs/leave/ | List leave time offs|
|[**timeOffsLeavePost**](#timeoffsleavepost) | **POST** /time-offs/leave/ | Create a leave time off|
|[**timeOffsLeaveTimeOffIdDelete**](#timeoffsleavetimeoffiddelete) | **DELETE** /time-offs/leave/{timeOffId}/ | Delete a leave time off|
|[**timeOffsLeaveTimeOffIdGet**](#timeoffsleavetimeoffidget) | **GET** /time-offs/leave/{timeOffId}/ | Show a leave time off|
|[**timeOffsRosteredOffGet**](#timeoffsrosteredoffget) | **GET** /time-offs/rostered-off/ | List rostered time offs|
|[**timeOffsRosteredOffTimeOffIdDelete**](#timeoffsrosteredofftimeoffiddelete) | **DELETE** /time-offs/rostered-off/{timeOffId} | Delete a rostered time off|
|[**usersGet**](#usersget) | **GET** /users/ | List users|
|[**usersUserIdDelete**](#usersuseriddelete) | **DELETE** /users/{userId} | Delete a user|
|[**usersUserIdGet**](#usersuseridget) | **GET** /users/{userId} | Show a user|
|[**usersUserIdViewsGet**](#usersuseridviewsget) | **GET** /users/{userId}/views/ | List allocated views for a user|
|[**usersUserIdViewsViewIdDelete**](#usersuseridviewsviewiddelete) | **DELETE** /users/{userId}/views/{viewId}/ | Remove allocated view from user|
|[**usersUserIdViewsViewIdPost**](#usersuseridviewsviewidpost) | **POST** /users/{userId}/views/{viewId} | Allocate a view to a user|
|[**viewsGet**](#viewsget) | **GET** /views/ | List views|
|[**workstreamsGet**](#workstreamsget) | **GET** /workstreams/ | List workstreams|
|[**workstreamsPost**](#workstreamspost) | **POST** /workstreams/ | Create a workstream|
|[**workstreamsWorkstreamIdDelete**](#workstreamsworkstreamiddelete) | **DELETE** /workstreams/{workstreamId}/ | Delete a workstream|
|[**workstreamsWorkstreamIdGet**](#workstreamsworkstreamidget) | **GET** /workstreams/{workstreamId}/ | Show a workstream|
|[**workstreamsWorkstreamIdPatch**](#workstreamsworkstreamidpatch) | **PATCH** /workstreams/{workstreamId}/ | Update a workstream|

# **activityLogGet**
> ActivityLogGet200Response activityLogGet()

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

const { status, data } = await apiInstance.activityLogGet(
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

**ActivityLogGet200Response**

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

# **actualsActualIdDelete**
> actualsActualIdDelete()

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

const { status, data } = await apiInstance.actualsActualIdDelete(
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

# **actualsBulkPost**
> Array<Actual> actualsBulkPost(actualsBulkPostRequest)

Create or update up to 100 \'actuals\' in a single API call. [Learn more](https://developer.runn.io/docs/actuals-notes).

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ActualsBulkPostRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let actualsBulkPostRequest: ActualsBulkPostRequest; //

const { status, data } = await apiInstance.actualsBulkPost(
    acceptVersion,
    actualsBulkPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **actualsBulkPostRequest** | **ActualsBulkPostRequest**|  | |
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
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **actualsGet**
> ActualsGet200Response actualsGet()


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

const { status, data } = await apiInstance.actualsGet(
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

**ActualsGet200Response**

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

# **actualsPost**
> Actual actualsPost(actualInput)

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
let actualInput: ActualInput; //

const { status, data } = await apiInstance.actualsPost(
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

# **actualsTimeEntryPost**
> Actual actualsTimeEntryPost(actualTimeEntry)

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
let actualTimeEntry: ActualTimeEntry; //

const { status, data } = await apiInstance.actualsTimeEntryPost(
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

# **assignmentsAssignmentIdDelete**
> Assignment assignmentsAssignmentIdDelete()


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

const { status, data } = await apiInstance.assignmentsAssignmentIdDelete(
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

# **assignmentsGet**
> AssignmentsGet200Response assignmentsGet()

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

const { status, data } = await apiInstance.assignmentsGet(
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

**AssignmentsGet200Response**

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

# **assignmentsPost**
> Array<Assignment> assignmentsPost(assignmentsPostRequest)

Creates a new assignment and returns a list of assignments. If the specified time period of the assignment overlaps with scheduled leave, the assignment is split into multiple segments. Each segment is returned as a separate assignment in the response.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    AssignmentsPostRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let assignmentsPostRequest: AssignmentsPostRequest; //

const { status, data } = await apiInstance.assignmentsPost(
    acceptVersion,
    assignmentsPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assignmentsPostRequest** | **AssignmentsPostRequest**|  | |
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

# **budgetRolesGet**
> BudgetRolesGet200Response budgetRolesGet()

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

const { status, data } = await apiInstance.budgetRolesGet(
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

**BudgetRolesGet200Response**

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

# **clientsBulkPost**
> Array<Client> clientsBulkPost(clientsBulkPostRequest)

Create up to 100 \'clients\' in a single API call. [Learn more](https://developer.runn.io/docs/clients-notes).

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ClientsBulkPostRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let clientsBulkPostRequest: ClientsBulkPostRequest; //

const { status, data } = await apiInstance.clientsBulkPost(
    acceptVersion,
    clientsBulkPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientsBulkPostRequest** | **ClientsBulkPostRequest**|  | |
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

# **clientsClientIdGet**
> Client clientsClientIdGet()


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

const { status, data } = await apiInstance.clientsClientIdGet(
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

# **clientsClientIdPatch**
> Client clientsClientIdPatch(clientsClientIdPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ClientsClientIdPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let clientId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let clientsClientIdPatchRequest: ClientsClientIdPatchRequest; //

const { status, data } = await apiInstance.clientsClientIdPatch(
    clientId,
    acceptVersion,
    clientsClientIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientsClientIdPatchRequest** | **ClientsClientIdPatchRequest**|  | |
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

# **clientsClientIdProjectsGet**
> ClientsClientIdProjectsGet200Response clientsClientIdProjectsGet()


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

const { status, data } = await apiInstance.clientsClientIdProjectsGet(
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

**ClientsClientIdProjectsGet200Response**

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

# **clientsGet**
> ClientsGet200Response clientsGet()


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

const { status, data } = await apiInstance.clientsGet(
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

**ClientsGet200Response**

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

# **clientsPost**
> Client clientsPost(clientInput)


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
let clientInput: ClientInput; //

const { status, data } = await apiInstance.clientsPost(
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

# **contractsContractIdPatch**
> Contract contractsContractIdPatch(contractsContractIdPatchRequest)

Update a contract

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ContractsContractIdPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let contractId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let contractsContractIdPatchRequest: ContractsContractIdPatchRequest; //

const { status, data } = await apiInstance.contractsContractIdPatch(
    contractId,
    acceptVersion,
    contractsContractIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contractsContractIdPatchRequest** | **ContractsContractIdPatchRequest**|  | |
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

# **contractsGet**
> ContractsGet200Response contractsGet()

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

const { status, data } = await apiInstance.contractsGet(
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

**ContractsGet200Response**

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

# **customFieldsCheckboxCheckboxFieldIdDelete**
> customFieldsCheckboxCheckboxFieldIdDelete()


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

const { status, data } = await apiInstance.customFieldsCheckboxCheckboxFieldIdDelete(
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

# **customFieldsCheckboxCheckboxFieldIdPatch**
> CustomFieldCheckbox customFieldsCheckboxCheckboxFieldIdPatch(customFieldsCheckboxCheckboxFieldIdPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CustomFieldsCheckboxCheckboxFieldIdPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let checkboxFieldId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let customFieldsCheckboxCheckboxFieldIdPatchRequest: CustomFieldsCheckboxCheckboxFieldIdPatchRequest; //

const { status, data } = await apiInstance.customFieldsCheckboxCheckboxFieldIdPatch(
    checkboxFieldId,
    acceptVersion,
    customFieldsCheckboxCheckboxFieldIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customFieldsCheckboxCheckboxFieldIdPatchRequest** | **CustomFieldsCheckboxCheckboxFieldIdPatchRequest**|  | |
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

# **customFieldsCheckboxGet**
> CustomFieldsCheckboxGet200Response customFieldsCheckboxGet()


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

const { status, data } = await apiInstance.customFieldsCheckboxGet(
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

**CustomFieldsCheckboxGet200Response**

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

# **customFieldsCheckboxPost**
> CustomFieldCheckbox customFieldsCheckboxPost(customFieldsCheckboxPostRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CustomFieldsCheckboxPostRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let customFieldsCheckboxPostRequest: CustomFieldsCheckboxPostRequest; //

const { status, data } = await apiInstance.customFieldsCheckboxPost(
    acceptVersion,
    customFieldsCheckboxPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customFieldsCheckboxPostRequest** | **CustomFieldsCheckboxPostRequest**|  | |
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

# **customFieldsDateDateFieldIdPatch**
> CustomFieldDate customFieldsDateDateFieldIdPatch(customFieldsDateDateFieldIdPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CustomFieldsDateDateFieldIdPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let dateFieldId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let customFieldsDateDateFieldIdPatchRequest: CustomFieldsDateDateFieldIdPatchRequest; //

const { status, data } = await apiInstance.customFieldsDateDateFieldIdPatch(
    dateFieldId,
    acceptVersion,
    customFieldsDateDateFieldIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customFieldsDateDateFieldIdPatchRequest** | **CustomFieldsDateDateFieldIdPatchRequest**|  | |
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

# **customFieldsDateGet**
> CustomFieldsDateGet200Response customFieldsDateGet()


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

const { status, data } = await apiInstance.customFieldsDateGet(
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

**CustomFieldsDateGet200Response**

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

# **customFieldsDateIdDelete**
> customFieldsDateIdDelete()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')

const { status, data } = await apiInstance.customFieldsDateIdDelete(
    id,
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|
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

# **customFieldsDatePost**
> CustomFieldDate customFieldsDatePost(customFieldsDatePostRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CustomFieldsDatePostRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let customFieldsDatePostRequest: CustomFieldsDatePostRequest; //

const { status, data } = await apiInstance.customFieldsDatePost(
    acceptVersion,
    customFieldsDatePostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customFieldsDatePostRequest** | **CustomFieldsDatePostRequest**|  | |
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

# **customFieldsSelectGet**
> CustomFieldsSelectGet200Response customFieldsSelectGet()


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

const { status, data } = await apiInstance.customFieldsSelectGet(
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

**CustomFieldsSelectGet200Response**

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

# **customFieldsSelectPost**
> CustomFieldSelect customFieldsSelectPost(customFieldsSelectPostRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CustomFieldsSelectPostRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let customFieldsSelectPostRequest: CustomFieldsSelectPostRequest; //

const { status, data } = await apiInstance.customFieldsSelectPost(
    acceptVersion,
    customFieldsSelectPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customFieldsSelectPostRequest** | **CustomFieldsSelectPostRequest**|  | |
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

# **customFieldsSelectSelectFieldIdDelete**
> customFieldsSelectSelectFieldIdDelete()


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

const { status, data } = await apiInstance.customFieldsSelectSelectFieldIdDelete(
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

# **customFieldsSelectSelectFieldIdOptionsPost**
> CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatch200Response customFieldsSelectSelectFieldIdOptionsPost(customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let selectFieldId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest: CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest; //

const { status, data } = await apiInstance.customFieldsSelectSelectFieldIdOptionsPost(
    selectFieldId,
    acceptVersion,
    customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest** | **CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest**|  | |
| **selectFieldId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatch200Response**

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

# **customFieldsSelectSelectFieldIdOptionsSelectOptionIdDelete**
> customFieldsSelectSelectFieldIdOptionsSelectOptionIdDelete()


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

const { status, data } = await apiInstance.customFieldsSelectSelectFieldIdOptionsSelectOptionIdDelete(
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

# **customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatch**
> CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatch200Response customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatch(customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let selectFieldId: number; // (default to undefined)
let selectOptionId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest: CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest; //

const { status, data } = await apiInstance.customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatch(
    selectFieldId,
    selectOptionId,
    acceptVersion,
    customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest** | **CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest**|  | |
| **selectFieldId** | [**number**] |  | defaults to undefined|
| **selectOptionId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatch200Response**

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

# **customFieldsSelectSelectFieldIdPatch**
> CustomFieldSelect customFieldsSelectSelectFieldIdPatch(customFieldsCheckboxCheckboxFieldIdPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CustomFieldsCheckboxCheckboxFieldIdPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let selectFieldId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let customFieldsCheckboxCheckboxFieldIdPatchRequest: CustomFieldsCheckboxCheckboxFieldIdPatchRequest; //

const { status, data } = await apiInstance.customFieldsSelectSelectFieldIdPatch(
    selectFieldId,
    acceptVersion,
    customFieldsCheckboxCheckboxFieldIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customFieldsCheckboxCheckboxFieldIdPatchRequest** | **CustomFieldsCheckboxCheckboxFieldIdPatchRequest**|  | |
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

# **customFieldsTextGet**
> CustomFieldsTextGet200Response customFieldsTextGet()


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

const { status, data } = await apiInstance.customFieldsTextGet(
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

**CustomFieldsTextGet200Response**

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

# **customFieldsTextPost**
> CustomFieldText customFieldsTextPost(customFieldsCheckboxPostRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CustomFieldsCheckboxPostRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let customFieldsCheckboxPostRequest: CustomFieldsCheckboxPostRequest; //

const { status, data } = await apiInstance.customFieldsTextPost(
    acceptVersion,
    customFieldsCheckboxPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customFieldsCheckboxPostRequest** | **CustomFieldsCheckboxPostRequest**|  | |
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

# **customFieldsTextTextFieldIdDelete**
> customFieldsTextTextFieldIdDelete()


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

const { status, data } = await apiInstance.customFieldsTextTextFieldIdDelete(
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

# **customFieldsTextTextFieldIdPatch**
> CustomFieldText customFieldsTextTextFieldIdPatch(customFieldsCheckboxCheckboxFieldIdPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CustomFieldsCheckboxCheckboxFieldIdPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let textFieldId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let customFieldsCheckboxCheckboxFieldIdPatchRequest: CustomFieldsCheckboxCheckboxFieldIdPatchRequest; //

const { status, data } = await apiInstance.customFieldsTextTextFieldIdPatch(
    textFieldId,
    acceptVersion,
    customFieldsCheckboxCheckboxFieldIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customFieldsCheckboxCheckboxFieldIdPatchRequest** | **CustomFieldsCheckboxCheckboxFieldIdPatchRequest**|  | |
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

# **holidayGroupsGet**
> HolidayGroupsGet200Response holidayGroupsGet()


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

const { status, data } = await apiInstance.holidayGroupsGet(
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

**HolidayGroupsGet200Response**

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

# **holidayGroupsHolidayGroupIdGet**
> HolidayGroup holidayGroupsHolidayGroupIdGet()


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

const { status, data } = await apiInstance.holidayGroupsHolidayGroupIdGet(
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

# **holidayGroupsHolidayGroupIdHolidaysGet**
> HolidayGroupsHolidayGroupIdHolidaysGet200Response holidayGroupsHolidayGroupIdHolidaysGet()


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

const { status, data } = await apiInstance.holidayGroupsHolidayGroupIdHolidaysGet(
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

**HolidayGroupsHolidayGroupIdHolidaysGet200Response**

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

# **invitationsGet**
> InvitationsGet200Response invitationsGet()

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

const { status, data } = await apiInstance.invitationsGet(
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

**InvitationsGet200Response**

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

# **invitationsInvitationIdDelete**
> invitationsInvitationIdDelete()


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

const { status, data } = await apiInstance.invitationsInvitationIdDelete(
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

# **invitationsPost**
> Invitation invitationsPost(invitationsPostRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    InvitationsPostRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let invitationsPostRequest: InvitationsPostRequest; //

const { status, data } = await apiInstance.invitationsPost(
    acceptVersion,
    invitationsPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **invitationsPostRequest** | **InvitationsPostRequest**|  | |
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

# **legacyIdModelLegacyIdGet**
> number legacyIdModelLegacyIdGet()


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

const { status, data } = await apiInstance.legacyIdModelLegacyIdGet(
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

# **meGet**
> MeGet200Response meGet()

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

const { status, data } = await apiInstance.meGet(
    acceptVersion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**MeGet200Response**

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

# **milestonesGet**
> MilestonesGet200Response milestonesGet()

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

const { status, data } = await apiInstance.milestonesGet(
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

**MilestonesGet200Response**

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

# **otherExpensesGet**
> OtherExpensesGet200Response otherExpensesGet()

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

const { status, data } = await apiInstance.otherExpensesGet(
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

**OtherExpensesGet200Response**

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

# **peopleContractsCurrentGet**
> ContractsGet200Response peopleContractsCurrentGet()

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

const { status, data } = await apiInstance.peopleContractsCurrentGet(
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

**ContractsGet200Response**

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

# **peopleCustomFieldsGet**
> PeopleCustomFieldsGet200Response peopleCustomFieldsGet()

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

const { status, data } = await apiInstance.peopleCustomFieldsGet(
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

**PeopleCustomFieldsGet200Response**

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

# **peopleGet**
> PeopleGet200Response peopleGet()


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
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)
let externalId: string; //External ID value (optional) (default to undefined)

const { status, data } = await apiInstance.peopleGet(
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
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|
| **externalId** | [**string**] | External ID value | (optional) defaults to undefined|


### Return type

**PeopleGet200Response**

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

# **peopleNotesGet**
> PeopleNotesGet200Response peopleNotesGet()

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

const { status, data } = await apiInstance.peopleNotesGet(
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

**PeopleNotesGet200Response**

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

# **peoplePersonIdActualsGet**
> ActualsGet200Response peoplePersonIdActualsGet()


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

const { status, data } = await apiInstance.peoplePersonIdActualsGet(
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

**ActualsGet200Response**

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

# **peoplePersonIdAssignmentsGet**
> AssignmentsGet200Response peoplePersonIdAssignmentsGet()


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

const { status, data } = await apiInstance.peoplePersonIdAssignmentsGet(
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

**AssignmentsGet200Response**

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

# **peoplePersonIdContractsContractIdDelete**
> peoplePersonIdContractsContractIdDelete()


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

const { status, data } = await apiInstance.peoplePersonIdContractsContractIdDelete(
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

# **peoplePersonIdContractsCurrentGet**
> Contract peoplePersonIdContractsCurrentGet()


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

const { status, data } = await apiInstance.peoplePersonIdContractsCurrentGet(
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

# **peoplePersonIdContractsGet**
> ContractsGet200Response peoplePersonIdContractsGet()


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

const { status, data } = await apiInstance.peoplePersonIdContractsGet(
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

**ContractsGet200Response**

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

# **peoplePersonIdContractsPost**
> Contract peoplePersonIdContractsPost(contractInput)


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
let contractInput: ContractInput; //

const { status, data } = await apiInstance.peoplePersonIdContractsPost(
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

# **peoplePersonIdCustomFieldsCheckboxPatch**
> PeoplePersonIdCustomFieldsCheckboxPatchRequest peoplePersonIdCustomFieldsCheckboxPatch(peoplePersonIdCustomFieldsCheckboxPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PeoplePersonIdCustomFieldsCheckboxPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let peoplePersonIdCustomFieldsCheckboxPatchRequest: PeoplePersonIdCustomFieldsCheckboxPatchRequest; //

const { status, data } = await apiInstance.peoplePersonIdCustomFieldsCheckboxPatch(
    personId,
    acceptVersion,
    peoplePersonIdCustomFieldsCheckboxPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **peoplePersonIdCustomFieldsCheckboxPatchRequest** | **PeoplePersonIdCustomFieldsCheckboxPatchRequest**|  | |
| **personId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**PeoplePersonIdCustomFieldsCheckboxPatchRequest**

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

# **peoplePersonIdCustomFieldsDatePatch**
> PeoplePersonIdCustomFieldsDatePatchRequest peoplePersonIdCustomFieldsDatePatch(peoplePersonIdCustomFieldsDatePatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PeoplePersonIdCustomFieldsDatePatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let peoplePersonIdCustomFieldsDatePatchRequest: PeoplePersonIdCustomFieldsDatePatchRequest; //

const { status, data } = await apiInstance.peoplePersonIdCustomFieldsDatePatch(
    personId,
    acceptVersion,
    peoplePersonIdCustomFieldsDatePatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **peoplePersonIdCustomFieldsDatePatchRequest** | **PeoplePersonIdCustomFieldsDatePatchRequest**|  | |
| **personId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**PeoplePersonIdCustomFieldsDatePatchRequest**

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

# **peoplePersonIdCustomFieldsSelectPatch**
> PeoplePersonIdCustomFieldsSelectPatchRequest peoplePersonIdCustomFieldsSelectPatch(peoplePersonIdCustomFieldsSelectPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PeoplePersonIdCustomFieldsSelectPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let peoplePersonIdCustomFieldsSelectPatchRequest: PeoplePersonIdCustomFieldsSelectPatchRequest; //

const { status, data } = await apiInstance.peoplePersonIdCustomFieldsSelectPatch(
    personId,
    acceptVersion,
    peoplePersonIdCustomFieldsSelectPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **peoplePersonIdCustomFieldsSelectPatchRequest** | **PeoplePersonIdCustomFieldsSelectPatchRequest**|  | |
| **personId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**PeoplePersonIdCustomFieldsSelectPatchRequest**

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

# **peoplePersonIdCustomFieldsTextPatch**
> PeoplePersonIdCustomFieldsTextPatchRequest peoplePersonIdCustomFieldsTextPatch(peoplePersonIdCustomFieldsTextPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PeoplePersonIdCustomFieldsTextPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let peoplePersonIdCustomFieldsTextPatchRequest: PeoplePersonIdCustomFieldsTextPatchRequest; //

const { status, data } = await apiInstance.peoplePersonIdCustomFieldsTextPatch(
    personId,
    acceptVersion,
    peoplePersonIdCustomFieldsTextPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **peoplePersonIdCustomFieldsTextPatchRequest** | **PeoplePersonIdCustomFieldsTextPatchRequest**|  | |
| **personId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**PeoplePersonIdCustomFieldsTextPatchRequest**

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

# **peoplePersonIdDelete**
> peoplePersonIdDelete()

Delete a person or placeholder by their ID; fails when person has existing assignments or actuals to preserve           historical reports. Override this behaviour by using the force query flag.

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

const { status, data } = await apiInstance.peoplePersonIdDelete(
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

# **peoplePersonIdGet**
> Person peoplePersonIdGet()


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

const { status, data } = await apiInstance.peoplePersonIdGet(
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

# **peoplePersonIdPatch**
> Person peoplePersonIdPatch(peoplePersonIdPatchRequest)

To add a new role or job title to a person, see POST /people/{personId}/contracts

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PeoplePersonIdPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let peoplePersonIdPatchRequest: PeoplePersonIdPatchRequest; //

const { status, data } = await apiInstance.peoplePersonIdPatch(
    personId,
    acceptVersion,
    peoplePersonIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **peoplePersonIdPatchRequest** | **PeoplePersonIdPatchRequest**|  | |
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

# **peoplePersonIdProjectsGet**
> ClientsClientIdProjectsGet200Response peoplePersonIdProjectsGet()


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

const { status, data } = await apiInstance.peoplePersonIdProjectsGet(
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

**ClientsClientIdProjectsGet200Response**

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

# **peoplePersonIdProjectsPost**
> peoplePersonIdProjectsPost(peoplePersonIdProjectsPostRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PeoplePersonIdProjectsPostRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let peoplePersonIdProjectsPostRequest: PeoplePersonIdProjectsPostRequest; //

const { status, data } = await apiInstance.peoplePersonIdProjectsPost(
    personId,
    acceptVersion,
    peoplePersonIdProjectsPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **peoplePersonIdProjectsPostRequest** | **PeoplePersonIdProjectsPostRequest**|  | |
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

# **peoplePersonIdSkillsGet**
> PeoplePersonIdSkillsGet200Response peoplePersonIdSkillsGet()


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

const { status, data } = await apiInstance.peoplePersonIdSkillsGet(
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

**PeoplePersonIdSkillsGet200Response**

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

# **peoplePersonIdSkillsPost**
> Competency peoplePersonIdSkillsPost(peoplePersonIdSkillsPostRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PeoplePersonIdSkillsPostRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let peoplePersonIdSkillsPostRequest: PeoplePersonIdSkillsPostRequest; //

const { status, data } = await apiInstance.peoplePersonIdSkillsPost(
    personId,
    acceptVersion,
    peoplePersonIdSkillsPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **peoplePersonIdSkillsPostRequest** | **PeoplePersonIdSkillsPostRequest**|  | |
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

# **peoplePersonIdSkillsSkillIdDelete**
> peoplePersonIdSkillsSkillIdDelete()


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

const { status, data } = await apiInstance.peoplePersonIdSkillsSkillIdDelete(
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

# **peoplePersonIdSkillsSkillIdPatch**
> Competency peoplePersonIdSkillsSkillIdPatch(peoplePersonIdSkillsSkillIdPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PeoplePersonIdSkillsSkillIdPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let skillId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let peoplePersonIdSkillsSkillIdPatchRequest: PeoplePersonIdSkillsSkillIdPatchRequest; //

const { status, data } = await apiInstance.peoplePersonIdSkillsSkillIdPatch(
    personId,
    skillId,
    acceptVersion,
    peoplePersonIdSkillsSkillIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **peoplePersonIdSkillsSkillIdPatchRequest** | **PeoplePersonIdSkillsSkillIdPatchRequest**|  | |
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

# **peoplePersonIdTeamsCurrentGet**
> PeoplePersonIdTeamsCurrentGet200Response peoplePersonIdTeamsCurrentGet()

This endpoint is deprecated. You may view the current team for a person using the `GET /people/:personId/` endpoint.

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

const { status, data } = await apiInstance.peoplePersonIdTeamsCurrentGet(
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

**PeoplePersonIdTeamsCurrentGet200Response**

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

# **peoplePersonIdTeamsPost**
> peoplePersonIdTeamsPost(peoplePersonIdTeamsPostRequest)

This endpoint is deprecated. You may assign the person to a team using the `PATCH /people/:personId/` endpoint.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PeoplePersonIdTeamsPostRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let peoplePersonIdTeamsPostRequest: PeoplePersonIdTeamsPostRequest; //

const { status, data } = await apiInstance.peoplePersonIdTeamsPost(
    personId,
    acceptVersion,
    peoplePersonIdTeamsPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **peoplePersonIdTeamsPostRequest** | **PeoplePersonIdTeamsPostRequest**|  | |
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

# **peoplePersonIdTeamsTeamIdDelete**
> peoplePersonIdTeamsTeamIdDelete()

This endpoint is deprecated. You may remove the person from a team using the `PATCH /people/:personId/` endpoint.

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

const { status, data } = await apiInstance.peoplePersonIdTeamsTeamIdDelete(
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

# **peoplePersonIdTimeOffsHolidaysGet**
> PeoplePersonIdTimeOffsHolidaysGet200Response peoplePersonIdTimeOffsHolidaysGet()


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

const { status, data } = await apiInstance.peoplePersonIdTimeOffsHolidaysGet(
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

**PeoplePersonIdTimeOffsHolidaysGet200Response**

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

# **peoplePersonIdTimeOffsLeaveGet**
> PeoplePersonIdTimeOffsLeaveGet200Response peoplePersonIdTimeOffsLeaveGet()


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

const { status, data } = await apiInstance.peoplePersonIdTimeOffsLeaveGet(
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

**PeoplePersonIdTimeOffsLeaveGet200Response**

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

# **peoplePersonIdTimeOffsRosteredOffGet**
> PeoplePersonIdTimeOffsLeaveGet200Response peoplePersonIdTimeOffsRosteredOffGet()


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

const { status, data } = await apiInstance.peoplePersonIdTimeOffsRosteredOffGet(
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

**PeoplePersonIdTimeOffsLeaveGet200Response**

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

# **peoplePost**
> Person peoplePost(peoplePostRequest)

Also creates a new contract for the person

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PeoplePostRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let peoplePostRequest: PeoplePostRequest; //

const { status, data } = await apiInstance.peoplePost(
    acceptVersion,
    peoplePostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **peoplePostRequest** | **PeoplePostRequest**|  | |
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

# **peopleSkillsGet**
> PeopleSkillsGet200Response peopleSkillsGet()


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
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)

const { status, data } = await apiInstance.peopleSkillsGet(
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
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|


### Return type

**PeopleSkillsGet200Response**

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

# **peopleTagsGet**
> PeopleTagsGet200Response peopleTagsGet()


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

const { status, data } = await apiInstance.peopleTagsGet(
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

**PeopleTagsGet200Response**

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

# **peopleTagsPeopleTagIdDelete**
> peopleTagsPeopleTagIdDelete()


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

const { status, data } = await apiInstance.peopleTagsPeopleTagIdDelete(
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

# **peopleTagsPeopleTagIdGet**
> PeopleTagsGet200ResponseValuesInner peopleTagsPeopleTagIdGet()


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

const { status, data } = await apiInstance.peopleTagsPeopleTagIdGet(
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

**PeopleTagsGet200ResponseValuesInner**

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

# **peopleTagsPeopleTagIdPatch**
> PeopleTagsGet200ResponseValuesInner peopleTagsPeopleTagIdPatch(peopleTagsPeopleTagIdPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PeopleTagsPeopleTagIdPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let peopleTagId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let peopleTagsPeopleTagIdPatchRequest: PeopleTagsPeopleTagIdPatchRequest; //

const { status, data } = await apiInstance.peopleTagsPeopleTagIdPatch(
    peopleTagId,
    acceptVersion,
    peopleTagsPeopleTagIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **peopleTagsPeopleTagIdPatchRequest** | **PeopleTagsPeopleTagIdPatchRequest**|  | |
| **peopleTagId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**PeopleTagsGet200ResponseValuesInner**

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

# **peopleTagsPost**
> PeopleTagsGet200ResponseValuesInner peopleTagsPost(customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest: CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest; //

const { status, data } = await apiInstance.peopleTagsPost(
    acceptVersion,
    customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest** | **CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest**|  | |
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**PeopleTagsGet200ResponseValuesInner**

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

# **personRequestsGet**
> PersonRequestsGet200Response personRequestsGet()

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

const { status, data } = await apiInstance.personRequestsGet(
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

**PersonRequestsGet200Response**

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

# **phasesGet**
> PhasesGet200Response phasesGet()

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

const { status, data } = await apiInstance.phasesGet(
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

**PhasesGet200Response**

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

# **placeholdersGet**
> PlaceholdersGet200Response placeholdersGet()

Note: The /people/_* endpoints also allows getting information on placeholders when using the `includePlaceholders` query parameter.

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

const { status, data } = await apiInstance.placeholdersGet(
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

**PlaceholdersGet200Response**

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

# **placeholdersPlaceholderIdSkillsPost**
> Competency placeholdersPlaceholderIdSkillsPost(placeholdersPlaceholderIdSkillsPostRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PlaceholdersPlaceholderIdSkillsPostRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let placeholderId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let placeholdersPlaceholderIdSkillsPostRequest: PlaceholdersPlaceholderIdSkillsPostRequest; //

const { status, data } = await apiInstance.placeholdersPlaceholderIdSkillsPost(
    placeholderId,
    acceptVersion,
    placeholdersPlaceholderIdSkillsPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **placeholdersPlaceholderIdSkillsPostRequest** | **PlaceholdersPlaceholderIdSkillsPostRequest**|  | |
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

# **placeholdersPlaceholderIdSkillsSkillIdDelete**
> placeholdersPlaceholderIdSkillsSkillIdDelete()


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

const { status, data } = await apiInstance.placeholdersPlaceholderIdSkillsSkillIdDelete(
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

# **placeholdersPlaceholderIdTeamsPost**
> placeholdersPlaceholderIdTeamsPost(peoplePersonIdTeamsPostRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PeoplePersonIdTeamsPostRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let placeholderId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let peoplePersonIdTeamsPostRequest: PeoplePersonIdTeamsPostRequest; //

const { status, data } = await apiInstance.placeholdersPlaceholderIdTeamsPost(
    placeholderId,
    acceptVersion,
    peoplePersonIdTeamsPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **peoplePersonIdTeamsPostRequest** | **PeoplePersonIdTeamsPostRequest**|  | |
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

# **placeholdersPlaceholderIdTeamsTeamIdDelete**
> placeholdersPlaceholderIdTeamsTeamIdDelete()


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

const { status, data } = await apiInstance.placeholdersPlaceholderIdTeamsTeamIdDelete(
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

# **placeholdersPost**
> PlaceholderInput placeholdersPost(placeholdersPostRequest)

Also creates a contract that defaults to the role cost. Please note that placeholders with no project or assignments will be deleted within 24 hours.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PlaceholdersPostRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let placeholdersPostRequest: PlaceholdersPostRequest; //

const { status, data } = await apiInstance.placeholdersPost(
    acceptVersion,
    placeholdersPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **placeholdersPostRequest** | **PlaceholdersPostRequest**|  | |
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

# **projectMembersGet**
> ProjectMembersGet200Response projectMembersGet()

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

const { status, data } = await apiInstance.projectMembersGet(
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

**ProjectMembersGet200Response**

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

# **projectNotesGet**
> ProjectNotesGet200Response projectNotesGet()

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

const { status, data } = await apiInstance.projectNotesGet(
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

**ProjectNotesGet200Response**

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

# **projectRatesGet**
> ProjectRatesGet200Response projectRatesGet()

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

const { status, data } = await apiInstance.projectRatesGet(
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

**ProjectRatesGet200Response**

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

# **projectTagsGet**
> ProjectTagsGet200Response projectTagsGet()


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

const { status, data } = await apiInstance.projectTagsGet(
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

**ProjectTagsGet200Response**

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

# **projectTagsPost**
> ProjectTag projectTagsPost(customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest: CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest; //

const { status, data } = await apiInstance.projectTagsPost(
    acceptVersion,
    customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest** | **CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest**|  | |
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

# **projectTagsProjectTagIdGet**
> ProjectTag projectTagsProjectTagIdGet()


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

const { status, data } = await apiInstance.projectTagsProjectTagIdGet(
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

# **projectTagsProjectTagIdPatch**
> ProjectTag projectTagsProjectTagIdPatch(peopleTagsPeopleTagIdPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PeopleTagsPeopleTagIdPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectTagId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let peopleTagsPeopleTagIdPatchRequest: PeopleTagsPeopleTagIdPatchRequest; //

const { status, data } = await apiInstance.projectTagsProjectTagIdPatch(
    projectTagId,
    acceptVersion,
    peopleTagsPeopleTagIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **peopleTagsPeopleTagIdPatchRequest** | **PeopleTagsPeopleTagIdPatchRequest**|  | |
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

# **projectTagsProjectTagIdProjectProjectIdDelete**
> projectTagsProjectTagIdProjectProjectIdDelete()


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

const { status, data } = await apiInstance.projectTagsProjectTagIdProjectProjectIdDelete(
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

# **projectTagsProjectTagIdProjectProjectIdPost**
> ProjectTag projectTagsProjectTagIdProjectProjectIdPost()


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

const { status, data } = await apiInstance.projectTagsProjectTagIdProjectProjectIdPost(
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

# **projectWorkstreamsGet**
> ProjectWorkstreamsGet200Response projectWorkstreamsGet()

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

const { status, data } = await apiInstance.projectWorkstreamsGet(
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

**ProjectWorkstreamsGet200Response**

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

# **projectsCustomFieldsGet**
> ProjectsCustomFieldsGet200Response projectsCustomFieldsGet()

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

const { status, data } = await apiInstance.projectsCustomFieldsGet(
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

**ProjectsCustomFieldsGet200Response**

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

# **projectsGet**
> ClientsClientIdProjectsGet200Response projectsGet()

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
let modifiedAfter: ModifiedAfter; // (optional) (default to undefined)
let externalId: string; //External ID value (optional) (default to undefined)
let name: string; //Case-insensitive substring match on project name (e.g. `Acme`). (optional) (default to undefined)

const { status, data } = await apiInstance.projectsGet(
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
| **modifiedAfter** | **ModifiedAfter** |  | (optional) defaults to undefined|
| **externalId** | [**string**] | External ID value | (optional) defaults to undefined|
| **name** | [**string**] | Case-insensitive substring match on project name (e.g. &#x60;Acme&#x60;). | (optional) defaults to undefined|


### Return type

**ClientsClientIdProjectsGet200Response**

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

# **projectsPost**
> Project projectsPost(projectsPostRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ProjectsPostRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let projectsPostRequest: ProjectsPostRequest; //

const { status, data } = await apiInstance.projectsPost(
    acceptVersion,
    projectsPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectsPostRequest** | **ProjectsPostRequest**|  | |
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

# **projectsProjectIdActualsGet**
> ActualsGet200Response projectsProjectIdActualsGet()


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

const { status, data } = await apiInstance.projectsProjectIdActualsGet(
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

**ActualsGet200Response**

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

# **projectsProjectIdAssignmentsGet**
> AssignmentsGet200Response projectsProjectIdAssignmentsGet()


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

const { status, data } = await apiInstance.projectsProjectIdAssignmentsGet(
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

**AssignmentsGet200Response**

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

# **projectsProjectIdBudgetRolesGet**
> BudgetRolesGet200Response projectsProjectIdBudgetRolesGet()


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

const { status, data } = await apiInstance.projectsProjectIdBudgetRolesGet(
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

**BudgetRolesGet200Response**

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

# **projectsProjectIdBudgetRolesPost**
> projectsProjectIdBudgetRolesPost(projectsProjectIdBudgetRolesPostRequest)

Create a project budget role for a project. You cannot create a              project budget role using estimated budget if a project rate does              not exist for the role because the project rate is used to set              the estimatedMinutes.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ProjectsProjectIdBudgetRolesPostRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let projectsProjectIdBudgetRolesPostRequest: ProjectsProjectIdBudgetRolesPostRequest; //

const { status, data } = await apiInstance.projectsProjectIdBudgetRolesPost(
    projectId,
    acceptVersion,
    projectsProjectIdBudgetRolesPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectsProjectIdBudgetRolesPostRequest** | **ProjectsProjectIdBudgetRolesPostRequest**|  | |
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

# **projectsProjectIdBudgetRolesRoleIdDelete**
> projectsProjectIdBudgetRolesRoleIdDelete()

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

const { status, data } = await apiInstance.projectsProjectIdBudgetRolesRoleIdDelete(
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

# **projectsProjectIdBudgetRolesRoleIdGet**
> ProjectBudgetRole projectsProjectIdBudgetRolesRoleIdGet()


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

const { status, data } = await apiInstance.projectsProjectIdBudgetRolesRoleIdGet(
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

# **projectsProjectIdBudgetRolesRoleIdPatch**
> ProjectBudgetRole projectsProjectIdBudgetRolesRoleIdPatch(projectsProjectIdBudgetRolesRoleIdPatchRequest)

Update a project budget role for a project. You cannot update a              project budget role using estimated budget if a project rate does              not exist for the role because the project rate is used to set              the estimatedMinutes.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ProjectsProjectIdBudgetRolesRoleIdPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let roleId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let projectsProjectIdBudgetRolesRoleIdPatchRequest: ProjectsProjectIdBudgetRolesRoleIdPatchRequest; //

const { status, data } = await apiInstance.projectsProjectIdBudgetRolesRoleIdPatch(
    projectId,
    roleId,
    acceptVersion,
    projectsProjectIdBudgetRolesRoleIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectsProjectIdBudgetRolesRoleIdPatchRequest** | **ProjectsProjectIdBudgetRolesRoleIdPatchRequest**|  | |
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

# **projectsProjectIdCustomFieldsCheckboxPatch**
> PeoplePersonIdCustomFieldsCheckboxPatchRequest projectsProjectIdCustomFieldsCheckboxPatch(peoplePersonIdCustomFieldsCheckboxPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PeoplePersonIdCustomFieldsCheckboxPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let peoplePersonIdCustomFieldsCheckboxPatchRequest: PeoplePersonIdCustomFieldsCheckboxPatchRequest; //

const { status, data } = await apiInstance.projectsProjectIdCustomFieldsCheckboxPatch(
    projectId,
    acceptVersion,
    peoplePersonIdCustomFieldsCheckboxPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **peoplePersonIdCustomFieldsCheckboxPatchRequest** | **PeoplePersonIdCustomFieldsCheckboxPatchRequest**|  | |
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**PeoplePersonIdCustomFieldsCheckboxPatchRequest**

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

# **projectsProjectIdCustomFieldsDatePatch**
> PeoplePersonIdCustomFieldsDatePatchRequest projectsProjectIdCustomFieldsDatePatch(peoplePersonIdCustomFieldsDatePatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PeoplePersonIdCustomFieldsDatePatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let peoplePersonIdCustomFieldsDatePatchRequest: PeoplePersonIdCustomFieldsDatePatchRequest; //

const { status, data } = await apiInstance.projectsProjectIdCustomFieldsDatePatch(
    projectId,
    acceptVersion,
    peoplePersonIdCustomFieldsDatePatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **peoplePersonIdCustomFieldsDatePatchRequest** | **PeoplePersonIdCustomFieldsDatePatchRequest**|  | |
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**PeoplePersonIdCustomFieldsDatePatchRequest**

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

# **projectsProjectIdCustomFieldsSelectPatch**
> PeoplePersonIdCustomFieldsSelectPatchRequest projectsProjectIdCustomFieldsSelectPatch(peoplePersonIdCustomFieldsSelectPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PeoplePersonIdCustomFieldsSelectPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let peoplePersonIdCustomFieldsSelectPatchRequest: PeoplePersonIdCustomFieldsSelectPatchRequest; //

const { status, data } = await apiInstance.projectsProjectIdCustomFieldsSelectPatch(
    projectId,
    acceptVersion,
    peoplePersonIdCustomFieldsSelectPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **peoplePersonIdCustomFieldsSelectPatchRequest** | **PeoplePersonIdCustomFieldsSelectPatchRequest**|  | |
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**PeoplePersonIdCustomFieldsSelectPatchRequest**

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

# **projectsProjectIdCustomFieldsTextPatch**
> PeoplePersonIdCustomFieldsTextPatchRequest projectsProjectIdCustomFieldsTextPatch(peoplePersonIdCustomFieldsTextPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PeoplePersonIdCustomFieldsTextPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let peoplePersonIdCustomFieldsTextPatchRequest: PeoplePersonIdCustomFieldsTextPatchRequest; //

const { status, data } = await apiInstance.projectsProjectIdCustomFieldsTextPatch(
    projectId,
    acceptVersion,
    peoplePersonIdCustomFieldsTextPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **peoplePersonIdCustomFieldsTextPatchRequest** | **PeoplePersonIdCustomFieldsTextPatchRequest**|  | |
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**PeoplePersonIdCustomFieldsTextPatchRequest**

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

# **projectsProjectIdDelete**
> projectsProjectIdDelete()

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

const { status, data } = await apiInstance.projectsProjectIdDelete(
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

# **projectsProjectIdGet**
> Project projectsProjectIdGet()


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

const { status, data } = await apiInstance.projectsProjectIdGet(
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

# **projectsProjectIdMilestonesGet**
> MilestonesGet200Response projectsProjectIdMilestonesGet()


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

const { status, data } = await apiInstance.projectsProjectIdMilestonesGet(
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

**MilestonesGet200Response**

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

# **projectsProjectIdMilestonesMilestoneIdDelete**
> projectsProjectIdMilestonesMilestoneIdDelete()


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

const { status, data } = await apiInstance.projectsProjectIdMilestonesMilestoneIdDelete(
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

# **projectsProjectIdMilestonesMilestoneIdPatch**
> Milestone projectsProjectIdMilestonesMilestoneIdPatch(projectsProjectIdMilestonesMilestoneIdPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ProjectsProjectIdMilestonesMilestoneIdPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let milestoneId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let projectsProjectIdMilestonesMilestoneIdPatchRequest: ProjectsProjectIdMilestonesMilestoneIdPatchRequest; //

const { status, data } = await apiInstance.projectsProjectIdMilestonesMilestoneIdPatch(
    projectId,
    milestoneId,
    acceptVersion,
    projectsProjectIdMilestonesMilestoneIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectsProjectIdMilestonesMilestoneIdPatchRequest** | **ProjectsProjectIdMilestonesMilestoneIdPatchRequest**|  | |
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

# **projectsProjectIdMilestonesPost**
> Milestone projectsProjectIdMilestonesPost(projectsProjectIdMilestonesPostRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ProjectsProjectIdMilestonesPostRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let projectsProjectIdMilestonesPostRequest: ProjectsProjectIdMilestonesPostRequest; //

const { status, data } = await apiInstance.projectsProjectIdMilestonesPost(
    projectId,
    acceptVersion,
    projectsProjectIdMilestonesPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectsProjectIdMilestonesPostRequest** | **ProjectsProjectIdMilestonesPostRequest**|  | |
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

# **projectsProjectIdNotesGet**
> ProjectNotesGet200Response projectsProjectIdNotesGet()


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

const { status, data } = await apiInstance.projectsProjectIdNotesGet(
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

**ProjectNotesGet200Response**

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

# **projectsProjectIdNotesPost**
> ProjectNote projectsProjectIdNotesPost(projectsProjectIdNotesPostRequest)

Defaults creator to \'API\' user

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ProjectsProjectIdNotesPostRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let projectsProjectIdNotesPostRequest: ProjectsProjectIdNotesPostRequest; //

const { status, data } = await apiInstance.projectsProjectIdNotesPost(
    projectId,
    acceptVersion,
    projectsProjectIdNotesPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectsProjectIdNotesPostRequest** | **ProjectsProjectIdNotesPostRequest**|  | |
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

# **projectsProjectIdOtherExpensesGet**
> OtherExpensesGet200Response projectsProjectIdOtherExpensesGet()


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

const { status, data } = await apiInstance.projectsProjectIdOtherExpensesGet(
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

**OtherExpensesGet200Response**

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

# **projectsProjectIdOtherExpensesOtherExpenseIdPatch**
> ProjectOtherExpense projectsProjectIdOtherExpensesOtherExpenseIdPatch(projectOtherExpense1)


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
let projectOtherExpense1: ProjectOtherExpense1; //A non-labour expense for a project.

const { status, data } = await apiInstance.projectsProjectIdOtherExpensesOtherExpenseIdPatch(
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

# **projectsProjectIdOtherExpensesPost**
> ProjectOtherExpense projectsProjectIdOtherExpensesPost(projectOtherExpense)


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

const { status, data } = await apiInstance.projectsProjectIdOtherExpensesPost(
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

# **projectsProjectIdPatch**
> Project projectsProjectIdPatch(projectsProjectIdPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ProjectsProjectIdPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let projectsProjectIdPatchRequest: ProjectsProjectIdPatchRequest; //

const { status, data } = await apiInstance.projectsProjectIdPatch(
    projectId,
    acceptVersion,
    projectsProjectIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectsProjectIdPatchRequest** | **ProjectsProjectIdPatchRequest**|  | |
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

# **projectsProjectIdPeopleGet**
> PeopleGet200Response projectsProjectIdPeopleGet()


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

const { status, data } = await apiInstance.projectsProjectIdPeopleGet(
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

**PeopleGet200Response**

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

# **projectsProjectIdPersonRequestsGet**
> PersonRequestsGet200Response projectsProjectIdPersonRequestsGet()


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

const { status, data } = await apiInstance.projectsProjectIdPersonRequestsGet(
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

**PersonRequestsGet200Response**

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

# **projectsProjectIdPersonRequestsPersonRequestIdGet**
> PersonRequest projectsProjectIdPersonRequestsPersonRequestIdGet()


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

const { status, data } = await apiInstance.projectsProjectIdPersonRequestsPersonRequestIdGet(
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

# **projectsProjectIdPersonRequestsPersonRequestIdPatch**
> ProjectsProjectIdPersonRequestsPersonRequestIdPatch200Response projectsProjectIdPersonRequestsPersonRequestIdPatch(projectsProjectIdPersonRequestsPersonRequestIdPatchRequest)

Person requests are used to request a placeholder role be filled with another person in the account or to request a new person be hired. This endpoint can be used to update the status of a request to \'REQUESTED\' or \'NEED_TO_HIRE\', respectively.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ProjectsProjectIdPersonRequestsPersonRequestIdPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let personRequestId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let projectsProjectIdPersonRequestsPersonRequestIdPatchRequest: ProjectsProjectIdPersonRequestsPersonRequestIdPatchRequest; //

const { status, data } = await apiInstance.projectsProjectIdPersonRequestsPersonRequestIdPatch(
    projectId,
    personRequestId,
    acceptVersion,
    projectsProjectIdPersonRequestsPersonRequestIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectsProjectIdPersonRequestsPersonRequestIdPatchRequest** | **ProjectsProjectIdPersonRequestsPersonRequestIdPatchRequest**|  | |
| **projectId** | [**number**] |  | defaults to undefined|
| **personRequestId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**ProjectsProjectIdPersonRequestsPersonRequestIdPatch200Response**

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

# **projectsProjectIdPersonRequestsPost**
> PersonRequest projectsProjectIdPersonRequestsPost(projectsProjectIdPersonRequestsPostRequest)

Person requests are used to request a placeholder role be filled with a person in the account or to request a new person be hired. This endpoint can be used to create a new person request.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ProjectsProjectIdPersonRequestsPostRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let projectsProjectIdPersonRequestsPostRequest: ProjectsProjectIdPersonRequestsPostRequest; //

const { status, data } = await apiInstance.projectsProjectIdPersonRequestsPost(
    projectId,
    acceptVersion,
    projectsProjectIdPersonRequestsPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectsProjectIdPersonRequestsPostRequest** | **ProjectsProjectIdPersonRequestsPostRequest**|  | |
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

# **projectsProjectIdPhasesGet**
> PhasesGet200Response projectsProjectIdPhasesGet()


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

const { status, data } = await apiInstance.projectsProjectIdPhasesGet(
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

**PhasesGet200Response**

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

# **projectsProjectIdPhasesPhaseIdDelete**
> ProjectPhase projectsProjectIdPhasesPhaseIdDelete()


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

const { status, data } = await apiInstance.projectsProjectIdPhasesPhaseIdDelete(
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

# **projectsProjectIdPhasesPhaseIdGet**
> ProjectPhase projectsProjectIdPhasesPhaseIdGet()


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

const { status, data } = await apiInstance.projectsProjectIdPhasesPhaseIdGet(
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

# **projectsProjectIdPhasesPhaseIdPatch**
> ProjectPhase projectsProjectIdPhasesPhaseIdPatch(projectsProjectIdPhasesPhaseIdPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ProjectsProjectIdPhasesPhaseIdPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let phaseId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let projectsProjectIdPhasesPhaseIdPatchRequest: ProjectsProjectIdPhasesPhaseIdPatchRequest; //

const { status, data } = await apiInstance.projectsProjectIdPhasesPhaseIdPatch(
    projectId,
    phaseId,
    acceptVersion,
    projectsProjectIdPhasesPhaseIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectsProjectIdPhasesPhaseIdPatchRequest** | **ProjectsProjectIdPhasesPhaseIdPatchRequest**|  | |
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

# **projectsProjectIdPhasesPost**
> ProjectPhase projectsProjectIdPhasesPost(projectsProjectIdPhasesPostRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ProjectsProjectIdPhasesPostRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let projectsProjectIdPhasesPostRequest: ProjectsProjectIdPhasesPostRequest; //

const { status, data } = await apiInstance.projectsProjectIdPhasesPost(
    projectId,
    acceptVersion,
    projectsProjectIdPhasesPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectsProjectIdPhasesPostRequest** | **ProjectsProjectIdPhasesPostRequest**|  | |
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

# **projectsProjectIdProjectRatesGet**
> ProjectRatesGet200Response projectsProjectIdProjectRatesGet()


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

const { status, data } = await apiInstance.projectsProjectIdProjectRatesGet(
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

**ProjectRatesGet200Response**

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

# **projectsProjectIdProjectRatesProjectRateIdPatch**
> ProjectRate projectsProjectIdProjectRatesProjectRateIdPatch(projectsProjectIdProjectRatesProjectRateIdPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ProjectsProjectIdProjectRatesProjectRateIdPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let projectRateId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let projectsProjectIdProjectRatesProjectRateIdPatchRequest: ProjectsProjectIdProjectRatesProjectRateIdPatchRequest; //

const { status, data } = await apiInstance.projectsProjectIdProjectRatesProjectRateIdPatch(
    projectId,
    projectRateId,
    acceptVersion,
    projectsProjectIdProjectRatesProjectRateIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectsProjectIdProjectRatesProjectRateIdPatchRequest** | **ProjectsProjectIdProjectRatesProjectRateIdPatchRequest**|  | |
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

# **projectsProjectIdProjectWorkstreamsGet**
> ProjectsProjectIdProjectWorkstreamsGet200Response projectsProjectIdProjectWorkstreamsGet()


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

const { status, data } = await apiInstance.projectsProjectIdProjectWorkstreamsGet(
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

**ProjectsProjectIdProjectWorkstreamsGet200Response**

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

# **projectsProjectIdProjectWorkstreamsWorkstreamIdDelete**
> ProjectWorkstream projectsProjectIdProjectWorkstreamsWorkstreamIdDelete()


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

const { status, data } = await apiInstance.projectsProjectIdProjectWorkstreamsWorkstreamIdDelete(
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

# **projectsProjectIdProjectWorkstreamsWorkstreamIdGet**
> ProjectWorkstream projectsProjectIdProjectWorkstreamsWorkstreamIdGet()


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

const { status, data } = await apiInstance.projectsProjectIdProjectWorkstreamsWorkstreamIdGet(
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

# **projectsProjectIdProjectWorkstreamsWorkstreamIdPost**
> ProjectWorkstream projectsProjectIdProjectWorkstreamsWorkstreamIdPost()


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

const { status, data } = await apiInstance.projectsProjectIdProjectWorkstreamsWorkstreamIdPost(
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

# **projectsProjectIdTimesheetLockGet**
> ProjectsProjectIdTimesheetLockGet200Response projectsProjectIdTimesheetLockGet()

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

const { status, data } = await apiInstance.projectsProjectIdTimesheetLockGet(
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

**ProjectsProjectIdTimesheetLockGet200Response**

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

# **projectsProjectIdTimesheetLockPatch**
> ProjectsProjectIdTimesheetLockGet200Response projectsProjectIdTimesheetLockPatch(projectsProjectIdTimesheetLockPatchRequest)

This feature currently in beta and only available to selected customers.This will return an error and message if all timesheets haven\'t been filled out to selected date.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ProjectsProjectIdTimesheetLockPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let projectsProjectIdTimesheetLockPatchRequest: ProjectsProjectIdTimesheetLockPatchRequest; //

const { status, data } = await apiInstance.projectsProjectIdTimesheetLockPatch(
    projectId,
    acceptVersion,
    projectsProjectIdTimesheetLockPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectsProjectIdTimesheetLockPatchRequest** | **ProjectsProjectIdTimesheetLockPatchRequest**|  | |
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**ProjectsProjectIdTimesheetLockGet200Response**

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

# **rateCardsGet**
> RateCardsGet200Response rateCardsGet()


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

const { status, data } = await apiInstance.rateCardsGet(
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

**RateCardsGet200Response**

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

# **rateCardsPost**
> RateCard rateCardsPost(rateCardsPostRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    RateCardsPostRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let rateCardsPostRequest: RateCardsPostRequest; //

const { status, data } = await apiInstance.rateCardsPost(
    acceptVersion,
    rateCardsPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rateCardsPostRequest** | **RateCardsPostRequest**|  | |
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

# **rateCardsRateCardIdDelete**
> rateCardsRateCardIdDelete()

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

const { status, data } = await apiInstance.rateCardsRateCardIdDelete(
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

# **rateCardsRateCardIdGet**
> RateCard rateCardsRateCardIdGet()


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

const { status, data } = await apiInstance.rateCardsRateCardIdGet(
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

# **rateCardsRateCardIdPatch**
> RateCard rateCardsRateCardIdPatch(rateCardsRateCardIdPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    RateCardsRateCardIdPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let rateCardId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let rateCardsRateCardIdPatchRequest: RateCardsRateCardIdPatchRequest; //

const { status, data } = await apiInstance.rateCardsRateCardIdPatch(
    rateCardId,
    acceptVersion,
    rateCardsRateCardIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rateCardsRateCardIdPatchRequest** | **RateCardsRateCardIdPatchRequest**|  | |
| **rateCardId** | [**number**] |  | defaults to undefined|
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
|**200** | Default Response |  -  |
|**400** | Default Response |  -  |
|**401** | Default Response |  -  |
|**404** | Default Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reportsHoursPeoplePersonIdGet**
> ReportsHoursPeoplePersonIdGet200Response reportsHoursPeoplePersonIdGet()


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

const { status, data } = await apiInstance.reportsHoursPeoplePersonIdGet(
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

**ReportsHoursPeoplePersonIdGet200Response**

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

# **reportsHoursProjectsProjectIdGet**
> ReportsHoursProjectsProjectIdGet200Response reportsHoursProjectsProjectIdGet()


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

const { status, data } = await apiInstance.reportsHoursProjectsProjectIdGet(
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

**ReportsHoursProjectsProjectIdGet200Response**

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

# **reportsPeoplePersonIdGet**
> ReportsPeoplePersonIdGet200Response reportsPeoplePersonIdGet()

Get a report for a person containing data from the People Overview Report. Available under the Advanced Plan only. Contact help@runn.io to request beta access.

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
let startDate: string; //The start date for the report. For monthly reports, this must be the first day of the month. For weekly reports, this must be a Monday. For quarterly reports, this must be the first day of the quarter. Format: YYYY-MM-DD (optional) (default to undefined)
let periodType: 'monthly' | 'weekly' | 'quarterly'; //The time interval at which to split the metrics on the report. A monthly report made in June, for instance, will show revenue for June, July, August, and September. (optional) (default to 'monthly')

const { status, data } = await apiInstance.reportsPeoplePersonIdGet(
    personId,
    acceptVersion,
    startDate,
    periodType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **personId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **startDate** | [**string**] | The start date for the report. For monthly reports, this must be the first day of the month. For weekly reports, this must be a Monday. For quarterly reports, this must be the first day of the quarter. Format: YYYY-MM-DD | (optional) defaults to undefined|
| **periodType** | [**&#39;monthly&#39; | &#39;weekly&#39; | &#39;quarterly&#39;**]**Array<&#39;monthly&#39; &#124; &#39;weekly&#39; &#124; &#39;quarterly&#39;>** | The time interval at which to split the metrics on the report. A monthly report made in June, for instance, will show revenue for June, July, August, and September. | (optional) defaults to 'monthly'|


### Return type

**ReportsPeoplePersonIdGet200Response**

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

# **reportsProjectsProjectIdGet**
> ReportsProjectsProjectIdGet200Response reportsProjectsProjectIdGet()

Get a report for a project containing data from the Project Overview report. Available under the Advanced Plan only. Contact help@runn.io to request beta access.

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
let startDate: string; //The start date for the report. For monthly reports, this must be the first day of the month. For weekly reports, this must be a Monday. For quarterly reports, this must be the first day of the quarter. Format: YYYY-MM-DD (optional) (default to undefined)
let periodType: 'monthly' | 'weekly' | 'quarterly'; //The time interval at which to split the metrics on the report. A monthly report made in June, for instance, will show revenue for June, July, August, and September. If not provided, the report will be for the Overview report (all inclusive). (optional) (default to undefined)

const { status, data } = await apiInstance.reportsProjectsProjectIdGet(
    projectId,
    acceptVersion,
    startDate,
    periodType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|
| **startDate** | [**string**] | The start date for the report. For monthly reports, this must be the first day of the month. For weekly reports, this must be a Monday. For quarterly reports, this must be the first day of the quarter. Format: YYYY-MM-DD | (optional) defaults to undefined|
| **periodType** | [**&#39;monthly&#39; | &#39;weekly&#39; | &#39;quarterly&#39;**]**Array<&#39;monthly&#39; &#124; &#39;weekly&#39; &#124; &#39;quarterly&#39;>** | The time interval at which to split the metrics on the report. A monthly report made in June, for instance, will show revenue for June, July, August, and September. If not provided, the report will be for the Overview report (all inclusive). | (optional) defaults to undefined|


### Return type

**ReportsProjectsProjectIdGet200Response**

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

# **reportsTotalsProjectsGet**
> ReportsTotalsProjectsGet200Response reportsTotalsProjectsGet()


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

const { status, data } = await apiInstance.reportsTotalsProjectsGet(
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

**ReportsTotalsProjectsGet200Response**

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

# **reportsTotalsProjectsProjectIdGet**
> ProjectAggregate reportsTotalsProjectsProjectIdGet()


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

const { status, data } = await apiInstance.reportsTotalsProjectsProjectIdGet(
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

# **rolesGet**
> RolesGet200Response rolesGet()


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

const { status, data } = await apiInstance.rolesGet(
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

**RolesGet200Response**

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

# **rolesPost**
> Role rolesPost(rolesPostRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    RolesPostRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let rolesPostRequest: RolesPostRequest; //

const { status, data } = await apiInstance.rolesPost(
    acceptVersion,
    rolesPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rolesPostRequest** | **RolesPostRequest**|  | |
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

# **rolesRoleIdGet**
> Role rolesRoleIdGet()


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

const { status, data } = await apiInstance.rolesRoleIdGet(
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

# **rolesRoleIdPatch**
> Role rolesRoleIdPatch(rolesRoleIdPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    RolesRoleIdPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let roleId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let rolesRoleIdPatchRequest: RolesRoleIdPatchRequest; //

const { status, data } = await apiInstance.rolesRoleIdPatch(
    roleId,
    acceptVersion,
    rolesRoleIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rolesRoleIdPatchRequest** | **RolesRoleIdPatchRequest**|  | |
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

# **skillsGet**
> SkillsGet200Response skillsGet()


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

const { status, data } = await apiInstance.skillsGet(
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

**SkillsGet200Response**

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

# **skillsPost**
> Skill skillsPost(customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest: CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest; //

const { status, data } = await apiInstance.skillsPost(
    acceptVersion,
    customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest** | **CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest**|  | |
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

# **skillsSkillIdDelete**
> skillsSkillIdDelete()


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

const { status, data } = await apiInstance.skillsSkillIdDelete(
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

# **skillsSkillIdGet**
> Skill skillsSkillIdGet()


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

const { status, data } = await apiInstance.skillsSkillIdGet(
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

# **skillsSkillIdPatch**
> Skill skillsSkillIdPatch(customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let skillId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest: CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest; //

const { status, data } = await apiInstance.skillsSkillIdPatch(
    skillId,
    acceptVersion,
    customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest** | **CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest**|  | |
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

# **skillsSkillIdPeopleGet**
> PeopleGet200Response skillsSkillIdPeopleGet()


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

const { status, data } = await apiInstance.skillsSkillIdPeopleGet(
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

**PeopleGet200Response**

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

# **skillsSkillIdPeoplePost**
> SkillsSkillIdPeoplePost201Response skillsSkillIdPeoplePost(skillsSkillIdPeoplePostRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    SkillsSkillIdPeoplePostRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let skillId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let skillsSkillIdPeoplePostRequest: SkillsSkillIdPeoplePostRequest; //

const { status, data } = await apiInstance.skillsSkillIdPeoplePost(
    skillId,
    acceptVersion,
    skillsSkillIdPeoplePostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **skillsSkillIdPeoplePostRequest** | **SkillsSkillIdPeoplePostRequest**|  | |
| **skillId** | [**number**] |  | defaults to undefined|
| **acceptVersion** | [**&#39;1.0.0&#39;**]**Array<&#39;1.0.0&#39;>** |  | defaults to '1.0.0'|


### Return type

**SkillsSkillIdPeoplePost201Response**

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

# **teamsGet**
> TeamsGet200Response teamsGet()


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

const { status, data } = await apiInstance.teamsGet(
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

**TeamsGet200Response**

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

# **teamsPost**
> Team teamsPost(customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest: CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest; //

const { status, data } = await apiInstance.teamsPost(
    acceptVersion,
    customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest** | **CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest**|  | |
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

# **teamsTeamIdDelete**
> teamsTeamIdDelete()


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

const { status, data } = await apiInstance.teamsTeamIdDelete(
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

# **teamsTeamIdGet**
> Team teamsTeamIdGet()


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

const { status, data } = await apiInstance.teamsTeamIdGet(
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

# **teamsTeamIdPatch**
> Team teamsTeamIdPatch(customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let teamId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest: CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest; //

const { status, data } = await apiInstance.teamsTeamIdPatch(
    teamId,
    acceptVersion,
    customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest** | **CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest**|  | |
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

# **teamsTeamIdPeopleGet**
> PeopleGet200Response teamsTeamIdPeopleGet()


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

const { status, data } = await apiInstance.teamsTeamIdPeopleGet(
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

**PeopleGet200Response**

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

# **timeOffsHolidaysGet**
> PeoplePersonIdTimeOffsHolidaysGet200Response timeOffsHolidaysGet()


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

const { status, data } = await apiInstance.timeOffsHolidaysGet(
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

**PeoplePersonIdTimeOffsHolidaysGet200Response**

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

# **timeOffsHolidaysPost**
> TimeOff timeOffsHolidaysPost(timeOffHolidayInput)


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
let timeOffHolidayInput: TimeOffHolidayInput; //

const { status, data } = await apiInstance.timeOffsHolidaysPost(
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

# **timeOffsHolidaysTimeOffIdDelete**
> timeOffsHolidaysTimeOffIdDelete()


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

const { status, data } = await apiInstance.timeOffsHolidaysTimeOffIdDelete(
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

# **timeOffsLeaveBulkDelete**
> timeOffsLeaveBulkDelete(timeOffsLeaveBulkDeleteRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    TimeOffsLeaveBulkDeleteRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let timeOffsLeaveBulkDeleteRequest: TimeOffsLeaveBulkDeleteRequest; //

const { status, data } = await apiInstance.timeOffsLeaveBulkDelete(
    acceptVersion,
    timeOffsLeaveBulkDeleteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **timeOffsLeaveBulkDeleteRequest** | **TimeOffsLeaveBulkDeleteRequest**|  | |
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

# **timeOffsLeaveBulkPost**
> Array<TimeOff> timeOffsLeaveBulkPost(timeOffsLeaveBulkPostRequest)

 #### Create or Update  This endpoint may return existing time offs if the new time off is a subset of an existing one.  #### Automatic Merging  If one or more existing time offs overlap with the specified start/end date, they will be automatically merged.  #### Partial Time Offs  If the `minutesPerDay` field is provided, automatic merging will only occur if any overlapping time off has the same `minutesPerDay` value. If the `minutesPerDay` value differs, the request will fail.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    TimeOffsLeaveBulkPostRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let timeOffsLeaveBulkPostRequest: TimeOffsLeaveBulkPostRequest; //

const { status, data } = await apiInstance.timeOffsLeaveBulkPost(
    acceptVersion,
    timeOffsLeaveBulkPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **timeOffsLeaveBulkPostRequest** | **TimeOffsLeaveBulkPostRequest**|  | |
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

# **timeOffsLeaveGet**
> PeoplePersonIdTimeOffsLeaveGet200Response timeOffsLeaveGet()


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

const { status, data } = await apiInstance.timeOffsLeaveGet(
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

**PeoplePersonIdTimeOffsLeaveGet200Response**

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

# **timeOffsLeavePost**
> TimeOff timeOffsLeavePost(timeOffLeaveInput)

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
let timeOffLeaveInput: TimeOffLeaveInput; //

const { status, data } = await apiInstance.timeOffsLeavePost(
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

# **timeOffsLeaveTimeOffIdDelete**
> timeOffsLeaveTimeOffIdDelete()


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

const { status, data } = await apiInstance.timeOffsLeaveTimeOffIdDelete(
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

# **timeOffsLeaveTimeOffIdGet**
> TimeOff timeOffsLeaveTimeOffIdGet()


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

const { status, data } = await apiInstance.timeOffsLeaveTimeOffIdGet(
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

# **timeOffsRosteredOffGet**
> PeoplePersonIdTimeOffsLeaveGet200Response timeOffsRosteredOffGet()


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

const { status, data } = await apiInstance.timeOffsRosteredOffGet(
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

**PeoplePersonIdTimeOffsLeaveGet200Response**

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

# **timeOffsRosteredOffTimeOffIdDelete**
> timeOffsRosteredOffTimeOffIdDelete()


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

const { status, data } = await apiInstance.timeOffsRosteredOffTimeOffIdDelete(
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

# **usersGet**
> UsersGet200Response usersGet()

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

const { status, data } = await apiInstance.usersGet(
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

**UsersGet200Response**

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

# **usersUserIdDelete**
> usersUserIdDelete()


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

const { status, data } = await apiInstance.usersUserIdDelete(
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

# **usersUserIdGet**
> User usersUserIdGet()


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

const { status, data } = await apiInstance.usersUserIdGet(
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

# **usersUserIdViewsGet**
> UsersUserIdViewsGet200Response usersUserIdViewsGet()


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

const { status, data } = await apiInstance.usersUserIdViewsGet(
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

**UsersUserIdViewsGet200Response**

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

# **usersUserIdViewsViewIdDelete**
> usersUserIdViewsViewIdDelete()


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

const { status, data } = await apiInstance.usersUserIdViewsViewIdDelete(
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

# **usersUserIdViewsViewIdPost**
> usersUserIdViewsViewIdPost()


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

const { status, data } = await apiInstance.usersUserIdViewsViewIdPost(
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

# **viewsGet**
> UsersUserIdViewsGet200Response viewsGet()


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

const { status, data } = await apiInstance.viewsGet(
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

**UsersUserIdViewsGet200Response**

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

# **workstreamsGet**
> WorkstreamsGet200Response workstreamsGet()


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

const { status, data } = await apiInstance.workstreamsGet(
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

**WorkstreamsGet200Response**

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

# **workstreamsPost**
> Workstream workstreamsPost(customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let acceptVersion: '1.0.0'; // (default to '1.0.0')
let customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest: CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest; //

const { status, data } = await apiInstance.workstreamsPost(
    acceptVersion,
    customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest** | **CustomFieldsSelectSelectFieldIdOptionsSelectOptionIdPatchRequest**|  | |
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

# **workstreamsWorkstreamIdDelete**
> workstreamsWorkstreamIdDelete()


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

const { status, data } = await apiInstance.workstreamsWorkstreamIdDelete(
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

# **workstreamsWorkstreamIdGet**
> Workstream workstreamsWorkstreamIdGet()


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

const { status, data } = await apiInstance.workstreamsWorkstreamIdGet(
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

# **workstreamsWorkstreamIdPatch**
> Workstream workstreamsWorkstreamIdPatch(workstreamsWorkstreamIdPatchRequest)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    WorkstreamsWorkstreamIdPatchRequest
} from 'runn-typescript-sdk';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let workstreamId: number; // (default to undefined)
let acceptVersion: '1.0.0'; // (default to '1.0.0')
let workstreamsWorkstreamIdPatchRequest: WorkstreamsWorkstreamIdPatchRequest; //

const { status, data } = await apiInstance.workstreamsWorkstreamIdPatch(
    workstreamId,
    acceptVersion,
    workstreamsWorkstreamIdPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workstreamsWorkstreamIdPatchRequest** | **WorkstreamsWorkstreamIdPatchRequest**|  | |
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

