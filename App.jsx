import React from 'react';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import CategoryScreen from './Screens/CategoryScreen/CategoryScreen';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{
                    animation: 'slide_from_bottom',
                }}
            >
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen
                    name='Category'
                    component={CategoryScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
