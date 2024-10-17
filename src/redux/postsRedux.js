

//selectors
export const getAllPosts = ({ posts }) => posts;
export const getPostById = ({ posts }, Id) => posts.find(post => post.id === Id);

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const DELETE_POST = createActionName('DELETE_POST');

// action creators
export const deletePost = payload => ({ type: DELETE_POST, payload});


const postsReducer = (statePart = [], action) => {
    switch (action.type) {
        case DELETE_POST:
            return statePart.filter(post => action.payload !== post.id);
        default:
            console.log('getAllPosts(statePart)', getAllPosts(statePart));
            console.log('statePart', statePart);
            return statePart;
    };
};

export default postsReducer;