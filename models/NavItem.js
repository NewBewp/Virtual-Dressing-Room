
class NavItem {
    constructor(_tabName, _showName, _type) {
        this.tabName = _tabName,
            this.showName = _showName,
            this.type = _type
    }

    renderNavItem(arrNavItem) {
        let contentNavItem = '';
        console.log('arrNavItem:', arrNavItem);
        for (let item of arrNavItem) {
            contentNavItem += `
            <li class="nav-item">
                <a class="nav-link" id="${item.tabName}" data-toggle="pill" href="#${item.type}">${item.showName}</a>
            </li> `
        }
    }
}
export default NavItem;