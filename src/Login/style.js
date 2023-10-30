import { StyleSheet, Dimensions} from "react-native";
import color from "../Main/AllStyle/color";

const width = Dimensions.get('window').width;
const styleLogin = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
    justifyContent: "space-around",
    alignItems: "center",
    position:'relative',
  },
  // title
  titleContainer: {
    width:width,
    flexDirection: "row",
    padding: 10,
  },
  back: {
    fontSize:50,
    color:color.white,
    paddingLeft:15
  },
  logo: {
    width: 100,
    height: 100,
    marginRight: width/3,
    position:'absolute',
    right:10,
    bottom:0
  },
  textTitle: {
    fontSize: 24,
    color: color.white,
    fontWeight: "bold",
  },
  // end title
  // button
  btnLog: {
    backgroundColor:color.white,
    width: width/1.2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:10,
    padding: 20,
    borderWidth:1
  },
  textBtn: {
    fontWeight:'bold',
    fontSize:20,
    color:color.primary
  },
  //   input
  LogInput: {
    width: width/1.2,
    backgroundColor: color.white,
    marginVertical: 10,
    padding: 18,
    borderRadius: 15,
    fontSize: 16,
  },
  boxTitleForm: {
    alignItems: "center",
    paddingBottom: 50,
  },
  titleForm: {
    fontSize: 30,
    color: color.white,
    fontWeight: "bold",
  },
});

export default styleLogin;
