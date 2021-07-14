import React,{Component}from 'react';
import { View, Text, StyleSheet,TextInput} from 'react-native';
import { connect } from 'react-redux';
import {responsiveWidth} from '../components/responsive'
import STYLES from '../utils/Styles'
import {initLogin} from '../store/actions/loginAction'
import Button from '../components/Button';

 class Login extends Component{
    state = {
        email : 'eve.holt@reqres.in',
        password : 'cityslicka',
        isLoggedIn:false,
        hasError:false,
    };

    render() {
        const {email,password,isLoggedIn,hasError} = this.state;

        if(isLoggedIn) {
           return(
            <View style ={STYLES.main}>
            <Text>You are logged in!</Text>
            </View>
           );
           
        }
        if(hasError) {
            return(<View style ={STYLES.main}>
                <Text>There is an error</Text>
                </View>
                );
        }
        return(
            <>
            <View style ={[STYLES.main,styles.main]}>
                <Text style = {styles.logo}>Login Page</Text>
                <TextInput 
                value = {email} 
                style = {styles.inputBox} 
                placeholder="Enter email"
                onChangeText = {(value => {this.setState({email: value});})} />
                <TextInput 
                value = {password} 
                secureTextEntry 
                style = {styles.inputBox} 
                placeholder="Enter password"
                onChangeText = {(value => 
                {
                    this.setState({password: value});
                }
                )} />
                <Button title="Login" onPress = {() => {this.props.initLogin(this.state)}} />
            </View>
            </>
        );
    }
} 

export default connect(null,{initLogin})(Login);

const styles = StyleSheet.create({
    main: {
        justifyContent:'center',
        alignItems:'center',
    },
    logo: {
        fontSize:35,
        textTransform:'uppercase',
    },
    inputBox: {
        borderWidth:1,
        marginVertical:10,
        width:responsiveWidth(75),
        backgroundColor:'rgba(0,0,0,0.1)',
        borderRadius:10,
        paddingHorizontal:20,
        fontSize:20,
    }
});