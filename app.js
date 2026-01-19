const url = window.location.href;
const movie = url.split("?")[1] || "Jawan";
const today = new Date();
const currentDate = today.getDate();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

const playBtn = document.querySelector(".play"); // Select the play button div
const playIcon = document.getElementById("play");
const video = document.querySelector("video");
let selectedSeats = [];
let selectedTime = "12:00";
let selectedDate = currentDate;

    playBtn.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        video.style.display = "block";
        playIcon.classList.replace("bi-play-fill", "bi-pause");
    } else {
        video.pause();
        video.style.display = "none";
        playIcon.classList.replace("bi-pause", "bi-play-fill");
    }
    });

const pvr = [
  {
    pvr: "PVR iCUBE",
    movie: "Gangubai",
    loc: "Dwarka Sector 14, New Delhi",
    audi: 1,
    type: "IMAX",
    series: ["A", "B", "C", "D", "E", "F", "G", "H"],
    seat: 24,
    a: [2, 6, 23, 7, 16, 17, 18, 19, 13, 12],
    b: [1, 2, 20, 23, 8, 11, 18, 19, 13, 12],
    c: [5, 6, 15, 17, 18],
    d: [2, 7, 8, 17, 18],
    e: [5, 16, 15, 23, 22],
    f: [1, 2, 11, 12, 19],
    g: [8, 5],
    h: [],
    price: [150, 150, 200, 200, 200, 200, 250, 250],
    date: currentDate,
    img: "img/gangubai.jpg",
    video: "video/Gangubai Kathiawadi.mp4",
    background: "img/bg_gangubai.jpg",
    director: "Director's Name",
    cast: "Cast 1, Cast 2, Cast 3"
  },
  {
    pvr: "PVR iCUBE",
    movie: "Brahmastra",
    loc: "Dwarka Sector 14, New Delhi",
    audi: 2,
    type: "IMAX",
    series: ["A", "B", "C", "D", "E", "F", "G", "H"],
    seat: 24,
    a: [3, 8, 21, 22, 9, 13, 16, 18, 20, 12],
    b: [5, 6, 8, 19, 23, 13, 19, 21, 12, 11],
    c: [1, 3, 13, 15, 22],
    d: [3, 9, 10, 20, 23],
    e: [7, 12, 9, 21, 20],
    f: [6, 8, 11, 12, 19],
    g: [8, 5, 12, 13, 14],
    h: [],
    price: [150, 150, 200, 200, 200, 200, 250, 250],
    date: currentDate,
    img: "img/brahmastra.jpg",
    video: "video/Brahmastra.mp4",
    background: "img/bg_brahmastra.jpg",
    director: "Director's Name",
    cast: "Cast 1, Cast 2, Cast 3"
  },
  {
    pvr: "PVR iCUBE",
    movie: "Jawan",
    loc: "Dwarka Sector 14, New Delhi",
    audi: 1,
    type: "IMAX",
    series: ["A", "B", "C", "D", "E", "F", "G", "H"],
    seat: 24,
    a: [2, 6, 23, 7, 16, 17, 18, 19, 13, 12],
    b: [1, 2, 20, 23, 8, 11, 18, 19, 13, 12],
    c: [5, 6, 15, 17, 18],
    d: [2, 7, 8, 17, 18],
    e: [5, 16, 15, 23, 22],
    f: [1, 2, 11, 12, 19],
    g: [8, 5],
    h: [],
    price: [150, 150, 200, 200, 200, 200, 250, 250],
    date: currentDate,
    img: "img/jawan.jpg",
    video: "video/Jawan.mp4",
    background: "img/bg_jawan.jpg",
    director: "Director's Name",
    cast: "Cast 1, Cast 2, Cast 3"
  },
  {
    pvr: "PVR iCUBE",
    movie: "Bhediya",
    loc: "Dwarka Sector 14, New Delhi",
    audi: 2,
    type: "IMAX",
    series: ["A", "B", "C", "D", "E", "F", "G", "H"],
    seat: 24,
    a: [3, 8, 21, 22, 9, 13, 16, 18, 20, 12],
    b: [5, 6, 8, 19, 23, 13, 19, 21, 12, 11],
    c: [1, 3, 13, 15, 22],
    d: [3, 9, 10, 20, 23],
    e: [7, 12, 9, 21, 20],
    f: [6, 8, 11, 12, 19],
    g: [8, 5, 12, 13, 14],
    h: [],
    price: [150, 150, 200, 200, 200, 200, 250, 250],
    date: currentDate,
    img: "img/bhediya.jpg",
    video: "video/Bhediya.mp4",
    background: "img/bg_bhediya.jpg",
    director: "Director's Name",
    cast: "Cast 1, Cast 2, Cast 3"
  },
  {
    pvr: "PVR iCUBE",
    movie: "Pathaan",
    loc: "Dwarka Sector 14, New Delhi",
    audi: 1,
    type: "IMAX",
    series: ["A", "B", "C", "D", "E", "F", "G", "H"],
    seat: 24,
    a: [2, 6, 23, 7, 16, 17, 18, 19, 13, 12],
    b: [1, 2, 20, 23, 8, 11, 18, 19, 13, 12],
    c: [5, 6, 15, 17, 18],
    d: [2, 7, 8, 17, 18],
    e: [5, 16, 15, 23, 22],
    f: [1, 2, 11, 12, 19],
    g: [8, 5],
    h: [],
    price: [150, 150, 200, 200, 200, 200, 250, 250],
    date: currentDate,
    img: "img/pathaan.jpg",
    video: "video/Pathaan.mp4",
    background: "img/bg_pathaan.jpg",
    director: "Director's Name",
    cast: "Cast 1, Cast 2, Cast 3"
  },
  {
    pvr: "PVR iCUBE",
    movie: "JugJuggJeeyo",
    loc: "Dwarka Sector 14, New Delhi",
    audi: 2,
    type: "IMAX",
    series: ["A", "B", "C", "D", "E", "F", "G", "H"],
    seat: 24,
    a: [3, 8, 21, 22, 9, 13, 16, 18, 20, 12],
    b: [5, 6, 8, 19, 23, 13, 19, 21, 12, 11],
    c: [1, 3, 13, 15, 22],
    d: [3, 9, 10, 20, 23],
    e: [7, 12, 9, 21, 20],
    f: [6, 8, 11, 12, 19],
    g: [8, 5, 12, 13, 14],
    h: [],
    price: [150, 150, 200, 200, 200, 200, 250, 250],
    date: currentDate,
    img: "img/jjj.jpg",
    video: "video/jjj.mp4",
    background: "img/bg_jjj.jpg",
    director: "Director's Name",
    cast: "Cast 1, Cast 2, Cast 3"
  }
];

