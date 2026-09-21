function enterCircus() {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("grounds").classList.remove("hidden");
}

function openSection(section) {
  document.getElementById("grounds").classList.add("hidden");
  document.getElementById("section").classList.remove("hidden");

  const title = document.getElementById("sectionTitle");
  const content = document.getElementById("sectionContent");

  if (section === "tents") {
    title.textContent = "THE TENTS";

    content.innerHTML = `
      <p>🎪 <b>MAIN TENT</b></p>
      <p>The lights are on.</p>
      <p>There is nobody inside.</p>
      <p>At least... nobody you can see.</p>
    `;
  }

  if (section === "characters") {
    title.textContent = "CHARACTER FILES";

    content.innerHTML = `
      <p>FILE 001: UNKNOWN</p>
      <p>STATUS: ACTIVE</p>
      <p>LOCATION: UNKNOWN</p>
      <br>
      <p>Additional files are currently locked.</p>
    `;
  }

  if (section === "rules") {
    title.textContent = "CIRCUS RULES";

    content.innerHTML = `
      <p>RULE 01: Do not enter the main tent after midnight.</p>
      <p>RULE 02: If the lights turn cyan, leave.</p>
      <p>RULE 03: Never answer voices from empty tents.</p>
      <p>RULE 04: Do not trust the system.</p>
    `;
  }

  if (section === "secret") {
    title.textContent = "ACCESS REQUIRED";

    content.innerHTML = `
      <p>████████████████</p>
      <p>THIS FILE IS LOCKED.</p>
      <p>ACCESS CODE REQUIRED.</p>
      <button onclick="unlockSecret()">ENTER CODE</button>
    `;
  }
}

function unlockSecret() {
  const code = prompt("ENTER ACCESS CODE:");

  if (code && code.toLowerCase() === "starlight") {
    document.getElementById("sectionTitle").textContent = "SECRET FILE";

    document.getElementById("sectionContent").innerHTML = `
      <p style="color:#00ffff;">ACCESS GRANTED.</p>
      <p>You found something that wasn't meant to be here.</p>
      <p>FILE STATUS: █████████</p>
      <p style="color:#ff003c;">
        THE CIRCUS KNOWS YOU ARE HERE.
      </p>
    `;
  } else {
    document.getElementById("sectionContent").innerHTML = `
      <p style="color:#ff003c;">
        ACCESS DENIED.
      </p>
      <p>Nice try, visitor.</p>
    `;
  }
}

function goBack() {
  document.getElementById("section").classList.add("hidden");
  document.getElementById("grounds").classList.remove("hidden");
}
