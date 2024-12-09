document.getElementById("fetchBtn").addEventListener("click", fetchImage);

async function fetchImage(){
    try{
        let imgBox = document.getElementById("dogimgCont");

        let response = await fetch("https://dog.ceo/api/breeds/image/random");
        let innerImg = await response.json();

        let image = document.createElement("img");
        image.src= innerImg.message;
        image.classList.add("dog-img");
        image.style.borderRadius ="10px";

        // Clear previous content and append the new image and download link
        imgBox.innerHTML = "";
        imgBox.appendChild(image);
        imgBox.appendChild(downloadLink);

    }
    catch(error){
        console.log(error);
    }
}