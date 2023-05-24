 // Get the necessary elements
//  const previewButton = document.getElementById("preview-button");
const modalOverlay = document.getElementById("modal-overlay");
const continueBtn = document.querySelector('.cta')
const visibleOn = document.getElementById('visibleOn');
const cancelButton = document.getElementById("cancel-button"); 
 
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
 const selectedLanguagesDiv =
   document.getElementById("selected-languages");

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

 function displaySelectedLanguages() {
   selectedLanguagesDiv.innerHTML = "";
   selectedLanguages.forEach((language) => {
     const languageElement = document.createElement("div");
     languageElement.textContent = language;
     languageElement.classList.add("selected-language");
     selectedLanguagesDiv.appendChild(languageElement);
   });
 }

 function toggleContinueButton(selectedLanguages) {
   if (selectedLanguages.length > 0) {
     console.log("Toggle continue button");
     continueBtn.classList.add('active');
     visibleOn.classList.add('visible');
   } else {
     continueBtn.classList.remove('active');
     visibleOn.classList.remove('visible');
   }
    // selectedLanguages.length === 0? visibleOn.disabled='true':visibleOn.disabled='false';
 }
