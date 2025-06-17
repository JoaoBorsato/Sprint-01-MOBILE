import { useRouter } from "expo-router";
import * as React from "react";
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { calcularIdade, formatarDataNascimento, isDataValida } from "../src/utils/dateUtils";
import { addCadastro, existeCadastroPorEmailOuNome } from "../src/utils/storageUtils";

const TelaDeCadastro = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [confirmaSenha, setConfirmaSenha] = React.useState("");
  const [dataNascimento, setDataNascimento] = React.useState("");
  const router = useRouter();

  const handleCadastrar = async () => {
    if (senha !== confirmaSenha) {
      alert('As senhas não coincidem.');
      return;
    }
    if (!isDataValida(dataNascimento)) {
      alert('Data de nascimento inválida. Use o formato DD/MM/AAAA.');
      return;
    }
    if (calcularIdade(dataNascimento) < 18) {
      alert('Você precisa ter mais de 18 anos para se cadastrar.');
      return;
    }
    try {
      if (await existeCadastroPorEmailOuNome(email, nome)) {
        alert('Já existe um cadastro com este email ou nome de usuário.');
        return;
      }
      await addCadastro({
        nome,
        email,
        senha,
        dataNascimento
      });
      // Navega para a tela Principal após cadastro
      router.replace({ pathname: "/Principal" as any });
    } catch (e) {
      console.error('Erro ao salvar dados:', e);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.view}>
          <View style={[styles.fundo, styles.fundoPosition]} />
          <View style={styles.frame}>
            <View style={styles.groupParent}>
              <View style={styles.linhaParent}>
                <View style={styles.linha} />
                <Text style={[styles.faaSeuCadastro, styles.cadastreSeTypo]}>Faça seu cadastro</Text>
              </View>
              <View style={styles.emailParent}>
                <View style={styles.email}>
                  <Text style={[styles.nomeDeUsurio, styles.senhaTypo]}>nome de usuário</Text>
                  <TextInput
                    style={[styles.emailChild, styles.emailChildLayout, { color: '#d9d9d9', margin: 2 }]}
                    value={nome}
                    onChangeText={setNome}
                  />
                </View>
                <View style={styles.email}>
                  <Text style={[styles.email1, styles.senhaTypo]}>email</Text>
                  <TextInput
                    style={[styles.emailChild, styles.emailChildLayout, { color: '#d9d9d9', margin: 2 }]}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                  />
                </View>
                <View style={styles.email}>
                  <Text style={[styles.senha2, styles.senhaTypo]}>senha</Text>
                  <TextInput
                    style={[styles.emailChild, styles.emailChildLayout, { color: '#d9d9d9', margin: 2 }]}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={senha}
                    onChangeText={setSenha}
                  />
                </View>
                <View style={styles.senha3}>
                  <Text style={[styles.confirmeASenha, styles.senhaTypo]}>confirme a senha</Text>
                  <TextInput
                    style={[styles.senhaInner, styles.emailChildLayout, { color: '#d9d9d9', margin: 2 }]}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={confirmaSenha}
                    onChangeText={setConfirmaSenha}
                  />
                </View>
                <View style={styles.email}>
                  <Text style={[styles.dataDeNascimento, styles.senhaTypo]}>data de nascimento</Text>
                  <TextInput
                    style={[styles.emailChild, styles.emailChildLayout, { color: '#d9d9d9', margin: 2 }]}
                    placeholder="DD/MM/AAAA"
                    placeholderTextColor="#d9d9d9"
                    keyboardType="numeric"
                    maxLength={10}
                    value={dataNascimento}
                    onChangeText={text => setDataNascimento(formatarDataNascimento(text))}
                  />
                </View>
              </View>
              <Pressable style={styles.boto} onPress={handleCadastrar}>
                <View style={styles.cadastreSeWrapper}>
                  <Text style={[styles.cadastreSe, styles.cadastreSeTypo]}>Cadastrar</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  fundoPosition: {
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
    height: 932
  },
  cadastreSeTypo: {
    textAlign: "center",
    fontFamily: "Montserrat-Bold",
    textTransform: "uppercase"
  },
  emailChildLayout: {
    height: 46,
    borderWidth: 5,
    borderColor: "#800020",
    borderRadius: 10,
    borderStyle: "solid",
    width: 318,
    backgroundColor: "#121212",
    left: 0,
    position: "absolute"
  },
  senhaTypo: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
    color: "#d9d9d9",
    textTransform: "uppercase",
    textAlign: "left",
    width: "100%",
    // Removido: position, left, top, height, display, justifyContent, alignItems
  },
  fundo: {
    backgroundColor: "#121212",
    width: 430,
    left: 0,
    top: 0
  },
  textofundocoloridoIcon: {
    left: 0,
    top: 0
  },
  linha: {
    top: 34,
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 319,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute"
  },
  faaSeuCadastro: {
    fontSize: 24,
    color: "#d9d9d9",
    textAlign: "center",
    fontFamily: "Montserrat-Bold",
    textTransform: "uppercase",
    left: 0,
    top: 0,
    position: "absolute"
  },
  linhaParent: {
    height: 34,
    width: 318
  },
  emailChild: {
    top: 19
  },
  nomeDeUsurio: {
    width: 151
  },
  email: {
    height: 65,
    width: 318
  },
  email1: {
    width: 49
  },
  senha2: {
    width: 57
  },
  senhaInner: {
    top: 18
  },
  confirmeASenha: {
    width: 159
  },
  senha3: {
    height: 64,
    width: 318
  },
  dataDeNascimento: {
    width: 177
  },
  emailParent: {
    gap: 20,
    alignSelf: "stretch"
  },
  cadastreSe: {
    fontSize: 20,
    color: "#121212",
    textAlign: "center",
    fontFamily: "Montserrat-Bold",
    textTransform: "uppercase",
    flex: 1
  },
  cadastreSeWrapper: {
    backgroundColor: "#800020",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 11,
    height: 47,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 318,
    left: 0,
    top: 0,
    position: "absolute"
  },
  boto: {
    height: 47,
    alignSelf: "stretch"
  },
  groupParent: {
    gap: 47,
    alignSelf: "stretch"
  },
  frame: {
    top: 101,
    left: 56,
    gap: 31,
    position: "absolute"
  },
  view: {
    overflow: "hidden",
    height: 932,
    width: "100%",
    backgroundColor: "#fff",
    flex: 1
  }
});

export default TelaDeCadastro;
