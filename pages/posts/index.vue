<template>
  <div class="post-page">
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
  import PostList from '@/components/Posts/PostList'

  export default {
    //middleware: 'log',
    components : {
      PostList
    },
    /*
    fetch(context) {
      
      // if(context.store.state.loadedPosts.length > 0) {
      //  return null
      // }
      
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({loadedPosts: [
            {id:"1", title:"my first title", previewText:"My first preview", thumbnail:"https://miro.medium.com/max/2000/0*kBHpKva09AsGj7RQ"},
            {id:"2", title:"my second title", previewText:"My second preview", thumbnail:"https://miro.medium.com/max/2000/0*kBHpKva09AsGj7RQ"}
          ]})
        }, 1000)

        //reject(new Error())
      }).then(data=>{
        context.store.commit('setPosts', data.loadedPosts)
        //return data
      }).catch(e=>{

      })
    },
    */

    computed: {
      loadedPosts() {
        console.log("================33=====")
        return this.$store.getters.loadedPosts
      }
    }
    /*,
    created() {
      this.$store.dispatch('setPosts', this.loadedPosts)
    }*/
  }
</script>
<style scoped>
.posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>