"use strict";

// IIFE - Immediate invoked functional expression
(function (){

    function displayhomepage(){
        console.log("called displayhomepage");

       let AboutUsButton = document.getElementById("AboutUsBtn");

       AboutUsButton.addEventListener("click", function () {
           location.href = "about.html";
       })


       let MainContent = document.getElementsByTagName("main")[0];

       let MainParagraph = document.createElement("p");
       MainParagraph.setAttribute("id", "MainParagraph");
       MainParagraph.setAttribute("class", "mt-3");
       MainParagraph.textContent = "This is my first paragraph";

       MainContent.appendChild(MainParagraph);

       let FirstString = "This is";
       let SecondString = `${FirstString} the main paragraph`;
       MainParagraph.textContent = SecondString;
       MainContent.appendChild(MainParagraph);

       let DocumentBody = document.body;

       let Article = document.createElement("article");
       let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3>"> This is my article paragraph</p>`;
       Article.setAttribute("class", "container");
       Article.innerHTML = ArticleParagraph;

       DocumentBody.appendChild(Article);
    }

    function displayproducts(){
        console.log("called displayproducts");
    }

    function displayaboutus(){
        console.log("called displayaboutus");
    }

    function displaycontactus(){
        console.log("called displaycontactus");
    }

    function displayourservice(){
        console.log("called displayourservice");
    }



    function Start(){
        console.log("App Started...");

        switch(document.title){
            case "Home":
                displayhomepage();
                break;
            case "Products":
                displayproducts();
                break;
            case "About Us":
                displayaboutus();
                break;
            case "Contact":
                displaycontactus();
                break;
            case "Our Service":
                displayourservice();
                break;

        }
    }

    window.addEventListener("load", Start);


})()