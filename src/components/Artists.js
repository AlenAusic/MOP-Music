import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image
} from "react-native";
import { UserNotification } from "../config/Helpers";

class Artists extends Component {
  fetchTopArtists() {
    const API_KEY = "017bfda7b81a6fcf65fe34db36d3e182";
    const COUNTRY = this.props.navigation.state.params.country;
    const url = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${COUNTRY}&api_key=${API_KEY}&format=json`;

    return fetch(url)
      .then(response => response.json())
      .catch(error => {
        console.log(error);
      });
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      artists: []
    };

    this.fetchTopArtists().then(data => {
      this.setState({ artists: data.topartists.artist, isLoading: false });
    });
  }

  renderSeparator = () => {
    return (
      <View style={{ height: 0.5, width: "100%", backgroundColor: "grey" }} />
    );
  };

  renderArtists = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.onPressNavigate(item)}>
        <View style={styles.list}>
          <Image
            style={styles.listImage}
            source={{ uri: item.image[2]["#text"] }}
          />
          <Text style={styles.listText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  onPressNavigate(item) {
    this.props.navigation.navigate("ArtistInfo", { artist: item.name });
  }

  render() {
    return this.state.isLoading ? (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="black" animating />
      </View>
    ) : (
      /* return this.state.artists.length === 0 ? (
      <UserNotification />
    )  */ <View
        style={styles.container}
      >
        <FlatList
          data={this.state.artists}
          renderItem={this.renderArtists}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={this.renderSeparator}
        />

        {/* <Text>drzava: {this.props.navigation.state.params.country}</Text> */}
      </View>
    );
  }
}
export default Artists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#373a3f"
  },
  list: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 3,
    marginRight: 3,
    alignItems: "center"
  },
  listImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginLeft: 10
  },
  listText: {
    padding: 5,
    fontSize: 18,
    color: "#bbc1cc",
    marginLeft: 20
  }
});
