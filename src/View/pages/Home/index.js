import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, TextInput, ActivityIndicator, Alert  } from 'react-native';
import api from './../../../services/api';
import Styles from './styles';
export default function Home() {

    const [loading, setLoding] = useState(true)
    const [data, setData] = useState({})
    const [param, setParam] = useState('')

    let vector = [];


    async function initialData() {
        setLoding(true)
        if(param) {
            console.log(param)
            const response = await api.get(`/${param}`)
        await setData(response.data)
        await console.log(data)
        setLoding(false)
                                        
        }else{
            Alert.alert("Caixa de pesquisa Vazia!!","Escreva algo que seja do seu interesse!")
            setLoding(false)
        }
    }

    async function initial() {
                
        
        const response = await api.get(`/com`)
        vector = response.data;
        //setData(response.data.produtos)
        setLoding(false)
        console.log("ALguma coisa => ", response.data)
    }

    useEffect(
        () => {
            

            initial()
        },
        []
    )


    return(
        <View style={Styles.container}>

            <View style={Styles.HeaderTop}>
                <TouchableOpacity onPress={() => {}}>

                    <Image 
                        source={require('../../../Img/menu.png')}
                        style={Styles.Logo}
                         
                    />

                </TouchableOpacity>

                
                    
                <TouchableOpacity 
                    style={Styles.location}
                    onPress={() => {}} 
                >
                    <Text>Sua Localização actual</Text>
                    <Image 
                        source={require('../../../Img/Chevron_Down_50px.png')}
                        style={{width:15, height:15, marginLeft:5}} 
                    />
                </TouchableOpacity>
                    
               

                <TouchableOpacity onPress={() => {}}>

                    <Image 
                        source={require('./../../../Img/imagem_pass.jpg')}
                        style={Styles.perfilImg}
                    />

                </TouchableOpacity>

                
            </View>
            <View style={{marginBottom: 24}}>
                <Text style={{color:"black", fontWeight:"bold", marginBottom:8}}>O que deseja hoje ?</Text>
                <View style={Styles.search}>
                    
                    <TextInput 
                        placeholder="Pesquisar"
                        style={Styles.input}
                        onChangeText={ (text) => setParam(text)}

                    />
                    <TouchableOpacity 
                        style={Styles.btnSearch}
                        onPress={() => {
                            
                            initialData()
                        }} 
                    >
                        <Image 
                            source={require('./../../../Img/icons8_Search_52px.png')}
                            style={{width: 24, height:24}}
                        />
                    </TouchableOpacity>
                   
                    
                </View>

            </View>

            <View style={Styles.body}>

                <View style={Styles.bodyTitles}>
                    <Text>Destaques</Text>

                    <TouchableOpacity 
                        style={{flexDirection:"row",alignItems:"center"}}
                        onPress={() => {}} 
                    >
                        <Text>Filtrar</Text>
                        <Image 
                            source={require('../../../Img/Chevron_Down_50px.png')}
                            style={{width:15, height:15, marginLeft:5}} 
                        />
                    </TouchableOpacity>
                    

                </View>

                <View style={Styles.element}>
                    {
                        loading ? (
                            <ActivityIndicator 
                                size="large"
                                color="rgb(253, 191, 39)"
                                style={{marginTop: "50%"}}
                            />
                        ) 
                        :
                        (
                            
                                <FlatList
                                    contentContainerStyle={Styles.listProduct}
                                    data={data}
                                    keyExtractor={data.id}
                                    renderItem = {
                                        ({item}) => (
                                            <View style={Styles.product} >

                                                <View style={Styles.productImg}> 
                                                    <Image
                                                        source={{uri: item.imgLink}}
                                                        style={Styles.img} 
                                                    />
                                                </View>

                                                <View style={Styles.productInfo}>
                                                     <Text style={Styles.productName}>
                                                         {item.name}
                                                     </Text>

                                                     <Text style={Styles.productCat}>
                                                         {item.categoria}
                                                     </Text>

                                                     <Text style={Styles.productPrice}>
                                                         {item.price}
                                                     </Text>
                                                </View>
                                            </View>
                                        )
                                    }

                                />
                            
                        )
                    }
                </View>
            </View>
        </View>
    )
}