import Immutable from 'immutable';
import {EventEmitter} from 'events';

let dispatcher = new EventEmitter();

let StateStore = [Immutable.Map()];

dispatcher.on('update', input => {
    let lastState = StateStore[StateStore.length - 1];
    let newState = lastState.merge(input);
    StateStore.push(newState);
    dispatcher.emit('change', newState);
    // console.log(StateStore.map(state => state.toJS()));
});

// var StateStore = Delorean.Flux.createStore({
//     onKeyPress (event) {
//         if (event.value) {
//             history.pushState({}, '', `/#query=${event.value}`);
//         } else {
//             history.pushState({}, '', `/`);
//         }
//     },
//     actions: {
//         'onkeypress': 'onKeyPress'
//     }
// });

export default dispatcher;
