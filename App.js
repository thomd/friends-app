import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import Home from "./js/screens/Home";
import Settings from "./js/screens/Settings";

const TabNavigator = createBottomTabNavigator({
  Home: Home,
  Settings: Settings
});

export default createAppContainer(TabNavigator);
