import React from "react";
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";
import BottomTabs from "./BottomTabs";
import ListOfCategories from "./ListOfCategories";
import PostsByCategories from  "./PostsByCategories";
import CategoriesList from  "./CategoriesList";

const HamburgerNavigation = createDrawerNavigator(
  {
    Tabs: BottomTabs,
    PostsByCategories:{
      screen: PostsByCategories
    }
  },
  {
    initialRouteName: "Tabs",
    contentComponent: props => {
      return <ListOfCategories />;
    }
  }
);
const Stack = createStackNavigator({
  Drawer: {
    screen: HamburgerNavigation,
    navigationOptions: {
      header: null
    }
  },
  PostsByCategories:{
    screen: PostsByCategories
  }
  });

export default createAppContainer(Stack);
