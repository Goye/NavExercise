/** Class representing a Data Object */
class Data {
  /**
  * Represents a Data Json Object
  * @constructor
  */
  constructor() {}
  
  /**
  * GetJson
  * Loads the file data asynchronously 
  * @param  {string} path - Path of the Json File
  * @return {Object} Json file
  */
  async getJson(path) {
    const response = await fetch(path);
    return await response.json();
  }
}

export default Data;