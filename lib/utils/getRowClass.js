"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getRowClass = function (framework, parameters) {
    console.log('getRowClass, framework, parameters:', framework, parameters);
    // get global settings
    if (!framework)
        return false;
    var classes = [];
    if (framework.hasOwnProperty('globals') &&
        framework.globals.hasOwnProperty('rowSettings')) {
        framework.globals.rowSettings.map(function (settings) {
            if (settings.hasOwnProperty('options')) {
                settings.options.map(function (option) {
                    if (option.id === settings.defaultValue) {
                        classes.push(option.value);
                    }
                });
            }
        });
    }
    // get breakpoint settings
    // concatenate and return
    return classes.join(' ');
};
exports.default = getRowClass;
