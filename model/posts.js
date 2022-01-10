module.exports = {
    posts: [{
        id: "23i1oi2u3jlk",
        title: "O teste testando",
        content: "O teste testando testou o testorino, além disso ele testará a testada da testa fina"
    },
],

    getAll(){
        return this.posts;
    },

    newPost(title, description){
        this.posts.push({id: generateID(), title, description})
    },

    deletePost(id){
        for(i=0;i<this.posts.length;i++){
            if(this.posts[i].id == id){
                this.posts.splice(i, 1)
            }
        }
    }
}

function generateID(){
    return Math.random().toString(36).substring(2, 9);
}