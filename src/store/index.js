import Vue from 'vue'
import Vuex from 'vuex'
import menu from '../assets/data/menu.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: menu,
    orderList: []
  },
  mutations: {
    addList(state, item){
      state.orderList.push(item)
    }
  },
  actions: {
    addItem(context, item){
      if (context.state.orderList.includes(item)){
        item.amount++
      } else{
        context.commit('addList', item)
      }
    },
    removeItem(context, item){
      if (context.state.orderList.includes(item)){
        item.amount--
      }else{
        context.commit('addList, item')
      }
    }
  },
  getters: {
    thisCounter(state){
      return state.orderList.length
    },
    getTotal(state){
      let total = 0;
      for (let item of state.orderList){
        total += item.price * item.amount;
      }
      return total;
    }
  },
  modules: {
  }
})
