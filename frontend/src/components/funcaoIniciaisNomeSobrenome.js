
function dicalogin(nomecompleto) {  
  nomecompleto = nomecompleto.replace(/\s(de|da|dos|das)\s/g, ' '); // Remove os de,da, dos,das.
  const iniciais = nomecompleto.match(/\b(\w)/gi); // Iniciais de cada parte do nome.
  const nome = nomecompleto.split(' ')[0].toLowerCase(); // Primeiro nome.
  const sobrenomes = iniciais
    .splice(1, iniciais.length - 1)
    .join('')
    .toLowerCase(); // Iniciais

  //traz apenas primeira letra do nome e uppercase
  console.log(nome.substr(0, 1).toUpperCase() + sobrenomes.toUpperCase()); 

dicalogin('charles Pereira');