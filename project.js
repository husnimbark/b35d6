let projects = [];

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

// INPUT DATA
function addProject() {
  let title = document.getElementById('input-project-name').value;
  let start = new Date(document.getElementById('input-start-date').value);
  let end = new Date(document.getElementById('input-end-date').value);
  let description = document.getElementById('input-description').value;
  let html = document.getElementById('html').checked;
  let css = document.getElementById('css').checked;
  let javascript = document.getElementById('javascript').checked;
  let react = document.getElementById('react').checked;
  let image = document.getElementById('input-project-image').files[0];
  let duration = difference(start, end);
  let date = `${start.getDate()} ${month[start.getMonth()]} ${start.getFullYear()} - ${end.getDate()} ${month[end.getMonth()]} ${end.getFullYear()}`;

  console.log(start)
  console.log(end)

  console.log(projects)

  image = URL.createObjectURL(image);

  if (html == true) {
    html = 'assets/html.png';
  } else {
    html = '';
  }

  if (css == true) {
    css = 'assets/css.png';
  } else {
    css = '';
  }

  if (javascript == true) {
    javascript = 'assets/javascript.png';
  } else {
    javascript = '';
  }

  if (react == true) {
    react = 'assets/react.png';
  } else {
    react = '';
  }

let project = {
    title: title,
    start: start,
    end: end,
    description: description,
    duration:duration<30 ? duration+" Hari" : parseInt(duration/30)+" Bulan",
    html: html,
    css: css,
    javascript: javascript,
    react: react,
    image: image,
    author: 'Husni Mubarak',
    postedAt: new Date(),
  };

  projects.push(project);

  renderProjects();

  
}

// RENDER DISPLAY TO WEB PAGE
function renderProjects() {
    let projectContainer = document.getElementById('contents');
  
    projectContainer.innerHTML = '';
  
    projects.forEach((data) => {
      projectContainer.innerHTML += `<div class="col p-4">
      <div class="card h-100">
        <a href="project-detail.html" target="_blank" type"button" onclick="${renderProjectDetail()}">
          <img src="${data.image}" class="card-img-top" style="padding: 10px 10px 10px 10px;" alt="..."></a>
          <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
            <p class="card-text">Durasi : ${data.duration}</p>
            <p class="card-text" style="height: 75px; overflow: hidden; text-align: justify; text-overflow: ellipsis;">${data.description}</p>
          </div>
          
          <div class="card-content" style="padding-left: 15px">
            <i><img src="${data.html}" alt=""></i>
            <i><img src="${data.css}" alt=""></i>
            <i><img src="${data.javascript}" alt=""></i>
            <i><img src="${data.react}" alt=""></i>
          </div>
          <div class="card-button text-center mt-5 align-self-center" style="margin-bottom: 20px; border-radius: 10px;" >
            <a href="" class="btn btn-dark btn-sm px-5 py-1 mx-2" type="button">Edit</button> </a>
            <button class="btn btn-dark btn-sm px-5 py-1 mx-2" type="button" onclick="">Delete</button>
          </div>
          <div class="card-text" style="text-align: right; color: grey; margin-right: 20px; margin-bottom: 10px">${getDistanceTime(
            data.postedAt
          )}</div>
       </div>
       </div>`;
    });
}

// RENDER PROJECT-DETAIL
function renderProjectDetail() {
  let projectDetail = document.getElementById('detail')

  projects.forEach((data) => {
  projectDetail = `<div><h2 style="text-align: center; padding-bottom: 70px;">${data.title}</h2>   
  </div>
  
    <div class="card-body d-flex flex-row" style="margin:auto; text-align: justify;">
        <div class="card-img"><img src="assets/1.webp">
        </div>
          <div class="col-6 lh-10" style="margin-left: 40px;">
              <h5 class="ca">Duration</h5>
              <li style="list-style: none;"><i><img src="assets/calendar.png" alt=""></i>   ${data.start} - ${data.end}</li>
              <li style="list-style: none;"><i><img src="assets/clock.png" alt=""></i>   ${data.duration}</li>
              <br><br>
              <h5>Technologies</h5>
              <li style="list-style: none;"><i><img src="assets/html.png" alt=""></i>   HTML</li>
              <li style="list-style: none;"><i><img src="assets/css.png" alt=""></i>   CSS</li>
              <li style="list-style: none;"><i><img src="assets/javascript.png" alt=""></i>   JavaSript</li>
              <li style="list-style: none;"><i><img src="assets/react.png" alt=""></i>   React</li>
          </div>

        </div>

        <div class="card-body" style="padding-top: 40px; text-align: justify; text-indent: 50px; font-size: large;">
            <p class="lh-10">Photo Editors are in charge of coordinating photo assignments by selecting, editing, and positioning photos, and publishing images in print publications and on the web. Photo editing is a dynamic job that requires excellent visual, communication, and organizational skills, as well as a strong adherence to deadlines. Photo editors are responsible for the look of final photographs to be published in a book or periodical or that appear digitally. Some photo editors also work with video. They make photo and video assignments, judge and alter pictures and videos to meet assignment needs, and make sure all deadlines are met. They work for publishers, advertising agencies, photo and video stock agencies, greeting card companies, and any employer that relies heavily on visual images to sell its products or services. Photo editors comprise a small percentage of the 50,620 photographers employed in the United States. Photo editors are also known as picture editors, multimedia editors, and directors of photography.
            </p>
        </div>`;
  });
}

// DATE
function getFullTime(time) {
  const date = time.getDate();
  const monthIndex = time.getMonth();
  const year = time.getFullYear();
  let hour = time.getHours();
  let minute = time.getMinutes();  

  if (hour < 10 ){
    hour = '0' + hour;
  }

  if (minute < 10){
    minute = '0' + minute;
  }


  const fullTime = `${date} ${month[monthIndex]} ${year} ${hour}:${minute} WIB`;

  return fullTime;
}

getFullTime(new Date());

// DISTANCE TIME
function getDistanceTime(time) {
  const timeNow = new Date();
  const timePost = new Date(time);

  const distance = timeNow - timePost;

  const milisecondsInDay = 1000 * 60 * 60 * 24;
  const distanceDay = Math.floor(distance / milisecondsInDay);

      if (distanceDay >= 1) {
        return `${distanceDay} days ago`;
      } else {
        const milisecondsInHour = 1000 * 60 * 60;
        const distanceHour = Math.floor(distance / milisecondsInHour);

        if (distanceHour >= 1) {
          return `${distanceHour} hours ago`;
        } else {
          const milisecondsInMinute = 1000 * 60;
          const distanceMinute = Math.floor(distance / milisecondsInMinute);

          if (distanceMinute >= 1) {
            return `${distanceMinute} minutes ago`;
          } else {
            const milisecondsInSeconds = 1000;
            const distanceSeconds = Math.floor(distance / milisecondsInSeconds);
            return `${distanceSeconds} seconds ago`;
          }
        }
      }
}

// DURATION TIME
function difference(date1, date2) {  
  const date1utc = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const date2utc = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    day = 1000*60*60*24;
  return(date2utc - date1utc)/day
}

// setInterval(() => {
//   renderProjects();
// }, 1000);

// setTimeout(() => {
//   alert('Selamat Pagi 👨🏻‍💻');
// }, 5000);