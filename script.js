const DIVIDA = 1759;

// ===== MODAIS =====
function abrirPix() {
  document.getElementById("pixModal").classList.remove("hidden");
}

function abrirCartao() {
  document.getElementById("cartaoModal").classList.remove("hidden");
}

function fechar() {
  document.querySelectorAll(".modal").forEach(m =>
    m.classList.add("hidden")
  );

  if (document.getElementById("cartaoStep1")) {
    document.getElementById("cartaoStep1").classList.remove("hidden");
    document.getElementById("cartaoStep2").classList.add("hidden");
  }
}

// ===== CARTÃO =====
function mostrarParcelas() {
  document.getElementById("cartaoStep1").classList.add("hidden");
  document.getElementById("cartaoStep2").classList.remove("hidden");
}

// ===== PIX =====
function pixVista() {
  const valor = DIVIDA * 0.9;
  alert(`Pagamento à vista via Pix\nTotal: R$ ${valor.toFixed(2)}`);
}

function pixEntrada() {
  const entrada = 300;
  const restante = DIVIDA - entrada;
  const parcelas = 3;
  const parcelaValor = restante / parcelas;

  alert(
    `Pix com entrada\n` +
    `Entrada: R$ ${entrada}\n` +
    `${parcelas}x de R$ ${parcelaValor.toFixed(2)}`
  );
}

function pixParcelado() {
  const parcelas = 6;
  const juros = 1.08; // 8% juros
  const total = DIVIDA * juros;
  const valorParcela = total / parcelas;

  alert(
    `Pix parcelado sem entrada\n` +
    `${parcelas}x de R$ ${valorParcela.toFixed(2)}\n` +
    `Total: R$ ${total.toFixed(2)}`
  );
}
