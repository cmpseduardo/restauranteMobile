import React from "react"
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Restaurantes( {navigation} ) {
    const restaurantes = [
        {
            "logo":"https://img.freepik.com/vetores-premium/logotipo-do-restaurante-retro_23-2148474404.jpg?w=2000",
            "nome":"Restaurante do Zé",
            "nota":"4.5",
            "descricao":
                {
                    "nome":"Restaurante do Zé",
                    "endereco": "Rua das Palmeiras, 478",
                    "telefone": "(19) 99879-9499",
                    "img": "https://media-cdn.tripadvisor.com/media/photo-s/07/37/8a/0e/fachada-do-restaurante.jpg"
                }
               
        },
        {
            "logo": "https://img.elo7.com.br/product/zoom/2E97A7E/logotipo-personalizada-restaurante-logotipo-restaurante.jpg",
            "nome":"Restaurante do Beto",
            "nota":"4.9",
            "descricao": 
                {
                    "nome":"Restaurante do Zé",
                    "endereco": "Rua dos Ipes, 289",
                    "telefone": "(19) 99397-9989",
                    "img": "https://media-cdn.tripadvisor.com/media/photo-p/1a/e4/83/ac/photo0jpg.jpg"
                }
                
        },
        {
            "logo":"https://images.vexels.com/media/users/3/215185/raw/9975fac6938d6d19c33105e44655a3c8-design-de-logotipo-do-restaurante-cheff.jpg",
            "nome":"Restaurante do Nono",
            "nota":"5.0",
            "descricao": 
                {
                    "nome":"Restaurante do Zé",
                    "endereco": "Rua das Botões, 48",
                    "telefone": "(19) 99968-9889",
                    "img": "https://media-cdn.tripadvisor.com/media/photo-s/10/0d/e0/14/photo0jpg.jpg"
                }
            
        }
    ];


    return(
        <View>
            {
            restaurantes.map((restaurante, indice) => {
                return(
                <View>
                    <TouchableOpacity onPress={() => {navigation.navigate("Descricao", { "descricao":restaurante.descricao })}}>

                        <View style={styles.container}>
                            <Image source={{uri: restaurante.logo}} style={styles.logo}></Image>

                            <View style={styles.nameAndRate}>
                                <Text style={styles.title}>{restaurante.nome}</Text>

                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/616/616489.png'}} style={{height: 10, width: 10}}></Image>
                                    <Text style={{marginLeft: 5}}>{restaurante.nota}</Text>
                                </View>

                            </View>

                        </View>
                    </TouchableOpacity>
                    </View>
                )
            })
        }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        margin: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white'   
    },


    title: {
        color: 'black',
        fontWeight: 'bold'
    },

    logo: {
        borderRadius: 50,
        height: 50,
        width: 50
    },

    nameAndRate: {
        marginLeft: 15
    }
  });