const views = {
    "home": `
        <section id="home-section" class="section">
            <section id="home-left">
                <div id="introduction">
                    <h4>Hi, my name is,</h4>
                    <h1>Tobin Waters.</h1>
                    <p>I am a full stack developer specializing in React and Javascript. I am interested in building functional business focused applications.</p>
                </div>
                <button onclick="viewProjects()" id="projects-btn">Check out my projects!</button>
            </section>
            <section id="home-right">
                <a href="https://www.linkedin.com/in/tobinkwaters/" target="_blank"><img class="social" src="images/computer-icons-linkedin-logo-linkedin-white-f64d35e9af265edf5af39fb44e00d2b7.png"></a>
                <a href="https://github.com/tkwaterss" target="_blank"><img class="social" src="images/computer-icons-download-github-clip-art-github-icon-f6a1ed148786279bcd1d9dbffc0432e3.png"></a>
            </section>
        </section>
    `,
    "about": `
        <section id="about-section" class="section">
            <section id="about-left">
                <section id="about-me">
                    <h4>About Me</h4><br>
                    <p class="about-me">Hello, my name is Tobin and I enjoy building apps with a purpose. I am early on in my career but have found myself drawn towards building business ready applications. My first project was a bike shop service management app. It is not quite business ready yet, but I plan to fix that as I continue to learn. I am excited to build more functional apps to test my skills and eventually provide value to a business.</p><br>
                    <p class="about-me">Outside of learning to code I love to get into the mountains. I live in Salt Lake City and have some of the best outdoors access in the world. I spend most of my afternoons rock-climbing, mountain biking, or hiking in the Wasatch Mountains. I often spend my weekends down in the desert exploring an amazing sandstone landscape.</p><br>
                </section>
                <h5>My Skills</h5><br>
                <section id="skills-section">
                    <div class="skills-div">
                        <ul class="tech-skills">
                            <li>Javascript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>
                    <div class="skills-div">
                        <ul class="tech-skills">
                            <li>Axios</li>
                            <li>Express</li>
                            <li>Sequelize</li>
                            <li>AWS EC2</li>
                        </ul>
                    </div>
                    <div class="skills-div">
                        <ul id="soft-skills">
                            <li>Communication</li>
                            <li>Problem Solving</li>
                            <li>Trouble Shooting</li>
                            <li>Collaboration</li>
                            <li>Driven</li>
                        </ul>
                    </div>
                </section>
            </section>
            <section id="about-right">
                <img id="head-shot" src="./images/Head Shot.jpg">
            </section>
        </section>
    `,
    "projects": `
        <section id="projects-section" class="section">
            <h2>My Projects</h2>
            <section class="project">
                <section id="projects-left">
                    <img id="bike-bandits-scrnshot" src="./images/bike-bandits-screenshot.png">
                </section>
                <section id="projects-right">
                    <h3>Bike Bandits</h3>
                    <h5><a target="_blank" href="http://3.144.89.35">Visit the App</a></h5>
                    <h5><a target="_blank" href="https://clipchamp.com/watch/Qu9ZitLVEID">Watch a Demo</a></h5>
                    <h5><a target="_blank" href="https://github.com/tkwaterss/Bike_Bandits">See the Code</a></h5>
                    <p>I built this app to help a bike shop manage service tickets. Tickets can be viewed, created, updated, and deleted on a user friendly platform.</p>
                    <ol class="project-skills">
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>PostgreSQL</li>
                        <li>Axios</li>
                        <li>Express</li>
                    </ol>
                </section>
            </section>
        </section>
    `,
    "contact" : `
        <section id="contact-section" class="section">
            <section id="contact-left">
                <h2>Get In Touch!</h2>
                <p>I am open to work and will be graduating from Dev Mountain in May of 2023. Feel free to reach me through email or any of the links below.</p>
            </section>
            <h5>tkwaterss@gmail.com</h5>
            <section id="contact-right">
                <a href="https://www.linkedin.com/in/tobinkwaters/" target="_blank"><img class="social" src="images/computer-icons-linkedin-logo-linkedin-white-f64d35e9af265edf5af39fb44e00d2b7.png"></a>
                <a href="https://github.com/tkwaterss" target="_blank"><img class="social" src="images/computer-icons-download-github-clip-art-github-icon-f6a1ed148786279bcd1d9dbffc0432e3.png"></a>
            </section>
        </section>
    `
}


const navLinks = document.querySelectorAll('a');
const main = document.querySelector('main');
const myProjectsBtn = document.getElementById('projects-btn');

console.log(navLinks);

const changeView = event => {
    let view = event.target.id
    main.innerHTML = views[view]
}
const viewProjects = () => {
    main.innerHTML = views['projects']
}

for(let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', changeView)

}
myProjectsBtn.addEventListener('click', viewProjects);