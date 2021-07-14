import React,{Component}from 'react';
import { View, Text, StyleSheet, ImageBackground} from 'react-native';
import STYLES from '../utils/Styles'

 export default class Intro extends Component{

    render() {
        return(
            <View style={[STYLES.main,styles.main]}>
                <Text>My Intro screen</Text>
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    main: {
        justifyContent:'center',
        alignItems:'center',
    },
});
