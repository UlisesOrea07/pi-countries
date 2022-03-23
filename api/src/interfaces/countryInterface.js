
module.exports = countryInterface = (country) => {
    const Country = {
        id: country.cca3,
        name: country.name.common,
        flag: country.flags ? country.flags[0] : 'none',
        continent: country.continents ? country.continents[0] : 'none',
        capital: country.capital ? country.capital[0] : 'none',
        subregion: country.subregion,
        area: country.area,
        population: country.population,
    }
    return Country;
}