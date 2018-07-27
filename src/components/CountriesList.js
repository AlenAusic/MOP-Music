import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import { SearchBar } from "react-native-elements";
import Image from "react-native-remote-svg";

class CountriesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      searchTerm: "",
      isLoading: true
    };
  }

  onPressNavigate(item) {
    this.props.navigation.navigate("Artists", { country: item.Name });
  }

  renderCountries = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => this.onPressNavigate(item)}
        style={{ flex: 1, flexDirection: "row", marginBottom: 3 }}
      >
        <Image
          style={{ flex: 1, width: 60, height: 40, margin: 5 }}
          source={{ uri: item.FlagPng }}
        />
        <View style={{ flex: 5, marginLeft: 15 }}>
          <Text
            style={{
              fontSize: 18,
              color: "#bbc1cc",
              marginTop: 14,
              justifyContent: "center"
            }}
          >
            {item.Name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  renderSeparator = () => {
    return (
      <View style={{ height: 0.5, width: "100%", backgroundColor: "grey" }} />
    );
  };

  componentDidMount() {
    const url = "http://countryapi.gear.host/v1/Country/getCountries";
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          dataSource: responseJson.Response,
          isLoading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleSearch = text => {
    this.setState({ searchTerm: text });
  };

  render() {
    return this.state.isLoading ? (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="black" animating />
      </View>
    ) : (
      <View style={styles.container}>
        <Text>term: {this.state.searchTerm}</Text>
        <SearchBar
          placeholder="Filter countries..."
          onChangeText={this.handleSearch}
        />
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderCountries}
          keyExtractor={(item, index) => item.Alpha3Code}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#373a3f"
  }
});

export default CountriesList;
