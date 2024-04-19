let kg = document.getElementById("kg");
let lb = document.getElementById("lb");
let oz = document.getElementById("oz");

let convert_kg = () => {
    let KG = kg.value;
    lb.value = (KG * 2.205).toFixed(2);
    oz.value = (KG * 35.274).toFixed(2); 
};

let convert_lb = () => {
    let LB = lb.value;
    kg.value = (LB / 2.205).toFixed(2);
    oz.value = (LB * 16).toFixed(2);
};

let convert_oz = () => {
    let OZ = oz.value;
    kg.value = (OZ / 35.274).toFixed(2);
    lb.value = (OZ / 16).toFixed(2);
};
kg.addEventListener("input",convert_kg);
lb.addEventListener("input",convert_lb);
oz.addEventListener("input",convert_oz);
window.addEventListener("load",convert_kg);