let search = document.querySelector('#search')
let profileUrl = 'RafaelSdeS'
let nome = document.querySelector('#name')
let image = document.querySelector('img')
let details = document.querySelectorAll('.details p')
let bio = document.querySelector('#bio')
let followers = document.querySelector('#followers')
let following = document.querySelector('#following')
let publicRepos = document.querySelector('#publicRepos')
let local = document.querySelector('#local')

function handleSubmit(event){ 

    profileUrl = search.value

    url = `https://api.github.com/users/${profileUrl}`

    event.preventDefault()

    getData(url)
}


async function getData(url){

    const res = await fetch(url)
    let data = await res.json()

    nome.innerHTML = data.login
    image.src = data.avatar_url
    bio.innerHTML = data.bio
    followers.innerHTML = `Followers: ${data.followers}`
    following.innerHTML = `Following: ${data.following}`
    publicRepos.innerHTML = `Public Repos: ${data.public_repos}`
    local.innerHTML = `Location: ${data.location}`
} 

getData()

