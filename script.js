var _a;
var form = document.getElementById('resume-form');
var skillInput = document.getElementById('new-skill');
var addSkillButton = document.getElementById('add-skill');
var skillsList = document.getElementById('skills-list');
var resumeDisplay = document.getElementById('resume-display');
var skills = [];
// Add skill
addSkillButton.addEventListener('click', function () {
    var skill = skillInput.value.trim();
    if (skill) {
        skills.push(skill);
        updateSkillsList();
        skillInput.value = '';
    }
});
// Update the skills list display
function updateSkillsList() {
    skillsList.innerHTML = '';
    skills.forEach(function (skill, index) {
        var span = document.createElement('span');
        span.textContent = skill;
        skillsList.appendChild(span);
    });
}
// Handle form submission
(_a = document
    .getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    e.preventDefault();
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        education: {
            highestEducation: document.getElementById('highest-education').value,
            school: document.getElementById('school').value,
            field: document.getElementById('field').value,
            passingYear: document.getElementById('passing-year').value,
        },
        skills: skills,
        experience: {
            company: document.getElementById('company').value,
            position: document.getElementById('position').value,
            year: document.getElementById('year').value,
        },
    };
    displayResume(formData);
});
// Display the resume
function displayResume(data) {
    resumeDisplay.innerHTML = "\n      <h1>Resume</h1>\n\n      <div>\n      <h2>\u25C7 Personal Information</h2>\n      <p>Name:<strong> ".concat(data.name, "</strong></p>\n      <p>Email:<strong> ").concat(data.email, "</strong></p>\n      <p>Phone:<strong> ").concat(data.phone, "</strong></p>\n      </div>\n      \n      <div>\n      <h2>\u25C7 Education</h2>\n      <p>Highest Education:<strong> ").concat(data.education.highestEducation, "</strong></p>\n      <p>School:<strong> ").concat(data.education.school, "</strong></p>\n      <p>Field:<strong> ").concat(data.education.field, "</strong></p>\n      <p>Passing Year:<strong> ").concat(data.education.passingYear, "</strong></p>\n      </div>\n      \n      <div>\n      <h2>\u25C7 Skills</h2>\n      <div class=\"skills-grid\">\n        ").concat(data.skills.map(function (skill) { return "<div>".concat(skill, "</div>"); }).join(''), "\n      </div>\n    </div>\n\n      <div>\n      <h2>\u25C7 Experience</h2>\n      <p>Company:<strong> ").concat(data.experience.company, "</strong></p>\n      <p>Position:<strong> ").concat(data.experience.position, "</strong></p>\n      <p>Year:<strong> ").concat(data.experience.year, "</strong></p>\n      </div>\n\n    ");
}
//   document
//   .getElementById("resumeForm")
//   ?.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const nameElement = document.getElementById("name") as HTMLInputElement;
//     const emailElement = document.getElementById("email") as HTMLInputElement;
//     const phoneElement = document.getElementById("phone") as HTMLInputElement;
//     const educationElement = document.getElementById(
//       "education"
//     ) as HTMLInputElement;
//     const experienceElement = document.getElementById(
//       "experience"
//     ) as HTMLInputElement;
//     const skillsElement = document.getElementById("skills") as HTMLInputElement;
//     // Declare variables outside the if block
//     let name = "";
//     let email = "";
//     let phone = "";
//     let education = "";
//     let experience = "";
//     let skills = "";
//     // Assign values only if elements exist
//     if (
//       nameElement &&
//       emailElement &&
//       educationElement &&
//       experienceElement &&
//       skillsElement
//     ) {
//       name = nameElement.value;
//       email = emailElement.value;
//       phone = phoneElement.value;
//       education = educationElement.value;
//       experience = experienceElement.value;
//       skills = skillsElement.value;
//     } else {
//       console.error("One or more elements are missing");
//       return; // Exit if any elements are missing
//     }
//     const resumeOutput = `
//     <h2>Resume</h2>
//     <p><strong>Name:</strong> ${name} </p>
//     <p><strong>Email:</strong> ${email}</p>
//     <p><strong>Phone:</strong> ${phone}</p>
//     <h3>Education</h3>
//     <p>${education}</p>
//     <h3>Experience</h3>
//     <p>${experience}</p>
//     <h3>Skills</h3>
//     <p>${skills}</p>
//     `;
//     const resumeOutputElement = document.getElementById("resumeOutput");
//     if (resumeOutputElement) {
//       resumeOutputElement.innerHTML = resumeOutput;
//     } else {
//       console.error("The resume output element is missing");
//     }
//   });
