import localVarRequest from 'request';

export * from './actor';
export * from './actorApi';
export * from './actorCsv';
export * from './actorIntegration';
export * from './actorRunnSupport';
export * from './actorSystem';
export * from './actorUser';
export * from './actual';
export * from './actualInput';
export * from './actualTimeEntry';
export * from './addPeopleToSkill201Response';
export * from './addPeopleToSkillRequest';
export * from './addPeopleToSkillRequestPeopleInner';
export * from './addPersonSkillRequest';
export * from './addPersonSkillRequestLevel';
export * from './addPersonToProjectRequest';
export * from './addPersonToTeamRequest';
export * from './assignment';
export * from './badRequest';
export * from './client';
export * from './clientInput';
export * from './collectionPerson';
export * from './collectionPersonManagersInner';
export * from './competency';
export * from './conflict';
export * from './contract';
export * from './contractInput';
export * from './createActualsBulkRequest';
export * from './createAssignmentRequest';
export * from './createCheckboxCustomFieldRequest';
export * from './createClientsBulkRequest';
export * from './createDateCustomFieldRequest';
export * from './createInvitationRequest';
export * from './createInvitationRequestAllOfAnyOf';
export * from './createInvitationRequestAllOfAnyOf1';
export * from './createLeaveTimeOffsBulkRequest';
export * from './createNoteForProjectRequest';
export * from './createPersonRequest';
export * from './createPersonRequestRosteredDays';
export * from './createPlaceholderRequest';
export * from './createProjectBudgetRoleRequest';
export * from './createProjectMilestoneRequest';
export * from './createProjectMilestoneRequestIcon';
export * from './createProjectPersonRequestRequest';
export * from './createProjectPhaseRequest';
export * from './createProjectRequest';
export * from './createProjectRequestAnyOf';
export * from './createProjectRequestAnyOf1';
export * from './createProjectRequestAnyOf1FromTemplate';
export * from './createRateCardRequest';
export * from './createRateCardRequestReferencesInner';
export * from './createRoleRequest';
export * from './createSelectCustomFieldRequest';
export * from './createSelectCustomFieldRequestOptionsInner';
export * from './customCheckboxFieldCollection';
export * from './customDateFieldCollection';
export * from './customFieldCheckbox';
export * from './customFieldDate';
export * from './customFieldSelect';
export * from './customFieldText';
export * from './customSelectFieldCollection';
export * from './customTextFieldCollection';
export * from './deleteLeaveTimeOffsBulkRequest';
export * from './event';
export * from './eventActualDeleted';
export * from './eventActualDeletedActual';
export * from './eventAssignmentDeleted';
export * from './eventAssignmentDeletedAssignment';
export * from './eventContractDeleted';
export * from './eventContractDeletedContract';
export * from './eventPersonDeleted';
export * from './eventPersonDeletedPerson';
export * from './eventProjectDeleted';
export * from './eventProjectDeletedProject';
export * from './eventSubresourcePerson';
export * from './eventSubresourcePhase';
export * from './eventSubresourceProject';
export * from './eventSubresourceRole';
export * from './eventSubresourceWorkstream';
export * from './eventTimeOffDeleted';
export * from './eventTimeOffDeletedTimeOff';
export * from './getCurrentUser200Response';
export * from './getPersonCurrentContract404Response';
export * from './getPersonCurrentTeam200Response';
export * from './getPersonCurrentTeam200ResponseValuesInner';
export * from './getPersonHoursReport200Response';
export * from './getProjectHoursReport200Response';
export * from './getProjectTimesheetLock200Response';
export * from './holiday';
export * from './holidayGroup';
export * from './invitation';
export * from './listActuals200Response';
export * from './listAssignments200Response';
export * from './listBudgetRoles200Response';
export * from './listCheckboxCustomFields200Response';
export * from './listClientProjects200Response';
export * from './listClients200Response';
export * from './listContracts200Response';
export * from './listDateCustomFields200Response';
export * from './listEvents200Response';
export * from './listHolidayGroupHolidays200Response';
export * from './listHolidayGroups200Response';
export * from './listInvitations200Response';
export * from './listMilestones200Response';
export * from './listOtherExpenses200Response';
export * from './listPeople200Response';
export * from './listPeopleCustomFields200Response';
export * from './listPeopleNotes200Response';
export * from './listPeopleSkills200Response';
export * from './listPeopleTags200Response';
export * from './listPeopleTags200ResponseValuesInner';
export * from './listPersonHolidays200Response';
export * from './listPersonHolidays200ResponseValuesInner';
export * from './listPersonLeave200Response';
export * from './listPersonRequests200Response';
export * from './listPersonSkills200Response';
export * from './listPhases200Response';
export * from './listPlaceholders200Response';
export * from './listProjectCustomFields200Response';
export * from './listProjectMembers200Response';
export * from './listProjectMembers200ResponseValuesInner';
export * from './listProjectNotes200Response';
export * from './listProjectRates200Response';
export * from './listProjectTags200Response';
export * from './listProjectTotalsReport200Response';
export * from './listProjectWorkstreams200Response';
export * from './listProjectWorkstreams200ResponseValuesInner';
export * from './listProjectWorkstreamsForProject200Response';
export * from './listRateCards200Response';
export * from './listRoles200Response';
export * from './listSelectCustomFields200Response';
export * from './listSkills200Response';
export * from './listTeams200Response';
export * from './listTextCustomFields200Response';
export * from './listUserViews200Response';
export * from './listUsers200Response';
export * from './listWorkstreams200Response';
export * from './milestone';
export * from './modifiedAfter';
export * from './notFound';
export * from './person';
export * from './personCompetency';
export * from './personCompetencyAllOfLevel';
export * from './personCustomField';
export * from './personCustomFieldCustomFieldsInner';
export * from './personCustomFields';
export * from './personCustomFieldsCheckboxInner';
export * from './personCustomFieldsDateInner';
export * from './personCustomFieldsSelectInner';
export * from './personCustomFieldsSelectInnerValuesInner';
export * from './personCustomFieldsTextInner';
export * from './personNote';
export * from './personNotesInner';
export * from './personRequest';
export * from './personSkillsInner';
export * from './placeholder';
export * from './placeholderInput';
export * from './project';
export * from './projectAggregate';
export * from './projectAggregateActuals';
export * from './projectAggregateAssignments';
export * from './projectBudgetRole';
export * from './projectCustomField';
export * from './projectNote';
export * from './projectOtherExpense';
export * from './projectOtherExpense1';
export * from './projectPhase';
export * from './projectRate';
export * from './projectTag';
export * from './projectWorkstream';
export * from './rateCard';
export * from './rateCardRatesInner';
export * from './rateCardRatesInnerRole';
export * from './reference';
export * from './reportsHoursPeople';
export * from './reportsHoursPeopleActuals';
export * from './reportsHoursPeopleAssignments';
export * from './reportsHoursProjects';
export * from './role';
export * from './rosteredDays';
export * from './skill';
export * from './sortOrder';
export * from './tag';
export * from './team';
export * from './timeOff';
export * from './timeOffHolidayInput';
export * from './timeOffLeaveInput';
export * from './unauthorized';
export * from './unprocessableEntity';
export * from './updateCheckboxCustomFieldRequest';
export * from './updateClientRequest';
export * from './updateContractRequest';
export * from './updateContractRequestRosteredDays';
export * from './updateDateCustomFieldRequest';
export * from './updatePeopleTagRequest';
export * from './updatePersonCheckboxCustomFieldRequest';
export * from './updatePersonDateCustomFieldRequest';
export * from './updatePersonRequest';
export * from './updatePersonRequestTagsInner';
export * from './updatePersonSelectCustomFieldRequest';
export * from './updatePersonSelectCustomFieldRequestValuesInner';
export * from './updatePersonSkillRequest';
export * from './updatePersonTextCustomFieldRequest';
export * from './updateProjectBudgetRoleRequest';
export * from './updateProjectBudgetRoleRequestAnyOf';
export * from './updateProjectBudgetRoleRequestAnyOf1';
export * from './updateProjectMilestoneRequest';
export * from './updateProjectPersonRequest200Response';
export * from './updateProjectPersonRequestRequest';
export * from './updateProjectPhaseRequest';
export * from './updateProjectRequest';
export * from './updateProjectRoleRateRequest';
export * from './updateProjectTimesheetLockRequest';
export * from './updateProjectTimesheetLockRequestAnyOf';
export * from './updateProjectTimesheetLockRequestAnyOf1';
export * from './updateRoleRequest';
export * from './updateSelectCustomFieldOption200Response';
export * from './updateSelectCustomFieldOption200ResponseOption';
export * from './updateSelectCustomFieldOptionRequest';
export * from './updateWorkstreamRequest';
export * from './user';
export * from './userPermissions';
export * from './view';
export * from './workstream';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { Actor } from './actor';
import { ActorApi } from './actorApi';
import { ActorCsv } from './actorCsv';
import { ActorIntegration } from './actorIntegration';
import { ActorRunnSupport } from './actorRunnSupport';
import { ActorSystem } from './actorSystem';
import { ActorUser } from './actorUser';
import { Actual } from './actual';
import { ActualInput } from './actualInput';
import { ActualTimeEntry } from './actualTimeEntry';
import { AddPeopleToSkill201Response } from './addPeopleToSkill201Response';
import { AddPeopleToSkillRequest } from './addPeopleToSkillRequest';
import { AddPeopleToSkillRequestPeopleInner } from './addPeopleToSkillRequestPeopleInner';
import { AddPersonSkillRequest } from './addPersonSkillRequest';
import { AddPersonSkillRequestLevel } from './addPersonSkillRequestLevel';
import { AddPersonToProjectRequest } from './addPersonToProjectRequest';
import { AddPersonToTeamRequest } from './addPersonToTeamRequest';
import { Assignment } from './assignment';
import { BadRequest } from './badRequest';
import { Client } from './client';
import { ClientInput } from './clientInput';
import { CollectionPerson } from './collectionPerson';
import { CollectionPersonManagersInner } from './collectionPersonManagersInner';
import { Competency } from './competency';
import { Conflict } from './conflict';
import { Contract } from './contract';
import { ContractInput } from './contractInput';
import { CreateActualsBulkRequest } from './createActualsBulkRequest';
import { CreateAssignmentRequest } from './createAssignmentRequest';
import { CreateCheckboxCustomFieldRequest } from './createCheckboxCustomFieldRequest';
import { CreateClientsBulkRequest } from './createClientsBulkRequest';
import { CreateDateCustomFieldRequest } from './createDateCustomFieldRequest';
import { CreateInvitationRequest } from './createInvitationRequest';
import { CreateInvitationRequestAllOfAnyOf } from './createInvitationRequestAllOfAnyOf';
import { CreateInvitationRequestAllOfAnyOf1 } from './createInvitationRequestAllOfAnyOf1';
import { CreateLeaveTimeOffsBulkRequest } from './createLeaveTimeOffsBulkRequest';
import { CreateNoteForProjectRequest } from './createNoteForProjectRequest';
import { CreatePersonRequest } from './createPersonRequest';
import { CreatePersonRequestRosteredDays } from './createPersonRequestRosteredDays';
import { CreatePlaceholderRequest } from './createPlaceholderRequest';
import { CreateProjectBudgetRoleRequest } from './createProjectBudgetRoleRequest';
import { CreateProjectMilestoneRequest } from './createProjectMilestoneRequest';
import { CreateProjectMilestoneRequestIcon } from './createProjectMilestoneRequestIcon';
import { CreateProjectPersonRequestRequest } from './createProjectPersonRequestRequest';
import { CreateProjectPhaseRequest } from './createProjectPhaseRequest';
import { CreateProjectRequest } from './createProjectRequest';
import { CreateProjectRequestAnyOf } from './createProjectRequestAnyOf';
import { CreateProjectRequestAnyOf1 } from './createProjectRequestAnyOf1';
import { CreateProjectRequestAnyOf1FromTemplate } from './createProjectRequestAnyOf1FromTemplate';
import { CreateRateCardRequest } from './createRateCardRequest';
import { CreateRateCardRequestReferencesInner } from './createRateCardRequestReferencesInner';
import { CreateRoleRequest } from './createRoleRequest';
import { CreateSelectCustomFieldRequest } from './createSelectCustomFieldRequest';
import { CreateSelectCustomFieldRequestOptionsInner } from './createSelectCustomFieldRequestOptionsInner';
import { CustomCheckboxFieldCollection } from './customCheckboxFieldCollection';
import { CustomDateFieldCollection } from './customDateFieldCollection';
import { CustomFieldCheckbox } from './customFieldCheckbox';
import { CustomFieldDate } from './customFieldDate';
import { CustomFieldSelect } from './customFieldSelect';
import { CustomFieldText } from './customFieldText';
import { CustomSelectFieldCollection } from './customSelectFieldCollection';
import { CustomTextFieldCollection } from './customTextFieldCollection';
import { DeleteLeaveTimeOffsBulkRequest } from './deleteLeaveTimeOffsBulkRequest';
import { Event } from './event';
import { EventActualDeleted } from './eventActualDeleted';
import { EventActualDeletedActual } from './eventActualDeletedActual';
import { EventAssignmentDeleted } from './eventAssignmentDeleted';
import { EventAssignmentDeletedAssignment } from './eventAssignmentDeletedAssignment';
import { EventContractDeleted } from './eventContractDeleted';
import { EventContractDeletedContract } from './eventContractDeletedContract';
import { EventPersonDeleted } from './eventPersonDeleted';
import { EventPersonDeletedPerson } from './eventPersonDeletedPerson';
import { EventProjectDeleted } from './eventProjectDeleted';
import { EventProjectDeletedProject } from './eventProjectDeletedProject';
import { EventSubresourcePerson } from './eventSubresourcePerson';
import { EventSubresourcePhase } from './eventSubresourcePhase';
import { EventSubresourceProject } from './eventSubresourceProject';
import { EventSubresourceRole } from './eventSubresourceRole';
import { EventSubresourceWorkstream } from './eventSubresourceWorkstream';
import { EventTimeOffDeleted } from './eventTimeOffDeleted';
import { EventTimeOffDeletedTimeOff } from './eventTimeOffDeletedTimeOff';
import { GetCurrentUser200Response } from './getCurrentUser200Response';
import { GetPersonCurrentContract404Response } from './getPersonCurrentContract404Response';
import { GetPersonCurrentTeam200Response } from './getPersonCurrentTeam200Response';
import { GetPersonCurrentTeam200ResponseValuesInner } from './getPersonCurrentTeam200ResponseValuesInner';
import { GetPersonHoursReport200Response } from './getPersonHoursReport200Response';
import { GetProjectHoursReport200Response } from './getProjectHoursReport200Response';
import { GetProjectTimesheetLock200Response } from './getProjectTimesheetLock200Response';
import { Holiday } from './holiday';
import { HolidayGroup } from './holidayGroup';
import { Invitation } from './invitation';
import { ListActuals200Response } from './listActuals200Response';
import { ListAssignments200Response } from './listAssignments200Response';
import { ListBudgetRoles200Response } from './listBudgetRoles200Response';
import { ListCheckboxCustomFields200Response } from './listCheckboxCustomFields200Response';
import { ListClientProjects200Response } from './listClientProjects200Response';
import { ListClients200Response } from './listClients200Response';
import { ListContracts200Response } from './listContracts200Response';
import { ListDateCustomFields200Response } from './listDateCustomFields200Response';
import { ListEvents200Response } from './listEvents200Response';
import { ListHolidayGroupHolidays200Response } from './listHolidayGroupHolidays200Response';
import { ListHolidayGroups200Response } from './listHolidayGroups200Response';
import { ListInvitations200Response } from './listInvitations200Response';
import { ListMilestones200Response } from './listMilestones200Response';
import { ListOtherExpenses200Response } from './listOtherExpenses200Response';
import { ListPeople200Response } from './listPeople200Response';
import { ListPeopleCustomFields200Response } from './listPeopleCustomFields200Response';
import { ListPeopleNotes200Response } from './listPeopleNotes200Response';
import { ListPeopleSkills200Response } from './listPeopleSkills200Response';
import { ListPeopleTags200Response } from './listPeopleTags200Response';
import { ListPeopleTags200ResponseValuesInner } from './listPeopleTags200ResponseValuesInner';
import { ListPersonHolidays200Response } from './listPersonHolidays200Response';
import { ListPersonHolidays200ResponseValuesInner } from './listPersonHolidays200ResponseValuesInner';
import { ListPersonLeave200Response } from './listPersonLeave200Response';
import { ListPersonRequests200Response } from './listPersonRequests200Response';
import { ListPersonSkills200Response } from './listPersonSkills200Response';
import { ListPhases200Response } from './listPhases200Response';
import { ListPlaceholders200Response } from './listPlaceholders200Response';
import { ListProjectCustomFields200Response } from './listProjectCustomFields200Response';
import { ListProjectMembers200Response } from './listProjectMembers200Response';
import { ListProjectMembers200ResponseValuesInner } from './listProjectMembers200ResponseValuesInner';
import { ListProjectNotes200Response } from './listProjectNotes200Response';
import { ListProjectRates200Response } from './listProjectRates200Response';
import { ListProjectTags200Response } from './listProjectTags200Response';
import { ListProjectTotalsReport200Response } from './listProjectTotalsReport200Response';
import { ListProjectWorkstreams200Response } from './listProjectWorkstreams200Response';
import { ListProjectWorkstreams200ResponseValuesInner } from './listProjectWorkstreams200ResponseValuesInner';
import { ListProjectWorkstreamsForProject200Response } from './listProjectWorkstreamsForProject200Response';
import { ListRateCards200Response } from './listRateCards200Response';
import { ListRoles200Response } from './listRoles200Response';
import { ListSelectCustomFields200Response } from './listSelectCustomFields200Response';
import { ListSkills200Response } from './listSkills200Response';
import { ListTeams200Response } from './listTeams200Response';
import { ListTextCustomFields200Response } from './listTextCustomFields200Response';
import { ListUserViews200Response } from './listUserViews200Response';
import { ListUsers200Response } from './listUsers200Response';
import { ListWorkstreams200Response } from './listWorkstreams200Response';
import { Milestone } from './milestone';
import { ModifiedAfter } from './modifiedAfter';
import { NotFound } from './notFound';
import { Person } from './person';
import { PersonCompetency } from './personCompetency';
import { PersonCompetencyAllOfLevel } from './personCompetencyAllOfLevel';
import { PersonCustomField } from './personCustomField';
import { PersonCustomFieldCustomFieldsInner } from './personCustomFieldCustomFieldsInner';
import { PersonCustomFields } from './personCustomFields';
import { PersonCustomFieldsCheckboxInner } from './personCustomFieldsCheckboxInner';
import { PersonCustomFieldsDateInner } from './personCustomFieldsDateInner';
import { PersonCustomFieldsSelectInner } from './personCustomFieldsSelectInner';
import { PersonCustomFieldsSelectInnerValuesInner } from './personCustomFieldsSelectInnerValuesInner';
import { PersonCustomFieldsTextInner } from './personCustomFieldsTextInner';
import { PersonNote } from './personNote';
import { PersonNotesInner } from './personNotesInner';
import { PersonRequest } from './personRequest';
import { PersonSkillsInner } from './personSkillsInner';
import { Placeholder } from './placeholder';
import { PlaceholderInput } from './placeholderInput';
import { Project } from './project';
import { ProjectAggregate } from './projectAggregate';
import { ProjectAggregateActuals } from './projectAggregateActuals';
import { ProjectAggregateAssignments } from './projectAggregateAssignments';
import { ProjectBudgetRole } from './projectBudgetRole';
import { ProjectCustomField } from './projectCustomField';
import { ProjectNote } from './projectNote';
import { ProjectOtherExpense } from './projectOtherExpense';
import { ProjectOtherExpense1 } from './projectOtherExpense1';
import { ProjectPhase } from './projectPhase';
import { ProjectRate } from './projectRate';
import { ProjectTag } from './projectTag';
import { ProjectWorkstream } from './projectWorkstream';
import { RateCard } from './rateCard';
import { RateCardRatesInner } from './rateCardRatesInner';
import { RateCardRatesInnerRole } from './rateCardRatesInnerRole';
import { Reference } from './reference';
import { ReportsHoursPeople } from './reportsHoursPeople';
import { ReportsHoursPeopleActuals } from './reportsHoursPeopleActuals';
import { ReportsHoursPeopleAssignments } from './reportsHoursPeopleAssignments';
import { ReportsHoursProjects } from './reportsHoursProjects';
import { Role } from './role';
import { RosteredDays } from './rosteredDays';
import { Skill } from './skill';
import { SortOrder } from './sortOrder';
import { Tag } from './tag';
import { Team } from './team';
import { TimeOff } from './timeOff';
import { TimeOffHolidayInput } from './timeOffHolidayInput';
import { TimeOffLeaveInput } from './timeOffLeaveInput';
import { Unauthorized } from './unauthorized';
import { UnprocessableEntity } from './unprocessableEntity';
import { UpdateCheckboxCustomFieldRequest } from './updateCheckboxCustomFieldRequest';
import { UpdateClientRequest } from './updateClientRequest';
import { UpdateContractRequest } from './updateContractRequest';
import { UpdateContractRequestRosteredDays } from './updateContractRequestRosteredDays';
import { UpdateDateCustomFieldRequest } from './updateDateCustomFieldRequest';
import { UpdatePeopleTagRequest } from './updatePeopleTagRequest';
import { UpdatePersonCheckboxCustomFieldRequest } from './updatePersonCheckboxCustomFieldRequest';
import { UpdatePersonDateCustomFieldRequest } from './updatePersonDateCustomFieldRequest';
import { UpdatePersonRequest } from './updatePersonRequest';
import { UpdatePersonRequestTagsInner } from './updatePersonRequestTagsInner';
import { UpdatePersonSelectCustomFieldRequest } from './updatePersonSelectCustomFieldRequest';
import { UpdatePersonSelectCustomFieldRequestValuesInner } from './updatePersonSelectCustomFieldRequestValuesInner';
import { UpdatePersonSkillRequest } from './updatePersonSkillRequest';
import { UpdatePersonTextCustomFieldRequest } from './updatePersonTextCustomFieldRequest';
import { UpdateProjectBudgetRoleRequest } from './updateProjectBudgetRoleRequest';
import { UpdateProjectBudgetRoleRequestAnyOf } from './updateProjectBudgetRoleRequestAnyOf';
import { UpdateProjectBudgetRoleRequestAnyOf1 } from './updateProjectBudgetRoleRequestAnyOf1';
import { UpdateProjectMilestoneRequest } from './updateProjectMilestoneRequest';
import { UpdateProjectPersonRequest200Response } from './updateProjectPersonRequest200Response';
import { UpdateProjectPersonRequestRequest } from './updateProjectPersonRequestRequest';
import { UpdateProjectPhaseRequest } from './updateProjectPhaseRequest';
import { UpdateProjectRequest } from './updateProjectRequest';
import { UpdateProjectRoleRateRequest } from './updateProjectRoleRateRequest';
import { UpdateProjectTimesheetLockRequest } from './updateProjectTimesheetLockRequest';
import { UpdateProjectTimesheetLockRequestAnyOf } from './updateProjectTimesheetLockRequestAnyOf';
import { UpdateProjectTimesheetLockRequestAnyOf1 } from './updateProjectTimesheetLockRequestAnyOf1';
import { UpdateRoleRequest } from './updateRoleRequest';
import { UpdateSelectCustomFieldOption200Response } from './updateSelectCustomFieldOption200Response';
import { UpdateSelectCustomFieldOption200ResponseOption } from './updateSelectCustomFieldOption200ResponseOption';
import { UpdateSelectCustomFieldOptionRequest } from './updateSelectCustomFieldOptionRequest';
import { UpdateWorkstreamRequest } from './updateWorkstreamRequest';
import { User } from './user';
import { UserPermissions } from './userPermissions';
import { View } from './view';
import { Workstream } from './workstream';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "Actor.TypeEnum": Actor.TypeEnum,
        "ActorApi.TypeEnum": ActorApi.TypeEnum,
        "ActorCsv.TypeEnum": ActorCsv.TypeEnum,
        "ActorIntegration.TypeEnum": ActorIntegration.TypeEnum,
        "ActorRunnSupport.TypeEnum": ActorRunnSupport.TypeEnum,
        "ActorSystem.TypeEnum": ActorSystem.TypeEnum,
        "ActorUser.TypeEnum": ActorUser.TypeEnum,
        "BadRequest.ErrorEnum": BadRequest.ErrorEnum,
        "BadRequest.StatusCodeEnum": BadRequest.StatusCodeEnum,
        "Conflict.ErrorEnum": Conflict.ErrorEnum,
        "Conflict.StatusCodeEnum": Conflict.StatusCodeEnum,
        "ContractInput.EmploymentTypeEnum": ContractInput.EmploymentTypeEnum,
        "CreateCheckboxCustomFieldRequest.ModelEnum": CreateCheckboxCustomFieldRequest.ModelEnum,
        "CreateDateCustomFieldRequest.ModelEnum": CreateDateCustomFieldRequest.ModelEnum,
        "CreateInvitationRequest.UserTypeEnum": CreateInvitationRequest.UserTypeEnum,
        "CreateInvitationRequest.FinancialPermissionEnum": CreateInvitationRequest.FinancialPermissionEnum,
        "CreateInvitationRequest.EditProjectsPermissionEnum": CreateInvitationRequest.EditProjectsPermissionEnum,
        "CreateInvitationRequest.EditOthersPermissionEnum": CreateInvitationRequest.EditOthersPermissionEnum,
        "CreateInvitationRequest.ManageProjectsPermissionEnum": CreateInvitationRequest.ManageProjectsPermissionEnum,
        "CreateInvitationRequest.ManageOthersPermissionEnum": CreateInvitationRequest.ManageOthersPermissionEnum,
        "CreateInvitationRequestAllOfAnyOf.EditProjectsPermissionEnum": CreateInvitationRequestAllOfAnyOf.EditProjectsPermissionEnum,
        "CreateInvitationRequestAllOfAnyOf.EditOthersPermissionEnum": CreateInvitationRequestAllOfAnyOf.EditOthersPermissionEnum,
        "CreateInvitationRequestAllOfAnyOf1.ManageProjectsPermissionEnum": CreateInvitationRequestAllOfAnyOf1.ManageProjectsPermissionEnum,
        "CreateInvitationRequestAllOfAnyOf1.ManageOthersPermissionEnum": CreateInvitationRequestAllOfAnyOf1.ManageOthersPermissionEnum,
        "CreatePersonRequest.EmploymentTypeEnum": CreatePersonRequest.EmploymentTypeEnum,
        "CreateProjectPersonRequestRequest.StatusEnum": CreateProjectPersonRequestRequest.StatusEnum,
        "CreateProjectPhaseRequest.ColorEnum": CreateProjectPhaseRequest.ColorEnum,
        "CreateProjectRequest.PricingModelEnum": CreateProjectRequest.PricingModelEnum,
        "CreateProjectRequest.RateTypeEnum": CreateProjectRequest.RateTypeEnum,
        "CreateProjectRequestAnyOf.PricingModelEnum": CreateProjectRequestAnyOf.PricingModelEnum,
        "CreateProjectRequestAnyOf.RateTypeEnum": CreateProjectRequestAnyOf.RateTypeEnum,
        "CreateRateCardRequest.RateTypeEnum": CreateRateCardRequest.RateTypeEnum,
        "CreateSelectCustomFieldRequest.ModelEnum": CreateSelectCustomFieldRequest.ModelEnum,
        "CustomCheckboxFieldCollection.TypeEnum": CustomCheckboxFieldCollection.TypeEnum,
        "CustomDateFieldCollection.TypeEnum": CustomDateFieldCollection.TypeEnum,
        "CustomFieldCheckbox.ModelEnum": CustomFieldCheckbox.ModelEnum,
        "CustomFieldDate.ModelEnum": CustomFieldDate.ModelEnum,
        "CustomFieldSelect.ModelEnum": CustomFieldSelect.ModelEnum,
        "CustomFieldText.ModelEnum": CustomFieldText.ModelEnum,
        "CustomSelectFieldCollection.TypeEnum": CustomSelectFieldCollection.TypeEnum,
        "CustomTextFieldCollection.TypeEnum": CustomTextFieldCollection.TypeEnum,
        "Event.TypeEnum": Event.TypeEnum,
        "EventActualDeleted.TypeEnum": EventActualDeleted.TypeEnum,
        "EventAssignmentDeleted.TypeEnum": EventAssignmentDeleted.TypeEnum,
        "EventContractDeleted.TypeEnum": EventContractDeleted.TypeEnum,
        "EventPersonDeleted.TypeEnum": EventPersonDeleted.TypeEnum,
        "EventProjectDeleted.TypeEnum": EventProjectDeleted.TypeEnum,
        "EventTimeOffDeleted.TypeEnum": EventTimeOffDeleted.TypeEnum,
        "GetPersonCurrentContract404Response.ErrorEnum": GetPersonCurrentContract404Response.ErrorEnum,
        "GetPersonCurrentContract404Response.StatusCodeEnum": GetPersonCurrentContract404Response.StatusCodeEnum,
        "GetProjectTimesheetLock200Response.StatusEnum": GetProjectTimesheetLock200Response.StatusEnum,
        "Invitation.UserTypeEnum": Invitation.UserTypeEnum,
        "Invitation.FinancialPermissionEnum": Invitation.FinancialPermissionEnum,
        "Invitation.EditProjectsPermissionEnum": Invitation.EditProjectsPermissionEnum,
        "Invitation.EditOthersPermissionEnum": Invitation.EditOthersPermissionEnum,
        "Invitation.ManageProjectsPermissionEnum": Invitation.ManageProjectsPermissionEnum,
        "Invitation.ManagePeoplePermissionEnum": Invitation.ManagePeoplePermissionEnum,
        "NotFound.ErrorEnum": NotFound.ErrorEnum,
        "NotFound.StatusCodeEnum": NotFound.StatusCodeEnum,
        "PersonCustomFieldCustomFieldsInner.TypeEnum": PersonCustomFieldCustomFieldsInner.TypeEnum,
        "PersonRequest.StatusEnum": PersonRequest.StatusEnum,
        "Project.PricingModelEnum": Project.PricingModelEnum,
        "Project.RateTypeEnum": Project.RateTypeEnum,
        "RateCard.RateTypeEnum": RateCard.RateTypeEnum,
        "SortOrder": SortOrder,
        "Unauthorized.ErrorEnum": Unauthorized.ErrorEnum,
        "Unauthorized.MessageEnum": Unauthorized.MessageEnum,
        "Unauthorized.StatusCodeEnum": Unauthorized.StatusCodeEnum,
        "UnprocessableEntity.ErrorEnum": UnprocessableEntity.ErrorEnum,
        "UnprocessableEntity.StatusCodeEnum": UnprocessableEntity.StatusCodeEnum,
        "UpdateContractRequest.EmploymentTypeEnum": UpdateContractRequest.EmploymentTypeEnum,
        "UpdateProjectPersonRequest200Response.StatusEnum": UpdateProjectPersonRequest200Response.StatusEnum,
        "UpdateProjectPersonRequestRequest.StatusEnum": UpdateProjectPersonRequestRequest.StatusEnum,
        "UpdateProjectPhaseRequest.ColorEnum": UpdateProjectPhaseRequest.ColorEnum,
        "UpdateProjectRequest.PricingModelEnum": UpdateProjectRequest.PricingModelEnum,
        "UpdateProjectRequest.RateTypeEnum": UpdateProjectRequest.RateTypeEnum,
        "UpdateProjectTimesheetLockRequest.StatusEnum": UpdateProjectTimesheetLockRequest.StatusEnum,
        "UpdateProjectTimesheetLockRequestAnyOf.StatusEnum": UpdateProjectTimesheetLockRequestAnyOf.StatusEnum,
        "UpdateProjectTimesheetLockRequestAnyOf1.StatusEnum": UpdateProjectTimesheetLockRequestAnyOf1.StatusEnum,
        "UserPermissions.TypeEnum": UserPermissions.TypeEnum,
        "UserPermissions.FinancialEnum": UserPermissions.FinancialEnum,
        "UserPermissions.EditProjectsEnum": UserPermissions.EditProjectsEnum,
        "UserPermissions.ManageProjectsEnum": UserPermissions.ManageProjectsEnum,
        "UserPermissions.EditOthersEnum": UserPermissions.EditOthersEnum,
        "UserPermissions.ManagePeopleEnum": UserPermissions.ManagePeopleEnum,
}

