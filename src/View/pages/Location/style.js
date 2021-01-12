import React from 'react';
import { StyleSheet, Platform} from 'react-native';

// import { Container } from './styles';

const Styles =  StyleSheet.create( { 

    container: {
        flex: 1,
        
        alignItems: "center",
        backgroundColor: "#FFF"
    },
    header: {
        width:"100%",
        flexDirection: "row",
        alignItems: "center",
        marginTop: Platform.OS === 'ios'? 40: 0,
        padding:8,
        backgroundColor:"#FFF",
        borderBottomColor:"rgb(253, 191, 39)",
        borderBottomWidth: 1
    },
    back: {
        width: "25%",
        justifyContent:"center"
    },
    backImg: {
        width: 40,
        height:40
    },
    headerTitle: {
        fontSize: 19.5,
        fontWeight: "bold",
        lineHeight: 29.5
    },
    form: {
        padding:16,
        width:"100%"

    },
    input: {
        backgroundColor: "#FFF",
        borderColor: "#FDBF27",
        borderRadius: 5,
        paddingLeft: 24,
        marginTop:16,
        elevation: 2,
        
    }, 
    
    submitButton: {
        backgroundColor: "#FDBF27",
        marginTop: 32,
        padding: 8,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10, 
        height: 48
    },
    submitText: {
        fontWeight: "bold",
        fontSize: 19.5,
        lineHeight: 29.5,
        color: "#FFF",
        
    }
})

export default Styles;