import  React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { View ,Image, Text} from 'react-native';

import Login from '../screens/Login';
import Registration from '../screens/Registration';


const Tab = createBottomTabNavigator();

const Tabs = () => {
   return(
    <Tab.Navigator
    tabBarOptions = {{
        showLabel:false,
        style :{
           position:'absolute',
           bottom:25,
           left: 20,
           right:20,
           elevation:0,
           backgroundColor:"#fff",
           borderRadius:15,
           height:90,
        }
     }}>
      <Tab.Screen name="Login" component={Login}
       options = {{
        tabBarIcon: ({focused}) =>(
           <View style = {{
              alignItems:'center',
              justifyContent:'center'
              }}>
              <Image
              source = { require('../assets/images/login.png')}
              resizeMode='contain'
              style={{
                 width:25,
                 height:25,
                 tintColor:focused? '#e32f45' : '#748c94',
              }}
              />
              <Text 
              style = {{ 
                 color:focused? '#e32f45' : '#748c94',
                 fontSize:12,
                 }}>LOGIN</Text>
           </View>
        )
     }}/>
      <Tab.Screen name="Registration" component={Registration}
       options = {{
        tabBarIcon: ({focused}) =>(
           <View style = {{
              alignItems:'center',
              justifyContent:'center'
              }}>
              <Image
              source = { require('../assets/images/post.png')}
              resizeMode='contain'
              style={{
                 width:25,
                 height:25,
                 tintColor:focused? '#e32f45' : '#748c94',
              }}
              />
              <Text 
              style = {{ 
                 color:focused? '#e32f45' : '#748c94',
                 fontSize:12,
                 }}>REGISTER</Text>
           </View>
        )
     }} />
    </Tab.Navigator>
   );
}

export default Tabs;