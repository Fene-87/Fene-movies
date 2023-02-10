export const addComments = async (item_id, username, comment) => {
    const addComment = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8HqTDMvM45bfXxsVDsfm/comments', {
        method: 'POST',
        body: JSON.stringify({
            item_id: item_id,
            username: username,
            comment: comment
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const commentText = await addComment.text();
    return commentText
}

export const getComments = async (item_id) => {
    const allComments = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8HqTDMvM45bfXxsVDsfm/comments?item_id=${item_id}`)

    const movieComments = await allComments.text();
    return movieComments;
}