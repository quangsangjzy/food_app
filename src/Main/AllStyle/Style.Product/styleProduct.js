import { StyleSheet } from "react-native"
import color from "../color"

const styleProduct = StyleSheet.create({
    container:{
        margin:10,
        backgroundColor:color.white,
        shadowColor:color.boxshadow,
        shadowOffset:{width:0, height:4}, 
        elevation:10,
        padding:10,
        marginBottom:150
    },
    titleProduct:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:color.mauxam,
    },

    back:{
        fontSize:50,
        color:color.primary,
        padding:10,
    },
    mainHeading:{
        justifyContent:'center',
        paddingLeft:70
    },

    heading:{
        textTransform:'uppercase', 
        fontSize:18,
        fontWeight:'bold',
        color:color.primary
    },

    // Content

    contentSection:{
        flexDirection:'row',
        padding:20
    },
    content:{
        paddingHorizontal:20,
        justifyContent:'space-between',
    },
    imgProduct:{
        width:100,
        height:100,
    },
    name:{
        fontSize:16,
        color:color.textbanner,
        paddingBottom:3
    },
    price:{
        fontSize:16,
        color:color.textRed
    },
    addCart:{
        fontSize:25,
        opacity:0.8
    },
    line:{
        paddingTop:20,
        borderBottomWidth:1,
        borderBottomColor:color.mauxam,
    }
})

export default styleProduct;