// alert - document.write - console.log 

var numeroSecreto = parseInt(Math.random() * 10)

var tentativas = 5

while (tentativas > 0) {
  var chute = parseInt(prompt('Type a number of 0 the 10: '))

  if (numeroSecreto == chute) {
    alert('Hit!')
    break
  } else if (chute < numeroSecreto) {
    alert('O número secreto é maior!')
  } else if (chute > numeroSecreto) {
    alert('O número secreto é menor!')   
  }
  tentativas = tentativas - 1
}

if (chute != numeroSecreto) {
  alert("Suas tentativas acabaram. O número secreto era " + numeroSecreto)
}
  