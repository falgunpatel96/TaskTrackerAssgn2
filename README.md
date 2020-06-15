# CSCI 5709 TeskTracker Assignment - 2

    Date Created: 09 June 2020
    Last Modification Date: 14 Jun 2020

## Author

| Name         | Banner ID | Dal Email           |
| -------------| --------- | ------------------- |
| Falgun Patel | B00845029 | falgun.patel@dal.ca |

### Heroku Link:  https://task-nwtracker.herokuapp.com/
### Github Repository Link: https://github.com/falgunpatel96/TaskTrackerAssgn2

## Content created

I have developed five pages (excluding Error page)such as one Landing Page, Two pages from User Profile Management (LogIn page, Register page) , Two feature pages (MyProjects page, Project creation page), and 404-Error page that will appear whenever a user tries to open URL of web-page which is not yet created. 

## How to setup this project on local system

To run this project on a local system you need to follow the bellow steps:

1. Install a stable version of Node.js
2. Install a stable version of Node Package Manager(npm)
3. Clone the GitHub repository from the terminal using command `git clone https://github.com/falgunpatel96/TaskTrackerAssgn2.git`
4. run `npm install` in terminal after moving inside the cloned repository
5. run `npm run start` 
6. open localhost:3000 in browser to see the application

## Navigation in website

I have created five pages. LogIn, SignUp and Landing Page can be accessed through header/navigation bar where as user can access MyProjects and Create Project page once user gets logged in successfully:

1. When user open the url fo web-application, landing page appears having info about the features of "Task Tracker".
   Also, user can click on "Task tracker" icon from navigation bar or footer to get redirected to landing page.
2. User can visit LogIn page by using link provided on navigation bar.
3. User can register for the first time using the link for SignUp page provided on LogIn page. 
4. Once user gets successfully LoggedIn, user is redirected to "MyProject" page having list of all projects.
4. By clicking "create project" button on "MyProject" page, user is redirected to "CreateProject" page where user can create new project after selecting team.
5. If a user enters any wrong path or URL application will lead user to a *404 page*.

### Link of Pages

1. [Landing page](https://task-nwtracker.herokuapp.com/)
2. [LogIn page](https://task-nwtracker.herokuapp.com/login)
3. [SignUp page](https://task-nwtracker.herokuapp.com/register)
4. [My Projects page](https://task-nwtracker.herokuapp.com/myproject)
5. [Create Project page](https://task-nwtracker.herokuapp.com/createproject)
6. [Error-404 page](https://task-nwtracker.herokuapp.com/error)

## Deployment

I have deployed this web application on Heroku. Previously, I used to perform deployment using Heroku GUI by connecting newly created Heroku application to code on my GitHub repository. But I used to face trouble while looking for build errors using Heroku GUI.
So, I have deployed this application using the Heroku CLI by following steps mentioned on [Mark Hall](https://github.com/mars/create-react-app-buildpack)[3].

### Used Frameworks & Library

1. [ReactJS Library](https://reactjs.org/) - JavaScript Library to build interfaces created by Facebook
2. [react-bootstrap](https://reacttraining.com/react-router/web/guides/quick-start) - CSS library rebuilt from bootstrap framework used for making web application responsive and attractive
3. [react-fontawesome](https://github.com/FortAwesome/react-fontawesome) - used for icons
4. [react-router-dom](https://react-bootstrap.github.io/) - navigate between different pages of the website


### Tools/Technology used

I have listed all the tools and platform used, from creating to the deployment process:

1. [Visual Studio Code](https://code.visualstudio.com/) - to write and manage code.
2. [Git](https://git-scm.com/) - for version control
3. [Chrome](https://www.google.com/chrome/) & [Egde](https://www.microsoft.com/en-us/edge) for debugging and testing this web application
4. [Github](https://github.com/) - to store code in repository
5. [Heroku](https://www.heroku.com/) - for deployment of web application


---

### Design Justification

I have used light-dark color combination for wensite because it helps catching the attention of user as well as help user easily find the component they are looking for.
By taking this theory in concern, I have used light blue shade colours for background and used darker colours for components that user may interact with.


### Acknowledgment & Appreciations for sources I used

1. I have visited [freepik](https://www.freepik.com/free-vector/project-management-landing-page_4010917.htm) to explore designs for landing page of Project Management Web applications[1].
2. I have downloaded the four illustrations that I am using on landing page from [Undraw](https://undraw.co/) website. This illustrations look good and this website has saved my time of creating illustrations.
3. I have used some code from Bootstrap[2] documentation and customized it according to my use case. Moreover, I have used [React-Bootstrap](https://react-bootstrap.github.io/) and [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/) library and documentation. 
4. I have used [Font Awesome](https://fontawesome.com/start) for icons of social media websites and icons used on Navigation bar.


---

### References

[1] Freepik, “Graphic Resources for everyone,” Freepik, 19-May-2020. [Online]. 
	Available: https://www.freepik.com/. [Accessed: 12-Jun-2020].
[2]	"Introduction", Getbootstrap.com, 2020. [Online]. 
	Available: https://getbootstrap.com/docs/4.5/getting-started/introduction/. [Accessed: 13- Jun- 2020].
[3] Mars, “mars/create-react-app-buildpack,” GitHub, 28-Feb-2020. [Online]. 
	Available: https://github.com/mars/create-react-app-buildpack. [Accessed: 13-Jun-2020].