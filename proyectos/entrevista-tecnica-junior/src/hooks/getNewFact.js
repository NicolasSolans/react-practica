const API_RANDOM_FACTS = 'https://catfact.ninja/fact'

export const getNewFact = async () => {
    const res = await fetch(API_RANDOM_FACTS)
    const data = await res.json()
    const { fact } = data
    return fact
}