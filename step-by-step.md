# Step by step guide
This is a step by step guide to implementing the solution, where each step is iteratively added for each pull request. 

## Using GIT to clone the project
<details>
  <summary>:hand: Cloning the Project</summary>


<br>First we need to open up a terminal, then navigate to where we want to store the project. In this example, we'll store it in the Documents folder. 

<details>
  <summary>:pushpin:Windows</summary>

  Open up the file explorer and navigate to where you want to store the project. On the top of the file explorer, you'll see a path such as `C:/Users/Username/Documents` Click this with your mouse and copy the text.

  Now, open up a command line window, you can do this by pressing the start button, write in `cmd` and press enter when the search is finished.

  When the command line window is open, write `cd "C:/Users/Username/Documents"` The path can be pasted in using `Ctrl-V` assuming you copied it earlier. 
  
</details>

<details>
  <summary>:pushpin:MacOS</summary>


First, open up a terminal, you can do this by using Spotlight, which is the magnifying glass in the top right corner of your screen, write in `terminal` and press enter when the search is finished.

  When the terminal is open, navigate to a suitable place to clone the repo, such as in the `Documents` folder: `cd ~/Documents`

</details>

Now we want to clone the project using git. This can be done using the `git clone` command with a URL to the git repository. In GitHub this can be found by pressing the green `Code` button on the repository page, and it should show the link in the popup box. We'll include it in the command here you simplify things.

Use the following command 

```
git clone https://github.com/Markusdreyer/react-workshop.git
```
</details>


## Running the project
<details>
  <summary>:runner: Running the Project</summary><br>


  First off, we want to start up the project. This allows us to immediately see changes and updates in the web browser as we write our code.

  We should still have the terminal or command line window open. Navigate into the project folder by running the following command:

  ```
  cd react-workshop
  ```

  The first command you want to run is `npm install`. This will install all dependencies for the project. When it is finished, you can run the `npm start`-command, which will start the project and open up a web browser.


  When the app is running, it will detect updates in the code when files are saved and update the web page immediately. 

</details>


## Step 1 - A simple button and an empty function
<details>
  <summary>:wrench: Getting started</summary><br>


  In this project we'll be using a component library named [Material-UI](https://mui.com/). It provides us with ready-made components, such as buttons, text fields and much more. There are many such libraries available, and there's usually no need to re-invent the wheel and create buttons and other components entirely from scratch. 

  The first step will be to add a simple button with the label "Get Recipe". This needs to be placed within the `return` statement in the `App.tsx`-file. A button can be added using the following.


  ```js
  <Button>MyLabel</Button>
  ```
  

  The next step is to add a function that is called whenever the button is clicked. 
  
  A function is coded like this, but unlike the Button, it should be placed above the return statement. Let's give our function a descriptive name like `getRecipe`:


  ```ts
  const getRecipe = () => {
      console.log("Hello world");
    }
  ```

  Now, we want to combine the two and make the button call the function when it's clicked. The button component has an onClick parameter, see if you can find out how to use this.

  _Note: The button can be stylized in many ways. Take a look at the documentation here for an overview: https://mui.com/material-ui/react-button/_

  <details>
    <summary>:sparkles:Show solution:sparkles:</summary>

  ```ts
    import Button from '@mui/material/Button';

    function App() {

        const getRecipe = () => {
                console.log("Hello world")
            }

        return (
            <Button onClick={() => getRecipe()}>Get Recipe</Button>
        );
    }

    export default App;
  ```
  </details>

  Now you might be wondering what the console is. The console is a debugging tool that provides a way to view messages, inspect values, and run JavaScript code directly in a web browser or in other JavaScript environments such as Node.js.

  In web development, the console is usually accessed using the JavaScript console object, which is built into the browser's developer tools. You can open the console in most modern browsers by pressing `F12` or by right-clicking on a web page and selecting `Inspect Element`. The console appears as a separate panel within the developer tools.

  Once the console is open, you can use it to view output from your JavaScript code, check the values of variables, and run code directly in the console. This is useful for testing and debugging your code, as well as for exploring the behavior of JavaScript and the web platform.
  Try using it now to see what happens when you click the button on your website.

</details>
