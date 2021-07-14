import React,{Component}from 'react';
import { View, Text, StyleSheet,TextInput} from 'react-native';
import { responsiveWidth,responsiveHeight } from '../components/responsive';
import STYLES from '../utils/Styles'
import Button from '../components/Button';
import { connect } from 'react-redux';
import { initRegistration } from '../store/actions/registrationAction';


class Registration extends Component{
    state = {
        userName:'Samara Sunny',
        email : 'eve.holt@reqres.in',
        password : 'pistol',
        registered:false,
        hasError:false,
    };

    render(){
        const {userName,email,password, initRegistration} = this.state;
        return(
            <View style={[STYLES.main,styles.main]}>
                <Text style = {styles.title}>Register Here</Text>
                <TextInput 
                value = {userName}
                style = {styles.inputBox} 
                placeholder="name"
                onChangeText = {(value)=>{this.setState({userName:value})}}
                />
                <TextInput 
                value={email}
                style = {styles.inputBox} 
                placeholder="Email"
                onChangeText = {(value)=>{this.setState({email:value})}}
                />
                <TextInput 
                value={password}
                style = {styles.inputBox} 
                placeholder="Confirm Password"
                onChangeText = {(value)=>{this.setState({password:value})}}
                />
                <Button title="Create account" onPress={()=>{this.props.initRegistration(this.state)}} />
            </View>
        )
    }
}

export default connect(null,{initRegistration})(Registration);

const styles = StyleSheet.create({
    main:{
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:30,
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