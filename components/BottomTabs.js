import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeScreen from "./homeScreen";
import AboutPost from "./aboutPost";
import Noticias from "./noticias";
import Diccionario from "./diccionario";
import Contacto from "./contacto";

const homeStack = createStackNavigator({
  Home: HomeScreen,
  AboutPost: AboutPost
});

const noticiasStack = createStackNavigator({
  Noticias: Noticias,
  AboutPost: AboutPost
});

const diccionarioStack = createStackNavigator({
  Diccionario: Diccionario,
  AboutPost: AboutPost
});

const ContactoStack = createStackNavigator({
  Contacto: Contacto
});

const Tabs = createBottomTabNavigator(
  {
    Home: homeStack,
    Noticias: noticiasStack,
    Diccionario: diccionarioStack,
    Contacto: ContactoStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === "Home") {
          iconName = `${focused ? "home" : "home"}`;
        }
        if (routeName === "Noticias") {
          iconName = `${focused ? "cog" : "cog"}`;
        }
        if (routeName === "Diccionario") {
          iconName = `${focused ? "book" : "book"}`;
        }
        if (routeName === "Contacto") {
          iconName = `${focused ? "user" : "user"}`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    })
  }
);

export default createAppContainer(Tabs);
