let form = document.getElementById("git-api-form");
let authorProfileContainer = document.querySelector(".autor-profile-container");
let githubRepos = document.querySelector(".github-repositories");

form.addEventListener('submit',function (e) {
  e.preventDefault();
  const userName = form.elements["username"].value;
  console.log(userName);
  // Get Github User Profile
  fetch(`https://api.github.com/users/${userName}`, { user: "code-with-mehedi" })
    .then((response) => response.json())
    .then((data) => {
      const authorCard = `
                <div class="the-heading">
                    <h2>Author Profile</h2>
                </div>
                <figure class="about-author">
                    <img src="${data.avatar_url}" alt="Author Photos" />
                    <figcaption class="story">
                        <h2>${data.name}</h2>
                        <p>${data.bio}</p>
                    </figcaption>
                </figure>
                <h2 class="title">Repositories by this author</h2>
            `;
      authorProfileContainer.innerHTML = authorCard;
    })
    .catch((error) => console.log(error));

  // Get Github User Repos
  fetch(`https://api.github.com/users/${userName}/repos?per_page=10`, {
    user: "code-with-mehedi",
  })
    .then((response) => response.json())
    .then((repos) => {
      console.log(repos);
      const repositories = repos.map((repo) => {
        return `<div class="media-man-files-wrapper media-man-file-list">
                <div class="file-thumb">
                    <div class="details">
                        <h4 class="title"> <a href="${repo.html_url}">Repo:${repo.name} </a></h4>
                        <p> Repo Description: ${repo.description}</p>
                        <span>Languages: ${repo.language}:</span>
                    </div>
                </div>
            </div>`;
      });
      githubRepos.innerHTML = repositories;
    })
    .catch((error) => console.log(error));

});

