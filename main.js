// Get the necessary elements
//  const previewButton = document.getElementById("preview-button");
const modalOverlay = document.getElementById("modal-overlay");
const continueBtn = document.querySelector('.cta')
const visibleOn = document.getElementById('visibleOn');
// const cancelButton = document.getElementById("cancel-button"); 

// Function to show the modal
//  function showModal() {
//    console.log("Modal");
//    modalOverlay.style.display = "block";
//  }

// Function to hide the modal
//  function hideModal() {
//    modalOverlay.style.display = "none";
//  }

// Event listener for the preview button click
//  previewButton.addEventListener("click", showModal);

// Event listener for clicking outside the modal to close it
//  modalOverlay.addEventListener("click", function (event) {
//    if (event.target === modalOverlay) {
//      hideModal();
//    }
//  });


//  cancelButton.addEventListener("click", hideModal);



const languageContent = document.querySelectorAll(".chip");
const selectedLanguages = [];
const selectedLanguagesDiv = document.getElementById("selected-languages");
const inputBox = document.getElementById("input-box");


languageContent.forEach((item) => {
  item.addEventListener("click", () => {
    const language = item.textContent.trim().substring(2);
    if (selectedLanguages.includes(language)) {
      selectedLanguages.splice(selectedLanguages.indexOf(language), 1);
      item.classList.remove("selected");
    } else {
      selectedLanguages.push(language);
      item.classList.add("selected");
    }
    displaySelectedLanguages();
    toggleContinueButton(selectedLanguages);
  });
});



selectedLanguagesDiv.addEventListener("click", (event) => {
  if (event.target.classList.contains("selected-language")) {
    const language = event.target.textContent;
    selectedLanguages.splice(selectedLanguages.indexOf(language), 1);
    const languageContentElement = Array.from(languageContent).find(
      (item) => {
        return item.textContent.trim().substring(2) === language;
      }
    );
    if (languageContentElement) {
      languageContentElement.classList.remove("selected");
    }
    displaySelectedLanguages();
  }
  toggleContinueButton(selectedLanguages);
  //  visibleOn
});


// Add input box value as a selected language
inputBox.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) { // Check if Enter key is pressed
    const language = inputBox.value.trim();
    if (language !== "" && !selectedLanguages.includes(language)) {
      selectedLanguages.push(language);
      displaySelectedLanguages();
      toggleContinueButton(selectedLanguages);
    }
    inputBox.value = "";
  }
});


//Function to display  selected-languages
function displaySelectedLanguages() {
  selectedLanguagesDiv.innerHTML = "";
  selectedLanguages.forEach((language) => {
    const languageElement = document.createElement("div");
    languageElement.textContent = language;
    languageElement.classList.add("selected-language");
    selectedLanguagesDiv.appendChild(languageElement);
  });
}


//Toggle continue button after selection languages make active and visible
function toggleContinueButton(selectedLanguages) {
  if (selectedLanguages.length > 0) {
    // console.log("Toggle continue button");
    continueBtn.classList.add('active');
    visibleOn.classList.add('visible');
    document.getElementById("nextButton").disabled = false;
  } else {
    continueBtn.classList.remove('active');
    visibleOn.classList.remove('visible');
    document.getElementById("nextButton").disabled = true;

  }
  // selectedLanguages.length === 0? visibleOn.disabled='true':visibleOn.disabled='false';
}












/*Code For Drop-Down Selection Functionality*/

// Get references to the select elements
const technologySelect = document.querySelector('#select-technology');
const expertiseSelect = document.querySelector('#select-expertise');
const experienceSelect = document.querySelector('#select-experience');

// Get reference to the filter button
const filterButton = document.querySelector('#filter-button');
const list = document.getElementById('list-items');
const skillListBed = document.querySelector('#skill-list-bed');
const skillsListFed = document.querySelector('#skill-list-fed');




// Add click event listener to the filter button
filterButton.addEventListener('click', updateResumeView);

