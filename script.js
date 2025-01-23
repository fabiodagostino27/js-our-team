const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

let teamContainer = document.getElementById("team-container");

for (i = 0; i < teamMembers.length; i++) {
  teamContainer.innerHTML += `                
    <div class="bg-dark text-white p-0" style="flex-basis: calc(100% / 3 - (20px * 2 / 3));">
      <div class="d-flex" style="height: 90px;">
        <figure class="h-100 m-0">
          <img class="h-100" src=${teamMembers[i].img} alt=${teamMembers[i].name}>
        </figure>
        <div class="py-2 ps-2">
            <h5 class="m-0 fw-bold">${teamMembers[i].name}</h5>
            <div>Designer</div>
            <a href="/">${teamMembers[i].email}</a>
        </div>
      </div>
    </div>`
}