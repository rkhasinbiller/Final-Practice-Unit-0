// Need to create objects for the gym

let gym1 = {
  name: "Crossfit Iron",
  location: "St. Louis, MO",
  rating: 4.2,
  hasShowers: true,
  dropInFeeCost: 20





};

console.log(gym1);


// Stringing Characters
function displayGymInfo(gym) {
  return `Welcome to ${gym.name}! Located in ${gym.location}, rated ${gym.rating} stars.`;
}
console.log(displayGymInfo(gym1));


// Checking if a gym has showers.
function checkAmenities(gym) {
  if (gym.hasShowers) {
    console.log(`${gym.name} has showers available!`);
  } else {
    console.log(`${gym.name} does not have showers.`);
  }
}

// Using Loops to display their names.
const gyms = [gym1, gym2];
for (let i = 0; i < gyms.length; i++)



// Create an array of gym objects. Many will be used from above (name, rating, etc)

let gym2 = {
  name: "Crossfit Iron",
  location: "St. Louis, MO",
  rating: 4.2,
  hasShowers: true,
  dropInFeeCost: 20

}


// Filtering gyms that have showers
const gymsWithShowers = gyms.filter(gym => gym.hasShowers);
console.log("Gyms with showers:", gymsWithShowers);
