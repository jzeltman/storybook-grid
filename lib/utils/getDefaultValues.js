"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getDefaultValues = function (framework, settingsType) {
    if (!framework)
        return '';
    var classes = [];
    if (framework.hasOwnProperty('globals') &&
        framework.globals.hasOwnProperty(settingsType)) {
        framework.globals[settingsType].map(function (settings) {
            if (settings.hasOwnProperty('options')) {
                settings.options.map(function (option) {
                    if (option.id === settings.defaultValue) {
                        classes.push(option.value);
                    }
                });
            }
        });
    }
    if (framework.hasOwnProperty('breakpoints')) {
        framework.breakpoints.map(function (breakpoint) {
            if (breakpoint.settings.hasOwnProperty(settingsType)) {
                breakpoint.settings[settingsType].map(function (breakpointSettings) {
                    if (breakpointSettings.hasOwnProperty('options')) {
                        breakpointSettings.options.map(function (option) {
                            if (option.id === breakpointSettings.defaultValue) {
                                classes.push(option.value);
                            }
                        });
                    }
                });
            }
        });
    }
    return classes.join(' ');
};
exports.default = getDefaultValues;
