import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import { useState } from 'react';

export default function App() {

  const [nome,setNome] = useState('');
  const [email,setEmail] = useState('');
  const [senha,setSenha] = useState('');

  function cadastro(){
    alert('ok!');
}

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Image style={{width: 200,height: 100}} source={require('./assets/Escudo_Vasco_2020.png')} />

      <TextInput placeholder='Nome' style={styles.textInput} onChangeText={text=>setNome(text)} />

      <TextInput placeholder='Email' style={styles.textInput} onChangeText={text=>setEmail(text)} />

      <TextInput secureTextEntry={true} placeholder='Senha' style={styles.textInput} onChangeText={text=>setSenha(text)} />

      <TouchableOpacity style={styles.btnCadastro} onPress={()=>cadastro()} >
        <Text style={{color: 'white', textAlign:'center'}} >Cadastrar!</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27282D',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  textInput:{
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    margin: 10    
  },
  btnCadastro: {
    width: '100%',
    height: 40,
    backgroundColor: 'red',
    borderRadius: 20,
    justifyContent: 'center'
  }
});
