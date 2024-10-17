export const createActionName = (actionName) =>  `app/posts/${actionName}`;//`ACTION_${actionName}`;
const EDIT_POST = createActionName('EDIT_POST');

export const DELETE_POST = 'DELETE_POST';


export const editPost = payload => ({ type: EDIT_POST, payload });

const postsReducer = (statePart = [], action) => {
    switch (action.type) {
        case DELETE_POST:
            return statePart.filter(post => action.payload !== post.id);
        case EDIT_POST:
            return statePart.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post));
        default:
            return statePart;
    }
};

// postsRedux.js ////** */
export const addPost = (post) => ({
    type: 'ADD_POST',
    payload: post,
});

export const getPostById = (id) => ({
    type: 'GET_POST_BY_ID',
    payload: id,
});

export const deletePost = (id) => ({
    type: 'DELETE_POST',
    payload: id,
});

export const getAllPosts = () => ({
    type: 'GET_ALL_POSTS',
});



// //selectors
// export const getAllPosts = ({ posts }) => posts;
// export const getPostById = ({ posts }, Id) => posts.find(post => post.id === Id);

// // actions
// const createActionName = actionName => `app/posts/${actionName}`;
// const DELETE_POST = createActionName('DELETE_POST');

// // action creators
// export const deletePost = payload => ({ type: DELETE_POST, payload});


// const postsReducer = (statePart = [], action) => {
//     switch (action.type) {
//         case DELETE_POST:
//             return statePart.filter(post => action.payload !== post.id);
//         default:
//             console.log('getAllPosts(statePart)', getAllPosts(statePart));
//             console.log('statePart', statePart);
//             return statePart;
//     };
// };

 export default postsReducer;

