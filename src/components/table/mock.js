const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]

export const columns = list.map((item, index) => {
    return {
        header: `第${index}列`,
        id: `no${index}`,
        isStaticLeft: index < 2,
        isStaticRight: index > list.length - 3,
        isShow: true
    }
})

export const datalist =  new Array(83).fill(0).map((item, index) => {
    var obj = {};
    list.forEach((item_item, item_index) => {
        obj[`no${item_index}`] = `no${item_index}-${index}`
    })
    return obj;
})
