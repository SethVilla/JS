type CallBack = () => void;

export class Eventing {
  events: {[key: string] : CallBack[] } = {}

  on = (eventName: string, callBack: CallBack) : void  =>{
    const handlers = this.events[eventName] || [] // CallBack or undefined
    handlers.push(callBack);
    this.events[eventName] = handlers;
}

trigger = (eventName: string) : void => {
  const handlers = this.events[eventName];

  if(!handlers || handlers.length === 0){
    return;
  }

  handlers.forEach(callback => {
    callback();
  })
}
}
