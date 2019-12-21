


generate_quote = function(max)
{
var output = "";
min = 0
max = 6
//return number integer
rand = function(min, up)
{
  return min + Math.floor(Math.random() * (up - min + 1));
}

//quotes of Janusz Korwin Mikke, we use one part of every tab every time
tab_a = [
  'Ja chcę powiedzieć jedną rzecz:',
   'Trzeba powiedzieć jasno:',
   'Jak powiedział wybitny krakowianin, Stanisław Lem:',
   'Proszę mnie źle nie zrozumieć: ',
   'Ja chciałem przypomnieć państwu, że',
   'Niech państwo nie mają złudzeń:',
    'Powiedzmy to wyraźnie: ']

tab_b = [
  ' przedstawiciele czerwonej hołoty',
  ' ci wszyscy (tfu!) geje',
  ' funkcjonariusze reżymowej telewizji',
  ' tak zwani ekolodzy',
  ' ci wszyscy (tfu!) demokraci',
  ' agenci bezpieki',
  ' feminazistki'
  ]
tab_c = [
  ' zupełnie bezkarnie',
  ' całkowicie bezczelnie',
  ' o poglądach na lewo od komunizmu',
  ' celowo i świadomie',
  ' z premedytacją',
  ' od czasów Okrągłego Stołu',
  ' w ramach postępu'

]
tab_d = [
  ' nawołują do podniesienia podatków',
  ' próbują wyrzucić kierowców z miast',
  ' próbują skłócić Polskę z Rosją',
  ' głoszą brednie o globalnym ociepleniu',
  ' zakazują posiadania broni',
  ' nie dopuszczają prawicy do władzy',
  ' uczą dzieci homoseksualizmu']

tab_e = [
  ', bo dzięki temu mogą kraść',
  ', bo dostają za to pieniądze',
  ', bo tak się uczy w państwowej szkole',
  ', bo głupich jest więcej niż mądrych',
  ', bo chcą tworzyć raj na Ziemi',
  ', bo chcą niszczyć cywilizację białego człowieka',
  ', bo bez tego (tfu!) demokracja nie istnieje']

tab_f = [
  ' przez kolejne kadencje.',
  ', o czym się nie mówi.',
  ' i właśnie dlatego Europa umiera.',
  ' ale przyjdą muzułmanie i zrobią porządek.',
  ' - tak samo zresztą jak za Hitlera.',
  ' - proszę zobaczyć co się dzieje na Zachodzie, jeśli mi państwo nie wierzą',
  ' ,co sto lat temu nie przyszłoby nikomu do głowy.']

output = tab_a[rand(min, max)]
output += tab_b[rand(min, max)]
output += tab_c[rand(min, max)]
output += tab_d[rand(min, max)]
output += tab_e[rand(min, max)]
output += tab_f[rand(min, max)]

return output
}
