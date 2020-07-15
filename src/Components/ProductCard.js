import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Text, Image} from 'react-native';
import {Card} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default class ProductCard extends Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={this.props.onPress}>
        <View style={style.productContaiter}>
          <View style={{flex: 9.5}}>
            <Image
              style={{flex: 1, resizeMode: 'cover'}}
              source={{
                uri: this.props.imgUrl,
              }}
            />
            <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
              {this.props.name}
            </Text>
            <View style={style.priceContainer}>
              {this.props.salePrice === undefined ? (
                <Text style={style.price}>${this.props.price}</Text>
              ) : (
                <Text
                  style={[style.price, {textDecorationLine: 'line-through'}]}>
                  ${this.props.price}
                </Text>
              )}
              {this.props.salePrice === undefined ? null : (
                <Text style={style.salePrice}>${this.props.salePrice}</Text>
              )}
            </View>
          </View>
          <View style={{flex: 0.5}} />
        </View>
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  productContaiter: {
    width: 160,
    height: 170,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginRight: 20,
  },
  priceContainer: {
    flexDirection: 'row',
  },
  price: {
    color: 'black',
    fontSize: 15,
  },
  salePrice: {
    fontSize: 15,
    color: 'red',
    marginLeft: 5,
  },
});
