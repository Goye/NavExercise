import jsonData from '../../data/nav.json';

class Data {
  constructor() {}

  async getJson(path) {
    const response = await fetch(path);
    return await response.json();
  }
}

export default Data;