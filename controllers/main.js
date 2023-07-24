import { getData } from "../utils/callData.js";

const data = await getData()
const { navPills, tabPanes } = data;

//render Nav
const renderNavItem = () => {
    let contentNavItem = '';
    navPills.forEach((navPillsItem) => {
        // console.log(navPillsItem);
        contentNavItem += `
        <li class="nav-item">
            <a class="nav-link" 
                id="${navPillsItem.tabName}" data-toggle="pill" 
                href="#${navPillsItem.type}">
                ${navPillsItem.showName}</a>
        </li> `
    });
    document.getElementById('nav-pills').innerHTML = contentNavItem

    //click hiển thị các cho mỗi tab
    navPills.forEach((navPillsItem) => {
        const tabNameLink = document.getElementById(navPillsItem.tabName);
        tabNameLink.addEventListener('click', () => {
            showTabPanes(navPillsItem.type)
        })
    })
}
renderNavItem()

//hien thị hình ảnh trong tab-content
const createTabPanes = (tabPane) => {
    const panesElement = document.createElement('div');
    panesElement.classList.add('tab-pane');
    panesElement.id = tabPane.type;
    panesElement.innerHTML = `
        <img 
            src="${tabPane.imgSrc_jpg}" 
            alt="${tabPane.name}" 
            onClick="handleImageClick('${tabPane.id}','${tabPane.type}')">
    `;
    return panesElement;
}

const showTabPanes = (tabType) => {
    const tabContent = document.getElementById('tabPanes');
    tabContent.innerHTML = '';

    //hiển thị theo tabType đã chọn
    const selectTabPanes = tabPanes.filter(tabPanes => tabPanes.type === tabType)

    console.log('selectTabPanes: ', selectTabPanes);

    const panesRow = document.createElement('div')
    panesRow.classList.add('containerTabPanes')

    selectTabPanes.forEach(tabPane => {
        const panesElement = createTabPanes(tabPane);
        panesRow.appendChild(panesElement);
    })

    tabContent.appendChild(panesRow)
}

//hiển thị quần áo lên nhân vật
window.handleImageClick = (imageId,tabType) => {

    console.log('ImageID:', imageId);
    console.log('tabType:', tabType);
    let contentTryOn = '';
    const newImage = document.createElement('img')
    
    // let getSelector;
    // switch ()

};