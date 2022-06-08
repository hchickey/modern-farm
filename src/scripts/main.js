

// import the function in plan.js to invoke it

import { createPlan } from './plan.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'



//since the function returns a value, you need to store that value in a variable named yearlyPlan
const yearlyPlan = createPlan()
const testAsparagus = createAsparagus()
const testCorn = createCorn()
const testPotato = createPotato()
const testSoybean = createSoybean()
const testSunflower = createSunflower()
const testWheat = createWheat()

console.log(yearlyPlan)
console.log(testAsparagus)
console.log(testCorn)
console.log(testPotato)
console.log(testSoybean)
console.log(testSunflower)
console.log(testWheat)