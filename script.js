<script>
var indexx = 0;
showSlides(indexx);

function showSlides() {
    var i;
    var ind = document.getElementsByClassName("myStone");
    for (i = 0 ; i < ind.length ; i++) {
        ind[i].style.display = "none";
    }
    indexx++;
    if (indexx > ind.length) {indexx = 1}
    ind[indexx-1].style.display = "block";
    setTimeout(showSlides, 1000);
}
</script>
