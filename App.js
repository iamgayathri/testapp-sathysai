// import React from "react";
// import HomeScreen from "./components/homeScreen";
// import { createAppContainer, createStackNavigator } from "react-navigation";
// import AboutPost from "./components/aboutPost";
// import Diccionario from "./components/diccionario";
// import Contacto from "./components/contacto";
// import Noticias from "./components/noticias";
// import { createBottomTabNavigator } from "react-navigation";
// import Icon from "react-native-vector-icons/FontAwesome";
// import {TouchableOpacity,Button,View,Text} from "react-native";
// // import Contacto from "./components/contacto"
// // import {
// //   // navigationOptions,
// //   createStackNavigatort
// // } from "react-native-navigation";
//
// const homeStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//     AboutPost: AboutPost
//
//     }
// );
//
// const noticiasStack = createStackNavigator({
//   Noticias: Noticias,
//   AboutPost: AboutPost
//
// });
//
// const diccionarioStack = createStackNavigator({
//   Diccionario: Diccionario,
//   AboutPost: AboutPost
// });
//
// const ContactoStack = createStackNavigator({
//   Contacto: Contacto
// });
//
// const RootTabs = createBottomTabNavigator(
//   {
//     Home: homeStack,
//     Noticias: noticiasStack,
//     Diccionario: diccionarioStack,
//     Contacto: ContactoStack
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const { routeName } = navigation.state;
//         let IconComponent = Icon;
//         let iconName;
//         if (routeName === "Home") {
//           iconName = `${focused ? "home" : "home"}`;
//         }
//         if (routeName === "Noticias") {
//           iconName = `${focused ? "cog" : "cog"}`;
//         }
//         if (routeName === "Diccionario") {
//           iconName = `${focused ? "book" : "book"}`;
//         }
//         if (routeName === "Contacto") {
//           iconName = `${focused ? "user" : "user"}`;
//         }
//         return <IconComponent name={iconName} size={25} color={tintColor} />;
//       }
//     })
//   }
// );
//
// const App = createAppContainer(RootTabs);
//
// export default App;

import React, { Component } from "react";
import Stack from "./components/HamburgerNavigation";
export default class App extends Component {
  render() {
    return (
      <Stack />
  )
  }
}
