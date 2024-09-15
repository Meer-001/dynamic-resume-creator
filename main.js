// listing input elements
// preventdefault is liye hota takay form submit hoty hway page reload na ho
var _a;
(_a = document.getElementById('resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilePictureElement = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var fNameElement = document.getElementById('fathername');
    var emailElement = document.getElementById('email');
    var contactElement = document.getElementById('number');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillElement = document.getElementById('skill');
    //creating output
    if (profilePictureElement && nameElement && fNameElement && emailElement && contactElement && addressElement && educationElement && experienceElement && skillElement) {
        var name_1 = nameElement.value;
        var fName = fNameElement.value;
        var email = emailElement.value;
        var contact = contactElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skill = skillElement.value;
        var profilePictureFile = (_a = profilePictureElement.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        var generatedOutput = " \n    <h2>My Resume</h2>\n    ".concat(profilePictureURL, " ? '<img src ='").concat(profilePictureURL, " alt='Profile Picture' class='profilePicture'>':''}\n    <p><strong> Name: </strong> ").concat(name_1, "</p>\n    <p><strong> Father Name: </strong> ").concat(fName, "</p>\n    <p><strong> Email address: </strong> ").concat(email, "</p>\n    <p><strong> Contact Number: </strong> ").concat(contact, "</p>\n    <p><strong> Address: </strong> ").concat(address, "</p>\n    \n    <h3> Education:</h3> \n    <p>").concat(education, "</p>\n    <h3> Experience:</h3> \n    <p>").concat(experience, "</p>\n    <h3> Skills:</h3> \n    <p>").concat(skill, "</p>\n   ");
        var resumeOutputElement = document.getElementById('generatedOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = generatedOutput;
        }
        else {
            console.error('Something is mising in element output');
        }
    }
});
