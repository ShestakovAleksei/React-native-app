import React, { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Api } from "../../api/Api";

export const PhotosFeed = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    Api.getPhotos()
      .then((res) => {
        setPhotos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (photos.length > 0) {
    const Photo = ({ title, url }) => (
      <View>
        <Text>{title}</Text>
        <Image style={styles.tinyLogo} source={{ uri: url }} />
      </View>
    );

    const renderPhoto = ({ item }) => (
      <TouchableOpacity>
        <Photo title={item.title} url={item.url} />
      </TouchableOpacity>
    );

    return (
      <SafeAreaView>
        <FlatList data={photos} renderItem={renderPhoto} keyExtractor={(photo) => photo.id.toString()} />
      </SafeAreaView>
    );
  } else {
    return <Text>Array is empty</Text>;
  }
};

const styles = StyleSheet.create({
  tinyLogo: {
    margin: 15,
    marginLeft: 0,
    width: 300,
    height: 300,
  },
});
