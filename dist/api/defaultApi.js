"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultApi = exports.DefaultApiApiKeys = void 0;
var request_1 = __importDefault(require("request"));
var models_1 = require("../model/models");
var models_2 = require("../model/models");
var apis_1 = require("./apis");
var defaultBasePath = 'https://api.runn.io';
var DefaultApiApiKeys;
(function (DefaultApiApiKeys) {
})(DefaultApiApiKeys || (exports.DefaultApiApiKeys = DefaultApiApiKeys = {}));
var DefaultApi = (function () {
    function DefaultApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this._defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new models_1.VoidAuth(),
            'bearerAuth': new models_2.HttpBearerAuth(),
        };
        this.interceptors = [];
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(DefaultApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultApi.prototype, "defaultHeaders", {
        get: function () {
            return this._defaultHeaders;
        },
        set: function (defaultHeaders) {
            this._defaultHeaders = defaultHeaders;
        },
        enumerable: false,
        configurable: true
    });
    DefaultApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    DefaultApi.prototype.setApiKey = function (key, value) {
        this.authentications[DefaultApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(DefaultApi.prototype, "accessToken", {
        set: function (accessToken) {
            this.authentications.bearerAuth.accessToken = accessToken;
        },
        enumerable: false,
        configurable: true
    });
    DefaultApi.prototype.addInterceptor = function (interceptor) {
        this.interceptors.push(interceptor);
    };
    DefaultApi.prototype.addPeopleToSkill = function (skillId_1, acceptVersion_1, addPeopleToSkillRequest_1) {
        return __awaiter(this, arguments, void 0, function (skillId, acceptVersion, addPeopleToSkillRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_1, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/skills/{skillId}/people/'
                    .replace('{' + 'skillId' + '}', encodeURIComponent(String(skillId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (skillId === null || skillId === undefined) {
                    throw new Error('Required parameter skillId was null or undefined when calling addPeopleToSkill.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling addPeopleToSkill.');
                }
                if (addPeopleToSkillRequest === null || addPeopleToSkillRequest === undefined) {
                    throw new Error('Required parameter addPeopleToSkillRequest was null or undefined when calling addPeopleToSkill.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(addPeopleToSkillRequest, "AddPeopleToSkillRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_1 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_1(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "AddPeopleToSkill201Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.addPersonSkill = function (personId_1, acceptVersion_1, addPersonSkillRequest_1) {
        return __awaiter(this, arguments, void 0, function (personId, acceptVersion, addPersonSkillRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_2, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/{personId}/skills/'
                    .replace('{' + 'personId' + '}', encodeURIComponent(String(personId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (personId === null || personId === undefined) {
                    throw new Error('Required parameter personId was null or undefined when calling addPersonSkill.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling addPersonSkill.');
                }
                if (addPersonSkillRequest === null || addPersonSkillRequest === undefined) {
                    throw new Error('Required parameter addPersonSkillRequest was null or undefined when calling addPersonSkill.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(addPersonSkillRequest, "AddPersonSkillRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_2 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_2(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Competency");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.addPersonToProject = function (personId_1, acceptVersion_1, addPersonToProjectRequest_1) {
        return __awaiter(this, arguments, void 0, function (personId, acceptVersion, addPersonToProjectRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_3, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/{personId}/projects/'
                    .replace('{' + 'personId' + '}', encodeURIComponent(String(personId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (personId === null || personId === undefined) {
                    throw new Error('Required parameter personId was null or undefined when calling addPersonToProject.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling addPersonToProject.');
                }
                if (addPersonToProjectRequest === null || addPersonToProjectRequest === undefined) {
                    throw new Error('Required parameter addPersonToProjectRequest was null or undefined when calling addPersonToProject.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(addPersonToProjectRequest, "AddPersonToProjectRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_3 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_3(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.addPersonToTeam = function (personId_1, acceptVersion_1, addPersonToTeamRequest_1) {
        return __awaiter(this, arguments, void 0, function (personId, acceptVersion, addPersonToTeamRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_4, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/{personId}/teams/'
                    .replace('{' + 'personId' + '}', encodeURIComponent(String(personId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (personId === null || personId === undefined) {
                    throw new Error('Required parameter personId was null or undefined when calling addPersonToTeam.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling addPersonToTeam.');
                }
                if (addPersonToTeamRequest === null || addPersonToTeamRequest === undefined) {
                    throw new Error('Required parameter addPersonToTeamRequest was null or undefined when calling addPersonToTeam.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(addPersonToTeamRequest, "AddPersonToTeamRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_4 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_4(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.addPlaceholderSkill = function (placeholderId_1, acceptVersion_1, addPersonSkillRequest_1) {
        return __awaiter(this, arguments, void 0, function (placeholderId, acceptVersion, addPersonSkillRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_5, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/placeholders/{placeholderId}/skills/'
                    .replace('{' + 'placeholderId' + '}', encodeURIComponent(String(placeholderId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (placeholderId === null || placeholderId === undefined) {
                    throw new Error('Required parameter placeholderId was null or undefined when calling addPlaceholderSkill.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling addPlaceholderSkill.');
                }
                if (addPersonSkillRequest === null || addPersonSkillRequest === undefined) {
                    throw new Error('Required parameter addPersonSkillRequest was null or undefined when calling addPlaceholderSkill.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(addPersonSkillRequest, "AddPersonSkillRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_5 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_5(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Competency");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.addPlaceholderToTeam = function (placeholderId_1, acceptVersion_1, addPersonToTeamRequest_1) {
        return __awaiter(this, arguments, void 0, function (placeholderId, acceptVersion, addPersonToTeamRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_6, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/placeholders/{placeholderId}/teams/'
                    .replace('{' + 'placeholderId' + '}', encodeURIComponent(String(placeholderId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (placeholderId === null || placeholderId === undefined) {
                    throw new Error('Required parameter placeholderId was null or undefined when calling addPlaceholderToTeam.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling addPlaceholderToTeam.');
                }
                if (addPersonToTeamRequest === null || addPersonToTeamRequest === undefined) {
                    throw new Error('Required parameter addPersonToTeamRequest was null or undefined when calling addPlaceholderToTeam.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(addPersonToTeamRequest, "AddPersonToTeamRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_6 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_6(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.addProjectTagToProject = function (projectTagId_1, projectId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (projectTagId, projectId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_7, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/project-tags/{projectTagId}/project/{projectId}'
                    .replace('{' + 'projectTagId' + '}', encodeURIComponent(String(projectTagId)))
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectTagId === null || projectTagId === undefined) {
                    throw new Error('Required parameter projectTagId was null or undefined when calling addProjectTagToProject.');
                }
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling addProjectTagToProject.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling addProjectTagToProject.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_7 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_7(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ProjectTag");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.addWorkstreamToProject = function (projectId_1, workstreamId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (projectId, workstreamId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_8, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/project-workstreams/{workstreamId}/'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)))
                    .replace('{' + 'workstreamId' + '}', encodeURIComponent(String(workstreamId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling addWorkstreamToProject.');
                }
                if (workstreamId === null || workstreamId === undefined) {
                    throw new Error('Required parameter workstreamId was null or undefined when calling addWorkstreamToProject.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling addWorkstreamToProject.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_8 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_8(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ProjectWorkstream");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.allocateViewToUser = function (userId_1, viewId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (userId, viewId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_9, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/users/{userId}/views/{viewId}'
                    .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
                    .replace('{' + 'viewId' + '}', encodeURIComponent(String(viewId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (userId === null || userId === undefined) {
                    throw new Error('Required parameter userId was null or undefined when calling allocateViewToUser.');
                }
                if (viewId === null || viewId === undefined) {
                    throw new Error('Required parameter viewId was null or undefined when calling allocateViewToUser.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling allocateViewToUser.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_9 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_9(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.convertLegacyId = function (model_1, legacyId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (model, legacyId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_10, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/legacy-id/{model}/{legacyId}'
                    .replace('{' + 'model' + '}', encodeURIComponent(String(model)))
                    .replace('{' + 'legacyId' + '}', encodeURIComponent(String(legacyId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (model === null || model === undefined) {
                    throw new Error('Required parameter model was null or undefined when calling convertLegacyId.');
                }
                if (legacyId === null || legacyId === undefined) {
                    throw new Error('Required parameter legacyId was null or undefined when calling convertLegacyId.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling convertLegacyId.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_10 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_10(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "number");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createActual = function (acceptVersion_1, actualInput_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, actualInput, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_11, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/actuals/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createActual.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(actualInput, "ActualInput")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_11 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_11(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Actual");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createActualsBulk = function (acceptVersion_1, createActualsBulkRequest_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, createActualsBulkRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_12, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/actuals/bulk/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createActualsBulk.');
                }
                if (createActualsBulkRequest === null || createActualsBulkRequest === undefined) {
                    throw new Error('Required parameter createActualsBulkRequest was null or undefined when calling createActualsBulk.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(createActualsBulkRequest, "CreateActualsBulkRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_12 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_12(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Array<Actual>");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createAssignment = function (acceptVersion_1, createAssignmentRequest_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, createAssignmentRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_13, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/assignments/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createAssignment.');
                }
                if (createAssignmentRequest === null || createAssignmentRequest === undefined) {
                    throw new Error('Required parameter createAssignmentRequest was null or undefined when calling createAssignment.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(createAssignmentRequest, "CreateAssignmentRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_13 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_13(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Array<Assignment>");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createCheckboxCustomField = function (acceptVersion_1, createCheckboxCustomFieldRequest_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, createCheckboxCustomFieldRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_14, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/custom-fields/checkbox/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createCheckboxCustomField.');
                }
                if (createCheckboxCustomFieldRequest === null || createCheckboxCustomFieldRequest === undefined) {
                    throw new Error('Required parameter createCheckboxCustomFieldRequest was null or undefined when calling createCheckboxCustomField.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(createCheckboxCustomFieldRequest, "CreateCheckboxCustomFieldRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_14 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_14(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "CustomFieldCheckbox");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createClient = function (acceptVersion_1, clientInput_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, clientInput, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_15, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/clients/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createClient.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(clientInput, "ClientInput")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_15 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_15(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Client");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createClientsBulk = function (acceptVersion_1, createClientsBulkRequest_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, createClientsBulkRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_16, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/clients/bulk/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createClientsBulk.');
                }
                if (createClientsBulkRequest === null || createClientsBulkRequest === undefined) {
                    throw new Error('Required parameter createClientsBulkRequest was null or undefined when calling createClientsBulk.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(createClientsBulkRequest, "CreateClientsBulkRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_16 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_16(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Array<Client>");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createDateCustomField = function (acceptVersion_1, createDateCustomFieldRequest_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, createDateCustomFieldRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_17, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/custom-fields/date/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createDateCustomField.');
                }
                if (createDateCustomFieldRequest === null || createDateCustomFieldRequest === undefined) {
                    throw new Error('Required parameter createDateCustomFieldRequest was null or undefined when calling createDateCustomField.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(createDateCustomFieldRequest, "CreateDateCustomFieldRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_17 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_17(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "CustomFieldDate");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createHolidayTimeOff = function (acceptVersion_1, timeOffHolidayInput_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, timeOffHolidayInput, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_18, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/time-offs/holidays/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createHolidayTimeOff.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(timeOffHolidayInput, "TimeOffHolidayInput")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_18 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_18(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "TimeOff");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createInvitation = function (acceptVersion_1, createInvitationRequest_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, createInvitationRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_19, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/invitations/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createInvitation.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(createInvitationRequest, "CreateInvitationRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_19 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_19(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Invitation");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createLeaveTimeOff = function (acceptVersion_1, timeOffLeaveInput_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, timeOffLeaveInput, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_20, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/time-offs/leave/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createLeaveTimeOff.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(timeOffLeaveInput, "TimeOffLeaveInput")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_20 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_20(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "TimeOff");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createLeaveTimeOffsBulk = function (acceptVersion_1, createLeaveTimeOffsBulkRequest_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, createLeaveTimeOffsBulkRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_21, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/time-offs/leave/bulk/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createLeaveTimeOffsBulk.');
                }
                if (createLeaveTimeOffsBulkRequest === null || createLeaveTimeOffsBulkRequest === undefined) {
                    throw new Error('Required parameter createLeaveTimeOffsBulkRequest was null or undefined when calling createLeaveTimeOffsBulk.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(createLeaveTimeOffsBulkRequest, "CreateLeaveTimeOffsBulkRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_21 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_21(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Array<TimeOff>");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createNoteForProject = function (projectId_1, acceptVersion_1, createNoteForProjectRequest_1) {
        return __awaiter(this, arguments, void 0, function (projectId, acceptVersion, createNoteForProjectRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_22, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/notes/'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling createNoteForProject.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createNoteForProject.');
                }
                if (createNoteForProjectRequest === null || createNoteForProjectRequest === undefined) {
                    throw new Error('Required parameter createNoteForProjectRequest was null or undefined when calling createNoteForProject.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(createNoteForProjectRequest, "CreateNoteForProjectRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_22 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_22(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ProjectNote");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createPeopleTag = function (acceptVersion_1, updateSelectCustomFieldOptionRequest_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, updateSelectCustomFieldOptionRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_23, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people-tags/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createPeopleTag.');
                }
                if (updateSelectCustomFieldOptionRequest === null || updateSelectCustomFieldOptionRequest === undefined) {
                    throw new Error('Required parameter updateSelectCustomFieldOptionRequest was null or undefined when calling createPeopleTag.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updateSelectCustomFieldOptionRequest, "UpdateSelectCustomFieldOptionRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_23 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_23(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListPeopleTags200ResponseValuesInner");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createPerson = function (acceptVersion_1, createPersonRequest_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, createPersonRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_24, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createPerson.');
                }
                if (createPersonRequest === null || createPersonRequest === undefined) {
                    throw new Error('Required parameter createPersonRequest was null or undefined when calling createPerson.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(createPersonRequest, "CreatePersonRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_24 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_24(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Person");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createPersonContract = function (personId_1, acceptVersion_1, contractInput_1) {
        return __awaiter(this, arguments, void 0, function (personId, acceptVersion, contractInput, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_25, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/{personId}/contracts/'
                    .replace('{' + 'personId' + '}', encodeURIComponent(String(personId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (personId === null || personId === undefined) {
                    throw new Error('Required parameter personId was null or undefined when calling createPersonContract.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createPersonContract.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(contractInput, "ContractInput")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_25 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_25(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Contract");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createPlaceholder = function (acceptVersion_1, createPlaceholderRequest_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, createPlaceholderRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_26, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/placeholders/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createPlaceholder.');
                }
                if (createPlaceholderRequest === null || createPlaceholderRequest === undefined) {
                    throw new Error('Required parameter createPlaceholderRequest was null or undefined when calling createPlaceholder.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(createPlaceholderRequest, "CreatePlaceholderRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_26 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_26(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "PlaceholderInput");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createProject = function (acceptVersion_1, createProjectRequest_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, createProjectRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_27, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createProject.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(createProjectRequest, "CreateProjectRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_27 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_27(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Project");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createProjectBudgetRole = function (projectId_1, acceptVersion_1, createProjectBudgetRoleRequest_1) {
        return __awaiter(this, arguments, void 0, function (projectId, acceptVersion, createProjectBudgetRoleRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_28, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/budget-roles/'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling createProjectBudgetRole.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createProjectBudgetRole.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(createProjectBudgetRoleRequest, "CreateProjectBudgetRoleRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_28 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_28(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createProjectMilestone = function (projectId_1, acceptVersion_1, createProjectMilestoneRequest_1) {
        return __awaiter(this, arguments, void 0, function (projectId, acceptVersion, createProjectMilestoneRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_29, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/milestones/'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling createProjectMilestone.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createProjectMilestone.');
                }
                if (createProjectMilestoneRequest === null || createProjectMilestoneRequest === undefined) {
                    throw new Error('Required parameter createProjectMilestoneRequest was null or undefined when calling createProjectMilestone.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(createProjectMilestoneRequest, "CreateProjectMilestoneRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_29 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_29(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Milestone");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createProjectOtherExpense = function (projectId_1, acceptVersion_1, projectOtherExpense_1) {
        return __awaiter(this, arguments, void 0, function (projectId, acceptVersion, projectOtherExpense, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_30, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/other-expenses/'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling createProjectOtherExpense.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createProjectOtherExpense.');
                }
                if (projectOtherExpense === null || projectOtherExpense === undefined) {
                    throw new Error('Required parameter projectOtherExpense was null or undefined when calling createProjectOtherExpense.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(projectOtherExpense, "ProjectOtherExpense")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_30 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_30(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ProjectOtherExpense");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createProjectPersonRequest = function (projectId_1, acceptVersion_1, createProjectPersonRequestRequest_1) {
        return __awaiter(this, arguments, void 0, function (projectId, acceptVersion, createProjectPersonRequestRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_31, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/person-requests/'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling createProjectPersonRequest.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createProjectPersonRequest.');
                }
                if (createProjectPersonRequestRequest === null || createProjectPersonRequestRequest === undefined) {
                    throw new Error('Required parameter createProjectPersonRequestRequest was null or undefined when calling createProjectPersonRequest.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(createProjectPersonRequestRequest, "CreateProjectPersonRequestRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_31 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_31(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "PersonRequest");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createProjectPhase = function (projectId_1, acceptVersion_1, createProjectPhaseRequest_1) {
        return __awaiter(this, arguments, void 0, function (projectId, acceptVersion, createProjectPhaseRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_32, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/phases/'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling createProjectPhase.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createProjectPhase.');
                }
                if (createProjectPhaseRequest === null || createProjectPhaseRequest === undefined) {
                    throw new Error('Required parameter createProjectPhaseRequest was null or undefined when calling createProjectPhase.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(createProjectPhaseRequest, "CreateProjectPhaseRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_32 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_32(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ProjectPhase");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createProjectTag = function (acceptVersion_1, updateSelectCustomFieldOptionRequest_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, updateSelectCustomFieldOptionRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_33, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/project-tags/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createProjectTag.');
                }
                if (updateSelectCustomFieldOptionRequest === null || updateSelectCustomFieldOptionRequest === undefined) {
                    throw new Error('Required parameter updateSelectCustomFieldOptionRequest was null or undefined when calling createProjectTag.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updateSelectCustomFieldOptionRequest, "UpdateSelectCustomFieldOptionRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_33 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_33(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ProjectTag");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createRateCard = function (acceptVersion_1, createRateCardRequest_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, createRateCardRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_34, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/rate-cards/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createRateCard.');
                }
                if (createRateCardRequest === null || createRateCardRequest === undefined) {
                    throw new Error('Required parameter createRateCardRequest was null or undefined when calling createRateCard.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(createRateCardRequest, "CreateRateCardRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_34 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_34(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "RateCard");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createRole = function (acceptVersion_1, createRoleRequest_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, createRoleRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_35, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/roles/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createRole.');
                }
                if (createRoleRequest === null || createRoleRequest === undefined) {
                    throw new Error('Required parameter createRoleRequest was null or undefined when calling createRole.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(createRoleRequest, "CreateRoleRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_35 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_35(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Role");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createSelectCustomField = function (acceptVersion_1, createSelectCustomFieldRequest_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, createSelectCustomFieldRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_36, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/custom-fields/select/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createSelectCustomField.');
                }
                if (createSelectCustomFieldRequest === null || createSelectCustomFieldRequest === undefined) {
                    throw new Error('Required parameter createSelectCustomFieldRequest was null or undefined when calling createSelectCustomField.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(createSelectCustomFieldRequest, "CreateSelectCustomFieldRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_36 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_36(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "CustomFieldSelect");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createSelectCustomFieldOption = function (selectFieldId_1, acceptVersion_1, updateSelectCustomFieldOptionRequest_1) {
        return __awaiter(this, arguments, void 0, function (selectFieldId, acceptVersion, updateSelectCustomFieldOptionRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_37, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/custom-fields/select/{selectFieldId}/options'
                    .replace('{' + 'selectFieldId' + '}', encodeURIComponent(String(selectFieldId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (selectFieldId === null || selectFieldId === undefined) {
                    throw new Error('Required parameter selectFieldId was null or undefined when calling createSelectCustomFieldOption.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createSelectCustomFieldOption.');
                }
                if (updateSelectCustomFieldOptionRequest === null || updateSelectCustomFieldOptionRequest === undefined) {
                    throw new Error('Required parameter updateSelectCustomFieldOptionRequest was null or undefined when calling createSelectCustomFieldOption.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updateSelectCustomFieldOptionRequest, "UpdateSelectCustomFieldOptionRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_37 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_37(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "UpdateSelectCustomFieldOption200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createSkill = function (acceptVersion_1, updateSelectCustomFieldOptionRequest_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, updateSelectCustomFieldOptionRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_38, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/skills/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createSkill.');
                }
                if (updateSelectCustomFieldOptionRequest === null || updateSelectCustomFieldOptionRequest === undefined) {
                    throw new Error('Required parameter updateSelectCustomFieldOptionRequest was null or undefined when calling createSkill.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updateSelectCustomFieldOptionRequest, "UpdateSelectCustomFieldOptionRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_38 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_38(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Skill");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createTeam = function (acceptVersion_1, updateSelectCustomFieldOptionRequest_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, updateSelectCustomFieldOptionRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_39, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/teams/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createTeam.');
                }
                if (updateSelectCustomFieldOptionRequest === null || updateSelectCustomFieldOptionRequest === undefined) {
                    throw new Error('Required parameter updateSelectCustomFieldOptionRequest was null or undefined when calling createTeam.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updateSelectCustomFieldOptionRequest, "UpdateSelectCustomFieldOptionRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_39 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_39(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Team");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createTextCustomField = function (acceptVersion_1, createCheckboxCustomFieldRequest_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, createCheckboxCustomFieldRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_40, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/custom-fields/text/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createTextCustomField.');
                }
                if (createCheckboxCustomFieldRequest === null || createCheckboxCustomFieldRequest === undefined) {
                    throw new Error('Required parameter createCheckboxCustomFieldRequest was null or undefined when calling createTextCustomField.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(createCheckboxCustomFieldRequest, "CreateCheckboxCustomFieldRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_40 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_40(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "CustomFieldText");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.createWorkstream = function (acceptVersion_1, updateSelectCustomFieldOptionRequest_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, updateSelectCustomFieldOptionRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_41, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/workstreams/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling createWorkstream.');
                }
                if (updateSelectCustomFieldOptionRequest === null || updateSelectCustomFieldOptionRequest === undefined) {
                    throw new Error('Required parameter updateSelectCustomFieldOptionRequest was null or undefined when calling createWorkstream.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updateSelectCustomFieldOptionRequest, "UpdateSelectCustomFieldOptionRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_41 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_41(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Workstream");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.deleteActual = function (actualId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (actualId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_42, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/actuals/{actualId}/'
                    .replace('{' + 'actualId' + '}', encodeURIComponent(String(actualId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (actualId === null || actualId === undefined) {
                    throw new Error('Required parameter actualId was null or undefined when calling deleteActual.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling deleteActual.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_42 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_42(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.deleteAssignment = function (assignmentId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (assignmentId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_43, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/assignments/{assignmentId}/'
                    .replace('{' + 'assignmentId' + '}', encodeURIComponent(String(assignmentId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (assignmentId === null || assignmentId === undefined) {
                    throw new Error('Required parameter assignmentId was null or undefined when calling deleteAssignment.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling deleteAssignment.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_43 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_43(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Assignment");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.deleteCheckboxCustomField = function (checkboxFieldId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (checkboxFieldId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_44, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/custom-fields/checkbox/{checkboxFieldId}'
                    .replace('{' + 'checkboxFieldId' + '}', encodeURIComponent(String(checkboxFieldId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (checkboxFieldId === null || checkboxFieldId === undefined) {
                    throw new Error('Required parameter checkboxFieldId was null or undefined when calling deleteCheckboxCustomField.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling deleteCheckboxCustomField.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_44 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_44(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.deleteDateCustomField = function (dateFieldId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (dateFieldId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_45, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/custom-fields/date/{dateFieldId}'
                    .replace('{' + 'dateFieldId' + '}', encodeURIComponent(String(dateFieldId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (dateFieldId === null || dateFieldId === undefined) {
                    throw new Error('Required parameter dateFieldId was null or undefined when calling deleteDateCustomField.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling deleteDateCustomField.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_45 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_45(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.deleteHolidayTimeOff = function (timeOffId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (timeOffId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_46, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/time-offs/holidays/{timeOffId}'
                    .replace('{' + 'timeOffId' + '}', encodeURIComponent(String(timeOffId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (timeOffId === null || timeOffId === undefined) {
                    throw new Error('Required parameter timeOffId was null or undefined when calling deleteHolidayTimeOff.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling deleteHolidayTimeOff.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_46 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_46(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.deleteInvitation = function (invitationId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (invitationId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_47, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/invitations/{invitationId}'
                    .replace('{' + 'invitationId' + '}', encodeURIComponent(String(invitationId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (invitationId === null || invitationId === undefined) {
                    throw new Error('Required parameter invitationId was null or undefined when calling deleteInvitation.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling deleteInvitation.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_47 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_47(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.deleteLeaveTimeOff = function (timeOffId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (timeOffId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_48, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/time-offs/leave/{timeOffId}/'
                    .replace('{' + 'timeOffId' + '}', encodeURIComponent(String(timeOffId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (timeOffId === null || timeOffId === undefined) {
                    throw new Error('Required parameter timeOffId was null or undefined when calling deleteLeaveTimeOff.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling deleteLeaveTimeOff.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_48 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_48(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.deleteLeaveTimeOffsBulk = function (acceptVersion_1, deleteLeaveTimeOffsBulkRequest_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, deleteLeaveTimeOffsBulkRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_49, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/time-offs/leave/bulk/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling deleteLeaveTimeOffsBulk.');
                }
                if (deleteLeaveTimeOffsBulkRequest === null || deleteLeaveTimeOffsBulkRequest === undefined) {
                    throw new Error('Required parameter deleteLeaveTimeOffsBulkRequest was null or undefined when calling deleteLeaveTimeOffsBulk.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(deleteLeaveTimeOffsBulkRequest, "DeleteLeaveTimeOffsBulkRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_49 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_49(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.deletePeopleTag = function (peopleTagId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (peopleTagId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_50, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people-tags/{peopleTagId}'
                    .replace('{' + 'peopleTagId' + '}', encodeURIComponent(String(peopleTagId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (peopleTagId === null || peopleTagId === undefined) {
                    throw new Error('Required parameter peopleTagId was null or undefined when calling deletePeopleTag.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling deletePeopleTag.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_50 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_50(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.deletePerson = function (force_1, personId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (force, personId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_51, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/{personId}'
                    .replace('{' + 'personId' + '}', encodeURIComponent(String(personId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (force === null || force === undefined) {
                    throw new Error('Required parameter force was null or undefined when calling deletePerson.');
                }
                if (personId === null || personId === undefined) {
                    throw new Error('Required parameter personId was null or undefined when calling deletePerson.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling deletePerson.');
                }
                if (force !== undefined) {
                    localVarQueryParameters['force'] = models_1.ObjectSerializer.serialize(force, "boolean");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_51 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_51(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.deletePersonContract = function (personId_1, contractId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (personId, contractId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_52, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/{personId}/contracts/{contractId}'
                    .replace('{' + 'personId' + '}', encodeURIComponent(String(personId)))
                    .replace('{' + 'contractId' + '}', encodeURIComponent(String(contractId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (personId === null || personId === undefined) {
                    throw new Error('Required parameter personId was null or undefined when calling deletePersonContract.');
                }
                if (contractId === null || contractId === undefined) {
                    throw new Error('Required parameter contractId was null or undefined when calling deletePersonContract.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling deletePersonContract.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_52 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_52(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.deleteProject = function (projectId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (projectId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_53, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling deleteProject.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling deleteProject.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_53 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_53(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.deleteProjectBudgetRole = function (projectId_1, roleId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (projectId, roleId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_54, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/budget-roles/{roleId}'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)))
                    .replace('{' + 'roleId' + '}', encodeURIComponent(String(roleId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling deleteProjectBudgetRole.');
                }
                if (roleId === null || roleId === undefined) {
                    throw new Error('Required parameter roleId was null or undefined when calling deleteProjectBudgetRole.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling deleteProjectBudgetRole.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_54 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_54(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.deleteProjectMilestone = function (projectId_1, milestoneId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (projectId, milestoneId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_55, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/milestones/{milestoneId}'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)))
                    .replace('{' + 'milestoneId' + '}', encodeURIComponent(String(milestoneId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling deleteProjectMilestone.');
                }
                if (milestoneId === null || milestoneId === undefined) {
                    throw new Error('Required parameter milestoneId was null or undefined when calling deleteProjectMilestone.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling deleteProjectMilestone.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_55 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_55(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.deleteProjectPhase = function (projectId_1, phaseId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (projectId, phaseId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_56, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/phases/{phaseId}'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)))
                    .replace('{' + 'phaseId' + '}', encodeURIComponent(String(phaseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling deleteProjectPhase.');
                }
                if (phaseId === null || phaseId === undefined) {
                    throw new Error('Required parameter phaseId was null or undefined when calling deleteProjectPhase.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling deleteProjectPhase.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_56 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_56(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ProjectPhase");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.deleteRateCard = function (rateCardId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (rateCardId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_57, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/rate-cards/{rateCardId}'
                    .replace('{' + 'rateCardId' + '}', encodeURIComponent(String(rateCardId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (rateCardId === null || rateCardId === undefined) {
                    throw new Error('Required parameter rateCardId was null or undefined when calling deleteRateCard.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling deleteRateCard.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_57 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_57(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.deleteRosteredTimeOff = function (timeOffId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (timeOffId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_58, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/time-offs/rostered-off/{timeOffId}'
                    .replace('{' + 'timeOffId' + '}', encodeURIComponent(String(timeOffId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (timeOffId === null || timeOffId === undefined) {
                    throw new Error('Required parameter timeOffId was null or undefined when calling deleteRosteredTimeOff.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling deleteRosteredTimeOff.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_58 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_58(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.deleteSelectCustomField = function (selectFieldId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (selectFieldId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_59, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/custom-fields/select/{selectFieldId}'
                    .replace('{' + 'selectFieldId' + '}', encodeURIComponent(String(selectFieldId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (selectFieldId === null || selectFieldId === undefined) {
                    throw new Error('Required parameter selectFieldId was null or undefined when calling deleteSelectCustomField.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling deleteSelectCustomField.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_59 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_59(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.deleteSelectCustomFieldOption = function (selectFieldId_1, selectOptionId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (selectFieldId, selectOptionId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_60, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/custom-fields/select/{selectFieldId}/options/{selectOptionId}'
                    .replace('{' + 'selectFieldId' + '}', encodeURIComponent(String(selectFieldId)))
                    .replace('{' + 'selectOptionId' + '}', encodeURIComponent(String(selectOptionId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (selectFieldId === null || selectFieldId === undefined) {
                    throw new Error('Required parameter selectFieldId was null or undefined when calling deleteSelectCustomFieldOption.');
                }
                if (selectOptionId === null || selectOptionId === undefined) {
                    throw new Error('Required parameter selectOptionId was null or undefined when calling deleteSelectCustomFieldOption.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling deleteSelectCustomFieldOption.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_60 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_60(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.deleteSkill = function (skillId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (skillId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_61, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/skills/{skillId}'
                    .replace('{' + 'skillId' + '}', encodeURIComponent(String(skillId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (skillId === null || skillId === undefined) {
                    throw new Error('Required parameter skillId was null or undefined when calling deleteSkill.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling deleteSkill.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_61 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_61(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.deleteTeam = function (teamId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (teamId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_62, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/teams/{teamId}/'
                    .replace('{' + 'teamId' + '}', encodeURIComponent(String(teamId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (teamId === null || teamId === undefined) {
                    throw new Error('Required parameter teamId was null or undefined when calling deleteTeam.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling deleteTeam.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_62 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_62(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.deleteTextCustomField = function (textFieldId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (textFieldId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_63, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/custom-fields/text/{textFieldId}'
                    .replace('{' + 'textFieldId' + '}', encodeURIComponent(String(textFieldId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (textFieldId === null || textFieldId === undefined) {
                    throw new Error('Required parameter textFieldId was null or undefined when calling deleteTextCustomField.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling deleteTextCustomField.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_63 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_63(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.deleteUser = function (userId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (userId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_64, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/users/{userId}'
                    .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (userId === null || userId === undefined) {
                    throw new Error('Required parameter userId was null or undefined when calling deleteUser.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling deleteUser.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_64 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_64(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.deleteWorkstream = function (workstreamId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (workstreamId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_65, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/workstreams/{workstreamId}/'
                    .replace('{' + 'workstreamId' + '}', encodeURIComponent(String(workstreamId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (workstreamId === null || workstreamId === undefined) {
                    throw new Error('Required parameter workstreamId was null or undefined when calling deleteWorkstream.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling deleteWorkstream.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_65 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_65(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.getClient = function (clientId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (clientId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_66, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/clients/{clientId}'
                    .replace('{' + 'clientId' + '}', encodeURIComponent(String(clientId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (clientId === null || clientId === undefined) {
                    throw new Error('Required parameter clientId was null or undefined when calling getClient.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling getClient.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_66 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_66(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Client");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.getCurrentUser = function (acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_67, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/me/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling getCurrentUser.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_67 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_67(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "GetCurrentUser200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.getHolidayGroup = function (holidayGroupId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (holidayGroupId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_68, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/holiday-groups/{holidayGroupId}'
                    .replace('{' + 'holidayGroupId' + '}', encodeURIComponent(String(holidayGroupId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (holidayGroupId === null || holidayGroupId === undefined) {
                    throw new Error('Required parameter holidayGroupId was null or undefined when calling getHolidayGroup.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling getHolidayGroup.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_68 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_68(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "HolidayGroup");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.getLeaveTimeOff = function (timeOffId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (timeOffId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_69, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/time-offs/leave/{timeOffId}/'
                    .replace('{' + 'timeOffId' + '}', encodeURIComponent(String(timeOffId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (timeOffId === null || timeOffId === undefined) {
                    throw new Error('Required parameter timeOffId was null or undefined when calling getLeaveTimeOff.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling getLeaveTimeOff.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_69 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_69(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "TimeOff");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.getPeopleTag = function (peopleTagId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (peopleTagId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_70, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people-tags/{peopleTagId}'
                    .replace('{' + 'peopleTagId' + '}', encodeURIComponent(String(peopleTagId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (peopleTagId === null || peopleTagId === undefined) {
                    throw new Error('Required parameter peopleTagId was null or undefined when calling getPeopleTag.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling getPeopleTag.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_70 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_70(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListPeopleTags200ResponseValuesInner");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.getPerson = function (personId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (personId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_71, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/{personId}'
                    .replace('{' + 'personId' + '}', encodeURIComponent(String(personId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (personId === null || personId === undefined) {
                    throw new Error('Required parameter personId was null or undefined when calling getPerson.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling getPerson.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_71 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_71(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Person");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.getPersonCurrentContract = function (personId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (personId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_72, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/{personId}/contracts/current'
                    .replace('{' + 'personId' + '}', encodeURIComponent(String(personId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (personId === null || personId === undefined) {
                    throw new Error('Required parameter personId was null or undefined when calling getPersonCurrentContract.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling getPersonCurrentContract.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_72 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_72(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Contract");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.getPersonCurrentTeam = function (personId_1, acceptVersion_1, cursor_1, limit_1) {
        return __awaiter(this, arguments, void 0, function (personId, acceptVersion, cursor, limit, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_73, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/{personId}/teams/current'
                    .replace('{' + 'personId' + '}', encodeURIComponent(String(personId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (personId === null || personId === undefined) {
                    throw new Error('Required parameter personId was null or undefined when calling getPersonCurrentTeam.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling getPersonCurrentTeam.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_73 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_73(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "GetPersonCurrentTeam200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.getPersonHoursReport = function (personId_1, acceptVersion_1, cursor_1, limit_1, startDate_1, endDate_1) {
        return __awaiter(this, arguments, void 0, function (personId, acceptVersion, cursor, limit, startDate, endDate, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_74, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/reports/hours/people/{personId}'
                    .replace('{' + 'personId' + '}', encodeURIComponent(String(personId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (personId === null || personId === undefined) {
                    throw new Error('Required parameter personId was null or undefined when calling getPersonHoursReport.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling getPersonHoursReport.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (startDate !== undefined) {
                    localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "string");
                }
                if (endDate !== undefined) {
                    localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "string");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_74 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_74(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "GetPersonHoursReport200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.getProject = function (projectId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (projectId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_75, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling getProject.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling getProject.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_75 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_75(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Project");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.getProjectBudgetRole = function (projectId_1, roleId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (projectId, roleId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_76, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/budget-roles/{roleId}'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)))
                    .replace('{' + 'roleId' + '}', encodeURIComponent(String(roleId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling getProjectBudgetRole.');
                }
                if (roleId === null || roleId === undefined) {
                    throw new Error('Required parameter roleId was null or undefined when calling getProjectBudgetRole.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling getProjectBudgetRole.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_76 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_76(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ProjectBudgetRole");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.getProjectHoursReport = function (projectId_1, acceptVersion_1, cursor_1, limit_1, startDate_1, endDate_1) {
        return __awaiter(this, arguments, void 0, function (projectId, acceptVersion, cursor, limit, startDate, endDate, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_77, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/reports/hours/projects/{projectId}'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling getProjectHoursReport.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling getProjectHoursReport.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (startDate !== undefined) {
                    localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "string");
                }
                if (endDate !== undefined) {
                    localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "string");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_77 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_77(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "GetProjectHoursReport200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.getProjectPersonRequest = function (projectId_1, personRequestId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (projectId, personRequestId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_78, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/person-requests/{personRequestId}'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)))
                    .replace('{' + 'personRequestId' + '}', encodeURIComponent(String(personRequestId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling getProjectPersonRequest.');
                }
                if (personRequestId === null || personRequestId === undefined) {
                    throw new Error('Required parameter personRequestId was null or undefined when calling getProjectPersonRequest.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling getProjectPersonRequest.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_78 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_78(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "PersonRequest");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.getProjectPhase = function (projectId_1, phaseId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (projectId, phaseId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_79, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/phases/{phaseId}'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)))
                    .replace('{' + 'phaseId' + '}', encodeURIComponent(String(phaseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling getProjectPhase.');
                }
                if (phaseId === null || phaseId === undefined) {
                    throw new Error('Required parameter phaseId was null or undefined when calling getProjectPhase.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling getProjectPhase.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_79 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_79(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ProjectPhase");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.getProjectTag = function (projectTagId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (projectTagId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_80, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/project-tags/{projectTagId}'
                    .replace('{' + 'projectTagId' + '}', encodeURIComponent(String(projectTagId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectTagId === null || projectTagId === undefined) {
                    throw new Error('Required parameter projectTagId was null or undefined when calling getProjectTag.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling getProjectTag.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_80 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_80(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ProjectTag");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.getProjectTimesheetLock = function (projectId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (projectId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_81, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/timesheet-lock/'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling getProjectTimesheetLock.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling getProjectTimesheetLock.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_81 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_81(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "GetProjectTimesheetLock200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.getProjectTotalsReport = function (projectId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (projectId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_82, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/reports/totals/projects/{projectId}'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling getProjectTotalsReport.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling getProjectTotalsReport.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_82 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_82(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ProjectAggregate");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.getProjectWorkstream = function (projectId_1, workstreamId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (projectId, workstreamId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_83, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/project-workstreams/{workstreamId}/'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)))
                    .replace('{' + 'workstreamId' + '}', encodeURIComponent(String(workstreamId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling getProjectWorkstream.');
                }
                if (workstreamId === null || workstreamId === undefined) {
                    throw new Error('Required parameter workstreamId was null or undefined when calling getProjectWorkstream.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling getProjectWorkstream.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_83 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_83(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ProjectWorkstream");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.getRateCard = function (rateCardId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (rateCardId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_84, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/rate-cards/{rateCardId}'
                    .replace('{' + 'rateCardId' + '}', encodeURIComponent(String(rateCardId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (rateCardId === null || rateCardId === undefined) {
                    throw new Error('Required parameter rateCardId was null or undefined when calling getRateCard.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling getRateCard.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_84 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_84(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "RateCard");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.getRole = function (roleId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (roleId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_85, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/roles/{roleId}'
                    .replace('{' + 'roleId' + '}', encodeURIComponent(String(roleId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (roleId === null || roleId === undefined) {
                    throw new Error('Required parameter roleId was null or undefined when calling getRole.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling getRole.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_85 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_85(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Role");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.getSkill = function (skillId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (skillId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_86, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/skills/{skillId}'
                    .replace('{' + 'skillId' + '}', encodeURIComponent(String(skillId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (skillId === null || skillId === undefined) {
                    throw new Error('Required parameter skillId was null or undefined when calling getSkill.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling getSkill.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_86 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_86(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Skill");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.getTeam = function (teamId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (teamId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_87, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/teams/{teamId}/'
                    .replace('{' + 'teamId' + '}', encodeURIComponent(String(teamId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (teamId === null || teamId === undefined) {
                    throw new Error('Required parameter teamId was null or undefined when calling getTeam.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling getTeam.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_87 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_87(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Team");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.getUser = function (userId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (userId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_88, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/users/{userId}'
                    .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (userId === null || userId === undefined) {
                    throw new Error('Required parameter userId was null or undefined when calling getUser.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling getUser.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_88 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_88(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "User");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.getWorkstream = function (workstreamId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (workstreamId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_89, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/workstreams/{workstreamId}/'
                    .replace('{' + 'workstreamId' + '}', encodeURIComponent(String(workstreamId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (workstreamId === null || workstreamId === undefined) {
                    throw new Error('Required parameter workstreamId was null or undefined when calling getWorkstream.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling getWorkstream.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_89 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_89(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Workstream");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listActuals = function (acceptVersion_1, cursor_1, limit_1, sortBy_1, order_1, minDate_1, maxDate_1, projectId_1, roleId_1, personId_1, workstreamId_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, sortBy, order, minDate, maxDate, projectId, roleId, personId, workstreamId, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_90, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/actuals/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listActuals.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (sortBy !== undefined) {
                    localVarQueryParameters['sortBy'] = models_1.ObjectSerializer.serialize(sortBy, "'createdAt' | 'updatedAt' | 'id'");
                }
                if (order !== undefined) {
                    localVarQueryParameters['order'] = models_1.ObjectSerializer.serialize(order, "'asc' | 'desc'");
                }
                if (minDate !== undefined) {
                    localVarQueryParameters['minDate'] = models_1.ObjectSerializer.serialize(minDate, "string");
                }
                if (maxDate !== undefined) {
                    localVarQueryParameters['maxDate'] = models_1.ObjectSerializer.serialize(maxDate, "string");
                }
                if (projectId !== undefined) {
                    localVarQueryParameters['projectId'] = models_1.ObjectSerializer.serialize(projectId, "number");
                }
                if (roleId !== undefined) {
                    localVarQueryParameters['roleId'] = models_1.ObjectSerializer.serialize(roleId, "number");
                }
                if (personId !== undefined) {
                    localVarQueryParameters['personId'] = models_1.ObjectSerializer.serialize(personId, "number");
                }
                if (workstreamId !== undefined) {
                    localVarQueryParameters['workstreamId'] = models_1.ObjectSerializer.serialize(workstreamId, "number");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_90 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_90(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListActuals200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listAssignments = function (acceptVersion_1, cursor_1, limit_1, sortBy_1, order_1, personId_1, roleId_1, projectId_1, startDate_1, endDate_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, sortBy, order, personId, roleId, projectId, startDate, endDate, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_91, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/assignments/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listAssignments.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (sortBy !== undefined) {
                    localVarQueryParameters['sortBy'] = models_1.ObjectSerializer.serialize(sortBy, "'createdAt' | 'updatedAt' | 'id'");
                }
                if (order !== undefined) {
                    localVarQueryParameters['order'] = models_1.ObjectSerializer.serialize(order, "'asc' | 'desc'");
                }
                if (personId !== undefined) {
                    localVarQueryParameters['personId'] = models_1.ObjectSerializer.serialize(personId, "number");
                }
                if (roleId !== undefined) {
                    localVarQueryParameters['roleId'] = models_1.ObjectSerializer.serialize(roleId, "number");
                }
                if (projectId !== undefined) {
                    localVarQueryParameters['projectId'] = models_1.ObjectSerializer.serialize(projectId, "number");
                }
                if (startDate !== undefined) {
                    localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "string");
                }
                if (endDate !== undefined) {
                    localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "string");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_91 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_91(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListAssignments200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listBudgetRoles = function (acceptVersion_1, cursor_1, limit_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_92, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/budget-roles/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listBudgetRoles.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_92 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_92(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListBudgetRoles200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listCheckboxCustomFields = function (acceptVersion_1, cursor_1, limit_1, model_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, model, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_93, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/custom-fields/checkbox/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listCheckboxCustomFields.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (model !== undefined) {
                    localVarQueryParameters['model'] = models_1.ObjectSerializer.serialize(model, "'PERSON' | 'PROJECT'");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_93 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_93(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListCheckboxCustomFields200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listClientProjects = function (includeArchived_1, clientId_1, acceptVersion_1, cursor_1, limit_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (includeArchived, clientId, acceptVersion, cursor, limit, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_94, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/clients/{clientId}/projects/'
                    .replace('{' + 'clientId' + '}', encodeURIComponent(String(clientId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (includeArchived === null || includeArchived === undefined) {
                    throw new Error('Required parameter includeArchived was null or undefined when calling listClientProjects.');
                }
                if (clientId === null || clientId === undefined) {
                    throw new Error('Required parameter clientId was null or undefined when calling listClientProjects.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listClientProjects.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (includeArchived !== undefined) {
                    localVarQueryParameters['includeArchived'] = models_1.ObjectSerializer.serialize(includeArchived, "boolean");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_94 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_94(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListClientProjects200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listClients = function (sortBy_1, acceptVersion_1, name_1, order_1, cursor_1, limit_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (sortBy, acceptVersion, name, order, cursor, limit, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_95, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/clients/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (sortBy === null || sortBy === undefined) {
                    throw new Error('Required parameter sortBy was null or undefined when calling listClients.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listClients.');
                }
                if (name !== undefined) {
                    localVarQueryParameters['name'] = models_1.ObjectSerializer.serialize(name, "string");
                }
                if (sortBy !== undefined) {
                    localVarQueryParameters['sortBy'] = models_1.ObjectSerializer.serialize(sortBy, "'id' | 'createdAt' | 'updatedAt'");
                }
                if (order !== undefined) {
                    localVarQueryParameters['order'] = models_1.ObjectSerializer.serialize(order, "SortOrder");
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_95 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_95(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListClients200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listContracts = function (sortBy_1, acceptVersion_1, cursor_1, limit_1, modifiedAfter_1, order_1) {
        return __awaiter(this, arguments, void 0, function (sortBy, acceptVersion, cursor, limit, modifiedAfter, order, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_96, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/contracts/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (sortBy === null || sortBy === undefined) {
                    throw new Error('Required parameter sortBy was null or undefined when calling listContracts.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listContracts.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                if (sortBy !== undefined) {
                    localVarQueryParameters['sortBy'] = models_1.ObjectSerializer.serialize(sortBy, "'id' | 'createdAt' | 'updatedAt'");
                }
                if (order !== undefined) {
                    localVarQueryParameters['order'] = models_1.ObjectSerializer.serialize(order, "SortOrder");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_96 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_96(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListContracts200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listDateCustomFields = function (acceptVersion_1, cursor_1, limit_1, model_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, model, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_97, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/custom-fields/date/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listDateCustomFields.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (model !== undefined) {
                    localVarQueryParameters['model'] = models_1.ObjectSerializer.serialize(model, "'PERSON' | 'PROJECT'");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_97 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_97(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListDateCustomFields200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listEvents = function (acceptVersion_1, cursor_1, limit_1, eventType_1, occurredAfter_1, orderBy_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, eventType, occurredAfter, orderBy, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_98, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/activity-log/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listEvents.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (eventType !== undefined) {
                    localVarQueryParameters['eventType'] = models_1.ObjectSerializer.serialize(eventType, "Array<'project_deleted' | 'person_deleted' | 'contract_deleted' | 'actual_deleted' | 'time_off_deleted' | 'assignment_deleted'>");
                }
                if (occurredAfter !== undefined) {
                    localVarQueryParameters['occurredAfter'] = models_1.ObjectSerializer.serialize(occurredAfter, "Date");
                }
                if (orderBy !== undefined) {
                    localVarQueryParameters['orderBy'] = models_1.ObjectSerializer.serialize(orderBy, "'asc' | 'desc'");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_98 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_98(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListEvents200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listHolidayGroupHolidays = function (holidayGroupId_1, acceptVersion_1, cursor_1, limit_1) {
        return __awaiter(this, arguments, void 0, function (holidayGroupId, acceptVersion, cursor, limit, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_99, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/holiday-groups/{holidayGroupId}/holidays'
                    .replace('{' + 'holidayGroupId' + '}', encodeURIComponent(String(holidayGroupId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (holidayGroupId === null || holidayGroupId === undefined) {
                    throw new Error('Required parameter holidayGroupId was null or undefined when calling listHolidayGroupHolidays.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listHolidayGroupHolidays.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_99 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_99(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListHolidayGroupHolidays200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listHolidayGroups = function (acceptVersion_1, cursor_1, limit_1, sortBy_1, order_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, sortBy, order, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_100, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/holiday-groups/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listHolidayGroups.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (sortBy !== undefined) {
                    localVarQueryParameters['sortBy'] = models_1.ObjectSerializer.serialize(sortBy, "'createdAt' | 'updatedAt' | 'id'");
                }
                if (order !== undefined) {
                    localVarQueryParameters['order'] = models_1.ObjectSerializer.serialize(order, "'asc' | 'desc'");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_100 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_100(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListHolidayGroups200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listHolidayTimeOffs = function (sortBy_1, acceptVersion_1, cursor_1, limit_1, order_1, personId_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (sortBy, acceptVersion, cursor, limit, order, personId, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_101, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/time-offs/holidays/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (sortBy === null || sortBy === undefined) {
                    throw new Error('Required parameter sortBy was null or undefined when calling listHolidayTimeOffs.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listHolidayTimeOffs.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (sortBy !== undefined) {
                    localVarQueryParameters['sortBy'] = models_1.ObjectSerializer.serialize(sortBy, "'id' | 'createdAt' | 'updatedAt'");
                }
                if (order !== undefined) {
                    localVarQueryParameters['order'] = models_1.ObjectSerializer.serialize(order, "SortOrder");
                }
                if (personId !== undefined) {
                    localVarQueryParameters['personId'] = models_1.ObjectSerializer.serialize(personId, "number");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_101 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_101(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListPersonHolidays200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listInvitations = function (acceptVersion_1, cursor_1, limit_1, sortBy_1, order_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, sortBy, order, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_102, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/invitations/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listInvitations.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (sortBy !== undefined) {
                    localVarQueryParameters['sortBy'] = models_1.ObjectSerializer.serialize(sortBy, "'createdAt' | 'sentAt' | 'id'");
                }
                if (order !== undefined) {
                    localVarQueryParameters['order'] = models_1.ObjectSerializer.serialize(order, "'asc' | 'desc'");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_102 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_102(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListInvitations200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listLeaveTimeOffs = function (sortBy_1, acceptVersion_1, cursor_1, limit_1, order_1, personId_1, startDate_1, endDate_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (sortBy, acceptVersion, cursor, limit, order, personId, startDate, endDate, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_103, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/time-offs/leave/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (sortBy === null || sortBy === undefined) {
                    throw new Error('Required parameter sortBy was null or undefined when calling listLeaveTimeOffs.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listLeaveTimeOffs.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (sortBy !== undefined) {
                    localVarQueryParameters['sortBy'] = models_1.ObjectSerializer.serialize(sortBy, "'id' | 'createdAt' | 'updatedAt'");
                }
                if (order !== undefined) {
                    localVarQueryParameters['order'] = models_1.ObjectSerializer.serialize(order, "SortOrder");
                }
                if (personId !== undefined) {
                    localVarQueryParameters['personId'] = models_1.ObjectSerializer.serialize(personId, "number");
                }
                if (startDate !== undefined) {
                    localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "string");
                }
                if (endDate !== undefined) {
                    localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "string");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_103 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_103(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListPersonLeave200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listMilestones = function (acceptVersion_1, cursor_1, limit_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_104, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/milestones/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listMilestones.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_104 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_104(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListMilestones200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listNotesForProject = function (projectId_1, acceptVersion_1, cursor_1, limit_1) {
        return __awaiter(this, arguments, void 0, function (projectId, acceptVersion, cursor, limit, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_105, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/notes/'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling listNotesForProject.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listNotesForProject.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_105 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_105(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListProjectNotes200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listOtherExpenses = function (acceptVersion_1, cursor_1, limit_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_106, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/other-expenses/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listOtherExpenses.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_106 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_106(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListOtherExpenses200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listPeople = function (acceptVersion_1, cursor_1, limit_1, sortBy_1, order_1, includePlaceholders_1, email_1, firstName_1, lastName_1, modifiedAfter_1, externalId_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, sortBy, order, includePlaceholders, email, firstName, lastName, modifiedAfter, externalId, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_107, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listPeople.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (sortBy !== undefined) {
                    localVarQueryParameters['sortBy'] = models_1.ObjectSerializer.serialize(sortBy, "'createdAt' | 'updatedAt' | 'id'");
                }
                if (order !== undefined) {
                    localVarQueryParameters['order'] = models_1.ObjectSerializer.serialize(order, "'asc' | 'desc'");
                }
                if (includePlaceholders !== undefined) {
                    localVarQueryParameters['includePlaceholders'] = models_1.ObjectSerializer.serialize(includePlaceholders, "boolean");
                }
                if (email !== undefined) {
                    localVarQueryParameters['email'] = models_1.ObjectSerializer.serialize(email, "string");
                }
                if (firstName !== undefined) {
                    localVarQueryParameters['firstName'] = models_1.ObjectSerializer.serialize(firstName, "string");
                }
                if (lastName !== undefined) {
                    localVarQueryParameters['lastName'] = models_1.ObjectSerializer.serialize(lastName, "string");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                if (externalId !== undefined) {
                    localVarQueryParameters['externalId'] = models_1.ObjectSerializer.serialize(externalId, "string");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_107 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_107(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListPeople200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listPeopleCurrentContracts = function (acceptVersion_1, cursor_1, limit_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_108, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/contracts/current';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listPeopleCurrentContracts.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_108 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_108(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListContracts200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listPeopleCustomFields = function (acceptVersion_1, cursor_1, limit_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_109, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/custom-fields';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listPeopleCustomFields.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_109 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_109(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListPeopleCustomFields200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listPeopleNotes = function (acceptVersion_1, cursor_1, limit_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_110, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/notes';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listPeopleNotes.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_110 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_110(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListPeopleNotes200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listPeopleSkills = function (acceptVersion_1, cursor_1, limit_1, includePlaceholders_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, includePlaceholders, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_111, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/skills';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listPeopleSkills.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (includePlaceholders !== undefined) {
                    localVarQueryParameters['includePlaceholders'] = models_1.ObjectSerializer.serialize(includePlaceholders, "boolean");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_111 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_111(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListPeopleSkills200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listPeopleTags = function (acceptVersion_1, cursor_1, limit_1, sortBy_1, order_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, sortBy, order, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_112, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people-tags/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listPeopleTags.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (sortBy !== undefined) {
                    localVarQueryParameters['sortBy'] = models_1.ObjectSerializer.serialize(sortBy, "'createdAt' | 'updatedAt' | 'id'");
                }
                if (order !== undefined) {
                    localVarQueryParameters['order'] = models_1.ObjectSerializer.serialize(order, "'asc' | 'desc'");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_112 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_112(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListPeopleTags200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listPersonActuals = function (personId_1, acceptVersion_1, cursor_1, limit_1, projectId_1, roleId_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (personId, acceptVersion, cursor, limit, projectId, roleId, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_113, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/{personId}/actuals/'
                    .replace('{' + 'personId' + '}', encodeURIComponent(String(personId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (personId === null || personId === undefined) {
                    throw new Error('Required parameter personId was null or undefined when calling listPersonActuals.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listPersonActuals.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (projectId !== undefined) {
                    localVarQueryParameters['projectId'] = models_1.ObjectSerializer.serialize(projectId, "number");
                }
                if (roleId !== undefined) {
                    localVarQueryParameters['roleId'] = models_1.ObjectSerializer.serialize(roleId, "number");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_113 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_113(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListActuals200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listPersonAssignments = function (personId_1, acceptVersion_1, cursor_1, limit_1, projectId_1, roleId_1, startDate_1, endDate_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (personId, acceptVersion, cursor, limit, projectId, roleId, startDate, endDate, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_114, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/{personId}/assignments/'
                    .replace('{' + 'personId' + '}', encodeURIComponent(String(personId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (personId === null || personId === undefined) {
                    throw new Error('Required parameter personId was null or undefined when calling listPersonAssignments.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listPersonAssignments.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (projectId !== undefined) {
                    localVarQueryParameters['projectId'] = models_1.ObjectSerializer.serialize(projectId, "number");
                }
                if (roleId !== undefined) {
                    localVarQueryParameters['roleId'] = models_1.ObjectSerializer.serialize(roleId, "number");
                }
                if (startDate !== undefined) {
                    localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "string");
                }
                if (endDate !== undefined) {
                    localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "string");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_114 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_114(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListAssignments200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listPersonContracts = function (personId_1, acceptVersion_1, cursor_1, limit_1) {
        return __awaiter(this, arguments, void 0, function (personId, acceptVersion, cursor, limit, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_115, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/{personId}/contracts/'
                    .replace('{' + 'personId' + '}', encodeURIComponent(String(personId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (personId === null || personId === undefined) {
                    throw new Error('Required parameter personId was null or undefined when calling listPersonContracts.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listPersonContracts.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_115 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_115(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListContracts200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listPersonHolidays = function (personId_1, acceptVersion_1, cursor_1, limit_1) {
        return __awaiter(this, arguments, void 0, function (personId, acceptVersion, cursor, limit, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_116, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/{personId}/time-offs/holidays'
                    .replace('{' + 'personId' + '}', encodeURIComponent(String(personId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (personId === null || personId === undefined) {
                    throw new Error('Required parameter personId was null or undefined when calling listPersonHolidays.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listPersonHolidays.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_116 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_116(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListPersonHolidays200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listPersonLeave = function (personId_1, acceptVersion_1, cursor_1, limit_1) {
        return __awaiter(this, arguments, void 0, function (personId, acceptVersion, cursor, limit, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_117, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/{personId}/time-offs/leave'
                    .replace('{' + 'personId' + '}', encodeURIComponent(String(personId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (personId === null || personId === undefined) {
                    throw new Error('Required parameter personId was null or undefined when calling listPersonLeave.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listPersonLeave.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_117 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_117(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListPersonLeave200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listPersonProjects = function (personId_1, acceptVersion_1, cursor_1, limit_1) {
        return __awaiter(this, arguments, void 0, function (personId, acceptVersion, cursor, limit, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_118, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/{personId}/projects/'
                    .replace('{' + 'personId' + '}', encodeURIComponent(String(personId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (personId === null || personId === undefined) {
                    throw new Error('Required parameter personId was null or undefined when calling listPersonProjects.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listPersonProjects.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_118 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_118(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListClientProjects200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listPersonRequests = function (acceptVersion_1, cursor_1, limit_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_119, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/person-requests/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listPersonRequests.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_119 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_119(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListPersonRequests200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listPersonRosteredTimeOffs = function (personId_1, acceptVersion_1, cursor_1, limit_1) {
        return __awaiter(this, arguments, void 0, function (personId, acceptVersion, cursor, limit, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_120, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/{personId}/time-offs/rostered-off'
                    .replace('{' + 'personId' + '}', encodeURIComponent(String(personId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (personId === null || personId === undefined) {
                    throw new Error('Required parameter personId was null or undefined when calling listPersonRosteredTimeOffs.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listPersonRosteredTimeOffs.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_120 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_120(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListPersonLeave200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listPersonSkills = function (personId_1, acceptVersion_1, cursor_1, limit_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (personId, acceptVersion, cursor, limit, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_121, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/{personId}/skills/'
                    .replace('{' + 'personId' + '}', encodeURIComponent(String(personId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (personId === null || personId === undefined) {
                    throw new Error('Required parameter personId was null or undefined when calling listPersonSkills.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listPersonSkills.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_121 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_121(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListPersonSkills200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listPhases = function (acceptVersion_1, cursor_1, limit_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_122, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/phases/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listPhases.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_122 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_122(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListPhases200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listPlaceholders = function (acceptVersion_1, cursor_1, limit_1, sortBy_1, order_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, sortBy, order, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_123, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/placeholders/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listPlaceholders.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (sortBy !== undefined) {
                    localVarQueryParameters['sortBy'] = models_1.ObjectSerializer.serialize(sortBy, "'createdAt' | 'updatedAt' | 'id'");
                }
                if (order !== undefined) {
                    localVarQueryParameters['order'] = models_1.ObjectSerializer.serialize(order, "'asc' | 'desc'");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_123 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_123(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListPlaceholders200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listProjectActuals = function (projectId_1, acceptVersion_1, cursor_1, limit_1, personId_1, roleId_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (projectId, acceptVersion, cursor, limit, personId, roleId, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_124, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/actuals/'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling listProjectActuals.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listProjectActuals.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (personId !== undefined) {
                    localVarQueryParameters['personId'] = models_1.ObjectSerializer.serialize(personId, "number");
                }
                if (roleId !== undefined) {
                    localVarQueryParameters['roleId'] = models_1.ObjectSerializer.serialize(roleId, "number");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_124 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_124(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListActuals200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listProjectAssignments = function (projectId_1, acceptVersion_1, cursor_1, limit_1, personId_1, roleId_1, startDate_1, endDate_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (projectId, acceptVersion, cursor, limit, personId, roleId, startDate, endDate, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_125, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/assignments/'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling listProjectAssignments.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listProjectAssignments.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (personId !== undefined) {
                    localVarQueryParameters['personId'] = models_1.ObjectSerializer.serialize(personId, "number");
                }
                if (roleId !== undefined) {
                    localVarQueryParameters['roleId'] = models_1.ObjectSerializer.serialize(roleId, "number");
                }
                if (startDate !== undefined) {
                    localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "string");
                }
                if (endDate !== undefined) {
                    localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "string");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_125 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_125(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListAssignments200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listProjectBudgetRoles = function (projectId_1, acceptVersion_1, cursor_1, limit_1) {
        return __awaiter(this, arguments, void 0, function (projectId, acceptVersion, cursor, limit, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_126, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/budget-roles/'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling listProjectBudgetRoles.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listProjectBudgetRoles.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_126 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_126(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListBudgetRoles200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listProjectCustomFields = function (acceptVersion_1, cursor_1, limit_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_127, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/custom-fields';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listProjectCustomFields.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_127 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_127(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListProjectCustomFields200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listProjectMembers = function (acceptVersion_1, cursor_1, limit_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_128, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/project-members/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listProjectMembers.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_128 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_128(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListProjectMembers200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listProjectMilestones = function (projectId_1, acceptVersion_1, cursor_1, limit_1, startDate_1, endDate_1) {
        return __awaiter(this, arguments, void 0, function (projectId, acceptVersion, cursor, limit, startDate, endDate, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_129, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/milestones/'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling listProjectMilestones.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listProjectMilestones.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (startDate !== undefined) {
                    localVarQueryParameters['startDate'] = models_1.ObjectSerializer.serialize(startDate, "string");
                }
                if (endDate !== undefined) {
                    localVarQueryParameters['endDate'] = models_1.ObjectSerializer.serialize(endDate, "string");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_129 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_129(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListMilestones200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listProjectNotes = function (acceptVersion_1, cursor_1, limit_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_130, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/project-notes/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listProjectNotes.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_130 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_130(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListProjectNotes200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listProjectOtherExpenses = function (projectId_1, acceptVersion_1, cursor_1, limit_1) {
        return __awaiter(this, arguments, void 0, function (projectId, acceptVersion, cursor, limit, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_131, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/other-expenses/'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling listProjectOtherExpenses.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listProjectOtherExpenses.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_131 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_131(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListOtherExpenses200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listProjectPeople = function (includeArchived_1, projectId_1, acceptVersion_1, cursor_1, limit_1) {
        return __awaiter(this, arguments, void 0, function (includeArchived, projectId, acceptVersion, cursor, limit, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_132, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/people/'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (includeArchived === null || includeArchived === undefined) {
                    throw new Error('Required parameter includeArchived was null or undefined when calling listProjectPeople.');
                }
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling listProjectPeople.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listProjectPeople.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (includeArchived !== undefined) {
                    localVarQueryParameters['includeArchived'] = models_1.ObjectSerializer.serialize(includeArchived, "boolean");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_132 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_132(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListPeople200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listProjectPersonRequests = function (projectId_1, acceptVersion_1, cursor_1, limit_1) {
        return __awaiter(this, arguments, void 0, function (projectId, acceptVersion, cursor, limit, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_133, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/person-requests/'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling listProjectPersonRequests.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listProjectPersonRequests.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_133 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_133(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListPersonRequests200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listProjectPhases = function (projectId_1, acceptVersion_1, cursor_1, limit_1) {
        return __awaiter(this, arguments, void 0, function (projectId, acceptVersion, cursor, limit, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_134, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/phases/'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling listProjectPhases.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listProjectPhases.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_134 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_134(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListPhases200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listProjectRates = function (acceptVersion_1, cursor_1, limit_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_135, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/project-rates/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listProjectRates.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_135 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_135(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListProjectRates200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listProjectRoleRates = function (projectId_1, acceptVersion_1, cursor_1, limit_1) {
        return __awaiter(this, arguments, void 0, function (projectId, acceptVersion, cursor, limit, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_136, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/project-rates/'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling listProjectRoleRates.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listProjectRoleRates.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_136 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_136(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListProjectRates200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listProjectTags = function (acceptVersion_1, cursor_1, limit_1, sortBy_1, order_1, includeArchived_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, sortBy, order, includeArchived, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_137, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/project-tags/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listProjectTags.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (sortBy !== undefined) {
                    localVarQueryParameters['sortBy'] = models_1.ObjectSerializer.serialize(sortBy, "'createdAt' | 'updatedAt' | 'id'");
                }
                if (order !== undefined) {
                    localVarQueryParameters['order'] = models_1.ObjectSerializer.serialize(order, "'asc' | 'desc'");
                }
                if (includeArchived !== undefined) {
                    localVarQueryParameters['includeArchived'] = models_1.ObjectSerializer.serialize(includeArchived, "boolean");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_137 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_137(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListProjectTags200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listProjectTotalsReport = function (includeArchived_1, acceptVersion_1, cursor_1, limit_1) {
        return __awaiter(this, arguments, void 0, function (includeArchived, acceptVersion, cursor, limit, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_138, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/reports/totals/projects/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (includeArchived === null || includeArchived === undefined) {
                    throw new Error('Required parameter includeArchived was null or undefined when calling listProjectTotalsReport.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listProjectTotalsReport.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (includeArchived !== undefined) {
                    localVarQueryParameters['includeArchived'] = models_1.ObjectSerializer.serialize(includeArchived, "boolean");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_138 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_138(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListProjectTotalsReport200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listProjectWorkstreams = function (acceptVersion_1, cursor_1, limit_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_139, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/project-workstreams/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listProjectWorkstreams.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_139 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_139(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListProjectWorkstreams200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listProjectWorkstreamsForProject = function (includeArchived_1, projectId_1, acceptVersion_1, cursor_1, limit_1) {
        return __awaiter(this, arguments, void 0, function (includeArchived, projectId, acceptVersion, cursor, limit, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_140, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/project-workstreams/'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (includeArchived === null || includeArchived === undefined) {
                    throw new Error('Required parameter includeArchived was null or undefined when calling listProjectWorkstreamsForProject.');
                }
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling listProjectWorkstreamsForProject.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listProjectWorkstreamsForProject.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (includeArchived !== undefined) {
                    localVarQueryParameters['includeArchived'] = models_1.ObjectSerializer.serialize(includeArchived, "boolean");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_140 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_140(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListProjectWorkstreamsForProject200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listProjects = function (includeArchived_1, acceptVersion_1, cursor_1, limit_1, sortBy_1, order_1, modifiedAfter_1, externalId_1, name_1) {
        return __awaiter(this, arguments, void 0, function (includeArchived, acceptVersion, cursor, limit, sortBy, order, modifiedAfter, externalId, name, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_141, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (includeArchived === null || includeArchived === undefined) {
                    throw new Error('Required parameter includeArchived was null or undefined when calling listProjects.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listProjects.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (sortBy !== undefined) {
                    localVarQueryParameters['sortBy'] = models_1.ObjectSerializer.serialize(sortBy, "'createdAt' | 'updatedAt' | 'id'");
                }
                if (order !== undefined) {
                    localVarQueryParameters['order'] = models_1.ObjectSerializer.serialize(order, "'asc' | 'desc'");
                }
                if (includeArchived !== undefined) {
                    localVarQueryParameters['includeArchived'] = models_1.ObjectSerializer.serialize(includeArchived, "boolean");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                if (externalId !== undefined) {
                    localVarQueryParameters['externalId'] = models_1.ObjectSerializer.serialize(externalId, "string");
                }
                if (name !== undefined) {
                    localVarQueryParameters['name'] = models_1.ObjectSerializer.serialize(name, "string");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_141 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_141(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListClientProjects200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listRateCards = function (acceptVersion_1, cursor_1, limit_1, sortBy_1, order_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, sortBy, order, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_142, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/rate-cards/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listRateCards.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (sortBy !== undefined) {
                    localVarQueryParameters['sortBy'] = models_1.ObjectSerializer.serialize(sortBy, "'createdAt' | 'updatedAt' | 'id'");
                }
                if (order !== undefined) {
                    localVarQueryParameters['order'] = models_1.ObjectSerializer.serialize(order, "'asc' | 'desc'");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_142 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_142(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListRateCards200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listRoles = function (acceptVersion_1, name_1, cursor_1, limit_1, sortBy_1, order_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, name, cursor, limit, sortBy, order, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_143, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/roles/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listRoles.');
                }
                if (name !== undefined) {
                    localVarQueryParameters['name'] = models_1.ObjectSerializer.serialize(name, "string");
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (sortBy !== undefined) {
                    localVarQueryParameters['sortBy'] = models_1.ObjectSerializer.serialize(sortBy, "'createdAt' | 'updatedAt' | 'id'");
                }
                if (order !== undefined) {
                    localVarQueryParameters['order'] = models_1.ObjectSerializer.serialize(order, "'asc' | 'desc'");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_143 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_143(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListRoles200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listRosteredTimeOffs = function (sortBy_1, acceptVersion_1, cursor_1, limit_1, order_1, personId_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (sortBy, acceptVersion, cursor, limit, order, personId, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_144, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/time-offs/rostered-off/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (sortBy === null || sortBy === undefined) {
                    throw new Error('Required parameter sortBy was null or undefined when calling listRosteredTimeOffs.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listRosteredTimeOffs.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (sortBy !== undefined) {
                    localVarQueryParameters['sortBy'] = models_1.ObjectSerializer.serialize(sortBy, "'id' | 'createdAt' | 'updatedAt'");
                }
                if (order !== undefined) {
                    localVarQueryParameters['order'] = models_1.ObjectSerializer.serialize(order, "SortOrder");
                }
                if (personId !== undefined) {
                    localVarQueryParameters['personId'] = models_1.ObjectSerializer.serialize(personId, "number");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_144 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_144(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListPersonLeave200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listSelectCustomFields = function (acceptVersion_1, cursor_1, limit_1, model_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, model, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_145, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/custom-fields/select/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listSelectCustomFields.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (model !== undefined) {
                    localVarQueryParameters['model'] = models_1.ObjectSerializer.serialize(model, "'PERSON' | 'PROJECT'");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_145 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_145(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListSelectCustomFields200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listSkillPeople = function (skillId_1, acceptVersion_1, cursor_1, limit_1) {
        return __awaiter(this, arguments, void 0, function (skillId, acceptVersion, cursor, limit, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_146, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/skills/{skillId}/people/'
                    .replace('{' + 'skillId' + '}', encodeURIComponent(String(skillId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (skillId === null || skillId === undefined) {
                    throw new Error('Required parameter skillId was null or undefined when calling listSkillPeople.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listSkillPeople.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_146 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_146(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListPeople200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listSkills = function (sortBy_1, acceptVersion_1, cursor_1, limit_1, order_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (sortBy, acceptVersion, cursor, limit, order, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_147, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/skills/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (sortBy === null || sortBy === undefined) {
                    throw new Error('Required parameter sortBy was null or undefined when calling listSkills.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listSkills.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (sortBy !== undefined) {
                    localVarQueryParameters['sortBy'] = models_1.ObjectSerializer.serialize(sortBy, "'id' | 'createdAt' | 'updatedAt'");
                }
                if (order !== undefined) {
                    localVarQueryParameters['order'] = models_1.ObjectSerializer.serialize(order, "SortOrder");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_147 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_147(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListSkills200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listTeamPeople = function (teamId_1, acceptVersion_1, cursor_1, limit_1) {
        return __awaiter(this, arguments, void 0, function (teamId, acceptVersion, cursor, limit, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_148, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/teams/{teamId}/people/'
                    .replace('{' + 'teamId' + '}', encodeURIComponent(String(teamId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (teamId === null || teamId === undefined) {
                    throw new Error('Required parameter teamId was null or undefined when calling listTeamPeople.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listTeamPeople.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_148 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_148(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListPeople200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listTeams = function (acceptVersion_1, cursor_1, limit_1, modifiedAfter_1, sortBy_1, order_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, modifiedAfter, sortBy, order, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_149, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/teams/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listTeams.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                if (sortBy !== undefined) {
                    localVarQueryParameters['sortBy'] = models_1.ObjectSerializer.serialize(sortBy, "'createdAt' | 'updatedAt' | 'id'");
                }
                if (order !== undefined) {
                    localVarQueryParameters['order'] = models_1.ObjectSerializer.serialize(order, "'asc' | 'desc'");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_149 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_149(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListTeams200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listTextCustomFields = function (acceptVersion_1, cursor_1, limit_1, model_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, model, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_150, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/custom-fields/text/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listTextCustomFields.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (model !== undefined) {
                    localVarQueryParameters['model'] = models_1.ObjectSerializer.serialize(model, "'PERSON' | 'PROJECT'");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_150 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_150(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListTextCustomFields200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listUserViews = function (userId_1, acceptVersion_1, cursor_1, limit_1) {
        return __awaiter(this, arguments, void 0, function (userId, acceptVersion, cursor, limit, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_151, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/users/{userId}/views/'
                    .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (userId === null || userId === undefined) {
                    throw new Error('Required parameter userId was null or undefined when calling listUserViews.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listUserViews.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_151 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_151(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListUserViews200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listUsers = function (acceptVersion_1, cursor_1, limit_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_152, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/users/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listUsers.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_152 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_152(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListUsers200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listViews = function (acceptVersion_1, cursor_1, limit_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_153, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/views/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listViews.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_153 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_153(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListUserViews200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.listWorkstreams = function (acceptVersion_1, cursor_1, limit_1, sortBy_1, order_1, modifiedAfter_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, cursor, limit, sortBy, order, modifiedAfter, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_154, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/workstreams/';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling listWorkstreams.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (sortBy !== undefined) {
                    localVarQueryParameters['sortBy'] = models_1.ObjectSerializer.serialize(sortBy, "'createdAt' | 'updatedAt' | 'id'");
                }
                if (order !== undefined) {
                    localVarQueryParameters['order'] = models_1.ObjectSerializer.serialize(order, "'asc' | 'desc'");
                }
                if (modifiedAfter !== undefined) {
                    localVarQueryParameters['modifiedAfter'] = models_1.ObjectSerializer.serialize(modifiedAfter, "ModifiedAfter");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_154 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_154(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListWorkstreams200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.removePersonFromTeam = function (personId_1, teamId_1, acceptVersion_1, cursor_1, limit_1) {
        return __awaiter(this, arguments, void 0, function (personId, teamId, acceptVersion, cursor, limit, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_155, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/{personId}/teams/{teamId}'
                    .replace('{' + 'personId' + '}', encodeURIComponent(String(personId)))
                    .replace('{' + 'teamId' + '}', encodeURIComponent(String(teamId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (personId === null || personId === undefined) {
                    throw new Error('Required parameter personId was null or undefined when calling removePersonFromTeam.');
                }
                if (teamId === null || teamId === undefined) {
                    throw new Error('Required parameter teamId was null or undefined when calling removePersonFromTeam.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling removePersonFromTeam.');
                }
                if (cursor !== undefined) {
                    localVarQueryParameters['cursor'] = models_1.ObjectSerializer.serialize(cursor, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_155 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_155(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.removePersonSkill = function (personId_1, skillId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (personId, skillId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_156, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/{personId}/skills/{skillId}'
                    .replace('{' + 'personId' + '}', encodeURIComponent(String(personId)))
                    .replace('{' + 'skillId' + '}', encodeURIComponent(String(skillId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (personId === null || personId === undefined) {
                    throw new Error('Required parameter personId was null or undefined when calling removePersonSkill.');
                }
                if (skillId === null || skillId === undefined) {
                    throw new Error('Required parameter skillId was null or undefined when calling removePersonSkill.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling removePersonSkill.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_156 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_156(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.removePlaceholderFromTeam = function (placeholderId_1, teamId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (placeholderId, teamId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_157, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/placeholders/{placeholderId}/teams/{teamId}'
                    .replace('{' + 'placeholderId' + '}', encodeURIComponent(String(placeholderId)))
                    .replace('{' + 'teamId' + '}', encodeURIComponent(String(teamId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (placeholderId === null || placeholderId === undefined) {
                    throw new Error('Required parameter placeholderId was null or undefined when calling removePlaceholderFromTeam.');
                }
                if (teamId === null || teamId === undefined) {
                    throw new Error('Required parameter teamId was null or undefined when calling removePlaceholderFromTeam.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling removePlaceholderFromTeam.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_157 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_157(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.removePlaceholderSkill = function (placeholderId_1, skillId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (placeholderId, skillId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_158, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/placeholders/{placeholderId}/skills/{skillId}'
                    .replace('{' + 'placeholderId' + '}', encodeURIComponent(String(placeholderId)))
                    .replace('{' + 'skillId' + '}', encodeURIComponent(String(skillId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (placeholderId === null || placeholderId === undefined) {
                    throw new Error('Required parameter placeholderId was null or undefined when calling removePlaceholderSkill.');
                }
                if (skillId === null || skillId === undefined) {
                    throw new Error('Required parameter skillId was null or undefined when calling removePlaceholderSkill.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling removePlaceholderSkill.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_158 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_158(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.removeProjectTagFromProject = function (projectTagId_1, projectId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (projectTagId, projectId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_159, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/project-tags/{projectTagId}/project/{projectId}'
                    .replace('{' + 'projectTagId' + '}', encodeURIComponent(String(projectTagId)))
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectTagId === null || projectTagId === undefined) {
                    throw new Error('Required parameter projectTagId was null or undefined when calling removeProjectTagFromProject.');
                }
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling removeProjectTagFromProject.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling removeProjectTagFromProject.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_159 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_159(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.removeViewFromUser = function (userId_1, viewId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (userId, viewId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_160, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/users/{userId}/views/{viewId}/'
                    .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
                    .replace('{' + 'viewId' + '}', encodeURIComponent(String(viewId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (userId === null || userId === undefined) {
                    throw new Error('Required parameter userId was null or undefined when calling removeViewFromUser.');
                }
                if (viewId === null || viewId === undefined) {
                    throw new Error('Required parameter viewId was null or undefined when calling removeViewFromUser.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling removeViewFromUser.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_160 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_160(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.removeWorkstreamFromProject = function (projectId_1, workstreamId_1, acceptVersion_1) {
        return __awaiter(this, arguments, void 0, function (projectId, workstreamId, acceptVersion, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_161, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/project-workstreams/{workstreamId}/'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)))
                    .replace('{' + 'workstreamId' + '}', encodeURIComponent(String(workstreamId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling removeWorkstreamFromProject.');
                }
                if (workstreamId === null || workstreamId === undefined) {
                    throw new Error('Required parameter workstreamId was null or undefined when calling removeWorkstreamFromProject.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling removeWorkstreamFromProject.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_161 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_161(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ProjectWorkstream");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updateActualTimeEntry = function (acceptVersion_1, actualTimeEntry_1) {
        return __awaiter(this, arguments, void 0, function (acceptVersion, actualTimeEntry, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_162, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/actuals/time-entry';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updateActualTimeEntry.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(actualTimeEntry, "ActualTimeEntry")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_162 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_162(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Actual");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updateCheckboxCustomField = function (checkboxFieldId_1, acceptVersion_1, updateCheckboxCustomFieldRequest_1) {
        return __awaiter(this, arguments, void 0, function (checkboxFieldId, acceptVersion, updateCheckboxCustomFieldRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_163, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/custom-fields/checkbox/{checkboxFieldId}'
                    .replace('{' + 'checkboxFieldId' + '}', encodeURIComponent(String(checkboxFieldId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (checkboxFieldId === null || checkboxFieldId === undefined) {
                    throw new Error('Required parameter checkboxFieldId was null or undefined when calling updateCheckboxCustomField.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updateCheckboxCustomField.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updateCheckboxCustomFieldRequest, "UpdateCheckboxCustomFieldRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_163 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_163(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "CustomFieldCheckbox");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updateClient = function (clientId_1, acceptVersion_1, updateClientRequest_1) {
        return __awaiter(this, arguments, void 0, function (clientId, acceptVersion, updateClientRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_164, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/clients/{clientId}'
                    .replace('{' + 'clientId' + '}', encodeURIComponent(String(clientId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (clientId === null || clientId === undefined) {
                    throw new Error('Required parameter clientId was null or undefined when calling updateClient.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updateClient.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updateClientRequest, "UpdateClientRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_164 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_164(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Client");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updateContract = function (contractId_1, acceptVersion_1, updateContractRequest_1) {
        return __awaiter(this, arguments, void 0, function (contractId, acceptVersion, updateContractRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_165, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/contracts/{contractId}'
                    .replace('{' + 'contractId' + '}', encodeURIComponent(String(contractId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (contractId === null || contractId === undefined) {
                    throw new Error('Required parameter contractId was null or undefined when calling updateContract.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updateContract.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updateContractRequest, "UpdateContractRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_165 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_165(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Contract");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updateDateCustomField = function (dateFieldId_1, acceptVersion_1, updateDateCustomFieldRequest_1) {
        return __awaiter(this, arguments, void 0, function (dateFieldId, acceptVersion, updateDateCustomFieldRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_166, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/custom-fields/date/{dateFieldId}'
                    .replace('{' + 'dateFieldId' + '}', encodeURIComponent(String(dateFieldId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (dateFieldId === null || dateFieldId === undefined) {
                    throw new Error('Required parameter dateFieldId was null or undefined when calling updateDateCustomField.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updateDateCustomField.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updateDateCustomFieldRequest, "UpdateDateCustomFieldRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_166 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_166(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "CustomFieldDate");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updatePeopleTag = function (peopleTagId_1, acceptVersion_1, updatePeopleTagRequest_1) {
        return __awaiter(this, arguments, void 0, function (peopleTagId, acceptVersion, updatePeopleTagRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_167, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people-tags/{peopleTagId}'
                    .replace('{' + 'peopleTagId' + '}', encodeURIComponent(String(peopleTagId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (peopleTagId === null || peopleTagId === undefined) {
                    throw new Error('Required parameter peopleTagId was null or undefined when calling updatePeopleTag.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updatePeopleTag.');
                }
                if (updatePeopleTagRequest === null || updatePeopleTagRequest === undefined) {
                    throw new Error('Required parameter updatePeopleTagRequest was null or undefined when calling updatePeopleTag.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updatePeopleTagRequest, "UpdatePeopleTagRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_167 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_167(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ListPeopleTags200ResponseValuesInner");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updatePerson = function (personId_1, acceptVersion_1, updatePersonRequest_1) {
        return __awaiter(this, arguments, void 0, function (personId, acceptVersion, updatePersonRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_168, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/{personId}'
                    .replace('{' + 'personId' + '}', encodeURIComponent(String(personId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (personId === null || personId === undefined) {
                    throw new Error('Required parameter personId was null or undefined when calling updatePerson.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updatePerson.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updatePersonRequest, "UpdatePersonRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_168 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_168(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Person");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updatePersonCheckboxCustomField = function (personId_1, acceptVersion_1, updatePersonCheckboxCustomFieldRequest_1) {
        return __awaiter(this, arguments, void 0, function (personId, acceptVersion, updatePersonCheckboxCustomFieldRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_169, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/{personId}/custom-fields/checkbox/'
                    .replace('{' + 'personId' + '}', encodeURIComponent(String(personId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (personId === null || personId === undefined) {
                    throw new Error('Required parameter personId was null or undefined when calling updatePersonCheckboxCustomField.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updatePersonCheckboxCustomField.');
                }
                if (updatePersonCheckboxCustomFieldRequest === null || updatePersonCheckboxCustomFieldRequest === undefined) {
                    throw new Error('Required parameter updatePersonCheckboxCustomFieldRequest was null or undefined when calling updatePersonCheckboxCustomField.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updatePersonCheckboxCustomFieldRequest, "UpdatePersonCheckboxCustomFieldRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_169 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_169(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "UpdatePersonCheckboxCustomFieldRequest");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updatePersonDateCustomField = function (personId_1, acceptVersion_1, updatePersonDateCustomFieldRequest_1) {
        return __awaiter(this, arguments, void 0, function (personId, acceptVersion, updatePersonDateCustomFieldRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_170, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/{personId}/custom-fields/date/'
                    .replace('{' + 'personId' + '}', encodeURIComponent(String(personId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (personId === null || personId === undefined) {
                    throw new Error('Required parameter personId was null or undefined when calling updatePersonDateCustomField.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updatePersonDateCustomField.');
                }
                if (updatePersonDateCustomFieldRequest === null || updatePersonDateCustomFieldRequest === undefined) {
                    throw new Error('Required parameter updatePersonDateCustomFieldRequest was null or undefined when calling updatePersonDateCustomField.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updatePersonDateCustomFieldRequest, "UpdatePersonDateCustomFieldRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_170 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_170(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "UpdatePersonDateCustomFieldRequest");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updatePersonSelectCustomField = function (personId_1, acceptVersion_1, updatePersonSelectCustomFieldRequest_1) {
        return __awaiter(this, arguments, void 0, function (personId, acceptVersion, updatePersonSelectCustomFieldRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_171, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/{personId}/custom-fields/select/'
                    .replace('{' + 'personId' + '}', encodeURIComponent(String(personId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (personId === null || personId === undefined) {
                    throw new Error('Required parameter personId was null or undefined when calling updatePersonSelectCustomField.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updatePersonSelectCustomField.');
                }
                if (updatePersonSelectCustomFieldRequest === null || updatePersonSelectCustomFieldRequest === undefined) {
                    throw new Error('Required parameter updatePersonSelectCustomFieldRequest was null or undefined when calling updatePersonSelectCustomField.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updatePersonSelectCustomFieldRequest, "UpdatePersonSelectCustomFieldRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_171 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_171(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "UpdatePersonSelectCustomFieldRequest");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updatePersonSkill = function (personId_1, skillId_1, acceptVersion_1, updatePersonSkillRequest_1) {
        return __awaiter(this, arguments, void 0, function (personId, skillId, acceptVersion, updatePersonSkillRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_172, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/{personId}/skills/{skillId}'
                    .replace('{' + 'personId' + '}', encodeURIComponent(String(personId)))
                    .replace('{' + 'skillId' + '}', encodeURIComponent(String(skillId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (personId === null || personId === undefined) {
                    throw new Error('Required parameter personId was null or undefined when calling updatePersonSkill.');
                }
                if (skillId === null || skillId === undefined) {
                    throw new Error('Required parameter skillId was null or undefined when calling updatePersonSkill.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updatePersonSkill.');
                }
                if (updatePersonSkillRequest === null || updatePersonSkillRequest === undefined) {
                    throw new Error('Required parameter updatePersonSkillRequest was null or undefined when calling updatePersonSkill.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updatePersonSkillRequest, "UpdatePersonSkillRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_172 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_172(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Competency");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updatePersonTextCustomField = function (personId_1, acceptVersion_1, updatePersonTextCustomFieldRequest_1) {
        return __awaiter(this, arguments, void 0, function (personId, acceptVersion, updatePersonTextCustomFieldRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_173, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/people/{personId}/custom-fields/text/'
                    .replace('{' + 'personId' + '}', encodeURIComponent(String(personId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (personId === null || personId === undefined) {
                    throw new Error('Required parameter personId was null or undefined when calling updatePersonTextCustomField.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updatePersonTextCustomField.');
                }
                if (updatePersonTextCustomFieldRequest === null || updatePersonTextCustomFieldRequest === undefined) {
                    throw new Error('Required parameter updatePersonTextCustomFieldRequest was null or undefined when calling updatePersonTextCustomField.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updatePersonTextCustomFieldRequest, "UpdatePersonTextCustomFieldRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_173 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_173(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "UpdatePersonTextCustomFieldRequest");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updateProject = function (projectId_1, acceptVersion_1, updateProjectRequest_1) {
        return __awaiter(this, arguments, void 0, function (projectId, acceptVersion, updateProjectRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_174, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling updateProject.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updateProject.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updateProjectRequest, "UpdateProjectRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_174 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_174(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Project");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updateProjectBudgetRole = function (projectId_1, roleId_1, acceptVersion_1, updateProjectBudgetRoleRequest_1) {
        return __awaiter(this, arguments, void 0, function (projectId, roleId, acceptVersion, updateProjectBudgetRoleRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_175, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/budget-roles/{roleId}'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)))
                    .replace('{' + 'roleId' + '}', encodeURIComponent(String(roleId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling updateProjectBudgetRole.');
                }
                if (roleId === null || roleId === undefined) {
                    throw new Error('Required parameter roleId was null or undefined when calling updateProjectBudgetRole.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updateProjectBudgetRole.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updateProjectBudgetRoleRequest, "UpdateProjectBudgetRoleRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_175 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_175(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ProjectBudgetRole");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updateProjectCheckboxCustomField = function (projectId_1, acceptVersion_1, updatePersonCheckboxCustomFieldRequest_1) {
        return __awaiter(this, arguments, void 0, function (projectId, acceptVersion, updatePersonCheckboxCustomFieldRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_176, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/custom-fields/checkbox/'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling updateProjectCheckboxCustomField.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updateProjectCheckboxCustomField.');
                }
                if (updatePersonCheckboxCustomFieldRequest === null || updatePersonCheckboxCustomFieldRequest === undefined) {
                    throw new Error('Required parameter updatePersonCheckboxCustomFieldRequest was null or undefined when calling updateProjectCheckboxCustomField.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updatePersonCheckboxCustomFieldRequest, "UpdatePersonCheckboxCustomFieldRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_176 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_176(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "UpdatePersonCheckboxCustomFieldRequest");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updateProjectDateCustomField = function (projectId_1, acceptVersion_1, updatePersonDateCustomFieldRequest_1) {
        return __awaiter(this, arguments, void 0, function (projectId, acceptVersion, updatePersonDateCustomFieldRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_177, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/custom-fields/date/'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling updateProjectDateCustomField.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updateProjectDateCustomField.');
                }
                if (updatePersonDateCustomFieldRequest === null || updatePersonDateCustomFieldRequest === undefined) {
                    throw new Error('Required parameter updatePersonDateCustomFieldRequest was null or undefined when calling updateProjectDateCustomField.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updatePersonDateCustomFieldRequest, "UpdatePersonDateCustomFieldRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_177 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_177(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "UpdatePersonDateCustomFieldRequest");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updateProjectMilestone = function (projectId_1, milestoneId_1, acceptVersion_1, updateProjectMilestoneRequest_1) {
        return __awaiter(this, arguments, void 0, function (projectId, milestoneId, acceptVersion, updateProjectMilestoneRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_178, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/milestones/{milestoneId}'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)))
                    .replace('{' + 'milestoneId' + '}', encodeURIComponent(String(milestoneId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling updateProjectMilestone.');
                }
                if (milestoneId === null || milestoneId === undefined) {
                    throw new Error('Required parameter milestoneId was null or undefined when calling updateProjectMilestone.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updateProjectMilestone.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updateProjectMilestoneRequest, "UpdateProjectMilestoneRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_178 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_178(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Milestone");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updateProjectOtherExpense = function (projectId_1, otherExpenseId_1, acceptVersion_1, projectOtherExpense1_1) {
        return __awaiter(this, arguments, void 0, function (projectId, otherExpenseId, acceptVersion, projectOtherExpense1, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_179, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/other-expenses/{otherExpenseId}/'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)))
                    .replace('{' + 'otherExpenseId' + '}', encodeURIComponent(String(otherExpenseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling updateProjectOtherExpense.');
                }
                if (otherExpenseId === null || otherExpenseId === undefined) {
                    throw new Error('Required parameter otherExpenseId was null or undefined when calling updateProjectOtherExpense.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updateProjectOtherExpense.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(projectOtherExpense1, "ProjectOtherExpense1")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_179 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_179(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ProjectOtherExpense");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updateProjectPersonRequest = function (projectId_1, personRequestId_1, acceptVersion_1, updateProjectPersonRequestRequest_1) {
        return __awaiter(this, arguments, void 0, function (projectId, personRequestId, acceptVersion, updateProjectPersonRequestRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_180, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/person-requests/{personRequestId}'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)))
                    .replace('{' + 'personRequestId' + '}', encodeURIComponent(String(personRequestId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling updateProjectPersonRequest.');
                }
                if (personRequestId === null || personRequestId === undefined) {
                    throw new Error('Required parameter personRequestId was null or undefined when calling updateProjectPersonRequest.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updateProjectPersonRequest.');
                }
                if (updateProjectPersonRequestRequest === null || updateProjectPersonRequestRequest === undefined) {
                    throw new Error('Required parameter updateProjectPersonRequestRequest was null or undefined when calling updateProjectPersonRequest.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updateProjectPersonRequestRequest, "UpdateProjectPersonRequestRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_180 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_180(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "UpdateProjectPersonRequest200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updateProjectPhase = function (projectId_1, phaseId_1, acceptVersion_1, updateProjectPhaseRequest_1) {
        return __awaiter(this, arguments, void 0, function (projectId, phaseId, acceptVersion, updateProjectPhaseRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_181, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/phases/{phaseId}'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)))
                    .replace('{' + 'phaseId' + '}', encodeURIComponent(String(phaseId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling updateProjectPhase.');
                }
                if (phaseId === null || phaseId === undefined) {
                    throw new Error('Required parameter phaseId was null or undefined when calling updateProjectPhase.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updateProjectPhase.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updateProjectPhaseRequest, "UpdateProjectPhaseRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_181 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_181(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ProjectPhase");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updateProjectRoleRate = function (projectId_1, projectRateId_1, acceptVersion_1, updateProjectRoleRateRequest_1) {
        return __awaiter(this, arguments, void 0, function (projectId, projectRateId, acceptVersion, updateProjectRoleRateRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_182, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/project-rates/{projectRateId}/'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)))
                    .replace('{' + 'projectRateId' + '}', encodeURIComponent(String(projectRateId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling updateProjectRoleRate.');
                }
                if (projectRateId === null || projectRateId === undefined) {
                    throw new Error('Required parameter projectRateId was null or undefined when calling updateProjectRoleRate.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updateProjectRoleRate.');
                }
                if (updateProjectRoleRateRequest === null || updateProjectRoleRateRequest === undefined) {
                    throw new Error('Required parameter updateProjectRoleRateRequest was null or undefined when calling updateProjectRoleRate.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updateProjectRoleRateRequest, "UpdateProjectRoleRateRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_182 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_182(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ProjectRate");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updateProjectSelectCustomField = function (projectId_1, acceptVersion_1, updatePersonSelectCustomFieldRequest_1) {
        return __awaiter(this, arguments, void 0, function (projectId, acceptVersion, updatePersonSelectCustomFieldRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_183, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/custom-fields/select/'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling updateProjectSelectCustomField.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updateProjectSelectCustomField.');
                }
                if (updatePersonSelectCustomFieldRequest === null || updatePersonSelectCustomFieldRequest === undefined) {
                    throw new Error('Required parameter updatePersonSelectCustomFieldRequest was null or undefined when calling updateProjectSelectCustomField.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updatePersonSelectCustomFieldRequest, "UpdatePersonSelectCustomFieldRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_183 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_183(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "UpdatePersonSelectCustomFieldRequest");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updateProjectTag = function (projectTagId_1, acceptVersion_1, updatePeopleTagRequest_1) {
        return __awaiter(this, arguments, void 0, function (projectTagId, acceptVersion, updatePeopleTagRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_184, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/project-tags/{projectTagId}'
                    .replace('{' + 'projectTagId' + '}', encodeURIComponent(String(projectTagId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectTagId === null || projectTagId === undefined) {
                    throw new Error('Required parameter projectTagId was null or undefined when calling updateProjectTag.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updateProjectTag.');
                }
                if (updatePeopleTagRequest === null || updatePeopleTagRequest === undefined) {
                    throw new Error('Required parameter updatePeopleTagRequest was null or undefined when calling updateProjectTag.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updatePeopleTagRequest, "UpdatePeopleTagRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_184 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_184(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "ProjectTag");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updateProjectTextCustomField = function (projectId_1, acceptVersion_1, updatePersonTextCustomFieldRequest_1) {
        return __awaiter(this, arguments, void 0, function (projectId, acceptVersion, updatePersonTextCustomFieldRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_185, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/custom-fields/text/'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling updateProjectTextCustomField.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updateProjectTextCustomField.');
                }
                if (updatePersonTextCustomFieldRequest === null || updatePersonTextCustomFieldRequest === undefined) {
                    throw new Error('Required parameter updatePersonTextCustomFieldRequest was null or undefined when calling updateProjectTextCustomField.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updatePersonTextCustomFieldRequest, "UpdatePersonTextCustomFieldRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_185 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_185(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "UpdatePersonTextCustomFieldRequest");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updateProjectTimesheetLock = function (projectId_1, acceptVersion_1, updateProjectTimesheetLockRequest_1) {
        return __awaiter(this, arguments, void 0, function (projectId, acceptVersion, updateProjectTimesheetLockRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_186, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/projects/{projectId}/timesheet-lock/'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling updateProjectTimesheetLock.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updateProjectTimesheetLock.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updateProjectTimesheetLockRequest, "UpdateProjectTimesheetLockRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_186 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_186(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "GetProjectTimesheetLock200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updateRole = function (roleId_1, acceptVersion_1, updateRoleRequest_1) {
        return __awaiter(this, arguments, void 0, function (roleId, acceptVersion, updateRoleRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_187, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/roles/{roleId}'
                    .replace('{' + 'roleId' + '}', encodeURIComponent(String(roleId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (roleId === null || roleId === undefined) {
                    throw new Error('Required parameter roleId was null or undefined when calling updateRole.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updateRole.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updateRoleRequest, "UpdateRoleRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_187 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_187(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Role");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updateSelectCustomField = function (selectFieldId_1, acceptVersion_1, updateCheckboxCustomFieldRequest_1) {
        return __awaiter(this, arguments, void 0, function (selectFieldId, acceptVersion, updateCheckboxCustomFieldRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_188, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/custom-fields/select/{selectFieldId}'
                    .replace('{' + 'selectFieldId' + '}', encodeURIComponent(String(selectFieldId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (selectFieldId === null || selectFieldId === undefined) {
                    throw new Error('Required parameter selectFieldId was null or undefined when calling updateSelectCustomField.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updateSelectCustomField.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updateCheckboxCustomFieldRequest, "UpdateCheckboxCustomFieldRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_188 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_188(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "CustomFieldSelect");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updateSelectCustomFieldOption = function (selectFieldId_1, selectOptionId_1, acceptVersion_1, updateSelectCustomFieldOptionRequest_1) {
        return __awaiter(this, arguments, void 0, function (selectFieldId, selectOptionId, acceptVersion, updateSelectCustomFieldOptionRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_189, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/custom-fields/select/{selectFieldId}/options/{selectOptionId}'
                    .replace('{' + 'selectFieldId' + '}', encodeURIComponent(String(selectFieldId)))
                    .replace('{' + 'selectOptionId' + '}', encodeURIComponent(String(selectOptionId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (selectFieldId === null || selectFieldId === undefined) {
                    throw new Error('Required parameter selectFieldId was null or undefined when calling updateSelectCustomFieldOption.');
                }
                if (selectOptionId === null || selectOptionId === undefined) {
                    throw new Error('Required parameter selectOptionId was null or undefined when calling updateSelectCustomFieldOption.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updateSelectCustomFieldOption.');
                }
                if (updateSelectCustomFieldOptionRequest === null || updateSelectCustomFieldOptionRequest === undefined) {
                    throw new Error('Required parameter updateSelectCustomFieldOptionRequest was null or undefined when calling updateSelectCustomFieldOption.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updateSelectCustomFieldOptionRequest, "UpdateSelectCustomFieldOptionRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_189 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_189(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "UpdateSelectCustomFieldOption200Response");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updateSkill = function (skillId_1, acceptVersion_1, updateSelectCustomFieldOptionRequest_1) {
        return __awaiter(this, arguments, void 0, function (skillId, acceptVersion, updateSelectCustomFieldOptionRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_190, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/skills/{skillId}'
                    .replace('{' + 'skillId' + '}', encodeURIComponent(String(skillId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (skillId === null || skillId === undefined) {
                    throw new Error('Required parameter skillId was null or undefined when calling updateSkill.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updateSkill.');
                }
                if (updateSelectCustomFieldOptionRequest === null || updateSelectCustomFieldOptionRequest === undefined) {
                    throw new Error('Required parameter updateSelectCustomFieldOptionRequest was null or undefined when calling updateSkill.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updateSelectCustomFieldOptionRequest, "UpdateSelectCustomFieldOptionRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_190 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_190(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Skill");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updateTeam = function (teamId_1, acceptVersion_1, updateSelectCustomFieldOptionRequest_1) {
        return __awaiter(this, arguments, void 0, function (teamId, acceptVersion, updateSelectCustomFieldOptionRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_191, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/teams/{teamId}/'
                    .replace('{' + 'teamId' + '}', encodeURIComponent(String(teamId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (teamId === null || teamId === undefined) {
                    throw new Error('Required parameter teamId was null or undefined when calling updateTeam.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updateTeam.');
                }
                if (updateSelectCustomFieldOptionRequest === null || updateSelectCustomFieldOptionRequest === undefined) {
                    throw new Error('Required parameter updateSelectCustomFieldOptionRequest was null or undefined when calling updateTeam.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updateSelectCustomFieldOptionRequest, "UpdateSelectCustomFieldOptionRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_191 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_191(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Team");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updateTextCustomField = function (textFieldId_1, acceptVersion_1, updateCheckboxCustomFieldRequest_1) {
        return __awaiter(this, arguments, void 0, function (textFieldId, acceptVersion, updateCheckboxCustomFieldRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_192, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/custom-fields/text/{textFieldId}'
                    .replace('{' + 'textFieldId' + '}', encodeURIComponent(String(textFieldId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (textFieldId === null || textFieldId === undefined) {
                    throw new Error('Required parameter textFieldId was null or undefined when calling updateTextCustomField.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updateTextCustomField.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updateCheckboxCustomFieldRequest, "UpdateCheckboxCustomFieldRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_192 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_192(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "CustomFieldText");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DefaultApi.prototype.updateWorkstream = function (workstreamId_1, acceptVersion_1, updateWorkstreamRequest_1) {
        return __awaiter(this, arguments, void 0, function (workstreamId, acceptVersion, updateWorkstreamRequest, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_193, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/workstreams/{workstreamId}/'
                    .replace('{' + 'workstreamId' + '}', encodeURIComponent(String(workstreamId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (workstreamId === null || workstreamId === undefined) {
                    throw new Error('Required parameter workstreamId was null or undefined when calling updateWorkstream.');
                }
                if (acceptVersion === null || acceptVersion === undefined) {
                    throw new Error('Required parameter acceptVersion was null or undefined when calling updateWorkstream.');
                }
                localVarHeaderParams['accept-version'] = models_1.ObjectSerializer.serialize(acceptVersion, "'1.0.0'");
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(updateWorkstreamRequest, "UpdateWorkstreamRequest")
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.bearerAuth.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                }
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_193 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_193(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Workstream");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    return DefaultApi;
}());
exports.DefaultApi = DefaultApi;
//# sourceMappingURL=defaultApi.js.map