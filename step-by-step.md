# Step by step guide
Jeg slenger bare inn ting her mens jeg koder som jeg tenker er naturlige punkter å gå igjennom. Litt kaos til å starte med kanskje, men tror det blir enklere å komme frem til en god form på workshoppen om man skriver ned og forklarer for seg selv mens man koder opp tjenesten.

Blå lenker betyr bare at jeg har stjålet et utdrag fra et annet sted, i påvente av en mer pedagogisk oversettelse. Er også usikker på språket. Føles mest naturlig på engelsk, og øker muligheten for enkel gjenbruk. 

## Exploring the backend API
We are using [Postman](https://www.postman.com/) to easily familiarize ourselves with the backend API. Postman is a fantastic tool for managing collections of HTTP requests. Click the button below to get access to a premade Postman collection.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/5139293-9e062c9e-53ee-4c8a-b987-3134eb16629f?action=collection%2Ffork&collection-url=entityId%3D5139293-9e062c9e-53ee-4c8a-b987-3134eb16629f%26entityType%3Dcollection%26workspaceId%3Df8560db4-e41e-410a-961c-e4158d0e61f2)

_Note: Import if you don't care about updates to the collection, fork it if you want future updates._

### Postman 
Before attempting a request to the backend, make sure that the backend is already running. If not, see the [README](/README.md) for instructions. When the backend is up and running, click the blue "Send"-button in the Postman GUI to send a request to the backend. After a few moments, you should get a similar response to the one in the image below:
![](/images/postman-guide.png)

Try changing the ingredients list and see how it affects the response ✨

## Fetching data from the backend
Now that we've familiarized ourselves with the API, let's get our React-app underway by implementing similar fetching logic in our app instead. JavaScript has a "Fetch" API that [provides a JavaScript interface for accessing and manipulating parts of the protocol, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.](!https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

A basic fetch request is really simple to set up. Have a look at the following code:

```ts
fetch('http://example.com/api')
  .then((response) => response.json())
  .then((data) => console.log(data));
```

Here we are performing a request just like in Postman and printing it to the console. The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and does not directly return the JSON response body but instead returns a promise that resolves with a Response object.

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
Let's put this function inside our React app. Place it in the `App.tsx`-file like so: 
```ts
import './App.css';

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
    <>
    </>
  );
}

export default App;
```


### Adding a button
The function is not used yet. Let's create a button that triggers the request. Put the following inside the `return` at the bottom of the `App.tsx`-file, encapsulated by the chevrons: 
```ts
return (
    <>
        <Button onClick={getRecipe}>Get Recipe</Button>
    </>
);
    
```

Here we're using a Button component from Material UI, so remember to add it as a dependency at the top of the file:
```
import Button from '@mui/material/Button';
```

You should now have a button in your app at the top left that looks somewhat like this:

![](/images/button.png)

_Note: The button can be stylized in many ways. Take a look at the documentation here for an overview: https://mui.com/material-ui/react-button/_

### Interacting with the button
You should be able to click the button, but nothing will appear, as we have not yet implemented any action on the response other than logging it to the console. You can view the console by right-clicking anywhere on the page, and selecting "Inspect". This will open a separate window known as the developer console. Here, click the "Console"-tab and the response from the backend should be displayed (After a few seconds):

![](/images/console.png)