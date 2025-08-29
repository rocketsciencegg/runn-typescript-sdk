import http from 'http';
import { Actual } from '../model/actual';
import { ActualInput } from '../model/actualInput';
import { ActualTimeEntry } from '../model/actualTimeEntry';
import { AddPeopleToSkill201Response } from '../model/addPeopleToSkill201Response';
import { AddPeopleToSkillRequest } from '../model/addPeopleToSkillRequest';
import { AddPersonSkillRequest } from '../model/addPersonSkillRequest';
import { AddPersonToProjectRequest } from '../model/addPersonToProjectRequest';
import { AddPersonToTeamRequest } from '../model/addPersonToTeamRequest';
import { Assignment } from '../model/assignment';
import { Client } from '../model/client';
import { ClientInput } from '../model/clientInput';
import { Competency } from '../model/competency';
import { Contract } from '../model/contract';
import { ContractInput } from '../model/contractInput';
import { CreateActualsBulkRequest } from '../model/createActualsBulkRequest';
import { CreateAssignmentRequest } from '../model/createAssignmentRequest';
import { CreateCheckboxCustomFieldRequest } from '../model/createCheckboxCustomFieldRequest';
import { CreateClientsBulkRequest } from '../model/createClientsBulkRequest';
import { CreateDateCustomFieldRequest } from '../model/createDateCustomFieldRequest';
import { CreateInvitationRequest } from '../model/createInvitationRequest';
import { CreateLeaveTimeOffsBulkRequest } from '../model/createLeaveTimeOffsBulkRequest';
import { CreateNoteForProjectRequest } from '../model/createNoteForProjectRequest';
import { CreatePersonRequest } from '../model/createPersonRequest';
import { CreatePlaceholderRequest } from '../model/createPlaceholderRequest';
import { CreateProjectBudgetRoleRequest } from '../model/createProjectBudgetRoleRequest';
import { CreateProjectMilestoneRequest } from '../model/createProjectMilestoneRequest';
import { CreateProjectPersonRequestRequest } from '../model/createProjectPersonRequestRequest';
import { CreateProjectPhaseRequest } from '../model/createProjectPhaseRequest';
import { CreateProjectRequest } from '../model/createProjectRequest';
import { CreateRateCardRequest } from '../model/createRateCardRequest';
import { CreateRoleRequest } from '../model/createRoleRequest';
import { CreateSelectCustomFieldRequest } from '../model/createSelectCustomFieldRequest';
import { CustomFieldCheckbox } from '../model/customFieldCheckbox';
import { CustomFieldDate } from '../model/customFieldDate';
import { CustomFieldSelect } from '../model/customFieldSelect';
import { CustomFieldText } from '../model/customFieldText';
import { DeleteLeaveTimeOffsBulkRequest } from '../model/deleteLeaveTimeOffsBulkRequest';
import { GetCurrentUser200Response } from '../model/getCurrentUser200Response';
import { GetPersonCurrentTeam200Response } from '../model/getPersonCurrentTeam200Response';
import { GetPersonHoursReport200Response } from '../model/getPersonHoursReport200Response';
import { GetProjectHoursReport200Response } from '../model/getProjectHoursReport200Response';
import { GetProjectTimesheetLock200Response } from '../model/getProjectTimesheetLock200Response';
import { HolidayGroup } from '../model/holidayGroup';
import { Invitation } from '../model/invitation';
import { ListActuals200Response } from '../model/listActuals200Response';
import { ListAssignments200Response } from '../model/listAssignments200Response';
import { ListBudgetRoles200Response } from '../model/listBudgetRoles200Response';
import { ListCheckboxCustomFields200Response } from '../model/listCheckboxCustomFields200Response';
import { ListClientProjects200Response } from '../model/listClientProjects200Response';
import { ListClients200Response } from '../model/listClients200Response';
import { ListContracts200Response } from '../model/listContracts200Response';
import { ListDateCustomFields200Response } from '../model/listDateCustomFields200Response';
import { ListEvents200Response } from '../model/listEvents200Response';
import { ListHolidayGroupHolidays200Response } from '../model/listHolidayGroupHolidays200Response';
import { ListHolidayGroups200Response } from '../model/listHolidayGroups200Response';
import { ListInvitations200Response } from '../model/listInvitations200Response';
import { ListMilestones200Response } from '../model/listMilestones200Response';
import { ListOtherExpenses200Response } from '../model/listOtherExpenses200Response';
import { ListPeople200Response } from '../model/listPeople200Response';
import { ListPeopleCustomFields200Response } from '../model/listPeopleCustomFields200Response';
import { ListPeopleNotes200Response } from '../model/listPeopleNotes200Response';
import { ListPeopleSkills200Response } from '../model/listPeopleSkills200Response';
import { ListPeopleTags200Response } from '../model/listPeopleTags200Response';
import { ListPeopleTags200ResponseValuesInner } from '../model/listPeopleTags200ResponseValuesInner';
import { ListPersonHolidays200Response } from '../model/listPersonHolidays200Response';
import { ListPersonLeave200Response } from '../model/listPersonLeave200Response';
import { ListPersonRequests200Response } from '../model/listPersonRequests200Response';
import { ListPersonSkills200Response } from '../model/listPersonSkills200Response';
import { ListPhases200Response } from '../model/listPhases200Response';
import { ListPlaceholders200Response } from '../model/listPlaceholders200Response';
import { ListProjectCustomFields200Response } from '../model/listProjectCustomFields200Response';
import { ListProjectMembers200Response } from '../model/listProjectMembers200Response';
import { ListProjectNotes200Response } from '../model/listProjectNotes200Response';
import { ListProjectRates200Response } from '../model/listProjectRates200Response';
import { ListProjectTags200Response } from '../model/listProjectTags200Response';
import { ListProjectTotalsReport200Response } from '../model/listProjectTotalsReport200Response';
import { ListProjectWorkstreams200Response } from '../model/listProjectWorkstreams200Response';
import { ListProjectWorkstreamsForProject200Response } from '../model/listProjectWorkstreamsForProject200Response';
import { ListRateCards200Response } from '../model/listRateCards200Response';
import { ListRoles200Response } from '../model/listRoles200Response';
import { ListSelectCustomFields200Response } from '../model/listSelectCustomFields200Response';
import { ListSkills200Response } from '../model/listSkills200Response';
import { ListTeams200Response } from '../model/listTeams200Response';
import { ListTextCustomFields200Response } from '../model/listTextCustomFields200Response';
import { ListUserViews200Response } from '../model/listUserViews200Response';
import { ListUsers200Response } from '../model/listUsers200Response';
import { ListWorkstreams200Response } from '../model/listWorkstreams200Response';
import { Milestone } from '../model/milestone';
import { ModifiedAfter } from '../model/modifiedAfter';
import { Person } from '../model/person';
import { PersonRequest } from '../model/personRequest';
import { PlaceholderInput } from '../model/placeholderInput';
import { Project } from '../model/project';
import { ProjectAggregate } from '../model/projectAggregate';
import { ProjectBudgetRole } from '../model/projectBudgetRole';
import { ProjectNote } from '../model/projectNote';
import { ProjectOtherExpense } from '../model/projectOtherExpense';
import { ProjectOtherExpense1 } from '../model/projectOtherExpense1';
import { ProjectPhase } from '../model/projectPhase';
import { ProjectRate } from '../model/projectRate';
import { ProjectTag } from '../model/projectTag';
import { ProjectWorkstream } from '../model/projectWorkstream';
import { RateCard } from '../model/rateCard';
import { Role } from '../model/role';
import { Skill } from '../model/skill';
import { SortOrder } from '../model/sortOrder';
import { Team } from '../model/team';
import { TimeOff } from '../model/timeOff';
import { TimeOffHolidayInput } from '../model/timeOffHolidayInput';
import { TimeOffLeaveInput } from '../model/timeOffLeaveInput';
import { UpdateCheckboxCustomFieldRequest } from '../model/updateCheckboxCustomFieldRequest';
import { UpdateClientRequest } from '../model/updateClientRequest';
import { UpdateContractRequest } from '../model/updateContractRequest';
import { UpdateDateCustomFieldRequest } from '../model/updateDateCustomFieldRequest';
import { UpdatePeopleTagRequest } from '../model/updatePeopleTagRequest';
import { UpdatePersonCheckboxCustomFieldRequest } from '../model/updatePersonCheckboxCustomFieldRequest';
import { UpdatePersonDateCustomFieldRequest } from '../model/updatePersonDateCustomFieldRequest';
import { UpdatePersonRequest } from '../model/updatePersonRequest';
import { UpdatePersonSelectCustomFieldRequest } from '../model/updatePersonSelectCustomFieldRequest';
import { UpdatePersonSkillRequest } from '../model/updatePersonSkillRequest';
import { UpdatePersonTextCustomFieldRequest } from '../model/updatePersonTextCustomFieldRequest';
import { UpdateProjectBudgetRoleRequest } from '../model/updateProjectBudgetRoleRequest';
import { UpdateProjectMilestoneRequest } from '../model/updateProjectMilestoneRequest';
import { UpdateProjectPersonRequest200Response } from '../model/updateProjectPersonRequest200Response';
import { UpdateProjectPersonRequestRequest } from '../model/updateProjectPersonRequestRequest';
import { UpdateProjectPhaseRequest } from '../model/updateProjectPhaseRequest';
import { UpdateProjectRequest } from '../model/updateProjectRequest';
import { UpdateProjectRoleRateRequest } from '../model/updateProjectRoleRateRequest';
import { UpdateProjectTimesheetLockRequest } from '../model/updateProjectTimesheetLockRequest';
import { UpdateRoleRequest } from '../model/updateRoleRequest';
import { UpdateSelectCustomFieldOption200Response } from '../model/updateSelectCustomFieldOption200Response';
import { UpdateSelectCustomFieldOptionRequest } from '../model/updateSelectCustomFieldOptionRequest';
import { UpdateWorkstreamRequest } from '../model/updateWorkstreamRequest';
import { User } from '../model/user';
import { Workstream } from '../model/workstream';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum DefaultApiApiKeys {
}
export declare class DefaultApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
        bearerAuth: HttpBearerAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: DefaultApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    addPeopleToSkill(skillId: number, acceptVersion: '1.0.0', addPeopleToSkillRequest: AddPeopleToSkillRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddPeopleToSkill201Response;
    }>;
    addPersonSkill(personId: number, acceptVersion: '1.0.0', addPersonSkillRequest: AddPersonSkillRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Competency;
    }>;
    addPersonToProject(personId: number, acceptVersion: '1.0.0', addPersonToProjectRequest: AddPersonToProjectRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    addPersonToTeam(personId: number, acceptVersion: '1.0.0', addPersonToTeamRequest: AddPersonToTeamRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    addPlaceholderSkill(placeholderId: number, acceptVersion: '1.0.0', addPersonSkillRequest: AddPersonSkillRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Competency;
    }>;
    addPlaceholderToTeam(placeholderId: number, acceptVersion: '1.0.0', addPersonToTeamRequest: AddPersonToTeamRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    addProjectTagToProject(projectTagId: number, projectId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProjectTag;
    }>;
    addWorkstreamToProject(projectId: number, workstreamId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProjectWorkstream;
    }>;
    allocateViewToUser(userId: number, viewId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    convertLegacyId(model: 'accounts' | 'actuals' | 'assignments' | 'clients' | 'contracts' | 'help_documents' | 'invitations' | 'milestones' | 'notes' | 'people' | 'phases' | 'project_member' | 'project_rates' | 'projects' | 'rate_cards' | 'role_charge_our_rate' | 'roles' | 'tags' | 'teams' | 'time_offs' | 'users' | 'user_accounts' | 'holiday_groups' | 'skills' | 'other_expenses' | 'people_notes', legacyId: string, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: number;
    }>;
    createActual(acceptVersion: '1.0.0', actualInput?: ActualInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Actual;
    }>;
    createActualsBulk(acceptVersion: '1.0.0', createActualsBulkRequest: CreateActualsBulkRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Actual>;
    }>;
    createAssignment(acceptVersion: '1.0.0', createAssignmentRequest: CreateAssignmentRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Assignment>;
    }>;
    createCheckboxCustomField(acceptVersion: '1.0.0', createCheckboxCustomFieldRequest: CreateCheckboxCustomFieldRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CustomFieldCheckbox;
    }>;
    createClient(acceptVersion: '1.0.0', clientInput?: ClientInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Client;
    }>;
    createClientsBulk(acceptVersion: '1.0.0', createClientsBulkRequest: CreateClientsBulkRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Client>;
    }>;
    createDateCustomField(acceptVersion: '1.0.0', createDateCustomFieldRequest: CreateDateCustomFieldRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CustomFieldDate;
    }>;
    createHolidayTimeOff(acceptVersion: '1.0.0', timeOffHolidayInput?: TimeOffHolidayInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TimeOff;
    }>;
    createInvitation(acceptVersion: '1.0.0', createInvitationRequest?: CreateInvitationRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Invitation;
    }>;
    createLeaveTimeOff(acceptVersion: '1.0.0', timeOffLeaveInput?: TimeOffLeaveInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TimeOff;
    }>;
    createLeaveTimeOffsBulk(acceptVersion: '1.0.0', createLeaveTimeOffsBulkRequest: CreateLeaveTimeOffsBulkRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<TimeOff>;
    }>;
    createNoteForProject(projectId: number, acceptVersion: '1.0.0', createNoteForProjectRequest: CreateNoteForProjectRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProjectNote;
    }>;
    createPeopleTag(acceptVersion: '1.0.0', updateSelectCustomFieldOptionRequest: UpdateSelectCustomFieldOptionRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListPeopleTags200ResponseValuesInner;
    }>;
    createPerson(acceptVersion: '1.0.0', createPersonRequest: CreatePersonRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Person;
    }>;
    createPersonContract(personId: number, acceptVersion: '1.0.0', contractInput?: ContractInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Contract;
    }>;
    createPlaceholder(acceptVersion: '1.0.0', createPlaceholderRequest: CreatePlaceholderRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PlaceholderInput;
    }>;
    createProject(acceptVersion: '1.0.0', createProjectRequest?: CreateProjectRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Project;
    }>;
    createProjectBudgetRole(projectId: number, acceptVersion: '1.0.0', createProjectBudgetRoleRequest?: CreateProjectBudgetRoleRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    createProjectMilestone(projectId: number, acceptVersion: '1.0.0', createProjectMilestoneRequest: CreateProjectMilestoneRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Milestone;
    }>;
    createProjectOtherExpense(projectId: number, acceptVersion: '1.0.0', projectOtherExpense: ProjectOtherExpense, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProjectOtherExpense;
    }>;
    createProjectPersonRequest(projectId: number, acceptVersion: '1.0.0', createProjectPersonRequestRequest: CreateProjectPersonRequestRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PersonRequest;
    }>;
    createProjectPhase(projectId: number, acceptVersion: '1.0.0', createProjectPhaseRequest: CreateProjectPhaseRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProjectPhase;
    }>;
    createProjectTag(acceptVersion: '1.0.0', updateSelectCustomFieldOptionRequest: UpdateSelectCustomFieldOptionRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProjectTag;
    }>;
    createRateCard(acceptVersion: '1.0.0', createRateCardRequest: CreateRateCardRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RateCard;
    }>;
    createRole(acceptVersion: '1.0.0', createRoleRequest: CreateRoleRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Role;
    }>;
    createSelectCustomField(acceptVersion: '1.0.0', createSelectCustomFieldRequest: CreateSelectCustomFieldRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CustomFieldSelect;
    }>;
    createSelectCustomFieldOption(selectFieldId: number, acceptVersion: '1.0.0', updateSelectCustomFieldOptionRequest: UpdateSelectCustomFieldOptionRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateSelectCustomFieldOption200Response;
    }>;
    createSkill(acceptVersion: '1.0.0', updateSelectCustomFieldOptionRequest: UpdateSelectCustomFieldOptionRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Skill;
    }>;
    createTeam(acceptVersion: '1.0.0', updateSelectCustomFieldOptionRequest: UpdateSelectCustomFieldOptionRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Team;
    }>;
    createTextCustomField(acceptVersion: '1.0.0', createCheckboxCustomFieldRequest: CreateCheckboxCustomFieldRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CustomFieldText;
    }>;
    createWorkstream(acceptVersion: '1.0.0', updateSelectCustomFieldOptionRequest: UpdateSelectCustomFieldOptionRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Workstream;
    }>;
    deleteActual(actualId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteAssignment(assignmentId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Assignment;
    }>;
    deleteCheckboxCustomField(checkboxFieldId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteDateCustomField(dateFieldId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteHolidayTimeOff(timeOffId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteInvitation(invitationId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteLeaveTimeOff(timeOffId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteLeaveTimeOffsBulk(acceptVersion: '1.0.0', deleteLeaveTimeOffsBulkRequest: DeleteLeaveTimeOffsBulkRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deletePeopleTag(peopleTagId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deletePerson(force: boolean, personId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deletePersonContract(personId: number, contractId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteProject(projectId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteProjectBudgetRole(projectId: number, roleId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteProjectMilestone(projectId: number, milestoneId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteProjectPhase(projectId: number, phaseId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProjectPhase;
    }>;
    deleteRateCard(rateCardId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteRosteredTimeOff(timeOffId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteSelectCustomField(selectFieldId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteSelectCustomFieldOption(selectFieldId: number, selectOptionId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteSkill(skillId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteTeam(teamId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteTextCustomField(textFieldId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteUser(userId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    deleteWorkstream(workstreamId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getClient(clientId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Client;
    }>;
    getCurrentUser(acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetCurrentUser200Response;
    }>;
    getHolidayGroup(holidayGroupId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HolidayGroup;
    }>;
    getLeaveTimeOff(timeOffId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TimeOff;
    }>;
    getPeopleTag(peopleTagId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListPeopleTags200ResponseValuesInner;
    }>;
    getPerson(personId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Person;
    }>;
    getPersonCurrentContract(personId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Contract;
    }>;
    getPersonCurrentTeam(personId: number, acceptVersion: '1.0.0', cursor?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetPersonCurrentTeam200Response;
    }>;
    getPersonHoursReport(personId: number, acceptVersion: '1.0.0', cursor?: string, limit?: number, startDate?: string, endDate?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetPersonHoursReport200Response;
    }>;
    getProject(projectId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Project;
    }>;
    getProjectBudgetRole(projectId: number, roleId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProjectBudgetRole;
    }>;
    getProjectHoursReport(projectId: number, acceptVersion: '1.0.0', cursor?: string, limit?: number, startDate?: string, endDate?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetProjectHoursReport200Response;
    }>;
    getProjectPersonRequest(projectId: number, personRequestId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PersonRequest;
    }>;
    getProjectPhase(projectId: number, phaseId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProjectPhase;
    }>;
    getProjectTag(projectTagId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProjectTag;
    }>;
    getProjectTimesheetLock(projectId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetProjectTimesheetLock200Response;
    }>;
    getProjectTotalsReport(projectId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProjectAggregate;
    }>;
    getProjectWorkstream(projectId: number, workstreamId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProjectWorkstream;
    }>;
    getRateCard(rateCardId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RateCard;
    }>;
    getRole(roleId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Role;
    }>;
    getSkill(skillId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Skill;
    }>;
    getTeam(teamId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Team;
    }>;
    getUser(userId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: User;
    }>;
    getWorkstream(workstreamId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Workstream;
    }>;
    listActuals(acceptVersion: '1.0.0', cursor?: string, limit?: number, sortBy?: 'createdAt' | 'updatedAt' | 'id', order?: 'asc' | 'desc', minDate?: string, maxDate?: string, projectId?: number, roleId?: number, personId?: number, workstreamId?: number, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListActuals200Response;
    }>;
    listAssignments(acceptVersion: '1.0.0', cursor?: string, limit?: number, sortBy?: 'createdAt' | 'updatedAt' | 'id', order?: 'asc' | 'desc', personId?: number, roleId?: number, projectId?: number, startDate?: string, endDate?: string, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListAssignments200Response;
    }>;
    listBudgetRoles(acceptVersion: '1.0.0', cursor?: string, limit?: number, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListBudgetRoles200Response;
    }>;
    listCheckboxCustomFields(acceptVersion: '1.0.0', cursor?: string, limit?: number, model?: 'PERSON' | 'PROJECT', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListCheckboxCustomFields200Response;
    }>;
    listClientProjects(includeArchived: boolean, clientId: number, acceptVersion: '1.0.0', cursor?: string, limit?: number, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListClientProjects200Response;
    }>;
    listClients(sortBy: 'id' | 'createdAt' | 'updatedAt', acceptVersion: '1.0.0', name?: string, order?: SortOrder, cursor?: string, limit?: number, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListClients200Response;
    }>;
    listContracts(sortBy: 'id' | 'createdAt' | 'updatedAt', acceptVersion: '1.0.0', cursor?: string, limit?: number, modifiedAfter?: ModifiedAfter, order?: SortOrder, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListContracts200Response;
    }>;
    listDateCustomFields(acceptVersion: '1.0.0', cursor?: string, limit?: number, model?: 'PERSON' | 'PROJECT', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListDateCustomFields200Response;
    }>;
    listEvents(acceptVersion: '1.0.0', cursor?: string, limit?: number, eventType?: Array<'project_deleted' | 'person_deleted' | 'contract_deleted' | 'actual_deleted' | 'time_off_deleted' | 'assignment_deleted'>, occurredAfter?: Date, orderBy?: 'asc' | 'desc', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListEvents200Response;
    }>;
    listHolidayGroupHolidays(holidayGroupId: number, acceptVersion: '1.0.0', cursor?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListHolidayGroupHolidays200Response;
    }>;
    listHolidayGroups(acceptVersion: '1.0.0', cursor?: string, limit?: number, sortBy?: 'createdAt' | 'updatedAt' | 'id', order?: 'asc' | 'desc', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListHolidayGroups200Response;
    }>;
    listHolidayTimeOffs(sortBy: 'id' | 'createdAt' | 'updatedAt', acceptVersion: '1.0.0', cursor?: string, limit?: number, order?: SortOrder, personId?: number, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListPersonHolidays200Response;
    }>;
    listInvitations(acceptVersion: '1.0.0', cursor?: string, limit?: number, sortBy?: 'createdAt' | 'sentAt' | 'id', order?: 'asc' | 'desc', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListInvitations200Response;
    }>;
    listLeaveTimeOffs(sortBy: 'id' | 'createdAt' | 'updatedAt', acceptVersion: '1.0.0', cursor?: string, limit?: number, order?: SortOrder, personId?: number, startDate?: string, endDate?: string, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListPersonLeave200Response;
    }>;
    listMilestones(acceptVersion: '1.0.0', cursor?: string, limit?: number, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListMilestones200Response;
    }>;
    listNotesForProject(projectId: number, acceptVersion: '1.0.0', cursor?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListProjectNotes200Response;
    }>;
    listOtherExpenses(acceptVersion: '1.0.0', cursor?: string, limit?: number, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListOtherExpenses200Response;
    }>;
    listPeople(acceptVersion: '1.0.0', cursor?: string, limit?: number, sortBy?: 'createdAt' | 'updatedAt' | 'id', order?: 'asc' | 'desc', includePlaceholders?: boolean, email?: string, firstName?: string, lastName?: string, modifiedAfter?: ModifiedAfter, externalId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListPeople200Response;
    }>;
    listPeopleCurrentContracts(acceptVersion: '1.0.0', cursor?: string, limit?: number, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListContracts200Response;
    }>;
    listPeopleCustomFields(acceptVersion: '1.0.0', cursor?: string, limit?: number, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListPeopleCustomFields200Response;
    }>;
    listPeopleNotes(acceptVersion: '1.0.0', cursor?: string, limit?: number, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListPeopleNotes200Response;
    }>;
    listPeopleSkills(acceptVersion: '1.0.0', cursor?: string, limit?: number, includePlaceholders?: boolean, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListPeopleSkills200Response;
    }>;
    listPeopleTags(acceptVersion: '1.0.0', cursor?: string, limit?: number, sortBy?: 'createdAt' | 'updatedAt' | 'id', order?: 'asc' | 'desc', modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListPeopleTags200Response;
    }>;
    listPersonActuals(personId: number, acceptVersion: '1.0.0', cursor?: string, limit?: number, projectId?: number, roleId?: number, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListActuals200Response;
    }>;
    listPersonAssignments(personId: number, acceptVersion: '1.0.0', cursor?: string, limit?: number, projectId?: number, roleId?: number, startDate?: string, endDate?: string, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListAssignments200Response;
    }>;
    listPersonContracts(personId: number, acceptVersion: '1.0.0', cursor?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListContracts200Response;
    }>;
    listPersonHolidays(personId: number, acceptVersion: '1.0.0', cursor?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListPersonHolidays200Response;
    }>;
    listPersonLeave(personId: number, acceptVersion: '1.0.0', cursor?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListPersonLeave200Response;
    }>;
    listPersonProjects(personId: number, acceptVersion: '1.0.0', cursor?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListClientProjects200Response;
    }>;
    listPersonRequests(acceptVersion: '1.0.0', cursor?: string, limit?: number, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListPersonRequests200Response;
    }>;
    listPersonRosteredTimeOffs(personId: number, acceptVersion: '1.0.0', cursor?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListPersonLeave200Response;
    }>;
    listPersonSkills(personId: number, acceptVersion: '1.0.0', cursor?: string, limit?: number, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListPersonSkills200Response;
    }>;
    listPhases(acceptVersion: '1.0.0', cursor?: string, limit?: number, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListPhases200Response;
    }>;
    listPlaceholders(acceptVersion: '1.0.0', cursor?: string, limit?: number, sortBy?: 'createdAt' | 'updatedAt' | 'id', order?: 'asc' | 'desc', modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListPlaceholders200Response;
    }>;
    listProjectActuals(projectId: number, acceptVersion: '1.0.0', cursor?: string, limit?: number, personId?: number, roleId?: number, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListActuals200Response;
    }>;
    listProjectAssignments(projectId: number, acceptVersion: '1.0.0', cursor?: string, limit?: number, personId?: number, roleId?: number, startDate?: string, endDate?: string, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListAssignments200Response;
    }>;
    listProjectBudgetRoles(projectId: number, acceptVersion: '1.0.0', cursor?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListBudgetRoles200Response;
    }>;
    listProjectCustomFields(acceptVersion: '1.0.0', cursor?: string, limit?: number, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListProjectCustomFields200Response;
    }>;
    listProjectMembers(acceptVersion: '1.0.0', cursor?: string, limit?: number, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListProjectMembers200Response;
    }>;
    listProjectMilestones(projectId: number, acceptVersion: '1.0.0', cursor?: string, limit?: number, startDate?: string, endDate?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListMilestones200Response;
    }>;
    listProjectNotes(acceptVersion: '1.0.0', cursor?: string, limit?: number, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListProjectNotes200Response;
    }>;
    listProjectOtherExpenses(projectId: number, acceptVersion: '1.0.0', cursor?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListOtherExpenses200Response;
    }>;
    listProjectPeople(includeArchived: boolean, projectId: number, acceptVersion: '1.0.0', cursor?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListPeople200Response;
    }>;
    listProjectPersonRequests(projectId: number, acceptVersion: '1.0.0', cursor?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListPersonRequests200Response;
    }>;
    listProjectPhases(projectId: number, acceptVersion: '1.0.0', cursor?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListPhases200Response;
    }>;
    listProjectRates(acceptVersion: '1.0.0', cursor?: string, limit?: number, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListProjectRates200Response;
    }>;
    listProjectRoleRates(projectId: number, acceptVersion: '1.0.0', cursor?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListProjectRates200Response;
    }>;
    listProjectTags(acceptVersion: '1.0.0', cursor?: string, limit?: number, sortBy?: 'createdAt' | 'updatedAt' | 'id', order?: 'asc' | 'desc', includeArchived?: boolean, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListProjectTags200Response;
    }>;
    listProjectTotalsReport(includeArchived: boolean, acceptVersion: '1.0.0', cursor?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListProjectTotalsReport200Response;
    }>;
    listProjectWorkstreams(acceptVersion: '1.0.0', cursor?: string, limit?: number, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListProjectWorkstreams200Response;
    }>;
    listProjectWorkstreamsForProject(includeArchived: boolean, projectId: number, acceptVersion: '1.0.0', cursor?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListProjectWorkstreamsForProject200Response;
    }>;
    listProjects(includeArchived: boolean, acceptVersion: '1.0.0', cursor?: string, limit?: number, sortBy?: 'createdAt' | 'updatedAt' | 'id', order?: 'asc' | 'desc', modifiedAfter?: ModifiedAfter, externalId?: string, name?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListClientProjects200Response;
    }>;
    listRateCards(acceptVersion: '1.0.0', cursor?: string, limit?: number, sortBy?: 'createdAt' | 'updatedAt' | 'id', order?: 'asc' | 'desc', modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListRateCards200Response;
    }>;
    listRoles(acceptVersion: '1.0.0', name?: string, cursor?: string, limit?: number, sortBy?: 'createdAt' | 'updatedAt' | 'id', order?: 'asc' | 'desc', modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListRoles200Response;
    }>;
    listRosteredTimeOffs(sortBy: 'id' | 'createdAt' | 'updatedAt', acceptVersion: '1.0.0', cursor?: string, limit?: number, order?: SortOrder, personId?: number, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListPersonLeave200Response;
    }>;
    listSelectCustomFields(acceptVersion: '1.0.0', cursor?: string, limit?: number, model?: 'PERSON' | 'PROJECT', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSelectCustomFields200Response;
    }>;
    listSkillPeople(skillId: number, acceptVersion: '1.0.0', cursor?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListPeople200Response;
    }>;
    listSkills(sortBy: 'id' | 'createdAt' | 'updatedAt', acceptVersion: '1.0.0', cursor?: string, limit?: number, order?: SortOrder, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListSkills200Response;
    }>;
    listTeamPeople(teamId: number, acceptVersion: '1.0.0', cursor?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListPeople200Response;
    }>;
    listTeams(acceptVersion: '1.0.0', cursor?: string, limit?: number, modifiedAfter?: ModifiedAfter, sortBy?: 'createdAt' | 'updatedAt' | 'id', order?: 'asc' | 'desc', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListTeams200Response;
    }>;
    listTextCustomFields(acceptVersion: '1.0.0', cursor?: string, limit?: number, model?: 'PERSON' | 'PROJECT', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListTextCustomFields200Response;
    }>;
    listUserViews(userId: number, acceptVersion: '1.0.0', cursor?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListUserViews200Response;
    }>;
    listUsers(acceptVersion: '1.0.0', cursor?: string, limit?: number, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListUsers200Response;
    }>;
    listViews(acceptVersion: '1.0.0', cursor?: string, limit?: number, modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListUserViews200Response;
    }>;
    listWorkstreams(acceptVersion: '1.0.0', cursor?: string, limit?: number, sortBy?: 'createdAt' | 'updatedAt' | 'id', order?: 'asc' | 'desc', modifiedAfter?: ModifiedAfter, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListWorkstreams200Response;
    }>;
    removePersonFromTeam(personId: number, teamId: number, acceptVersion: '1.0.0', cursor?: string, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    removePersonSkill(personId: number, skillId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    removePlaceholderFromTeam(placeholderId: number, teamId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    removePlaceholderSkill(placeholderId: number, skillId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    removeProjectTagFromProject(projectTagId: number, projectId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    removeViewFromUser(userId: number, viewId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    removeWorkstreamFromProject(projectId: number, workstreamId: number, acceptVersion: '1.0.0', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProjectWorkstream;
    }>;
    updateActualTimeEntry(acceptVersion: '1.0.0', actualTimeEntry?: ActualTimeEntry, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Actual;
    }>;
    updateCheckboxCustomField(checkboxFieldId: number, acceptVersion: '1.0.0', updateCheckboxCustomFieldRequest?: UpdateCheckboxCustomFieldRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CustomFieldCheckbox;
    }>;
    updateClient(clientId: number, acceptVersion: '1.0.0', updateClientRequest?: UpdateClientRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Client;
    }>;
    updateContract(contractId: number, acceptVersion: '1.0.0', updateContractRequest?: UpdateContractRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Contract;
    }>;
    updateDateCustomField(dateFieldId: number, acceptVersion: '1.0.0', updateDateCustomFieldRequest?: UpdateDateCustomFieldRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CustomFieldDate;
    }>;
    updatePeopleTag(peopleTagId: number, acceptVersion: '1.0.0', updatePeopleTagRequest: UpdatePeopleTagRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListPeopleTags200ResponseValuesInner;
    }>;
    updatePerson(personId: number, acceptVersion: '1.0.0', updatePersonRequest?: UpdatePersonRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Person;
    }>;
    updatePersonCheckboxCustomField(personId: number, acceptVersion: '1.0.0', updatePersonCheckboxCustomFieldRequest: UpdatePersonCheckboxCustomFieldRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdatePersonCheckboxCustomFieldRequest;
    }>;
    updatePersonDateCustomField(personId: number, acceptVersion: '1.0.0', updatePersonDateCustomFieldRequest: UpdatePersonDateCustomFieldRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdatePersonDateCustomFieldRequest;
    }>;
    updatePersonSelectCustomField(personId: number, acceptVersion: '1.0.0', updatePersonSelectCustomFieldRequest: UpdatePersonSelectCustomFieldRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdatePersonSelectCustomFieldRequest;
    }>;
    updatePersonSkill(personId: number, skillId: number, acceptVersion: '1.0.0', updatePersonSkillRequest: UpdatePersonSkillRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Competency;
    }>;
    updatePersonTextCustomField(personId: number, acceptVersion: '1.0.0', updatePersonTextCustomFieldRequest: UpdatePersonTextCustomFieldRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdatePersonTextCustomFieldRequest;
    }>;
    updateProject(projectId: number, acceptVersion: '1.0.0', updateProjectRequest?: UpdateProjectRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Project;
    }>;
    updateProjectBudgetRole(projectId: number, roleId: number, acceptVersion: '1.0.0', updateProjectBudgetRoleRequest?: UpdateProjectBudgetRoleRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProjectBudgetRole;
    }>;
    updateProjectCheckboxCustomField(projectId: number, acceptVersion: '1.0.0', updatePersonCheckboxCustomFieldRequest: UpdatePersonCheckboxCustomFieldRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdatePersonCheckboxCustomFieldRequest;
    }>;
    updateProjectDateCustomField(projectId: number, acceptVersion: '1.0.0', updatePersonDateCustomFieldRequest: UpdatePersonDateCustomFieldRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdatePersonDateCustomFieldRequest;
    }>;
    updateProjectMilestone(projectId: number, milestoneId: number, acceptVersion: '1.0.0', updateProjectMilestoneRequest?: UpdateProjectMilestoneRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Milestone;
    }>;
    updateProjectOtherExpense(projectId: number, otherExpenseId: number, acceptVersion: '1.0.0', projectOtherExpense1?: ProjectOtherExpense1, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProjectOtherExpense;
    }>;
    updateProjectPersonRequest(projectId: number, personRequestId: number, acceptVersion: '1.0.0', updateProjectPersonRequestRequest: UpdateProjectPersonRequestRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateProjectPersonRequest200Response;
    }>;
    updateProjectPhase(projectId: number, phaseId: number, acceptVersion: '1.0.0', updateProjectPhaseRequest?: UpdateProjectPhaseRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProjectPhase;
    }>;
    updateProjectRoleRate(projectId: number, projectRateId: number, acceptVersion: '1.0.0', updateProjectRoleRateRequest: UpdateProjectRoleRateRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProjectRate;
    }>;
    updateProjectSelectCustomField(projectId: number, acceptVersion: '1.0.0', updatePersonSelectCustomFieldRequest: UpdatePersonSelectCustomFieldRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdatePersonSelectCustomFieldRequest;
    }>;
    updateProjectTag(projectTagId: number, acceptVersion: '1.0.0', updatePeopleTagRequest: UpdatePeopleTagRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProjectTag;
    }>;
    updateProjectTextCustomField(projectId: number, acceptVersion: '1.0.0', updatePersonTextCustomFieldRequest: UpdatePersonTextCustomFieldRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdatePersonTextCustomFieldRequest;
    }>;
    updateProjectTimesheetLock(projectId: number, acceptVersion: '1.0.0', updateProjectTimesheetLockRequest?: UpdateProjectTimesheetLockRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetProjectTimesheetLock200Response;
    }>;
    updateRole(roleId: number, acceptVersion: '1.0.0', updateRoleRequest?: UpdateRoleRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Role;
    }>;
    updateSelectCustomField(selectFieldId: number, acceptVersion: '1.0.0', updateCheckboxCustomFieldRequest?: UpdateCheckboxCustomFieldRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CustomFieldSelect;
    }>;
    updateSelectCustomFieldOption(selectFieldId: number, selectOptionId: number, acceptVersion: '1.0.0', updateSelectCustomFieldOptionRequest: UpdateSelectCustomFieldOptionRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateSelectCustomFieldOption200Response;
    }>;
    updateSkill(skillId: number, acceptVersion: '1.0.0', updateSelectCustomFieldOptionRequest: UpdateSelectCustomFieldOptionRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Skill;
    }>;
    updateTeam(teamId: number, acceptVersion: '1.0.0', updateSelectCustomFieldOptionRequest: UpdateSelectCustomFieldOptionRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Team;
    }>;
    updateTextCustomField(textFieldId: number, acceptVersion: '1.0.0', updateCheckboxCustomFieldRequest?: UpdateCheckboxCustomFieldRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CustomFieldText;
    }>;
    updateWorkstream(workstreamId: number, acceptVersion: '1.0.0', updateWorkstreamRequest?: UpdateWorkstreamRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Workstream;
    }>;
}
