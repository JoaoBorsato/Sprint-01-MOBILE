import { Ionicons } from "@expo/vector-icons";
import { Stack, useSegments, Slot } from "expo-router";
import { Pressable } from "react-native";

export default function Layout() {
  const segments = useSegments();
  // Se estiver dentro do (drawer), não renderiza Stack, só Slot
  if (segments[0] === "(drawer)") {
    return <Slot />;
  }
  return (
    <Stack
      screenOptions={({ navigation, route }) => ({
        headerBackTitle: "",
        headerTitle: "",
        headerTintColor: "#d9d9d9",
        headerStyle: { backgroundColor: "#121212", height: 100 },
        headerLeft: ({ canGoBack }) =>
          canGoBack && route.name !== "SemLogin" ? (
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
