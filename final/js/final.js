// Load JSON data and render projects
fetch('final/data/final.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('projects-container');
    data.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.classList.add('project-card');
      projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p>Technologies: ${project.technologies.join(', ')}</p>
        <a href="${project.link}">View Project</a>
      `;
      container.appendChild(projectCard);
    });
  });



