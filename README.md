<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  
</head>
<body>

  <h2>Node Hotel Application</h2>
  <p>
    The Node Hotel application is a Node.js-based system developed using the Express.js framework, with MongoDB as the chosen database. This application manages information related to persons (staff) and menu items. It exposes specific endpoints to handle CRUD (Create, Read, Update, Delete) operations for both persons and menu items.
  </p>

  <h3>Endpoints</h3>

  <h4>Persons</h4>
<ul>
  <li>
    <strong>Add a Person:</strong><br>
    <strong>Endpoint:</strong> POST /person<br>
    <strong>Description:</strong> Adds a person to the system with details such as name, role, etc.
  </li>

  <li>
    <strong>Get All Persons:</strong><br>
    <strong>Endpoint:</strong> GET /person<br>
    <strong>Description:</strong> Retrieves a list of all persons in the system.
  </li>

  <li>
    <strong>Get Persons by Work Type:</strong><br>
    <strong>Endpoint:</strong> GET /person/:workType<br>
    <strong>Description:</strong> Retrieves a list of persons based on their work type (e.g., chef, waiter, manager).
  </li>

  <li>
    <strong>Update a Person:</strong><br>
    <strong>Endpoint:</strong> PUT /person/:id<br>
    <strong>Description:</strong> Updates the details of a specific person identified by their ID.
  </li>

  <li>
    <strong>Delete a Person:</strong><br>
    <strong>Endpoint:</strong> DELETE /person/:id<br>
    <strong>Description:</strong> Deletes a person from the system based on their ID.
  </li>
</ul>

<h4>Menu Items</h4>
<ul>
  <li>
    <strong>Add a Menu Item:</strong><br>
    <strong>Endpoint:</strong> POST /menu<br>
    <strong>Description:</strong> Adds a menu item to the system with details such as name, price, taste, etc.
  </li>

  <li>
    <strong>Get All Menu Items:</strong><br>
    <strong>Endpoint:</strong> GET /menu<br>
    <strong>Description:</strong> Retrieves a list of all menu items in the system.
  </li>

  <li>
    <strong>Get Menu Items by Taste:</strong><br>
    <strong>Endpoint:</strong> GET /menu/:taste<br>
    <strong>Description:</strong> Retrieves a list of menu items based on their taste (e.g., sweet, spicy, sour).
  </li>

  <li>
    <strong>Update a Menu Item:</strong><br>
    <strong>Endpoint:</strong> PUT /menu/:id<br>
    <strong>Description:</strong> Updates the details of a specific menu item identified by its ID.
  </li>

  <li>
    <strong>Delete a Menu Item:</strong><br>
    <strong>Endpoint:</strong> DELETE /menu/:id<br>
    <strong>Description:</strong> Deletes a menu item from the system based on its ID.
  </li>
</ul>

  <p><strong>Fields:</strong></p>
  <ul>
    <li><code>name</code>: String (Person's name)</li>
    <li><code>age</code>: Number (Person's age)</li>
    <li><code>work</code>: Enum (Role in the hotel, such as chef, waiter, manager)</li>
    <li><code>mobile</code>: String (Person's mobile number)</li>
    <li><code>email</code>: String (Person's email address, unique)</li>
    <li><code>address</code>: String (Person's address)</li>
    <li><code>salary</code>: Number (Person's salary)</li>
  </ul>

  <p><strong>Example:</strong></p>
  <pre>
{
  "name": "John Doe",
  "age": 30,
  "work": "waiter",
  "mobile": "123-456-7890",
  "email": "john@example.com",
  "address": "123 Main Street",
  "salary": 30000
}
  </pre>

  <h4>Menu Item</h4>
  <p>The MenuItem data model represents information about menu items available in the hotel.</p>

  <p><strong>Fields:</strong></p>
  <ul>
    <li><code>name</code>: String (Item's name)</li>
    <li><code>price</code>: Number (Item's price)</li>
    <li><code>taste</code>: Enum (Item's taste, such as sweet, spicy, sour)</li>
    <li><code>is_drink</code>: Boolean (Indicates if the item is a drink, default is false)</li>
    <li><code>ingredients</code>: Array of Strings (List of ingredients, default is an empty array)</li>
    <li><code>num_sales</code>: Number (Number of sales for the item, default is 0)</li>
  </ul>

  <p><strong>Example:</strong></p>
  <pre>
{
  "name": "Spicy Chicken Curry",
  "price": 12.99,
  "taste": "spicy",
  "is_drink": false,
  "ingredients": ["chicken", "spices", "vegetables"],
  "num_sales": 50
}
  </pre>

  <h3>Usage</h3>
  <p><strong>Install Dependencies:</strong><br>
  <code>npm install</code></p>

  <p>
    <strong>Technologies:</strong> nodejs, mongodb, mongoose, expressjs, mern, mongodb-database, nodejs-server, mern-project
  </p>

</body>
</html>
