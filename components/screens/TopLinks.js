import React from 'react';
import { View } from 'react-native';

import LinkCustom from '../custom/LinkCustom';

const TopLinks = () => (
    <View
        style={{
            marginTop: 20,
            marginHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}
    >
        <LinkCustom 
            title="Download APK"
            href="http://xopdox.ru/downloadapk"
        />
        <LinkCustom 
            title="GitHub"
            href="https://github.com/RukaOko/playForms"
        />
    </View>
);
export default TopLinks;