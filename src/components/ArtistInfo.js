import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  TouchableOpacity
} from "react-native";

class ArtistInfo extends Component {
  fetchArtistInfo() {
    const API_KEY = "017bfda7b81a6fcf65fe34db36d3e182";
    const ARTIST_NAME = this.state.artistName;
    const url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${ARTIST_NAME}&api_key=${API_KEY}&format=json`;

    return fetch(url)
      .then(response => response.json())
      .catch(error => {
        console.log(error);
      });
  }

  constructor(props) {
    super(props);
    this.state = {
      artistInfo: [],
      isLoading: true,
      artistName: this.props.navigation.state.params.artist
    };

    this.fetchArtistInfo().then(data => {
      this.setState({ artistInfo: data.artist, isLoading: false });
    });
  }

  render() {
    return this.state.isLoading ? (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="black" animating />
      </View>
    ) : (
      <View style={styles.container}>
        <ScrollView style={{ margin: 10 }}>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 2,
              flexWrap: "wrap",
              marginTop: 10
            }}
          >
            <Image
              source={{ uri: this.state.artistInfo.image[2]["#text"] }}
              style={styles.image}
            />
            <View
              style={{
                flexDirection: "column",
                flex: 1,
                flexWrap: "wrap"
              }}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 24, color: "#bbc1cc" }}
              >
                {this.state.artistInfo.name}
              </Text>

              <Text
                style={{ fontWeight: "bold", marginTop: 40, color: "#bbc1cc" }}
              >
                Tags:
              </Text>
              <Text style={{ color: "#bbc1cc" }}>
                {" "}
                {this.state.artistInfo.tags.tag.map(
                  (genre, index) =>
                    index === this.state.artistInfo.tags.tag.length - 1
                      ? genre.name + "."
                      : genre.name + ", "
                )}
              </Text>
            </View>
            <View>
              <Text style={styles.text}>Biography:</Text>
              <Text style={styles.textBio}>
                {this.state.artistInfo.bio.summary.substring(
                  0,
                  this.state.artistInfo.bio.summary.indexOf("<")
                )}.
              </Text>
              <Text style={styles.text}>Similar Artists:</Text>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  justifyContent: "space-between"
                }}
              >
                {this.state.artistInfo.similar.artist.map(similar => (
                  <View
                    style={{ alignItems: "center", flex: 1, flexWrap: "wrap" }}
                    key={similar.name}
                  >
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate("ArtistInfo", {
                          artist: similar.name
                        })
                      }
                    >
                      <Image
                        source={{ uri: similar.image[1]["#text"] }}
                        style={styles.imageSimilar}
                      />
                      <Text style={styles.textSimilar}>{similar.name}</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default ArtistInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#373a3f"
  },

  text: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 15,
    marginBottom: 5,
    color: "#bbc1cc"
  },
  textBio: {
    color: "#bbc1cc",
    fontSize: 16
  },
  textSimilar: {
    fontSize: 16,
    textAlign: "center",
    color: "#bbc1cc"
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 10,
    borderRadius: 20
  },
  imageSimilar: {
    width: 70,
    height: 70,
    borderRadius: 20,
    justifyContent: "space-between"
  }
});
