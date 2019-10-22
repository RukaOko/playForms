const StylesForm = {
    default: {
        container: {
            flex: 1,
            margin: 5,
            marginBottom: 20,
            padding: 5,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'black'
        },
        submit: {
            view: {
                borderRadius: 5,
                backgroundColor: 'blue',
                alignSelf: 'center'
            },
            text: {
                fontSize: 20,
                fontWeight: '900'
            }
        },
        title: {
            view: {
                borderWidth: 1,
                borderColor: 'grey'
            },
            text: {
                fontSize: 20,
                fontWeight: '900'
            }
        },
        description: {
            view: {
                marginTop: 5
            },
            text: {
                fontSize: 20,
                fontWeight: '900'
            }
        }
    },
    exampleForm: {
        container: {
            margin: 5,
            marginBottom: 20,
            padding: 15,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'black'
        },
        submit: {
            view: {
                height: 30,
                paddingLeft: 15,
                paddingRight: 15,
                margin: 20,
                borderRadius: 3,
                backgroundColor: 'blue',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center'
            },
            text: {
                fontSize: 16,
                fontWeight: '900',
                color: 'white'
            }
        },
        title: {
            text: {
                fontSize: 20,
                fontWeight: '900',
                alignSelf: 'center'
            }
        },
        description: {
            view: {
                marginTop: 5,
                marginLeft: 5,
                marginBottom: 20
            },
            text: {
                fontSize: 16
            }
        }
    },
};
export default StylesForm;