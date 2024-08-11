document.getElementById('addNote').addEventListener('click', function() {
    const noteText = document.getElementById('noteText').value.trim();
    
    if (noteText === '') {
        alert('Por favor, digite uma nota.');
        return;
    }

    // Criar o elemento da nota
    const li = document.createElement('li');
    li.textContent = noteText;

    // Criar o botão de excluir
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    // Adicionar o botão de excluir ao elemento da nota
    li.appendChild(deleteButton);

    // Adicionar o elemento da nota à lista
    document.getElementById('noteList').appendChild(li);

    // Limpar o campo de entrada
    document.getElementById('noteText').value = '';
});
