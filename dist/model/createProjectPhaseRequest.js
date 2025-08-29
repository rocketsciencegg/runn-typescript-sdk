"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProjectPhaseRequest = void 0;
var CreateProjectPhaseRequest = (function () {
    function CreateProjectPhaseRequest() {
        this['color'] = CreateProjectPhaseRequest.ColorEnum._67D0D5;
    }
    CreateProjectPhaseRequest.getAttributeTypeMap = function () {
        return CreateProjectPhaseRequest.attributeTypeMap;
    };
    CreateProjectPhaseRequest.discriminator = undefined;
    CreateProjectPhaseRequest.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "string"
        },
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "string"
        },
        {
            "name": "color",
            "baseName": "color",
            "type": "CreateProjectPhaseRequest.ColorEnum"
        }
    ];
    return CreateProjectPhaseRequest;
}());
exports.CreateProjectPhaseRequest = CreateProjectPhaseRequest;
(function (CreateProjectPhaseRequest) {
    var ColorEnum;
    (function (ColorEnum) {
        ColorEnum[ColorEnum["_67D0D5"] = '#67D0D5'] = "_67D0D5";
        ColorEnum[ColorEnum["Fdcd4F"] = '#FDCD4F'] = "Fdcd4F";
        ColorEnum[ColorEnum["F191Cc"] = '#F191CC'] = "F191Cc";
        ColorEnum[ColorEnum["B19De6"] = '#B19DE6'] = "B19De6";
        ColorEnum[ColorEnum["_9Ce277"] = '#9CE277'] = "_9Ce277";
        ColorEnum[ColorEnum["Cd97Da"] = '#CD97DA'] = "Cd97Da";
        ColorEnum[ColorEnum["_84Dba0"] = '#84DBA0'] = "_84Dba0";
        ColorEnum[ColorEnum["Ffb077"] = '#FFB077'] = "Ffb077";
        ColorEnum[ColorEnum["_9Cc5Bf"] = '#9CC5BF'] = "_9Cc5Bf";
        ColorEnum[ColorEnum["E8C681"] = '#E8C681'] = "E8C681";
        ColorEnum[ColorEnum["_6899F1"] = '#6899F1'] = "_6899F1";
        ColorEnum[ColorEnum["Ddae9F"] = '#DDAE9F'] = "Ddae9F";
    })(ColorEnum = CreateProjectPhaseRequest.ColorEnum || (CreateProjectPhaseRequest.ColorEnum = {}));
})(CreateProjectPhaseRequest || (exports.CreateProjectPhaseRequest = CreateProjectPhaseRequest = {}));
//# sourceMappingURL=createProjectPhaseRequest.js.map