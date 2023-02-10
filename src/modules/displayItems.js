import fetchApi from "./tvMazeApi";
import createItem from "./createItems";
import commentsPopup from "./commentsPopup";
import getAllLikes from "./likesApi";
import { addComments, getComments } from "./commentsApi";

const getItems = async () => {
    const allItems = await fetchApi();
    return allItems;
}

const getLikes = async () => {
    const likes = await getAllLikes()
    return likes;
}


const displayItems = async () => {
    const items = await getItems();
    const itemLikes = await getLikes();

   items.forEach((item, index) => {
   
    createItem(item, itemLikes);

    const commentsSection = document.querySelectorAll('.comment-btn');
    const commentBtns = commentsSection[commentsSection.length - 1]
    commentBtns.addEventListener('click', () => {
        commentsPopup(item);

      /*  const movieComments = async () => {
            const movieComment = await getComments(item.show.id);
            return movieComment;
        }
        
        const totalComments = movieComments();
        console.log(totalComments)*/
        const windowSlide = document.querySelector('.comments-popup');
        windowSlide.classList.add('comments-popup-toggle');

        /*const commentDiv = document.querySelector('.comment-text');
        const newComment = document.createElement('p');
        newComment.textContent = totalComments;*/

        const userNames = document.querySelectorAll('.name-input')
        const userName = userNames[userNames.length - 1]

        const commentTexts = document.querySelectorAll('.comment-input')
        const commentText = commentTexts[commentTexts.length - 1]

        const submitComments = document.querySelectorAll('.comment-button')
        const submitComment = submitComments[submitComments.length - 1]

        submitComment.addEventListener('click', async () => {
            await addComments(item.show.id, userName.value, commentText.value);
        })
    })
   
   })

}

export default displayItems