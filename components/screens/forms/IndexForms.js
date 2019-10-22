import React, { Component } from 'react';
import { View } from 'react-native';

import ErrorsCustom from '../../custom/ErrorsCustom';
import ViewText from '../../custom/ViewText';
import SubmitForm from '../../custom/SubmitForm';

import IndexInput from './input/IndexInput';
import StylesForm from './StylesForm';

export default class IndexForms extends Component {
  
    state = {
        checked: false,
        form: {},
        errors: [],
        styles: {},
        defaultStyles: StylesForm.default
    };
    
    isPlainObject = (obj) => 
    {
        return Object.prototype.toString.call(obj) === '[object Object]';
    }
    
    
    checkPrepareForm = (form) => 
    {
        var errors = [],
            styles = {},
            defaultStyles = {};

        if(StylesForm.default && this.isPlainObject(StylesForm.default))
        {
            defaultStyles = StylesForm.default;
        }

        if(form.properties === undefined || !this.isPlainObject(form.properties))
        {
            errors.push('Form must have properties as a plain object');
        }
        else
        {
            if(form.styles && StylesForm[form.styles])
            {
                styles = StylesForm[form.styles];
            }

            if(form.formData === undefined || !this.isPlainObject(form.formData))
            {
                form.formData = {};
            }
            for(name in form.properties)
            {
                if(form.properties[name].type === undefined || form.properties[name].type !== 'input')
                {
                    errors.push('Form, properties.'+name+' must have type. There is only one type=input now');
                    break;
                }
                form.properties[name].error = false;
                if(form.formData[name])
                {
                    form.properties[name].value = form.formData[name];
                }
                else if(form.properties[name].defaultValue)
                {
                    form.properties[name].value = form.properties[name].defaultValue;
                }
                else
                {
                    form.properties[name].value = "";
                }
            }
        }

        this.setState({ 
            checked: true, 
            form: errors.length === 0 ? form : [],
            errors,
            styles,
            defaultStyles
        });
        
    }


    storeForm = (name, value, error) => 
    {
        if(this.state.form.properties[name])
        {
            this.state.form.properties[name].value = value;
            this.state.form.properties[name].error = error;
        }
    }


    handleSubmit = () =>
    {
        var error = false,
            { properties } = this.state.form,
            { action } = this.state.form.submit,
            sendData = { action };

        for(name in properties)
        {
            if(properties[name].error)
            {
                error = true;
                console.log('Error in '+name+' : '+properties[name].error);
                break;
            }
            else
            {
                sendData[name] = properties[name].value;
            }
        }

        if(!error)
        {
            console.log('Ok. Errors are not found');
            console.log(sendData);
        }
        
    }


    componentDidMount()
    {
        this.checkPrepareForm(this.props.data);
    }

    componentDidUpdate(prevProps)
    {
        if(this.props !== prevProps) 
        {
            this.checkPrepareForm(this.props.data);
        } 
    }


    render() 
    {
        const { checked, errors, form, styles, defaultStyles } = this.state;

        if(!checked)
        {
            return null;
        }
        else if(errors.length > 0)
        {
            return (
                <ErrorsCustom  errors={errors} />
            );
        }
        else
        {
            return (
                <View style={styles.container || defaultStyles.container || {}}>
                    {form.title && 
                        <ViewText 
                            text={form.title}
                            styles={styles.title || {}}
                        />
                    }
                    {form.description && 
                        <ViewText 
                            text={form.description}
                            styles={styles.description || defaultStyles.description || {}}
                        />
                    }
                    {
                        Object.keys(form.properties).map((name, key) => 
                            <IndexInput 
                                key={key} 
                                name={name}
                                data={form.properties[name]}
                                storeForm={this.storeForm}
                            />
                        )
                    }
                    {form.submit && 
                        <SubmitForm 
                            title={form.submit.title || 'Submit'}
                            handleSubmit={this.handleSubmit}
                            styles={styles.submit || defaultStyles.submit || {}}
                        />
                    }
                </View>
            );
        }
    }
}