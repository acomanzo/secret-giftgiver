# Introduction
Want to do a Secret Santa party but want to keep it inclusive? Don't have a way to randomize the givers and receivers?
Well this repository is the repository for you! Simply follow the instructions below and all of your problems will go away. 

# Prerequisites
```brew install node```
### Verify install 
```
node -v
```
```
npm -v
```
### Getting nodemailer
```npm install nodemailer```
```yarn add nodemailer```
### Let the app access your account (assuming you're using gmail)
I'd recommend creating a burner for this application to work.
1. [Disable the unlock captcha.](https://accounts.google.com/b/0/DisplayUnlockCaptcha)
2. [Allow less secure apps to access your account.](https://myaccount.google.com/lesssecureapps?pli=1&rapt=AEjHL4OE7OVU36LvIrKX5evD7WNKe4EZadHTGAbNoQF4KTnG8m9tFMw44aIngkpICkrG5j4xDfrWkhvugTfIv-ZkK292mCxJzA)

# Instructions
1. In `emails.json`, update the emails to reflect you and your compatriots' emails. Make sure the key is an email and value is a name. 
3. In `server.json` replace the value at line 15 with your email. 
4. In `server.json` replace the value at line 16 with your password. 
5. In `server.json` replace the string at line 44 with whatever signature you'd like. 
6. In `server.json` replace the value at line 48 with your email. 
7. On a command line/terminal:
    ```
    node server.js
    ```
    Then, in a web browser, go to localhost:8888 and watch in glory. 