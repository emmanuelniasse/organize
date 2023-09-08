import React from 'react';
import { View, Text, Button } from 'react-native';

const CategoryScreen = ({ navigation, route }) => {
    const { categoryName } = route.params;

    // Faire une requête qui récupère toutes les data avec comme slug `categoryName`
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text>CATEGORIE {categoryName}</Text>
            <Button
                title="Retourner à la page d'accueil"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};

export default CategoryScreen;
