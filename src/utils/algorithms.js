const sleep = (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

export const bubbleSort = (list, setList, setWorking) => {
  const listCopy = [...list];

  const delaySwap = async (i, i2, delay) => {
    await sleep(delay);
    const temp = listCopy[i];
    listCopy[i] = listCopy[i2];
    setList([...listCopy]);
    listCopy[i2] = temp;
    setList([...listCopy]);
  };

  const len = list.length;
  (async () => {
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - i + 1; j++) {
        setWorking({ sorting: true, index: len - 1 - j });
        if (listCopy[j] > listCopy[j + 1]) {
          await delaySwap(j, j + 1, 15);
        }
      }
    }
  })();
  setWorking({ sorting: false, index: 0 });
};

export const insertionSort = (list, setList, setWorking) => {
  const len = list.length;
  const listCopy = [...list];
  (async () => {
    for (let i = 1; i < len; i++) {
      setWorking({ sorting: true, index: i });
      const curr = listCopy[i];
      let j = i - 1;
      while (j >= 0 && curr < listCopy[j]) {
        setWorking({ sorting: true, index: len - 1 - j });
        await sleep(15);
        listCopy[j + 1] = listCopy[j];
        setList(listCopy);
        j--;
      }
      listCopy[j + 1] = curr;
      setList(listCopy);
    }
  })();
};

export const quickSort = async (list, setList, setWorking) => {
  if (list.length <= 1) {
    return list;
  }

  const pivot = list[0];
  const left = [];
  const right = [];

  for (let i = 1; i < list.length; i++) {
    if (list[i] < pivot) {
      left.push(list[i]);
    } else {
      right.push(list[i]);
    }
  }

  console.log(`left`, left);
  console.log(`right`, right);
  console.log('pivot', pivot);
  console.log('Sorting Left');
  const sortedLeft = await quickSort(left, setList, setWorking);
  console.log(sortedLeft);
  const sortedRight = await quickSort(right, setList, setWorking);
  console.log(sortedRight);

  const sorted = [...sortedLeft, pivot, ...sortedRight];
  setList(sorted);

  await sleep(15);

  return sorted;
};

export const selectionSort = (list, setList, setWorking) => {
  const len = list.length;
  const listCopy = [...list];
  (async () => {
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < len; j++) {
        if (listCopy[j] < listCopy[minIndex]) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        await sleep(100);
        setWorking({ sorting: true, index: len - 1 - i });
        const temp = listCopy[i];
        listCopy[i] = listCopy[minIndex];
        setList(listCopy);
        setWorking({ sorting: true, index: len - 1 - minIndex });
        listCopy[minIndex] = temp;
        setList(listCopy);
      }
    }
  })();
};

export const shakerSort = (list, setList, setWorking) => {
  const len = list.length;
  const listCopy = [...list];

  let swapped;
  let start = 0;
  let end = len - 1;

  (async () => {
    do {
      swapped = false;

      for (let i = start; i < end; i++) {
        if (listCopy[i] > listCopy[i + 1]) {
          await sleep(15);
          setWorking({ sorting: true, index: len - 1 - i });
          const temp = listCopy[i];
          listCopy[i] = listCopy[i + 1];
          listCopy[i + 1] = temp;
          setList(listCopy);
          swapped = true;
        }
      }

      if (!swapped) {
        break;
      }

      swapped = false;

      end--;

      for (let i = end; i >= start; i--) {
        if (listCopy[i] > listCopy[i + 1]) {
          await sleep(15);
          setWorking({ sorting: true, index: len - 1 - i });
          const temp = listCopy[i + 1];
          listCopy[i + 1] = listCopy[i];
          listCopy[i] = temp;
          setList(listCopy);
          swapped = true;
        }
      }

      start++;
    } while (swapped);
  })();
};