function generateDates() {
  const dateList = document.getElementById("date_list");
  dateList.innerHTML = "";
  for (let i = 1; i < 8; i++) {
    const date = new Date(currentYear, currentMonth, currentDate + i);
    const day = date.getDate();
    const dayName = date.toLocaleString("default", { weekday: "short" });
    const li = document.createElement("li");
    li.className = "flex-grow-1 text-center";
    li.innerHTML = `<h6>${dayName}</h6><h6 class="date_point">${day}</h6>`;
    if (i === 1) li.querySelector(".date_point").classList.add("h6_active");
    li.querySelector(".date_point").addEventListener("click", () => {
      document.querySelectorAll(".date_point").forEach(e => e.classList.remove("h6_active"));
      li.querySelector(".date_point").classList.add("h6_active");
      selectedDate = day;
      selectedSeats = [];
      loadMovie(day);
    });
    dateList.appendChild(li);
  }
}

function generateTimes() {
  const timeList = document.getElementById("time_list");
  document.querySelectorAll(".time_point").forEach(el => {
    if (el.getAttribute("data-time") === selectedTime) el.classList.add("h6_active");
    el.addEventListener("click", () => {
      document.querySelectorAll(".time_point").forEach(e => e.classList.remove("h6_active"));
      el.classList.add("h6_active");
      selectedTime = el.getAttribute("data-time");
      selectedSeats = [];
      loadMovie(selectedDate);
    });
  });
}

