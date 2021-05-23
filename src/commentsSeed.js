import Comment from "./components/Comment/models/Comment.js";
let comments = []

let comment1 = new Comment();
comment1.author = "Santana";
comment1.profilePic = "https://i1.sndcdn.com/avatars-JnNL0Xqg2bZTI9l0-y2TtKA-t500x500.jpg"
comment1.time = new Date('2023-06-11').toISOString().split("T")[0];
comment1.text = "This is a test text used to development purpose!!!!";
comment1.likes = 1;
comments.push(comment1);


let comment2 = new Comment();
comment2.author = "ATDEV Recruiter";
comment2.profilePic = "https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80\n"
comment2.time = new Date('2020-06-11').toISOString().split("T")[0];
comment2.text = "Such a great Developer WOW!!!!";
comment2.likes = 3;
comments.push(comment2);


let comment3 = new Comment();
comment3.author = "Anonymous";
comment3.profilePic = "https://images.clarin.com/2020/06/01/la-mascara-que-identifica-a___SB6rIPsfr_290x290__1.jpg"
comment3.time = new Date('2021-01-01').toISOString().split("T")[0];
comment3.text = "Bitcoin Decrease gonna cry!!!!";
comment3.likes = 50;
comments.push(comment3)

export default comments;
