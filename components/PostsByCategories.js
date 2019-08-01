import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  Image,
  FlatList,
  Dimensions,
  TouchableNativeFeedback
} from "react-native";
import HTML from "react-native-render-html";

export default class PostsByCategories extends Component {
  constructor() {
    super();
    this.state = {
      ListOfPosts: []
    };

  }



  componentDidMount() {
    console.log(this.props.navigation.getParam("item"));
    this.fetchPosts();
  }
  fetchPosts() {


    fetch(`https://www.sathyasai.es/wp-json/wp/v2/posts?categories`)
      .then(response => response.json())

      .then(data => {
        return data;
      })
      .then(res => {
        console.log(res);
        this.setState((prevState, nextProps) => ({
          posts: [...prevState.posts, ...res],
          isLoading: false
        }));
      });
  }

  render() {
    return (
      <View>
        <Text>its working</Text>
        <FlatList
          data={this.ListOfPosts}
          renderItem={data => <CategoryPosts {...data.name} />}
          keyExtractor={item => item.name}
        />
      </View>
    );
  }
}

const CategoryPosts = ({ name, navigation }) => {
  return (
    <View>
      <Text>{name.rendered.substr(0, 75)}</Text>
      <Image
        style={{ width: 300, height: 250 }}
        source={{
          uri: name.better_featured_image.source_url
        }}
      />

      <HTML
        maxLength={200}
        html={name.content.rendered.substr(0, 200)}
        imagesMaxWidth={Dimensions.get("window").width}
      />
    </View>
  );
};
