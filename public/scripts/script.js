document.addEventListener('DOMContentLoaded', ()=>{
    updatePosts();
})

function updatePosts(){
    fetch('http://192.168.0.15:5000/api/allPosts').then(res=>{
        return res.json()   })
        .then(json=>{
        
        let postElements = '';

        let posts = JSON.parse(json)

        posts.forEach(post => {
            let postElement = `
                            <div id="${post.id}" class="containerContent">
                                <div class="titleContent">
                                    <h2>${post.title}</h1>
                                </div>
                                <div class="descriptionContent">
                                    <h4>${post.content}</h2>
                                </div>
                            </div>`

            postElements += postElement

        });
        document.getElementById("posts").innerHTML = postElements

    })
}

function newPost(){
    let title = document.getElementById("title").value
    let content = document.getElementById("content").value

    let post = {title, content}

    const options = {
        method: "POST",
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(post)
    }

    fetch('http://192.168.0.15:5000/api/newPost', options).then(res=>{
        console.log(res)
        updatePosts()
    })

}

