const createProductIphone = document.createElement('div');
document.body.append(createProductIphone);

const createHead = '<h1>Iphone 12</h1>';
createProductIphone.innerHTML = createHead;


const createProductApple = document.createElement('div');
document.body.append(createProductApple);

const createHead2 = '<h3>Apple</h3>';
createProductApple.innerHTML = createHead2;


const propertyIphone = ["Best camera", "Fast memory", "Apple A12 Processor"];
const showList = (arr) => {
    const list = document.createElement('ul');

    arr.forEach((title) => {
        const listTitle = document.createElement('li');
        listTitle.innerText = title;
        list.append(listTitle);
    })

    console.dir(list);
    document.body.append(list)
}
showList(propertyIphone)
  
 

    const createProductGalaxy = document.createElement('div');
    document.body.append(createProductGalaxy);

    const createHeader = '<h1>Galaxy S20 Ultra</h1>';
    createProductGalaxy.innerHTML = createHeader;


    const createProductSamsung = document.createElement('div');
    document.body.append(createProductSamsung);

    const createHeader2 = '<h3>Samsung</h3>';
    createProductSamsung.innerHTML = createHeader2;

    const propertySamsung = ["120 hz screen", "Water resistance"];
    const showListSam = (arr) => {
    const listSam = document.createElement('ul');

    arr.forEach((title) => {
        const listSamTitle = document.createElement('li');
        listSamTitle.innerText = title;
        list.append(listSamTitle);
    })

    console.dir(listSam);
    document.body.append(listSam)
}
showList(propertySamsung)
     

    const createProductMI9 = document.createElement('div');
    document.body.append(createProductMI9);

    const createHeadMI = '<h1>MI 9</h1>';
    createProductMI9.innerHTML = createHeadMI;


    const createProductXiaomi = document.createElement('div');
    document.body.append(createProductXiaomi);

    const createHeadXi = '<h3>Xiaomi</h3>';
    createProductXiaomi.innerHTML = createHeadXi;

    const propertyXiaomi = ["Best price", "Pay less - get more!"];
    const showListXi = (arr) => {
    const listXi = document.createElement('ul');

    arr.forEach((title) => {
        const listXiTitle = document.createElement('li');
        listXiTitle.innerText = title;
        list.append(listXiTitle);
    })

    console.dir(listXi);
    document.body.append(listXi)
}
showList(propertyXiaomi)


//


