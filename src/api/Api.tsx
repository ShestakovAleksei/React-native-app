import React from 'react';
// import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import axios from 'axios';


export const Api = {


  getPhotos: () => {
    return axios
            .get('https://jsonplaceholder.typicode.com/photos?_limit=20')
  }
};

