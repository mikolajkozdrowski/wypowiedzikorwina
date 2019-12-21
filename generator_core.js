
var output = "";


min = 0
max = 1
//return number integer
rand = function(min, max)
{
  return min + Math.floor(Math.random() * (max - min + 1));
}


//quotes of Janusz Korwin Mikke
tab_a = ['Ja chcę powiedzieć jedną rzecz:', 'Trzeba powiedzieć jasno:']
tab_b = [' przedstawiciele czerwonej hołoty', ' ci wszyscy (tfu!) geje']
tab_c = [' zupełnie bezkarnie', ' całkowicie bezczelnie']
tab_d = [' nawołują do podniesienia podatków', ' próbują wyrzucić kierowców z miast']
tab_e = [', bo dzięki temu mogą kraść', ', bo dostają za to pieniądze']
tab_f = ['przez kolejne kadencje.', ', o czym się nie mówi.']

output = tab_a[rand(min, max)]
output += tab_b[rand(min, max)]
output += tab_c[rand(min, max)]
output += tab_d[rand(min, max)]
output += tab_e[rand(min, max)]
output += tab_f[rand(min, max)]

console.log(output)
