const delayedPromise = (value, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
};

const promises = [
  delayedPromise("apple", 500),
  delayedPromise("banana", 1200),
  delayedPromise("cherry", 300),
  delayedPromise("pear", 800),
  delayedPromise("raspberry", 1500),
];

Promise.all(promises)
  .then((results) => {
    console.log("All results:", results);
  })
  .catch((error) => {
    console.error("Failed promise", error);
  });

//
//
const randomDelay = () => Math.floor(Math.random() * 4000) + 1000;
const randomDelayedPromise = (value) => {
  return delayedPromise(value, randomDelay());
};

const randomPromises = [
  randomDelayedPromise("dog"),
  randomDelayedPromise("cat"),
  randomDelayedPromise("hamster"),
  randomDelayedPromise("parrot"),
  randomDelayedPromise("fish"),
];

Promise.race(randomPromises)
  .then((firstResult) => {
    console.log("First resolved:", firstResult);
  })
  .catch((error) => {
    console.error("Failed promise", error);
  });
