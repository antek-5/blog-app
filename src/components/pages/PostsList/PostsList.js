import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";
import styles from "./PostsList.module.scss";
import Button from "react-bootstrap/Button";

const PostList = () => {

    const posts = useSelector(getAllPosts);

    return(
        <div className={styles.postListContainer}>
            <h1>all posts</h1>

            <div className={styles.postListInner}>
                {posts.map( post => 
                    <div className={styles.postCard}>
                        <h3> {post.title}</h3>
                        <h4><span className={styles.firstWord}>Author: </span>{post.author}</h4>
                        <h4><span className={styles.firstWord}>Published: </span>{post.publishedDate}</h4>
                        <p>{post.shortDescription}</p>
                        <Button className={styles.buttonBS} variant="primary" href="/post/:id">Read more</Button>
                    </div>
                )}
            </div>
            
        </div>
    );

}

export default PostList;