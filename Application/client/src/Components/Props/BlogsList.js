const BlogsList = (props) => {
// const BlogsList = ({ blogs, title }) => { ---- no need to write props.obj. you can directly access blogs or title

    const blogs = props.blogs;
    const title = props.title;

    return(
        <div>
            <h1>{title}</h1>
            <h1>{blogs[3].title}</h1>
            <p>{blogs[3].body}</p>
            <h2>{blogs[3].author}</h2>
        </div>
    )

}

export default BlogsList;