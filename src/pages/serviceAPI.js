export async function getBrazilStates() {
  const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
  const result = await response.json();
  return result;
}

export default getBrazilStates;
