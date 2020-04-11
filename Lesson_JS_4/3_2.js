

"use strict";

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit() {
        this.text = this.text;
    };
}

class AttachedPost extends Post {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    };

}










const post1 = new  Post("Максим", "Нормально", 2019);
post1.edit();