<template>
  <div class="flex">
    <div class="flex-shrink-0 mr-3">
      <img
          class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
          :src="comment.profilePic"
          alt=""
      />
    </div>
    <div
        class=" flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
      <strong>{{comment.author}}</strong>
      <span class="text-xs text-gray-400 ml-2"> {{ comment.time }}</span>
      <input v-if="comment.isEditing" @keyup.enter="comment.isEditing = !comment.isEditing" v-model="comment.text" class=" text-sm bg-gray-100  rounded border border-gray-400 leading-normal  w-full h-10 py-2 px-3 font-medium placeholder-gray-500 focus:outline-none focus:bg-white" name="body" placeholder='Type Your Comment'/>
      <p v-else class="text-sm">
        {{comment.text}}
      </p>
      <div class="mt-4 flex items-center inline-block">
        <div v-if="comment.hideReplies"  class="text-sm text-gray-500 font-semibold mr-4" @click="comment.hideReplies = !comment.hideReplies">
          {{ comment.replies.length }} Replies</div>
        <div class="text-sm  text-gray-500 font-semibold "
             @click="like()"
        :class="{'text-red-600':comment.liked}"> {{comment.likes}} Likes</div>
        <div class="text-sm ml-auto  text-gray-500 font-semibold "
             @click="comment.isEditing = !comment.isEditing"> Edit</div>
      </div>

      <h4 v-if="!comment.hideReplies"
          @click="comment.hideReplies = !comment.hideReplies"
          class=" my-5 uppercase tracking-wide text-gray-400 font-bold text-xs">
        Replies
      </h4>
      <div v-if="!comment.hideReplies" class="space-y-4">
        <reply v-for="reply in comment.replies" :reply="reply"/>
        <label>
          <input @keyup.enter="addReply" v-model="replyText" class=" text-sm bg-gray-100  rounded border border-gray-400 leading-normal  w-full h-10 py-2 px-3 font-medium placeholder-gray-500 focus:outline-none focus:bg-white" name="body" placeholder='Type Your Comment'/>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import Reply from "../Reply/Reply.vue"
import Comment from "./models/Comment.js";
import ReplyClass from "../Reply/models/Reply.js";
export default {
  data() {
    return {
      replyText: "",
    }
  },
  props: {
    comment: {
      type : Comment,
    }
  },
  components: {
    Reply
  },
  methods: {
    like() {
      let actualLikes = this.comment.likes;
      this.comment.likes = this.comment.liked ? actualLikes -1 : actualLikes +1;
      this.comment.liked = !this.comment.liked;
    },
    addReply() {
      let reply = new ReplyClass()
      reply.author = "ATDEV MANAGER(you)"
      reply.text = this.replyText;
      this.comment.replies.push(reply);
      this.replyText= "";
    }
  }
}
</script>
