document.addEventListener("DOMContentLoaded", () => {

    const h1 = document.createElement("h1")
    document.body.appendChild(h1)
    h1.id = "h1"
    h1.className = "name"

    const mainContainer = document.createElement("div");
    mainContainer.className = "main";
    document.body.appendChild(mainContainer);

    const pageLinks = document.createElement("div")
    mainContainer.appendChild(pageLinks)
    pageLinks.className = "my-details"

    const aboutMe = document.createElement("img");
    pageLinks.appendChild(aboutMe);
    aboutMe.className = "aboutMe"
    aboutMe.src = "resources/about_me.png";
    let aboutMeStatus = "not clicked"
    aboutMe.addEventListener("mouseover", () => {
        aboutMe.src = "resources/about_me2.png";
    });
    aboutMe.addEventListener("mouseleave", () => {
        if (aboutMeStatus === "not clicked") {
            aboutMe.src = "resources/about_me.png";
        }
    });

    const projects = document.createElement("img");
    pageLinks.appendChild(projects);
    projects.className = "projects";
    projects.src = "resources/projects.png";
    let projectsStatus = "not clicked"
    projects.addEventListener("mouseover", () => {
        projects.src = "resources/projects2.png";
    });
    projects.addEventListener("mouseleave", () => {
        if (projectsStatus === "not clicked") {
            projects.src = "resources/projects.png";
        }
    });

    const contact = document.createElement("img");
    pageLinks.appendChild(contact);
    contact.className = "contact"
    contact.src = "resources/contact.png";
    let contactStatus = "not clicked"
    contact.addEventListener("mouseover", () => {
        contact.src = "resources/contact2.png";
    });
    contact.addEventListener("mouseleave", () => {
        if (contactStatus === "not clicked") {
            contact.src = "resources/contact.png";
        }
    });

    const currentEvent = document.createElement("div");
    currentEvent.className = "currentEvent";
    mainContainer.appendChild(currentEvent);

    aboutMe.addEventListener("click", () => {
        aboutMeStatus = "clicked"
        projectsStatus = "not clicked";
        contactStatus = "not clicked";
        aboutMe.src = "resources/about_me2.png";
        projects.src = "resources/projects.png";
        contact.src = "resources/contact.png";
        currentEvent.className = "bio";
        currentEvent.innerHTML = "<div>Vivian is a multifaceted individual whose " +
        "insatiable curiosity has fueled her lifelong journey as a learner and " +
        "problem solver. From a young age, she found herself drawn to the intricacies " +
        "of the world, exploring subjects ranging from science and philosophy to " +
        "occult knowledge. It was this voracious appetite for understanding that " +
        "led her to delve into coding and artificial intelligence, fascinated by " +
        "their potential to unravel complex problems and shape the future. Her passion " +
        "for these fields intertwines seamlessly with her love for music and art, " +
        "where she finds solace and inspiration. Vivian's creative pursuits extend to " +
        "her specialization in crafting images infused with sacred geometry and occult " +
        "symbolism, a reflection of her diverse interests and keen eye for detail.</div>" +
        "<p></p>" +
        "<div>Beyond her intellectual pursuits, Vivian finds joy in simple pleasures, " +
        "such as cooking delicious vegetarian meals and nurturing her love for animals, " +
        "particularly her beloved shih tzus. Her connection to nature extends to her " +
        "enthusiasm for gardening and permaculture, finding fulfillment in the symbiotic " +
        "relationship between humans and the environment. As a talented musician proficient " +
        "in both piano and guitar, she finds harmony in expressing herself through music, " +
        "weaving melodies that resonate with her soul. Vivian's diverse skill set and " +
        "passions converge in her aspiration to work as a software engineer, where she " +
        "hopes to leverage her expertise while staying true to her interests and values. " +
        "With her unique blend of creativity, intellect, and compassion, Vivian is poised " +
        "to make a meaningful impact in any endeavor she undertakes.</div>" +
        "<p></p>"
        currentEvent.scrollTo(0, 0);
        const closeBtn = document.createElement("button");
        closeBtn.innerText = "close window";
        currentEvent.appendChild(closeBtn);
        closeBtn.addEventListener("click", () => {
            aboutMeStatus = "not clicked";
            aboutMe.src = "resources/about_me.png";
            currentEvent.className = "currentEvent";
            currentEvent.innerHTML = " ";
        });
    });

    projects.addEventListener("click", () => {
        projectsStatus = "clicked";
        aboutMeStatus = "not clicked";
        contactStatus = "not clicked";
        projects.src = "resources/projects2.png";
        aboutMe.src = "resources/about_me.png";
        contact.src = "resources/contact.png";
        console.log("Projects: ", currentEvent);
        currentEvent.className = "projectLinks";
        console.log("Projects: ", currentEvent);
        currentEvent.innerHTML = "<a class='link' href='file://wsl.localhost/Ubuntu/home/vivcolvmn/App%20Academy/Aug%20Cohort/week14/Netflix_project/Netflix_Clone.html'>Netflix Wireframe (HTML/CSS Only)</a>" +
        "<p></p>" +
        "<a class='link' href='file://wsl.localhost/Ubuntu/home/vivcolvmn/App%20Academy/Sep%20Cohort/week17/aa09-catsagram-day-1/public/index.html'>Catstagram</a>" +
        "<p></p>" +
        "<a class='link' href='https://tic-tac-toe-project-pz0g.onrender.com/'>Tic-Tac-Toe</a>" +
        "<p></p>";
        const closeBtn = document.createElement("button");
        closeBtn.innerText = "close window";
        currentEvent.appendChild(closeBtn);
        closeBtn.addEventListener("click", () => {
            projectsStatus = "not clicked";
            projects.src = "resources/projects.png";
            currentEvent.className = "currentEvent";
            currentEvent.innerHTML = " ";
        });
    });

    contact.addEventListener("click", () => {
        contactStatus = "clicked";
        projectsStatus = "not clicked";
        aboutMeStatus= "not clicked";
        contact.src = "resources/contact2.png";
        aboutMe.src = "resources/about_me.png";
        projects.src = "resources/projects.png";
        console.log("Contact: ", currentEvent);
        currentEvent.className = "contactInfo";
        console.log("Contact: ", currentEvent);
        currentEvent.innerHTML = "<a class='link' href='mailto:vivcolvmn@gmail.com'>E-mail</a>" +
        "<p></p>" +
        "<a class='link' href='https://github.com/vivcolvmn'>Github</a>" +
        "<p></p>" +
        "<a class='link' href='https://discord.com/channels/vthcolvmn'>Discord</a>" +
        "<p></p>";
        const closeBtn = document.createElement("button");
        closeBtn.innerText = "close window";
        currentEvent.appendChild(closeBtn);
        closeBtn.addEventListener("click", () => {
            contactStatus = "not clicked";
            contact.src = "resources/contact.png";
            currentEvent.className = "currentEvent";
            currentEvent.innerHTML = " ";
        });
    });

    const playlist = document.createElement("div");
    mainContainer.appendChild(playlist);
    playlist.className = "playlist"
    playlist.innerHTML = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4mTnn7lwcW8gOcO69JsJQj?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`

})
