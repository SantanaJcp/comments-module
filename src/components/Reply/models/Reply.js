export default class Reply {
  constructor() {
    this.author = "";
    this.text = "";
    this.profilePic = "https://www.wagingpeace.org/wp-content/uploads/2016/11/donald_trump.jpg\n";
    this.time = new Date().toISOString().split("T")[0];
    this.likes = 0;
  }
}
