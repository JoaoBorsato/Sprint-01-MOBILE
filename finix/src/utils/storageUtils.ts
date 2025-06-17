import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'cadastro';

export async function getCadastros() {
  const cadastros = await AsyncStorage.getItem(STORAGE_KEY);
  if (!cadastros) return [];
  try {
    const lista = JSON.parse(cadastros);
    if (Array.isArray(lista)) return lista;
    return [lista];
  } catch {
    return [];
  }
}

type Cadastro = {
  email: string;
  nome: string;
  senha: string;
  dataNascimento: string;
  // Adicione outros campos conforme necessário
};

export async function addCadastro(novoCadastro: Cadastro) {
  const lista = await getCadastros();
  lista.push(novoCadastro);
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
}

export async function existeCadastroPorEmailOuNome(email: string, nome: string) {
  const lista = await getCadastros();
  return lista.some(item => item.email === email || item.nome === nome);
}

export async function existeCadastroPorEmail(email: string) {
  const lista = await getCadastros();
  return lista.some(item => item.email === email);
}
