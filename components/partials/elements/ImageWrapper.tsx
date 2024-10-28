import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { SPACE_URL } from '@/utils/Apis/Api';

const ImageWrapper = ({ imgUrl, style }: any) => {
  return (
    <Image
      source={{ uri: SPACE_URL + imgUrl }}
      style={[style]} // Merge default and custom styles
    />
  );
};

const styles = StyleSheet.create({
  defaultImageStyle: {
    width: 100,
    height: 100,
  },
});

export default ImageWrapper;
