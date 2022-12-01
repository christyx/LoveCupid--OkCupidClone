# ![favicon-32x32](https://user-images.githubusercontent.com/98840063/205130192-98d58b81-ff13-428f-a337-18eb61fddf13.png)  LoveCupid

## Live Link : https://lovecupid.onrender.com


LoveCupid is a full-stack application clone of OkCupid, an online dating website where users can browse other users' profiles, like or dislike other users, and create, update and delete their own profiles.


## Built With
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  ![Python](https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue)   ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)    ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)![FLASK](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)![REDUX](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)


## Getting started

1. Clone this repository.

2. Install dependencies in the root directory.

      ```bash
      pipenv install -r requirements.txt
      ```
3. Install NPM packages in the "react-app" directory

      ```bash
      npm install
      ```
4. Create a **.env** file based on the example with proper settings for your development environment.

5. Make sure the SQLite3 database connection URL is in the **.env** file.

6. Get into your pipenv, migrate database, seed database, and run the Flask app.

   ```bash
   pipenv shell
   flask db upgrade
   flask seed all
   flask run
   ```

## MVP feature list
* New account creation, login, and demo login

* User Profiles (CRUD)

* Like and dislike other users (CRUD)

* Messaging

* Personality questions

* Filter other users by age

* Match percentages based on question answers


## Homepage without logging in
![Screenshot 2022-12-01 at 2 32 00 PM](https://user-images.githubusercontent.com/98840063/205173112-8b41c4dd-86c1-44dc-98af-82fe6ff3d14d.png)
