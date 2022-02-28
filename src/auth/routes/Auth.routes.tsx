import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { AuthState } from '../model/AuthHelper';
import { SignInScreen } from '../screens/Login.screen';

const Stack = createStackNavigator();

export const AuthRoutes: React.FC<{ state: AuthState }> = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{
                    title: 'Sign in',
                    // When logging out, a pop animation feels intuitive
                    animationTypeForReplace: props.state.isSignout ? 'pop' : 'push',
                }}
            />
        </Stack.Navigator>
    )
}