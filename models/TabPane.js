

class TabName {
    constructor(_id, _type, _name, _desc, _imgSrc_jpg, _imgSrc_png) {
        this.id = _id,
        this.type = _type,
        this.name = _name,
        this.desc = _desc,
        this.imgSrc_jpg = _imgSrc_jpg,
        this.imgSrc_png = _imgSrc_png
    }

    renderTabName(arrTabName) {
        let contentTabName = '';
        for (let item of arrTabName) {
            contentTabName += `
            <div class="tab-pane fade" id="${item.type}">
                ${item.id}            
                ${item.type}            
                ${item.name}            
                ${item.desc}            
                ${item.imgSrc_jpg}            
            </div>
        `
        }
    }

}
export default TabName;