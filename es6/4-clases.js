
// Creacion
class Document {
	constructor(title, author, isPublished) {
		this.title = title;
		this.author = author;
		this.isPublished = isPublished;
	}
	publish() {
		this.isPublished = true;
	}
}

// Herencia
class Book extends Document {
	constructor(title, author, topic) {
		super(title, author, true);
		this.topic = topic;
	}
}