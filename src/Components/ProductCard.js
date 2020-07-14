import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Text, Image} from 'react-native';
import {Card} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default class ProductCard extends Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={this.props.onPress}>
        <View style={style.productContaiter}>
          <View style={{flex: 9}}>
            <Image
              style={{flex: 1, resizeMode: 'cover'}}
              source={{
                uri: this.props.imgUrl,
              }}
            />
            <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
              {this.props.name}
            </Text>
            <Text>{this.props.price}</Text>
          </View>
          <View style={{flex: 1}} />
        </View>
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  productContaiter: {
    width: 160,
    height: 180,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginRight: 20,
  },
});
