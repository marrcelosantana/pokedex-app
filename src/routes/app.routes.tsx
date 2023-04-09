import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import { TabRoutes } from "./tab.routes";
import { Details } from "@screens/Details";

type AppRoutes = {
  tabs: undefined;
  details: undefined;
};

export type AppNavigatorRoutesProps = StackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createStackNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="tabs" component={TabRoutes} />
      <Screen name="details" component={Details} />
    </Navigator>
  );
}
