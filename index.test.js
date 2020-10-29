const { getFruitEmoji } = require('./index.js')

describe('Get fruit emojis by given name', () => {
  it('should get the orange fruit emoji', () => {
    // Arrange
    const mockFruitName = 'orange'
    const mockFruitEmoji = '🍊'
    console.log(getFruitEmoji)

    // Act
    const fruitEmoji = getFruitEmoji(mockFruitName)

    // Assert
    expect(fruitEmoji).toEqual(mockFruitEmoji)
  })

  it('should get the grapes fruit emoji', () => {
    // Arrange
    const mockFruitName = 'grapes'
    const mockFruitEmoji = '🍇'

    // Act
    const fruitEmoji = getFruitEmoji(mockFruitName)

    // Assert
    expect(fruitEmoji).toEqual(mockFruitEmoji)
  })

  it('should get the melon fruit emoji', () => {
    // Arrange
    const mockFruitName = 'melon'
    const mockFruitEmoji = '🍈'

    // Act
    const fruitEmoji = getFruitEmoji(mockFruitName)

    // Assert
    expect(fruitEmoji).toEqual(mockFruitEmoji)
  })

  it('should get the watermelon fruit emoji', () => {
    // Arrange
    const mockFruitName = 'watermelon'
    const mockFruitEmoji = '🍉'

    // Act
    const fruitEmoji = getFruitEmoji(mockFruitName)

    // Assert
    expect(fruitEmoji).toEqual(mockFruitEmoji)
  })

  it('should get the orange fruit emoji', () => {
    // Arrange
    const mockFruitName = 'orange'
    const mockFruitEmoji = '🍊'

    // Act
    const fruitEmoji = getFruitEmoji(mockFruitName)

    // Assert
    expect(fruitEmoji).toEqual(mockFruitEmoji)
  })

  it('should get the lemon fruit emoji', () => {
    // Arrange
    const mockFruitName = 'lemon'
    const mockFruitEmoji = '🍋'

    // Act
    const fruitEmoji = getFruitEmoji(mockFruitName)

    // Assert
    expect(fruitEmoji).toEqual(mockFruitEmoji)
  })

  it('should get the banana fruit emoji', () => {
    // Arrange
    const mockFruitName = 'banana'
    const mockFruitEmoji = '🍌'

    // Act
    const fruitEmoji = getFruitEmoji(mockFruitName)

    // Assert
    expect(fruitEmoji).toEqual(mockFruitEmoji)
  })

  it('should get the pineapple fruit emoji', () => {
    // Arrange
    const mockFruitName = 'pineapple'
    const mockFruitEmoji = '🍍'

    // Act
    const fruitEmoji = getFruitEmoji(mockFruitName)

    // Assert
    expect(fruitEmoji).toEqual(mockFruitEmoji)
  })

  it('should get the mango fruit emoji', () => {
    // Arrange
    const mockFruitName = 'mango'
    const mockFruitEmoji = '🥭'

    // Act
    const fruitEmoji = getFruitEmoji(mockFruitName)

    // Assert
    expect(fruitEmoji).toEqual(mockFruitEmoji)
  })

  it('should get the apple fruit emoji', () => {
    // Arrange
    const mockFruitName = 'apple'
    const mockFruitEmoji = '🍏'

    // Act
    const fruitEmoji = getFruitEmoji(mockFruitName)

    // Assert
    expect(fruitEmoji).toEqual(mockFruitEmoji)
  })

  it('should get the pear fruit emoji', () => {
    // Arrange
    const mockFruitName = 'pear'
    const mockFruitEmoji = '🍐'

    // Act
    const fruitEmoji = getFruitEmoji(mockFruitName)

    // Assert
    expect(fruitEmoji).toEqual(mockFruitEmoji)
  })

  it('should get the peach fruit emoji', () => {
    // Arrange
    const mockFruitName = 'peach'
    const mockFruitEmoji = '🍑'

    // Act
    const fruitEmoji = getFruitEmoji(mockFruitName)

    // Assert
    expect(fruitEmoji).toEqual(mockFruitEmoji)
  })

  it('should get the cherries fruit emoji', () => {
    // Arrange
    const mockFruitName = 'cherries'
    const mockFruitEmoji = '🍒'

    // Act
    const fruitEmoji = getFruitEmoji(mockFruitName)

    // Assert
    expect(fruitEmoji).toEqual(mockFruitEmoji)
  })

  it('should get the strawberry fruit emoji', () => {
    // Arrange
    const mockFruitName = 'strawberry'
    const mockFruitEmoji = '🍓'

    // Act
    const fruitEmoji = getFruitEmoji(mockFruitName)

    // Assert
    expect(fruitEmoji).toEqual(mockFruitEmoji)
  })

  it('should get the kiwi fruit emoji', () => {
    // Arrange
    const mockFruitName = 'kiwi'
    const mockFruitEmoji = '🥝'

    // Act
    const fruitEmoji = getFruitEmoji(mockFruitName)

    // Assert
    expect(fruitEmoji).toEqual(mockFruitEmoji)
  })

  it('should get the tomato fruit emoji', () => {
    // Arrange
    const mockFruitName = 'tomato'
    const mockFruitEmoji = '🍅'

    // Act
    const fruitEmoji = getFruitEmoji(mockFruitName)

    // Assert
    expect(fruitEmoji).toEqual(mockFruitEmoji)
  })

  it('should get the coconut fruit emoji', () => {
    // Arrange
    const mockFruitName = 'coconut'
    const mockFruitEmoji = '🥥'

    // Act
    const fruitEmoji = getFruitEmoji(mockFruitName)

    // Assert
    expect(fruitEmoji).toEqual(mockFruitEmoji)
  })

  it('should get the avocado fruit emoji', () => {
    // Arrange
    const mockFruitName = 'avocado'
    const mockFruitEmoji = '🥑'

    // Act
    const fruitEmoji = getFruitEmoji(mockFruitName)

    // Assert
    expect(fruitEmoji).toEqual(mockFruitEmoji)
  })

  it('should get the avocado fruit emoji', () => {
    // Arrange
    const mockFruitName = 'avocado'
    const mockFruitEmoji = '🥑'

    // Act
    const fruitEmoji = getFruitEmoji(mockFruitName)

    // Assert
    expect(fruitEmoji).toEqual(mockFruitEmoji)
  })

  it('should return undefined if the fruit does not exist', () => {
    // Arrange
    const mockFruitName = 'potato'

    // Act
    const fruitEmoji = getFruitEmoji(mockFruitName)

    // Assert
    expect(fruitEmoji).toEqual(undefined)
  })
})
