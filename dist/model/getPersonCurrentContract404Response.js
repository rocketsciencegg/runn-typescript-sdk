"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPersonCurrentContract404Response = void 0;
var GetPersonCurrentContract404Response = (function () {
    function GetPersonCurrentContract404Response() {
    }
    GetPersonCurrentContract404Response.getAttributeTypeMap = function () {
        return GetPersonCurrentContract404Response.attributeTypeMap;
    };
    GetPersonCurrentContract404Response.discriminator = undefined;
    GetPersonCurrentContract404Response.attributeTypeMap = [
        {
            "name": "error",
            "baseName": "error",
            "type": "GetPersonCurrentContract404Response.ErrorEnum"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "GetPersonCurrentContract404Response.StatusCodeEnum"
        }
    ];
    return GetPersonCurrentContract404Response;
}());
exports.GetPersonCurrentContract404Response = GetPersonCurrentContract404Response;
(function (GetPersonCurrentContract404Response) {
    var ErrorEnum;
    (function (ErrorEnum) {
        ErrorEnum[ErrorEnum["NotFound"] = 'Not Found'] = "NotFound";
    })(ErrorEnum = GetPersonCurrentContract404Response.ErrorEnum || (GetPersonCurrentContract404Response.ErrorEnum = {}));
    var StatusCodeEnum;
    (function (StatusCodeEnum) {
        StatusCodeEnum[StatusCodeEnum["NUMBER_404"] = 404] = "NUMBER_404";
    })(StatusCodeEnum = GetPersonCurrentContract404Response.StatusCodeEnum || (GetPersonCurrentContract404Response.StatusCodeEnum = {}));
})(GetPersonCurrentContract404Response || (exports.GetPersonCurrentContract404Response = GetPersonCurrentContract404Response = {}));
//# sourceMappingURL=getPersonCurrentContract404Response.js.map