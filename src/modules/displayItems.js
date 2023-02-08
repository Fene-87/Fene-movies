import fetchApi from "./tvMazeApi";
import createItem from "./createItems";

const getItems = async () => {
    const allItems = await fetchApi();
    return allItems;
}

const displayItems = async () => {
    const items = await getItems();

   items.forEach((item) => {
    createItem(item);
   })
}

export default displayItems