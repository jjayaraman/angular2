

// Comment model
export class Comment {

    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;

    constructor(id: number, name: string, email: string, body: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.body = body;
    }

}