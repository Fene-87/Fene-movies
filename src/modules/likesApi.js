const getAllLikes = async () => {
    const getLike = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8HqTDMvM45bfXxsVDsfm/likes')

    const allLikes = await getLike.text();
    return allLikes
}

export default getAllLikes