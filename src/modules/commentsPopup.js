const commentsPopup = (movieDetails) => {
    const popupWindow = document.querySelector('.comments-popup');
    const window = document.createElement('div');
    window.classList.add('popup-window');
    window.innerHTML = `
        <div class="popup-image">
            <img src=${movieDetails.show.image.medium} alt="" class="movie-pop-image">
            <span><i class="fa-solid fa-xmark remove-btn"></i></span>
        </div>

        <div class="popup-details">
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
                    <p>03/12/2021 Alex: I'd love to buy it</p>
                    <p>11/12/2021 Mia: I love it</p>
                </div>
            </div>
            <div class="add-comment">
                <h3>Add a comment</h3>
                <form action="" class="comment-form">
                    <input type="text" placeholder="Your name" class="name-input">
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your insights" class="comment-input"></textarea>
                    <button type="button" class="comment-btn">Comment</button>
                </form>
            </div>
        </div>
    `

    

    popupWindow.appendChild(window)
    const removeButton = document.querySelector('.remove-btn');
    removeButton.addEventListener('click', () => {
        popupWindow.classList.remove('comments-popup-toggle');
    })
}

export default commentsPopup