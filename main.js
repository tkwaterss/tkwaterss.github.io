const views = {
    "home": `
        <section id="home" class="section">
            <section id="home-left">
                <div id="introduction">
                    <h4>Hi, my name is,</h4>
                    <h1>Tobin Waters.</h1>
                    <p>I am a full stack developer specializing in React and Javascript. I am focused on building functional business focused applications.</p>
                </div>
                <button id="projects-btn">Check out my projects!</button>
            </section>
            <section id="home-right">
                <img class="social" src="images/computer-icons-linkedin-logo-linkedin-white-f64d35e9af265edf5af39fb44e00d2b7.png">
                <img class="social" src="images/computer-icons-download-github-clip-art-github-icon-f6a1ed148786279bcd1d9dbffc0432e3.png">
                <img class="social" src="images/computer-icons-logo-photography-instagram-icon-instagram-8a27a2384d2f126ac027faac2621d745.png">
            </section>
        </section>
    `,
    "about": `
        <section id="about" class="section">
            <section id="about-left">
                
            </section>
            <section id="about-right">
                
            </section>
        </section>
    `,
    "projects": `
        <section id="projects" class="section">
            <h2>Projects</h2>
        </section>
    `,
    "contact" : `
        <section id="contact" class="section">
            <h2>Contact</h2>
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