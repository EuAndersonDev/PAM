import React, { useState } from 'react'; // Importa React e o hook useState
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'; // Importa componentes do React Native

// Função principal do aplicativo
const App = () => {
  // Estados para armazenar o nome de usuário e a senha
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Função que é chamada quando o botão de login é pressionado
  const handleLogin = () => {
    // Aqui, você poderia adicionar lógica para autenticar o usuário
    alert(`Usuário: ${username}\nSenha: ${password}`); // Exibe um alerta com as credenciais
  };

  return (
    // Contêiner principal que centraliza o conteúdo
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        value={username}
        onChangeText={setUsername} // Atualiza o estado do nome de usuário
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true} // Esconde o texto digitado
        value={password}
        onChangeText={setPassword} // Atualiza o estado da senha
      />
      <Button title="Entrar" onPress={handleLogin} /> {/* Botão de login */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor:'#ccc',
    borderWidth:1,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '80%',
  },
});

export default App