// Function to update the resume view based on the selected options
function updateResumeView() {
  // Get the selected values from the select elements
  const selectedTechnology = technologySelect.value;
  const selectedExpertise = expertiseSelect.value;
  const selectedExperience = experienceSelect.value;

  // Update the resume view based on the selected options
  // Here, you can manipulate the DOM or perform any other actions based on the selected options
  // For simplicity, let's just log the selected options to the console
  // console.log('Selected Technology:', selectedTechnology);
  // console.log('Selected Expertise:', selectedExpertise);
  // console.log('Selected Experience:', selectedExperience);

  document.getElementById('selected-technology').textContent = selectedTechnology;



  //1 ADDED LIST USING SENIOR DEVELOPER  Clear existing list items 
  list.innerHTML = '';

  if (selectedExperience === 'Senior Developer') {
    const jsonString = '["Extensively worked on Spring Microservices","Integration of Openbravo with kachyng platform","Integration of Payment Gateway like Stripe, FirstData, Vantive, CCavenue etc.","Developed Kachyng Wallet and tokenized credit card.","Team member for achieving PCI Level 1 Compliance.","Extensive expertise in programming languages, development environments/tools, configuration management.","Merchant website development","Communication with clients to take the requirement."]';

    const jsonArray = JSON.parse(jsonString);

    jsonArray.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
  }


  //2 ADDED SKILLS USING BACK END DEVELOPER SKILLS
  if (selectedExpertise === 'Back End Developer') {
    // Display JSON data in the skill-list element
    const jsonData = [
      { "heading": "Java Technologies", "paragraph": "Java, Collection, JEE, JDBC, Servlets, JSP, JSTL, JavaBeans and EJB" },
      { "heading": "Messaging Systems", "paragraph": "JMS (Java Messaging Service, RabbitMQ)" },
      { "heading": "Frameworks & ORMS", "paragraph": "Spring, Spring Boot, Play, Grails, Microservice, JPA, Hibernate." },
      { "heading": "Development Tools", "paragraph": "Eclipse, WebLogic, JBoss , ANT 1.7" },
      { "heading": "Web Services", "paragraph": "REST, SOAP, WSDL, UDDI." },
      { "heading": "Databases", "paragraph": "PostgreSQL, MySQL, MSSQL and ORACLE" },
      { "heading": "Payment Gateway", "paragraph": "PayPal, Stripe, Braintree, Authorize.net" },
      { "heading": "Scripting languages", "paragraph": "JavaScript, jQuery, Angular2-5, Node.JS, React JS." }
    ];

    // Generate HTML content from JSON data
    const htmlContent = jsonData.map(item => `
      <div class="item col-xl-6">
        <div class="skill-heading">
          <h6>${item.heading}</h6>
          </div>  
          <div class="skill-paragraph">
            <p>${item.paragraph}</p>
          </div>
        </div>
      `).join('');

    // Update the skill-list element with the generated HTML content
    skillListBed.innerHTML = htmlContent;
  } else {
    // Clear the skill-list element if the selected expertise is not "Back End Developer"
    skillListBed.innerHTML = '';
  }



  //3 AFTER SELECTION OF FRONT END REACT DEVELOPERS
  if (selectedExpertise === 'Front End React') {
    // Display JSON data in the skill-list element
    const jsonData = [
      { "heading": "HTML/CSS", "paragraph": "HTML5, CSS3, SASS/SCSS, Bootstrap" },
      { "heading": "JavaScript", "paragraph": "ES6+, DOM Manipulation, AJAX, JSON" },
      { "heading": "Front-end Frameworks", "paragraph": "React.js, Angular, Vue.js" },
      { "heading": "UI/UX Design", "paragraph": "Wireframing, Prototyping, Responsive Design" },
      { "heading": "Version Control", "paragraph": "Git, GitHub, Bitbucket" },
      { "heading": "Testing and Debugging", "paragraph": "Unit Testing, Browser Developer Tools" },
      { "heading": "Performance Optimization", "paragraph": "Website Optimization, Page Speed" },
      { "heading": "Cross-Browser Compatibility", "paragraph": "Browser Testing, Polyfills" },
    ];

    // Generate HTML content from JSON data
    const htmlContent = jsonData.map(item => `
      <div class="item col">
        <div class="skill-heading">
          <h6>${item.heading}</h6>
        </div>
        <div class="skill-paragraph">
          <p>${item.paragraph}</p>
        </div>
      </div>
    `).join('');

    // Update the skill-list element with the generated HTML content
    skillsListFed.innerHTML = htmlContent;
  } else {
    // Clear the skill-list element if the selected expertise is not "Front End React"
    skillsListFed.innerHTML = '';
  }

}
updateResumeView();








//SENDING EMAIL USING EMAIL-JS FUNCTIONALITY
function sendEmail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  var languagesString = "";
  if (selectedLanguages.length > 0) {
    languagesString = selectedLanguages.join(", ");
  }

  var param = {
    name: name,
    email: email,
    languages: languagesString
  };
  console.log(param);
  console.log(selectedLanguages);


  const serviceID = "service_2n8pfnq";
  const templateID = "template_pf12cr8";

  emailjs.send(serviceID, templateID, param)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      // alert("Email sent successfully");
    }).catch((err) => console.log(err));

  closeModal();
}

//CLOSING MODAL AFTER SENDING EMAIL
function closeModal() {
  $('#exampleModalCenter').modal('hide');
}




