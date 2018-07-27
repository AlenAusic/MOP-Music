import React, { Component } from "react";
import { View } from "react-native";
import { SearchBar } from "react-native-elements";

class Search extends Component {
  render() {
    return (
      <View>
        <SearchBar
          onChangeText={this.handleSearch}
          platform="android"
          placeholder="Filter countries..."
        />
      </View>
    );
  }
}

export default Search;
