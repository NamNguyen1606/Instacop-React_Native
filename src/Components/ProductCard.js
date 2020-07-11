import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Text, Image} from 'react-native';
import {Card} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default class ProductCard extends Component {
  render() {
    return (
      <TouchableOpacity
        style={style.touchingContainer}
        activeOpacity={0.9}
        onPress={this.props.onPress}>
        <View style={style.container}>
          {/* TODO: Image */}
          <View style={style.imageHolder}>
            <Image style={style.img} source={this.props.url} />
          </View>
          {/* TODO: Detail Holder */}
          <View style={style.detailHolder}>
            <Text style={style.productNameTittle}>{this.props.name}</Text>
            <Text
              style={[style.priceTittle, {textDecorationLine: 'line-through'}]}>
              {this.props.price} VND
            </Text>
            <Text style={[style.priceTittle, {color: 'red'}]}>
              {this.props.salePrice}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width:
      Dimensions.get('window').width / 2 - Dimensions.get('window').width / 10,
  },
  touchingContainer: {
    height:
      Dimensions.get('window').height / 2 - Dimensions.get('window').height / 7,
    margin: 15,
    backgroundColor: 'transparent',
    elevation: 2,
  },
  imageHolder: {
    flex: 5,
    marginHorizontal: 8,
    marginTop: 8,
    backgroundColor: 'white',
  },
  img: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  detailHolder: {
    flex: 2,
    flexDirection: 'column',
    marginHorizontal: 10,
    marginVertical: 5,
    justifyContent: 'center',
    alignContent: 'center',
  },
  productNameTittle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  priceTittle: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});
