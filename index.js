const getFruitEmoji = fruitName => ({
  grapes: '🍇',
  melon: '🍈',
  watermelon: '🍉',
  orange: '🍊',
  lemon: '🍋',
  banana: '🍌',
  pineapple: '🍍',
  mango: '🥭',
  apple: '🍏',
  pear: '🍐',
  peach: '🍑',
  cherries: '🍒',
  strawberry: '🍓',
  kiwi: '🥝',
  tomato: '🍅',
  coconut: '🥥',
  avocado: '🥑'
})[fruitName]

module.exports = {
  getFruitEmoji
};
