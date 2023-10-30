import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React from "react";
import { TouchableOpacity, Dimensions } from "react-native";
import color from "../AllStyle/color.js";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const { height } = Dimensions.get("window");

export default function Header({ naviagtion }) {
  return (
    <View style={styles.header}>
      <View style={styles.headerShop}>
        <TouchableOpacity>
          <FontAwesome style={styles.iconMenu} name="bars" />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Eaut Food Delivery</Text>
        <View style={styles.boxThongbao}>
          <FontAwesome style={styles.bell} name="bell-o" />
          <Text style={styles.thongbao}>10</Text>
        </View>
      </View>
      <View style={styles.heading}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://www.xbytesolutions.com/assets/img/food-delivery-app/cta-img.png",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: height / 5,
    backgroundColor: color.primary,
  },
  headerShop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconMenu: {
    margin: 15,
    fontSize: 25,
    color: color.white,
  },
  boxThongbao: {
    margin: 15,
  },
  bell: {
    fontSize: 25,
    position: "relative",
    color: color.white,
  },
  thongbao: {
    width: 15,
    height: 15,
    position: "absolute",
    fontSize: 10,
    right: -5,
    top: -5,
    backgroundColor: color.textRed,
    borderRadius: 30,
    fontWeight: "bold",
    color: color.white,
  },
  textHeader: {
    fontSize: 20,
    color: color.white,
    fontWeight: "bold",
    marginVertical:10,
    marginHorizontal: 10,
  },
  heading: {
    alignItems: "center",
  },
  logo:{
    width:70,
    height:70,
  }
});
