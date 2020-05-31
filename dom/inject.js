
const inject = document.querySelector('#inject');

//Adding first h1
const h1 = document.createElement('h1');
const title = "HTML Practice Exercise TEKcamp.";
h1.textContent = title;
h1.style.fontStyle = "italic";
h1.style.textAlign = "center";
inject.appendChild(h1);


const h2 = document.createElement('h2');
h2.style.textAlign = "center";
const a = document.createElement('a');
const link = document.createTextNode("TEKsystems \"TEKcamp\"");
a.href = "https://teksystems.tahoe.appsembler.com/";

a.appendChild(link);
h2.appendChild(a);
inject.appendChild(h2);

//Adding break line
const hr=document.createElement('hr');
hr.nodeValue="/hr";
inject.appendChild(hr);

//Adding the para
const para = document.createElement('p');
const span=document.createElement('span');
const span1=document.createElement('span')
span.textContent="HTML";
span.style.fontStyle="italic";
para.textContent="I love ";
span1.textContent=" for the following reasons: ";
para.appendChild(span);
para.appendChild(span1);
inject.appendChild(para);

//Adding the ordered list
const ol = document.createElement('ol');
inject.appendChild(ol);

const li = document.createElement('li');
li.textContent="I learned it quickly.";
ol.appendChild(li);

const li1 = document.createElement('li');
li1.textContent="I can make web pages using code";
ol.appendChild(li1);

const li2 = document.createElement('li');
li2.textContent="It’s fun.";
ol.appendChild(li2);

//Adding horizontal rule
const hr1=document.createElement('hr');
hr1.nodeValue="/hr";
inject.appendChild(hr1);

//Adding para with email
const para1 = document.createElement('p');
para1.textContent="My instructor’s email address is: ";
const a1 = document.createElement('a');
const link1 = document.createTextNode(" ayunas@teksystems.com");
a1.title = "ayunas@teksystems.com";
a1.href = "mailto:ayunas@teksystems.com";
para1.appendChild(a1);
a1.appendChild(link1);
inject.appendChild(para1);

const heading = document.createElement('h1');
heading.textContent = "Have a great day!";
inject.appendChild(heading);

const text = document.createTextNode('I really look forward to learning how to code!  Have a great day.  -[Team \"Git\'er Done\"]');
inject.appendChild(text);