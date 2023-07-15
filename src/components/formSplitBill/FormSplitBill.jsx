// functional component called FormSplitBill. This component represents a form to split a bill between the user and a selected friend.


/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../button/Button";


const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label>👫 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;

// FormSplitBill: This is the functional component being defined. It accepts two props: selectedFriend and onSplitBill.

// selectedFriend: This prop represents the friend object who is selected to split the bill with. It is passed from the parent component.

// onSplitBill: This prop represents the event handler function that will be called when the bill is split. It is passed from the parent component.

// const [bill, setBill] = useState(""): This line defines a state variable bill and its corresponding setter function setBill using the useState hook. The initial value of bill is an empty string.

// const [paidByUser, setPaidByUser] = useState(""): This line defines a state variable paidByUser and its corresponding setter function setPaidByUser using the useState hook. The initial value of paidByUser is an empty string.

// const paidByFriend = bill ? bill - paidByUser : "": This line calculates the amount paid by the friend (paidByFriend) based on the values of bill and paidByUser. If bill is truthy (not empty), it subtracts paidByUser from bill; otherwise, it assigns an empty string to paidByFriend.

// const [whoIsPaying, setWhoIsPaying] = useState("user"): This line defines a state variable whoIsPaying and its corresponding setter function setWhoIsPaying using the useState hook. The initial value of whoIsPaying is set to "user".

// function handleSubmit(e) { ... }: This is a function that handles the form submission. It prevents the default form submission behavior, checks if bill and paidByUser are both non-empty, and calls the onSplitBill function with the appropriate amount to be split based on the value of whoIsPaying.

// <form className="form-split-bill" onSubmit={handleSubmit}>: This is the main <form> element that represents the bill splitting form. It has a CSS class "form-split-bill" and an onSubmit event handler set to the handleSubmit function.

// Inside the form, there are several form fields and elements for inputting bill and payment information. However, the code snippet you provided does not include the actual contents of the form. It seems to be missing. The contents of the form would typically include <label>, <input>, and <select> elements to input bill value, user's expense, friend's expense, and who is paying the bill. Additionally, there is a <Button> component that represents the "Split bill" button.

// In summary, the FormSplitBill component represents a form to split a bill between the user and a selected friend. It manages state variables for bill value, user's payment, who is paying, and calculates the friend's payment based on the inputs. The component calls the onSplitBill function when the form is submitted, passing the calculated amount to be split.