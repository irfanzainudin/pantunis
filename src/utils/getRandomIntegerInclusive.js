// getRandomIntegerInclusive

// Taken from: https://coreui.io/blog/how-to-generate-a-random-number-in-javascript/
const getRandomIntegerInclusive = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1)) + min
}

export default getRandomIntegerInclusive;