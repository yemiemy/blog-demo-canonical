function handleLoadBlogs() {
    url = "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json"
    
    fetch(url).then(response=>{
        return response.json()
    }).then(articles => 
        // this is the data we get after putting our data,
        articles.forEach(element => {
            blogListContainer.innerHTML += `

            <div class="col-4 p-card--highlighted">
                <header class="p-card__header">
                    <h5 class="p-muted-heading u-no-margin--bottom">
                    Cloud and server
                    </h5>
                </header>
                
                <div class="p-card__content">
                    <img class="p-card__image" src="${element.featured_media}">
                    <h3><a href="#">${element.title.rendered}</a></h3>
                    <i>By <a href="#">${element.author}</a> on ${new Date(element.date).toDateString()}</i>
                </div>
                
                <p class="p-card__footer">
                    Article
                </p>
            </div>
            
            ` 
            console.log(element)
        })
    );
}
let blogListContainer = document.getElementById("blog-list-container")
handleLoadBlogs()