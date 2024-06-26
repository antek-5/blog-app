

//selectors
export const getAllPosts = ({ posts }) => posts;

// actions
const createActionName = actionName => `app/posts/${actionName}`;

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