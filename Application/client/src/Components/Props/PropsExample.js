import { useState } from "react";
import BlogsList from "./BlogsList";

const PropsExample = () => {
    const [blogs, setBlogs] = useState(
        [
            {title: 'My website', body: 'Lorem ipsum...', author: 'John Doe'},
            {title: 'My website 1', body: 'Lorem ipsum... 1', author: 'John Doe 1'},
            {title: 'My website 2', body: 'Lorem ipsum... 2', author: 'John Doe 2'},
            {title: 'My website 3', body: 'Lorem ipsum... 3', author: 'John Doe 3'}
        ]);

        return(
            <div>
                <BlogsList blogs={blogs} title={'Blogs List'}/>
            </div>
        )


}

export default PropsExample;