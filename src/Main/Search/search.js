import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Content } from "../ProductPizza/Pizza";
import Header from "../Home/Header";
import { ContentBBQ } from "../ProductBBQ/BBQ";
import { ContentGaRan } from "../ProductGaRan/Garan";
import color from "../AllStyle/color";
import FontAwesome5 from "@expo/vector-icons/FontAwesome";

const Search = () => {
  return (
    <View>
      <Header />
      <View style={styles.TextInput}>
        <TextInput style={styles.input} />
        <FontAwesome5 name="search" style={styles.btnSearch} />
      </View>
      <ScrollView>
        <Content />
        <ContentBBQ />
        <ContentGaRan />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  TextInput:{
    margin:20,
  },
  input: {
    backgroundColor: color.white,
    padding: 15,
    position: "relative",
    shadowOpacity: 10,
    elevation: 6,
    fontSize: 16,
    borderRadius: 10,
    paddingLeft:50,
    borderWidth:1
    
  },
  btnSearch: {
    fontSize: 18,
    position: "absolute",
    marginTop:18,
    paddingLeft:20
  },
});

export default Search;
