<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  components:{
    AdminPostForm
  },
  methods: {
    onSubmitted(postData) {
      console.log('====11111====postData=====' + JSON.stringify(postData))
      /*axios.post('https://nuxt-blog-a3906-default-rtdb.firebaseio.com/posts.json', postData)
        .then(result=>console.log(result))
        .catch(e=>console.error(e))
      */
      axios.post('http://localhost:8080/rest/e1/posts', {...postData, updatedDate:new Date()}, {headers: {Authorization: 'Basic am9obi5kb2U6bW9xdWk='}})
        .then(result=>console.log(result))
        .catch(e=>console.error(e))
    }
  }
}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>