import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

const Hello = (props) => {
    return (
        <View>
            <Text>Hello {props.fname} 👋</Text>
        </View>
    );
};

export default Hello;
