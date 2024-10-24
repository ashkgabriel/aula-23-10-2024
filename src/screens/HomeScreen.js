import React from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
      <Text>Bem vindo à Tela Home</Text>
      <Button
        title="Ir para detalhes"
        onPress={() => navigation.navigate("Details", { itemId: 42 })}
      />
    </View>
  );
}
