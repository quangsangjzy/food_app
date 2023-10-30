import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect } from "react";
import styleLogin from "./style";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Sigin = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Bạn đã đăng ký thành công");
        navigation.replace("Login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Vui lòng nhập tài khoản và mật khẩu.");
      });
  };

  return (
    <View style={styleLogin.container}>
      <View>
        {/* Title */}
        <View style={styleLogin.titleContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <FontAwesome style={styleLogin.back} name="angle-left" />
          </TouchableOpacity>
          <Image
            style={styleLogin.logo}
            source={{uri: 'https://www.xbytesolutions.com/assets/img/food-delivery-app/cta-img.png'}}
          />
        </View>
      </View>
      <View style={styleLogin.SignIn}>
        <View style={styleLogin.boxTitleForm}>
          <Text style={styleLogin.titleForm}>ĐĂNG KÝ</Text>
        </View>
        <TextInput
          style={styleLogin.LogInput}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styleLogin.LogInput}
          placeholder="Mật khẩu"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity onPress={() => signup()}>
        <View style={styleLogin.btnLog}>
          <Text style={styleLogin.textBtn}>ĐĂNG KÝ</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Sigin;
