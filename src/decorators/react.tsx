import React from 'react';
import { PARAMETERS, FRAMEWORKS } from '../constants';
import { makeDecorator } from '@storybook/addons';
import getDefaultValues from '../utils/getDefaultValues';

const Wrapper = (getStory, context, { options, parameters }) => {

    if (
        parameters === null ||
        !parameters.hasOwnProperty('framework') ||
        FRAMEWORKS[parameters.framework.toLowerCase()] === undefined
    ) {
        return getStory(context);
    } else {
        const framework = FRAMEWORKS[parameters.framework.toLowerCase()]
        console.log('framework', framework);
        const containerClass = getDefaultValues(framework, 'containerSettings');
        const rowClass = getDefaultValues(framework, 'rowSettings');
        const columnClass = getDefaultValues(framework, 'columnSettings');
        if (!containerClass) {
            return (
                <div className={rowClass}>
                    <div className={columnClass}>{getStory(context)}</div>
                </div>
            )
        }
        return (
            <div className={containerClass}>
                <div className={rowClass}>
                    <div className={columnClass}>{getStory(context)}</div>
                </div>
            </div>
        )
    }
}

export default makeDecorator({
    ...PARAMETERS,
    wrapper: Wrapper
});