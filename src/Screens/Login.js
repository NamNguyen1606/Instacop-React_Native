/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

export default class Login extends Component {
  state = {
    username: '',
    password: '',
    isAdmin: false,
  };
  dismissKeyboard = () => Keyboard.dismiss();
  handleUsername = val => this.setState({username: val});
  handlePassword = val => this.setState({password: val});
  login = () => {
    if (this.state.username === 'nam' && this.state.password === 'nam') {
      this.props.navigation.navigate('ListScreen');
    } else {
      this.dismissKeyboard();
      alert('wrong');
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.dismissKeyboard}>
        <View style={style.Container}>
          <View style={style.ContainerHeader} />

          <View style={style.ContainerHolder}>
            <Text style={style.Title}>Sign In</Text>

            <TextInput
              style={style.TextInputUserName}
              placeholder="Username"
              placeholderTextColor="grey"
              onChangeText={val => this.handleUsername(val)}
            />

            <TextInput
              style={style.TextInputPassword}
              placeholder="Password"
              placeholderTextColor="grey"
              secureTextEntry={true}
              onChangeText={val => this.handlePassword(val)}
            />

            {/* TODO: Admin */}
            <View style={style.ContainerType}>
              <TouchableHighlight
                activeOpacity={1}
                style={[
                  style.TypeButton,
                  {
                    backgroundColor:
                      this.state.isAdmin == true ? 'black' : '#EFEFEF',
                  },
                ]}
                onPress={() => {
                  this.setState({isAdmin: true});
                }}>
                <Text
                  style={[
                    style.TitleSubmitStb,
                    {
                      color: this.state.isAdmin == true ? 'white' : 'black',
                      fontSize: 15,
                    },
                  ]}>
                  Admin
                </Text>
              </TouchableHighlight>
              {/* TODO: Customer */}
              <TouchableHighlight
                activeOpacity={1}
                style={[
                  style.TypeButton,
                  {
                    backgroundColor:
                      this.state.isAdmin == true ? '#EFEFEF' : 'black',
                  },
                ]}
                onPress={() => {
                  this.setState({isAdmin: {isAdmin: false}});
                }}>
                <Text
                  style={[
                    style.TitleSubmitStb,
                    {
                      color: this.state.isAdmin == true ? 'black' : 'white',
                      fontSize: 15,
                    },
                  ]}>
                  Customer
                </Text>
              </TouchableHighlight>
            </View>

            <TouchableOpacity
              style={style.SubmitButton}
              activeOpacity={0.8}
              onPress={this.login}>
              <Text style={style.TitleSubmitStb}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <View
                style={{
                  alignItems: 'center',
                  marginBottom: 100,
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: '600',
                    alignContent: 'center',
                  }}>
                  Forgot your password?
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                style.SubmitButton,
                {
                  marginTop: 0,
                  backgroundColor: 'white',
                  borderColor: '#5795FD',
                  borderWidth: 2,
                },
              ]}
              activeOpacity={0.8}
              onPress={() => {
                this.props.navigation.navigate('MainPage');
              }}>
              <Text
                style={[
                  style.TitleSubmitStb,
                  {color: '#5795FD', fontWeight: '700'},
                ]}>
                LOGIN WITH FACEBOOK
              </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <View style={{alignItems: 'center', marginBottom: 20}}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: '600',
                    alignContent: 'center',
                  }}>
                  Don't have an account? Sign Up
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const style = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'stretch',
    backgroundColor: 'black',
  },
  ContainerHeader: {
    flex: 1,
    backgroundColor: 'black',
  },
  ContainerHolder: {
    flex: 9,
    backgroundColor: 'white',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  ContainerType: {
    marginHorizontal: 40,
    marginBottom: 20,
    height: 55,
    backgroundColor: 'grey',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  Title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 40,
    marginLeft: 40,
  },
  TextInputUserName: {
    borderBottomWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginHorizontal: 40,
    marginTop: 30,
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  TextInputPassword: {
    borderBottomWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginHorizontal: 40,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  SubmitButton: {
    height: 50,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginHorizontal: 40,
    marginTop: 15,
    marginBottom: 15,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  TypeButton: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  TitleSubmitStb: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
    shadowColor: 'grey',
  },
});
