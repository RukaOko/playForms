import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const SubmitForm = ({ styles, handleSubmit, title }) => (
    
    <TouchableOpacity
        style={styles.view || {}}
        onPress={handleSubmit}
    >
        <Text style={styles.text || {}}>
            {title}
        </Text>
    </TouchableOpacity>
);
export default SubmitForm;