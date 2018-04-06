function pairElement(str) {

  //Helper function to return the proper base pair array from the input DNA strand.
  function findPair(value) {
    switch (value) {
      case 'A':
        return ['A', 'T'];
        break;
      case 'T':
        return ['T', 'A'];
        break;
      case 'C':
        return ['C', 'G'];
        break;
      case 'G':
        return ['G', 'C'];
        break;
      default:
        return;
    }
  }
  //convert str to array.  Iterate over array to create pair and return the resulting 2D array.
  return str.split('').map(findPair);
}