function addSeats(data) {
  const chair = document.getElementById("chair");
  chair.innerHTML = "";
  const { series, seat, price } = data;
  const leftGroup = 5;
  const rightGroup = 5;
  const centerGroup = seat - leftGroup - rightGroup;

  const columnLabels = document.createElement("div");
  columnLabels.className = "column-labels d-flex justify-content-center flex-wrap";
  for (let i = 1; i <= seat; i++) {
    const label = document.createElement("span");
    label.textContent = i;
    label.className = "col-auto";
    if (i === 5 || i === 19) label.style.marginRight = "50px";
    columnLabels.appendChild(label);
  }
  chair.appendChild(columnLabels);

  series.forEach((row, i) => {
    const rowDiv = document.createElement("div");
    rowDiv.className = "seat-row d-flex align-items-center justify-content-center flex-wrap";
    rowDiv.setAttribute("data-row", row);
    if (i < 2) rowDiv.classList.add("top-group");
    else if (i < 6) rowDiv.classList.add("middle-group");
    else rowDiv.classList.add("bottom-group");
    rowDiv.innerHTML = `<span class="me-2">${row}</span>`;
    const booked = data[row.toLowerCase()] || [];

    const leftGroupDiv = document.createElement("div");
    leftGroupDiv.className = "seat-group d-flex flex-wrap";
    for (let j = 0; j < leftGroup; j++) {
      const seatEl = createSeat(row, j, price[i], booked);
      leftGroupDiv.appendChild(seatEl);
    }
    rowDiv.appendChild(leftGroupDiv);

    rowDiv.appendChild(document.createElement("div")).className = "aisle mx-2";

    const centerGroupDiv = document.createElement("div");
    centerGroupDiv.className = "seat-group d-flex flex-wrap";
    for (let j = leftGroup; j < seat - rightGroup; j++) {
      const seatEl = createSeat(row, j, price[i], booked);
      centerGroupDiv.appendChild(seatEl);
    }
    rowDiv.appendChild(centerGroupDiv);

    rowDiv.appendChild(document.createElement("div")).className = "aisle mx-2";

    const rightGroupDiv = document.createElement("div");
    rightGroupDiv.className = "seat-group d-flex flex-wrap";
    for (let j = seat - rightGroup; j < seat; j++) {
      const seatEl = createSeat(row, j, price[i], booked);
      rightGroupDiv.appendChild(seatEl);
    }
    rowDiv.appendChild(rightGroupDiv);

    rowDiv.innerHTML += `<span class="ms-2">${row}</span>`;
    chair.appendChild(rowDiv);
  });

  document.querySelectorAll(".seat:not(.booked)").forEach(seat => {
    seat.addEventListener("click", () => {
      const row = seat.getAttribute("data-row");
      const seatNum = seat.getAttribute("data-seat");
      const price = seat.textContent;
      const seatObj = { row, seat: seatNum, price };

      if (seat.classList.contains("selected")) {
        seat.classList.remove("selected");
        selectedSeats = selectedSeats.filter(s => s.row !== row || s.seat !== seatNum);
      } else {
        seat.classList.add("selected");
        selectedSeats.push(seatObj);
      }
      updateBookButton();
    });
  });

  document.querySelectorAll(".seat.selected").forEach(seat => {
    const row = seat.getAttribute("data-row");
    const seatNum = seat.getAttribute("data-seat");
    if (!selectedSeats.some(s => s.row === row && s.seat === seatNum)) {
      seat.classList.remove("selected");
    }
  });
}

function createSeat(row, seatNum, price, booked) {
  const seatEl = document.createElement("div");
  seatEl.className = "seat";
  if (booked.includes(seatNum)) seatEl.classList.add("booked");
  seatEl.setAttribute("data-row", row);
  seatEl.setAttribute("data-seat", seatNum+1);
  seatEl.textContent = price;
  return seatEl;
}

function updateBookButton() {
  const bookBtn = document.getElementById("book_ticket");
  if (bookBtn) {
    bookBtn.style.display = selectedSeats.length > 0 ? "block" : "none";
  } else {
    console.error("Book button not found in DOM");
  }
}

function loadMovie(date = currentDate) {
  const data = pvr.find(obj => obj.movie === movie && obj.date === date);
  if (data) {
    document.getElementById("title").textContent = data.movie;
    document.getElementById("poster").src = data.img;
    document.getElementById("video").src = data.video;
    document.getElementById("director").textContent = data.director;
    document.getElementById("cast").textContent = data.cast;
    document.head.appendChild(document.createElement("style")).innerHTML = `.book .right::before { background: url(${data.background}) no-repeat center -30px/cover; }`;
    localStorage.setItem('background', data.background); // Store background for ticket
    addSeats(data);
  } else {
    console.log(`No movie data found for date ${date}. Loading default seats for currentDate.`);
    const fallbackData = pvr.find(obj => obj.movie === movie && obj.date === currentDate);
    if (fallbackData) {
      document.getElementById("director").textContent = fallbackData.director;
      document.getElementById("cast").textContent = fallbackData.cast;
      localStorage.setItem('background', fallbackData.background);
      addSeats(fallbackData);
    }
  }
}

generateDates();
generateTimes();
loadMovie();

function initializeBookButton() {
  const bookBtn = document.getElementById("book_ticket");
  if (bookBtn) {
    bookBtn.removeEventListener("click", handleBookClick);
    bookBtn.addEventListener("click", handleBookClick);
  } else {
    console.error("Book button not found in DOM during initialization");
    setTimeout(initializeBookButton, 500);
  }
}

function handleBookClick() {
  const activeDateElement = document.querySelector(".date_point.h6_active");
  if (!activeDateElement) {
    console.error("No active date selected");
    alert("Please select a date before booking.");
    return;
  }

  if (selectedSeats.length > 0) {
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
    localStorage.setItem("movie", movie);
    localStorage.setItem("date", activeDateElement.textContent);
    localStorage.setItem("time", selectedTime);
    window.location.href = "payment.html";
  } else {
    console.log("No seats selected");
    alert("Please select at least one seat before booking.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initializeBookButton();
}); 