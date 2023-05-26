//declare todo o componente formulário e seus inputs. Exporte o formulário.
export default function Formulario({
    onChangePagamento,
    pagamento,
    onClickForm
  }) {
    return (
      <>
        <h1>Form</h1>
        <form onSubmit={onClickForm}>
          <input
            placeholder="forma de pagamento"
            onChange={onChangePagamento}
            value={pagamento}
          />
          <input placeholder="Nome da pessoa" />
          <input placeholder="número do cartão" />
          <input placeholder="validade" />
          <input placeholder="CVC" />
  
          <button type="submit">enviar</button>
        </form>
      </>
    );
  }
  