"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnprocessableEntity = void 0;
var UnprocessableEntity = (function () {
    function UnprocessableEntity() {
    }
    UnprocessableEntity.getAttributeTypeMap = function () {
        return UnprocessableEntity.attributeTypeMap;
    };
    UnprocessableEntity.discriminator = undefined;
    UnprocessableEntity.attributeTypeMap = [
        {
            "name": "error",
            "baseName": "error",
            "type": "UnprocessableEntity.ErrorEnum"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "UnprocessableEntity.StatusCodeEnum"
        }
    ];
    return UnprocessableEntity;
}());
exports.UnprocessableEntity = UnprocessableEntity;
(function (UnprocessableEntity) {
    var ErrorEnum;
    (function (ErrorEnum) {
        ErrorEnum[ErrorEnum["UnprocessableEntity"] = 'Unprocessable Entity'] = "UnprocessableEntity";
    })(ErrorEnum = UnprocessableEntity.ErrorEnum || (UnprocessableEntity.ErrorEnum = {}));
    var StatusCodeEnum;
    (function (StatusCodeEnum) {
        StatusCodeEnum[StatusCodeEnum["NUMBER_422"] = 422] = "NUMBER_422";
    })(StatusCodeEnum = UnprocessableEntity.StatusCodeEnum || (UnprocessableEntity.StatusCodeEnum = {}));
})(UnprocessableEntity || (exports.UnprocessableEntity = UnprocessableEntity = {}));
//# sourceMappingURL=unprocessableEntity.js.map