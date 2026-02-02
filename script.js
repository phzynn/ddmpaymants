function abrirPix() {
  document.getElementById('modalPix').style.display = 'flex';
}

function fecharPix() {
  document.getElementById('modalPix').style.display = 'none';
}

function abrirCredito() {
  document.getElementById('modalCredito').style.display = 'flex';
}

function fecharCredito() {
  document.getElementById('modalCredito').style.display = 'none';
}

function selecionar(linha) {
  document.querySelectorAll('.tabela tr').forEach(tr => tr.classList.remove('active'));
  linha.classList.add('active');
}