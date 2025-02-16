import { getBlague, getCitation, getEvenement, getMocktail, getRecette } from "./apiController"

const getDailyData = async () => {
    let dayThings = JSON.parse(localStorage.getItem("dayThings"))
    if(!dayThings || Date.now() - dayThings.lastUpdate >= 86400000){
        const mocktailData = await getMocktail()
        const recetteData = await getRecette()
        const citationData = await getCitation()
        const evenementData = await getEvenement()
        const blagueData = await getBlague()

        const newLocalStorageData = {lastUpdate: Date.now(), mocktailData, recetteData, citationData, evenementData, blagueData}

        localStorage.setItem("dayThings", JSON.stringify(newLocalStorageData))

        return newLocalStorageData

    }else return dayThings
}

export const getCitationData = async () => {
    const data = await getDailyData()
    return data.citationData
}

export const getEvenementData = async () => {
    const data = await getDailyData()    
    return data.evenementData
}

export const getBlagueData = async () => {
    const data = await getDailyData()
    return data.blagueData
}

export const getMocktailData = async () => {
    const data = await getDailyData()
    return data.mocktailData
}    

export const getRecetteData = async () => {
    const data = await getDailyData()
    return data.recetteData
}    

