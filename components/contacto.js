
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HamburgerIcon from "./HamburgerIcon";

export default class Contacto extends Component {

    static navigationOptions = () => {
        return {
            headerLeft: <HamburgerIcon/>
        };
    };

    render() {
        return (
            <View>
                <Text>contacto </Text>
            </View>
        )

    }
}
