var showGrid =document.getElementById('show1');
var showList =document.getElementById('show2');


function showGridTour() {
    showGrid.style=" background-color: #f3c31b9c";
    showList.style="   background-color: #80808059";
    document.getElementById('show-grid').style.display = 'inline-flex';
    document.getElementById('show-list').style.display = 'none';

   

}

function showListTour() {
    showList.style=" background-color: #f3c31b9c";
    showGrid.style=" background-color: #80808059";
    document.getElementById('show-grid').style.display = 'none';
    document.getElementById('show-list').style.display = 'block';
}