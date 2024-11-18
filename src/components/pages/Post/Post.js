import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostById } from "../../../redux/postsRedux";

import Button from "react-bootstrap/Button";

// import { getAllPosts } from "../../../redux/postsRedux";
// import Button from "react-bootstrap/Button";

const Post = () => {

    //const posts = useSelector(getAllPosts);
    const { postId } = useParams();
    // console.log("postId: ", postId);


    const postData = useSelector(state => getPostById(state, postId));
    // console.log("postData: ", postData);

    return(
        <div>
          <header>
            {/* <h2>{postData.title}</h2> */}
            {/* <Button variant="primary" href={"/post/edit" + post.id}>edit</Button> */}
          </header>
          {/* <div>
            <p>Author: {postData.author}</p>
            <p>Published: {postData.publishedDate}</p>
          </div>
          <div>
            <p>{postData.content}</p>
          </div>  */}
        </div>
    );

}

export default Post;