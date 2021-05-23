<template>
  <div id="app">
    <!-- component -->
    <div class="antialiased mx-auto max-w-screen-sm">
      <div class="mt-4 flex items-center inline-block">
      <h3 class="mb-4 text-lg font-semibold text-gray-900">Comments</h3>
      <span @click="commentsSorting" class="mb-4 text-lg font-semibold ml-auto text-gray-900">
        <svg id="Layer" enable-background="new 0 0 64 64" height="25" viewBox="0 0 64 64" width="25" xmlns="http://www.w3.org/2000/svg"><path d="m31.414 15.586-7-7c-.78-.781-2.048-.781-2.828 0l-7 7c-.781.781-.781 2.047 0 2.828.78.781 2.048.781 2.828 0l3.586-3.586v39.172c0 1.104.896 2 2 2s2-.896 2-2v-39.172l3.586 3.586c.39.391.902.586 1.414.586s1.024-.195 1.414-.586c.781-.781.781-2.047 0-2.828z"/><path d="m49.414 45.586c-.781-.781-2.047-.781-2.828 0l-3.586 3.586v-39.172c0-1.104-.896-2-2-2s-2 .896-2 2v39.172l-3.586-3.586c-.781-.781-2.048-.781-2.828 0-.781.781-.781 2.047 0 2.828l7 7c.391.391.902.586 1.414.586s1.023-.195 1.414-.586l7-7c.781-.781.781-2.047 0-2.828z"/></svg>
      </span>
      </div>
      <div class="space-y-4">
        <Comment v-for="(comment, index) in comments"
                 :key="index"
                 :comment="comment"
        />
        <CommentInput @comment ="addComment"/>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "./components/Comment/Comment.vue";
import CommentInput from "./components/Comment/CommentInput.vue";
import comments from "./commentsSeed.js";
import CommentClass from "./components/Comment/models/Comment.js";

export default {
  name: "App",
  data() {
    return{
      comments:comments,
      isSorted:false
    }
  },
  components: {
    Comment,
    CommentInput
  },
  methods :{
    addComment(value){
      const comment = new CommentClass();
      comment.text = value
      comment.author = "ATDEV Manager(you)"
      comment.replies = []
      this.comments.push(comment);
    },
    commentsSorting() {
     this.comments= this.comments.sort( (a,b) => {
       return this.isSorted ?new Date(a.time) - new Date(b.time):new Date(b.time) - new Date(a.time) ;
      });
     this.isSorted = !this.isSorted;
    }
  }
};
</script>

<style></style>
