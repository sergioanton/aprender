import React from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

function AboutScreen() {

    const navigation = useNavigation();
    const route = useRoute();

    //Aqui eu uso as routes para pegar o que me foi enviado
    //com props eu coloco o props em cima e faço assim const name = props.route.params.name;
    
    //Posso também usar as devidas protções por exemplo caso não envie os parâmetros
    // então eu faria assim para não dar erro -> const name = route.params?.name; (e enviará nada e
    // não dará erro na aplicação e caso eu queira colocar um valor padrão, eu uso
    const name = route.params?.name ?? 'Visitante';
    //const name = route.params.name;

    const handleBackButton = () => {
        //navigation.navigate('Home'); // ou
        navigation.goBack();
    }

    return(
        <View style={styles.container}>
            <Text>Tela de Sobre: {name}</Text>
            <Button title="Voltar" onPress={handleBackButton} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
});

export default AboutScreen;