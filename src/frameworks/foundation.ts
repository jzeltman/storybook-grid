export default {
    name: 'Foundation XY Grid',
    cssFiles: [],
    globals: {
        containerSettings: [
            {
                id: 'Grid Container',
                label: 'Grid Container',
                defaultValue: 0,
                description: '',
                options: [
                    {
                        id: 0,
                        label: 'Grid Container',
                        value: 'grid-container',
                    },
                    {
                        id: 1,
                        label: 'Fluid Grid Container',
                        value: 'grid-container fluid',
                    },
                    {
                        id: 2,
                        label: 'Full Width Grid Container',
                        value: 'grid-container full',
                    },
                ]
            }
        ],
        rowSettings: [
            {
                id: 'Grid Type',
                label: 'Grid Type',
                defaultValue: 0,
                description: '',
                options: [
                    {
                        id: 0,
                        label: 'Horizontal Grid',
                        value: 'grid-x',
                    },
                    {
                        id: 1,
                        label: 'Vertical Grid',
                        value: 'grid-y',
                    },
                    {
                        id: 2,
                        label: 'Grid Frame',
                        value: 'grid-y grid-frame',
                    },
                ]
            },
            {
                id: 'Gutters',
                label: 'Gutters',
                defaultValue: 1,
                description: '',
                options: [
                    {
                        id: 0,
                        label: 'No Gutters',
                        value: '',
                    },
                    {
                        id: 1,
                        label: 'Horizontal Gutters from Margin',
                        value: 'grid-margin-x',
                    },
                    {
                        id: 2,
                        label: 'Horizontal Gutters from Padding',
                        value: 'grid-padding-x',
                    },
                    {
                        id: 3,
                        label: 'Vertical Gutters from Margin',
                        value: 'grid-margin-y',
                    },
                    {
                        id: 4,
                        label: 'Vertical Gutters from Padding',
                        value: 'grid-padding-y',
                    },
                ]
            },
        ],
        columnSettings: [
            {
                id: 'Column Cell',
                label: 'Column Cell',
                defaultValue: 0,
                description: '',
                options: [
                    {
                        id: 0,
                        label: 'Cell',
                        value: 'cell',
                    }
                ]
            },
            {
                id: 'Sizing',
                label: 'Sizing',
                defaultValue: 0,
                description: '',
                options: [
                    {
                        id: 0,
                        label: 'None',
                        value: '',
                    },
                    {
                        id: 1,
                        label: 'Auto',
                        value: 'auto',
                    },
                    {
                        id: 2,
                        label: 'Shrink',
                        value: 'shrink',
                    }
                ]
            }
        ],
    },
    breakpoints: [
        {
            name: 'Small',
            settings: {
                containerSettings: [],
                rowSettings: [],
                columnSettings: [
                    {
                        id: 'Cells',
                        label: 'Cells',
                        defaultValue: 4,
                        description: '',
                        options: [
                            {
                                id: 0,
                                label: 'None',
                                value: '',
                            },
                            {
                                id: 1,
                                label: 'Small-1',
                                value: 'small-1',
                            },
                            {
                                id: 2,
                                label: 'Small-2',
                                value: 'small-2',
                            },
                            {
                                id: 3,
                                label: 'Small-3',
                                value: 'small-3',
                            },
                            {
                                id: 4,
                                label: 'Small-4',
                                value: 'small-4',
                            },
                            {
                                id: 5,
                                label: 'Small-5',
                                value: 'small-5',
                            },
                            {
                                id: 6,
                                label: 'Small-6',
                                value: 'small-6',
                            },
                            {
                                id: 7,
                                label: 'Small-7',
                                value: 'small-7',
                            },
                            {
                                id: 8,
                                label: 'Small-8',
                                value: 'small-8',
                            },
                            {
                                id: 9,
                                label: 'Small-9',
                                value: 'small-9',
                            },
                            {
                                id: 10,
                                label: 'Small-10',
                                value: 'small-10',
                            },
                            {
                                id: 11,
                                label: 'Small-11',
                                value: 'small-11',
                            },
                            {
                                id: 12,
                                label: 'Small-12',
                                value: 'small-12',
                            },
                        ]
                    },
                ],
            }
        },
        {
            name: 'medium',
            settings: {
                containerSettings: [],
                rowSettings: [],
                columnSettings: [
                    {
                        id: 'Cells',
                        label: 'Cells',
                        defaultValue: 9,
                        description: '',
                        options: [
                            {
                                id: 0,
                                label: 'None',
                                value: '',
                            },
                            {
                                id: 1,
                                label: 'Medium-1',
                                value: 'medium-1',
                            },
                            {
                                id: 2,
                                label: 'Medium-2',
                                value: 'medium-2',
                            },
                            {
                                id: 3,
                                label: 'Medium-3',
                                value: 'medium-3',
                            },
                            {
                                id: 4,
                                label: 'Medium-4',
                                value: 'medium-4',
                            },
                            {
                                id: 5,
                                label: 'Medium-5',
                                value: 'medium-5',
                            },
                            {
                                id: 6,
                                label: 'Medium-6',
                                value: 'medium-6',
                            },
                            {
                                id: 7,
                                label: 'Medium-7',
                                value: 'medium-7',
                            },
                            {
                                id: 8,
                                label: 'Medium-8',
                                value: 'medium-8',
                            },
                            {
                                id: 9,
                                label: 'Medium-9',
                                value: 'medium-9',
                            },
                            {
                                id: 10,
                                label: 'Medium-10',
                                value: 'medium-10',
                            },
                            {
                                id: 11,
                                label: 'Medium-11',
                                value: 'medium-11',
                            },
                            {
                                id: 12,
                                label: 'Medium-12',
                                value: 'medium-12',
                            },
                        ]
                    },
                ],
            }
        },
        {
            name: 'large',
            settings: {
                containerSettings: [],
                rowSettings: [],
                columnSettings: [
                    {
                        id: 'Cells',
                        label: 'Cells',
                        defaultValue: 6,
                        description: '',
                        options: [
                            {
                                id: 0,
                                label: 'None',
                                value: '',
                            },
                            {
                                id: 1,
                                label: 'Large-1',
                                value: 'large-1',
                            },
                            {
                                id: 2,
                                label: 'Large-2',
                                value: 'large-2',
                            },
                            {
                                id: 3,
                                label: 'Large-3',
                                value: 'large-3',
                            },
                            {
                                id: 4,
                                label: 'Large-4',
                                value: 'large-4',
                            },
                            {
                                id: 5,
                                label: 'Large-5',
                                value: 'large-5',
                            },
                            {
                                id: 6,
                                label: 'Large-6',
                                value: 'large-6',
                            },
                            {
                                id: 7,
                                label: 'Large-7',
                                value: 'large-7',
                            },
                            {
                                id: 8,
                                label: 'Large-8',
                                value: 'large-8',
                            },
                            {
                                id: 9,
                                label: 'Large-9',
                                value: 'large-9',
                            },
                            {
                                id: 10,
                                label: 'Large-10',
                                value: 'large-10',
                            },
                            {
                                id: 11,
                                label: 'Large-11',
                                value: 'large-11',
                            },
                            {
                                id: 12,
                                label: 'Large-12',
                                value: 'large-12',
                            },
                        ]
                    }
                ]
            }
        }
    ]
}