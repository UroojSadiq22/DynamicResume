interface ResumeData {
    name: string;
    email: string;
    phone: string;
    education: {
      highestEducation: string;
      school: string;
      field: string;
      passingYear: string;
    };
    skills: string[];
    experience: {
      company: string;
      position: string;
      year: string;
    };
  }
  
  const form = document.getElementById('resume-form') as HTMLFormElement;
  const skillInput = document.getElementById('new-skill') as HTMLInputElement;
  const addSkillButton = document.getElementById('add-skill') as HTMLButtonElement;
  const skillsList = document.getElementById('skills-list') as HTMLDivElement;
  const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;
  
  let skills: string[] = [];
  
  // Add skill
  addSkillButton.addEventListener('click', () => {
    const skill = skillInput.value.trim();
    if (skill) {
      skills.push(skill);
      updateSkillsList();
      skillInput.value = '';
    }
  });
  
  // Update the skills list display
  function updateSkillsList() {
    skillsList.innerHTML = '';
    skills.forEach((skill, index) => {
      const span = document.createElement('span');
      span.textContent = skill;
      skillsList.appendChild(span);
    });
  }
  
  // Handle form submission
  document
  .getElementById("resume-form")
  ?.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const formData: ResumeData = {
      name: (document.getElementById('name') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      phone: (document.getElementById('phone') as HTMLInputElement).value,
      education: {
        highestEducation: (document.getElementById('highest-education') as HTMLSelectElement).value,
        school: (document.getElementById('school') as HTMLInputElement).value,
        field: (document.getElementById('field') as HTMLInputElement).value,
        passingYear: (document.getElementById('passing-year') as HTMLInputElement).value,
      },
      skills: skills,
      experience: {
        company: (document.getElementById('company') as HTMLInputElement).value,
        position: (document.getElementById('position') as HTMLInputElement).value,
        year: (document.getElementById('year') as HTMLInputElement).value,
      },
    };
  
    displayResume(formData);
  });
  
  // Display the resume
  function displayResume(data: ResumeData) {
    resumeDisplay.innerHTML = `
      <h1>Resume</h1>

      <div>
      <h2>◇ Personal Information</h2>
      <p>Name:<strong> ${data.name}</strong></p>
      <p>Email:<strong> ${data.email}</strong></p>
      <p>Phone:<strong> ${data.phone}</strong></p>
      </div>
      
      <div>
      <h2>◇ Education</h2>
      <p>Highest Education:<strong> ${data.education.highestEducation}</strong></p>
      <p>School:<strong> ${data.education.school}</strong></p>
      <p>Field:<strong> ${data.education.field}</strong></p>
      <p>Passing Year:<strong> ${data.education.passingYear}</strong></p>
      </div>
      
      <div>
      <h2>◇ Skills</h2>
      <div class="skills-grid">
        ${data.skills.map(skill => `<div>${skill}</div>`).join('')}
      </div>
    </div>

      <div>
      <h2>◇ Experience</h2>
      <p>Company:<strong> ${data.experience.company}</strong></p>
      <p>Position:<strong> ${data.experience.position}</strong></p>
      <p>Year:<strong> ${data.experience.year}</strong></p>
      </div>

    `;
  }
  