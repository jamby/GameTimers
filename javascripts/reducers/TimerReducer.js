let TimerReducer = function(timers = [], action) {
  switch (action.type) {
    case 'ADD_TIMER':
      return [{
          initialTimeRemaining: action.time,
          createdAt: (new Date().getTime())
        }, ...timers]
    case 'REMOVE_TIMER':
      return timers.filter((timer) => {
        return timer.createdAt !== action.createdAt
      })
    default: 
      return timers;
  }
}

export default TimerReducer