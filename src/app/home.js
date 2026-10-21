import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { useRouter } from "expo-router";

export default function Home() {

  const router = useRouter();

  const usuario = {
    nome: "Teste",
    linguagem: "Python",
    nivel: 1,
    desafiosConcluidos: 2,
    totalDesafios: 10
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Olá, {usuario.nome}
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Linguagem Atual
        </Text>

        <Text>
          {usuario.linguagem}
        </Text>

        <Text>
          Nível Atual: {usuario.nivel}
        </Text>

        <Text>
          Concluídos:
          {" "}
          {usuario.desafiosConcluidos}
          /
          {usuario.totalDesafios}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          router.push("/challenges/python/lvl1")
        }
      >
        <Text>
          Continuar Estudando
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
      >
        <Text>
          JavaScript (Em breve)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
      >
        <Text>
          Java (Em breve)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logout}
        onPress={() => router.replace("/")}
      >
        <Text style={{ color: "#FFF" }}>
          Logout
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    justifyContent:"center"
  },
  title:{
    fontSize:28,
    fontWeight:"bold",
    marginBottom:20
  },
  card:{
    backgroundColor:"#FFF",
    padding:20,
    borderRadius:10,
    elevation:3,
    marginBottom:20
  },
  cardTitle:{
    fontSize:18,
    fontWeight:"bold",
    marginBottom:10
  },
  button:{
    backgroundColor:"#E5E7EB",
    padding:15,
    borderRadius:8,
    marginBottom:10,
    alignItems:"center"
  },
  logout:{
    marginTop:20,
    backgroundColor:"#DC2626",
    padding:15,
    borderRadius:8,
    alignItems:"center"
  }
})
