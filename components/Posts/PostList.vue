<template>
  <section class="post-list">
    <PostPreview
        id="1"
        :is-admin="isAdmin"
        thumbnail="https://miro.medium.com/max/2000/0*kBHpKva09AsGj7RQ"
        title="Hello there"
        previewText="This is my first post!"/>
   
    <PostPreview
      :is-admin="isAdmin"
      id="2"
      thumbnail="https://miro.medium.com/max/2000/0*kBHpKva09AsGj7RQ"
      title="Hello there 2"
      previewText="This is my first post 2!"/>
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components : {
    PostPreview
  },
  props: {
    isAdmin : {
      type: Boolean,
      default: false
    }
  }
}
  
</script>

<style scoped>
.post-list{
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>