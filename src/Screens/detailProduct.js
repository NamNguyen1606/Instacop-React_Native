/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Icon, ButtonGroup, Rating, Divider} from 'react-native-elements';
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
        backgroundColor: '#DBB690',
        borderRadius: 50,
      }}
    />
  );

  color2 = () => (
    <View
      style={{
        width: 30,
        height: 30,
        backgroundColor: '#307AFF',
        borderRadius: 50,
      }}>
      <Icon
        solid
        name="check"
        type="font-awesome"
        color="white"
        size={20}
        style={{paddingTop: 5}}
      />
    </View>
  );
  color3 = () => (
    <View
      style={{
        width: 30,
        height: 30,
        backgroundColor: '#F89503',
        borderRadius: 50,
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
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* TODO: Header */}
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
          <View>
            <Rating
              type="custom"
              imageSize={19}
              defaultRating={1}
              style={style.ratingStyle}
            />
            <Text style={{textAlign: 'center'}}>(365 reviews)</Text>
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

        <ScrollView>
          <View style={style.container}>
            {/* TODO: topContainer */}
            <View style={style.topContainer}>
              {/* TODO: Slider */}
              <View>
                <ScrollView
                  style={[style.imageHolder]}
                  horizontal={true}
                  pagingEnabled={true}>
                  <Image
                    style={style.img}
                    source={{
                      uri:
                        'https://www.ikea.com/nl/en/images/products/svenbertil-chair-black-broringe-black__0871040_PE620798_S5.JPG?f=xxs',
                    }}
                  />
                  <Image
                    style={style.img}
                    source={{
                      uri:
                        'https://www.ikea.com/nl/en/images/products/svenbertil-chair-black-broringe-black__0874171_PE620844_S5.JPG?f=xxs',
                    }}
                  />
                </ScrollView>
              </View>
            </View>
            {/* TODO: bottomContainer */}
            <View style={style.bottomContainer}>
              <Text style={style.nameProduct}>SKÅLBERG / SPORREN</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={style.priceProduct}>$59.25</Text>
                <Text style={style.salePrice}>$45.95</Text>
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
            </View>
            <Divider
              style={{
                backgroundColor: '#DADADA',

                marginTop: 10,
                height: 1,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={style.tittle}>You may also like</Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Text>Show All</Text>
              </TouchableOpacity>
            </View>
            {/* TODO: Suggestion */}
            <View style={{marginVertical: 10}}>
              <ScrollView horizontal={true}>
                <Image
                  style={style.suggestionImg}
                  source={{
                    uri:
                      'https://www.ikea.com/us/en/images/products/frihult-ceiling-lamp__0689533_PE723026_S5.JPG?f=xs',
                  }}
                />
                <Image
                  style={style.suggestionImg}
                  source={{
                    uri:
                      'https://www.ikea.com/us/en/images/products/ranarp-pendant-lamp__0880552_PE613965_S5.JPG?f=xxs',
                  }}
                />
                <Image
                  style={style.suggestionImg}
                  source={{
                    uri:
                      'https://www.ikea.com/us/en/images/products/yngvar-chair-anthracite__0750850_PE746841_S5.JPG?f=xs',
                  }}
                />
                <Image
                  style={style.suggestionImg}
                  source={{
                    uri:
                      'https://www.ikea.com/nl/en/images/products/svenbertil-chair-black-broringe-black__0874171_PE620844_S5.JPG?f=xxs',
                  }}
                />
                <Image
                  style={style.suggestionImg}
                  source={{
                    uri:
                      'https://www.ikea.com/us/en/images/products/janinge-chair-yellow__0719973_PE732347_S5.JPG?f=xxs',
                  }}
                />
              </ScrollView>
            </View>
            <Divider
              style={{
                backgroundColor: '#DADADA',
                marginTop: 10,
                height: 1,
              }}
            />
            {/* TODO: Detail */}
            <View>
              <Text style={style.tittle}>Description</Text>
              <Text>
                You sit comfortably thanks to the generous size and the soft
                rounded shape of the seat and back support. The clear lacquered
                surface is easy to clean and maintain. You can push the chairs
                under the table or stack up to 5.
              </Text>
            </View>
          </View>
        </ScrollView>
        {/* TODO: Button Adding */}
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
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  topContainer: {
    flex: 6.5,
    backgroundColor: 'white',
  },
  bottomContainer: {
    flex: 3.5,
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  ratingStyle: {
    justifyContent: 'center',
    alignContent: 'center',
    padding: 2,
  },
  img: {
    flex: 1,
    width: Dimensions.get('window').width - 40,
    height: (Dimensions.get('window').height / 10) * 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  header: {
    height: 50,
    backgroundColor: 'rgba(47, 31, 4, 0)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 15,
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
    flexWrap: 'wrap',
  },
  nameProduct: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  priceProduct: {
    fontSize: 18,
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
  },
  suggestionImg: {
    height: 80,
    width: 80,
    marginRight: 15,
    borderRadius: 4,
  },
  tittle: {fontSize: 17, fontWeight: '700'},
});
