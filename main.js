const links = {
  github: 'matheus-1200',
  youtube: 'channel/UCJnHzyLp-1bQWMnlRXuOW5A',
  facebook: 'matheus.nogueirasales',
  instagram: 'mathe_us1200',
  twitter: 'jakelinytec'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    //vai nos filhos do id referenciado e usa a quantidade de filhos como análise para o for
    //alert(li.getAttribute('class'))
    //alert(li.children[0].href) //pegar o filho na primeira posição --> li.children[0].href
    li.children[0].href = `https://${social}.com/${links[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name // {id}.textContent para pegar o texto daquele local
      userBio.textContent = data.bio
      userGithub.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()
