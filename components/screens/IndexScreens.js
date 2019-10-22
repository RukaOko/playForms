import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import PageExample from '../../api/PageExample';
import ErrorsCustom from '../custom/ErrorsCustom';

import IndexForms from './forms/IndexForms';
import TopLinks from './TopLinks';
import PlayForms from './PlayForms';


export default class IndexScreen extends Component {
  
    state = {
        page: [],
        checked: false,
        errors: []
    };


    checkPage = (page) => 
    {
        var errors = [];
        
        if(!page)
        {
            errors.push('String must be convertible to JSON');
        }
        else if(!Array.isArray(page))
        {
            errors.push('Forms must be array');
        }
        else if(page.length === 0)
        {
            errors.push('Forms is empty');
        }
        else
        {
            for(var i = 0; i < page.length; i++)
            {
                if(page[i].type === undefined || page[i].type !== 'Form')
                {
                    errors.push('Forms['+i+'] must have type, there is only one type=Form now');
                }
            }
        }
        
        this.setState({ 
            checked: true, 
            page: errors.length === 0 ? page : [],
            errors
        });
    }


    componentDidMount()
    {
        this.checkPage(PageExample);
    }


    render() 
    {
        var { checked, errors, page } = this.state;

        if(!checked)
        {
            return null;
        }
        return (
            <ScrollView>
                <TopLinks />
                <PlayForms
                    value={JSON.stringify(PageExample,  null, '\t')}
                    handleSubmit={this.checkPage}
                />
                {errors.length > 0 ? (
                        <ErrorsCustom  errors={errors} />
                    ) : (
                        page.map((data, key) => 
                            <IndexForms 
                                key={key} 
                                data={data}
                            />
                        )
                    )
                }
            </ScrollView >
        );
    }
}