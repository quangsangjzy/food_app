import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "./Cart/Cart";
import Contact from "./Contact/Contact";
import { Ionicons } from "@expo/vector-icons";
import Home from "./Home/Home";
import Search from "./Search/search";
import LoginNavigation from "../Login/LoginNavigation";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Trang Chủ") {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Tìm Kiếm") {
            return (
              <Ionicons
                name={focused ? "search" : "search-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Giỏ Hàng") {
            return (
              <Ionicons
                name={focused ? "md-cart" : "md-cart-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Cá Nhân") {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={size}
                color={color}
              />
            );
          }
        },
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "tomato",
      })}
    >
      <Tab.Screen
        name="Trang Chủ"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Tìm Kiếm"
        component={Search}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Giỏ Hàng"
        component={Cart}
        options={{ headerShown: false, tabBarBadge: 3 }}
      />
      <Tab.Screen
        name="Cá Nhân"
        component={Contact}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginNavigation">
        <Stack.Screen
          name="LoginNavigation"
          component={LoginNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Shop"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
