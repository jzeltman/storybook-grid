"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var constants_1 = require("../constants");
var addons_1 = require("@storybook/addons");
var getDefaultValues_1 = __importDefault(require("../utils/getDefaultValues"));
var Wrapper = function (getStory, context, _a) {
    var options = _a.options, parameters = _a.parameters;
    if (parameters === null ||
        !parameters.hasOwnProperty('framework') ||
        constants_1.FRAMEWORKS[parameters.framework.toLowerCase()] === undefined) {
        return getStory(context);
    }
    else {
        var framework = constants_1.FRAMEWORKS[parameters.framework.toLowerCase()];
        console.log('framework', framework);
        var containerClass = getDefaultValues_1.default(framework, 'containerSettings');
        var rowClass = getDefaultValues_1.default(framework, 'rowSettings');
        var columnClass = getDefaultValues_1.default(framework, 'columnSettings');
        if (!containerClass) {
            return (react_1.default.createElement("div", { className: rowClass },
                react_1.default.createElement("div", { className: columnClass }, getStory(context))));
        }
        return (react_1.default.createElement("div", { className: containerClass },
            react_1.default.createElement("div", { className: rowClass },
                react_1.default.createElement("div", { className: columnClass }, getStory(context)))));
    }
};
exports.default = addons_1.makeDecorator(__assign(__assign({}, constants_1.PARAMETERS), { wrapper: Wrapper }));
