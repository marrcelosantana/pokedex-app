import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import { SignIn } from "@screens/SignIn";

type AuthRoutes = {
  signIn: undefined;
};

export type AuthNavigatorRoutesProps = StackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signIn" component={SignIn} />
    </Navigator>
  );
}
