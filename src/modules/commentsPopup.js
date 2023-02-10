import displayItems from "./displayItems";
import { getComments } from "./commentsApi";

const commentsPopup = (movieDetails) => {
    /*const movieComments = async () => {
        const movieComment = await getComments(movieDetails.show.id);
        return movieComment;
    }*/
//    const totalComments = movieComments();
//    console.log(totalComments)
    const popupWindow = document.querySelector('.comments-popup');
    const window = document.createElement('div');
    window.classList.add('popup-window');
    window.innerHTML = `
        <div class="popup-image">
            <img src=${movieDetails.show.image.medium} alt="" class="movie-pop-image">
            <span><i class="fa-solid fa-xmark remove-btn"></i></span>
        </div>

        <div class="popup-details">
            <p class="movieId">${movieDetails.show.id}</p>
            <h1 class="popup-title">${movieDetails.show.name}</h1>
            <ul class="popup-list">
                <li>Fuel: titanium</li>
                <li>Length: 100,000</li>
                <li>Weight: 400</li>
                <li>Power: 100,000,000</li>
            </ul>
        </div>

        <div class="comments-section">
            <div class="all-comments">
                <h3>Comments (2)</h3>
                <div class="comment-text">
                    
                </div>
            </div>
            <div class="add-comment">
                <h3>Add a comment</h3>
                <form action="" class="comment-form">
                    <input type="text" placeholder="Your name" class="name-input">
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your insights" class="comment-input"></textarea>
                    <button type="button" class="comment-button">Comment</button>
                </form>
            </div>
        </div>
    `;

    popupWindow.appendChild(window);

    const removeButton = document.querySelector('.remove-btn');
    removeButton.addEventListener('click', () => {
        popupWindow.classList.remove('comments-popup-toggle');
        location.reload()
    })

    const commentButton = document.querySelector('.comment-button')
    const movieId = commentButton.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.textContent;

        const movieComments = async () => {
            const movieComment = await getComments(movieId);
            return movieComment;
        }
        
        (async () => {
            const receivedId = await movieComments()
            const commentText = document.querySelector('.comment-text')
            const allComments = JSON.parse(receivedId)
            console.log(allComments)
            allComments.forEach((comment) => {
                const newDisplayComment = document.createElement('p');
                newDisplayComment.innerHTML = `${comment.creation_date} ${comment.username}: ${comment.comment}`
                commentText.appendChild(newDisplayComment);
            })
        })()

    
}

export default commentsPopup