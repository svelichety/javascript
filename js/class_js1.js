

<script>
function add(a, b, callback){
document.write("summ of ${a} and ${b}: ${a+b}" + "<br>")
callback()
}

function display(){
document.write("this is printed after addition")
}

add(3, 4, display);

</script>


