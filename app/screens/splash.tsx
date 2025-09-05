import React from 'react';
import { View } from 'react-native';
import { DotLottie } from '@lottiefiles/dotlottie-react-native';

export function SplashScreens(){
  return (
    <View style={{ flex: 1 }}>
      <DotLottie
        source={require('../../assets/lottie/Cosmos.json')}
        loop
        autoplay
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}; 