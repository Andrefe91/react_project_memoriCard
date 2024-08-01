export default function reorder(toOrderList) {
    let reordered = [];

    function recursiveOrder(list) {
        if (list.length > 0) {
            let index = Math.floor(Math.random()*(list.length))
            let newArray = list.filter( (_, i) => {return (i !== index)});

            reordered.push(list[index]);
            recursiveOrder(newArray)
        }
    }
    recursiveOrder(toOrderList);

    return reordered;
}

