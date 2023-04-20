import { Platform } from "react-native";
import { useTheme } from "styled-components/native";

import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import { Home } from "@screens/Home";
import { Favorites } from "@screens/Favorites";
import { Items } from "@screens/Items";
import { Regions } from "@screens/Regions";

import { Backpack, House, MapPin, Star } from "phosphor-react-native";

type TabRoutes = {
  home: undefined;
  favorites: undefined;
  regions: undefined;
  items: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator();

export type TabNavigatorRouterProps = BottomTabNavigationProp<TabRoutes>;

export function TabRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.COLORS.BLUE_WATER,
        tabBarInactiveTintColor: theme.COLORS.GRAY_400,
        tabBarStyle: {
          height: Platform.OS === "android" ? "auto" : 50,
          width: "80%",
          borderRadius: 9999,
          marginBottom: 50,
          marginLeft: 35,
          position: "absolute",
          paddingTop: 30,
          borderTopWidth: 0,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <House size={24} color={color} weight="bold" />
          ),
        }}
      />

      <Screen
        name="favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color }) => (
            <Star size={24} color={color} weight="bold" />
          ),
        }}
      />

      <Screen
        name="regions"
        component={Regions}
        options={{
          tabBarIcon: ({ color }) => (
            <MapPin size={24} color={color} weight="bold" />
          ),
        }}
      />

      <Screen
        name="items"
        component={Items}
        options={{
          tabBarIcon: ({ color }) => (
            <Backpack size={24} color={color} weight="bold" />
          ),
        }}
      />
    </Navigator>
  );
}
