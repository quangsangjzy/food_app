import React from "react";
import { View, ScrollView } from "react-native";
import Catelogy from "./Catelogy";
import Topproduct from "./Topproduct";
import Header from "./Header";

const HomeView = () => {
  return (
    <View>
      <ScrollView>
        <Catelogy />
      </ScrollView>
    </View>
  );
};

export default HomeView;
