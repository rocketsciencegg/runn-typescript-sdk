"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./actor"), exports);
__exportStar(require("./actorApi"), exports);
__exportStar(require("./actorCsv"), exports);
__exportStar(require("./actorIntegration"), exports);
__exportStar(require("./actorRunnSupport"), exports);
__exportStar(require("./actorSystem"), exports);
__exportStar(require("./actorUser"), exports);
__exportStar(require("./actual"), exports);
__exportStar(require("./actualInput"), exports);
__exportStar(require("./actualTimeEntry"), exports);
__exportStar(require("./addPeopleToSkill201Response"), exports);
__exportStar(require("./addPeopleToSkillRequest"), exports);
__exportStar(require("./addPeopleToSkillRequestPeopleInner"), exports);
__exportStar(require("./addPersonSkillRequest"), exports);
__exportStar(require("./addPersonSkillRequestLevel"), exports);
__exportStar(require("./addPersonToProjectRequest"), exports);
__exportStar(require("./addPersonToTeamRequest"), exports);
__exportStar(require("./assignment"), exports);
__exportStar(require("./badRequest"), exports);
__exportStar(require("./client"), exports);
__exportStar(require("./clientInput"), exports);
__exportStar(require("./collectionPerson"), exports);
__exportStar(require("./collectionPersonManagersInner"), exports);
__exportStar(require("./competency"), exports);
__exportStar(require("./conflict"), exports);
__exportStar(require("./contract"), exports);
__exportStar(require("./contractInput"), exports);
__exportStar(require("./createActualsBulkRequest"), exports);
__exportStar(require("./createAssignmentRequest"), exports);
__exportStar(require("./createCheckboxCustomFieldRequest"), exports);
__exportStar(require("./createClientsBulkRequest"), exports);
__exportStar(require("./createDateCustomFieldRequest"), exports);
__exportStar(require("./createInvitationRequest"), exports);
__exportStar(require("./createInvitationRequestAllOfAnyOf"), exports);
__exportStar(require("./createInvitationRequestAllOfAnyOf1"), exports);
__exportStar(require("./createLeaveTimeOffsBulkRequest"), exports);
__exportStar(require("./createNoteForProjectRequest"), exports);
__exportStar(require("./createPersonRequest"), exports);
__exportStar(require("./createPersonRequestRosteredDays"), exports);
__exportStar(require("./createPlaceholderRequest"), exports);
__exportStar(require("./createProjectBudgetRoleRequest"), exports);
__exportStar(require("./createProjectMilestoneRequest"), exports);
__exportStar(require("./createProjectMilestoneRequestIcon"), exports);
__exportStar(require("./createProjectPersonRequestRequest"), exports);
__exportStar(require("./createProjectPhaseRequest"), exports);
__exportStar(require("./createProjectRequest"), exports);
__exportStar(require("./createProjectRequestAnyOf"), exports);
__exportStar(require("./createProjectRequestAnyOf1"), exports);
__exportStar(require("./createProjectRequestAnyOf1FromTemplate"), exports);
__exportStar(require("./createRateCardRequest"), exports);
__exportStar(require("./createRateCardRequestReferencesInner"), exports);
__exportStar(require("./createRoleRequest"), exports);
__exportStar(require("./createSelectCustomFieldRequest"), exports);
__exportStar(require("./createSelectCustomFieldRequestOptionsInner"), exports);
__exportStar(require("./customCheckboxFieldCollection"), exports);
__exportStar(require("./customDateFieldCollection"), exports);
__exportStar(require("./customFieldCheckbox"), exports);
__exportStar(require("./customFieldDate"), exports);
__exportStar(require("./customFieldSelect"), exports);
__exportStar(require("./customFieldText"), exports);
__exportStar(require("./customSelectFieldCollection"), exports);
__exportStar(require("./customTextFieldCollection"), exports);
__exportStar(require("./deleteLeaveTimeOffsBulkRequest"), exports);
__exportStar(require("./event"), exports);
__exportStar(require("./eventActualDeleted"), exports);
__exportStar(require("./eventActualDeletedActual"), exports);
__exportStar(require("./eventAssignmentDeleted"), exports);
__exportStar(require("./eventAssignmentDeletedAssignment"), exports);
__exportStar(require("./eventContractDeleted"), exports);
__exportStar(require("./eventContractDeletedContract"), exports);
__exportStar(require("./eventPersonDeleted"), exports);
__exportStar(require("./eventPersonDeletedPerson"), exports);
__exportStar(require("./eventProjectDeleted"), exports);
__exportStar(require("./eventProjectDeletedProject"), exports);
__exportStar(require("./eventSubresourcePerson"), exports);
__exportStar(require("./eventSubresourcePhase"), exports);
__exportStar(require("./eventSubresourceProject"), exports);
__exportStar(require("./eventSubresourceRole"), exports);
__exportStar(require("./eventSubresourceWorkstream"), exports);
__exportStar(require("./eventTimeOffDeleted"), exports);
__exportStar(require("./eventTimeOffDeletedTimeOff"), exports);
__exportStar(require("./getCurrentUser200Response"), exports);
__exportStar(require("./getPersonCurrentContract404Response"), exports);
__exportStar(require("./getPersonCurrentTeam200Response"), exports);
__exportStar(require("./getPersonCurrentTeam200ResponseValuesInner"), exports);
__exportStar(require("./getPersonHoursReport200Response"), exports);
__exportStar(require("./getProjectHoursReport200Response"), exports);
__exportStar(require("./getProjectTimesheetLock200Response"), exports);
__exportStar(require("./holiday"), exports);
__exportStar(require("./holidayGroup"), exports);
__exportStar(require("./invitation"), exports);
__exportStar(require("./listActuals200Response"), exports);
__exportStar(require("./listAssignments200Response"), exports);
__exportStar(require("./listBudgetRoles200Response"), exports);
__exportStar(require("./listCheckboxCustomFields200Response"), exports);
__exportStar(require("./listClientProjects200Response"), exports);
__exportStar(require("./listClients200Response"), exports);
__exportStar(require("./listContracts200Response"), exports);
__exportStar(require("./listDateCustomFields200Response"), exports);
__exportStar(require("./listEvents200Response"), exports);
__exportStar(require("./listHolidayGroupHolidays200Response"), exports);
__exportStar(require("./listHolidayGroups200Response"), exports);
__exportStar(require("./listInvitations200Response"), exports);
__exportStar(require("./listMilestones200Response"), exports);
__exportStar(require("./listOtherExpenses200Response"), exports);
__exportStar(require("./listPeople200Response"), exports);
__exportStar(require("./listPeopleCustomFields200Response"), exports);
__exportStar(require("./listPeopleNotes200Response"), exports);
__exportStar(require("./listPeopleSkills200Response"), exports);
__exportStar(require("./listPeopleTags200Response"), exports);
__exportStar(require("./listPeopleTags200ResponseValuesInner"), exports);
__exportStar(require("./listPersonHolidays200Response"), exports);
__exportStar(require("./listPersonHolidays200ResponseValuesInner"), exports);
__exportStar(require("./listPersonLeave200Response"), exports);
__exportStar(require("./listPersonRequests200Response"), exports);
__exportStar(require("./listPersonSkills200Response"), exports);
__exportStar(require("./listPhases200Response"), exports);
__exportStar(require("./listPlaceholders200Response"), exports);
__exportStar(require("./listProjectCustomFields200Response"), exports);
__exportStar(require("./listProjectMembers200Response"), exports);
__exportStar(require("./listProjectMembers200ResponseValuesInner"), exports);
__exportStar(require("./listProjectNotes200Response"), exports);
__exportStar(require("./listProjectRates200Response"), exports);
__exportStar(require("./listProjectTags200Response"), exports);
__exportStar(require("./listProjectTotalsReport200Response"), exports);
__exportStar(require("./listProjectWorkstreams200Response"), exports);
__exportStar(require("./listProjectWorkstreams200ResponseValuesInner"), exports);
__exportStar(require("./listProjectWorkstreamsForProject200Response"), exports);
__exportStar(require("./listRateCards200Response"), exports);
__exportStar(require("./listRoles200Response"), exports);
__exportStar(require("./listSelectCustomFields200Response"), exports);
__exportStar(require("./listSkills200Response"), exports);
__exportStar(require("./listTeams200Response"), exports);
__exportStar(require("./listTextCustomFields200Response"), exports);
__exportStar(require("./listUserViews200Response"), exports);
__exportStar(require("./listUsers200Response"), exports);
__exportStar(require("./listWorkstreams200Response"), exports);
__exportStar(require("./milestone"), exports);
__exportStar(require("./modifiedAfter"), exports);
__exportStar(require("./notFound"), exports);
__exportStar(require("./person"), exports);
__exportStar(require("./personCompetency"), exports);
__exportStar(require("./personCompetencyAllOfLevel"), exports);
__exportStar(require("./personCustomField"), exports);
__exportStar(require("./personCustomFieldCustomFieldsInner"), exports);
__exportStar(require("./personCustomFields"), exports);
__exportStar(require("./personCustomFieldsCheckboxInner"), exports);
__exportStar(require("./personCustomFieldsDateInner"), exports);
__exportStar(require("./personCustomFieldsSelectInner"), exports);
__exportStar(require("./personCustomFieldsSelectInnerValuesInner"), exports);
__exportStar(require("./personCustomFieldsTextInner"), exports);
__exportStar(require("./personNote"), exports);
__exportStar(require("./personNotesInner"), exports);
__exportStar(require("./personRequest"), exports);
__exportStar(require("./personSkillsInner"), exports);
__exportStar(require("./placeholder"), exports);
__exportStar(require("./placeholderInput"), exports);
__exportStar(require("./project"), exports);
__exportStar(require("./projectAggregate"), exports);
__exportStar(require("./projectAggregateActuals"), exports);
__exportStar(require("./projectAggregateAssignments"), exports);
__exportStar(require("./projectBudgetRole"), exports);
__exportStar(require("./projectCustomField"), exports);
__exportStar(require("./projectNote"), exports);
__exportStar(require("./projectOtherExpense"), exports);
__exportStar(require("./projectOtherExpense1"), exports);
__exportStar(require("./projectPhase"), exports);
__exportStar(require("./projectRate"), exports);
__exportStar(require("./projectTag"), exports);
__exportStar(require("./projectWorkstream"), exports);
__exportStar(require("./rateCard"), exports);
__exportStar(require("./rateCardRatesInner"), exports);
__exportStar(require("./rateCardRatesInnerRole"), exports);
__exportStar(require("./reference"), exports);
__exportStar(require("./reportsHoursPeople"), exports);
__exportStar(require("./reportsHoursPeopleActuals"), exports);
__exportStar(require("./reportsHoursPeopleAssignments"), exports);
__exportStar(require("./reportsHoursProjects"), exports);
__exportStar(require("./role"), exports);
__exportStar(require("./rosteredDays"), exports);
__exportStar(require("./skill"), exports);
__exportStar(require("./sortOrder"), exports);
__exportStar(require("./tag"), exports);
__exportStar(require("./team"), exports);
__exportStar(require("./timeOff"), exports);
__exportStar(require("./timeOffHolidayInput"), exports);
__exportStar(require("./timeOffLeaveInput"), exports);
__exportStar(require("./unauthorized"), exports);
__exportStar(require("./unprocessableEntity"), exports);
__exportStar(require("./updateCheckboxCustomFieldRequest"), exports);
__exportStar(require("./updateClientRequest"), exports);
__exportStar(require("./updateContractRequest"), exports);
__exportStar(require("./updateContractRequestRosteredDays"), exports);
__exportStar(require("./updateDateCustomFieldRequest"), exports);
__exportStar(require("./updatePeopleTagRequest"), exports);
__exportStar(require("./updatePersonCheckboxCustomFieldRequest"), exports);
__exportStar(require("./updatePersonDateCustomFieldRequest"), exports);
__exportStar(require("./updatePersonRequest"), exports);
__exportStar(require("./updatePersonRequestTagsInner"), exports);
__exportStar(require("./updatePersonSelectCustomFieldRequest"), exports);
__exportStar(require("./updatePersonSelectCustomFieldRequestValuesInner"), exports);
__exportStar(require("./updatePersonSkillRequest"), exports);
__exportStar(require("./updatePersonTextCustomFieldRequest"), exports);
__exportStar(require("./updateProjectBudgetRoleRequest"), exports);
__exportStar(require("./updateProjectBudgetRoleRequestAnyOf"), exports);
__exportStar(require("./updateProjectBudgetRoleRequestAnyOf1"), exports);
__exportStar(require("./updateProjectMilestoneRequest"), exports);
__exportStar(require("./updateProjectPersonRequest200Response"), exports);
__exportStar(require("./updateProjectPersonRequestRequest"), exports);
__exportStar(require("./updateProjectPhaseRequest"), exports);
__exportStar(require("./updateProjectRequest"), exports);
__exportStar(require("./updateProjectRoleRateRequest"), exports);
__exportStar(require("./updateProjectTimesheetLockRequest"), exports);
__exportStar(require("./updateProjectTimesheetLockRequestAnyOf"), exports);
__exportStar(require("./updateProjectTimesheetLockRequestAnyOf1"), exports);
__exportStar(require("./updateRoleRequest"), exports);
__exportStar(require("./updateSelectCustomFieldOption200Response"), exports);
__exportStar(require("./updateSelectCustomFieldOption200ResponseOption"), exports);
__exportStar(require("./updateSelectCustomFieldOptionRequest"), exports);
__exportStar(require("./updateWorkstreamRequest"), exports);
__exportStar(require("./user"), exports);
__exportStar(require("./userPermissions"), exports);
__exportStar(require("./view"), exports);
__exportStar(require("./workstream"), exports);
var actor_1 = require("./actor");
var actorApi_1 = require("./actorApi");
var actorCsv_1 = require("./actorCsv");
var actorIntegration_1 = require("./actorIntegration");
var actorRunnSupport_1 = require("./actorRunnSupport");
var actorSystem_1 = require("./actorSystem");
var actorUser_1 = require("./actorUser");
var actual_1 = require("./actual");
var actualInput_1 = require("./actualInput");
var actualTimeEntry_1 = require("./actualTimeEntry");
var addPeopleToSkill201Response_1 = require("./addPeopleToSkill201Response");
var addPeopleToSkillRequest_1 = require("./addPeopleToSkillRequest");
var addPeopleToSkillRequestPeopleInner_1 = require("./addPeopleToSkillRequestPeopleInner");
var addPersonSkillRequest_1 = require("./addPersonSkillRequest");
var addPersonSkillRequestLevel_1 = require("./addPersonSkillRequestLevel");
var addPersonToProjectRequest_1 = require("./addPersonToProjectRequest");
var addPersonToTeamRequest_1 = require("./addPersonToTeamRequest");
var assignment_1 = require("./assignment");
var badRequest_1 = require("./badRequest");
var client_1 = require("./client");
var clientInput_1 = require("./clientInput");
var collectionPerson_1 = require("./collectionPerson");
var collectionPersonManagersInner_1 = require("./collectionPersonManagersInner");
var competency_1 = require("./competency");
var conflict_1 = require("./conflict");
var contract_1 = require("./contract");
var contractInput_1 = require("./contractInput");
var createActualsBulkRequest_1 = require("./createActualsBulkRequest");
var createAssignmentRequest_1 = require("./createAssignmentRequest");
var createCheckboxCustomFieldRequest_1 = require("./createCheckboxCustomFieldRequest");
var createClientsBulkRequest_1 = require("./createClientsBulkRequest");
var createDateCustomFieldRequest_1 = require("./createDateCustomFieldRequest");
var createInvitationRequest_1 = require("./createInvitationRequest");
var createInvitationRequestAllOfAnyOf_1 = require("./createInvitationRequestAllOfAnyOf");
var createInvitationRequestAllOfAnyOf1_1 = require("./createInvitationRequestAllOfAnyOf1");
var createLeaveTimeOffsBulkRequest_1 = require("./createLeaveTimeOffsBulkRequest");
var createNoteForProjectRequest_1 = require("./createNoteForProjectRequest");
var createPersonRequest_1 = require("./createPersonRequest");
var createPersonRequestRosteredDays_1 = require("./createPersonRequestRosteredDays");
var createPlaceholderRequest_1 = require("./createPlaceholderRequest");
var createProjectBudgetRoleRequest_1 = require("./createProjectBudgetRoleRequest");
var createProjectMilestoneRequest_1 = require("./createProjectMilestoneRequest");
var createProjectMilestoneRequestIcon_1 = require("./createProjectMilestoneRequestIcon");
var createProjectPersonRequestRequest_1 = require("./createProjectPersonRequestRequest");
var createProjectPhaseRequest_1 = require("./createProjectPhaseRequest");
var createProjectRequest_1 = require("./createProjectRequest");
var createProjectRequestAnyOf_1 = require("./createProjectRequestAnyOf");
var createProjectRequestAnyOf1_1 = require("./createProjectRequestAnyOf1");
var createProjectRequestAnyOf1FromTemplate_1 = require("./createProjectRequestAnyOf1FromTemplate");
var createRateCardRequest_1 = require("./createRateCardRequest");
var createRateCardRequestReferencesInner_1 = require("./createRateCardRequestReferencesInner");
var createRoleRequest_1 = require("./createRoleRequest");
var createSelectCustomFieldRequest_1 = require("./createSelectCustomFieldRequest");
var createSelectCustomFieldRequestOptionsInner_1 = require("./createSelectCustomFieldRequestOptionsInner");
var customCheckboxFieldCollection_1 = require("./customCheckboxFieldCollection");
var customDateFieldCollection_1 = require("./customDateFieldCollection");
var customFieldCheckbox_1 = require("./customFieldCheckbox");
var customFieldDate_1 = require("./customFieldDate");
var customFieldSelect_1 = require("./customFieldSelect");
var customFieldText_1 = require("./customFieldText");
var customSelectFieldCollection_1 = require("./customSelectFieldCollection");
var customTextFieldCollection_1 = require("./customTextFieldCollection");
var deleteLeaveTimeOffsBulkRequest_1 = require("./deleteLeaveTimeOffsBulkRequest");
var event_1 = require("./event");
var eventActualDeleted_1 = require("./eventActualDeleted");
var eventActualDeletedActual_1 = require("./eventActualDeletedActual");
var eventAssignmentDeleted_1 = require("./eventAssignmentDeleted");
var eventAssignmentDeletedAssignment_1 = require("./eventAssignmentDeletedAssignment");
var eventContractDeleted_1 = require("./eventContractDeleted");
var eventContractDeletedContract_1 = require("./eventContractDeletedContract");
var eventPersonDeleted_1 = require("./eventPersonDeleted");
var eventPersonDeletedPerson_1 = require("./eventPersonDeletedPerson");
var eventProjectDeleted_1 = require("./eventProjectDeleted");
var eventProjectDeletedProject_1 = require("./eventProjectDeletedProject");
var eventSubresourcePerson_1 = require("./eventSubresourcePerson");
var eventSubresourcePhase_1 = require("./eventSubresourcePhase");
var eventSubresourceProject_1 = require("./eventSubresourceProject");
var eventSubresourceRole_1 = require("./eventSubresourceRole");
var eventSubresourceWorkstream_1 = require("./eventSubresourceWorkstream");
var eventTimeOffDeleted_1 = require("./eventTimeOffDeleted");
var eventTimeOffDeletedTimeOff_1 = require("./eventTimeOffDeletedTimeOff");
var getCurrentUser200Response_1 = require("./getCurrentUser200Response");
var getPersonCurrentContract404Response_1 = require("./getPersonCurrentContract404Response");
var getPersonCurrentTeam200Response_1 = require("./getPersonCurrentTeam200Response");
var getPersonCurrentTeam200ResponseValuesInner_1 = require("./getPersonCurrentTeam200ResponseValuesInner");
var getPersonHoursReport200Response_1 = require("./getPersonHoursReport200Response");
var getProjectHoursReport200Response_1 = require("./getProjectHoursReport200Response");
var getProjectTimesheetLock200Response_1 = require("./getProjectTimesheetLock200Response");
var holiday_1 = require("./holiday");
var holidayGroup_1 = require("./holidayGroup");
var invitation_1 = require("./invitation");
var listActuals200Response_1 = require("./listActuals200Response");
var listAssignments200Response_1 = require("./listAssignments200Response");
var listBudgetRoles200Response_1 = require("./listBudgetRoles200Response");
var listCheckboxCustomFields200Response_1 = require("./listCheckboxCustomFields200Response");
var listClientProjects200Response_1 = require("./listClientProjects200Response");
var listClients200Response_1 = require("./listClients200Response");
var listContracts200Response_1 = require("./listContracts200Response");
var listDateCustomFields200Response_1 = require("./listDateCustomFields200Response");
var listEvents200Response_1 = require("./listEvents200Response");
var listHolidayGroupHolidays200Response_1 = require("./listHolidayGroupHolidays200Response");
var listHolidayGroups200Response_1 = require("./listHolidayGroups200Response");
var listInvitations200Response_1 = require("./listInvitations200Response");
var listMilestones200Response_1 = require("./listMilestones200Response");
var listOtherExpenses200Response_1 = require("./listOtherExpenses200Response");
var listPeople200Response_1 = require("./listPeople200Response");
var listPeopleCustomFields200Response_1 = require("./listPeopleCustomFields200Response");
var listPeopleNotes200Response_1 = require("./listPeopleNotes200Response");
var listPeopleSkills200Response_1 = require("./listPeopleSkills200Response");
var listPeopleTags200Response_1 = require("./listPeopleTags200Response");
var listPeopleTags200ResponseValuesInner_1 = require("./listPeopleTags200ResponseValuesInner");
var listPersonHolidays200Response_1 = require("./listPersonHolidays200Response");
var listPersonHolidays200ResponseValuesInner_1 = require("./listPersonHolidays200ResponseValuesInner");
var listPersonLeave200Response_1 = require("./listPersonLeave200Response");
var listPersonRequests200Response_1 = require("./listPersonRequests200Response");
var listPersonSkills200Response_1 = require("./listPersonSkills200Response");
var listPhases200Response_1 = require("./listPhases200Response");
var listPlaceholders200Response_1 = require("./listPlaceholders200Response");
var listProjectCustomFields200Response_1 = require("./listProjectCustomFields200Response");
var listProjectMembers200Response_1 = require("./listProjectMembers200Response");
var listProjectMembers200ResponseValuesInner_1 = require("./listProjectMembers200ResponseValuesInner");
var listProjectNotes200Response_1 = require("./listProjectNotes200Response");
var listProjectRates200Response_1 = require("./listProjectRates200Response");
var listProjectTags200Response_1 = require("./listProjectTags200Response");
var listProjectTotalsReport200Response_1 = require("./listProjectTotalsReport200Response");
var listProjectWorkstreams200Response_1 = require("./listProjectWorkstreams200Response");
var listProjectWorkstreams200ResponseValuesInner_1 = require("./listProjectWorkstreams200ResponseValuesInner");
var listProjectWorkstreamsForProject200Response_1 = require("./listProjectWorkstreamsForProject200Response");
var listRateCards200Response_1 = require("./listRateCards200Response");
var listRoles200Response_1 = require("./listRoles200Response");
var listSelectCustomFields200Response_1 = require("./listSelectCustomFields200Response");
var listSkills200Response_1 = require("./listSkills200Response");
var listTeams200Response_1 = require("./listTeams200Response");
var listTextCustomFields200Response_1 = require("./listTextCustomFields200Response");
var listUserViews200Response_1 = require("./listUserViews200Response");
var listUsers200Response_1 = require("./listUsers200Response");
var listWorkstreams200Response_1 = require("./listWorkstreams200Response");
var milestone_1 = require("./milestone");
var modifiedAfter_1 = require("./modifiedAfter");
var notFound_1 = require("./notFound");
var person_1 = require("./person");
var personCompetency_1 = require("./personCompetency");
var personCompetencyAllOfLevel_1 = require("./personCompetencyAllOfLevel");
var personCustomField_1 = require("./personCustomField");
var personCustomFieldCustomFieldsInner_1 = require("./personCustomFieldCustomFieldsInner");
var personCustomFields_1 = require("./personCustomFields");
var personCustomFieldsCheckboxInner_1 = require("./personCustomFieldsCheckboxInner");
var personCustomFieldsDateInner_1 = require("./personCustomFieldsDateInner");
var personCustomFieldsSelectInner_1 = require("./personCustomFieldsSelectInner");
var personCustomFieldsSelectInnerValuesInner_1 = require("./personCustomFieldsSelectInnerValuesInner");
var personCustomFieldsTextInner_1 = require("./personCustomFieldsTextInner");
var personNote_1 = require("./personNote");
var personNotesInner_1 = require("./personNotesInner");
var personRequest_1 = require("./personRequest");
var personSkillsInner_1 = require("./personSkillsInner");
var placeholder_1 = require("./placeholder");
var placeholderInput_1 = require("./placeholderInput");
var project_1 = require("./project");
var projectAggregate_1 = require("./projectAggregate");
var projectAggregateActuals_1 = require("./projectAggregateActuals");
var projectAggregateAssignments_1 = require("./projectAggregateAssignments");
var projectBudgetRole_1 = require("./projectBudgetRole");
var projectCustomField_1 = require("./projectCustomField");
var projectNote_1 = require("./projectNote");
var projectOtherExpense_1 = require("./projectOtherExpense");
var projectOtherExpense1_1 = require("./projectOtherExpense1");
var projectPhase_1 = require("./projectPhase");
var projectRate_1 = require("./projectRate");
var projectTag_1 = require("./projectTag");
var projectWorkstream_1 = require("./projectWorkstream");
var rateCard_1 = require("./rateCard");
var rateCardRatesInner_1 = require("./rateCardRatesInner");
var rateCardRatesInnerRole_1 = require("./rateCardRatesInnerRole");
var reference_1 = require("./reference");
var reportsHoursPeople_1 = require("./reportsHoursPeople");
var reportsHoursPeopleActuals_1 = require("./reportsHoursPeopleActuals");
var reportsHoursPeopleAssignments_1 = require("./reportsHoursPeopleAssignments");
var reportsHoursProjects_1 = require("./reportsHoursProjects");
var role_1 = require("./role");
var rosteredDays_1 = require("./rosteredDays");
var skill_1 = require("./skill");
var sortOrder_1 = require("./sortOrder");
var tag_1 = require("./tag");
var team_1 = require("./team");
var timeOff_1 = require("./timeOff");
var timeOffHolidayInput_1 = require("./timeOffHolidayInput");
var timeOffLeaveInput_1 = require("./timeOffLeaveInput");
var unauthorized_1 = require("./unauthorized");
var unprocessableEntity_1 = require("./unprocessableEntity");
var updateCheckboxCustomFieldRequest_1 = require("./updateCheckboxCustomFieldRequest");
var updateClientRequest_1 = require("./updateClientRequest");
var updateContractRequest_1 = require("./updateContractRequest");
var updateContractRequestRosteredDays_1 = require("./updateContractRequestRosteredDays");
var updateDateCustomFieldRequest_1 = require("./updateDateCustomFieldRequest");
var updatePeopleTagRequest_1 = require("./updatePeopleTagRequest");
var updatePersonCheckboxCustomFieldRequest_1 = require("./updatePersonCheckboxCustomFieldRequest");
var updatePersonDateCustomFieldRequest_1 = require("./updatePersonDateCustomFieldRequest");
var updatePersonRequest_1 = require("./updatePersonRequest");
var updatePersonRequestTagsInner_1 = require("./updatePersonRequestTagsInner");
var updatePersonSelectCustomFieldRequest_1 = require("./updatePersonSelectCustomFieldRequest");
var updatePersonSelectCustomFieldRequestValuesInner_1 = require("./updatePersonSelectCustomFieldRequestValuesInner");
var updatePersonSkillRequest_1 = require("./updatePersonSkillRequest");
var updatePersonTextCustomFieldRequest_1 = require("./updatePersonTextCustomFieldRequest");
var updateProjectBudgetRoleRequest_1 = require("./updateProjectBudgetRoleRequest");
var updateProjectBudgetRoleRequestAnyOf_1 = require("./updateProjectBudgetRoleRequestAnyOf");
var updateProjectBudgetRoleRequestAnyOf1_1 = require("./updateProjectBudgetRoleRequestAnyOf1");
var updateProjectMilestoneRequest_1 = require("./updateProjectMilestoneRequest");
var updateProjectPersonRequest200Response_1 = require("./updateProjectPersonRequest200Response");
var updateProjectPersonRequestRequest_1 = require("./updateProjectPersonRequestRequest");
var updateProjectPhaseRequest_1 = require("./updateProjectPhaseRequest");
var updateProjectRequest_1 = require("./updateProjectRequest");
var updateProjectRoleRateRequest_1 = require("./updateProjectRoleRateRequest");
var updateProjectTimesheetLockRequest_1 = require("./updateProjectTimesheetLockRequest");
var updateProjectTimesheetLockRequestAnyOf_1 = require("./updateProjectTimesheetLockRequestAnyOf");
var updateProjectTimesheetLockRequestAnyOf1_1 = require("./updateProjectTimesheetLockRequestAnyOf1");
var updateRoleRequest_1 = require("./updateRoleRequest");
var updateSelectCustomFieldOption200Response_1 = require("./updateSelectCustomFieldOption200Response");
var updateSelectCustomFieldOption200ResponseOption_1 = require("./updateSelectCustomFieldOption200ResponseOption");
var updateSelectCustomFieldOptionRequest_1 = require("./updateSelectCustomFieldOptionRequest");
var updateWorkstreamRequest_1 = require("./updateWorkstreamRequest");
var user_1 = require("./user");
var userPermissions_1 = require("./userPermissions");
var view_1 = require("./view");
var workstream_1 = require("./workstream");
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var enumsMap = {
    "Actor.TypeEnum": actor_1.Actor.TypeEnum,
    "ActorApi.TypeEnum": actorApi_1.ActorApi.TypeEnum,
    "ActorCsv.TypeEnum": actorCsv_1.ActorCsv.TypeEnum,
    "ActorIntegration.TypeEnum": actorIntegration_1.ActorIntegration.TypeEnum,
    "ActorRunnSupport.TypeEnum": actorRunnSupport_1.ActorRunnSupport.TypeEnum,
    "ActorSystem.TypeEnum": actorSystem_1.ActorSystem.TypeEnum,
    "ActorUser.TypeEnum": actorUser_1.ActorUser.TypeEnum,
    "BadRequest.ErrorEnum": badRequest_1.BadRequest.ErrorEnum,
    "BadRequest.StatusCodeEnum": badRequest_1.BadRequest.StatusCodeEnum,
    "Conflict.ErrorEnum": conflict_1.Conflict.ErrorEnum,
    "Conflict.StatusCodeEnum": conflict_1.Conflict.StatusCodeEnum,
    "ContractInput.EmploymentTypeEnum": contractInput_1.ContractInput.EmploymentTypeEnum,
    "CreateCheckboxCustomFieldRequest.ModelEnum": createCheckboxCustomFieldRequest_1.CreateCheckboxCustomFieldRequest.ModelEnum,
    "CreateDateCustomFieldRequest.ModelEnum": createDateCustomFieldRequest_1.CreateDateCustomFieldRequest.ModelEnum,
    "CreateInvitationRequest.UserTypeEnum": createInvitationRequest_1.CreateInvitationRequest.UserTypeEnum,
    "CreateInvitationRequest.FinancialPermissionEnum": createInvitationRequest_1.CreateInvitationRequest.FinancialPermissionEnum,
    "CreateInvitationRequest.EditProjectsPermissionEnum": createInvitationRequest_1.CreateInvitationRequest.EditProjectsPermissionEnum,
    "CreateInvitationRequest.EditOthersPermissionEnum": createInvitationRequest_1.CreateInvitationRequest.EditOthersPermissionEnum,
    "CreateInvitationRequest.ManageProjectsPermissionEnum": createInvitationRequest_1.CreateInvitationRequest.ManageProjectsPermissionEnum,
    "CreateInvitationRequest.ManageOthersPermissionEnum": createInvitationRequest_1.CreateInvitationRequest.ManageOthersPermissionEnum,
    "CreateInvitationRequestAllOfAnyOf.EditProjectsPermissionEnum": createInvitationRequestAllOfAnyOf_1.CreateInvitationRequestAllOfAnyOf.EditProjectsPermissionEnum,
    "CreateInvitationRequestAllOfAnyOf.EditOthersPermissionEnum": createInvitationRequestAllOfAnyOf_1.CreateInvitationRequestAllOfAnyOf.EditOthersPermissionEnum,
    "CreateInvitationRequestAllOfAnyOf1.ManageProjectsPermissionEnum": createInvitationRequestAllOfAnyOf1_1.CreateInvitationRequestAllOfAnyOf1.ManageProjectsPermissionEnum,
    "CreateInvitationRequestAllOfAnyOf1.ManageOthersPermissionEnum": createInvitationRequestAllOfAnyOf1_1.CreateInvitationRequestAllOfAnyOf1.ManageOthersPermissionEnum,
    "CreatePersonRequest.EmploymentTypeEnum": createPersonRequest_1.CreatePersonRequest.EmploymentTypeEnum,
    "CreateProjectPersonRequestRequest.StatusEnum": createProjectPersonRequestRequest_1.CreateProjectPersonRequestRequest.StatusEnum,
    "CreateProjectPhaseRequest.ColorEnum": createProjectPhaseRequest_1.CreateProjectPhaseRequest.ColorEnum,
    "CreateProjectRequest.PricingModelEnum": createProjectRequest_1.CreateProjectRequest.PricingModelEnum,
    "CreateProjectRequest.RateTypeEnum": createProjectRequest_1.CreateProjectRequest.RateTypeEnum,
    "CreateProjectRequestAnyOf.PricingModelEnum": createProjectRequestAnyOf_1.CreateProjectRequestAnyOf.PricingModelEnum,
    "CreateProjectRequestAnyOf.RateTypeEnum": createProjectRequestAnyOf_1.CreateProjectRequestAnyOf.RateTypeEnum,
    "CreateRateCardRequest.RateTypeEnum": createRateCardRequest_1.CreateRateCardRequest.RateTypeEnum,
    "CreateSelectCustomFieldRequest.ModelEnum": createSelectCustomFieldRequest_1.CreateSelectCustomFieldRequest.ModelEnum,
    "CustomCheckboxFieldCollection.TypeEnum": customCheckboxFieldCollection_1.CustomCheckboxFieldCollection.TypeEnum,
    "CustomDateFieldCollection.TypeEnum": customDateFieldCollection_1.CustomDateFieldCollection.TypeEnum,
    "CustomFieldCheckbox.ModelEnum": customFieldCheckbox_1.CustomFieldCheckbox.ModelEnum,
    "CustomFieldDate.ModelEnum": customFieldDate_1.CustomFieldDate.ModelEnum,
    "CustomFieldSelect.ModelEnum": customFieldSelect_1.CustomFieldSelect.ModelEnum,
    "CustomFieldText.ModelEnum": customFieldText_1.CustomFieldText.ModelEnum,
    "CustomSelectFieldCollection.TypeEnum": customSelectFieldCollection_1.CustomSelectFieldCollection.TypeEnum,
    "CustomTextFieldCollection.TypeEnum": customTextFieldCollection_1.CustomTextFieldCollection.TypeEnum,
    "Event.TypeEnum": event_1.Event.TypeEnum,
    "EventActualDeleted.TypeEnum": eventActualDeleted_1.EventActualDeleted.TypeEnum,
    "EventAssignmentDeleted.TypeEnum": eventAssignmentDeleted_1.EventAssignmentDeleted.TypeEnum,
    "EventContractDeleted.TypeEnum": eventContractDeleted_1.EventContractDeleted.TypeEnum,
    "EventPersonDeleted.TypeEnum": eventPersonDeleted_1.EventPersonDeleted.TypeEnum,
    "EventProjectDeleted.TypeEnum": eventProjectDeleted_1.EventProjectDeleted.TypeEnum,
    "EventTimeOffDeleted.TypeEnum": eventTimeOffDeleted_1.EventTimeOffDeleted.TypeEnum,
    "GetPersonCurrentContract404Response.ErrorEnum": getPersonCurrentContract404Response_1.GetPersonCurrentContract404Response.ErrorEnum,
    "GetPersonCurrentContract404Response.StatusCodeEnum": getPersonCurrentContract404Response_1.GetPersonCurrentContract404Response.StatusCodeEnum,
    "GetProjectTimesheetLock200Response.StatusEnum": getProjectTimesheetLock200Response_1.GetProjectTimesheetLock200Response.StatusEnum,
    "Invitation.UserTypeEnum": invitation_1.Invitation.UserTypeEnum,
    "Invitation.FinancialPermissionEnum": invitation_1.Invitation.FinancialPermissionEnum,
    "Invitation.EditProjectsPermissionEnum": invitation_1.Invitation.EditProjectsPermissionEnum,
    "Invitation.EditOthersPermissionEnum": invitation_1.Invitation.EditOthersPermissionEnum,
    "Invitation.ManageProjectsPermissionEnum": invitation_1.Invitation.ManageProjectsPermissionEnum,
    "Invitation.ManagePeoplePermissionEnum": invitation_1.Invitation.ManagePeoplePermissionEnum,
    "NotFound.ErrorEnum": notFound_1.NotFound.ErrorEnum,
    "NotFound.StatusCodeEnum": notFound_1.NotFound.StatusCodeEnum,
    "PersonCustomFieldCustomFieldsInner.TypeEnum": personCustomFieldCustomFieldsInner_1.PersonCustomFieldCustomFieldsInner.TypeEnum,
    "PersonRequest.StatusEnum": personRequest_1.PersonRequest.StatusEnum,
    "Project.PricingModelEnum": project_1.Project.PricingModelEnum,
    "Project.RateTypeEnum": project_1.Project.RateTypeEnum,
    "RateCard.RateTypeEnum": rateCard_1.RateCard.RateTypeEnum,
    "SortOrder": sortOrder_1.SortOrder,
    "Unauthorized.ErrorEnum": unauthorized_1.Unauthorized.ErrorEnum,
    "Unauthorized.MessageEnum": unauthorized_1.Unauthorized.MessageEnum,
    "Unauthorized.StatusCodeEnum": unauthorized_1.Unauthorized.StatusCodeEnum,
    "UnprocessableEntity.ErrorEnum": unprocessableEntity_1.UnprocessableEntity.ErrorEnum,
    "UnprocessableEntity.StatusCodeEnum": unprocessableEntity_1.UnprocessableEntity.StatusCodeEnum,
    "UpdateContractRequest.EmploymentTypeEnum": updateContractRequest_1.UpdateContractRequest.EmploymentTypeEnum,
    "UpdateProjectPersonRequest200Response.StatusEnum": updateProjectPersonRequest200Response_1.UpdateProjectPersonRequest200Response.StatusEnum,
    "UpdateProjectPersonRequestRequest.StatusEnum": updateProjectPersonRequestRequest_1.UpdateProjectPersonRequestRequest.StatusEnum,
    "UpdateProjectPhaseRequest.ColorEnum": updateProjectPhaseRequest_1.UpdateProjectPhaseRequest.ColorEnum,
    "UpdateProjectRequest.PricingModelEnum": updateProjectRequest_1.UpdateProjectRequest.PricingModelEnum,
    "UpdateProjectRequest.RateTypeEnum": updateProjectRequest_1.UpdateProjectRequest.RateTypeEnum,
    "UpdateProjectTimesheetLockRequest.StatusEnum": updateProjectTimesheetLockRequest_1.UpdateProjectTimesheetLockRequest.StatusEnum,
    "UpdateProjectTimesheetLockRequestAnyOf.StatusEnum": updateProjectTimesheetLockRequestAnyOf_1.UpdateProjectTimesheetLockRequestAnyOf.StatusEnum,
    "UpdateProjectTimesheetLockRequestAnyOf1.StatusEnum": updateProjectTimesheetLockRequestAnyOf1_1.UpdateProjectTimesheetLockRequestAnyOf1.StatusEnum,
    "UserPermissions.TypeEnum": userPermissions_1.UserPermissions.TypeEnum,
    "UserPermissions.FinancialEnum": userPermissions_1.UserPermissions.FinancialEnum,
    "UserPermissions.EditProjectsEnum": userPermissions_1.UserPermissions.EditProjectsEnum,
    "UserPermissions.ManageProjectsEnum": userPermissions_1.UserPermissions.ManageProjectsEnum,
    "UserPermissions.EditOthersEnum": userPermissions_1.UserPermissions.EditOthersEnum,
    "UserPermissions.ManagePeopleEnum": userPermissions_1.UserPermissions.ManagePeopleEnum,
};
var typeMap = {
    "Actor": actor_1.Actor,
    "ActorApi": actorApi_1.ActorApi,
    "ActorCsv": actorCsv_1.ActorCsv,
    "ActorIntegration": actorIntegration_1.ActorIntegration,
    "ActorRunnSupport": actorRunnSupport_1.ActorRunnSupport,
    "ActorSystem": actorSystem_1.ActorSystem,
    "ActorUser": actorUser_1.ActorUser,
    "Actual": actual_1.Actual,
    "ActualInput": actualInput_1.ActualInput,
    "ActualTimeEntry": actualTimeEntry_1.ActualTimeEntry,
    "AddPeopleToSkill201Response": addPeopleToSkill201Response_1.AddPeopleToSkill201Response,
    "AddPeopleToSkillRequest": addPeopleToSkillRequest_1.AddPeopleToSkillRequest,
    "AddPeopleToSkillRequestPeopleInner": addPeopleToSkillRequestPeopleInner_1.AddPeopleToSkillRequestPeopleInner,
    "AddPersonSkillRequest": addPersonSkillRequest_1.AddPersonSkillRequest,
    "AddPersonSkillRequestLevel": addPersonSkillRequestLevel_1.AddPersonSkillRequestLevel,
    "AddPersonToProjectRequest": addPersonToProjectRequest_1.AddPersonToProjectRequest,
    "AddPersonToTeamRequest": addPersonToTeamRequest_1.AddPersonToTeamRequest,
    "Assignment": assignment_1.Assignment,
    "BadRequest": badRequest_1.BadRequest,
    "Client": client_1.Client,
    "ClientInput": clientInput_1.ClientInput,
    "CollectionPerson": collectionPerson_1.CollectionPerson,
    "CollectionPersonManagersInner": collectionPersonManagersInner_1.CollectionPersonManagersInner,
    "Competency": competency_1.Competency,
    "Conflict": conflict_1.Conflict,
    "Contract": contract_1.Contract,
    "ContractInput": contractInput_1.ContractInput,
    "CreateActualsBulkRequest": createActualsBulkRequest_1.CreateActualsBulkRequest,
    "CreateAssignmentRequest": createAssignmentRequest_1.CreateAssignmentRequest,
    "CreateCheckboxCustomFieldRequest": createCheckboxCustomFieldRequest_1.CreateCheckboxCustomFieldRequest,
    "CreateClientsBulkRequest": createClientsBulkRequest_1.CreateClientsBulkRequest,
    "CreateDateCustomFieldRequest": createDateCustomFieldRequest_1.CreateDateCustomFieldRequest,
    "CreateInvitationRequest": createInvitationRequest_1.CreateInvitationRequest,
    "CreateInvitationRequestAllOfAnyOf": createInvitationRequestAllOfAnyOf_1.CreateInvitationRequestAllOfAnyOf,
    "CreateInvitationRequestAllOfAnyOf1": createInvitationRequestAllOfAnyOf1_1.CreateInvitationRequestAllOfAnyOf1,
    "CreateLeaveTimeOffsBulkRequest": createLeaveTimeOffsBulkRequest_1.CreateLeaveTimeOffsBulkRequest,
    "CreateNoteForProjectRequest": createNoteForProjectRequest_1.CreateNoteForProjectRequest,
    "CreatePersonRequest": createPersonRequest_1.CreatePersonRequest,
    "CreatePersonRequestRosteredDays": createPersonRequestRosteredDays_1.CreatePersonRequestRosteredDays,
    "CreatePlaceholderRequest": createPlaceholderRequest_1.CreatePlaceholderRequest,
    "CreateProjectBudgetRoleRequest": createProjectBudgetRoleRequest_1.CreateProjectBudgetRoleRequest,
    "CreateProjectMilestoneRequest": createProjectMilestoneRequest_1.CreateProjectMilestoneRequest,
    "CreateProjectMilestoneRequestIcon": createProjectMilestoneRequestIcon_1.CreateProjectMilestoneRequestIcon,
    "CreateProjectPersonRequestRequest": createProjectPersonRequestRequest_1.CreateProjectPersonRequestRequest,
    "CreateProjectPhaseRequest": createProjectPhaseRequest_1.CreateProjectPhaseRequest,
    "CreateProjectRequest": createProjectRequest_1.CreateProjectRequest,
    "CreateProjectRequestAnyOf": createProjectRequestAnyOf_1.CreateProjectRequestAnyOf,
    "CreateProjectRequestAnyOf1": createProjectRequestAnyOf1_1.CreateProjectRequestAnyOf1,
    "CreateProjectRequestAnyOf1FromTemplate": createProjectRequestAnyOf1FromTemplate_1.CreateProjectRequestAnyOf1FromTemplate,
    "CreateRateCardRequest": createRateCardRequest_1.CreateRateCardRequest,
    "CreateRateCardRequestReferencesInner": createRateCardRequestReferencesInner_1.CreateRateCardRequestReferencesInner,
    "CreateRoleRequest": createRoleRequest_1.CreateRoleRequest,
    "CreateSelectCustomFieldRequest": createSelectCustomFieldRequest_1.CreateSelectCustomFieldRequest,
    "CreateSelectCustomFieldRequestOptionsInner": createSelectCustomFieldRequestOptionsInner_1.CreateSelectCustomFieldRequestOptionsInner,
    "CustomCheckboxFieldCollection": customCheckboxFieldCollection_1.CustomCheckboxFieldCollection,
    "CustomDateFieldCollection": customDateFieldCollection_1.CustomDateFieldCollection,
    "CustomFieldCheckbox": customFieldCheckbox_1.CustomFieldCheckbox,
    "CustomFieldDate": customFieldDate_1.CustomFieldDate,
    "CustomFieldSelect": customFieldSelect_1.CustomFieldSelect,
    "CustomFieldText": customFieldText_1.CustomFieldText,
    "CustomSelectFieldCollection": customSelectFieldCollection_1.CustomSelectFieldCollection,
    "CustomTextFieldCollection": customTextFieldCollection_1.CustomTextFieldCollection,
    "DeleteLeaveTimeOffsBulkRequest": deleteLeaveTimeOffsBulkRequest_1.DeleteLeaveTimeOffsBulkRequest,
    "Event": event_1.Event,
    "EventActualDeleted": eventActualDeleted_1.EventActualDeleted,
    "EventActualDeletedActual": eventActualDeletedActual_1.EventActualDeletedActual,
    "EventAssignmentDeleted": eventAssignmentDeleted_1.EventAssignmentDeleted,
    "EventAssignmentDeletedAssignment": eventAssignmentDeletedAssignment_1.EventAssignmentDeletedAssignment,
    "EventContractDeleted": eventContractDeleted_1.EventContractDeleted,
    "EventContractDeletedContract": eventContractDeletedContract_1.EventContractDeletedContract,
    "EventPersonDeleted": eventPersonDeleted_1.EventPersonDeleted,
    "EventPersonDeletedPerson": eventPersonDeletedPerson_1.EventPersonDeletedPerson,
    "EventProjectDeleted": eventProjectDeleted_1.EventProjectDeleted,
    "EventProjectDeletedProject": eventProjectDeletedProject_1.EventProjectDeletedProject,
    "EventSubresourcePerson": eventSubresourcePerson_1.EventSubresourcePerson,
    "EventSubresourcePhase": eventSubresourcePhase_1.EventSubresourcePhase,
    "EventSubresourceProject": eventSubresourceProject_1.EventSubresourceProject,
    "EventSubresourceRole": eventSubresourceRole_1.EventSubresourceRole,
    "EventSubresourceWorkstream": eventSubresourceWorkstream_1.EventSubresourceWorkstream,
    "EventTimeOffDeleted": eventTimeOffDeleted_1.EventTimeOffDeleted,
    "EventTimeOffDeletedTimeOff": eventTimeOffDeletedTimeOff_1.EventTimeOffDeletedTimeOff,
    "GetCurrentUser200Response": getCurrentUser200Response_1.GetCurrentUser200Response,
    "GetPersonCurrentContract404Response": getPersonCurrentContract404Response_1.GetPersonCurrentContract404Response,
    "GetPersonCurrentTeam200Response": getPersonCurrentTeam200Response_1.GetPersonCurrentTeam200Response,
    "GetPersonCurrentTeam200ResponseValuesInner": getPersonCurrentTeam200ResponseValuesInner_1.GetPersonCurrentTeam200ResponseValuesInner,
    "GetPersonHoursReport200Response": getPersonHoursReport200Response_1.GetPersonHoursReport200Response,
    "GetProjectHoursReport200Response": getProjectHoursReport200Response_1.GetProjectHoursReport200Response,
    "GetProjectTimesheetLock200Response": getProjectTimesheetLock200Response_1.GetProjectTimesheetLock200Response,
    "Holiday": holiday_1.Holiday,
    "HolidayGroup": holidayGroup_1.HolidayGroup,
    "Invitation": invitation_1.Invitation,
    "ListActuals200Response": listActuals200Response_1.ListActuals200Response,
    "ListAssignments200Response": listAssignments200Response_1.ListAssignments200Response,
    "ListBudgetRoles200Response": listBudgetRoles200Response_1.ListBudgetRoles200Response,
    "ListCheckboxCustomFields200Response": listCheckboxCustomFields200Response_1.ListCheckboxCustomFields200Response,
    "ListClientProjects200Response": listClientProjects200Response_1.ListClientProjects200Response,
    "ListClients200Response": listClients200Response_1.ListClients200Response,
    "ListContracts200Response": listContracts200Response_1.ListContracts200Response,
    "ListDateCustomFields200Response": listDateCustomFields200Response_1.ListDateCustomFields200Response,
    "ListEvents200Response": listEvents200Response_1.ListEvents200Response,
    "ListHolidayGroupHolidays200Response": listHolidayGroupHolidays200Response_1.ListHolidayGroupHolidays200Response,
    "ListHolidayGroups200Response": listHolidayGroups200Response_1.ListHolidayGroups200Response,
    "ListInvitations200Response": listInvitations200Response_1.ListInvitations200Response,
    "ListMilestones200Response": listMilestones200Response_1.ListMilestones200Response,
    "ListOtherExpenses200Response": listOtherExpenses200Response_1.ListOtherExpenses200Response,
    "ListPeople200Response": listPeople200Response_1.ListPeople200Response,
    "ListPeopleCustomFields200Response": listPeopleCustomFields200Response_1.ListPeopleCustomFields200Response,
    "ListPeopleNotes200Response": listPeopleNotes200Response_1.ListPeopleNotes200Response,
    "ListPeopleSkills200Response": listPeopleSkills200Response_1.ListPeopleSkills200Response,
    "ListPeopleTags200Response": listPeopleTags200Response_1.ListPeopleTags200Response,
    "ListPeopleTags200ResponseValuesInner": listPeopleTags200ResponseValuesInner_1.ListPeopleTags200ResponseValuesInner,
    "ListPersonHolidays200Response": listPersonHolidays200Response_1.ListPersonHolidays200Response,
    "ListPersonHolidays200ResponseValuesInner": listPersonHolidays200ResponseValuesInner_1.ListPersonHolidays200ResponseValuesInner,
    "ListPersonLeave200Response": listPersonLeave200Response_1.ListPersonLeave200Response,
    "ListPersonRequests200Response": listPersonRequests200Response_1.ListPersonRequests200Response,
    "ListPersonSkills200Response": listPersonSkills200Response_1.ListPersonSkills200Response,
    "ListPhases200Response": listPhases200Response_1.ListPhases200Response,
    "ListPlaceholders200Response": listPlaceholders200Response_1.ListPlaceholders200Response,
    "ListProjectCustomFields200Response": listProjectCustomFields200Response_1.ListProjectCustomFields200Response,
    "ListProjectMembers200Response": listProjectMembers200Response_1.ListProjectMembers200Response,
    "ListProjectMembers200ResponseValuesInner": listProjectMembers200ResponseValuesInner_1.ListProjectMembers200ResponseValuesInner,
    "ListProjectNotes200Response": listProjectNotes200Response_1.ListProjectNotes200Response,
    "ListProjectRates200Response": listProjectRates200Response_1.ListProjectRates200Response,
    "ListProjectTags200Response": listProjectTags200Response_1.ListProjectTags200Response,
    "ListProjectTotalsReport200Response": listProjectTotalsReport200Response_1.ListProjectTotalsReport200Response,
    "ListProjectWorkstreams200Response": listProjectWorkstreams200Response_1.ListProjectWorkstreams200Response,
    "ListProjectWorkstreams200ResponseValuesInner": listProjectWorkstreams200ResponseValuesInner_1.ListProjectWorkstreams200ResponseValuesInner,
    "ListProjectWorkstreamsForProject200Response": listProjectWorkstreamsForProject200Response_1.ListProjectWorkstreamsForProject200Response,
    "ListRateCards200Response": listRateCards200Response_1.ListRateCards200Response,
    "ListRoles200Response": listRoles200Response_1.ListRoles200Response,
    "ListSelectCustomFields200Response": listSelectCustomFields200Response_1.ListSelectCustomFields200Response,
    "ListSkills200Response": listSkills200Response_1.ListSkills200Response,
    "ListTeams200Response": listTeams200Response_1.ListTeams200Response,
    "ListTextCustomFields200Response": listTextCustomFields200Response_1.ListTextCustomFields200Response,
    "ListUserViews200Response": listUserViews200Response_1.ListUserViews200Response,
    "ListUsers200Response": listUsers200Response_1.ListUsers200Response,
    "ListWorkstreams200Response": listWorkstreams200Response_1.ListWorkstreams200Response,
    "Milestone": milestone_1.Milestone,
    "ModifiedAfter": modifiedAfter_1.ModifiedAfter,
    "NotFound": notFound_1.NotFound,
    "Person": person_1.Person,
    "PersonCompetency": personCompetency_1.PersonCompetency,
    "PersonCompetencyAllOfLevel": personCompetencyAllOfLevel_1.PersonCompetencyAllOfLevel,
    "PersonCustomField": personCustomField_1.PersonCustomField,
    "PersonCustomFieldCustomFieldsInner": personCustomFieldCustomFieldsInner_1.PersonCustomFieldCustomFieldsInner,
    "PersonCustomFields": personCustomFields_1.PersonCustomFields,
    "PersonCustomFieldsCheckboxInner": personCustomFieldsCheckboxInner_1.PersonCustomFieldsCheckboxInner,
    "PersonCustomFieldsDateInner": personCustomFieldsDateInner_1.PersonCustomFieldsDateInner,
    "PersonCustomFieldsSelectInner": personCustomFieldsSelectInner_1.PersonCustomFieldsSelectInner,
    "PersonCustomFieldsSelectInnerValuesInner": personCustomFieldsSelectInnerValuesInner_1.PersonCustomFieldsSelectInnerValuesInner,
    "PersonCustomFieldsTextInner": personCustomFieldsTextInner_1.PersonCustomFieldsTextInner,
    "PersonNote": personNote_1.PersonNote,
    "PersonNotesInner": personNotesInner_1.PersonNotesInner,
    "PersonRequest": personRequest_1.PersonRequest,
    "PersonSkillsInner": personSkillsInner_1.PersonSkillsInner,
    "Placeholder": placeholder_1.Placeholder,
    "PlaceholderInput": placeholderInput_1.PlaceholderInput,
    "Project": project_1.Project,
    "ProjectAggregate": projectAggregate_1.ProjectAggregate,
    "ProjectAggregateActuals": projectAggregateActuals_1.ProjectAggregateActuals,
    "ProjectAggregateAssignments": projectAggregateAssignments_1.ProjectAggregateAssignments,
    "ProjectBudgetRole": projectBudgetRole_1.ProjectBudgetRole,
    "ProjectCustomField": projectCustomField_1.ProjectCustomField,
    "ProjectNote": projectNote_1.ProjectNote,
    "ProjectOtherExpense": projectOtherExpense_1.ProjectOtherExpense,
    "ProjectOtherExpense1": projectOtherExpense1_1.ProjectOtherExpense1,
    "ProjectPhase": projectPhase_1.ProjectPhase,
    "ProjectRate": projectRate_1.ProjectRate,
    "ProjectTag": projectTag_1.ProjectTag,
    "ProjectWorkstream": projectWorkstream_1.ProjectWorkstream,
    "RateCard": rateCard_1.RateCard,
    "RateCardRatesInner": rateCardRatesInner_1.RateCardRatesInner,
    "RateCardRatesInnerRole": rateCardRatesInnerRole_1.RateCardRatesInnerRole,
    "Reference": reference_1.Reference,
    "ReportsHoursPeople": reportsHoursPeople_1.ReportsHoursPeople,
    "ReportsHoursPeopleActuals": reportsHoursPeopleActuals_1.ReportsHoursPeopleActuals,
    "ReportsHoursPeopleAssignments": reportsHoursPeopleAssignments_1.ReportsHoursPeopleAssignments,
    "ReportsHoursProjects": reportsHoursProjects_1.ReportsHoursProjects,
    "Role": role_1.Role,
    "RosteredDays": rosteredDays_1.RosteredDays,
    "Skill": skill_1.Skill,
    "Tag": tag_1.Tag,
    "Team": team_1.Team,
    "TimeOff": timeOff_1.TimeOff,
    "TimeOffHolidayInput": timeOffHolidayInput_1.TimeOffHolidayInput,
    "TimeOffLeaveInput": timeOffLeaveInput_1.TimeOffLeaveInput,
    "Unauthorized": unauthorized_1.Unauthorized,
    "UnprocessableEntity": unprocessableEntity_1.UnprocessableEntity,
    "UpdateCheckboxCustomFieldRequest": updateCheckboxCustomFieldRequest_1.UpdateCheckboxCustomFieldRequest,
    "UpdateClientRequest": updateClientRequest_1.UpdateClientRequest,
    "UpdateContractRequest": updateContractRequest_1.UpdateContractRequest,
    "UpdateContractRequestRosteredDays": updateContractRequestRosteredDays_1.UpdateContractRequestRosteredDays,
    "UpdateDateCustomFieldRequest": updateDateCustomFieldRequest_1.UpdateDateCustomFieldRequest,
    "UpdatePeopleTagRequest": updatePeopleTagRequest_1.UpdatePeopleTagRequest,
    "UpdatePersonCheckboxCustomFieldRequest": updatePersonCheckboxCustomFieldRequest_1.UpdatePersonCheckboxCustomFieldRequest,
    "UpdatePersonDateCustomFieldRequest": updatePersonDateCustomFieldRequest_1.UpdatePersonDateCustomFieldRequest,
    "UpdatePersonRequest": updatePersonRequest_1.UpdatePersonRequest,
    "UpdatePersonRequestTagsInner": updatePersonRequestTagsInner_1.UpdatePersonRequestTagsInner,
    "UpdatePersonSelectCustomFieldRequest": updatePersonSelectCustomFieldRequest_1.UpdatePersonSelectCustomFieldRequest,
    "UpdatePersonSelectCustomFieldRequestValuesInner": updatePersonSelectCustomFieldRequestValuesInner_1.UpdatePersonSelectCustomFieldRequestValuesInner,
    "UpdatePersonSkillRequest": updatePersonSkillRequest_1.UpdatePersonSkillRequest,
    "UpdatePersonTextCustomFieldRequest": updatePersonTextCustomFieldRequest_1.UpdatePersonTextCustomFieldRequest,
    "UpdateProjectBudgetRoleRequest": updateProjectBudgetRoleRequest_1.UpdateProjectBudgetRoleRequest,
    "UpdateProjectBudgetRoleRequestAnyOf": updateProjectBudgetRoleRequestAnyOf_1.UpdateProjectBudgetRoleRequestAnyOf,
    "UpdateProjectBudgetRoleRequestAnyOf1": updateProjectBudgetRoleRequestAnyOf1_1.UpdateProjectBudgetRoleRequestAnyOf1,
    "UpdateProjectMilestoneRequest": updateProjectMilestoneRequest_1.UpdateProjectMilestoneRequest,
    "UpdateProjectPersonRequest200Response": updateProjectPersonRequest200Response_1.UpdateProjectPersonRequest200Response,
    "UpdateProjectPersonRequestRequest": updateProjectPersonRequestRequest_1.UpdateProjectPersonRequestRequest,
    "UpdateProjectPhaseRequest": updateProjectPhaseRequest_1.UpdateProjectPhaseRequest,
    "UpdateProjectRequest": updateProjectRequest_1.UpdateProjectRequest,
    "UpdateProjectRoleRateRequest": updateProjectRoleRateRequest_1.UpdateProjectRoleRateRequest,
    "UpdateProjectTimesheetLockRequest": updateProjectTimesheetLockRequest_1.UpdateProjectTimesheetLockRequest,
    "UpdateProjectTimesheetLockRequestAnyOf": updateProjectTimesheetLockRequestAnyOf_1.UpdateProjectTimesheetLockRequestAnyOf,
    "UpdateProjectTimesheetLockRequestAnyOf1": updateProjectTimesheetLockRequestAnyOf1_1.UpdateProjectTimesheetLockRequestAnyOf1,
    "UpdateRoleRequest": updateRoleRequest_1.UpdateRoleRequest,
    "UpdateSelectCustomFieldOption200Response": updateSelectCustomFieldOption200Response_1.UpdateSelectCustomFieldOption200Response,
    "UpdateSelectCustomFieldOption200ResponseOption": updateSelectCustomFieldOption200ResponseOption_1.UpdateSelectCustomFieldOption200ResponseOption,
    "UpdateSelectCustomFieldOptionRequest": updateSelectCustomFieldOptionRequest_1.UpdateSelectCustomFieldOptionRequest,
    "UpdateWorkstreamRequest": updateWorkstreamRequest_1.UpdateWorkstreamRequest,
    "User": user_1.User,
    "UserPermissions": userPermissions_1.UserPermissions,
    "View": view_1.View,
    "Workstream": workstream_1.Workstream,
};
function startsWith(str, match) {
    return str.substring(0, match.length) === match;
}
function endsWith(str, match) {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}
var nullableSuffix = " | null";
var optionalSuffix = " | undefined";
var arrayPrefix = "Array<";
var arraySuffix = ">";
var mapPrefix = "{ [key: string]: ";
var mapSuffix = "; }";
var ObjectSerializer = (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (endsWith(type, nullableSuffix)) {
            var subType = type.slice(0, -nullableSuffix.length);
            return ObjectSerializer.serialize(data, subType);
        }
        else if (endsWith(type, optionalSuffix)) {
            var subType = type.slice(0, -optionalSuffix.length);
            return ObjectSerializer.serialize(data, subType);
        }
        else if (startsWith(type, arrayPrefix)) {
            var subType = type.slice(arrayPrefix.length, -arraySuffix.length);
            var transformedData = [];
            for (var index = 0; index < data.length; index++) {
                var datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (startsWith(type, mapPrefix)) {
            var subType = type.slice(mapPrefix.length, -mapSuffix.length);
            var transformedData = {};
            for (var key in data) {
                transformedData[key] = ObjectSerializer.serialize(data[key], subType);
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index = 0; index < attributeTypes.length; index++) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (endsWith(type, nullableSuffix)) {
            var subType = type.slice(0, -nullableSuffix.length);
            return ObjectSerializer.deserialize(data, subType);
        }
        else if (endsWith(type, optionalSuffix)) {
            var subType = type.slice(0, -optionalSuffix.length);
            return ObjectSerializer.deserialize(data, subType);
        }
        else if (startsWith(type, arrayPrefix)) {
            var subType = type.slice(arrayPrefix.length, -arraySuffix.length);
            var transformedData = [];
            for (var index = 0; index < data.length; index++) {
                var datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        }
        else if (startsWith(type, mapPrefix)) {
            var subType = type.slice(mapPrefix.length, -mapSuffix.length);
            var transformedData = {};
            for (var key in data) {
                transformedData[key] = ObjectSerializer.deserialize(data[key], subType);
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index = 0; index < attributeTypes.length; index++) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
var HttpBasicAuth = (function () {
    function HttpBasicAuth() {
        this.username = '';
        this.password = '';
    }
    HttpBasicAuth.prototype.applyToRequest = function (requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var HttpBearerAuth = (function () {
    function HttpBearerAuth() {
        this.accessToken = '';
    }
    HttpBearerAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            var accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    };
    return HttpBearerAuth;
}());
exports.HttpBearerAuth = HttpBearerAuth;
var ApiKeyAuth = (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    ApiKeyAuth.prototype.applyToRequest = function (requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = (function () {
    function OAuth() {
        this.accessToken = '';
    }
    OAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = (function () {
    function VoidAuth() {
        this.username = '';
        this.password = '';
    }
    VoidAuth.prototype.applyToRequest = function (_) {
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;
//# sourceMappingURL=models.js.map