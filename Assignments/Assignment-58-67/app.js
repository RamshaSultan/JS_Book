// i. Get element of id “main-content” and assign them in a variable.

var mainContent = document.getElementById("main-content");


// ii. Display all child elements of “main-content” element.

document.write(mainContent.childNodes);


// iii. Get all elements of class “render” and show their innerHTML in browser.

var renderElements = document.getElementsByClassName("render");
for (var i = 0; i < renderElements.length; i++) {
 document.write(renderElements[i].innerHTML);
}

// iv. Fill input value whose element id first-name using javascript.

document.getElementById("first-name").value = "John";


// v. Repeat part iv for id ”last-name” and “email”

document.getElementById("last-name").value = "Doe";
document.getElementById("email").value = "johndoe@example.com"

// i. What is node type of element having id “form-content”.
document.write(document.getElementById("form-content").nodeType);

// Output: 1 (Element)

// ii. Show node type of element having id “lastName” and its child node.

var lastName = document.getElementById("lastName");
document.write(lastName.nodeType);
document.write(lastName.childNodes[0].nodeType);

// Output: 1 (Element), 3 (Text)

// iii. Update child node of element having id “lastName”.

var lastName = document.getElementById("lastName");
lastName.childNodes[0].nodeValue = "Smith";


// iv. Get First and last child of id “main-content”.

var mainContent = document.getElementById("main-content");
document.write(mainContent.firstChild);
document.write(mainContent.lastChild);


// v. Get next and previous siblings of id “lastName”.

var lastName = document.getElementById("lastName");
document.write(lastName.nextSibling);
document.write(lastName.previousSibling);


// vi. Get parent node and node type of element having id “email”

var email = document.getElementById("email");
document.write(email.parentNode);
document.write(email.nodeType);

// Output: Element, 1 (Element)



