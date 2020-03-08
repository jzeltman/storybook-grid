import * as frameworks from './frameworks';

export const PARAM_KEY = 'storybookGrid';
export const ADDON_ID = `storybookjs/${PARAM_KEY}`;
export const PANEL_ID = `${ADDON_ID}/panel`;
export const PARAMETERS = {
    name: 'withGrid',
    parameterName: PARAM_KEY,
    skipIfNoParametersOrOptions: false
};

export const FRAMEWORKS = {
    aem: frameworks.aem,
    bootstrap: frameworks.bootstrap,
    foundation: frameworks.foundation,
}