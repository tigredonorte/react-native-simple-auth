import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { HomeScreen } from '../screens/Home.screen';

const Stack = createStackNavigator();
export const HomeRoutes: React.FC<{}> = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
};