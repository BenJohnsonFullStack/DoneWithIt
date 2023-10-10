// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Text } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 0.5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("./assets/app-logo.png")}
          style={{
            width: 100,
            height: 100,
            marginTop: 50,
          }}
        />
        <Text
          style={{
            color: "#111",
            fontSize: 18,
          }}
        >
          Sell What You Don't Need
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "tomato",
            width: "100%",
            height: 70,
          }}
        />
        <View
          style={{
            backgroundColor: "turquoise",
            width: "100%",
            height: 70,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
