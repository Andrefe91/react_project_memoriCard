export function getCache() {
    let saved = localStorage.getItem("pokeCache");

    if (saved) {
        return JSON.parse(localStorage.getItem("pokeCache"))
    } else {
        return false;
    }
}

export function setCache(cache) {
    localStorage.setItem("pokeCache", JSON.stringify(cache));
}
