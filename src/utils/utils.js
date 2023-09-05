const MAX_Y = 550;

export const scaleList = (arr) => {
  const max = Math.max(...arr);
  const scaler = MAX_Y / max;
  return arr.map((num) => Math.floor(num * scaler));
};

export const getShuffledList = (n) => {
  let unShuffledList = [];
  for (let i = 1; i <= n + 1; i++) {
    unShuffledList.push(i);
  }
  let shuffledList = [...unShuffledList];
  for (let i = n; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = (unShuffledList = shuffledList[i]);
    shuffledList[i] = shuffledList[j];
    shuffledList[j] = temp;
  }
  return shuffledList;
};
