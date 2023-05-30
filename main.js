// Get the necessary elements
const modalOverlay = document.getElementById("modal-overlay");
const continueBtn = document.querySelector('.cta')
const visibleOn = document.getElementById('visibleOn');

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
});


// Add input box value as a selected language
let inputTimeout;
inputBox.addEventListener("input", (event) => {
  clearTimeout(inputTimeout);

  inputTimeout = setTimeout(() => {
    const language = inputBox.value.trim();
    if (language !== "") {
      if (!selectedLanguages.includes(language)) {
        selectedLanguages.push(language);
        displaySelectedLanguages();
      }
      toggleContinueButton(selectedLanguages);
      inputBox.value = "";
    }
  }, 1000);
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


//ACCORDING TO THREE SELECTIONS RESUME WILL UPDATED
function updateResumeView() {
  const selectedTechnology = technologySelect.value;
  const selectedExpertise = expertiseSelect.value;
  const selectedExperience = experienceSelect.value;

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

    const pairs = [];
    for (let i = 0; i < jsonData.length; i += 2) {
      const pair = jsonData.slice(i, i + 2);
      pairs.push(pair);
    }

    const htmlContent = pairs.map(pair => `
    <div class="row">
      <div class="col-xl-6">
        <div class="item">
          <div class="skill-heading">
            <h6>${pair[0].heading}</h6>
          </div>
          <div class="skill-paragraph">
            <p>${pair[0].paragraph}</p>
          </div>
        </div>
      </div>
      ${pair[1] ? `
        <div class="col-xl-6">
          <div class="item">
            <div class="skill-heading">
              <h6>${pair[1].heading}</h6>
            </div>
            <div class="skill-paragraph">
              <p>${pair[1].paragraph}</p>
            </div>
          </div>
        </div>
      ` : ''}
    </div>
  `).join('');
    skillListBed.innerHTML = htmlContent;
  } else {
    skillListBed.innerHTML = '';
  }




  //3 AFTER SELECTION OF FRONT END REACT DEVELOPERS
  if (selectedExpertise === 'Front End React') {
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

    skillsListFed.innerHTML = htmlContent;
  } else {
    skillsListFed.innerHTML = '';
  }

}
updateResumeView();



//SEND EMAIL FUNCTIONALITY 
function sendEmail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  var param = {
    name: name,
    email: email
  };

  if (selectedLanguages.length > 0) {
    var languagesString = selectedLanguages.join(", ");
    param.languages = languagesString;
  } else {
    var selectedTechnology = document.querySelector('#select-technology').value;
    var selectedExpertise = document.querySelector('#select-expertise').value;
    var selectedExperience = document.querySelector('#select-experience').value;

    param.technology = selectedTechnology;
    param.expertise = selectedExpertise;
    param.experience = selectedExperience;
  }

  const serviceID = "service_2n8pfnq";
  const templateID = "template_sputc17";

  if (name && email) {
    emailjs.send(serviceID, templateID, param)
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        closeModal();
        selectedLanguages.length = 0;
        displaySelectedLanguages();
        toggleContinueButton(selectedLanguages);
        toggleSubmitButton();
        alert("Email sent successfully");
      }).catch((err) => console.log(err));
  } else {
    alert("Please fill in both name and email fields.");
  }
}





//CHANGE SUBMIT BUTTON STYLE
function toggleSubmitButton() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var submitButton = document.getElementById("submitBtn");

  if (name && email) {
    submitButton.style.backgroundColor = "#095592";
    submitButton.style.color = "white";
    submitButton.disabled = false;
  } else {
    submitButton.style.backgroundColor = "";
    submitButton.style.color = "";
    submitButton.disabled = true;
  }
}

var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");

nameInput.addEventListener("input", toggleSubmitButton);
emailInput.addEventListener("input", toggleSubmitButton);



//CLOSING MODAL AFTER SENDING EMAIL
function closeModal() {
  $('#exampleModalCenter').modal('hide');
  selectedLanguages.length = 0;
  displaySelectedLanguages();
}


//CALL THE CLOSEMODAL FUNCTION TO CLOSE THE MODAL AND RESET SELECTED LANGUAGES
document.querySelector('.close').addEventListener('click', function () {
  closeModal();
  continueBtn.classList.remove('active');
  document.getElementById("nextButton").disabled = true;
});




