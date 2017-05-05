     let newIndex = 0;
     let oldIndex = 0;
      $(document).ready(function () {
  $("ul").sortable({
    cancel: ".ui-state-disabled",
    start: function(e, ui) {
        // creates a temporary attribute on the element with the old index
        $(this).attr('data-previndex', ui.item.index());
    },
    update: function(e, ui) {
        // gets the new and old index then removes the temporary attribute
         newIndex = ui.item.index();
         oldIndex = $(this).attr('data-previndex');
        $(this).removeAttr('data-previndex');
    }
});
// function checking() {
// let orderselect = document.querySelector(`[itemorder=newIndex]`);
// console.log(orderselect);

// }

  


 

});
// let orderobj = {

// }

// function addinorder(id, order) {
//   order.obj[id] = order;
// }


  // console.log(e);


  // });


      $(".item").click(function(e){
   
   if ( $( e.target ).is( ".editimgbox, .editimgbox *") ) {
     e.preventDefault();
    return;
  } 
    $(this).toggleClass("linet");
    $(this).find('input').toggleClass("linet");
   
  });





function checkempty() {
  let submitbttn = document.getElementById("thing").value;
  submitbttn = submitbttn.replace(/\s/g, '');
  if (submitbttn == "") {
    return false;
  };
}

let editimgbox = document.querySelectorAll('.editimgbox');

editimgbox.forEach(function (element) {
  element.addEventListener('click', editingtext);
});


function editingtext() {

  let inputbox = document.getElementById(`i${this.id}`)

    this.lastElementChild.style.filter = "grayscale(0%)";

    inputbox.disabled = false;
    inputbox.focus();

  
  } 


// }

function delitem(value) {
  let delform = document.getElementById(value.id);
 delform.submit();
}


