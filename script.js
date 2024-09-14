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
