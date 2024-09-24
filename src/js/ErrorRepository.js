export default class ErrorRepository {
  constructor(){
    this.errorList = new Map;
  }

  add(code, description) {
    this.errorList.set(code, description);
  }

  translate(code) {
    return this.errorList.get(code) || 'Unknown error';
  }

}

