/*Exercise instructions : take the html code from the following codepen 

    <center>
        <h1><i>HTML Practice Exercise TEKcamp.</i></h1>
        <h2><a href="">TEKsystems "TEKcamp"</a></h2>
    </center>
  
    <hr/>
    <p>I love <i>HTML</i> for the following reasons:</p>
    <ol>
       <li>I learned it quickly.</li>
       <li>I can make web pages using code
       <li> It’s fun.</li>
    </ol>
    <hr />
        <p>My instructor’s email address is: <a href="mailto:ayunas@teksystems.com">ayunas@teksystems.com</a>.</p>
    <h1>Have a great day!</h1>  I really look forward to learning how to code!  Have a great day.  
        -[Team "Git'er Done"]
*/

const inject = document.querySelector('#inject');

//Adding first h1
const h1 = document.createElement('h1');
const title = "HTML Practice Exercise TEKcamp.";
h1.textContent = title;
h1.style.fontStyle = "italic";
h1.style.textAlign = "center";
inject.appendChild(h1);

//Adding second h1
const head1 = document.createElement('h1');
const a = document.createElement('a');
const link = document.createTextNode("TEKsystems \"TEKcamp\"");
head1.textAlign ="center";
a.style.textAlign = "center";
a.style.fontStyle = "italic";
link.textAlign="center";
a.href = "https://teksystems.tahoe.appsembler.com/";

head1.appendChild(a);
a.appendChild(link);
inject.appendChild(a);

//Adding break line
const hr=document.createElement('hr');
hr.nodeValue="/hr";
inject.appendChild(hr);

//Adding the para
const para = document.createElement('p');
const str1="HTML";
const str = str1.italics();
para.textContent = "I love " +str +" for the following reasons:";
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

const text = document.createTextNode(' I really look forward to learning how to code!  Have a great day.  -[Team \"Git\'er Done\"]');
inject.appendChild(text);