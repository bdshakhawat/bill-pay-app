
//  functional component called FriendsList. This component renders a list of friends using the Friend component.

/* eslint-disable react/prop-types */
import Friend from "../friend/Friend";


const FriendsList = ({ friends, onSelection, selectedFriend }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
// FriendsList: This is the functional component being defined. It accepts three props: friends, onSelection, and selectedFriend.

// friends: This prop represents the list of friends. It is passed from the parent component and is an array of friend objects.

// onSelection: This prop represents the event handler function that will be called when a friend is selected. It is passed from the parent component.

// selectedFriend: This prop represents the currently selected friend. It is also passed from the parent component.

// <ul>: This is an unordered list HTML element. It is used as a container to render the list of friends.

// {friends.map((friend) => ( ... ))}: This is a JavaScript map function used to iterate over each friend in the friends array. It returns an array of Friend components.

// <Friend ...>: This is the Friend component that is rendered for each friend in the friends array. It receives props such as friend, key, selectedFriend, and onSelection.

// key={friend.id}: This is a special prop required by React when rendering lists of components. It helps React efficiently update and re-render components when changes occur. The key prop is set to the id of each friend object, ensuring each friend has a unique identifier.

// selectedFriend={selectedFriend} and onSelection={onSelection}: These props are passed to each Friend component. They allow the Friend component to access the selectedFriend and onSelection values passed down from the FriendsList component.

// Finally, the FriendsList component is exported as the default export.

// In summary, the FriendsList component is responsible for rendering a list of friends. It maps over the friends array, creating a Friend component for each friend. The Friend components receive props such as friend, key, selectedFriend, and onSelection, allowing them to display friend information and handle friend selection.

