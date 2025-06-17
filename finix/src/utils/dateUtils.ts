// Função para aplicar máscara de data DD/MM/AAAA
export function formatarDataNascimento(text: string) {
  let cleaned = text.replace(/\D/g, "");
  if (cleaned.length > 2 && cleaned.length <= 4) {
    cleaned = cleaned.slice(0,2) + '/' + cleaned.slice(2);
  } else if (cleaned.length > 4) {
    cleaned = cleaned.slice(0,2) + '/' + cleaned.slice(2,4) + '/' + cleaned.slice(4,8);
  }
  return cleaned.slice(0, 10);
}

// Função para validar se a data é válida
export function isDataValida(data: string) {
  if (!data || data.length !== 10) return false;
  const [dia, mes, ano] = data.split('/').map(Number);
  if (!dia || !mes || !ano) return false;
  const dataObj = new Date(ano, mes - 1, dia);
  return (
    dataObj.getFullYear() === ano &&
    dataObj.getMonth() === mes - 1 &&
    dataObj.getDate() === dia
  );
}

// Função para calcular idade
export function calcularIdade(data: string) {
  if (!isDataValida(data)) return 0;
  const [dia, mes, ano] = data.split('/').map(Number);
  const hoje = new Date();
  const nascimento = new Date(ano, mes - 1, dia);
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const m = hoje.getMonth() - nascimento.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }
  return idade;
}
