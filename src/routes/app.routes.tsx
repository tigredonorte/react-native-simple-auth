import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthHandler } from '../auth/AuthHandler';
import { HomeRoutes } from "../home/routes/home.routes";

const Stack = createStackNavigator();

export const Routes = () => {
    return (
        <NavigationContainer>
            <AuthHandler>
                <HomeRoutes />
            </AuthHandler>
        </NavigationContainer>
    );
}