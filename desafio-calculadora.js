//criando funçao
calculator(200,5)

function calculator(vict, loss){
    let xp = vict - loss
    let nivel
    if (xp <= 10) {
      nivel = 'Ferro';
    } else if (xp > 10 && xp <= 20) {
      nivel = 'Bronze';
    } else if (xp >= 21 && xp <= 50) {
      nivel = 'Prata';
    } else if (xp >= 51 && xp <= 80) {
      nivel = 'Ouro';
    } else if (xp >= 81 && xp <= 90) {
      nivel = 'Diamante';
    } else if (xp >= 91 && xp <= 100) {
      nivel = 'Lendário';
    } else if (xp >= 101) {
      nivel = 'Imortal';
    }
    console.log("O Herói tem de saldo de " +  xp + " está no nível de " + nivel)
}