import React,{Component}from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { connect } from 'react-redux';
import { TOAST_TYPES } from '../utils/constants';
import {hideToast} from'../store/actions';
import { responsiveWidth } from './responsive';


 class Toast extends Component{
    render() {
        const {showing=false, message=" ", type ,hideToast } = this.props;
        
        if(!showing || !message){
            return null;
        };

        setTimeout(()=>{
            hideToast();
        },3000);

        let bgColor = "";

        switch(type) {
            case TOAST_TYPES.SUCCESS:
                bgColor='green';
                break;
            case TOAST_TYPES.ERROR:
                bgColor='crimson';
                break;
            default:
                bgColor='#000';
        };

        return(
            <View style = {[styles.main,{backgroundColor:bgColor}]}>
                <Text style ={styles.toastText}>{message}</Text>
            </View>
        );
    }
} 

const mapStateToProps = (state) =>{
    return {
        showing : state.toastReducer.showing,
        message : state.toastReducer.message,
        type : state.toastReducer.type,
    }
}

export default connect(mapStateToProps,{hideToast})(Toast);


const styles = StyleSheet.create({
    main: {
        position:'absolute',
        width:responsiveWidth(100),
        backgroundColor:'rgb(0,0,0)',
        top:0,
        left:0,
        zIndex:111,
        padding:15,
    },
    toastText: {
        color:'#fff',
        fontSize:18,
    }
});