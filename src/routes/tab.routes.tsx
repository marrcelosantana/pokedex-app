import { Platform } from "react-native";
import { useTheme } from "styled-components/native";

import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import { Backpack, House, Star, UserCircle } from "phosphor-react-native";

import { Home } from "@screens/Home";
import { Favorites } from "@screens/Favorites";
import { Items } from "@screens/Items";
import { Profile } from "@screens/Profile";

type TabRoutes = {
  home: undefined;
  favorites: undefined;
  items: undefined;
  profile: undefined;
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
        tabBarActiveTintColor: theme.COLORS.BLUE_500,
        tabBarInactiveTintColor: theme.COLORS.GRAY_400,
        tabBarStyle: {
          height: 50,
          width: "80%",
          borderRadius: 9999,
          marginBottom: 42,
          marginLeft: 35,
          position: "absolute",
          paddingTop: Platform.OS === "android" ? 2 : 30,
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
          tabBarIcon: ({ color, size }) => (
            <House size={size} color={color} weight="bold" />
          ),
        }}
      />

      <Screen
        name="favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Star size={size} color={color} weight="bold" />
          ),
        }}
      />

      <Screen
        name="items"
        component={Items}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Backpack size={size} color={color} weight="bold" />
          ),
        }}
      />

      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <UserCircle size={size} color={color} weight="bold" />
          ),
        }}
      />
    </Navigator>
  );
}
