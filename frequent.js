function findMostFrequentElement(arr) {
    const frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentElement;
  
    for (const num of arr) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  
      if (frequencyMap[num] > maxFrequency) {
        maxFrequency = frequencyMap[num];
        mostFrequentElement = num;
      }
    }
  
    return mostFrequentElement;
  }
  

  const array = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const frequentNum = findMostFrequentElement(array);
  console.log(frequentNum); 
  