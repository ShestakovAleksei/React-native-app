import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { PhotosFeed } from "./src/features/PhotosFeed/PhotosFeed";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>photo-app</Text>
      <PhotosFeed />
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
  title: {
    fontSize: 30,
    padding: 15,
  },
});
