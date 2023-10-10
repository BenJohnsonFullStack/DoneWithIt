// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "tomato",
          width: "100%",
          height: "8%",
        }}
      />
      <View
        style={{
          backgroundColor: "turquoise",
          width: "100%",
          height: "8%",
        }}
      />
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
