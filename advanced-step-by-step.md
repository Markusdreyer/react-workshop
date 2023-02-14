# Advanced Step by step guide
This is a step by step guide to improving the design and layout of the solution. To follow the solution, make sure your solution has all the basic
functionality in place, e.g. that you have finished Steps 1-6 of the step-by-step.md file

## Centering items and using some jsx for styling
<details>
  <summary>:hand: Make it look better</summary>
  
  <br/>So, lets finally take some advantage of having used the `<Box>` component and other Material UI components. Material UI Components have a property named
  sx that allows you to access styling options, such as changing positioning, colors, font sizes and much more. lets have a look at how it is used
  
  ```tsx
  <Box sx={{fontSize: 24}}> something something </Box>
  ```
  
  Some of the styling optinos we'll be using are the following
  
  ```tsx
  justifyContent
  textAlign
  fontSize
  opacity
  position
  ```
  
  So now we want to center all our elements, and the text in the header e.g. `YourName's Magic Cookbook`.
  
  You can try doing this yourself or see the solution below
  
  <details>
    <summary>:sparkles:Show solution:sparkles:</summary>
    
    
  </details>

</details>
