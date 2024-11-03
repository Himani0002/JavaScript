// function savetoDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;

//     if (internetSpeed > 4) {
//       resolve("success:data was saved");
//     } else {
//       reject("failure:weak connection");
//     }
//   });
// }

// savetoDb("Himani Gohil");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       resolve("color changed");
//     }, delay);
//   });
// }

// h1 = document.querySelector("h1");
// changeColor("red", 1000)
//   .then(() => {
//     console.log("red color was completed");
//     return changeColor("orange", 1000);
//   })
//   .then(() => {
//     console.log("orange color was completed");
//     return changeColor("green", 1000);
//   })
//   .then(() => {
//     console.log("green color was completed");
//     return changeColor("blue", 1000);
//   });

function savetoDb() {
  return new Promise((rev, rej) => {
    let internetspeed = Math.floor(Math.random() * 10) + 1;

    if (internetspeed < 5) {
      rev("success : data was save");
    } else {
      rej("failuer : data was not save  ");
    }
  });
}

savetoDb("Himani Gohil")
  .then((result) => {
    console.log("data1 was save");
    console.log(result);
    return savetoDb("Anpa collage ");
  })

  .then((result) => {
    console.log("data2 was save");
    console.log(result);

    return savetoDb("Himani Gohil");
  })
  .then((result) => {
    console.log("data3 was save ");
    console.log(result);
  })
  .catch((error) => {
    console.log("Promise was rejected");
    console.log(error);
  });

h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color was change");
    }, delay);
  });
}

changeColor("pink", 1000)
  .then(() => {
    return changeColor("red", 1000);
  })
  .then(() => {
    return changeColor("purple", 1000);
  })
  .then(() => {
    return changeColor("green", 1000);
  })
  .then(() => {
    return changeColor("yellow", 1000);
  });
