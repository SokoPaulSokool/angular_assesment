# angular_assesment
Testing technical skills

# Project management
[Pivotal Tracker]([https://link](https://www.pivotaltracker.com/n/projects/2375729))

# How To Test
  
### Setup mongodb if not installed

- Make sure you have brew installed
- Run ``` brew update```
- Run ``` brew install mongodb``` 
- Run ``` mkdir -p /data/db``` to create the “db” directory where the Mongo data files will live. 
- Run ``` sudo chown -R `id -un` /data/db``` to give the directory the right permissions by running. 
- Run ``` mongod``` in a new terminal.
- Open a new terminal and proceed to test the project.

### Setup mongodb if installed

- Run ``` mongod``` in a new terminal.
- Open a new terminal and proceed to test the project.
 
### Run the project

- Clone the repository ``` git clone https://github.com/SokoPaulSokool/angular_assesment.git```
- Change to project directory
- Run ``` yarn install```
- When its done, make sure ports 8080 and 4200 are not being used
- Then run ``` yarn start ```
- Open your browser and open ``` http://localhost:4200/```
- From there you can sign up, login, create book, edit book, delete book and view your books