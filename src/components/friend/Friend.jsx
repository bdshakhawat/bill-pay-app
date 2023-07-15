// functional component called Friend. This component represents an individual friend item in the FriendsList.
// the Friend component represents an individual friend item in the FriendsList. It renders the friend's image, name, and balance information. It also provides a button to select or deselect the friend. The component's behavior is determined by the props it receives from the parent component.

/* eslint-disable react/prop-types */
import Button from "../button/Button";


const Friend = ({ friend, onSelection, selectedFriend }) => {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default Friend;

// Friend: This is the functional component being defined. It accepts three props: friend, onSelection, and selectedFriend.

// friend: This prop represents the friend object. It is passed from the parent FriendsList component.

// onSelection: This prop represents the event handler function that will be called when the friend is selected. It is passed from the parent FriendsList component.

// selectedFriend: This prop represents the currently selected friend. It is also passed from the parent FriendsList component.

// isSelected: This is a variable created using the const keyword. It determines whether the current friend is selected or not. It checks if the id of the selectedFriend object matches the id of the friend object using optional chaining (selectedFriend?.id === friend.id).

// <li className={isSelected ? "selected" : ""}>: This is an <li> element, representing a list item. It has a className attribute that conditionally sets the CSS class "selected" if isSelected is true, indicating that the friend is currently selected.

// <img src={friend.image} alt={friend.name} />: This renders an <img> element with the src attribute set to the friend.image property and the alt attribute set to the friend.name property. It displays the friend's image.

// <h3>{friend.name}</h3>: This renders an <h3> heading element with the text content set to the friend.name property. It displays the friend's name.

// {friend.balance < 0 && (...)}: This is a conditional rendering statement using the logical AND (&&) operator. It checks if the friend.balance property is less than 0. If it is, it renders a <p> element with the CSS class "red" and displays the message indicating that the logged-in user owes money to the friend.

// {friend.balance > 0 && (...)}: This is another conditional rendering statement. It checks if the friend.balance property is greater than 0. If it is, it renders a <p> element with the CSS class "green" and displays the message indicating that the friend owes money to the logged-in user.

// {friend.balance === 0 && (...)}: This is another conditional rendering statement. It checks if the friend.balance property is equal to 0. If it is, it renders a <p> element with the message indicating that the logged-in user and the friend are even.

// <Button onClick={() => onSelection(friend)}>: This renders a Button component with an onClick event handler. When the button is clicked, it calls the onSelection function and passes the friend object as an argument. This allows the parent component to handle the selection of a friend.

// {isSelected ? "Close" : "Select"}: This is the text content of the button that dynamically changes based on the isSelected variable. If the friend is currently selected (isSelected is true), it displays "Close"; otherwise, it displays "Select".

// Finally, the Friend component is exported as the default export.

// In summary, 