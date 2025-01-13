# User Registration Form

A fully responsive and functional user registration form with validation, built using HTML, CSS, and JavaScript. This project demonstrates how to create a modern and user-friendly form interface, along with client-side validation to ensure proper data input before submission.

## Features

- **Gradient Background**: A visually appealing gradient background to enhance the UI.
- **Responsive Design**: The form is optimized for all screen sizes and adjusts seamlessly across devices.
- **Form Validation**: Comprehensive client-side validation for:
  - Username
  - Password
  - Confirm Password
  - Email Address
  - Mobile Number
- **User Feedback**: Inline error messages to guide users on correcting input errors.
- **Interactive Elements**: Smooth transitions and focus states for inputs and buttons.
- **Sign-In Alert**: A pop-up alert confirms successful sign-in.

## Technologies Used

- **HTML**: For structuring the form.
- **CSS**: For styling, including gradient backgrounds, box shadows, and hover effects.
- **JavaScript**: For client-side validation and interactivity.

## Validation Rules

### Username
- Cannot be empty.
- Must be between 5 and 20 characters.
- Must contain only alphabetic characters.

### Password
- Cannot be empty.
- Must be between 5 and 20 characters.

### Confirm Password
- Must match the entered password.

### Email Address
- Cannot be empty.
- Must include "@" and a valid domain.

### Mobile Number
- Cannot be empty.
- Must contain exactly 10 digits.
- Must include only numeric values.

## Project Structure

## How to Use

1. Clone or download this repository to your local machine.
2. Open `index.html` in a web browser to view the form.
3. Enter the required details:
   - Username
   - Password
   - Confirm Password
   - Email Address
   - Mobile Number
4. Submit the form.
5. If all validations pass, a pop-up alert confirms successful sign-in.

## Code Snippets

### Example Validation Function
```javascript
function validation() {
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    var confpass = document.getElementById('confpass').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;

    if (user == "") {
        document.getElementById("userr").innerHTML = "Please fill the user name.";
        return false;
    }
    if (pass != confpass) {
        document.getElementById("confpasss").innerHTML = "Passwords do not match.";
        return false;
    }
    alert(user + ", you are signed in successfully!");
    return false;
}
<img width="1278" alt="Screenshot 2025-01-12 at 6 01 59 PM" src="https://github.com/user-attachments/assets/36bdce20-8abb-4cd6-a30f-fb4c7bbc7867" />
