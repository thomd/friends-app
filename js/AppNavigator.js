import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import Home from "./screens/Home";
import Settings from "./screens/Settings";

const TabNavigator = createBottomTabNavigator({
  Home: Home,
  Settings: Settings
});

export default createAppContainer(TabNavigator);
