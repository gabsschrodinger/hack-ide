var url = null

const editor = ace.edit('editor')
editor.setTheme('ace/theme/dracula')
editor.getSession().setMode('ace/mode/html')

editor.setValue(`<html>
<head>
    <title>Minha Pagina</title>
    <style>
        .dev-img {
            width: 100%;
        }

        .projects-title {
            text-align: center;
        }

        .projects-list {
            text-align: center;
        }

        .skills {
            text-align: center;
        }

        .project-item {
            text-decoration: none;
        }
    </style>
</head>
<body>
    <h1>Hi there</h1>
    <img class="dev-img" src="https://i.imgur.com/AZHHJvV.png">
    <h3 class="projects-title">Projects:</h3>
    <p class="projects-list">
        <a class="project-item" href="https://snake-game-plum.vercel.app/" target="_blank">Snake Game</a><br>
        <a class="project-item" href="https://netflix-clone-steel-alpha.vercel.app/" target="_blank">Netflix Home Page</a><br>
        <a class="project-item" href="https://product-landing-page-pi.vercel.app/" target="_blank">Product Landing Page</a><br>
        <a class="project-item" href="https://instagram-login-page.vercel.app/" target="_blank">Instagram Login Page</a>
    </p>
    <br>
    <p class="skills">
        <code><img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></code>
        <code><img height="40" src="https://image.flaticon.com/icons/svg/226/226777.svg"></code>
        <code><img height="40" src="https://avatars0.githubusercontent.com/u/139426?s=200&v=4"></code>
        <code><img height="40" src="https://avatars0.githubusercontent.com/u/317776?s=200&v=4"></code>
        <code><img height="40" src="https://avatars1.githubusercontent.com/u/2918581?s=200&v=4"></code>
        <code><img height="40" src="https://raw.githubusercontent.com/devicons/devicon/2809b567852a4648062a2d3e7c1c531367458c0b/icons/git/git-plain.svg"></code>
    </p>
</body>
`)

function criarUrl(html) {
    var blob = new Blob([html], { type: 'text/html' })
    return URL.createObjectURL(blob)
}

function removerUrl(url) {
    URL.revokeObjectURL(url)
}

function obterIframe() {
    var iframe = document.getElementById('iframe')
    return iframe
}

function atribuirUrlDoIframe(url) {
    var iframe = obterIframe()
    iframe.src = url
}

function obterCodigoDoEditor() {
    return editor.getValue()
}

function clicarNoBotao() {
    var codigo = obterCodigoDoEditor()
    removerUrl(url)
    url = criarUrl(codigo)
    atribuirUrlDoIframe(url)
}