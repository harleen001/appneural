## AppNeural Frontend Internship Project
### Overview
Welcome to the AppNeural Frontend Internship project! This project showcases a collection of software projects using a clean and responsive design. The primary functionalities include fetching project data from a JSON file, displaying project details, and handling user interactions through a contact form.

### Folder Structure
The project follows a structured approach to organize files:


<code>assets
├── css
│   └── styles.css
├── js
│   └── script.js
└── img
    └── [Project Images]
index.html
projects.json </code>

`assets`: Contains all the assets including CSS, JavaScript, and images.
index.html: The main HTML file that links to the stylesheet and JavaScript.
`projects.json` A JSON file that holds the project data.
Functionality
Project Display
The project data is stored in projects.json in the following format:

<code>json
{
    "title": "PrecisionLib240",
    "description": "C++ MIT Licensed Open Source Freeware Library with versatile functions.",
    "imageUrl": "assets/img/projects/1.png"
}
</code>
When a request is made to fetch the project data, the application retrieves the information and displays it on the webpage. If the data cannot be fetched, an appropriate error message is shown.

###Popup Details
To enhance user experience, clicking on a project name triggers a popup that displays more details about the project. This feature is implemented using simple JavaScript and styled with CSS to ensure a seamless look and feel.

###Contact Form
The contact form includes basic validations to enhance user interaction. It checks if the email contains an "@" symbol and verifies that all input fields are filled. If validation fails, an error message is displayed. Upon successful submission, a relevant success message is generated.

###Getting Started
To run the project locally:

###Clone the repository.
Open index.html in your web browser.
###Prerequisites
No specific prerequisites are needed to view the project. However, ensure you have a modern web browser for the best experience.

### Conclusion
This project serves as an excellent example of combining HTML, CSS, and JavaScript to create an interactive and informative web application. We hope you find it engaging and informative!

Feel free to reach out if you have any questions or need further assistance. Happy coding!