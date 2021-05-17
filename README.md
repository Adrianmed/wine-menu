# Wine Menu
An Algolia demo for a wine menu. <br><br>In this website, a user will be able to search through a large wine menu. The search bar compares the users' input against the Name, Domain, and Type of wines available. The price and image of the wine are provided to the user in a real-time search result grid. This application is intended for desktop only.
<br><br>
This project was implemented with VueJS and VUE InstantSearch. I was impressed by the amount of documentation and examples for implementing Algolia. I uploaded the wine JSON database from the Solutions Hiring Assesment Github Repo into the Algolia dashboard to create the Index. I ranked the results to display based on the Quality attribute of the Wines. It is clear that the search results are extremely configurable using the Algolia dashboard, and can be optimized for large complex datasets.
<br><br>
# Customer Questions
1. __*I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:
   Records/Indexing*__
   <br><br>
   I'm happy to help. A Record represents a unique object in a assortment of data. For example, a record can represent a Wine with multiple attributes, like Year, Type, etc. If you're familiar with Javascript, you can think of a record as an Object within an Array. If you're familiar with MongoDB you can think of a record as a Document in a Collection.
   <br><br>
   Indexing is how a computer references a record in a database. You can visualize it as the address to your record. There are two basic types of indexes, Ordered Indexes and Hash Indexes. Ordered Indexes search for records in a sorted order, while Hash Indexes are distributed uniformly.
 
2. __*Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.*__
   <br><br>
Thank you for the feedback, I'm sorry the new dashboard has made your experience inconvenient. If you are finding yourself limited by the dashboard's user interface, I would encourage you to try the Algolia CLI. The Algolia CLI allows you to delete multiple indicies at once using a regular expression. See [Delete Indicies Pattern for Algolia CLI](https://www.algolia.com/doc/api-reference/api-methods/delete-index/).
 
3. __*I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?*__
   <br><br>
Implementing Algolia is a straightforward process. You will be able to read detailed documentation outlining the process to integrate Algolia on the [Algolia Documentation portal](https://www.algolia.com/doc/). On a high level, the process involves syncing your database with algolia, and building the UI for your search solution. Syncing your data can be performed programmatically or manually, and the UI can be built by either embedding a ready-made widget, or hooking into the Algolia endpoint with your existing UI. Your specific implementation will vary depending on the architecture of your website, however the Algolia documentation page provides a multitude of examples with code and straightforward instructions.
 
<br><br>
# Development Notes
## Project setup
```
npm install
```
 
### Compiles and hot-reloads for development
```
npm run serve
```
 
 
 

