import './App.css';
import {useState} from 'react';
import {BsSun, BsMoon} from 'react-icons/bs'

function App() {

  const [escuro, setEscuro] = useState(false);
  const tema = {backgroundColor:  escuro ? '#000' :  '#fff',
color: escuro ? '#fff' : '#000'}

function mudarTema () {
  setEscuro(!escuro);
}
  return (
    <div className="App" style={tema}>
     <h1>Tema - Dark/Light</h1>
     <hr />
     <button onClick={mudarTema}> <BsSun /> <BsMoon /></button>
     <p>Eu falei que era uma questão de tempo
E tudo ia mudar, e eu lutei
Vários me disseram que eu nunca ia chegar, duvidei
Lembra da ladeira, meu?
Toda Sexta-feira meu melhor amigo é Deus e o segundo melhor sou eu
Eu tanto quis, tanto fiz, tanto fui feliz
Eu canto Xis, canto Péricles, canto Elis
Torcedor do Santos, desse pão e circo eu também quis
Não sei feliz, mas geral merece não ser infeliz
Prosperei com o suor do meu trabalho
Me guardei, lutei sem buscar atalho
Ou sem pisar em ninguém
Sem roubar também, então sei
Que hoje o meu nome é Foda e meu sobrenome é Pra Caralho
Deus olhou pra mim, disse assim, escuta neguin
Pegue esse caderno e escreve em cada folha até o fim
Eu disse Senhor, sou tão tímido, sinto mó pavor
Só subir no palco a perna congelou
Mas rodei o Brasil, CD na mochila foi cinquenta mil
Mão em mão, na rodoviária passando mó frio
Quem viu, viu, Curitiba meu tesouro, foi estouro
Vinte e cinco mil, tio, DVD de ouro
Triunfo bombou, Leandro estourou, Michel prosperou
Dei valor, só trabalhador, homens de valor
Minha cor não me atrapalhou, só me abençoou
Quem falou que era moda, hoje felizmente se calou
Vai, vai lá, não tenha medo do pior
Eu sei que tudo vai mudar
Você vai transformar o mundo ao seu redor
Mas não vacila, moleque de vila, moleque de vila, moleque de vila
Não vacila, moleque de vila, moleque de vila, moleque de vila
Já fui vaiado, já fui humilhado, já fui atacado
Fui xingado, ameaçado, nunca amedrontado
Aplaudido, reverenciado, homenageado
Premiado pelos homens, por Deus abençoado
Avisa o Rony que hoje é nós, não tem show, 'to sem voz
Se o Danilo não colar, vou buscar de Cross
Se o Marques chegar, grita o Magrão, liga, mó função
Tem churrasco, sem fiasco, tira espinha do salão
Já cantei com o Mano Brown, com Edi Rock e com Helião
Com D2, com MV, dei um abraço no Chorão
Aprendi fazer freestyle no busão
Hoje é o mesmo freestyle, só que a gente faz no fundo do avião
E hoje eu acordei chorando porque eu me peguei pensando
Será que lá de cima a minha véia segue me olhando?
Será que se me olhando, ela ainda 'tá me escutando?
Será que me escutando, ela ainda 'tá se orgulhando?
Hoje tanto faz, putaria 'tá demais
Mas ninguém se liga mais, mas ninguém respeita os pais
Mas pra mim tanto faz porque ainda tem Racionais
Pra quem quer, diferente tem, Oriente e Haikass
Raps nacionais, rostos diferentes, mesmos ideais
Salve, Sabota, e todo Rap sem lorota
Os mano gosta de ir no Twitter xingar o Projota
Mas trai a mulher e não abraça a mãe, faz uma cota
Desde os dezesseis 'to aqui, outra vez, vou sorrir
Vou cantar, vou seguir
Vou tentar, conseguir
Se quer falar mal, fala daí
Mas meu público grita tão alto que já nem consigo te ouvir
Olha lá o outdoor com o meu nome
Me emocionar não me faz ser menos homem
Se o diabo amassa o pão, você morre ou você come?
Eu não morri e nem comi, eu fiz amizade com a fome
Vai, vai lá, não tenha medo do pior
Eu sei que tudo vai mudar
Você vai transformar o mundo ao seu redor
Mas não vacila, moleque de vila, moleque de vila, moleque de vila
Não vacila, moleque de vila, moleque de vila, moleque de vila</p>
    </div>
  );
}

export default App;
