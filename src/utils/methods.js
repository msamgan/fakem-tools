import menu from "../components/Nav/menu.json"

/**
 * Returns a sorted array of menu items.
 * @returns {Array<MenuItem>}
 */
export const getMenu = () => {
    return menu.sort((a, b) => {
        if (a.label < b.label) {
            return -1
        }
        if (a.label > b.label) {
            return 1
        }
        return 0
    })
}

/**
 * Updates the title of the page to the given title.
 * @param {string} title - the title to set the page to.
 * @returns None
 */
export const updateTitle = (title) => {
    return title + " | Fakem"
}
