import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export const UserNotification = () => {
  return (
    <View style={styles.notificationContent}>
      <Image
        source={{
          uri:
            "https://cdn.pixabay.com/photo/2017/09/01/00/16/png-2702697_1280.png"
        }}
        style={{ width: 300, height: 300 }}
      />
      <Text style={{ fontSize: 18, textAlign: "center", marginBottom: 5 }}>
        Sorry, there are no results for this country.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    marginTop: 150,
    justifyContent: "center",
    alignItems: "center"
  },
  notificationContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100
  }
});
