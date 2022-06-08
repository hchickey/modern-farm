import { types } from "@babel/core"

const growingPlants = []

// this function must accept a seed object as input
// the function will add the seed to the field
export const addPlant = (seed) => {
    growingPlants.push(seed)
}

export const usePlants = () => {

}