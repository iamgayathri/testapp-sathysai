import React from "react";
import HTML from "react-native-render-html";
import { Card, Avatar } from "react-native-elements";
// import { Left, Right, Icon } from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome";


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
  ActivityIndicator
} from "react-native";


import HamburgerIcon from "./HamburgerIcon";


export default class HomeScreen extends React.Component {

  static navigationOptions = () => {

    return {
      headerLeft: <HamburgerIcon />,
      title:'Sathyasai Espana'
    };
  };


  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: true,
      loadingMore: false,
      error: null,
      refreshing: false,
      open: false
    };
  }

  componentDidMount() {
    this.fetchPosts();
  }
  fetchPosts() {
    fetch("https://www.sathyasai.es/wp-json/wp/v2/posts?per_page=100")
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

  _onRefresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true
      },
      () => {
        this.fetchPosts();
      }
    );
  };

  render() {
    return (
      <View>
        {/*<Header*/}
        {/*    leftComponent={<Icon name="menu" /> }*/}
        {/*/>*/}
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          <View>
            {this.state.isLoading ? (
              <View>
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
            ) : (
              this.state.posts.map((item, index) => {
                return (
                  <Card onEndReachedThreshold={0.5} initialNumToRender={10}>
                    <TouchableNativeFeedback
                      onPress={() =>
                        this.props.navigation.navigate("AboutPost", {
                          item: item
                        })
                      }
                    >
                      <View>
                        <Avatar
                          rounded
                          source={{
                            uri:
                              "https://www.sathyasai.es/wp-content/uploads/2019/07/20190719-150x150.jpg"
                          }}
                        />
                        <Text key={index}>
                          {item.title.rendered.substr(0, 75)}
                        </Text>
                        <Image
                          style={{ width: 300, height: 250 }}
                          source={{
                            uri: item.better_featured_image.source_url
                          }}
                        />

                        <HTML
                          maxLength={200}
                          html={item.content.rendered.substr(0, 200)}
                          imagesMaxWidth={Dimensions.get("window").width}
                        />
                      </View>
                    </TouchableNativeFeedback>
                  </Card>
                );
              })
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

// onEndReached={this._handleLoadMore}
{
  /*  <FlatList*/
}
{
  /*    data={this.state.posts}*/
}
{
  /*    extraData={this.state}*/
}
{
  /*    keyExtractor={(x, i) => i}*/
}
{
  /*    renderItem={({ item }) => <Text>{`${item.title.rendered} ${item.content.rendered}`}</Text>*/
}
{
  /*        */
}
{
  /*    }*/
}
{
  /*  />*/
}
{
  /*)}*/
}
// _handleLoadMore = () => {
//   this.setState(
//       (prevState, nextProps) => ({
//         page: prevState.page + 1,
//         loadingMore: true
//       }),
//       () => {
//         this.fetchPosts();
//       }
//   );
// };
