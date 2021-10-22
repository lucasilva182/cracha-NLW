const linksSocialMedias = {
   github: "lucasilva182",
   youtube: "lucassilva182",
   facebook: "lucas.silva18222",
   instagram: "lucasdasilva182",
   twitter: "lucasdasilva182"
}

function changeSocialMediasLinks() {
  for (li of socialLinks.children) { //Busca os filhos da UL SocialLinks e os coloca na variavel li
    const social = li.getAttribute('class') // Pega o atributo CLASS de cada li, e os coloca na variavel SOCIAL

    li.children[0].href = `https://${social}.com/${linksSocialMedias[social]}` // Dentro da LI irá procurar um HREF no objeto de posição [0], ou seja, na tag A do HTML neste caso.

  }
}

changeSocialMediasLinks()


function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedias.github}`

  fetch(url)   
  .then(response => response.json()) 
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImg.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGithubProfileInfos()