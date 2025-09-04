import React from "react";
import {  View } from "react-native";
import { SplashScreens } from "./screens/splash";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SplashScreens/>
    </View>
  );
}
