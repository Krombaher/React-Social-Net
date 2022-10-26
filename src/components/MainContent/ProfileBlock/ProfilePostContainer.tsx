import {ProfilePost} from "./ProfilePost";
import {StoreContext} from "../../../StoreContext";
import {
    AddPostActionCreator,
    RemovePostsActionCreator,
    UpdateNewPostTextActionCreator
} from "../../../redux/ProfilepageReducer";

export const ProfilePostContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {

                const addPostHandler = () => {
                    return (
                        store.dispatch(AddPostActionCreator())
                    )
                }
                const updateNewPostTextHandler = (message: string) => {
                    return (
                        store.dispatch(UpdateNewPostTextActionCreator(message))
                    )
                }
                const removePostHandler = (id: string) => {
                    return (
                        store.dispatch(RemovePostsActionCreator(id))
                    )
                }

                return (
                    <ProfilePost
                        newPostText={store.getState().profilePage.newPostText}
                        posts={store.getState().profilePage.posts}
                        addPost={addPostHandler}
                        updateMessage={updateNewPostTextHandler}
                        removePost={removePostHandler}
                    />
                )
            }}
        </StoreContext.Consumer>
    )
}
