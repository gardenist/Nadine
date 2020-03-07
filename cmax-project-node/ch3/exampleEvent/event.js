const EventEmitter = require('events');

const myEvent = new EventEmitter();

myEvent.addListener('event1', () =>{
    console.log('이벤트 1');
});

myEvent.on('event2', () => {
    console.log('이벤트 2')
})

myEvent.on('event2', () => {
    console.log('이벤트 2 추가')
})

myEvent.emit('event1');
myEvent.emit('event2');

myEvent.once('event3', ()=>{
    console.log('이벤트 3')
})


myEvent.emit('event3');
myEvent.emit('event3');

myEvent.on('event4', () => {
    console.log('이벤트 4');
})

myEvent.removeAllListeners('event4');

const listner = () => {
    console.log('이벤트 5')
}

myEvent.on('event5', listener);
myEvent.removeListener('event', listner)
myEvent.emit('evnet5')

console.log(myEvent.listenerCount('evnet2'))