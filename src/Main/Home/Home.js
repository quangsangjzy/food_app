import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// List Product
import Pizza from "../ProductPizza/Pizza";
import Topproduct from "./Topproduct";
import Garan from "../ProductGaRan/Garan";
import BBQ from "../ProductBBQ/BBQ";
import Buger from "../ProductBurger/Burger";

const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator initialRouteName="Topproduct">
      <Stack.Screen
        name="Topproduct"
        component={Topproduct}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Pizza"
        component={Pizza}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Coffee"
        component={BBQ}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="KFC"
        component={Garan}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Burger"
        component={Buger}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Home;
