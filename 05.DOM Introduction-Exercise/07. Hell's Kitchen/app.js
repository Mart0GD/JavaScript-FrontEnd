function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const restaurants = JSON.parse(document.querySelector('#inputs textarea').value);
      const bestRestaurantOutput = document.querySelector('#bestRestaurant p');
      const workersAtBestRestaurantOutput = document.querySelector('#workers p');

      let restaurantsDictionary = [];
      "PizzaHut - Peter 500, George 300, Mark 800"
      restaurants.forEach(restaurant => {
         let [restaurantName, workers] = restaurant.split(" - ");
         
         let restaurantObject = restaurantsDictionary.find(x => x.name === restaurantName)
         ? restaurantsDictionary.find(x => x.name === restaurantName)
         :{
            name: restaurantName,
            workers: {},
            averageSalary: 0,
            bestSalary: 0
         }

         for(const worker of workers.split(', ')){
            let [workerName, workerSalary] = worker.split(' ');

            restaurantObject.workers[workerName] = Number(workerSalary);
         }

         let salaries =  Object.values(restaurantObject.workers);
         restaurantObject.averageSalary = (salaries.reduce((sum, number) => sum += number, 0) / salaries.length).toFixed(2);
         restaurantObject.bestSalary = (salaries.sort((a, b) => b - a)[0]).toFixed(2);

         restaurantsDictionary.push(restaurantObject);
      })

      let bestRestaurant = restaurantsDictionary.sort((a,b) => b.averageSalary - a.averageSalary)[0];

      bestRestaurantOutput.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary} Best Salary: ${bestRestaurant.bestSalary}`;
      workersAtBestRestaurantOutput.textContent = Object.entries(bestRestaurant.workers).sort((a,b) => b[1] - a[1]).map(worker => `Name: ${worker[0]} With Salary: ${worker[1]}`).join(" ");
   }
}