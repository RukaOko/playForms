import React from 'react';
import { TouchableOpacity, Text, Linking } from 'react-native';

const SubmitForm = ({ title, href }) => (
    
    <TouchableOpacity
        onPress={() => {
            Linking.openURL(href);
        }}
    >
        <Text 
            style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderBottomColor: 'blue',
                color: 'blue'
            }}
        >
            {title}
        </Text>
    </TouchableOpacity>
);
export default SubmitForm;