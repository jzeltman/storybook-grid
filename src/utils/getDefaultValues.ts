const getDefaultValues = (framework, settingsType) => {
    if (!framework) return '';

    let classes = [];

    if (framework.hasOwnProperty('globals') &&
        framework.globals.hasOwnProperty(settingsType)
    ) {
        framework.globals[settingsType].map(settings => {
            if (settings.hasOwnProperty('options')) {
                settings.options.map(option => {
                    if (option.id === settings.defaultValue) {
                        classes.push(option.value)
                    }
                })
            }
        });
    }

    if (framework.hasOwnProperty('breakpoints')) {
        framework.breakpoints.map(breakpoint => {
            if (breakpoint.settings.hasOwnProperty(settingsType)) {
                breakpoint.settings[settingsType].map(breakpointSettings => {
                    if (breakpointSettings.hasOwnProperty('options')) {
                        breakpointSettings.options.map(option => {
                            if (option.id === breakpointSettings.defaultValue) {
                                classes.push(option.value)
                            }
                        })
                    }
                })
            }
        });
    }

    return classes.join(' ');
};

export default getDefaultValues;