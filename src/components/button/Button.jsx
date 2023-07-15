// functional component called Button. This component represents a reusable button element that can be customized with different text content and an onClick event handler.
// the Button component is a simple reusable button element. It renders a <button> element with the provided content (passed as children) and triggers the specified onClick event handler when clicked. The CSS class "button" is applied to the button for styling purposes. This component can be imported and used in other components to create buttons with custom text and functionality.



/* eslint-disable react/prop-types */

const Button = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

// Button: This is the functional component being defined. It accepts two props: children and onClick.

// children: This prop represents the content of the button. It is passed as the children of the Button component.

// onClick: This prop represents the event handler function that will be called when the button is clicked. It is passed from the parent component.

// <button className="button" onClick={onClick}>: This is the <button> element rendered by the component. It has a CSS class "button" applied to it and an onClick event handler set to the onClick prop.

// {children}: This is where the content of the button is rendered. The children prop represents the text or components passed between the opening and closing tags of the Button component.

// export default Button;: This exports the Button component as the default export, allowing it to be imported and used in other files.