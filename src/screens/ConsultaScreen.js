import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ConsultaScreen({ route }) {
  return (
    <View style={{ flex: 1, justifyContent: "start", alignItems: "center", gap: 2 }}>
      <Text style={{fontSize: 32, fontWeight: "bold"}}>Consulta de Usuário</Text>
      <TouchableOpacity
        style={{backgroundColor: "#00CED1", padding: 8, borderRadius: 4, width: 200, alignItems: "center"}}
      >
        <Text style={{color: "white"}}>CONSULTAR</Text>
      </TouchableOpacity>
    </View>
  );
}
