/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Rating, Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default class SettingPage extends Component {
  onPress = () => {
    alert('onPress');
  };
  render() {
    return (
      <View style={style.container}>
        <View style={style.header}>
          {/* <MaterialCommunityIcons
            name="keyboard-backspace"
            color="#46505D"
            size={30}
          /> */}
          <Text style={style.headerStyle}>Settings</Text>
        </View>
        {/* //TODO: User */}
        <View style={style.userContainer}>
          <View style={style.userInfoContainer}>
            <Text style={style.functionStyle}>Edit Profile</Text>
            <Text style={style.nameUserStyle}>Oliver Smith</Text>
            <Rating
              type="custom"
              imageSize={19}
              defaultRating={1}
              style={{paddingVertical: 7, alignItems: 'flex-start'}}
            />
          </View>
          <View style={style.imageUserContainer}>
            <Image
              style={{
                width: 85,
                height: 85,
                borderRadius: 20,
                top: -5,
                left: 0,
              }}
              source={{uri: 'https://randomuser.me/api/portraits/men/41.jpg'}}
            />
            <View style={style.notificationContainer}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>3</Text>
            </View>
          </View>
        </View>
        {/* TODO: Language */}
        <View style={style.languageContainer}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{
                height: 22,
                width: 35,
                borderRadius: 3,
                marginRight: 10,
              }}
              source={{
                uri:
                  'https://cdn.webshopapp.com/shops/94414/files/53448640/australia-flag-vector-free-download.jpg',
              }}
            />
            <Text
              style={{
                fontSize: 20,
                color: '#46505D',
                bottom: 4,
                fontWeight: '600',
              }}>
              Language
            </Text>
          </View>
          <View
            style={{
              height: 40,
              width: 100,
              backgroundColor: '#00D58C',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18, color: 'white'}}>Change</Text>
          </View>
        </View>
        {/* TODO: Function */}
        <View style={style.functionContainer}>
          <FunctionButton title="Wallet" onPress={this.onPress} />
          <FunctionButton title="Saved" onPress={this.onPress} />
          <FunctionButton title="Contact Support" onPress={this.onPress} />
          <FunctionButton title="Terms of Service" onPress={this.onPress} />
          <FunctionButton title="Feedback" onPress={this.onPress} />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3E3E3',
  },
  header: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingTop: 30,
  },
  userContainer: {
    flex: 2,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingTop: 30,
  },
  userInfoContainer: {
    flex: 2,
    backgroundColor: 'white',
  },
  imageUserContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  languageContainer: {
    flex: 1.5,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopColor: '#CFCFCF',
    borderTopWidth: 0.5,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.3,
  },
  functionContainer: {
    flex: 6,
    backgroundColor: 'white',
  },
  headerStyle: {
    fontSize: 38,
    fontWeight: '700',
    color: '#46505D',
  },
  nameUserStyle: {
    fontSize: 31,
    fontWeight: '700',
    color: '#46505D',
  },
  functionStyle: {
    fontSize: 19,
    fontWeight: '600',
    color: '#46505D',
  },
  subFunctionContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 100,
    flex: 1,
    paddingHorizontal: 20,
    borderBottomColor: '#CFCFD0',
    borderBottomWidth: 0.5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notificationContainer: {
    height: 32,
    width: 32,
    borderRadius: 8,
    backgroundColor: '#FF0046',
    justifyContent: 'center',
    alignItems: 'center',
    top: -107,
    left: 42,
  },
});

class FunctionButton extends Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={this.props.onPress}
        style={{height: 75}}>
        <View style={style.subFunctionContainer}>
          <Text style={style.functionStyle}>{this.props.title}</Text>
          <Icon
            name="chevron-right"
            type="font-awesome"
            style={{alignItems: 'flex-end'}}
            color="#CFCFD0"
            size={18}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
