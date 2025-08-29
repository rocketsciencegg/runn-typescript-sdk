"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = void 0;
var NotFound = (function () {
    function NotFound() {
    }
    NotFound.getAttributeTypeMap = function () {
        return NotFound.attributeTypeMap;
    };
    NotFound.discriminator = undefined;
    NotFound.attributeTypeMap = [
        {
            "name": "error",
            "baseName": "error",
            "type": "NotFound.ErrorEnum"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "NotFound.StatusCodeEnum"
        }
    ];
    return NotFound;
}());
exports.NotFound = NotFound;
(function (NotFound) {
    var ErrorEnum;
    (function (ErrorEnum) {
        ErrorEnum[ErrorEnum["NotFound"] = 'Not Found'] = "NotFound";
    })(ErrorEnum = NotFound.ErrorEnum || (NotFound.ErrorEnum = {}));
    var StatusCodeEnum;
    (function (StatusCodeEnum) {
        StatusCodeEnum[StatusCodeEnum["NUMBER_404"] = 404] = "NUMBER_404";
    })(StatusCodeEnum = NotFound.StatusCodeEnum || (NotFound.StatusCodeEnum = {}));
})(NotFound || (exports.NotFound = NotFound = {}));
//# sourceMappingURL=notFound.js.map