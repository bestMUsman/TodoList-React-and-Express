
**Live**: https://todolistreactexpress.herokuapp.com/

Welcome to TodoList-React-and-Express!
=====================
![alt text](https://github.com/musmanraoDev/TodoList-React-and-Express/blob/master/TodoList-React-and-Express.png?raw=true)


## What does it do?  
Todo-List made In React and Node.js/Express with CRUD Functionality using RESTFUL API, which means you can create/save, read, edit/update, and delete the items from the list which is connected to the database.

## How to use it?  
 - Visit the website 
 - Type something in the input box, then press 'Enter' or click on the 'Add' Button
 - Item will be added to the list, now you will be able to update or delete the item
 - To update the item from the list Click on the 'Edit' icon
 - Edit the text then press 'Enter' or click on the 'Edit' icon again
 - To 'Delete' an item form the list, just click on the cross icon

## Features connected with Database
 - Add items
 - Edit Items
 - Delete items
 - Cross Out Items
 - Re-Order the position of Items using Drag and Drop

## How does it work? 
 - When user comes to a website, so React makes a fetch request to the server[node.js/express] 
 - Node.js/Express using the SQL query, which uses the MVC Framework, makes a request to the PostgreSQL Database
 - The Data is returned from the database to the server, which then displays the data in the Json format as API
 - The fetch request, which was made from React, gets this Json data and then renders it to the client side in the browser
 - Which allows user to read all the data stored in the database
 - For 'Adding', 'Editing/Updating', and 'Deleting' the fetch request is also made, which is as similar as described above but with different Forms and SQL queries
 - Thus allowing Users to use CRUD[create, read, update, and delete] Functionality
 
## What techs are being used? 
 - React
 - Node.js/Express
 - PostgreSQL
 - Javascript
 - jQuery
 - RESTFUL API
 - CSS 
