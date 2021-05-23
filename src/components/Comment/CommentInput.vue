<template>
  <!-- component -->
  <!-- comment form -->
  <div class="flex mx-auto items-center justify-center mt-56 mx-8 mb-4 max-w-lg ">
    <div class="flex flex-wrap -mx-3 mb-6">
      <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new comment</h2>
      <div class="w-full md:w-full px-3 mb-2 mt-2">
        <label>
          <textarea v-model="text" class="bg-gray-100  rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-500 focus:outline-none focus:bg-white" name="body" placeholder='Type Your Comment' ></textarea>
        </label>
      </div>
      <div class="w-full md:w-full flex items-start md:w-full px-3">

        <div class="mr-1 ml-auto">
          <input  @click="postComment()" type='submit' class="bg-white hover:bg-blue-200 text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value='Post Comment'>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      text:"",
    }
  },
  methods: {
    postComment() {
      if(this.text) {
        this.$emit("comment", this.text);
        this.text = "";
      }
    }
  }
}
</script>
