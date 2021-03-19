import React from 'react';
import PaymentMethod from './paymentMethod';

const RegisterForms = () => (
  <forms>
    <fieldset>
      <legend>Dados Cadastrais</legend>
      <input type="text" placeholder="Nome Completo" data-testid="checkout-fullname" />
      <input type="text" placeholder="CPF" data-testid="checkout-cpf" />
      <input type="text" placeholder="E-mail" data-testid="checkout-email" />
      <input type="text" placeholder="Telefone" data-testid="checkout-phone" />
      <input type="text" placeholder="CEP" data-testid="checkout-cep" />
      <input type="text" placeholder="Endereço" data-testid="checkout-address" />
      <input type="text" placeholder="Complemento" />
      <input type="text" placeholder="Número" />
      <input type="text" placeholder="Cidade" />
      {/* href: https://gist.github.com/cassiocardoso/8966749 */}
      <select name="estados-brasil">
        <option value="AC">Acre</option>
        <option value="AL">Alagoas</option>
        <option value="AP">Amapá</option>
        <option value="AM">Amazonas</option>
        <option value="BA">Bahia</option>
        <option value="CE">Ceará</option>
        <option value="DF">Distrito Federal</option>
        <option value="ES">Espírito Santo</option>
        <option value="GO">Goiás</option>
        <option value="MA">Maranhão</option>
        <option value="MT">Mato Grosso</option>
        <option value="MS">Mato Grosso do Sul</option>
        <option value="MG">Minas Gerais</option>
        <option value="PA">Pará</option>
        <option value="PB">Paraíba</option>
        <option value="PR">Paraná</option>
        <option value="PE">Pernambuco</option>
        <option value="PI">Piauí</option>
        <option value="RJ">Rio de Janeiro</option>
        <option value="RN">Rio Grande do Norte</option>
        <option value="RS">Rio Grande do Sul</option>
        <option value="RO">Rondônia</option>
        <option value="RR">Roraima</option>
        <option value="SC">Santa Catarina</option>
        <option value="SP">São Paulo</option>
        <option value="SE">Sergipe</option>
        <option value="TO">Tocantins</option>
      </select>
    </fieldset>
    <PaymentMethod />
  </forms>
);

export default RegisterForms;
