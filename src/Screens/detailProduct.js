import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Icon, ButtonGroup} from 'react-native-elements';
export default class DetailProduct extends Component {
  state = {
    loveCheck: 'heart',
    isCheck: true,
  };
  color1 = () => (
    <View
      style={{
        width: 25,
        height: 25,
        backgroundColor: 'blue',
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 2,
      }}
    />
  );

  color2 = () => (
    <View
      style={{
        width: 30,
        height: 30,
        backgroundColor: 'red',
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 2,
      }}>
      <Icon solid name="check" type="font-awesome" color="black" size={25} />
    </View>
  );
  color3 = () => (
    <View
      style={{
        width: 30,
        height: 30,
        backgroundColor: 'yellow',
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 2,
      }}
    />
  );

  buttonGroup = [
    {element: this.color1},
    {element: this.color2},
    {element: this.color3},
  ];
  render() {
    return (
      <View style={style.container}>
        <View style={style.topContainer}>
          <View style={style.header}>
            <View style={style.iconBack}>
              <Icon
                solid
                name="arrow-left"
                type="font-awesome"
                color="black"
                onPress={() => this.props.navigation.goBack()}
              />
            </View>
            <View style={style.iconLove}>
              <Icon
                solid
                name={this.state.loveCheck}
                type="font-awesome"
                color="red"
                onPress={() =>
                  this.setState(
                    this.state.isCheck
                      ? {loveCheck: 'heart-o', isCheck: false}
                      : {loveCheck: 'heart', isCheck: true},
                  )
                }
              />
            </View>
          </View>

          <ScrollView
            style={style.imageHolder}
            horizontal={true}
            pagingEnabled={true}>
            <Image
              style={style.img}
              source={require('C:/Users/Nam Nguyen/AndroidStudioProjects/React_Native/project_a/src/assets/image/balen.jpg')}
            />
            <Image
              style={style.img}
              source={require('C:/Users/Nam Nguyen/AndroidStudioProjects/React_Native/project_a/src/assets/image/balen.jpg')}
            />
          </ScrollView>
        </View>
        <View style={style.bottomContainer}>
          <Text style={style.nameProduct}>Balenciaga Track V3.0</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={style.priceProduct}>120,000 VND</Text>
            <Text style={style.salePrice}>120,000 VND</Text>
          </View>
          <ButtonGroup
            onPress={() => {}}
            buttons={this.buttonGroup}
            selectedIndex="0"
            containerStyle={{
              height: 40,
              width: 120,
              borderColor: 'transparent',
            }}
          />
          <TouchableOpacity activeOpacity={0.9}>
            <View style={style.addButton}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'white',
                  textAlign: 'center',
                }}>
                ADD
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  topContainer: {
    flex: 7,
    backgroundColor: 'white',
  },
  bottomContainer: {
    flex: 3,
    backgroundColor: 'white',
  },
  img: {
    flex: 1,
    width: Dimensions.get('window').width - 40,
    height: (Dimensions.get('window').height / 10) * 6,
    resizeMode: 'stretch',
  },
  header: {
    height: 50,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    marginHorizontal: 30,
  },
  iconBack: {
    width: 50,
    height: 50,
    backgroundColor: 'transparent',
  },
  iconLove: {
    width: 50,
    height: 50,
    backgroundColor: 'transparent',
  },
  imageHolder: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  nameProduct: {
    fontSize: 22,
    marginLeft: 20,
    marginTop: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  priceProduct: {
    fontSize: 18,
    marginLeft: 20,
    color: 'black',
    textDecorationLine: 'line-through',
  },
  salePrice: {
    marginLeft: 20,
    fontSize: 18,
    color: 'red',
  },
  addButton: {
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 20,
  },
});
