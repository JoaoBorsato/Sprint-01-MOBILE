import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TelaDeAvisoConta = () => {
  return (
    <SafeAreaView style={styles.viewBg}>
        <View style={styles.frame}>
          <View style={styles.groupParent}>
            <View style={styles.linhaParent}>
              <View style={[styles.linha, styles.linhaBorder]} />
              <Text style={[styles.esqueceuASenha, styles.esqueceuASenhaTypo]}>Esqueceu a senha ?</Text>
            </View>
            <View style={styles.avisoLayout}>
              <View style={[styles.avisoChild, styles.avisoLayout]} />
              <Text style={[styles.jEnviamosUmContainer, styles.esqueceuASenhaTypo]}>
                <Text style={styles.jEnviamosUmContainer1}>
                  <Text style={styles.jEnviamosUm}>{`Já enviamos um `}</Text>
                  <Text style={styles.email}>email</Text>
                  <Text style={styles.jEnviamosUm}>{` para a `}</Text>
                  <Text style={styles.email}>recuperação</Text>
                  <Text style={styles.jEnviamosUm}> de sua conta.</Text>
                </Text>
              </Text>
            </View>
          </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewBg: {
    backgroundColor: "#121212",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  childPosition: {
    left: 0,
    top: 0
  },
  linhaBorder: {
    borderStyle: "solid",
    position: "absolute"
  },
  esqueceuASenhaTypo: {
    textAlign: "center",
    textTransform: "uppercase",
    position: "absolute"
  },
  avisoLayout: {
    height: 98,
    width: 318,
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
  },
  child: {
    position: "absolute"
  },
  icon: {
    height: "100%",
    width: "100%"
  },
  vector: {
    width: 25,
    height: 25
  },
  linha: {
    top: 34,
    left: 2,
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 319,
    height: 1
  },
  esqueceuASenha: {
    fontSize: 24,
    fontFamily: "Montserrat-Bold",
    color: "#d9d9d9",
    left: 0,
    top: 0
  },
  linhaParent: {
    height: 34,
    width: 320
  },
  avisoChild: {
    borderRadius: 10,
    backgroundColor: "rgba(18, 18, 18, 0.15)",
    borderColor: "#800020",
    borderWidth: 5,
    borderStyle: "solid",
    position: "absolute",
    left: 0,
    top: 0
  },
  jEnviamosUm: {
    color: "#d9d9d9"
  },
  email: {
    color: "#800020"
  },
  jEnviamosUmContainer1: {
    width: "100%"
  },
  jEnviamosUmContainer: {
    fontSize: 16,
    fontFamily: "Lato-Bold",
    display: "flex",
    width: 254,
    height: 91,
    alignItems: "center",
    justifyContent: "center",
    textAlignVertical: "center",
    textAlign: "center",
    position: "relative",
  },
  groupParent: {
    alignSelf: "stretch",
    gap: 115,
    alignItems: "center"
  },
  frame: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: 350,
    gap: 40,
  },
});

export default TelaDeAvisoConta;
