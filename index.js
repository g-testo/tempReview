// HTTP VERBS/REQUEST
// GET request:
//      http://localhost:8081/api/sneakers
//      http://localhost:8081/api/sneakers/23

// PUT
//  http://localhost:8081/api/sneakers/23
//  With body

// POST
// http://localhost:8081/api/sneakers
// With body

// DELETE
// http://localhost:8081/api/sneakers/1023848

// FETCH API

// Query Selector and Query Selector All

window.onload = () => {
    let sneakerList = [
        "AF1s", 
        "Bapestas", 
        "New Balances", 
        "Nike Air Jordan 1", 
        "Adidas Yeezy Boost 350", 
        "Nike Dunk", 
        "Adidas Stan Smith", 
        "Converse Chuck Taylor All Star", 
        "Vans Old Skool", 
        "Nike Air Max 90", 
        "Puma Suede", 
        "Reebok Classic Leather", 
        "Adidas Superstar", 
        "Nike Blazer", 
        "Air Jordan 4", 
        "Adidas NMD", 
        "Nike Air Max 1", 
        "Asics Gel-Lyte III", 
        "Nike Air Presto", 
        "Adidas Ultra Boost", 
        "Air Jordan 11", 
        "Nike Huarache", 
        "Saucony Jazz Original"
    ];

    let firstSneakerStartsWithA = sneakerList.filter((sneaker)=>{
        return sneaker[0].toLowerCase() === "z";
    })

    console.log(firstSneakerStartsWithA);
    
    // localStorage.setItem("hasVisited", true);
    // let sneakerList = ["AF1s", "Bapestas", "New Balances"];

    // localStorage.setItem("favSneakers", JSON.stringify(sneakerList));
    // localStorage.favSneakers = JSON.stringify(sneakerList);


    // let myFavSneakers = localStorage.getItem("favSneakers");
    // let myFavSneakersShort = localStorage.favSneakers;

    // let sneakerElementQs = document.querySelector("#sneakers-container");
    // let sneakerElementById = document.getElementById("sneakers-container");

    // let sneakerElements = document.querySelectorAll("div");
    // let sneakerElementByTagName = document.getElementsByTagName("div");

    // console.log(sneakerElements);

    // http://localhost:8081/sneakers

    // fetch("http://localhost:8081/sneakers?type=sports")
    //     .then(res=>res.json())
    //     .then((sneakers)=>{
    //         console.log(sneakers);
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
};
