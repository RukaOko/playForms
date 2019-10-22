import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import ViewText from '../../../custom/ViewText';

import StylesInput from './StylesInput';

export default class IndexInput extends Component {
  
    state = { 
        title: false,
        name: false,  
        value: false, 
        error: false,
        properties: {},
        styles: {},
        defaultStyles: {}
    }
    
    validateInput = (value, validation) =>
    {
        if(value === '')
        {
            if(validation.required)
            {
                return 'Cannot be empty';
            }
            else
            {
                return true;
            }
        }
        if(validation.type && validation.type === 'integer' && parseInt(value, 10) != value)
        {
            return 'Must be an integer';
        }
        if(validation.minLength && value.length < validation.minLength)
        {
            return 'Cannot be shorter than '+validation.minLength;
        }
        
        return true;
    }

    onChangeText = (value) => 
    {
        var { name } = this.state,
            { data } = this.props,
            error = false;

        if(data.validation)
        {
            error = this.validateInput(value, data.validation);
        }

        this.setState({ value, error });
        this.props.storeForm( name, value, error );
    }

    isPlainObject = (obj) => 
    {
        return Object.prototype.toString.call(obj) === '[object Object]';
    }

    checkPrepareInput(props)
    {
        var { name, data } = props,
            { value, error, title } = data,
            properties = {},
            styles = {},
            defaultStyles = {};

        if(StylesInput.default && this.isPlainObject(StylesInput.default))
        {
            defaultStyles = StylesInput.default;
        }

        if(data.properties && this.isPlainObject(data.properties))
        {
            properties = data.properties;
        }
        if(data.styles && StylesInput[data.styles] && this.isPlainObject(StylesInput[data.styles]))
        {
            styles = StylesInput[data.styles];
        }
        if(data.validation && data.validation.required)
        {
            title+= '*';
        }

        this.setState({ title, name, value, error, properties, styles, defaultStyles });
    }

    componentDidMount()
    {
        this.checkPrepareInput(this.props);
    }

    componentDidUpdate(prevProps)
    {
        if(this.props !== prevProps) 
        {
            this.checkPrepareInput(this.props);
        } 
    }
  

    render() 
    {
        var { title, name, value, error, properties, styles, defaultStyles } = this.state;
        var { data } = this.props;
        
        if(!name)
        {
            return null;
        }

        return (
            <View style={styles.container || defaultStyles.container || {}}>
                {title && 
                    <ViewText 
                        text={title}
                        styles={styles.title || defaultStyles.title || {}}
                    />
                }
                {data.description && 
                    <ViewText 
                        text={data.description}
                        styles={styles.description || defaultStyles.description || {}}
                    />
                }
                <TextInput
                    onChangeText={this.onChangeText}
                    value={value}
                    style={styles.textInput || defaultStyles.textInput || {}}
                    {...properties}
                />
                {error && 
                    <ViewText 
                        text={error}
                        styles={styles.error || defaultStyles.error || {}}
                    />
                }
                {data.hint && 
                    <ViewText 
                        text={data.hint}
                        styles={styles.hint || defaultStyles.hint || {}}
                    />
                }
           </View> 
        );
    }
}