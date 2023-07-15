// Main theme:
// This React application that manages a list of friends and allows the user to add new friends, select a friend from the list, and split a bill with the selected friend.


import { useState } from "react";
import FriendsList from "./components/friendsList/FriendsList";
import FormAddFriend from "./components/formAddFriend/formAddFriend";
import Button from "./components/button/Button";
import FormSplitBill from "./components/formSplitBill/FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];



const App=()=> {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
// ---------------------------------------------------------------------------------------
  // The handleShowAddFriend function is an event handler that toggles the value of the showAddFriend state variable in the React component. It is triggered when a button is clicked, which allows the user to show or hide the form to add a new friend.

  // The function is defined as an arrow function with no parameters.
// Inside the function body, the setShowAddFriend function is called with a callback function as its argument.
// The callback function receives the current value of the showAddFriend state variable as its parameter. In this case, it's represented by the variable show.
// The callback function uses the logical NOT operator (!) to toggle the value of show. If show is true, it becomes false, and if show is false, it becomes true.
// The updated value of show is returned from the callback function.
// The setShowAddFriend function takes the returned value and updates the state of the showAddFriend variable with the new value.
// Here's an example to illustrate how this function works:

// Assume the initial value of showAddFriend is false.

// The user clicks a button that triggers the handleShowAddFriend function.
// The callback function is executed, and since the initial value of show is false, the logical NOT operator (!) flips it to true.
// The updated value (true) is returned from the callback function.
// The setShowAddFriend function is called with the new value (true), and it updates the state of showAddFriend to true.
// As a result, the form to add a new friend is displayed because the value of showAddFriend is now true.
// If the user clicks the button again, the process is repeated, and the form will be hidden because the value of showAddFriend is toggled back to false.
// ---------------------------------------------------------------------------------------------------


// --------------------------------------------------------------------------------------------------
// The handleShowAddFriend function effectively toggles the visibility of the form by updating the state variable showAddFriend to control the rendering of the component.
  
  const handleShowAddFriend=()=> {
    setShowAddFriend((show) => !show);
  }

// The handleAddFriend function is an event handler that is called when a new friend is added using a form. It updates the state variables friends and showAddFriend in the React component.
// The function is defined as an arrow function with friend as its parameter. It represents the new friend object being added.
// Inside the function body, the setFriends function is called with a callback function as its argument.
// The callback function receives the current value of the friends state variable as its parameter. In this case, it's represented by the variable friends.
// The callback function creates a new array by spreading the existing friends array ([...friends]) and appending the friend object to it ([...friends, friend]).
// This uses the spread syntax (...) to create a new array with all the elements from the existing friends array followed by the friend object.
// The new array represents the updated list of friends with the newly added friend.
// The updated array is returned from the callback function.
// The setFriends function takes the returned array and updates the state of the friends variable with the new array, effectively adding the new friend to the list.
// After adding the friend, the setShowAddFriend function is called with the argument false to update the state of the showAddFriend variable and hide the form to add a new friend.

// Assume the initial value of friends is the following array:
// [
//   {
//     id: 118836,
//     name: "Clark",
//     image: "https://i.pravatar.cc/48?u=118836",
//     balance: -7,
//   },
//   {
//     id: 933372,
//     name: "Sarah",
//     image: "https://i.pravatar.cc/48?u=933372",
//     balance: 20,
//   },
//   {
//     id: 499476,
//     name: "Anthony",
//     image: "https://i.pravatar.cc/48?u=499476",
//     balance: 0,
//   },
// ]
// The user fills out a form to add a new friend with the following details:
// const newFriend = {
//   id: 123456,
//   name: "John",
//   image: "https://i.pravatar.cc/48?u=123456",
//   balance: 10,
// };
// The handleAddFriend function is called with newFriend as the argument.
// The callback function is executed, and the current friends array is spread using the spread syntax ([...friends]).
// The spread array is combined with the newFriend object using the spread syntax again ([...friends, friend]).
// The resulting array will contain all the existing friends followed by the newly added friend.
// [
//   {
//     id: 118836,
//     name: "Clark",
//     image: "https://i.pravatar.cc/48?u=118836",
//     balance: -7,
//   },
//   {
//     id: 933372,
//     name: "Sarah",
//     image: "https://i.pravatar.cc/48?u=933372",
//     balance: 20,
//   },
//   {
//     id: 499476,
//     name: "Anthony",
//     image: "https://i.pravatar.cc/48?u=499476",
//     balance: 0,
//   },
//   {
//     id: 123456,
//     name: "John",
//     image: "https://i.pravatar.cc/48?u=123456",
//     balance: 10,
//   },
// ]
// The updated array is returned from the callback function.
// The setFriends function is called with the new array, and the state of the friends variable is updated with the updated list of friends.
// The setShowAddFriend function is called with the argument false, and the state of the showAddFriend variable is set to false, hiding the form to add a new friend.
// After executing this function, the friends state will contain the newly added friend, and the form to add a friend will be hidden.
// ----------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------
// The handleAddFriend function effectively updates the state variables friends and showAddFriend to add a new friend and manage the visibility of the form respectively.



  const handleAddFriend=(friend)=> {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  // The function is defined as an arrow function with a parameter friend, representing the new friend object being added.

// Inside the function body:

// The setFriends function is called with a callback function as its argument.
// The callback function receives the current value of the friends state variable as its parameter, represented by the variable friends.
// The callback function:

// Uses the spread syntax ([...friends]) to create a new array by spreading the existing friends array.
// Appends the friend object to the new array by adding it after the spread array ([...friends, friend]).
// The result is an updated array that includes all the existing friends plus the newly added friend.
// The updated array is returned from the callback function.

// The setFriends function takes the returned array and updates the state of the friends variable, effectively adding the new friend to the list.

// Finally, setShowAddFriend(false) is called to update the state of the showAddFriend variable, setting it to false. This hides the form used to add a new friend.

// Example:

// Assume the initial value of the friends state is an array containing two friends:
// const initialFriends = [
//   {
//     id: 1,
//     name: "Alice",
//   },
//   {
//     id: 2,
//     name: "Bob",
//   },
// ];
// Suppose you want to add a new friend with the following details:
// const newFriend = {
//   id: 3,
//   name: "Charlie",
// };
// The handleAddFriend function is called with newFriend as the argument.

// The callback function is executed, and the current friends array is spread using the spread syntax ([...friends]).

// The spread array is combined with the newFriend object using the spread syntax again ([...friends, friend]), resulting in the following array:
// [
//   {
//     id: 1,
//     name: "Alice",
//   },
//   {
//     id: 2,
//     name: "Bob",
//   },
//   {
//     id: 3,
//     name: "Charlie",
//   },
// ]
// The updated array is returned from the callback function.

// The setFriends function is called with the new array, and the state of the friends variable is updated with the updated list of friends.

// Finally, the setShowAddFriend(false) statement is executed, setting the state of the showAddFriend variable to false. This hides the form used to add a new friend.

// After executing this function, the friends state will contain the updated list of friends, including the newly added friend, and the form used to add a friend will be hidden.
  //---------------------------------------------------------------------------------------------------

  
  
  
  // ---------------------------------------------------------------------------------------------------
// the handleSelection function updates the state variables selectedFriend and showAddFriend to manage the selection of a friend and the visibility of the form respectively.
  const handleSelection=(friend)=> {
    // setSelectedFriend(friend);
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  // The function is defined as an arrow function with a parameter friend, representing the friend object that was selected.

// Inside the function body:

// The setSelectedFriend function is called with a callback function as its argument.
// The callback function receives the current value of the selectedFriend state variable as its parameter, represented by the variable cur.
// The callback function:

// Uses the conditional (ternary) operator to determine the new value of the selectedFriend state variable.
// Checks if the current selectedFriend object (cur) has the same id as the newly selected friend object.
// If the id matches, it means the same friend was selected again, so the value is set to null to deselect the friend.
// If the id doesn't match, it means a different friend was selected, so the value is set to the friend object.
// The updated value is returned from the callback function.

// The setSelectedFriend function takes the returned value and updates the state of the selectedFriend variable, either deselecting the friend (setting it to null) or selecting a new friend.

// Finally, setShowAddFriend(false) is called to update the state of the showAddFriend variable, setting it to false. This hides the form used to add a new friend.

// Example:

// Assume the initial value of the selectedFriend state is null, and you want to select a friend with the following details:

// const selectedFriend = {
//   id: 2,
//   name: "Bob",
// };


// The handleSelection function is called with selectedFriend as the argument.

// The callback function is executed, and the current selectedFriend value is passed as cur.

// The callback function checks if cur?.id (optional chaining) is equal to friend.id. Since cur is null, the expression cur?.id evaluates to undefined.

// The conditional operator evaluates the expression (cur?.id === friend.id ? null : friend).

// Since the left-hand side (cur?.id) is undefined and friend.id is 2, the condition is false, so the expression returns friend (the newly selected friend object).
// The setSelectedFriend function is called with the friend object, and the state of the selectedFriend variable is updated with the new friend object.

// Finally, the setShowAddFriend(false) statement is executed, setting the state of the showAddFriend variable to false. This hides the form used to add a new friend.

// After executing this function, the selectedFriend state will contain the newly selected friend object, and the form used to add a friend will be hidden.


  // -----------------------------------------------------------------------------------------------------


// -----------------------------------------------------------------------------------------------------------
  // the handleSplitBill function updates the state variables friends and selectedFriend to split a bill and manage the selected friend respectively.

const handleSplitBill=(value)=> {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }
  // The function is defined as an arrow function with a parameter value, representing the amount to be split in the bill.

// Inside the function body:

// The setFriends function is called with a callback function as its argument.
// The callback function receives the current value of the friends state variable as its parameter, represented by the variable friends.
// The callback function:

// Uses the map method on the friends array to iterate over each friend object.
// Checks if the id of the current friend (friend.id) matches the id of the selectedFriend object.
// If the id matches, it means this friend should receive a balance update due to the bill split.
// If the id doesn't match, the friend remains unchanged, and the original object is returned.
// If the id matches, a new object is created using the spread syntax ({ ...friend }), preserving the existing properties of the friend object.
// The balance property of the new object is updated by adding the value to the current balance (friend.balance + value).
// If the id doesn't match, the original friend object is returned unchanged.
// The updated array of friend objects is returned from the callback function.

// The setFriends function takes the returned array and updates the state of the friends variable, effectively updating the balances of the selected friend and keeping the rest of the friends unchanged.

// Finally, setSelectedFriend(null) is called to update the state of the selectedFriend variable, setting it to null. This clears the selected friend after splitting the bill.

// Example:

// Assume the initial value of the friends state is an array containing two friends:
// const initialFriends = [
//   {
//     id: 1,
//     name: "Alice",
//     balance: 0,
//   },
//   {
//     id: 2,
//     name: "Bob",
//     balance: 10,
//   },
// ];
// Suppose the selected friend is the second friend with an id of 2, and the value to be split is 5.

// The handleSplitBill function is called with 5 as the argument.

// The callback function is executed, and the current friends array is mapped using the map method.

// For each friend object:

// The id of the friend is compared to the id of the selectedFriend object (friend.id === selectedFriend.id).
// Since the id matches for the second friend (id: 2), a new object is created using the spread syntax ({ ...friend }).
// The balance property of the new object is updated by adding the value to the current balance (friend.balance + value).
// The result is an updated friend object for the second friend:
// {
//   id: 2,
//   name: "Bob",
//   balance: 15,
// }
// The setFriends function is called with the new array, and the state of the friends variable is updated with the updated list of friends, reflecting the updated balances.

// Finally, the setSelectedFriend(null) statement is executed, setting the state of the selectedFriend variable to null. This clears the selected friend after splitting the bill.

// After executing this function, the friends state will contain the updated list of friends with the balance of the selected friend incremented by the split bill amount, and the selected friend will be cleared.




  // ---------------------------------------------------------------------------------------------------

  return (
    <div className="app">
      <div className="sidebar">
        
        {/* --------------------------------------------------------------------------------- */}
        {/* the FriendsList component is receiving the list of friends, the selected friend, and an event handler function to handle friend selection. It can use these props to display the friends, highlight the selected friend, and trigger the handleSelection function when a friend is selected or clicked. */}
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />
        {/* friends={friends}: This prop friends is passed to the FriendsList component and contains the list of friends. It is using the value of the friends state variable from the component's state. The FriendsList component will use this prop to display the list of friends.

selectedFriend={selectedFriend}: This prop selectedFriend is passed to the FriendsList component and represents the currently selected friend. It is using the value of the selectedFriend state variable from the component's state. The FriendsList component can use this prop to highlight or indicate the selected friend in the list.

onSelection={handleSelection}: This prop onSelection is passed to the FriendsList component and represents an event handler function. It is using the handleSelection function from the component. The FriendsList component can call this function when a friend is selected or clicked, passing the selected friend object as an argument. */}

      {/* -------------------------------------------------------------------------------------------- */}

      
      
      {/* ----------------------------------------------------------------------------------------------- */}
      
      
      {/* {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />} is a conditional rendering statement that determines whether to render the FormAddFriend component based on the value of the showAddFriend state variable. */}

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        {/* showAddFriend: This is a boolean state variable that determines whether to show the form to add a new friend. If its value is true, the form will be displayed; otherwise, it will be hidden.

&&: This is the logical AND operator. It is used here to conditionally render the FormAddFriend component only if the showAddFriend variable is true. It ensures that the component will only be rendered when the condition is met.

<FormAddFriend onAddFriend={handleAddFriend} />: This is the component being conditionally rendered. It is the FormAddFriend component, and it receives a prop called onAddFriend which is assigned the value of the handleAddFriend function from the component.

Example:

Let's assume the initial value of the showAddFriend state variable is false.

Initially, the value of showAddFriend is false, so the conditional rendering statement evaluates to false, and the FormAddFriend component is not rendered.

Suppose the value of showAddFriend changes to true. Now, the conditional rendering statement evaluates to true, and the FormAddFriend component is rendered.

The FormAddFriend component is rendered with the onAddFriend prop set to the handleAddFriend function. This allows the FormAddFriend component to call the handleAddFriend function when necessary.

If the value of showAddFriend changes back to false, the conditional rendering statement evaluates to false again, and the FormAddFriend component will be unrendered or hidden. */}

      {/* --------------------------------------------------------------------------------------------------- */}


{/* ------------------------------------------------------------------------------------------- */}

{/* Button component with an onClick event handler and dynamic text based on the value of the showAddFriend state variable. */}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      
{/* <Button>: This represents the Button component that is being rendered.

onClick={handleShowAddFriend}: This is an event handler prop called onClick that is set to the handleShowAddFriend function from the component. It means that when the button is clicked, the handleShowAddFriend function will be called.

{showAddFriend ? "Close" : "Add friend"}: This is the text content of the button that is conditionally rendered based on the value of the showAddFriend state variable. It uses a conditional (ternary) operator to determine the text to display.

If the showAddFriend variable is true, it will display the text "Close".
If the showAddFriend variable is false, it will display the text "Add friend".
Example:

Assume the initial value of the showAddFriend state variable is false.

Initially, the value of showAddFriend is false, so the conditional rendering statement evaluates to false, and the text content of the button will be "Add friend".

When the button is clicked, the handleShowAddFriend function will be called due to the onClick event handler.

If the handleShowAddFriend function updates the showAddFriend state variable to true, the conditional rendering statement will evaluate to true, and the text content of the button will change to "Close".

Clicking the button again will trigger the handleShowAddFriend function, which updates the showAddFriend state variable to false. Now, the conditional rendering statement will evaluate to false again, and the text content of the button will revert to "Add friend". */}
      {/* --------------------------------------------------------------------------------------------- */}
      </div>
{/* ----------------------------------------------------------------------------------------- */}

{/* the conditional rendering statement {selectedFriend && ...} conditionally renders the FormSplitBill component based on the truthiness of the selectedFriend state variable. It allows the component to be displayed or hidden dynamically depending on the condition. */}
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}

      {/* {selectedFriend && ...}: This is a conditional rendering statement that checks if the selectedFriend variable is truthy (not null, undefined, false, 0, or an empty string). If it is truthy, the following JSX code will be rendered; otherwise, it will be skipped.

<FormSplitBill>: This represents the FormSplitBill component that is being rendered conditionally.

selectedFriend={selectedFriend}: This prop selectedFriend is passed to the FormSplitBill component and contains the currently selected friend object. It is using the value of the selectedFriend state variable from the component's state. The FormSplitBill component will use this prop to display information about the selected friend.

onSplitBill={handleSplitBill}: This prop onSplitBill is passed to the FormSplitBill component and represents an event handler function. It is using the handleSplitBill function from the component. The FormSplitBill component can call this function to handle the split bill action.

key={selectedFriend.id}: This prop key is used for React's internal reconciliation mechanism. It helps React efficiently update and re-render components when changes occur. The key should be a unique identifier, and in this case, the id of the selectedFriend object is used as the key.

Example:

Let's assume the initial value of the selectedFriend state variable is null.

Initially, the value of selectedFriend is null, so the conditional rendering statement evaluates to false, and the FormSplitBill component is not rendered.

If the user selects a friend with the following object:
const selectedFriend = {
  id: 1,
  name: "Alice",
  balance: 10,
};
Now, the value of selectedFriend is truthy (not null), so the conditional rendering statement evaluates to true, and the FormSplitBill component is rendered.

The FormSplitBill component is rendered with the selectedFriend prop set to the selected friend object, the onSplitBill prop set to the handleSplitBill function, and the key prop set to the id of the selected friend object.

If the user deselects the friend, and the selectedFriend value becomes null again, the conditional rendering statement evaluates to false, and the FormSplitBill component will be unrendered or hidden.


*/}
    {/* ------------------------------------------------------------------------------------------- */}
    </div>
  );
}

export default App;

// Import statements:

// The code imports the necessary dependencies from the React library, including the useState hook.
// It also imports several components from different files: FriendsList, FormAddFriend, Button, and FormSplitBill.
// Initial data:

// The code defines an array called initialFriends which represents the initial list of friends. Each friend object in the array has properties such as id, name, image, and balance.
// App component:

// The main component of the application is called App. It is defined as an arrow function and does not receive any props.
// Inside the component, several state variables are declared using the useState hook. These variables are:
// friends: Stores the list of friends and is initialized with the initialFriends array.
// showAddFriend: Tracks whether the form to add a new friend should be displayed or not.
// selectedFriend: Stores the currently selected friend from the list.
// Event handling functions:

// handleShowAddFriend: Toggles the showAddFriend state variable to show or hide the form to add a new friend.
// handleAddFriend: Adds a new friend to the friends state variable by appending the friend object to the existing list.
// handleSelection: Updates the selectedFriend state variable when a friend is selected from the list. If the currently selected friend is clicked again, it is deselected.
// handleSplitBill: Updates the balance property of the selected friend when a bill is split. The value parameter represents the bill amount.
// Rendered JSX:

// The return statement of the App component contains the JSX code that renders the application.
// The structure of the JSX code represents the layout of the application.
// The FriendsList component is rendered and receives props such as friends, selectedFriend, and onSelection.
// If showAddFriend is true, the FormAddFriend component is rendered.
// A Button component is rendered, which triggers the handleShowAddFriend function when clicked. The button label depends on the showAddFriend state.
// If selectedFriend is not null, the FormSplitBill component is rendered. It receives props such as selectedFriend, onSplitBill, and key (which helps React to track changes).
// Overall, this code sets up the main structure of the application, manages state using the useState hook, and renders different components based on the state values and user interactions.