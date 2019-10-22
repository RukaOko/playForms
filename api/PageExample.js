const PageExample = [
    {
        type: 'Form',
        title: 'Form Title',
        description: 'Form description',
        formData: {
            firstName: 'Alexander',
            lastName: 'Good'
        },
        styles: 'exampleForm',
        submit: {
            title: 'Press and watch console',
            action: 'form_example',
            destination: 'server'
        },
        properties: {
            firstName: {
                type: 'input',
                styles: 'exampleInput',
                title: 'First name',
                validation: {
                    required: true,
                    minLength: 2
                }
            },
            lastName: {
                type: 'input',
                title: 'Last name',
                validation: {
                    required: true
                }
            },
            textArea: {
                type: 'input',
                styles: 'exampleTextArea',
                title: 'Write something',
                hint: 'hint: whatever you want',
                defaultValue: 'Default value for textarea',
                properties: {
                    multiline: true,
                    numberOfLines: 4
                }
            },
            age: {
                type: 'input',
                title: 'Age',
                styles: 'onlyForAge',
                properties: {
                    keyboardType: 'numeric'
                },
                validation: {
                    type: 'integer'
                }
            },
            phone: {
                type: 'input',
                title: 'Phone',
                description: 'description: (numbers)',
                properties: {
                    keyboardType: 'phone-pad',
                    placeholder: '89253762537'
                },
                validation: {
                    minLength: 10
                }
            }
        }
    }
];
export default PageExample;