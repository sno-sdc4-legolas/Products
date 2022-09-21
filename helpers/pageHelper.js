module.exports = {
  parsePage: (page, count) => {
    const result = {};

    if (!page || page < 1) {
      page = 1;
    }

    if(!count || count < 1) {
      count = 5;
    }

    result.first = page * count - count + 1;
    result.last = page * count;

    return result;
  }
}