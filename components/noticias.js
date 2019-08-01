import React, { Component } from 'react';
import {
    View,
    FlatList,
    Image,
    ScrollView,
    RefreshControl,
    Dimensions,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    ActivityIndicator
} from "react-native";
import {Avatar, Card} from "react-native-elements";
import HTML from "react-native-render-html";
import HamburgerIcon from "./HamburgerIcon";


export default class Noticias extends Component {


    static navigationOptions = () => {
        return {
            headerLeft: <HamburgerIcon/>
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
        fetch("https://www.sathyasai.es/wp-json/wp/v2/posts?categories=46,39")
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


    render() { return (
        <View>

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
                                            this.props.navigation.navigate('AboutPost', {
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
