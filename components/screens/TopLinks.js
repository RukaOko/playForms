import React from 'react';
import { View, Linking } from 'react-native';

import SubmitForm from '../custom/SubmitForm';

const TopLinks = () => (
    <View
        style={{
            marginTop: 20,
            marginHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}
    >
        <SubmitForm 
            title="Download APK"
            handleSubmit={() => {
                Linking.openURL('http://xopdox.ru/downloadapk');
            }}
            styles={{
                text: {
                    fontSize: 16,
                    borderBottomWidth: 1,
                    borderBottomColor: 'blue',
                    color: 'blue'
                }
            }}
        />
        
        <SubmitForm 
            title="GitHub"
            handleSubmit={() => {
                Linking.openURL('https://github.com/RukaOko/playForms');
            }}
            styles={{
                text: {
                    fontSize: 16,
                    borderBottomWidth: 1,
                    borderBottomColor: 'blue',
                    color: 'blue'
                }
            }}
        />
        
    </View>
);
export default TopLinks;