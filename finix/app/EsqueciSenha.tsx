import { useRouter } from "expo-router";
import * as React from "react";
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { existeCadastroPorEmail } from "../src/utils/storageUtils";

const TelaDeEsqueciASenha = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleEnviar = async () => {
    try {
      const existe = await existeCadastroPorEmail(email);
      if (!existe) {
        alert('Email não cadastrado no app.');
        return;
      }
      router.push({ pathname: "/SenhaAlerta" as any });
    } catch {
      alert('Erro ao buscar email cadastrado.');
    }
  };

  return (
      <View style={[styles.viewBg]}>
        <View style={styles.frame}>
          <View style={styles.groupParent}>
            <View style={styles.linhaParent}>
              <View style={[styles.linha, styles.childPosition]} />
              <Text style={[styles.esqueceuASenha, styles.esqueceuASenhaFlexBox]}>Esqueceu a senha ?</Text>
            </View>
            <View style={styles.emailParent}>
              <View style={styles.email}>
                <Text style={[styles.emailDaConta, styles.cadastreSeTypo]}>EMAIL da conta</Text>
                <TextInput
                  style={[styles.emailChild, styles.emailChildLayout, { color: '#d9d9d9', margin: 2 }]}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholderTextColor="#d9d9d9"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
              <Pressable style={styles.boto} onPress={handleEnviar}>
                <View style={[styles.cadastreSeWrapper, styles.emailChildLayout]}>
                  <Text style={[styles.cadastreSe, styles.cadastreSeTypo]}>enviar</Text>
                </View>
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
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  childPosition: {
    left: 0,
    position: "absolute"
  },
  esqueceuASenhaFlexBox: {
    alignItems: "center",
    top: 0
  },
  emailChildLayout: {
    borderRadius: 10,
    width: 318,
    left: 0,
    position: "absolute"
  },
  cadastreSeTypo: {
    textAlign: "center",
    fontWeight: "700",
    textTransform: "uppercase"
  },
  child: {
    top: 0
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
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 317,
    height: 1,
    borderStyle: "solid"
  },
  esqueceuASenha: {
    fontSize: 24,
    textAlign: "left",
    display: "flex",
    color: "#d9d9d9",
    left: 0,
    position: "absolute",
    fontFamily: "Montserrat-Bold",
    fontWeight: "700",
    textTransform: "uppercase",
    alignItems: "center",
    width: 316
  },
  linhaParent: {
    height: 34,
    width: 316
  },
  emailChild: {
    top: 19,
    backgroundColor: "#121212",
    borderColor: "#800020",
    borderWidth: 5,
    height: 46,
    borderStyle: "solid"
  },
  emailDaConta: {
    fontSize: 16,
    fontFamily: "Lato-Bold",
    color: "#d9d9d9",
    left: 0,
    position: "absolute",
    top: 0
  },
  email: {
    height: 65,
    width: 318
  },
  cadastreSe: {
    fontSize: 20,
    color: "#121212",
    fontFamily: "Montserrat-Bold",
    flex: 1,
    textAlign: "center"
  },
  cadastreSeWrapper: {
    backgroundColor: "#800020",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: 11,
    height: 47,
    alignItems: "center",
    top: 0
  },
  boto: {
    height: 47,
    alignSelf: "stretch"
  },
  emailParent: {
    gap: 24,
    alignItems: "center",
  },
  groupParent: {
    alignItems: "center",
    gap: 90,
  },
  frame: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: 350,
    gap: 40,
  },
  view: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default TelaDeEsqueciASenha;
