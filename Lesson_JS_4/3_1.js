

"use strict";

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function () {
    this.text = this.text;
};

function AttachedPost(author, text, date, highlighted) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = Post;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
};

const post1 = new  Post("Максим", "Нормально", 2019);
post1.edit();

const attachedPost1 = new AttachedPost("Сергей", "Респект", 2020, false);
attachedPost1.edit();
attachedPost1.makeTextHighlighted();
