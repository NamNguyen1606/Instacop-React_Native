import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class CategoryCard extends Component {
  onPress = () => this.props.onPress(this.props.name, this.props.quantity);
  render() {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={this.onPress}>
        <View style={style.productCard}>
          <View style={style.imageHolder}>
            <Image
              // eslint-disable-next-line react-native/no-inline-styles
              style={{flex: 1, resizeMode: 'center', borderRadius: 7}}
              source={{
                uri: this.props.imgUrl,
              }}
            />
          </View>
          <View style={style.detailContainer}>
            <Text style={style.itemTitleStyle}>{this.props.name}</Text>
            <Text style={style.quantityStyle}>{this.props.quantity} items</Text>
          </View>
          <View style={style.btnContainer}>
            <Icon name="play" type="font-awesome" color="black" size={12} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
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
