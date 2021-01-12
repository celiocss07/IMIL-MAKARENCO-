import React from 'react';
import { StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#FFF",
        padding:16,
    },
    HeaderTop:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom:16
    },
    Logo: {
        width: 32,
        height: 40,
  
    },
    location: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        
    },
    perfilImg: {
        width: 45,
        height:45,
        borderRadius:100,
        borderWidth:1,
        borderColor: "rgb(253, 191, 39)"

    },
    input: {
        
        width:"100%",
        backgroundColor:"#FFF",
        fontSize: 19,
        paddingLeft: 16,
        paddingRight:60,
        borderColor:"rgb(253, 191, 39)",
        borderWidth:1,
        borderRadius: 5
    },
    search: {
        flexDirection: "row",
        alignItems:"center"
    },
    btnSearch: {
    height: 32,
    width: 32,
    borderRadius: 5,
    backgroundColor: "rgb(258,186,46)",
    justifyContent: "center",
    alignItems:"center",
    marginLeft: -55
    },
    bodyTitles: {
        flexDirection: "row", alignItems:"center",justifyContent: "space-between", marginBottom: 16
    },
    body: {
        borderRadius:5,
        borderColor:"rgb(253, 191, 39)",
        borderTopWidth:1,
        paddingTop:8
    },
    element: {
        justifyContent: "center",
        alignItems: "center",
        
    },
    listProduct: {
        marginTop: 16,
        maxWidth: "100%"
    },
    product: {
        maxWidth:"100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom:16,
        borderRadius:10,
        
        padding:16,
        backgroundColor:"rgb(253, 191, 39)",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 3,

        
    },
    productInfo: {
        width: "70%"
    },
    productImg: {
        width: "25%",
        marginRight:"5%"
    }
    ,
    img: {
        width:80,
        height: 80,
        borderRadius:100
    },
    productName: {
        color: "black",
        fontWeight: "bold",
        fontSize: 13
    },
    productCat:{
        color:"rgb(107,107,107)",
        fontSize:13
    },
    productPrice: {
        color: "#FFF",
        fontSize: 19.5,
        fontWeight:"bold",
        fontStyle: "italic"
    }
})

export default Styles;