import React,{Component}from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import { responsiveWidth } from './responsive';

 export default class Button extends Component{

    render() {
        const {title= "Button", onPress = () => {}} = this.props;
        return(
            <TouchableOpacity  onPress ={onPress}>
                <Text style = {styles.main} >{title}</Text>
            </TouchableOpacity>
        );
    }
} 

const styles = StyleSheet.create({
    main: {
        backgroundColor:'#e32f45',
        color:'#fff',
        fontSize:25,
        textTransform:'uppercase',
        width:responsiveWidth(75),
        textAlign:'center',
        paddingVertical:5,
        borderRadius:30,
        marginVertical:20,
    },
});