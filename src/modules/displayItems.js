import fetchApi from "./tvMazeApi";
import createItem from "./createItems";
import commentsPopup from "./commentsPopup";

const getItems = async () => {
    const allItems = await fetchApi();
    return allItems;
}

const displayItems = async () => {
    const items = await getItems();

   items.forEach((item, index) => {
   
    createItem(item);

    const commentsSection = document.querySelectorAll('.comment-btn');
    const commentBtns = commentsSection[commentsSection.length - 1]
    console.log(commentBtns)
    commentBtns.addEventListener('click', () => {
        commentsPopup(item);
        const windowSlide = document.querySelector('.comments-popup');
        windowSlide.classList.add('comments-popup-toggle');
    })
   
   })

}

export default displayItems