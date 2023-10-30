import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  ActivityIndicator
} from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../Home/Header";
import styleProduct from "../AllStyle/Style.Product/styleProduct";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const ContentGaRan = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getAPIContent = async () => {
    try {
      const response = await fetch(
        "https://quangsangjzy.github.io/api_food_app/garan.json"
      );
      const json = await response.json();
      setData(json);
      console.log(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAPIContent();
    // getAPIImages()
  }, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item, index }) => (
            <View>
              <View style={styleProduct.contentSection}>
                <Image
                  style={styleProduct.imgProduct}
                  source={{ uri: item.image }}
                />
                <View style={styleProduct.content}>
                  <Text style={styleProduct.name}>{item.name}</Text>
                  <Text style={styleProduct.price}>{item.price}.000Đ</Text>
                  <TouchableOpacity>
                    <MaterialIcons
                      name="add-shopping-cart"
                      style={styleProduct.addCart}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styleProduct.line}></View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const GaRan = ({ navigation }) => {
  return (
    <View>
      <Header />
      <ScrollView>
        <View style={styleProduct.container}>
          {/* title */}
          <View style={styleProduct.titleProduct}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome style={styleProduct.back} name="angle-left" />
            </TouchableOpacity>
            <View style={styleProduct.mainHeading}>
              <Text style={styleProduct.heading}>Menu Gà Rán Hôm Nay</Text>
            </View>
          </View>
          {ContentGaRan()}
        </View>
      </ScrollView>
    </View>
  );
};

export default GaRan;
