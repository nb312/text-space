import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import {React} from "react"
import {ReactDOM} from 'react-dom'

const store = createStore(rootReducer);
// ReactDOM.render(
//     <React.StrictMode>
//       <Provider store={store}>
//         <Home />
//       </Provider>
//     </React.StrictMode>,
//     document.getElementById("root")
//   );
export default store;