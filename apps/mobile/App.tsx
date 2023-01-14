import { Button, StyleSheet, View, Text } from "react-native";
import React from "react";

import * as eva from "@eva-design/eva";
import WelcomeComponent from "./screens/WelcomeComponent";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen";
import HomeShoping from "./screens/HomeShoping";
import HomeShoping2 from "./screens/HomeShopping2";
import HomeShoping3 from "./screens/HomeShopping3";
;
const App = () => {
  const Stack = createStackNavigator();

  return (

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomeComponent} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="HomeShoping" component={HomeShoping} />
          <Stack.Screen name="HomeShoping2" component={HomeShoping2} />
          <Stack.Screen name="HomeShoping3" component={HomeShoping3} />

        </Stack.Navigator>

      </NavigationContainer>

  );
};

export default App;

const styles = StyleSheet.create({});