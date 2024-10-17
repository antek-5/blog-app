import { useDispatch, useSelector } from "react-redux";
import { deletePost, getPostById } from "../../../redux/postsRedux";
import { useParams, Navigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import styles from "./Post.module.scss";
import { useState } from "react";

const Post = () => {
    const { id } = useParams();
    const post = useSelector(state => getPostById(state, id));
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const removePostClick = () => {
        dispatch(deletePost(id));
        handleClose();
    };

    if (!post) return <Navigate to="/" />;

    return (
        <div className={styles.postContainer}>
            <div className={styles.postHeader}>
                <h3>{post.title}</h3>
                <div className={styles.postButtonsContainer}>
                    <Button className={styles.buttonBS} variant="outline-secondary" href={`/post/edit/${post.id}`}>Edit</Button>
                    <Button variant="outline-danger" className={styles.buttonBS} onClick={handleShow}>Delete</Button>
                </div>
            </div>
            <div className={styles.postData}>
                <h4><span className={styles.bolder}>Author: </span>{post.author}</h4>
                <h4><span className={styles.bolder}>Published: </span>{post.publishedDate}</h4>
            </div>
            <div className={styles.postContent}>
                <p>{post.content}</p>
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="danger" onClick={removePostClick}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Post;
