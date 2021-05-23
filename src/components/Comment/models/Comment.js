export default class Comment {
  constructor() {
    this.author = "";
    this.profilePic = "https://www.wagingpeace.org/wp-content/uploads/2016/11/donald_trump.jpg\n";
    this.text = "";
    this.likes = 0;
    this.liked = false;
    this.isEditing = false;
    this.hideReplies = true;
    this.time = new Date().toISOString().split("T")[0];
    this.replies = [];
  }
}
