import React, { Component } from 'react'
//import axios from 'axios';
import api from './src/services/api';
import { Image, View, Text, TextInput, ActivityIndicator, FlatList, Alert, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      data0: [],
      parametro: "",
      isLoading: true
      
    };
  }


  componentDidMount() {
    this.loadProduct(this.state.parametro);
  }

  loadProduct = async (parametro) => {
    
    if(parametro.length <= 1){
      fetch(`http://192.168.43.53:8085/computador`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.produtos });
        
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
    }else{
      fetch(`http://192.168.43.53:8085/${this.state.parametro}`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.produtos });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
    }
   
    
    
  }
  render() {

    const { data, isLoading } = this.state;

    return (
      <View style={styles.container}>

        <StatusBar barStyle="ligth-content" backgroundColor="rgb(250, 186, 46)" />

        <View style={styles.header}>

          <View style={{ height: "50%", flexDirection: "row", justifyContent: "space-between", alignItems:"center" }}>
            <Image
              source={require('./src/Img/22C.png')}
              style={{ maxHeight: 70, maxWidth: 100, marginLeft: -20 }}
            />
             <Image
              source={require('./src/Img/icons8_Male_User_48.png')}
              style={{ maxHeight: 70, maxWidth: 100, marginLeft: -20 }}
            />
          </View>

          <View style={styles.headerBoxSearch}>
    
            <TextInput
              style={styles.search}
              placeholder={"Pesquisar"}
              onChangeText={(text) => this.setState({ parametro: text })}
            />
            

            <TouchableOpacity
              onPress={() => { this.loadProduct(this.state.parametro); }}
              style={styles.btnSearch}
            >
              <Image
                style={{ height: 40, width: 60, marginLeft: -10 }}
                source={require('./src/Img/2CC.png')}
              />
            </TouchableOpacity>
            

          </View>

        </View>

        {isLoading ? <ActivityIndicator
          size="large" color="rgb(250, 186, 46)"
          style={{ marginTop: "70%" }} /> : (

            <FlatList
              contentContainerStyle={styles.list}
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (

                <View style={styles.box}>

                  <View style={styles.productContainer}>

                    <View style={styles.containerImg}>

                      <Image source={require('./src/Img/TOYOTA.png')} style={styles.img}
                      />

                    </View>

                    <View style={styles.containerProduct}>

                      <Text style={styles.productTitle}>{item.nome} </Text>
                      <Text style={styles.productMarca}>{item.marca}</Text>
                      <Text style={styles.productMarca}>{item.preco}</Text>

                    </View>

                  </View>

                  <View>

                    <TouchableOpacity style={styles.productButton} onPress={() => { }}>

                      <Text style={styles.productButtonText}>Acessar</Text>

                    </TouchableOpacity>

                  </View>

                </View>

              )}
            />)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",

  },
  header: {
    height: "20%",
    backgroundColor: "rgb(258,186,46)",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  }
  ,
  search: {
    backgroundColor: "#fff",
    width: "50%",
    height: 40,

    fontSize: 18,
    paddingLeft: 10
  },
  box: {

    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    marginBottom: 20,

  },
  list: {
    padding: 20
  },
  productContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around"

  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center"
  },
  productMarca: {
    fontSize: 16,
    color: "#999",
    marginTop: 5,
    lineHeight: 24,

  },
  productButton: {
    height: 42,
    width: '90%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'rgb(258,186,46)',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center"
  },
  productButtonText: {
    fontSize: 16,
    color: "rgb(258,186,46)",
    fontWeight: "bold"
  },
  containerImg: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingBottom: 10,
    width: '30%',
    height: '100%'
  },
  containerProduct: {
    width: '60%'
  },

  img: {
    width: '100%',
    height: 120,

  },
  btnSearch: {
    height: 40,
    width: 40,
    borderLeftColor: "#FFF",
    borderRightColor: "#FFF",
    borderTopColor: "#FFF",
    borderBottomColor: "#FFF",
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: "rgb(258,186,46)"

  },
  headerBoxSearch: {
    flexDirection: "row",
    height: "50%",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingBottom: "4%"
  }

})