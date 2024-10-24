import React from "react";
import { Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CadastroScreen({ route }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        gap: 8,
      }}
    >
      <Text style={{ fontSize: 32, fontWeight: "700" }}>
        Cadastro de Usuário
      </Text>
      <TextInput
        placeholder="Nome"
        style={{
          width: "60%",
          borderColor: "gray",
          borderWidth: 1,
          paddingLeft: 8,
          borderRadius: 4
        }}
      />
      <TextInput
        placeholder="Email"
        style={{
          width: "60%",
          borderColor: "gray",
          borderWidth: 1,
          paddingLeft: 8,
          borderRadius: 4
        }}
      />
      <TextInput
        placeholder="Consulta"
        style={{
          width: "60%",
          borderColor: "gray",
          borderWidth: 1,
          paddingLeft: 8,
          borderRadius: 4
        }}
      />
      <TouchableOpacity style={{backgroundColor: "purple", borderRadius: 4, padding: 8, paddingHorizontal: 40}}>
        <Text style={{color: "white", fontWeight: "bold"}}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
