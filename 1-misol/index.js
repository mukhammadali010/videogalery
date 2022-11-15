const inputValue = document.querySelector('#inputValue');
const addBtn = document.querySelector('#addBtn');
const parentBox = document.querySelector('#parentBox');
const boxImg = document.querySelector('#boxImg');
const imgs = document.querySelector('#imgs');
const video = document.getElementById('video');
const parentDiv = document.getElementById('parent')

parentBox.remove();

function adding() {
    let path = inputValue.value;
    if(path == '') return alert("Iltimos url manzilni kiritning !!!");
    else {
        
        parentDiv.innerHTML += `
        <div class="col-lg-3 col-md-6 col-sm-12 mt-3" id="parentBox">
        <div class="box rounded shadow bg-white" id="boxImg">
        
        <iframe width="100%" src="https://www.youtube.com/embed/${path}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen id="video"></iframe>
        </div>
        </div>
        `
    }
}

addBtn.onclick = () => adding();
