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
