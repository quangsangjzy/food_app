import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// List Product
import Sigin from "./Sigin";
import Login from "./Login"

const Stack = createStackNavigator();

const LoginNavigation = () => {
    return(
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Sigin"
        component={Sigin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    )
};

export default LoginNavigation;
