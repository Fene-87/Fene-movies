const createItem = (movieName, movieLikes) => {
    const displaySection = document.querySelector('.main-section');
    const card = document.createElement('div');
    card.classList.add('movie');
    card.innerHTML = `
      <img src=${movieName.show.image.medium} alt="gotham" class="movie-img">
      <div class="movie-title">
          <p>${movieName.show.name}</p>
          <span><i class="fa-regular fa-heart"></i></span>
          <p class="movie-likes">5 Likes</p>
      </div>
      <button type="button" class="comment-btn">Comment</button>
    `;

    displaySection.appendChild(card);
}

export default createItem