import React from 'react';
import { View, Text, Button } from 'react-native';

const DetailsScreen = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text>Nouvelle page Details</Text>
            <Button
                title="Retourner à la page d'accueil"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};

export default DetailsScreen;
