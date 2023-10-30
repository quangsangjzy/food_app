import React, { useState, useEffect } from "react";
import {
  styleLoginheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import color from "../Main/AllStyle/color.js";
import styleLogin from "./style.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase.js";
import FontAwesome from "@expo/vector-icons/FontAwesome";


export default function Authentication({ navigation }) {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert('Đăng nhập thành công')
        navigation.replace("Shop");
      })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Sai tên tài khoản hoặc mật khẩu")
    });
  }

  return (
    <View style={styleLogin.container}>
      <View>
        {/* Title */}
        <View style={styleLogin.titleContainer}>
          <TouchableOpacity
            onPress={() => {
              alert('Bạn chưa đăng nhập')
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
          <Text style={styleLogin.titleForm}>ĐĂNG NHẬP</Text>
        </View>
        <TextInput 
        style={styleLogin.LogInput} 
        placeholder="Email" 
        value={email}
        onChangeText={(text)=> setEmail(text)}
        />
        <TextInput
          style={styleLogin.LogInput}
          placeholder="Mật khẩu"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Text style={{ color: color.white, fontSize: 16 }}>
          Bạn chưa có tài khoản ?
          <Text
            onPress={() => {
              navigation.navigate("Sigin");
            }}
            style={{ color: "#A5FE4A", fontWeight: "bold", fontSize: 18 }}
          >
            {" "}
            Đăng ký ngay
          </Text>
        </Text>
      </View>
      {/* Buton */}
      <View style={styleLogin.contaiLog}>
        <TouchableOpacity
          onPress={() => login()}
        >
          <View style={styleLogin.btnLog}>
            <Text style={styleLogin.textBtn}>ĐĂNG NHẬP</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
