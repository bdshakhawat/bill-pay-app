// functional component called FormAddFriend. This component represents a form to add a new friend.
//  the FormAddFriend component represents a form to add a new friend. It manages state variables for the friend's name and image URL. When the form is submitted, it creates a new friend object with a unique ID and calls the onAddFriend function provided as a prop, passing the new friend object. The form fields are controlled components, meaning their values are managed by the component's state variables.


/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../button/Button";


const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌄 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;

// FormAddFriend: This is the functional component being defined. It accepts one prop: onAddFriend.

// onAddFriend: This prop represents the event handler function that will be called when a new friend is added. It is passed from the parent component.

// const [name, setName] = useState(""): This line defines a state variable name and its corresponding setter function setName using the useState hook. The initial value of name is an empty string.

// const [image, setImage] = useState("https://i.pravatar.cc/48"): This line defines a state variable image and its corresponding setter function setImage using the useState hook. The initial value of image is set to "https://i.pravatar.cc/48" which is a default image URL.

// function handleSubmit(e) { ... }: This is a function that handles the form submission. It prevents the default form submission behavior, checks if name and image are both non-empty, creates a new friend object with a unique id, and calls the onAddFriend function with the new friend object. It then resets the name and image state variables to their initial values.

// <form className="form-add-friend" onSubmit={handleSubmit}>: This is the main <form> element that represents the friend addition form. It has a CSS class "form-add-friend" and an onSubmit event handler set to the handleSubmit function.

// Inside the form, there are two input fields for entering the friend's name and image URL, and a <Button> component for adding the friend.

// <input type="text" value={name} onChange={(e) => setName(e.target.value)} />: This renders an <input> element of type "text" for entering the friend's name. It is bound to the name state variable, so the value of the input field is controlled by the state. The onChange event handler updates the name state variable with the new value entered in the input field.

// <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />: This renders an <input> element of type "text" for entering the image URL of the friend. It is bound to the image state variable, so the value of the input field is controlled by the state. The onChange event handler updates the image state variable with the new value entered in the input field.

// <Button>Add</Button>: This renders a Button component with the text content "Add". When clicked, it triggers the form submission, which calls the handleSubmit function.