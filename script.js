function calculateAge() {
  const dobInput = document.getElementById("dob").value;
  const dobField = document.getElementById("dob");
  const result = document.getElementById("result");

  if (!dobInput) {
    result.innerHTML = "⛔ Please enter your date of birth.";
    dobField.style.border = "2px solid red";
    return;
  }

  dobField.style.border = "1px solid #ccc"; // reset border

  const birthDate = new Date(dobInput);
  const today = new Date();

  if (birthDate > today) {
    result.innerHTML = "⛔ Date of birth cannot be in the future.";
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const totalDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));

  // Fade in effect
  result.style.opacity = 0;
  setTimeout(() => {
    result.innerHTML = `
      🎉 You are <strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days old.<br>
      📅 That's a total of <strong>${totalDays}</strong> days!
    `;
    result.style.opacity = 1;
  }, 100);
}

function resetForm() {
  document.getElementById("dob").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("result").style.opacity = 0;
  document.getElementById("dob").style.border = "1px solid #ccc";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
