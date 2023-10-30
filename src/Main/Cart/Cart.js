import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import Header from "../Home/Header";
import styleProduct from "../AllStyle/Style.Product/styleProduct";
import Ionicons from "@expo/vector-icons/Ionicons";
import color from "../AllStyle/color";
import NumericInput from "react-native-numeric-input";
import { getAPIContent } from "../ProductPizza/Pizza";


const Cart = () => {
  const [value, setValue] = useState(1);
  const [close, setClose] = useState(true);
  const [cart, setCart] = useState();

  const closeCart = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          setClose(!close);
        }}
      >
        <Ionicons style={styles.close} name="close" />
      </TouchableOpacity>
    );
  };

  const handleClick = (item) => {
    console.log(item)
  }

  return (
    <View>
      <Header />
      <View style={styles.container}>
        {close ? (
          <View style={styles.containerCart}>
            <Image
              style={styleProduct.imgProduct}
              source={require("../Image/Img/ProductPizza/pizza1.jpg")}
            />
            <View style={styleProduct.content}>
              <View style={styles.theFist}>
                <View>
                  <Text style={styleProduct.name}>Pizza Hải Sản</Text>
                  <Text style={styleProduct.price}>135.000 Đ</Text>
                </View>
                {closeCart()}
              </View>
              <View style={styles.button}>
                <NumericInput
                  type="plus-minus"
                  minValue="1"
                  value={value}
                  onChange={(value) => setValue(value)}
                />
              </View>
            </View>
          </View>
        ) : null}
        {/* pay */}
        <TouchableOpacity style={styles.pay}>
          <Text style={styles.hdPay}>Thanh Toán</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const {height} = Dimensions.get("window")

const styles = StyleSheet.create({
  container: {
    height:height/1.37,
    justifyContent:'space-between',
  },
  containerCart: {
    flexDirection: "row",
    margin: 10,
    padding: 20,
    backgroundColor: color.white,
    shadowColor: color.boxshadow,
    shadowOffset: { width: 0, height: 4 },
    elevation: 10,
    position: "relative",
  },
  theFist: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  close: {
    fontSize: 16,
    position: "absolute",
    left: 100,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quantity: {
    flexDirection: "row",
  },
  subQuantity: {
    paddingRight: 20,
    fontSize: 22,
    paddingTop: 5,
  },
  subQuantity1: {
    paddingRight: 20,
    fontSize: 20,
  },
  addCart: {
    fontSize: 22,
  },
  pay:{
    backgroundColor:color.primary,
    padding:20,
  },
  hdPay:{
    fontSize:20,
    fontWeight:"bold",
    color:color.white
  },
  tong:{
    fontSize:16,
    fontWeight:'bold',
    color:color.white
  }
});

export default Cart;
