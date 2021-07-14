import React,{Component}from 'react';
import { connect } from 'react-redux';
import { View,Text,Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Loader from '../components/Loader';
import Home from './Home';
import {setUserData} from '../store/actions/loginAction'
import Header from '../components/Header';
import Tabs from '../Navigation/tabs';


 const Stack = createStackNavigator();
 const Drawer = createDrawerNavigator();

 class Auth extends Component{
    state = {
        loading:true,
    };

    componentDidMount(){
        AsyncStorage.getItem("userData")
        .then((data)=>{
            this.setState({loading:false});
            if(data){
                this.props.setUserData(JSON.parse(data));
            }
        })
        .catch(()=>{
            this.setState({loading:false});
        })
    }

    render() {
        const {loading} = this.state;
        const {user} = this.props;
        if(loading){
            return <Loader loading = {loading} />
        } 
        return(
        <NavigationContainer>
            {
                user? <Stack.Navigator>
                <Stack.Screen
                options={{headerShown:false} }
                 name="Home" component={HomeScreen} />
                {/* <Stack.Screen name="Registration" component={Registration} /> */}
              </Stack.Navigator>
              : <Stack.Navigator>
              <Stack.Screen name="Registration" component={Tabs} options={{headerShown:false} } />
            </Stack.Navigator>
            }
        </NavigationContainer>
        )
    }
} 

const mapStateToProps = state =>{
    return {
        user : state.loginReducer.user,
    }
}

export default connect(mapStateToProps, {setUserData})(Auth);


function HomeScreen({ navigation }) {
    return (
        <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>

    );
  }
  
  function NotificationsScreen({ navigation }) {
    return (
        <>
      <Header title = "Notifications" navigation = {navigation} showBellIcon/>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Notifications Screen</Text>
          <Button title="Go to HomePage" 
          onPress = {()=>{navigation.navigate('Home')}}/>
      </View>
      </>
    );
  }
  
  function AboutScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>About Screen</Text>
          <Button title="Go to HomePage" 
          onPress = {()=>{navigation.navigate('Home')}}/>
      </View>
    );
  }
  