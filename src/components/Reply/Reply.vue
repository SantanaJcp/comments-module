<template>
    <div class="flex">
      <div class="flex-shrink-0 mr-3">
        <img
            class="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
            :src="reply.profilePic"
            alt=""
        />
      </div>
      <div
          class="
                    flex-1
                    bg-gray-100
                    rounded-lg
                    px-4
                    py-2
                    sm:px-6
                    sm:py-4
                    leading-relaxed
                    mb-3
                  "
      >
        <strong>{{reply.author}}</strong>
        <span class="text-xs text-gray-400 ml-2"> {{ reply.time }}</span>
        <input v-if="isEditing" @keyup.enter="isEditing = !isEditing" v-model="reply.text" class=" text-sm bg-gray-100  rounded border border-gray-400 leading-normal  w-full h-10 py-2 px-3 font-medium placeholder-gray-500 focus:outline-none focus:bg-white" name="body" placeholder='Type Your Comment'/>
        <p v-else class="text-xs sm:text-sm">
          {{reply.text}}
        </p>
        <div class=" mt-2 flex items-center inline-block">
          <div class="text-sm  text-gray-500 font-semibold "
               @click="like()"
               :class="{'text-red-600':liked}"> {{reply.likes}} Likes</div>
          <div class="text-sm ml-auto  text-gray-500 font-semibold "
               @click="isEditing = !isEditing"> Edit</div>
        </div>

      </div>
    </div>
</template>

<script>
import Reply from "./models/Reply.js";

export default {
  data() {
    return{
      liked:false,
      isEditing:false
    }
  },
  props: {
    reply:{
      type : Reply,
      default : new Reply()
    }
  },
  methods:{
    like() {
      let actualLikes = this.reply.likes;
      this.reply.likes = this.liked ? actualLikes -1 : actualLikes +1;
      this.liked = !this.liked;
    },
  }
}
</script>
