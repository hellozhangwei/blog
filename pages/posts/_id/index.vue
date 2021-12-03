<template>
  <div class="single-page-post">
    <section class="post">
      <h1 class="post-title">{{loadedPost.title}}</h1>
      <div class="post-details">
        <div class="post-detail">Last udpated on {{loadedPost.updatedDate}}</div>
        <div class="post-detail">Last udpated by {{loadedPost.author}} </div>
      </div>
      <p class="post-content">
        {{loadedPost.content}}
      </p>
      <section class="post-feedback">
        <p><a href="mailto:zhangwei@apache.org">zhangwei@apache.org</a></p>
      </section>
    </section>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    /*
    asyncData(context, callback) {
      setTimeout(()=> {
        callback(null, {
          loadedPost: {
            id:"1", 
            author:"Wei Zhang",
            updatedDate: new Date(),
            content:"test content",
            title:"My first title (ID:" + context.route.params.id + ")", 
            previewText:"My first preview", 
            thumbnail:"https://miro.medium.com/max/2000/0*kBHpKva09AsGj7RQ"
          }
        })
      }, 1000)
    }
    */
    asyncData(context) {
      
      return axios.get('http://localhost:8080/rest/e1/posts/' + context.params.id, {headers: {Authorization: 'Basic am9obi5kb2U6bW9xdWk='}})
          .then(res=> {
            console.log("=========26=======res.data=====================" + JSON.stringify(res.data))
            return {loadedPost: res.data}
          })
          .catch(e=> console.error(e))
    }
  }
</script>

<style scoped>

.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>