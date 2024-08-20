/*
Arrays
Inserir Itens:

push(item): Adiciona um item ao final do array.
javascript
Copy code
array.push(item);
unshift(item): Adiciona um item ao início do array.
javascript
Copy code
array.unshift(item);
splice(index, 0, item1, item2, ...): Insere itens em uma posição específica.
javascript
Copy code
array.splice(2, 0, 'newItem1', 'newItem2');
Selecionar Itens:

array[index]: Acessa o item no índice especificado.
javascript
Copy code
let item = array[2];
indexOf(item): Retorna o índice do primeiro item correspondente ou -1 se não encontrado.
javascript
Copy code
let index = array.indexOf('item');
Remover Itens:

pop(): Remove o último item do array.
javascript
Copy code
array.pop();
shift(): Remove o primeiro item do array.
javascript
Copy code
array.shift();
splice(index, count): Remove um número específico de itens a partir do índice.
javascript
Copy code
array.splice(2, 1);
Objetos
Inserir/Atualizar Itens:

object[key] = value: Define ou atualiza uma chave com um valor.
javascript
Copy code
object.key = 'value';
Selecionar Itens:

object[key]: Acessa o valor associado à chave.
javascript
Copy code
let value = object.key;
Remover Itens:

delete object[key]: Remove a chave e seu valor do objeto.
javascript
Copy code
delete object.key;
Arrays Dentro de Objetos
Inserir Itens:

object[key].push(item): Adiciona um item ao final do array em uma chave específica do objeto.
javascript
Copy code
object.key.push('newItem');
object[key].unshift(item): Adiciona um item ao início do array.
javascript
Copy code
object.key.unshift('newItem');
object[key].splice(index, 0, item): Insere itens em uma posição específica no array.
javascript
Copy code
object.key.splice(2, 0, 'newItem');
Selecionar Itens:

object[key][index]: Acessa o item no índice especificado dentro do array da chave.
javascript
Copy code
let item = object.key[2];
Remover Itens:

object[key].pop(): Remove o último item do array.
javascript
Copy code
object.key.pop();
object[key].shift(): Remove o primeiro item do array.
javascript
Copy code
object.key.shift();
object[key].splice(index, count): Remove um número específico de itens a partir do índice no array.
object.key.splice(2, 1);
*/
