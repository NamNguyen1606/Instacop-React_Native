import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {ProductData} from '../Ultils/productData';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native-gesture-handler';
import ProductCard from '../Components/productCard';
import {Icon} from 'react-native-elements';

export default class ListScreen extends Component {
  onPress = () => {
    this.props.navigation.navigate('DetailProduct');
  };
  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={style.headerContainer}>
          <Image
            style={{
              flex: 1,
            }}
            source={{
              uri:
                'https://www.ikea.com/nl/en/images/products/svenbertil-chair-black-broringe-black__0871040_PE620798_S5.JPG?f=xxs',
            }}
          />
          <View style={style.subHeader}>
            <Icon
              name="bars"
              type="font-awesome"
              color="#101010"
              style={{width: 50, height: 50}}
            />
            <View style={{flexDirection: 'row', top: 0, left: 250}}>
              <Icon
                name="shopping-bag"
                type="font-awesome"
                color="#101010"
                style={{width: 50, height: 50}}
              />
              <Icon
                name="heart"
                type="font-awesome"
                color="#101010"
                style={{width: 50, height: 50}}
              />
            </View>
          </View>
          <View style={style.content}>
            <Text>Cyber Monday</Text>
            <Text style={style.saleType}>Sale Up To</Text>
            <Text style={style.saleType}>70% off</Text>
          </View>
        </View>
        <View style={style.productContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: 'transparent',
              marginHorizontal: 20,
              marginTop: 20,
            }}>
            <Text style={{fontSize: 20, fontWeight: '700'}}>New Arrivals</Text>
            <TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
              <Text>Show All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={{marginLeft: 20, marginTop: 10}} horizontal={true}>
            <ProductCard
              name="RENBERGET"
              price="29.95"
              imgUrl="https://www.ikea.com/nl/en/images/products/eldberget-malskaer-swivel-chair-beige-black__0814555_PE772638_S5.JPG?f=xxs"
              onPress={this.onPress}
            />
            <ProductCard
              name="SKÅLBERG / SPORREN"
              price="45.45"
              imgUrl="https://www.ikea.com/us/en/images/products/ranarp-pendant-lamp__0880552_PE613965_S5.JPG?f=xxs"
              onPress={this.onPress}
            />
            <ProductCard
              name="FORSÅ"
              price="19.00"
              imgUrl="https://www.ikea.com/nl/en/images/products/forsa-work-lamp-white__0879484_PE721951_S5.JPG?f=xxs"
              onPress={this.onPress}
            />
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  headerContainer: {
    flex: 1,
    height: Dimensions.get('window').height * (3 / 5),
    width: '100%',
    backgroundColor: 'white',
  },
  productContainer: {
    height: Dimensions.get('window').height * (2 / 5),
  },
  subHeader: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    top: 20,
    left: 0,
  },
  content: {
    position: 'absolute',
    top: 320,
    left: 15,
  },
  saleType: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'black',
  },
  productContaiter: {
    width: 160,
    height: 180,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginRight: 20,
  },
});
