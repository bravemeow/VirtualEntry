import React from 'react';
import axios from 'axios';


// Add User
async function AddUser(email, password1, password2) {
    var validated = true;
    const data = {"email": email, "password1": password1, "password2": password2};
    await axios.post('/rest-auth/registration/', data)
        .catch(err => {
            if (err.response.data.email) {
                validated = false;
            }
        })
    return validated
}

export default AddUser;