import { useDispatch, useSelector } from "react-redux";
import { deletePost, getPostById } from "../../../redux/postsRedux";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import styles from "./Post.module.scss";
import { Navigate } from 'react-router-dom';
import { Modal } from "bootstrap";
import { useState } from "react";

const Post = () => {

    const { id } = useParams();
    const post = useSelector(state => getPostById(state, id));

    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const handleShow  = () => setShow(true);
    const handleClose = () => setShow(false);

    const removePostClick = () => {
        dispatch(deletePost(id));
        handleClose();
    }

    

    console.log('id', id);
    console.log('post', post);

    if(!post) return <Navigate to="/" />

    return(
        <div className={styles.postContainer}>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="primary" onClick={removePostClick}>delete</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
            <div className={styles.postHeader}>
                <h3>{post.title}</h3>
                <div className={styles.postButtonsContainer}>
                    <Button className={styles.buttonBS} variant="outline-secondary" href={"/post/edit/" + post.id}>edit</Button>
                    <Button variant="outline-danger" className={styles.buttonBS} onClick={handleShow}>delete</Button>
                </div>
            </div>
            <div className={styles.postData}>
                <h4><span className={styles.bolder}>Author: </span>{post.author}</h4>
                <h4><span className={styles.bolder}>Published: </span>{post.publishedDate}</h4>
            </div>
            <div className={styles.postContent}>
                <p>{post.content}</p>
            </div>

                        
                        
        </div>
    );

}

export default Post;