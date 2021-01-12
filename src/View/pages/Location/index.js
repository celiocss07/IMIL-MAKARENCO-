import React, { useRef, useState} from "react";
import {View, TextInput, TouchableOpacity, Image, Text, ActivityIndicator} from "react-native";
import styles from "./style"



export default function Location () {

    const ruaRef = useRef()
    const bairroRef = useRef()
    const municipioRef = useRef()
    const provinciaRef = useRef()
    
    const [bairro, setBairro ] = useState()
    const [rua, setRua ] = useState()
    const [municipio, setMunicipio ] = useState()
    const [postalCode, setPostalCode ] = useState()
    const [city, setCity ] = useState()
    const [loading, setLoading ] = useState(false)


    function handleSubmit() {
        setLoading(true)
        let newAddress = {
            postalCode: postalCode,
            rua: rua,
            bairro: bairro,
            municipio: municipio,
            city: city
        }
    }
    

    return(
        <View style={styles.container}>

                <View style={styles.header} >

                    <TouchableOpacity onPress={ () => {}} style={styles.back}>

                        <Image source={require("./../../../Img/icons8_Backspace_50px_2.png") } style={ styles.backImg} />
                    </TouchableOpacity>

                    <View> 
                        <Text style={styles.headerTitle} > Adicionar endereço </Text>
                    </View>
                </View>

                <View style={styles.form} >

                    <TextInput 
                        style ={styles.input}
                        placeholder = "Código postal(opcional)" 
                        autoCompleteType ="postal-code" 
                        keyboardAppearance ="dark" 
                        textContentType ="postalCode"
                        returnKeyType="next"
                        onSubmitEditing={ () => ruaRef.current.focus()}
                        value={postalCode}
                        onChangeText={setPostalCode}
                        
                        />

                    <TextInput 
                        style ={styles.input}
                        placeholder = "Rua" 
                        autoCompleteType ="street-address" 
                        keyboardAppearance ="dark" 
                        textContentType ="streetAddressLine1"
                        returnKeyType="next"
                        ref={ruaRef}
                        onSubmitEditing={ () => bairroRef.current.focus()}
                        value={rua}
                        onChangeText={setRua}
                    />

                    <TextInput 
                        style ={styles.input}
                        placeholder = "Bairro" 
                        autoCompleteType ="street-address" 
                        keyboardAppearance ="dark" 
                        textContentType ="addressCityAndState"
                        returnKeyType="next"
                        ref={bairroRef}
                        onSubmitEditing={ () => municipioRef.current.focus()}
                        value={bairro}
                        onChangeText={setBairro}
                    />
                    
                    
                    <TextInput 
                        style ={styles.input}
                        placeholder = "Município" 
                        autoCompleteType ="street-address" 
                        keyboardAppearance ="dark" 
                        textContentType ="addressCityAndState"
                        returnKeyType="next"
                        ref={municipioRef}
                        onSubmitEditing={ () => provinciaRef.current.focus()}
                        value={municipio}
                        onChangeText={setMunicipio}
                    />


                    <TextInput 
                        style ={styles.input}
                        placeholder = "Província" 
                        autoCompleteType ="street-address" 
                        keyboardAppearance ="dark" 
                        textContentType ="addressCity"
                        returnKeyType="send"
                        ref={provinciaRef}
                        onSubmitEditing={ () => handleSubmit() }
                        value={city}
                        onChangeText={setCity}
                    />


                    <TouchableOpacity onPress={ () => handleSubmit()} style={styles.submitButton} >

                        {
                            loading ? ( <ActivityIndicator size = "small" color="#FFF" />) 
                            : ( <Text style={styles.submitText}> Guardar endereço</Text>)
                        }
                    </TouchableOpacity>
                    

                </View>

        </View>
    )
}