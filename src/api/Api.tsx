import React from 'react';
// import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { useEffect, useState } from 'react'
import axios from 'axios';


export const Api = () => {
const [photos, setPhotos] = useState([])


useEffect(() => {
        axios
         .get('https://jsonplaceholder.typicode.com/photos?_limit=20')
         .then((res) => {
           setPhotos (res.data)
         })
         .catch((err) => {
           console.log(err);
         });
},[])

    return (photos)
};