class Data {
  constructor() {}
  // Load Json File asyncrhonously 
  async getJson(path) {
    const response = await fetch(path);
    return await response.json();
  }
}

export default Data;