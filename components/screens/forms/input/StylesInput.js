const StylesInput = {
    default: {
        container: {
            marginTop: 5,
            padding: 5
        },
        title: {
            text: {
                fontSize: 16,
                fontWeight: '900'
            }
        },
        description: {
            view: {
                marginTop: 5
            },
            text: {
                fontSize: 14
            }
        },
        textInput: {
            marginTop: 5,
            padding: 5,
            borderWidth: 1,
            borderRadius: 2,
            borderColor: 'grey'
        },
        error: {
            text: {
                color: 'red',
                fontSize: 14
            }
        },
        hint: {
            text: {
                fontSize: 14,
                color: 'grey'
            }
        }
    },

    exampleInput: {
        container: {
            marginTop: 5,
            padding: 5
        },
        title: {
            text: {
                fontSize: 16,
                fontWeight: '900'
            }
        },
        description: {
            text: {
                fontSize: 14
            }
        },
        textInput: {
            marginTop: 5,
            padding: 5,
            borderRadius: 2,
            borderWidth: 1,
            borderColor: 'grey'
        },
        error: {
            text: {
                fontSize: 14,
                color: 'red'
            }
        },
        hint: {
            text: {
                fontSize: 14,
                color: 'grey'
            }
        }
    },
    onlyForAge: {
        title: {
            text: {
                color: 'blue'
            }
        }
    },
    exampleTextArea: {
        textInput: {
            marginTop: 5,
            padding: 5,
            borderRadius: 2,
            borderWidth: 1,
            borderColor: 'grey',
            textAlignVertical: 'top'
        }
    }
};
export default StylesInput;