import React,{Component}from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Login from './src/screens/Login';
import { Provider } from 'react-redux';
import rootStore from './src/store'
import Loader from './src/components/Loader';
import Auth from './src/screens/Auth';
import Toast from './src/components/Toast';
import Intro from './src/screens/intro';

export default class App extends Component {
  render() {
  return(
    // <Provider store = {(rootStore)}>
    //   <Auth/>
    //   <Loader/>
    //   <Toast/>
    // </Provider>
    <Intro/>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20,
      // backgroundColor:'#696969'
  }
});
