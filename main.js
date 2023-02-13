$(document).ready(function (){

    const endpoint = "https://api.github.com/users/victordg21";

    $.ajax(endpoint).done(function(resposta) {

        const elementName = resposta.name;
        const elementUsername = resposta.login;
        const elementAvatar = resposta.avatar_url;
        const elementRepos = resposta.public_repos;
        const elementFollowers = resposta.followers;
        const elementFollowing = resposta.following;
        const elementLink = resposta.html_url;

        $('#name').html(elementName)
        $('#username').html(elementUsername)
        $('#repos').html(elementRepos)
        $('#followers').html(elementFollowers)
        $('#following').html(elementFollowing)
        $('#link').attr("href", elementLink)
        $('#avatar').attr("src", elementAvatar)
    })
})


