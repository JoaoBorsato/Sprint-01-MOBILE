import { Ionicons } from "@expo/vector-icons";
import { Stack, useSegments } from "expo-router";
import { Pressable } from "react-native";

export default function Layout() {
  const segments = useSegments();

  // Pega o nome da tela atual (último segmento da rota)
  const currentRoute = segments[segments.length - 1];

  // Lista de telas que NÃO devem mostrar o header
  const hiddenHeaderScreens = ["Principal", "Usuario", "SemLogin"];

  const hideHeader = hiddenHeaderScreens.includes(currentRoute);

  return (
    <Stack
      screenOptions={({ navigation }) => ({
        headerShown: !hideHeader, // só oculta nas telas específicas
        headerBackTitle: "",
        headerTitle: "",
        headerTintColor: "#d9d9d9",
        headerStyle: { backgroundColor: "#121212", height: 100 },
        headerLeft: ({ canGoBack }) =>
          canGoBack && !hideHeader ? (
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
