export default class getApi {
  constructor(axios, base) {
    this.axios = axios.create({
      baseURL: base
    });
  }
}
