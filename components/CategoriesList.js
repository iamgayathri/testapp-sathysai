import React from "react";

import { Avatar, Card } from "react-native-elements";
import HTML from "react-native-render-html";
import { withNavigation } from 'react-navigation';

import {
    View,
    FlatList,
    Image,
    ScrollView,
    RefreshControl,
    Dimensions,
    Text,
    Header,
    Button,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableHighlight,
    ActivityIndicator
} from "react-native";

class CategoriesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      isLoading: true,
      loadingMore: false,
      error: null,
      open: false
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }
  fetchCategories() {
    fetch("https://www.sathyasai.es/wp-json/wp/v2/categories?per_page=100")
      .then(response => response.json())

      .then(data => {
        return data;
      })
      .then(res => {
        console.log(res);
        this.setState((prevState, nextProps) => ({
          categories: [...prevState.categories, ...res],
          isLoading: false
        }));
      });
  }

  render() {


    return (

        <ScrollView>
          <View>
            {this.state.isLoading ? (
              <View>
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
            ) : (
              this.state.categories.map((item, index) => {
                return (
                  <TouchableNativeFeedback
                    onPress={() =>

                        this.props.navigation.navigate("PostsByCategories",{item:item})
                    }
                  >
                    <View>
                      <Text key={index}>{item.name}</Text>

                    </View>

                  </TouchableNativeFeedback>
                );
              })
            )}
          </View>
        </ScrollView>
    );
  }
}
export default CategoriesList ;
