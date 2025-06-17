import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import * as React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useCustomFonts } from "../src/hooks/useCustomFonts";
import { getCadastros } from "../src/utils/storageUtils";

const TelaDeLogin = () => {
    const fontsLoaded = useCustomFonts();
    const router = useRouter();
    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");
    if (!fontsLoaded) {
        return null; // Ou um ActivityIndicator
    }

    const handleLogin = async () => {
        const cadastros = await getCadastros();
        const usuario = cadastros.find(
            (item) => item.email === email && item.senha === senha
        );
        if (usuario) {
            await AsyncStorage.setItem("userToken", usuario.email);
            router.replace({ pathname: "/Principal" as any });
        } else {
            alert("Email ou senha incorretos.");
        }
    };

    return (
        <View style={styles.viewBg}>
            <View style={styles.frame}>
                <View style={styles.groupParent}>
                    <View style={styles.linhaParent}>
                        <View style={styles.linha} />
                        <Text style={[styles.faaSeuLogin, styles.cadastreSeTypo]}>Faça seu login</Text>
                    </View>
                    <View style={styles.emailParent}>
                        <View style={styles.email}>
                            <View style={styles.emailChild} />
                            <Text style={[styles.email1, styles.email1Typo]}>EMAIL</Text>
                            <TextInput
                                style={{
                                    position: "absolute",
                                    top: 32,
                                    left: 16,
                                    width: 286,
                                    height: 40,
                                    color: "#d9d9d9",
                                    fontSize: 16,
                                    fontFamily: "Lato-Bold",
                                }}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>
                        <View style={styles.email}>
                            <View style={styles.emailChild} />
                            <Text style={[styles.email1, styles.email1Typo]}>Senha</Text>
                            <TextInput
                                style={{
                                    position: "absolute",
                                    top: 32,
                                    left: 16,
                                    width: 286,
                                    height: 40,
                                    color: "#d9d9d9",
                                    fontSize: 16,
                                    fontFamily: "Lato-Bold",
                                }}
                                secureTextEntry
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={senha}
                                onChangeText={setSenha}
                            />
                        </View>
                    </View>
                    <View style={styles.botoParent}>
                        <Pressable style={styles.boto} onPress={handleLogin}>
                            <View style={[styles.cadastreSeWrapper, styles.boto1FlexBox]}>
                                <Text style={[styles.cadastreSe, styles.cadastreSeTypo]}>entrar</Text>
                            </View>
                        </Pressable>
                        <Pressable style={[styles.boto1, styles.boto1FlexBox]} onPress={()=> router.push({ pathname: "/EsqueciSenha" as any }) }>
                            <Text style={[styles.jPossuiUma, styles.email1Typo]}>Esqueci minha senha</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewBg: {
        backgroundColor: "#121212",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    frame: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        maxWidth: 400,
        alignSelf: "center",
        position: "relative",
    },
    groupParent: {
        alignItems: "center",
        gap: 56,
        alignSelf: "stretch"
    },
    linhaParent: {
        height: 34,
        width: 318,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
    linha: {
        top: 34,
        borderColor: "#d9d9d9",
        borderTopWidth: 1,
        height: 1,
        borderStyle: "solid",
        width: 319,
        left: 0,
        position: "absolute"
    },
    faaSeuLogin: {
        fontSize: 24,
        color: "#d9d9d9",
        left: 0,
        top: 0,
        position: "absolute"
    },
    emailParent: {
        gap: 20,
        alignSelf: "center",
        alignItems: "center",
        width: "100%",
    },
    email: {
        height: 84,
        width: "90%",
        maxWidth: 318,
        alignSelf: "center",
    },
    emailChild: {
        top: 24,
        backgroundColor: "#121212",
        borderColor: "#800020",
        borderWidth: 5,
        height: 60,
        borderRadius: 10,
        borderStyle: "solid",
        width: "100%",
        left: 0,
        position: "absolute"
    },
    email1: {
        fontFamily: "Lato-Bold",
        color: "#d9d9d9",
        left: 0,
        top: 0,
        position: "absolute",
        textTransform: "uppercase",
        fontSize: 16
    },
    email1Typo: {
        fontSize: 16,
        textAlign: "center"
    },
    cadastreSeTypo: {
        textAlign: "center",
        fontFamily: "Montserrat-Bold",
        textTransform: "uppercase"
    },
    botoParent: {
        gap: 15,
        alignItems: "center",
        alignSelf: "center",
        width: "100%",
    },
    boto: {
        height: 47,
        alignSelf: "center",
        width: "90%",
        maxWidth: 318,
    },
    boto1: {
        backgroundColor: "rgba(128, 0, 32, 0)",
        alignSelf: "center",
        width: "90%",
        maxWidth: 318,
    },
    boto1FlexBox: {
        paddingVertical: 11,
        paddingHorizontal: 0,
        justifyContent: "center",
        flexDirection: "row",
        height: 47,
        alignItems: "center",
        borderRadius: 10
    },
    cadastreSeWrapper: {
        backgroundColor: "#800020",
        width: 318,
        left: 0,
        top: 0,
        position: "absolute"
    },
    cadastreSe: {
        fontSize: 20,
        color: "#121212",
        flex: 1
    },
    jPossuiUma: {
        textDecorationLine: "underline",
        fontFamily: "Lato-Light",
        color: "#d9d9d9",
        flex: 1
    },
});

export default TelaDeLogin;
