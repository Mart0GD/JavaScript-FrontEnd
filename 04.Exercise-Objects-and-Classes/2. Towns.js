function solve(input){

    let cities = [];

    for(let i = 0; i < input.length; i++ ){

        let [town, latitude, longitude] = input[i].split(" | ");

        city = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        }

        cities.push(city);
    }

    cities.forEach((city) => console.log(city));

}