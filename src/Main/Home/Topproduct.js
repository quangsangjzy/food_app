import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Touchable,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import color from "../AllStyle/color";
import HomeView from "./HomeView";
import Header from "./Header";

const Topproduct = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getAPI = async () => {
    try {
      const response = await fetch(
        "https://quangsangjzy.github.io/api_food_app/productType.json"
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAPI();
  }, []);

  const VirtualizedList = ({ children }) => {
    return (
      <FlatList
        data={[]}
        keyExtractor={() => "key"}
        renderItem={null}
        ListHeaderComponent={<>{children}</>}
      />
    );
  };

  return (
    <View>
      <Header />
      <VirtualizedList>
        <HomeView />
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>MENU HÔM NAY</Text>
          </View>
          {/* FlatList Product Type */}
          <View style={styles.boxConatainer}>
            {data.map((item, index) => {
              return (
                <View key={index}>
                  <View style={styles.productList}>
                    <Image
                      style={styles.imgProduct}
                      source={{ uri: item.image }}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate(item.name);
                      }}
                      style={styles.infoProduct}
                      key={index}
                    >
                      <Text style={styles.titleProduct}>{item.name}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </View>
          {/* <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            numColumns={2}
            renderItem={({ item, index }) => (
              <View style={styles.productList}>
                <Image style={styles.imgProduct} source={{ uri: item.image }} />
                <TouchableOpacity onPress={()=>{
                  navigation.navigate(item.name)
                }} style={styles.infoProduct} key={index}>
                  <Text style={styles.titleProduct}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )}
          /> */}
          {/* End */}
        </View>
      </VirtualizedList>
    </View>
  );
};

const { width } = Dimensions.get("window");
const productWidth = (width - 200) / 2;
const productImgHeight = (productWidth / 110) * 100;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    padding: 15,
    paddingBottom: 150,
  },
  boxConatainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  title: {
    color: color.textbanner,
    fontSize: 20,
    paddingVertical: 10,
    paddingTop: 0,
  },
  productList: {
    width: productWidth,
    backgroundColor: color.white,
    width: 160,
    height: 240,
    justifyContent: "space-between",
    borderRadius: 10,
    shadowColor: color.shadowColor,
    shadowOffset: { width: 0, height: 3 },
    elevation: 8,
    margin: 15,
  },
  infoProduct: {
    alignItems: "center",
    paddingVertical: 20,
  },
  imgProduct: {
    width: productWidth,
    height: productImgHeight,
    marginHorizontal: 30,
    marginTop: 20,
    borderRadius: 50,
  },
  titleProduct: {
    color: color.black,
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 20,
  },
});

export default Topproduct;

// {data.map((item, index) => {
//   return (
//     <View key={index}>
//       {/* Pizza */}
//       <View style={styles.productList}>
//         <Image
//           style={styles.imgProduct}
//           source={{ uri: item.image }}
//         />
//         <TouchableOpacity
//           onPress={() => {
//             navigation.navigate("Pizza");
//           }}
//         >
//           <View style={styles.infoProduct}>
//             <Text style={styles.titleProduct}>{item.name}</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// })}
