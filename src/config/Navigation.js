import { createStackNavigator } from "react-navigation";

import CountriesList from "../components/CountriesList";
import Artists from "../components/Artists";
import ArtistInfo from "../components/ArtistInfo";

const AppStackNavigator = createStackNavigator({
  Countries: {
    screen: CountriesList,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#373a3f"
      },
      headerTintColor: "#bbc1cc",
      headerTintStyle: {
        fontWeight: "400"
      },
      title: "Countries"
    })
  },
  Artists: {
    screen: Artists,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#373a3f"
      },
      headerTintColor: "#bbc1cc",
      headerTitleStyle: {
        fontWeight: "400"
      },
      title: "Artists"
    })
  },
  ArtistInfo: {
    screen: ArtistInfo,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#373a3f"
      },
      headerTintColor: "#bbc1cc",
      headerTitleStyle: {
        justifyContent: "center",
        fontWeight: "400"
      },
      title: "Artist Info"
    })
  }
});

export default AppStackNavigator;
