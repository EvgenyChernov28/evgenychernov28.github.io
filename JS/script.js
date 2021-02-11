/* Устанавливаем стартовый индекс слайда по умолчанию: */
const WIDTH = 2.5;
const HEIGHT = 2.5;
const DEFAULT_CITY = '';
const COORD_ARRAY = [
  {
    key: 'Hobbiton',
    left: 65.8,
    top: 26.3,
    dotIndex: 1,
  },
  {
    key: 'Trollshaw',
    left: 63.4,
    top: 32.5,
    dotIndex: 2,
  },
  {
    key: 'Mordor',
    left: 65.3,
    top: 39.1,
    dotIndex: 3,
  },
  {
    key: 'Weta Workshop',
    left: 61.9,
    top: 51.8,
    dotIndex: 4,
  },
  {
    key: 'South of Rivendell',
    left: 52.2,
    top: 51.8,
    dotIndex: 5,
  },
  {
    key: 'Pelennor Fields',
    left: 32.9,
    top: 75.0,
    dotIndex: 6,
  },
  {
    key: 'Edoras',
    left: 48.4,
    top: 69.0,
    dotIndex: 7,
  },
  {
    key: 'Laketown',
    left: 34.4,
    top: 71.3,
    dotIndex: 8,
  },
  {
    key: 'Nen Hithoel',
    left: 28.8,
    top: 82.0,
    dotIndex: 9,
  },
]

let cardIndex = 1;
let selectCity = DEFAULT_CITY;
let selectIndex
/* Вызываем функцию, которая реализована ниже: */
showCards(cardIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextCard() {
  showCards(cardIndex += 1);
  if (selectCity){
    document.getElementById(selectCity).style.borderColor = 'transparent'
  }
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousCard() {
  showCards(cardIndex -= 1); 
  if (selectCity){
    document.getElementById(selectCity).style.borderColor = 'transparent'
  }
}

/* Устанавливаем текущий слайд: */
function currentCard(n) {
  showCards(cardIndex = n);
}
//console.log(window.COORD_ARRAY)


/* Функция перелистывания: */
function showCards(n) {
  
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let cards = document.getElementsByClassName("card")
    
    /* Проверяем количество слайдов: */
    if (n > cards.length) {
      cardIndex = 1
    }
    if (n < 1) {
      cardIndex = cards.length
    }
  
    /* Проходим по каждому слайду в цикле for: */
    for (let card of cards) {
        card.style.display = "none"
    }

    /* Делаем элемент блочным: */
    cards[cardIndex - 1].style.display = "block" 
    
    console.log(selectCity);
}








COORD_ARRAY.forEach((coord, index) =>{

  const currentCoord = document.createElement('div')
  currentCoord.style.position = 'absolute'
  currentCoord.style.left = `${coord.left}%`
  currentCoord.style.top = `${coord.top}%`
  currentCoord.style.width = `${WIDTH}%`
  currentCoord.style.height = `${HEIGHT}%`
  currentCoord.style.borderRadius = `50%`
  currentCoord.style.cursor = `pointer`
  currentCoord.style.border = '3px solid transparent'

  if(coord.key === selectCity){
    currentCoord.style.borderColor = `black`
  }
  currentCoord.id = coord.key
  currentCoord.onclick = onClickCity
  this.mapWrapperId.append(currentCoord)
})

function onClickCity (e) {

  const NEW_CITY = e.target.id
  if (NEW_CITY !== selectCity) {
    if (selectCity){
      const OLD_CITY_ELEMENT = document.getElementById(selectCity)
      OLD_CITY_ELEMENT.style.borderColor = 'transparent'
    }
    e.target.style.borderColor = 'black'
    selectCity = NEW_CITY
    selectIndex = COORD_ARRAY.findIndex(coord => coord.key === selectCity);
    console.log(COORD_ARRAY[selectIndex].dotIndex);
    currentCard(COORD_ARRAY[selectIndex].dotIndex);
  }
  
}

// document.getElementById('mapId').addEventListener('click', function(event){console.log(event.offsetX/620*100 +'x'+ event.offsetY/620*100)}, false)