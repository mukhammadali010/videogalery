const inputValue = document.querySelector('#inputValue');
const addBtn = document.querySelector('#addBtn');
const parentBox = document.querySelector('#parentBox');
const boxImg = document.querySelector('#boxImg');
const imgs = document.querySelector('#imgs');
const video = document.getElementById('video');
const parentDiv = document.getElementById('parent');
const deleteBtn = document.getElementById('deleteBtn');
const icons = document.getElementById("icons");
const searchBtn = document.getElementById('searchBtn');
const searchVideos = document.getElementById('searchVideos');
const videoLink = document.getElementById('videoLink');
const con = document.getElementById("con");


parentBox.remove();

let movieArray = [];

let path = inputValue.value;

function linking(path) {

    
    let cut = path.slice(-11, path.length);
    let link = "https://www.youtube.com/embed/";
    let l = video.src;
    l = link + cut;
    return l;
}

function adding() {

    path = inputValue.value;

    const col = document.createElement("div");
    col.className = 'col-lg-3 col-md-6 col-sm-12 mt-3';



    const videoBox = document.createElement("div");
    videoBox.className = 'box rounded shadow bg-red position-relative';

    const iframe = document.createElement("iframe");
    iframe.style.width = "100%";
    iframe.src = linking(path);

    // icon uchun 
    const icon = document.createElement('i');
    icon.className = "fa fa-trash fa-2x text-danger position-absolute bottom-0 end-0";

    icon.onclick = () => {
        col.remove();
    }

    // count uchun 

    const count = document.createElement('p');
    count.style.position = "absolute";
    count.style.bottom = "-10px";
    count.style.left = "10px";

    for (let i = 0; i < movieArray.length; i++) {

        count.innerHTML = i + 1 + "- raqamli video";
    }

    videoBox.appendChild(count);


    videoBox.appendChild(icon);

    videoBox.appendChild(iframe);

    col.appendChild(videoBox);

    parentDiv.appendChild(col);
    const deleting = () => {
        parentDiv.remove();
    };
    deleteBtn.onclick = () => deleting();

}

function compareLinks() {
    let path = inputValue.value;
    if (movieArray.includes(path)) {
        return alert("Siz bu videoni qaytadan kirita olmaysiz !!!");
    }
    else {
        movieArray.push(path);
        adding();
    }
}


addBtn.onclick = () => compareLinks();



const searching = () => {
    console.log(movieArray[0]);
    for (let i = 0; i < movieArray.length; i++) {


        if (inputValue.value == "video" + (i + 1).toString()) {

            const seachVideo = document.createElement('a');
            seachVideo.innerHTML = `
            <iframe width="560" height="315" src="${linking(movieArray[i])}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `;
            seachVideo.style.fontSize = "26px";
            seachVideo.href = movieArray[i];
            
            if (movieArray !== 0) con.appendChild(seachVideo);
            parentDiv.remove();
        }
    }
}


searchBtn.onclick = () => searching();