import React,{Component}from 'react';
import { View, StyleSheet, ActivityIndicator} from 'react-native';
import { connect } from 'react-redux';
import STYLES from '../utils/Styles'
import { responsiveHeight, responsiveWidth } from './responsive';

 class Loader extends Component{
    render() {
        const {loading, storeLoading} = this.props;
        // if(!loading && storeLoading) return null;
        if (!loading && !storeLoading) return null;
        return(
            <View style ={[STYLES.main,styles.main]}>
                <ActivityIndicator color = "#fff" size="large" />
            </View>
        );
    }
} 

const mapStateToProps = state =>{
    return {
        storeLoading : state.loaderReducer.loading,
    }
}

export default connect(mapStateToProps)(Loader);


const styles = StyleSheet.create({
    main: {
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        width:responsiveWidth(100),
        height:responsiveHeight(100),
        backgroundColor:'rgba(0,0,0,0.6)',
    },
});