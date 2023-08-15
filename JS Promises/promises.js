// Using Promises
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 3500) {
        reject(`Connection Timeout :(`);
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

fakeRequestPromise(`yelp.com/api/coffee/page1`)
  .then((data) => {
    console.log("IT WORKED! (page1)");
    console.log(data);
    return fakeRequestPromise(`yelp.com/api/coffee/page2`);
  })
  .then((data) => {
    console.log("IT WORKED! (page2)");
    console.log(data);
    return fakeRequestPromise(`yelp.com/api/coffee/page3`);
  })
  .then((data) => {
    console.log("IT WORKED! (page3)");
    console.log(data);
  })
  .catch((error) => {
    console.log("OH NO, A REQUEST FAILED!");
    console.log(error);
  });

// ******************************************************* //
// Creating my Promise

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// Forma de usar async em cascata sem palavra-chave await
// delayedColorChange(`red`, 1000)
//   .then(() => delayedColorChange(`red`, 1000))
//   .then(() => delayedColorChange(`orange`, 1000))
//   .then(() => delayedColorChange(`yellow`, 1000))
//   .then(() => delayedColorChange(`green`, 1000))
//   .then(() => delayedColorChange(`blue`, 1000))
//   .then(() => delayedColorChange(`indigo`, 1000))
//   .then(() => delayedColorChange(`violet`, 1000));

// ******************************************************* //
// Async Await Keywords
// Melhor forma de usar
// Combinar Async e Await

async function rainbow() {
  await delayedColorChange(`red`, 1000);
  await delayedColorChange(`orange`, 1000);
  await delayedColorChange(`yellow`, 1000);
  await delayedColorChange(`green`, 1000);
  await delayedColorChange(`blue`, 1000);
  await delayedColorChange(`indigo`, 1000);
  await delayedColorChange(`violet`, 1000);
  return "ALL DONE!";
}

//rainbow().then(() => console.log("END OF RAINBOW!"));

async function printRainbow() {
  await rainbow();
  console.log("END OF RAINBOW!");
}

printRainbow();

// ************************************************************** //
// Melhor forma de usar

async function makeTwoRequests() {
  try {
    let data1 = await fakeRequestPromise(`/page1`);
    console.log(data1);
    let data2 = await fakeRequestPromise(`/page2`);
    console.log(data2);
  } catch (e) {
    console.log("CAUGHT AAN ERROR");
    console.log("Error is: ", e);
  }
}

makeTwoRequests();
