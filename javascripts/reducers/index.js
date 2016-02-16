import { combineReducers } from 'redux'
import TimerReducer from './TimerReducer'

const rootReducer = combineReducers({
  timers: TimerReducer
})

export default rootReducer