import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import CategoryCard from '../Components/categoryCard';

export default class Category extends Component {
  onPress = (name, quantity) => {
    alert(name + ' ' + quantity);
  };
  render() {
    return (
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.headerTStyle}>Categories</Text>
        </View>
        <View style={style.context}>
          <CategoryCard
            name="Chair"
            quantity={120}
            imgUrl="https://www.ikea.com/us/en/images/products/yngvar-chair-anthracite__0750846_PE746839_S5.JPG?f=xxs"
            onPress={this.onPress}
          />
          <CategoryCard
            name="Lamp"
            quantity={920}
            imgUrl="https://www.ikea.com/us/en/images/products/skurup-pendant-lamp__0880630_PE681113_S5.JPG?f=xxs"
            onPress={this.onPress}
          />
          <CategoryCard
            name="Furniture"
            quantity={920}
            imgUrl="https://www.ikea.com/us/en/images/products/tommaryd-table-anthracite__0742465_PE742611_S5.JPG?f=xs"
            onPress={this.onPress}
          />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#EAEAEA',
    borderBottomWidth: 1,
  },
  context: {
    flex: 9,
  },
  headerTStyle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  productCard: {
    height: 130,
    borderBottomColor: '#EAEAEA',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  imageHolder: {
    flex: 3.5,
    backgroundColor: 'white',
    margin: 10,
  },
  detailContainer: {
    flex: 6,
    marginTop: 25,
  },
  btnContainer: {
    flex: 0.5,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginRight: 10,
  },
  itemTitleStyle: {
    fontSize: 21,
    fontWeight: '700',
  },
  quantityStyle: {
    fontSize: 15,
    fontWeight: '100',
    color: '#929292',
    marginTop: 10,
  },
});
