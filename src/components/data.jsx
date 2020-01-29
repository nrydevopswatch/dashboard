const DATA_COUNT = 10;

function randInt(max, increment) {
  const i = increment ? 1 : 0;
  return Math.floor(Math.random() * Math.floor(max)) + i;
}
function randWord() {
  const words = [
    "red",
    "blue",
    "black",
    "green",
    "yellow",
    "white",
    "orange",
    "fast",
    "slow",
    "medium",
    "large",
    "small",
    "great",
    "wonderful",
    "cat",
    "dog",
    "ferret",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ];
  return words[randInt(words.length)];
}

const readOnlyKeys = [
  "commodity",
  "description",
  "total qty",
  "unit",
  "delivery site"
];

const writeKeys = [
  "delivery time",
  "unit price",
  "total price",
  "currency",
  "remarks"
];

const keys = [...readOnlyKeys, ...writeKeys];
let headers = [];

keys.forEach(key => {
  headers.push({ value: key, readOnly: true });
});

function makeData() {
  let values = [];
  keys.forEach(key => {
    values.push({
      value: ["total qty", "unit price"].includes(key)
        ? randInt(15, true)
        : randWord(),
      readOnly: readOnlyKeys.includes(key) ? true : false
    });
  });
  return values;
}

export default function() {
  let sampleData = [headers];
  for (let i = 0; i < DATA_COUNT; i++) {
    sampleData.push(makeData());
  }
  return sampleData;
}
