import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import Header from "../Home/Header";
import color from "../AllStyle/color";
import MapView from "react-native-maps";

const { height, width } = Dimensions.get("window");

const Contact = ({ navigation }) => {
  return (
    <View>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.boxMapImg}>
            <MapView style={styles.map} />
          </View>
          <View style={styles.Content}>
            <Image
              style={styles.ContentIcon}
              source={require("../Image/Icon/location.png")}
            />
            <Text style={styles.TextContent}>Trịnh Văn Bô, Hà Nội</Text>
          </View>

          <View style={styles.Content}>
            <Image
              style={styles.ContentIcon}
              source={require("../Image/Icon/phone.png")}
            />
            <Text style={styles.TextContent}>(+84) 888866666</Text>
          </View>
          <View style={styles.Content}>
            <Image
              style={styles.ContentIcon}
              source={require("../Image/Icon/mail.png")}
            />
            <Text style={styles.TextContent}>quangsang@gmail.com</Text>
          </View>
          {/* logout && login */}
          <View style={styles.logoutIn}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert("Thông Báo", "Bạn có muốn đăng xuất ra không ?", [
                  {
                    text: "Đồng ý",
                    onPress: () => {
                      navigation.navigate("LoginNavigation");
                    },
                  },
                  { text: "Hủy bỏ" },
                ]);
              }}
            >
              <View style={styles.log}>
                <Image
                  style={{ height: 30, width: 30 }}
                  source={require("../Image/Icon/logout.png")}
                />
                <Text style={styles.TextContent}>Đăng Xuất</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const imageWidth = width - 20;
const imageHeight = (imageWidth / 824) * 577;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
    marginBottom: 150,
  },
  mapImg: {
    height: imageHeight,
    width: imageWidth,
  },
  boxMapImg: {
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    elevation: 10,
    marginBottom: 20,
  },
  Content: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: color.white,
    borderBottomColor: "#dadada",
    borderBottomWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    elevation: 10,
  },
  ContentIcon: {
    width: 40,
    height: 40,
  },
  TextContent: {
    fontSize: 16,
    color: color.textRed,
    marginHorizontal: 10,
    fontWeight: "bold",
  },
  logoutIn: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    marginTop: 15,
  },
  log: {
    width: width / 1.1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    backgroundColor: color.white,
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    elevation: 20,
    borderWidth: 1,
    borderColor: color.primary,
    padding: 15,
    alignItems: "center",
  },
  map: {
    height: 300,
  },
});

export default Contact;
