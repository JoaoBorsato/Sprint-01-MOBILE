import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import * as React from "react";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SemLogin from "./SemLogin";

const TelaDeLoading = () => (
  <SafeAreaView style={styles.viewBg}>
    <View style={[styles.view, styles.viewBg]}>
      <ActivityIndicator size="large" color="#000" style={{ position: "absolute", top: "50%", alignSelf: "center" }} />
    </View>
  </SafeAreaView>
);

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        setIsLoggedIn(!!token);
      } catch {
        setIsLoggedIn(false);
      } finally {
        setIsLoading(false);
      }
    };
    checkLogin();
  }, []);

  useEffect(() => {
    if (!isLoading && isLoggedIn) {
      router.replace({ pathname: "/(drawer)/Principal" as any });
    }
  }, [isLoading, isLoggedIn, router]);

  if (isLoading) return <TelaDeLoading />;
  if (isLoggedIn) {
    // Enquanto redireciona, mostra loading
    return <TelaDeLoading />;
  } else {
    return <SemLogin />;
  }
};

const styles = StyleSheet.create({
  telaDeLoading: {
    flex: 1,
    backgroundColor: "#fff"
  },
  viewBg: {
    backgroundColor: "#fff",
    flex: 1
  },
  fundoIcon: {
    position: "absolute",
    top: 0,
    left: 0
  },
  view: {
    width: "100%",
    overflow: "hidden",
    height: 932
  }
});

export default Index;
