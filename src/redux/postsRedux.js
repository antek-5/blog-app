

//selectors
export const getPostById = ({ posts }, postId) => posts.find(post => post.id === postId);
export const getAllPosts = ({ posts }) => posts;

// actions
const createActionName = actionName => `app/posts/${actionName}`;

    /* NEW */
const ADD_POST = createActionName('ADD_POST');


// action creators


const postsReducer = (statePart = [], action) => {
    switch (action.type) {
        default:
            console.log('getAllPosts(statePart)', getAllPosts(statePart));
            console.log('statePart', statePart);
            return statePart;
    };
};

export default postsReducer;