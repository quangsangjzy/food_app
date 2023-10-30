import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React, { useEffect, useState } from "react";
import color from "../AllStyle/color";
import Swiper from "react-native-swiper";

const { height, width } = Dimensions.get("window");

const Category = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    renderApi();
  }, []);

  const renderApi = async () => {
    try {
      const response = await fetch(
        "https://quangsangjzy.github.io/api_food_app/productType.json"
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.log("Lỗi", error);
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={{ flex: 1 }}>
        <Swiper autoplay>
          {data.map((item, index) => {
            return (
              <Image style={styles.bannerImg} source={{ uri: item.image }} />
            );
          })}
        </Swiper>
      </View>
    </View>
  );
};

const imageWidth = width - 0;
const imageHeight = (imageWidth / 1000) * 600;

const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.31,
    backgroundColor: color.white,
    marginTop: 3,
    shadowColor: color.shadowColor,
    shadowOffset: { width: 0, height: 3 },
    elevation: 6,
  },
  textStyle: {
    fontSize: 20,
    color: color.textbanner,
  },
  bannerImg: {
    width: imageWidth,
    height: imageHeight,
  },
});

export default Category;
