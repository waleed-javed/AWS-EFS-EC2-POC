# Save Data to AWS EFS Mounted on AWS EC2 instance Using Node.js Interface 

This repository is intended to help you deploy a basic Node.js app with a EFS filesystem. The Node.js app will serve out static content (index.html, CSS, client-side JavaScript) which point to a Node.js endpoints from which users can upload their file to EFS.  

<!-- [Watch the video tutorial](http://www.youtube.com/watch?v=7vf210p2tJg)    -->
<!-- [![Create an AWS EC2 Instance](https://www.aaronwht.com/images/videos/aws-ec2-node-mongo.jpg)](http://www.youtube.com/watch?v=7vf210p2tJg)   -->

> Pre-Req:

you will be required to have a AWS account.
You will need to setup an EFS file system

> Go through:

Link your EFS to EC2 by configuring your EC2 instance with the same vpc subnet as that of EFS.
Your EFS file system will now be accessible from the EC2.

> The thing is to follow these commands:

### Commands:  

Update permissions on your `.pem` file:  
`sudo chmod 400 YOUR_FILE_NAME.PEM`  

Install Node Version Manager:  
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash` 

Install Node:  
`nvm install node` 


Create redirect from port 80 to 8000:  
(For this, make you add a inbound rule of Port 80 in your Network & Security tab of EC2 console)
`sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8000`  
<!-- 
`cd /etc/yum.repos.d` 
`sudo touch mongo-org-5.0.repo`  


```
[mongodb-org-5.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/amazon/2/mongodb-org/5.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-5.0.asc
```  

Install MongoDB:  
`sudo yum install -y mongodb-org` 

Make MongoDB directories:  
```
cd /  
sudo mkdir data 
sudo mkdir db  
``` -->

Navigate back to the home directory:  
`cd /home/ec2-user` 
<!-- 
Start Mongo Service:  
`sudo service mongod start` 

Use MongoDB:  
`mongo`  
`use mern`  

Create database owner:  
`db.createUser({ user: "my_user", pwd: "my_pwd", roles: ["dbOwner"] })`  

Create database documents:  
```
db.members.insert({ firstName: "Bill", lastName: "Smith" })
db.members.insert({ firstName: "Bob", lastName: "Smith" })
```  

Install `mongoose` and `express`  
`npm install mongoose express` -->

Install PM globally:  
`npm install pm2 -g` 

Run the app:  
`pm2 start server.js` 

> Voila!
> And now your server will keep running even when you're logged out!