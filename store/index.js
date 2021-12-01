import Vuex from 'vuex'

const createStore = ()=> {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
              {id:"1", title:"my first title", previewText:"My first preview", thumbnail:"https://miro.medium.com/max/2000/0*kBHpKva09AsGj7RQ"},
              {id:"2", title:"my second title", previewText:"My second preview", thumbnail:"https://miro.medium.com/max/2000/0*kBHpKva09AsGj7RQ"}
            ])
            resolve()
          }, 1000)

          //reject(new Error())
        }).then(data=>{
          context.store.commit('setPosts', data.loadedPosts)
          //return data
        }).catch(e=>{

        })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }},
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore