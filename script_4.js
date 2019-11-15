const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];
//Les anné 70
console.log("Les annnés 70")

{
    for (let index in entrepreneurs) {

        if (entrepreneurs[index].year > 1969 && entrepreneurs[index].year < 1980) {
            console.log(entrepreneurs[index].year);
        }
    }
}
console.log("Prenon et Nom")
    //* fisrt name and last name  */

{
    let array = [];
    for (let name in entrepreneurs) {
        array.push({ firstname: entrepreneurs[name].first, lastname: entrepreneurs[name].last });
    }
    console.log(array);

}
console.log("Leur age:")
    // ** AGE of entrepreneur
    {
        let ageTable = [];
        for (let age in entrepreneurs) {
            ageTable.push({ firstname: entrepreneurs[age].first, Age: 2019 - entrepreneurs[age].year });
        }
        console.log(ageTable)

    }
console.log("Order name :");

//***order last name 

{
    let nameOrder = [];
    for (let name in entrepreneurs) {
        nameOrder.push(
            entrepreneurs[name].last
        )
    }
    nameOrder.sort();

    let allOrder = [];
    nameOrder.forEach(all => {
        entrepreneurs.forEach(entrepreneur_content => {
            if (all == entrepreneur_content.last) {
                allOrder.push(entrepreneur_content);
            }
        })
    });
    console.log(allOrder);
}