import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import ViewText from '../custom/ViewText';
import SubmitForm from '../custom/SubmitForm';

export default class PlayForms extends Component {
  
    state = {
        value: false
    };

    isJsonString = (str) =>
    {
		try {
			JSON.parse(str);
        } 
        catch (e) 
        {
			return false;
		}
		return true;
    }
    
    handleSubmit = () =>
    {
        var { value } = this.state,
            page = false;

        if(this.isJsonString(value))
        {
            page = JSON.parse(this.state.value);
        }
        this.props.handleSubmit(page);
    }

    componentDidMount = () => 
    {
        const { value } = this.props;
        this.setState({ value });
    }


    render() 
    {
        if(!this.state.value)
        {
            return null;
        }
        return (
            <View>
                <ViewText 
                    text="Play Forms"
                    styles={{
                        view: {
                            margin: 20
                        },
                        text: {
                            fontSize: 20,
                            fontWeight: '900',
                            alignSelf: 'center'
                        }
                    }}
                />
                <TextInput
                    onChangeText={value => this.setState({ value })}
                    value={this.state.value}
                    editable={true}
                    multiline={true}
                    numberOfLines={10}
                    style={{
                        margin: 5,
                        padding: 5,
                        borderRadius: 2,
                        borderWidth: 1,
                        borderColor: 'grey',
                        textAlignVertical: 'top'
                    }}
                />
                <SubmitForm 
                    title="Create form"
                    handleSubmit={this.handleSubmit}
                    styles={{
                        view: {
                            height: 30,
                            margin: 20,
                            paddingLeft: 15,
                            paddingRight: 15,
                            borderRadius: 2,
                            backgroundColor: 'blue',
                            alignSelf: 'center',
                            justifyContent: 'center'
                        },
                        text: {
                            fontSize: 16,
                            fontWeight: '900',
                            color: 'white'
                        }
                    }}
                />
                
            </View>
        );
    }
}