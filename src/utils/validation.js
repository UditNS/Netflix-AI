export const validateData = (email, password) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    
    if(!emailRegex) {
        return { valid: false, errorIn : 'email',  message: "Please enter a valid email address." };
    }

    if(!passwordRegex) {
        return { valid: false, errorIn : 'password', message: "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character." };
    }

    return { valid: true, message: "Validation successful" };
}