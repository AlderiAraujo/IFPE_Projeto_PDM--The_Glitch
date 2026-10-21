import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert
} from "react-native";
import { useRouter } from "expo-router";

export default function Register() {

  const router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleRegister = () => {

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const senhaRegex =
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!nome || !email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    if (!emailRegex.test(email)) {
      Alert.alert("Erro", "E-mail inválido");
      return;
    }

    if (!senhaRegex.test(senha)) {
      Alert.alert(
        "Erro",
        "Senha deve possuir 8 caracteres alfa-numéricos"
      );
      return;
    }

    Alert.alert(
      "Sucesso",
      "Cadastro realizado com sucesso!"
    );

    router.replace("/");
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Cadastro
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
      />

      <View style={styles.button}>
        <Text onPress={handleRegister}>
          Cadastrar
        </Text>
      </View>

      <Text
        style={styles.link}
        onPress={() => router.back()}
      >
        Voltar ao Login
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    padding:20
  }
  title: {
    fontSize:28,
    textAlign:"center",
    marginBottom:30
  }
  input:{
    borderWidth:1,
    borderColor:"#CCC",
    borderRadius:8,
    padding:12,
    marginBottom:12
  }
  button:{
    backgroundColor:"#4F46E5",
    padding:15,
    borderRadius:8,
    alignItems:"center"
  }
  link:{
    textAlign:"center",
    marginTop:20,
    color:"#4F46E5"
  }
})