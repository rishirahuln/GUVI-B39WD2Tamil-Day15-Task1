let main=document.createElement("div");
main.setAttribute("class","main");

let descRow=document.createElement("div");
descRow.setAttribute("class","row");
descRow.setAttribute("id","desc");

let description=tagAttrCont("p","id","description","This is a form submission page");

let row=document.createElement("div");
row.setAttribute("class","row");

let col=document.createElement("div");
col.setAttribute("class","col-lg-3");

let h1=tagAttrCont("h1","id","title","Form Submission:");

let form=document.createElement("form");
form.setAttribute("id","form");

let div=document.createElement("div");
div.setAttribute("class","form-group");

let lb1=tagAttrCont("label","for","first-name","First Name:");
let inp1=input("input","type","text","class","form-control","id","first-name","placeholder","First Name","required","");

let lb2=tagAttrCont("label","for","last-name","Last Name:");
let inp2=input("input","type","text","class","form-control","id","last-name","placeholder","Last Name","required","");

let lb3=tagAttrCont("label","for","address","Address:");
let inp3=input4attr("textarea","class","form-control","id","address","placeholder","Address","required","");

let lb4=tagAttrCont("label","for","pincode","PIN Code:");
let inp4=input("input","type","text","class","form-control","id","pincode","placeholder","PIN Code","required","");

let para1=tagAttrCont("p","class","para","Gender:");
let inp5=input4attr("input","type","radio","id","male","name","gender","value","Male");
let lb5=tagAttrCont("label","for","male","Male");
let inp6=input4attr("input","type","radio","id","female","name","gender","value","Female");
let lb6=tagAttrCont("label","for","female","Female");

let para2=tagAttrCont("p","class","para","Choice of Food: <span>(must choose at least 2 out of 5 options)</span>");
let inp7=input4attr("input","type","checkbox","id","ni","class","food","value","North Indian");
let lb7=tagAttrCont("label","for","ni","North Indian");
let br12=linebr("br");
let inp8=input4attr("input","type","checkbox","id","si","class","food","value","South Indian");
let lb8=tagAttrCont("label","for","si","South Indian");
let br13=linebr("br");
let inp9=input4attr("input","type","checkbox","id","cn","class","food","value","Chinese");
let lb9=tagAttrCont("label","for","cn","Chinese");
let br14=linebr("br");
let inp10=input4attr("input","type","checkbox","id","jp","class","food","value","Japanese");
let lb10=tagAttrCont("label","for","jp","Japanese");
let br15=linebr("br");
let inp11=input4attr("input","type","checkbox","id","sf","class","food","value","Sea Food");
let lb11=tagAttrCont("label","for","sf","Sea Food");
let br16=linebr("br");

let lb12=tagAttrCont("label","for","state","State:");
let inp12=input("input","type","text","class","form-control","id","state","placeholder","State","required","");

let lb13=tagAttrCont("label","for","country","Country:");
let inp13=input("input","type","text","class","form-control","id","country","placeholder","Country","required","");

let inp14=document.createElement("button");
inp14.setAttribute("type","button");
inp14.setAttribute("id","submit");
inp14.classList.add("form-control","btn","btn-primary");
inp14.innerHTML="Submit";
inp14.addEventListener("click",displayField);

let col1=document.createElement("div");
col1.setAttribute("class","col-lg-8");

let h1a=document.createElement("h1");
h1a.innerHTML="Temporary Database:";

let table=document.createElement("table");
table.classList.add("table","table-striped");

let thead=document.createElement("thead");
thead.setAttribute("class","thead-dark");
let tr=document.createElement("tr");
let th1=tagNcont("th","First Name");
let th2=tagNcont("th","Last Name");
let th3=tagNcont("th","Address");
let th4=tagNcont("th","PIN code");
let th5=tagNcont("th","Gender");
let th6=tagNcont("th","Food");
let th7=tagNcont("th","State");
let th8=tagNcont("th","Country");

let tbody=document.createElement("tbody");

div.append(lb1,inp1,lb2,inp2,lb3,inp3,lb4,inp4);
div.append(para1,inp5,lb5,inp6,lb6);
div.append(para2,inp7,lb7,br12,inp8,lb8,br13,inp9,lb9,br14,inp10,lb10,br15,inp11,lb11,br16);
div.append(lb12,inp12,lb13,inp13,inp14);
form.append(div);
col.append(h1,form);

tr.append(th1,th2,th3,th4,th5,th6,th7,th8);
thead.append(tr);
table.append(thead,tbody);
col1.append(h1a,table);

row.append(col,col1);
descRow.append(description);
main.append(descRow,row);
document.body.append(main);

function tagAttrCont(tagname,attrname,attrvalue,content){
    let ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}

function linebr(tagname){
    let ele1=document.createElement(tagname);
    return ele1;
}

function input(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3,attrname4,attrvalue4){
    let ele2=document.createElement(tagname);
    ele2.setAttribute(attrname,attrvalue);
    ele2.setAttribute(attrname1,attrvalue1);
    ele2.setAttribute(attrname2,attrvalue2);
    ele2.setAttribute(attrname3,attrvalue3);
    ele2.setAttribute(attrname4,attrvalue4);
    return ele2;
}

function input4attr(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3){
    let ele3=document.createElement(tagname);
    ele3.setAttribute(attrname,attrvalue);
    ele3.setAttribute(attrname1,attrvalue1);
    ele3.setAttribute(attrname2,attrvalue2);
    ele3.setAttribute(attrname3,attrvalue3);
    return ele3;
}

function tagNcont(tagname,content){
    let ele4=document.createElement(tagname);
    ele4.innerHTML=content;
    return ele4;
}

function displayField(){
    let fname=document.getElementById("first-name").value;
    let lname=document.getElementById("last-name").value;
    let address=document.getElementById("address").value;
    let pin=document.getElementById("pincode").value;
    let gender=document.querySelector("input[name=gender]:checked").value;

    let food=document.getElementsByClassName("food");
    let selectedFood=[];
    let selectedNo=0;
    for(i=0;i<food.length;i++){
        if(food[i].checked){
            selectedFood.push(food[i].value);
            selectedNo++;
        }
    }
    if(selectedNo<2){
        food=alert("Choose at least 2 out of 5 options in Food");
    } else {
        food=selectedFood.join(", ");
    }

    let state=document.getElementById("state").value;
    let country=document.getElementById("country").value;

    let tr1=document.createElement("tr");
    let td=document.createElement("td");
    td.innerHTML=`${fname}`;
    let td1=document.createElement("td");
    td1.innerHTML=`${lname}`;
    let td2=document.createElement("td");
    td2.innerHTML=`${address}`;
    let td3=document.createElement("td");
    td3.innerHTML=`${pin}`;
    let td4=document.createElement("td");
    td4.innerHTML=`${gender}`;
    let td5=document.createElement("td");
    td5.innerHTML=`${food}`;
    let td6=document.createElement("td");
    td6.innerHTML=`${state}`;
    let td7=document.createElement("td");
    td7.innerHTML=`${country}`;

    tr1.append(td,td1,td2,td3,td4,td5,td6,td7);
    tbody.append(tr1);

    let formField=document.getElementById("form");
    formField.reset();
}