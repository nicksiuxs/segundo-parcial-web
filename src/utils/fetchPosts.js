const getPosts = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const resp = await fetch(url);
    const posts = await resp.json();

    return posts;
}

export default getPosts