import React, { PureComponent } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableNativeFeedback,
  View
} from "react-native";
import { withNavigation } from "react-navigation";

class ListOfCategories extends PureComponent {
  state = {
    categoriesList: [],
    isLoading: true
  };

  static navigationOptions = {
    title: "Categories"
  };

  async componentDidMount() {
    try {
      const categoriesApi = await fetch(
        `https://www.sathyasai.es/wp-json/wp/v2/categories?per_page=100`
      );
      const categoriesData = await categoriesApi.json();
      this.setState({
        categoriesList: categoriesData,
        isLoading: false
      });
    } catch (error) {
      console.log("fetching data error", error);
    }
  }

  render() {
    const { categoriesList, isLoading } = this.state;
    const { navigation } = this.props;
    if (!isLoading) {
      return (
        <FlatList
          data={categoriesList}
          renderItem={data => (
            <Categories {...data.item} navigation={navigation}  />
          )}
          keyExtractor={item => item.name}
        />
      );
    } else {
      return <ActivityIndicator />;
    }
  }
}
const Categories = ({ name,navigation,id }) => {
  return (
    <TouchableNativeFeedback
      onPress={(item) =>

        navigation.navigate("PostsByCategories", { item:item })
      }
    >
      <View>
        <Text>
          {name}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default withNavigation(ListOfCategories);
