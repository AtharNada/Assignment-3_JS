var bookmarkName = document.getElementById("bookName")
var siteLink = document.getElementById("siteLink")
var sitesList = []
if (localStorage.getItem("sites")){
    sitesList = JSON.parse(localStorage.getItem("sites"))
    displaySites()
}
console.log(sitesList);
function addSites(){
    var sites = {
        name: bookmarkName.value,
        link: siteLink.value,
    }
    sitesList.push(sites)
    localStorage.setItem("sites", JSON.stringify(sitesList))
    displaySites()
}
function displaySites(){
    var temp = ""
    for (var i = 0; i < sitesList.length; i++){
        temp += ` <tr>
                        <td>`+sitesList[i].name+`</td>
                        <td>`+sitesList[i].link+`</td>
                        <td><button class="btn-secondary">visit</button></td>
                        <td><button onclick="deleteSites(`+i+`)" class="btn-outline-danger">Delete</button></td>
                    </tr>`
    }
    document.getElementById("myData").innerHTML = temp
}
function deleteSites(inde) {
    sitesList.splice(inde, 1)
    localStorage.setItem("sites", JSON.stringify(sitesList))
    displaySites()
}