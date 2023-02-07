# Step by step guide
This is a step by step guide to implementing the solution, where each step is iteratively added for each pull request. 

## Using GIT to clone the project
<details>
  <summary>:hand: Cloning the Project</summary>


<br>First we need to open up a terminal, then navigate to where we want to store the project. In this example, we'll store it in the Documents folder. 

<details>
  <summary>:pushpin:Windows</summary>

  First open up the file explorer and navigate to where you want to store the project. On the top of the file explorer, you'll see a path such as `C:/Users/Username/Documents` Click this with your mouse and copy the text.

  Now, open up a command line window, you can do this by pressing the start button, write in `cmd` and press enter when the search is finished.

  When the command line window is open, write `cd "C:/Users/Username/Documents"` The path can be pasted in using `Ctrl-V` assuming you copied it earlier. 
  
</details>

<details>
  <summary>:pushpin:MacOS</summary>


First, open up a terminal, you can do this by using Spotlight, which is the magnifying glass on the top right corner of your screen, write in `terminal` and press enter when the search is finished.

  When the terminal is open, write `cd ~/Documents` 

</details>

Now we want to clone the project using git. This can be done using the `git clone` command with a url to the git repository. In github this can be found by pressing the green `Code` button on the repository page, and it should show the link in the popup box. We'll include it in the command here you simplify things.

Use the following command 

```
git clone https://github.com/Markusdreyer/react-workshop.git
```
</details>


## Running the project
<details>
  <summary>:runner: Running the Project</summary><br>


  First off, we want to start up the project, this allows us to immediately see changes and updates in the web browser as we write out code.

  Now we should still have the terminal or command line window open. So, we need to navigate into the project folder. This can be done by writing

  ```
  cd react-workshop
  ```

  Now the first command you want to run is `npm install` this will install all dependencies for the project, when it is finished, you can write in `npm start`, this will start the project, and open up the web browser.

  Now with the web-app running, it will update as soon as you save file after having written new code, this is done by pressing `CTRL-S` for windows pcs or `Command-S` for macs.

</details>


## Step 1 - A simple button and an empty function
<details>
  <summary>:wrench: Getting started</summary><br>


  In this project we'll be using a component library named Material-UI, it provides us with ready made components, such as buttons, text fields and much much more. There are many such libaries available, and there's usually no need to re-invent the wheel and create buttons and other components entirely from scratch. So, with that out of the way, we'll move onto the first step.

  The first step is going to be to just add a simple button with the label "Get Recipe". This needs to be placed within the `return` statement in the `App.tsx`-file. A button can be added using the following.


  ```js
  <Button>MyLabel</Button>
  ```
  

  The next step is to add an empty function. A function is coded like this, but unlike the Button, it should be placed outside the return statement. Lets name the function getRecipe so it is clear what it is supposed to do.


  ```ts
  const myFunction = () => {
      console.log("Hello world");
    }
  ```

  Now, we want to combine the two, and make the button call/use the function when it is clicked. And this button component has an onClick parameter, see if you can find out how to use this.

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

## Step 2 - Add a header and center the components
<details>
  <summary>:wrench: Adding more components</summary><br>


  The first step is going to be to just add a simple button with the label "Get Recipe". This needs to be placed within the `return` statement in the `App.tsx`-file. A button can be added using the following.


  ```js
  <Button>MyLabel</Button>
  ```
  

  The next step is to add an empty function. A function is coded like this, but unlike the Button, it should be placed outside the return statement. Lets name the function getRecipe so it is clear what it is supposed to do.


  ```ts
  const myFunction = () => {
      console.log("Hello world");
    }
  ```

  Now, we want to combine the two, and make the button call/use the function when it is clicked. And this button component has an onClick parameter, see if you can find out how to use this.

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

</details>