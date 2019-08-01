import React from "react";
import HTML from "react-native-render-html";
import { Card } from "react-native-elements";
import { Dimensions, Image, Text ,ScrollView} from "react-native";

export default class AboutPost extends React.Component {
  constructor() {
    super();
    this.state = {};
  }


  render() {
    const { navigation } = this.props;
    const postDetails = navigation.getParam("item");

    return (
        <ScrollView>
      <Card>
        <Text>{postDetails.title.rendered}</Text>
        <Image
          style={{ width: 300, height: 250 }}
          source={{
            uri: postDetails.better_featured_image.source_url
          }}
        />
        <HTML

          html={postDetails.content.rendered}
          imagesMaxWidth={Dimensions.get("window").width}
        />
      </Card>
        </ScrollView>
    );
  }
}
