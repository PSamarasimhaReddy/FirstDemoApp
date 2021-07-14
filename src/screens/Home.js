import React,{Component}from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import STYLES from '../utils/Styles'
import {initLogout} from '../store/actions/loginAction'
import Button from '../components/Button';
import Header from '../components/Header';

 class Home extends Component{

    render() {
        return(
            <>
            <Header title = "Home" navigation={this.props.navigation} showBellIcon/>
           <View style = {[STYLES.main, styles.main]}>
               <Text>Home Page</Text>
               <Button title ="Logout" onPress = { () => {this.props.initLogout()}} />
               <Button title ="Register" onPress = { () => this.props.navigation.navigate("Registration")} />
           </View>
           </>
        );
    }
} 

export default connect(null,{initLogout})(Home);
// export default Home;

const styles = StyleSheet.create({
    main: {
        justifyContent:'center',
        alignItems:'center',
    },
});
