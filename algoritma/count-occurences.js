function countOccurrences(input, query) {
    const wordCount = {};
  
    // Hitung munculnya kata di INPUT
    input.forEach(word => {
      wordCount[word] = (wordCount[word] || 0) + 1;
    });
  
    // Cek munculnya kata di QUERY
    return query.map(q => wordCount[q] || 0);
  }
  
  const INPUT = ['xc', 'dz', 'bbb', 'dz'];
  const QUERY = ['bbb', 'ac', 'dz'];
  const result = countOccurrences(INPUT, QUERY);
  
  console.log(result);
  