import React from "react";
import { Button, Text, View } from "react-native";
import { AuthContext } from "../../auth/model/AuthHelper";

export function HomeScreen() {
    const { logout } = React.useContext(AuthContext);
  
    return (
      <View>
        <Text>Signed in!</Text>
        <Button title="Sign out" onPress={logout} />
      </View>
    );
}