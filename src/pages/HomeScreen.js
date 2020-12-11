import React, {useState, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

import {useNavigation} from '@react-navigation/native';

function HomeScreen(/* props */) {

    const navigation = useNavigation();

    const [name, setName] = useState('');

    const handleSendButton = () => {
        //props.navigation.navigate('About');
        //aqui posso colocar o primeirop parâmetro e o que eu quiser
        navigation.navigate('About', {name});
    }

    useLayoutEffect(()=> {
        navigation.setOptions({
            title: name
        });
    });


    return(
        <View style={styles.container}>
            <Text>Tela Home</Text>
            <Text>Qual o seu nome?</Text>
            <TextInput 
                style={styles.input}                  
                value={name} 
                onChangeText={t=>setName(t)}

            />
            <Button 
                title="Enviar" 
                onPress={handleSendButton}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    input:{
        width: 250,
        padding: 10,
        fontSize: 15,
        backgroundColor: '#DDD'
    }
});

export default HomeScreen;