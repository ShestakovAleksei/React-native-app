import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {PhotosFeed} from "./src/features/PhotosFeed/PhotosFeed";
import  {Api}  from './src/api/Api';

export default function App() {

  console.log(Api())


  return (
    <View style={styles.container}>
      <Text>photo-app</Text>
      <PhotosFeed></PhotosFeed>
      <StatusBar style="auto" />
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
