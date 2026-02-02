const DIVIDA = 1759;

// ================= PIX =================
function confirmarPix() {
  const opcao = document.querySelector('input[name="pixOpcao"]:checked');

  if (!opcao) {
    alert("Escolha uma opção de pagamento via Pix");
    return;
  }

  let resumo = "";

  switch (opcao.value) {
    case "vista":
      const vista = DIVIDA * 0.9;
      resumo = `
Pagamento à vista via Pix
Total: R$ ${vista.toFixed(2)}
Desconto: 10%
`;
      break;

    case "entrada":
      const entrada = 300;
      const parcelasEntrada = 3;
      const restante = DIVIDA - entrada;
      const valorParcelaEntrada = restante / parcelasEntrada;

      resumo = `
Pix com entrada
Entrada: R$ ${entrada.toFixed(2)}
${parcelasEntrada}x de R$ ${valorParcelaEntrada.toFixed(2)}
Total: R$ ${DIVIDA.toFixed(2)}
`;
      break;

    case "semEntrada6":
      const parcelas6 = 6;
      const total6 = DIVIDA * 1.08;
      resumo = `
Pix parcelado sem entrada
${parcelas6}x de R$ ${(total6 / parcelas6).toFixed(2)}
Juros: 8%
Total: R$ ${total6.toFixed(2)}
`;
      break;

    case "semEntrada12":
      const parcelas12 = 12;
      const total12 = DIVIDA * 1.23;
      resumo = `
Pix parcelado sem entrada
${parcelas12}x de R$ ${(total12 / parcelas12).toFixed(2)}
Juros: 23%
Total: R$ ${total12.toFixed(2)}
`;
      break;
  }

  alert(resumo);
}

// ================= CARTÃO =================
function continuarCartao() {
  document.getElementById("cartaoForm").classList.add("hidden");
  document.getElementById("cartaoParcelas").classList.remove("hidden");
}

function pagarCartao(parcelas) {
  let juros = 1;

  if (parcelas > 1 && parcelas <= 6) juros = 1.05;
  if (parcelas > 6) juros = 1.12;

  const total = DIVIDA * juros;
  const valorParcela = total / parcelas;

  alert(`
Pagamento com Cartão
${parcelas}x de R$ ${valorParcela.toFixed(2)}
Total: R$ ${total.toFixed(2)}
`);
}
