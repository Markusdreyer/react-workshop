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
  <summary>:wrench: Adding more components</summary>

  <br>

  <details>
  <summary>:one: Adding the header</summary>

  <br>Now that we have our simple button, we want to add a header, a text at the top of the page, we want to write "`Your Name`'s Magic Cookbok". 
  Components in react can however only return one main parent element. A parent element is an HTML-like element that contains one or more child elements. The child elements are nested within the parent element and are considered to be a part of the parent element.

  For example:

  ```ts
  return (
          <div>
            <p> I am a child of div</p>
            <p> I am another child of div</p>
          </div>
        );

  ```

  In this example, div is the parent element, and the two p elements are child elements. The parent element div contains and wraps around the two child elements.

  Now, you can go ahead and add a parent element which wraps around our existing button.

<details>
    <summary>:sparkles:Show solution:sparkles:</summary>


  ```ts
    return (
        <div>
          <Button onClick={() => getRecipe()}>Get Recipe</Button>
        </div>
      );
  ```
</details>


  The next step is to add the header, usually we could just add some text above the button, or use existing html elements such as `<h1> <h2>` etc. but we want to customize this a bit more and use more of the existing material-ui components. So we're going to use the `<Box>` component

  ```ts
  <Box>This is some text</Box>

  ```
  _Note: The text within the Box can be stylized in many ways. Take a look at the documentation here for an overview: https://mui.com/system/typography/_

  As the `Box`is a material-ui component, it has access to many helpful layout options. And many of these will be helpful later on, so we can go ahead and replace the parent `<div>` element with a `<Box>` component.
  Also, in addition to adding the `YourName's Magic Cookbook`, try setting the font size of the text within the box to 26 pixels.

  ```ts
  Hint: You can access the style properties of the box component using sx, e.g.

  <Box sx={{someProperty: propertyValue}}>
  ```

<details>
    <summary>:sparkles:Show solution:sparkles:</summary>


  ```ts
    return (
      <Box sx={{fontSize: 26}}>
        YourName's Magic Cookbook
        <Button onClick={() => getRecipe()}>Get Recipe</Button>
      </Box>
      );
  ```
</details>
  

  </details>

  <details>
  <summary>:two: Centering things</summary>

  <br> So now we have some properly sized text! Next up we usually don't want everything to be stuck in the upper left corner of the screen. So lets go ahead and get things more centered. There are many ways to do this, but as we already have a parent `<Box>` element, we can go ahead and use this. 

  _Note: The layout within the Box can be stylized in many ways. Take a look at the documentation here for an overview: https://mui.com/material-ui/react-box/_

  So our goal is to center the text and button so they appear in the middle of the screen. 

  ```ts
  Hint: You can use the textAlign and justifyContent properties. 
  ```


<details>
    <summary>:sparkles:Show solution:sparkles:</summary>

  ```ts
    return (
      <Box sx={{fontSize: 26, textAlign: "center", justifyContent: "center"}}>
          YourName's Magic Cookbook
          <Button variant={"contained"} onClick={() => getRecipe()}>Get Recipe</Button>
      </Box>
      );
  ```
</details>

  Great, now things are centered! However, having the button and the header on the same line isn't ideal. Lets improve this by getting them on separate lines. 

  We can do this by adding another `<Box>` component that wraps around the text you've written, try doing this now.

<details>
    <summary>:sparkles:Show solution:sparkles:</summary>

  ```ts
    return (
      <Box sx={{textAlign: "center", justifyContent: "center"}}>
          <Box sx={{fontSize: 26}}>
          YourName's Magic Cookbook
          </Box>
          <Button onClick={() => getRecipe()}>Get Recipe</Button>
      </Box>
      );
  ```
</details>

  
  Perfect, now last thing we might notice is that things are looking a bit cramped, and also, the button doesn't reaally look like a button yet. Lets do something about this. First off, we want to add a bit of padding to both the `<Box>` components we have. To make things less cramped we can use the `padding` and `paddingBottom / paddingTop` styling properties. 
  
  And the `<Button>` component has the built in property `variant` try adding this to the button, it accepts a few predefined options namely `text | outlined | contained` try these out and find one that you like.

<details>
    <summary>:sparkles:Show step 2 final solution:sparkles:</summary>

  ```ts
    import { Box } from '@mui/material';
    import Button from '@mui/material/Button';

    function App() {

        const getRecipe = () => {
                console.log("Hello world")
            }

            return (
                <Box sx={{textAlign: "center", justifyContent: "center", padding: 2}}>
                    <Box sx={{fontSize: 26, paddingBottom: 2}}>
                    YourName's Magic Cookbook
                    </Box>
                    <Button variant={'outlined'} onClick={() => getRecipe()}>Get Recipe</Button>
                </Box>
            );
    }

    export default App;
  ```
</details>

  All right, now we've finished adding the header, and improving the layout a bit! Next step, we'll start having the button do something.
  
  </details>

</details>

## Step 3 - Querying the backend
<details>
  <summary>:wrench: How to query </summary>
  
  Now let's get our React-app underway by implementing fetching logic in our app. JavaScript has a "Fetch" API that [provides a JavaScript interface for accessing and manipulating parts of the protocol, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.](!https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

A basic fetch request is really simple to set up. Have a look at the following code:

```ts
fetch('http://example.com/api')
  .then((response) => response.json())
  .then((data) => console.log(data));
```

Here we are performing a request to an API at 'http://example.com/api' and printing the response to the console. The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and does not directly return the JSON response body but instead returns a promise that resolves with a Response object.

This request is nice, but it is lacking one key feature: the request body. Also, this request is a simple GET request, when performing HTTP requests with a request body, a POST request is used, so we need to change that as well. Here is an example:

```ts
fetch("http://example.com/api", {
      method: "POST",
      body: requestBody,
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
```

### Encapsulating the fetch request
Let's encapsulate this request into a function we can reuse:

```ts
//The async keyword allows us to to use "await" to perform asynchronous operations, such as communicating with the backend
const getRecipe = async () => {
    //Hardcoded list of ingredients. We'll come back to this later, but we need some data to work with for now.
    const requestBody = JSON.stringify({
        ingredients: [
            "tomato", 
            "mozzarella", 
            "basil", 
            "chiocciole pasta", 
            "olive oil"
        ]
    })
    await fetch("http://localhost:8000/recipes", {
      method: "POST",
      headers: { //We also need to tell what kind of data we're sending
        "Content-Type": "application/json",
      },
      body: requestBody,
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
```

### Adding the function to our app
Now try adding this in your App.tsx file, and check the console output after trying to click the button (It might take a few seconds-half a minute before you get a result, depending on the server!)
  
<details>
  <summary>:sparkles:Show solution:sparkles:</summary>
```ts
import { Box } from '@mui/material';
import Button from '@mui/material/Button';

function App() {
  
  const getRecipe = async () => {
    const requestBody = JSON.stringify({ingredients: ["tomato", "mozzarella", "basil", "chiocciole pasta", "olive oil"]})
    await fetch("http://localhost:8000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  
  return (
      <Box sx={{textAlign: "center", justifyContent: "center", padding: 2}}>
          <Box sx={{fontSize: 26, paddingBottom: 2}}>
          YourName's Magic Cookbook
          </Box>
          <Button variant={'outlined'} onClick={() => getRecipe()}>Get Recipe</Button>
      </Box>
  );
}
export default App;
```

</details>
<details>
