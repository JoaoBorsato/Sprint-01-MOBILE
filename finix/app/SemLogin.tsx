import { useRouter } from "expo-router";
import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useCustomFonts } from "../src/hooks/useCustomFonts";

const TelaDeInicioSemRegistro = () => {
    const router = useRouter();
    const fontsLoaded = useCustomFonts();
    if (!fontsLoaded) {
        return null; // Ou um ActivityIndicator
    }

    return (
        <View style={styles.viewBg}>
            <View style={styles.contentContainer}>
                <View style={styles.logoContainer}>
                    <Text style={styles.finix}>FINIX</Text>
                    <View style={styles.linha} />
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <Pressable style={styles.boto} onPress={() => { router.push({ pathname: "/Cadastro" as any }); }}>
                    <View style={[styles.cadastreSeWrapper, styles.boto1FlexBox]}>
                        <Text style={[styles.cadastreSe, styles.cadastreSeFlexBox]}>Cadastre-se</Text>
                    </View>
                </Pressable>
                <Pressable style={[styles.boto1, styles.boto1FlexBox]} onPress={() => { router.push({ pathname: "/Login" as any }); }}>
                    <Text style={[styles.jPossuiUma, styles.cadastreSeFlexBox]}>Já possui uma conta? LOGIN</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewBg: {
        flex: 1,
        overflow: "hidden",
        alignItems: "center",
        backgroundColor: "#121212",
    },
    linhaPosition: {
        alignItems: "center",
    },
    boto1FlexBox: {
        paddingVertical: 11,
        paddingHorizontal: 0,
        flexDirection: "row",
        borderRadius: 10,
        height: 47,
        justifyContent: "center",
        width: 318,
        alignItems: "center"
    },
    cadastreSeFlexBox: {
        textAlign: "center",
        flex: 1
    },
    frameChild: {
        zIndex: 1,
        alignSelf: "stretch",
        flex: 1
    },
    linha: {
        backgroundColor: "#d9d9d9",
        borderStyle: "solid",
        borderColor: "#d9d9d9",
        borderTopWidth: 1,
        width: 319,
        height: 2,
    },
    finix: {
        fontSize: 96,
        fontFamily: "BrunoAce-Regular",
        color: "#d9d9d9",
        textAlign: "center",
        textTransform: "uppercase",
        alignItems: "center",
    },
    cadastreSe: {
        fontSize: 20,
        fontFamily: "Montserrat-Bold",
        color: "#121212",
        textTransform: "uppercase",
        textAlign: "center"
    },
    cadastreSeWrapper: {
        backgroundColor: "#800020",
        position: "absolute",
    },
    boto: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    jPossuiUma: {
        fontSize: 16,
        fontFamily: "Lato-Light",
        color: "#fff"
    },
    boto1: {
        backgroundColor: "rgba(128, 0, 32, 0)",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    contentContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    logoContainer: {
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
    },
    buttonsContainer: {
        width: "100%",
        alignItems: "center",
        marginBottom: '30%',
        gap: 15,
    }
});

export default TelaDeInicioSemRegistro;
