

// import the function in plan.js to invoke it
// always import what you export in other files to see if it's working
import { createPlan } from './plan.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'
import { addPlant } from './field.js'
import { usePlants } from './field.js'
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'
import { harvestCatalog } from './catalog.js'


let seed = {
    type: ["Asparagus", "Potato", "Soybean", "Sunflower", "Wheat", "Corn"] 
}


// after importing invoke the function
//since the function returns a value, you need to store that value in a variable named yearlyPlan
const yearlyPlan = createPlan()
// addPlant(seed.type)
const fieldPlants = usePlants(yearlyPlan)
const plantsGrowing = plantSeeds(fieldPlants)
// const seedsPlanted = plantSeeds(seed.type)
const harvest = harvestPlants(plantsGrowing)
const catalog = harvestCatalog(harvest)
console.log(yearlyPlan)

// after invoking the function console.log it to see it work in your browser. 

//  console.log(seedsPlanted)
 console.log(catalog)

// console.log(testAddPlant)
// console.log(testUsePlants)
// console.log(theSeedIsPlanted)
// console.log(testHarvest)
// console.log(testCatalog)

const harvestHTMLElement = document.querySelector(".container")

harvestHTMLElement.innerHTML = harvestCatalog(harvest)