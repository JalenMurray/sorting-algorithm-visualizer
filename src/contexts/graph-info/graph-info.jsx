import { createContext, useCallback, useEffect, useState } from 'react';
import { getShuffledList, scaleList } from '../../utils/utils';
import { bubbleSort, insertionSort, quickSort, selectionSort, shakerSort } from '../../utils/algorithms';

const MAX_N = 150;

export const GraphInfoContext = createContext({
  n: 12,
  list: [],
  working: { sorting: false, index: 0 },
});

export const GraphInfoProvider = ({ children }) => {
  const [n, setN] = useState(75);
  const [list, setList] = useState([]);
  const [working, setWorking] = useState({ sorting: false, index: 0 });

  const shuffleList = useCallback(() => {
    const shuffledList = getShuffledList(n);
    setList(scaleList(shuffledList));
  }, [n]);

  useEffect(() => {
    shuffleList();
  }, [shuffleList]);

  const setNewN = (event) => {
    const newN = Math.floor((event.target.value / 100) * MAX_N);
    setN(newN);
  };

  const sortList = (algorithm) => {
    console.log(algorithm);
    switch (algorithm) {
      case 'Bubble':
        bubbleSort(list, setList, setWorking);
        break;
      case 'Selection':
        selectionSort(list, setList, setWorking);
        break;
      case 'Insertion':
        insertionSort(list, setList, setWorking);
        break;
      case 'Shaker':
        shakerSort(list, setList, setWorking);
        break;
      case 'Quick':
        quickSort(list, setList, setWorking);
        break;
      default:
        bubbleSort();
        break;
    }
  };

  const value = { n, setNewN, list, shuffleList, sortList, working };
  return <GraphInfoContext.Provider value={value}>{children}</GraphInfoContext.Provider>;
};
