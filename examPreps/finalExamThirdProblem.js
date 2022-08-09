function wildZoo(data) {
    let animalObject = {};
    let areaObject = {};
    for (let element of data) {
      if (element === "EndDay") {
        break;
      }
      let tokens = element.split(": ");
      let command = tokens[0];
      switch (command) {
        case "Add":
          let [name, food, area] = tokens[1].split("-");
          if (!animalObject[name]) {
            animalObject[name] = [0,area];
            if (!areaObject[area]) {
              areaObject[area] = 0;
            }
            areaObject[area]++;
          }
          animalObject[name][0] += Number(food);
          break;
        case "Feed":
          let [nameOfAnimal, foodToFeed] = tokens[1].split("-");
          if (animalObject[nameOfAnimal]) {
            animalObject[nameOfAnimal][0] -= Number(foodToFeed);
            if (animalObject[nameOfAnimal][0] <= 0) {
              console.log(`${nameOfAnimal} was successfully fed`);
              areaObject[animalObject[nameOfAnimal][1]]--;
              delete animalObject[nameOfAnimal];
            }
          }
          break;
      }
    }
    console.log("Animals:");
    for (let element of Object.entries(animalObject)) {
      console.log(` ${element[0]} -> ${element[1][0]}g`);
    }
    console.log("Areas with hungry animals:");
    for (let element of Object.entries(areaObject)) {
      let poularity = Number(element[1]);
      if (poularity > 0) {
        console.log(`${element[0]}: ${element[1]}`);
      }
    }
  }
console.log("------------------------");
wildZoo(["Add: Jamie-600-WaterfallArea",
"Add: Maya-6570-WaterfallArea",
"Add: Adam-4500-ByTheCreek",
"Add: Bobbie-6570-WaterfallArea",
"Feed: Jamie-2000",
"Feed: Adam-2000",
"Feed: Adam-2500",
"EndDay"])

