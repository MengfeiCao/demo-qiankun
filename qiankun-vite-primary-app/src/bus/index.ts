export default class Bus {
  events: any;
  constructor() {
    this.events = {};
  }
  $on(name: string, callback: () => void) {
    this.events[name] = this.events[name] || [];
    this.events[name].push(callback);
  }
  $emit(name: string, args: any) {
    if (this.events[name]) {
      this.events[name].forEach((callback: (args: any) => void) => callback(args));
    }
  }
  $off(name: string, cb: () => void) {
    const cbArr = this.events[name];
    if (cbArr) {
      if (cb) {
        for (let index = 0; index < cbArr.length; index++) {
          const item = cbArr[index];
          if (item === cb) {
            cbArr.splice(index, 1);
            break;
          }
        }
      } else {
        delete this.events[name];
      }
    }
  }
}