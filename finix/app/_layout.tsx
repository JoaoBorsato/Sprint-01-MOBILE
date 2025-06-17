import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Pressable } from "react-native";

export default function Layout() {
  return (
    <Stack
      screenOptions={({ navigation }) => ({
        headerShown: true,
        headerBackTitle: "",
        headerTitle: "",
        headerTintColor: "#d9d9d9",
        headerStyle: { backgroundColor: "#121212", height: 100 },
        headerLeft: ({ canGoBack }) =>
          canGoBack ? (
            <Pressable
              onPress={() => navigation.goBack()}
              style={{
                marginLeft: 32,
                width: 40,
                height: 56,
                justifyContent: "flex-end",
                alignItems: "flex-start",
                paddingTop: 8,
              }}
              hitSlop={10}
            >
              <Ionicons name="arrow-back" size={25} color="#d9d9d9" />
            </Pressable>
          ) : null,
      })}
    />
  );
}
