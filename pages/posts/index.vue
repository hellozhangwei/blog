<template>
  <div class="post-page">
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
  import PostList from '@/components/Posts/PostList'

  export default {
    components : {
      PostList
    },
    asyncData(context) {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({loadedPosts: [
            {id:"1", title:"my first title", previewText:"My first preview", thumbnail:"https://miro.medium.com/max/2000/0*kBHpKva09AsGj7RQ"},
            {id:"2", title:"my second title", previewText:"My second preview", thumbnail:"https://miro.medium.com/max/2000/0*kBHpKva09AsGj7RQ"}
          ]})
        }, 1000)

        //reject(new Error())
      }).then(data=>{
        return data
      }).catch(e=>{

      })
    }
  }
</script>
<style scoped>
.posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>