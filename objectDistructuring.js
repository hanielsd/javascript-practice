var address = {
    street: "street--1MK16",
    city: "Mekelle",
    country: "Ethiopia"
};

/**
 * Instead of repetitively doing the assignment below we can use object distructuring
 * const street = address.street;
 * const city = address.city;
 * const country = address.country;
 */
// const { street, city, country } = address;
// console.log(`street: ${street} | city: ${city} | country: ${country}`);

/**
 * we can also distructure some of the properties of the object
 */
// const { street } = address;
// console.log(`street: ${street}`);

/**
 * we can use alias name for properties extracted
 */
const { street: strt } = address;
console.log(`Street: ${strt}`);