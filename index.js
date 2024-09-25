document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = 'https://fedskillstest.coalitiontechnologies.workers.dev';

    // Encode credentials in Base64 (username:password)
    const username = 'coalition';
    const password = 'skills-test';
    const credentials = btoa(`${username}:${password}`); // Base64 encoding

    // Fetch the data with Basic Auth
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Authorization': `Basic ${credentials}` // Attach Basic Auth credentials
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("API Data:", data);; // Log data to ensure it's correct

        // Assuming the API returns an array of patients, find Jessica Taylor
        const jessica = data.find(patient => patient.name === "Jessica Taylor");
        if (jessica) {
            displayPatientData(jessica); // Display Jessica Taylor's data
        } else {
            console.error("Patient not found");
        }
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
});

function displayPatientData(patient) {
    const patientInfoDiv = document.getElementById("patient-data");
  
    // HTML structure for displaying patient info with icons
    patientInfoDiv.innerHTML = `
      <div class="flex items-center mb-4">
        <img src="${patient.profile_picture}" alt="${patient.name}'s Photo" class="w-20 h-20 rounded-full mr-4">
        <div>
          <h2 class="text-xl font-bold">${patient.name}</h2>
          <p class="text-gray-600">${patient.date_of_birth}</p>
        </div>
      </div>
      <div class="info-section">
        <div class="flex items-center mb-2">
          <img src={"Assets/FemaleIcon.svg" alt="Gender Icon" class="w-5 h-5 mr-2"}>
          <p>${patient.gender}</p>
        </div>
        <div class="flex items-center mb-2">
          <img src="Assets/PhoneIcon.svg" alt="Contact Icon" class="w-5 h-5 mr-2">
          <p>Contact Info: ${patient.contactInfo}</p>
        </div>
        <div class="flex items-center mb-2">
          <img src="Assets/PhoneIcon.svg" alt="Emergency Contact Icon" class="w-5 h-5 mr-2">
          <p>Emergency Contact: ${patient.emergencyContact}</p>
        </div>
        <div class="flex items-center mb-2">
          <img src="Assets/InsuranceIcon.svg" alt="Insurance Icon" class="w-5 h-5 mr-2">
          <p>Insurance Provider: ${patient.insuranceProvider}</p>
        </div>
      </div>
    `;
  
    // Initially hide the additional information if required
    const infoSection = document.querySelector('.info-section');
    const showAllButton = document.getElementById("show-all-btn");
  
    showAllButton.addEventListener("click", () => {
      if (infoSection.classList.contains("hidden")) {
        infoSection.classList.remove("hidden");
        showAllButton.textContent = "Show Less Information";
      } else {
        infoSection.classList.add("hidden");
        showAllButton.textContent = "Show All Information";
      }
    });
  }
  
