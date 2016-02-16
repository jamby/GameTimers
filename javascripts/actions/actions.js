let actions = {
  addTimer: function(time) {
    return {
      type: 'ADD_TIMER',
      time: time
    }
  },

  removeTimer: function(createdAt) {
    return {
      type: 'REMOVE_TIMER',
      createdAt: createdAt
    }
  },

}

export default actions