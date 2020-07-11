import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ProductData} from '../Ultils/productData';
import {FlatList} from 'react-native-gesture-handler';
import ProductCard from '../Components/ProductCard';

export default class ListScreen extends Component {
  render() {
    return (
      <View style={style.container}>
        <ProductCard
          name="Balenaga Track 3.0"
          price="150,000"
          // salePrice="100,000"
          url={require('C:/Users/Nam Nguyen/AndroidStudioProjects/React_Native/project_a/src/assets/image/balen.jpg')}
          onPress={() => {
            this.props.navigation.navigate('DetailProduct');
          }}
        />
        <ProductCard
          name="Balenaga"
          price="250,000"
          salePrice="100,000"
          url= {require("C:/Users/Nam Nguyen/AndroidStudioProjects/React_Native/project_a/src/assets/image/balen.jpg")}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'stretch',
  },
});
