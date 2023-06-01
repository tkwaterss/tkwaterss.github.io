//reference site https://brittanychiang.com/

const views = {
    "home": `
        <section id="home-section" class="section">
            <section id="home-left">
                <div id="introduction">
                    <h4>Hi, my name is,</h4>
                    <h1>Tobin Waters.</h1>
                    <p>I am a full-stack React / Node.js developer based in Salt Lake City with a passion for building functional business applications.</p>
                </div>
                <button onclick="viewProjects()" id="projects-btn">Check out my projects!</button>
            </section>
            <section id="home-right">
                <a href="https://www.linkedin.com/in/tobinkwaters/" target="_blank"><img class="social" src="images/linkedinLogo.png"></a>
                <a href="https://github.com/tkwaterss" target="_blank"><img class="social" src="images/githubLogo.png"></a>
            </section>
        </section>
    `,
    "about": `
        <section id="about-section" class="section">
            <section id="about-left">
                <section id="about-me">
                    <h4>About Me</h4><br>
                    <p class="about-me">Hello, my name is Tobin and I am a full-stack React/Node developer based in Salt Lake City. I am passionate about problem-solving and constantly strive to expand my skill set to find the most effective solutions. My professional experience has exposed me to a wide range of problem-solving tactics, giving me a unique perspective for approaching problems. I enjoy applying this passion towards building functional business applications while adhering to the latest industry standards and best practices.</p><br>
                    <p class="about-me">In addition to my work in development, I enjoy exploring the mountains. I live in Salt Lake City, which provides some of the best outdoor access in the world. Most afternoons, I can be found rock climbing, mountain biking, or hiking in the Wasatch Mountains. On weekends, I often explore the beautiful sandstone landscape of the southern Utah desert.</p><br>
                </section>
                <h5>My Skills</h5><br>
                <section id="skills-section">
                    <div class="skills-div">
                        <ul class="tech-skills">
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Node.js</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                    <div class="skills-div">
                        <ul class="tech-skills">
                            <li>Axios</li>
                            <li>Express</li>
                            <li>PostgreSQL</li>
                            <li>Sequelize</li>
                            <li>Heroku</li>
                            <li>AWS</li>
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
            <div id="project-divider"></div>
            <section class="project">
                <section id="projects-left">
                    <a
                    target="_blank"
                    href="https://bicycle-bandits.herokuapp.com/"
                    alt="screenshot of Bike Bandits"
                    >
                    <img
                        id="bike-bandits-scrnshot"
                        src="./images/Screenshot 2023-06-01 125426.png"
                    />
                    </a>
                </section>
                <section id="projects-right">
                    <h3>Bicycle Bandits</h3>
                    <div id="project-links-container">
                    <h5>
                        <a target="_blank" href="https://youtu.be/Rw1oUMVaRDo"
                        >Watch a Demo</a
                        >
                    </h5>
                    <h5>
                        <a target="_blank" href="https://bicycle-bandits.herokuapp.com/"
                        >Visit the App</a
                        >
                    </h5>
                    <h5>
                        <a
                        target="_blank"
                        href="https://github.com/tkwaterss/Bicycle_Bandits"
                        >See the Code</a
                        >
                    </h5>
                    </div>
                    <p>
                    A bicycle shop management app combinging services for both employees and customers. The app provides service ticket management for employees as well as online shopping and service transparency for customers. This app took lessons learned from developing Cycle Mate and improved upon those elements as well as adding numerous additionaly features.
                    </p>
                    <ol class="project-skills">
                    <li>React</li>
                    <li>Javascript</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>Sequelize</li>
                    </ol>
                </section>
            </section>
        <div id="project-divider"></div>
        <section class="project">
            <section id="projects-right-alt">
                <h3>Cycle Mate</h3>
                <div id="project-links-container">
                    <h5>
                    <a
                        target="_blank"
                        href="https://github.com/tkwaterss/Cycle_Mate"
                        >See the Code</a
                    >
                    </h5>
                </div>
                <p>
                    Cycle Mate is a service tracking app. This app is designed to help a bike shop manage service tickets efficiently. Tickets can be viewed, created, updated, and deleted on a user friendly platform.
                </p>
                <ol class="project-skills">
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>PostgreSQL</li>
                    <li>Axios</li>
                    <li>Express</li>
                </ol>
            </section>
            <section id="projects-left">
                <a
                    target="_blank"
                    href="https://github.com/tkwaterss/Cycle_Mate"
                    alt="Screenshot of Cycle Mate"
                >
                <img
                    id="bike-bandits-scrnshot"
                    src="./images/bike-bandits-screenshot.png"
                />
                </a>
            </section>
        </section>
        <div id="project-divider"></div>
        </section>
        </section>
    `,
    "contact" : `
        <section id="contact-section" class="section">
            <section id="contact-left">
                <h2>Get In Touch!</h2>
                <p>I am actively searching for new employment opportunities. Feel free to reach me through email or the links below.</p>
            </section>
            <h5>tkwaterss@gmail.com</h5>
            <section id="contact-right">
                <a href="https://www.linkedin.com/in/tobinkwaters/" target="_blank"><img class="social" src="images/linkedinLogo.png"></a>
                <a href="https://github.com/tkwaterss" target="_blank"><img class="social" src="images/githubLogo.png"></a>
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