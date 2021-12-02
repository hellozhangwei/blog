<template>
  <div class="amdin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
import axios from 'axios'
export default {
  components:{
    AdminPostForm
  },
  data() {
    return {
      /* loadedPost: {
        author: 'Wei zhang',
        title: '',
        content: '',
        thumbnailLink: ''
      } */
    }
  },
  /*asyncData(context, callback) {
    setTimeout(()=> {
      callback(null, {
        loadedPost: {
          id:"1", 
          author:"Wei Zhang",
          updatedDate: new Date(),
          content:"test content",
          title:"my first title", 
          previewText:"My first preview", 
          thumbnail:"https://miro.medium.com/max/2000/0*kBHpKva09AsGj7RQ"
        }
      })
    }, 1000)
  }*/
  asyncData(context) {
    console.log("=========42====context.params.id==========" + context.params.postId)
    return axios.get('http://localhost:8080/rest/e1/posts/' + context.params.postId, {headers: {Authorization: 'Basic am9obi5kb2U6bW9xdWk='}})
        .then(res=> {
          console.log("=========45=======res.data=====================" + JSON.stringify(res.data))
          return {loadedPost: res.data}
        })
        .catch(e=> context.error())
  },
  methods : {
    onSubmitted(editedPost) {
      console.log('------editedPost----------' + JSON.stringify(editedPost))
      console.log('------this.$route.params.postId----------' + this.$route.params.postId)
      
      /*
      axios.put('http://localhost:8080/rest/e1/posts/' + this.$route.params.postId, editedPost, {headers: {Authorization: 'Basic am9obi5kb2U6bW9xdWk='}})
      .then(res=>{
          //console.log(res)
          this.$router.push('/admin')
        })
      .catch(e=>console.error(e))
      */
      this.$store.dispatch('editPost', editedPost)
        .then(res=>{
          this.$router.push('/admin')
        })
    }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>