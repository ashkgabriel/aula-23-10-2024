import React from "react";
import { Button, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function InicialScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 2 }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Cadastro")}
        style={{ padding: 8, backgroundColor: "purple", borderRadius: 4, paddingHorizontal: 40 }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Ir para cadastro
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Consulta")}
        style={{ padding: 8, backgroundColor: "blue", borderRadius: 4, paddingHorizontal: 40 }}
      >
        <Text style={{color: "white", fontWeight: "bold"}}>Ir para consulta</Text>
      </TouchableOpacity>
    </View>
  );
}
