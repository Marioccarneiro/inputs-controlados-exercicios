import { useState } from "react";
import Cartao from "../Componentes/Cartao";
import Formulario from "../Componentes/Formulario";
import { LayoutDaPagina } from "./estiloDaPaginaDoCartao";

function PaginaDoCartao() {
  const [pagamento, setPagamento] = useState("oi");
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [validade, setValidade] = useState("");
  const [cvc, setCvc] = useState("");

  //declare as funções de controle de inputs aqui
  const onChangePagamento = (event) => {
    setPagamento(event.target.value);
  };

  console.log(pagamento);

  const onClickForm = (event) => {
    event.preventDefault();
    setPagamento("");
  };

  return (
    <LayoutDaPagina>
      {/* Passe as variáveis de estado para o Cartão. Use Props. */}
      <Cartao
        pagamento={pagamento}
        numero={"3652 6589 7458 1111"}
        nome={"Luciano Naganawa"}
        cvc={"131"}
        validade={"03/29"}
      />

      {/* Chame o Componente Formulário Aqui */}
      <Formulario
        onChangePagamento={onChangePagamento}
        pagamento={pagamento}
        onClickForm={onClickForm}
      />
      {/* Passe a função de controle de input e variável de estado para o formulário. Para isso use Props */}
    </LayoutDaPagina>
  );
}

export default PaginaDoCartao;