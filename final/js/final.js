const projects = [
    {
        title: "Project 1",
        description: "This renders a basic web page and gives a little more information about me.",
        page: "wa/wa6/wa6.html",
        tags: ["HTML", "CSS"]
    },
    {
        title: "Project 2",
        description: "Description for project 2.",
        page: "wa/wa2.html",
        tags: ["JavaScript", "HTML"]
    },
    {
        title: "Project 3",
        description: "Description for project 3.",
        page: "wa/wa12/wa12.html",
        tags: ["CSS", "JavaScript"]
    }
];

const projectContainer = document.getElementById('project-container');

projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');

    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.page}" class="btn">View Project</a>
        <p><strong>Tags:</strong> ${project.tags.join(', ')}</p>
    `;

    projectContainer.appendChild(card);
});