let typeMap: {[index: string]: any} = {
    "Actor": Actor,
    "ActorApi": ActorApi,
    "ActorCsv": ActorCsv,
    "ActorIntegration": ActorIntegration,
    "ActorRunnSupport": ActorRunnSupport,
    "ActorSystem": ActorSystem,
    "ActorUser": ActorUser,
    "Actual": Actual,
    "ActualInput": ActualInput,
    "ActualTimeEntry": ActualTimeEntry,
    "AddPeopleToSkill201Response": AddPeopleToSkill201Response,
    "AddPeopleToSkillRequest": AddPeopleToSkillRequest,
    "AddPeopleToSkillRequestPeopleInner": AddPeopleToSkillRequestPeopleInner,
    "AddPersonSkillRequest": AddPersonSkillRequest,
    "AddPersonSkillRequestLevel": AddPersonSkillRequestLevel,
    "AddPersonToProjectRequest": AddPersonToProjectRequest,
    "AddPersonToTeamRequest": AddPersonToTeamRequest,
    "Assignment": Assignment,
    "BadRequest": BadRequest,
    "Client": Client,
    "ClientInput": ClientInput,
    "CollectionPerson": CollectionPerson,
    "CollectionPersonManagersInner": CollectionPersonManagersInner,
    "Competency": Competency,
    "Conflict": Conflict,
    "Contract": Contract,
    "ContractInput": ContractInput,
    "CreateActualsBulkRequest": CreateActualsBulkRequest,
    "CreateAssignmentRequest": CreateAssignmentRequest,
    "CreateCheckboxCustomFieldRequest": CreateCheckboxCustomFieldRequest,
    "CreateClientsBulkRequest": CreateClientsBulkRequest,
    "CreateDateCustomFieldRequest": CreateDateCustomFieldRequest,
    "CreateInvitationRequest": CreateInvitationRequest,
    "CreateInvitationRequestAllOfAnyOf": CreateInvitationRequestAllOfAnyOf,
    "CreateInvitationRequestAllOfAnyOf1": CreateInvitationRequestAllOfAnyOf1,
    "CreateLeaveTimeOffsBulkRequest": CreateLeaveTimeOffsBulkRequest,
    "CreateNoteForProjectRequest": CreateNoteForProjectRequest,
    "CreatePersonRequest": CreatePersonRequest,
    "CreatePersonRequestRosteredDays": CreatePersonRequestRosteredDays,
    "CreatePlaceholderRequest": CreatePlaceholderRequest,
    "CreateProjectBudgetRoleRequest": CreateProjectBudgetRoleRequest,
    "CreateProjectMilestoneRequest": CreateProjectMilestoneRequest,
    "CreateProjectMilestoneRequestIcon": CreateProjectMilestoneRequestIcon,
    "CreateProjectPersonRequestRequest": CreateProjectPersonRequestRequest,
    "CreateProjectPhaseRequest": CreateProjectPhaseRequest,
    "CreateProjectRequest": CreateProjectRequest,
    "CreateProjectRequestAnyOf": CreateProjectRequestAnyOf,
    "CreateProjectRequestAnyOf1": CreateProjectRequestAnyOf1,
    "CreateProjectRequestAnyOf1FromTemplate": CreateProjectRequestAnyOf1FromTemplate,
    "CreateRateCardRequest": CreateRateCardRequest,
    "CreateRateCardRequestReferencesInner": CreateRateCardRequestReferencesInner,
    "CreateRoleRequest": CreateRoleRequest,
    "CreateSelectCustomFieldRequest": CreateSelectCustomFieldRequest,
    "CreateSelectCustomFieldRequestOptionsInner": CreateSelectCustomFieldRequestOptionsInner,
    "CustomCheckboxFieldCollection": CustomCheckboxFieldCollection,
    "CustomDateFieldCollection": CustomDateFieldCollection,
    "CustomFieldCheckbox": CustomFieldCheckbox,
    "CustomFieldDate": CustomFieldDate,
    "CustomFieldSelect": CustomFieldSelect,
    "CustomFieldText": CustomFieldText,
    "CustomSelectFieldCollection": CustomSelectFieldCollection,
    "CustomTextFieldCollection": CustomTextFieldCollection,
    "DeleteLeaveTimeOffsBulkRequest": DeleteLeaveTimeOffsBulkRequest,
    "Event": Event,
    "EventActualDeleted": EventActualDeleted,
    "EventActualDeletedActual": EventActualDeletedActual,
    "EventAssignmentDeleted": EventAssignmentDeleted,
    "EventAssignmentDeletedAssignment": EventAssignmentDeletedAssignment,
    "EventContractDeleted": EventContractDeleted,
    "EventContractDeletedContract": EventContractDeletedContract,
    "EventPersonDeleted": EventPersonDeleted,
    "EventPersonDeletedPerson": EventPersonDeletedPerson,
    "EventProjectDeleted": EventProjectDeleted,
    "EventProjectDeletedProject": EventProjectDeletedProject,
    "EventSubresourcePerson": EventSubresourcePerson,
    "EventSubresourcePhase": EventSubresourcePhase,
    "EventSubresourceProject": EventSubresourceProject,
    "EventSubresourceRole": EventSubresourceRole,
    "EventSubresourceWorkstream": EventSubresourceWorkstream,
    "EventTimeOffDeleted": EventTimeOffDeleted,
    "EventTimeOffDeletedTimeOff": EventTimeOffDeletedTimeOff,
    "GetCurrentUser200Response": GetCurrentUser200Response,
    "GetPersonCurrentContract404Response": GetPersonCurrentContract404Response,
    "GetPersonCurrentTeam200Response": GetPersonCurrentTeam200Response,
    "GetPersonCurrentTeam200ResponseValuesInner": GetPersonCurrentTeam200ResponseValuesInner,
    "GetPersonHoursReport200Response": GetPersonHoursReport200Response,
    "GetProjectHoursReport200Response": GetProjectHoursReport200Response,
    "GetProjectTimesheetLock200Response": GetProjectTimesheetLock200Response,
    "Holiday": Holiday,
    "HolidayGroup": HolidayGroup,
    "Invitation": Invitation,
    "ListActuals200Response": ListActuals200Response,
    "ListAssignments200Response": ListAssignments200Response,
    "ListBudgetRoles200Response": ListBudgetRoles200Response,
    "ListCheckboxCustomFields200Response": ListCheckboxCustomFields200Response,
    "ListClientProjects200Response": ListClientProjects200Response,
    "ListClients200Response": ListClients200Response,
    "ListContracts200Response": ListContracts200Response,
    "ListDateCustomFields200Response": ListDateCustomFields200Response,
    "ListEvents200Response": ListEvents200Response,
    "ListHolidayGroupHolidays200Response": ListHolidayGroupHolidays200Response,
    "ListHolidayGroups200Response": ListHolidayGroups200Response,
    "ListInvitations200Response": ListInvitations200Response,
    "ListMilestones200Response": ListMilestones200Response,
    "ListOtherExpenses200Response": ListOtherExpenses200Response,
    "ListPeople200Response": ListPeople200Response,
    "ListPeopleCustomFields200Response": ListPeopleCustomFields200Response,
    "ListPeopleNotes200Response": ListPeopleNotes200Response,
    "ListPeopleSkills200Response": ListPeopleSkills200Response,
    "ListPeopleTags200Response": ListPeopleTags200Response,
    "ListPeopleTags200ResponseValuesInner": ListPeopleTags200ResponseValuesInner,
    "ListPersonHolidays200Response": ListPersonHolidays200Response,
    "ListPersonHolidays200ResponseValuesInner": ListPersonHolidays200ResponseValuesInner,
    "ListPersonLeave200Response": ListPersonLeave200Response,
    "ListPersonRequests200Response": ListPersonRequests200Response,
    "ListPersonSkills200Response": ListPersonSkills200Response,
    "ListPhases200Response": ListPhases200Response,
    "ListPlaceholders200Response": ListPlaceholders200Response,
    "ListProjectCustomFields200Response": ListProjectCustomFields200Response,
    "ListProjectMembers200Response": ListProjectMembers200Response,
    "ListProjectMembers200ResponseValuesInner": ListProjectMembers200ResponseValuesInner,
    "ListProjectNotes200Response": ListProjectNotes200Response,
    "ListProjectRates200Response": ListProjectRates200Response,
    "ListProjectTags200Response": ListProjectTags200Response,
    "ListProjectTotalsReport200Response": ListProjectTotalsReport200Response,
    "ListProjectWorkstreams200Response": ListProjectWorkstreams200Response,
    "ListProjectWorkstreams200ResponseValuesInner": ListProjectWorkstreams200ResponseValuesInner,
    "ListProjectWorkstreamsForProject200Response": ListProjectWorkstreamsForProject200Response,
    "ListRateCards200Response": ListRateCards200Response,
    "ListRoles200Response": ListRoles200Response,
    "ListSelectCustomFields200Response": ListSelectCustomFields200Response,
    "ListSkills200Response": ListSkills200Response,
    "ListTeams200Response": ListTeams200Response,
    "ListTextCustomFields200Response": ListTextCustomFields200Response,
    "ListUserViews200Response": ListUserViews200Response,
    "ListUsers200Response": ListUsers200Response,
    "ListWorkstreams200Response": ListWorkstreams200Response,
    "Milestone": Milestone,
    "ModifiedAfter": ModifiedAfter,
    "NotFound": NotFound,
    "Person": Person,
    "PersonCompetency": PersonCompetency,
    "PersonCompetencyAllOfLevel": PersonCompetencyAllOfLevel,
    "PersonCustomField": PersonCustomField,
    "PersonCustomFieldCustomFieldsInner": PersonCustomFieldCustomFieldsInner,
    "PersonCustomFields": PersonCustomFields,
    "PersonCustomFieldsCheckboxInner": PersonCustomFieldsCheckboxInner,
    "PersonCustomFieldsDateInner": PersonCustomFieldsDateInner,
    "PersonCustomFieldsSelectInner": PersonCustomFieldsSelectInner,
    "PersonCustomFieldsSelectInnerValuesInner": PersonCustomFieldsSelectInnerValuesInner,
    "PersonCustomFieldsTextInner": PersonCustomFieldsTextInner,
    "PersonNote": PersonNote,
    "PersonNotesInner": PersonNotesInner,
    "PersonRequest": PersonRequest,
    "PersonSkillsInner": PersonSkillsInner,
    "Placeholder": Placeholder,
    "PlaceholderInput": PlaceholderInput,
    "Project": Project,
    "ProjectAggregate": ProjectAggregate,
    "ProjectAggregateActuals": ProjectAggregateActuals,
    "ProjectAggregateAssignments": ProjectAggregateAssignments,
    "ProjectBudgetRole": ProjectBudgetRole,
    "ProjectCustomField": ProjectCustomField,
    "ProjectNote": ProjectNote,
    "ProjectOtherExpense": ProjectOtherExpense,
    "ProjectOtherExpense1": ProjectOtherExpense1,
    "ProjectPhase": ProjectPhase,
    "ProjectRate": ProjectRate,
    "ProjectTag": ProjectTag,
    "ProjectWorkstream": ProjectWorkstream,
    "RateCard": RateCard,
    "RateCardRatesInner": RateCardRatesInner,
    "RateCardRatesInnerRole": RateCardRatesInnerRole,
    "Reference": Reference,
    "ReportsHoursPeople": ReportsHoursPeople,
    "ReportsHoursPeopleActuals": ReportsHoursPeopleActuals,
    "ReportsHoursPeopleAssignments": ReportsHoursPeopleAssignments,
    "ReportsHoursProjects": ReportsHoursProjects,
    "Role": Role,
    "RosteredDays": RosteredDays,
    "Skill": Skill,
    "Tag": Tag,
    "Team": Team,
    "TimeOff": TimeOff,
    "TimeOffHolidayInput": TimeOffHolidayInput,
    "TimeOffLeaveInput": TimeOffLeaveInput,
    "Unauthorized": Unauthorized,
    "UnprocessableEntity": UnprocessableEntity,
    "UpdateCheckboxCustomFieldRequest": UpdateCheckboxCustomFieldRequest,
    "UpdateClientRequest": UpdateClientRequest,
    "UpdateContractRequest": UpdateContractRequest,
    "UpdateContractRequestRosteredDays": UpdateContractRequestRosteredDays,
    "UpdateDateCustomFieldRequest": UpdateDateCustomFieldRequest,
    "UpdatePeopleTagRequest": UpdatePeopleTagRequest,
    "UpdatePersonCheckboxCustomFieldRequest": UpdatePersonCheckboxCustomFieldRequest,
    "UpdatePersonDateCustomFieldRequest": UpdatePersonDateCustomFieldRequest,
    "UpdatePersonRequest": UpdatePersonRequest,
    "UpdatePersonRequestTagsInner": UpdatePersonRequestTagsInner,
    "UpdatePersonSelectCustomFieldRequest": UpdatePersonSelectCustomFieldRequest,
    "UpdatePersonSelectCustomFieldRequestValuesInner": UpdatePersonSelectCustomFieldRequestValuesInner,
    "UpdatePersonSkillRequest": UpdatePersonSkillRequest,
    "UpdatePersonTextCustomFieldRequest": UpdatePersonTextCustomFieldRequest,
    "UpdateProjectBudgetRoleRequest": UpdateProjectBudgetRoleRequest,
    "UpdateProjectBudgetRoleRequestAnyOf": UpdateProjectBudgetRoleRequestAnyOf,
    "UpdateProjectBudgetRoleRequestAnyOf1": UpdateProjectBudgetRoleRequestAnyOf1,
    "UpdateProjectMilestoneRequest": UpdateProjectMilestoneRequest,
    "UpdateProjectPersonRequest200Response": UpdateProjectPersonRequest200Response,
    "UpdateProjectPersonRequestRequest": UpdateProjectPersonRequestRequest,
    "UpdateProjectPhaseRequest": UpdateProjectPhaseRequest,
    "UpdateProjectRequest": UpdateProjectRequest,
    "UpdateProjectRoleRateRequest": UpdateProjectRoleRateRequest,
    "UpdateProjectTimesheetLockRequest": UpdateProjectTimesheetLockRequest,
    "UpdateProjectTimesheetLockRequestAnyOf": UpdateProjectTimesheetLockRequestAnyOf,
    "UpdateProjectTimesheetLockRequestAnyOf1": UpdateProjectTimesheetLockRequestAnyOf1,
    "UpdateRoleRequest": UpdateRoleRequest,
    "UpdateSelectCustomFieldOption200Response": UpdateSelectCustomFieldOption200Response,
    "UpdateSelectCustomFieldOption200ResponseOption": UpdateSelectCustomFieldOption200ResponseOption,
    "UpdateSelectCustomFieldOptionRequest": UpdateSelectCustomFieldOptionRequest,
    "UpdateWorkstreamRequest": UpdateWorkstreamRequest,
    "User": User,
    "UserPermissions": UserPermissions,
    "View": View,
    "Workstream": Workstream,
}

// Check if a string starts with another string without using es6 features
function startsWith(str: string, match: string): boolean {
    return str.substring(0, match.length) === match;
}

// Check if a string ends with another string without using es6 features
function endsWith(str: string, match: string): boolean {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
