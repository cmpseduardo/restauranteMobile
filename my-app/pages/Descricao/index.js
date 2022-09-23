import { View, Text, Image } from 'react-native';

export default function Descricao({ route }) {
var {descricao} = route.params
       
    return(
    <View>
            <Image source={{uri: descricao.img}} style={{height: 200, width: 500}}/>
            <Text>{descricao.nome}</Text>
            <Text>Endereço: {descricao.endereco}</Text>
            <Text>Telefone: {descricao.telefone}</Text>
        </View>
    )
}
