"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var frameworks = __importStar(require("./frameworks"));
exports.PARAM_KEY = 'storybookGrid';
exports.ADDON_ID = "storybookjs/" + exports.PARAM_KEY;
exports.PANEL_ID = exports.ADDON_ID + "/panel";
exports.PARAMETERS = {
    name: 'withGrid',
    parameterName: exports.PARAM_KEY,
    skipIfNoParametersOrOptions: false
};
exports.FRAMEWORKS = {
    aem: frameworks.aem,
    bootstrap: frameworks.bootstrap,
    foundation: frameworks.foundation,
};
