import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
// the following is imported above because they are being called in the fuction

// function needs an input
export const plantSeeds = (foodPlan) => {
// the plan is an array
// contains four arrays
let plan = []

// iterating through the parent array then the child array

for (const plant of foodPlan) {
    for (const plantObj of plant){
    if (plantObj === "Asparagus") {
     const makeAsparagus = createAsparagus()
     plan.push(makeAsparagus)
    }

    if (plantObj === "Potato") {
        const makePotato = createPotato()
        plan.push(makePotato)
    }

    if (plantObj === "Soybean") {
        const makeSoybean = createSoybean()
        plan.push(makeSoybean)
    }

    if (plantObj === "Sunflower") {
        const makeSunflower = createSunflower()
        plan.push(makeSunflower)
    }

    if (plantObj === "Wheat") {
        const makeWheat = createWheat()
        plan.push(makeWheat)
    }
// corn is an array and we don't want to push the corn array into another array
    if (plantObj === "Corn") {
        const makeCorn = createCorn()
        for (const kettle of makeCorn) {
            plan.push(kettle)
        }
    }
    }
 
}
// return the plan array
return plan
}
