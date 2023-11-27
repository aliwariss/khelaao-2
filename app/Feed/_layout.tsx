import * as React from "react";
import { View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import Profile from "./Profile";
import Feed from "../Feed/Feed";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1 }}>
            <Image
              style={{ width: "100%", height: "20%", marginVertical: 30 }}
              source={require("../../assets/images/khelaaoPNG.png")}
            />
            <DrawerItemList {...props} />
          </View>
        );
      }}
      screenOptions={{
        headerStyle: { backgroundColor: "orange" },
        headerTitleStyle: { color: "white" },
        headerTintColor: "white",
      }}
      initialRouteName="Inventory"
    >
      <Drawer.Screen name="Feed" component={Feed} />
      {/* <Drawer.Screen name="Transactions" component={Transaction} /> */}
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <StatusBar style="dark" hidden={true}></StatusBar>
      <MyDrawer />
    </NavigationContainer>
  );
}
