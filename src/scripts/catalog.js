// define and export a catalog function

export const harvestCatalog = (harvest) => {
    // the catalog function should accept the harvested food array as input
    // the catalog should iterate the array of food objects

    // iterate the array the <main> element should have its inner html
    // and a html rep of a food item
    let htmlString = '<section class="online">'

    for (const plant of harvest) {
        htmlString += `<div class="plant">${plant.type}</div>`
    }
    htmlString += `</section>`
    return htmlString
}



