var input=document.querySelector(".s__one")
    var products=document;
    var element=products.querySelectorAll(".product")

    input.addEventListener("keyup",function(){
       var enter=event.target.value.toUpperCase()

       for(i=0;i<element.length;i++)
       {
        if(element[i].textContent.toUpperCase().indexOf(enter)<0)
       {
         element[i].style.display="none"
       }
       else{
        element[i].style.display="block"
       }
       }
    })
    
var filterList = [];

var occasionCheckboxes = document.querySelectorAll("input[name='select']");
var colorCheckboxes = document.querySelectorAll("input[name='color']");
var arrivalCheckboxes = document.querySelectorAll("input[name='arr']");

occasionCheckboxes.forEach(function(checkbox) {
    checkbox.addEventListener("click", updateFilterList);
});
colorCheckboxes.forEach(function(checkbox) {
    checkbox.addEventListener("click", updateFilterList);
});
arrivalCheckboxes.forEach(function(checkbox) {
    checkbox.addEventListener("click", updateFilterList);
});

function updateFilterList() {
    
    filterList = [];

    occasionCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            filterList.push(checkbox.value);
        }
    });

    colorCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            filterList.push(checkbox.value);
        }
    });

    arrivalCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            filterList.push(checkbox.value);
        }
    });

    filterProducts(filterList);
}

function filterProducts(filterList) {
    var productList = document.querySelectorAll(".product");

    productList.forEach(function(product) {
        var tags = product.querySelector("h1").textContent.toLowerCase();  // Convert to lowercase for case-insensitive comparison

        
        var check = filterList.some(function(filter) {
            return tags.includes(filter.toLowerCase());  
        });

        if (!check && filterList.length > 0) {
            product.style.display = "none";  
        } else {
            product.style.display = "block"; 
        }
    });
}
var c=document.getElementById("close")
var left=document.querySelector(".left")
var menu_o=document.querySelector(".menu_o")
c.addEventListener("click",function()
{
 left.style.marginLeft="100%";
 left.style.transition="2s";
})
menu_o.addEventListener("click",function(){
     left.style.marginLeft="50%";
 left.style.transition="2s";
})