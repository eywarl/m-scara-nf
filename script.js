t', function() {
    document.getElementById('outputReparos').textContent = this.value;
});

document.getElementById('descricaoSelect').addEventListener('change', function() {
    if (this.value === 'outra') {
        document.getElementById('descricaoCustom').style.display = 'block';
    } else {
        document.getElementById('descricaoCustom').style.display = 'none';
        document.getElementById('outputDescricao').textContent = this.value;
    }
});

document.getElementById('descricaoCustom').addEventListener('input', function() {
    document.getElementById('outputDescricao').textContent = this.value;
});

document.getElementById('copyButton').addEventListener('click', function() {
    const outputText = `
    Nome: ${document.getElementById('outputNome').textContent}
    IDGPON: ${document.getElementById('outputIDGPON').textContent}
    Nº do Ativo: ${document.getElementById('outputNumAtivo').textContent}
    Reparos repetidos em 30 dias: ${document.getElementById('outputReparos').textContent}
    Descrição: ${document.getElementById('outputDescricao').textContent}
    `;
    navigator.clipboard.writeText(outputText).then(function() {
        alert('Texto copiado com sucesso!');
    }, function() {
        alert('Falha ao copiar o texto.');
    });
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('nome').value = '';
    document.getElementById('idgpon').value = '';
    document.getElementById('numAtivo').value = '';
    document.getElementById('reparos').value = '';
    document.getElementById('descricaoSelect').value = 'ONT desalinhada (Loss of Signal)';
    document.getElementById('descricaoCustom').value = '';
    document.getElementById('descricaoCustom').style.display = 'none';
    
    document.getElementById('outputNome').textContent = '';
    document.getElementById('outputIDGPON').textContent = '';
    document.getElementById('outputNumAtivo').textContent = '';
    document.getElementById('outputReparos').textContent = '';
    document.getElementById('outputDescricao').textContent = 'ONT desalinhada (Loss of Signal)';
});
