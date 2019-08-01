import React, {Component} from 'react';
import { withNavigation } from 'react-navigation';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
class HamburgerIcon extends Component{
    render() {
        return (
            <View>
                <Icon name="bars" size={20} onPress={()=>this.props.navigation.toggleDrawer()}/>
            </View>
        )
    };
}
export default withNavigation(HamburgerIcon);
