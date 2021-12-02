import Vuex from 'vuex'
import axios from 'axios'

const createStore = ()=> {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post=>post.id===editedPost.id)

        state.loadedPosts[postIndex] = editedPost
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get('http://localhost:8080/rest/e1/posts', {headers: {Authorization: 'Basic am9obi5kb2U6bW9xdWk='}})
          .then(res=>{
            console.log('=======res.data========='+ JSON.stringify(res.data))
            
            const postArray = []
            for (const key in res.data) {
              console.log('=======key========='+ key)
              console.log('=======res.data[key].id========='+ res.data[key].id)
              //postArray.push({...res.data[key], id: key})
              postArray.push(res.data[key])
            }
            vuexContext.commit('setPosts', postArray)
            
          })
          .catch(e=> console.error(e))
          

        
        /*
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
        */
        
      },
      addPost(vuexContext, post) {
        const createdPost = {...post, updatedDate:new Date()}
        return axios.post('http://localhost:8080/rest/e1/posts', createdPost, {headers: {Authorization: 'Basic am9obi5kb2U6bW9xdWk='}})
          .then(res=>{
            console.log('-----------66-------------res----' + JSON.stringify(res))
            vuexContext.commit('addPost', {...createdPost, id:res.data.id})
          })
          .catch(e=>console.error(e))
      },
      editPost(vuexContext, editedPost) {
        return axios.put('http://localhost:8080/rest/e1/posts/' + editedPost.id, editedPost, {headers: {Authorization: 'Basic am9obi5kb2U6bW9xdWk='}})
          .then(res=>{
            vuexContext.commit('editPost', editedPost)
          })
        .catch(e=>console.error(e))
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