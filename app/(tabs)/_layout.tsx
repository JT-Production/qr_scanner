import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";
import { Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          height: 52,
          // marginHorizontal: 20,
          // marginBottom: 36,
          // borderRadius: 50,
          backgroundColor: "#000000",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0f0d23",
        },
        // tabBarShowLabel:false
      }}
    >
      <Tabs.Screen
        name="generate"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome6
              name="qrcode"
              size={30}
              color="white"
              iconStyle="solid"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            // <AntDesign
            //   name="scan"
            //   size={30}
            //   color="white"
            //   iconStyle="solid"
            // />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome6
              name="rotate-left"
              size={30}
              color="white"
              iconStyle="solid"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
