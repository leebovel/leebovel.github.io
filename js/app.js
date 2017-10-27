$(function(){

  var shops = [
    { 
      name: "amplehills",
      city: ["manhattan", "brooklyn"],
      criteria: ["pints", "adventurous", "funcones", "sundaes"],
    },

    {
      name: "biggayicecream",
      city: ["manhattan"],
      criteria: ["toppings", "softserve", "sundaes"],
    }
  ]

  // debugger;
// check box

$('input[type="checkbox"]').click(function() {
  var checkboxName = $(this).attr("value");

  var filteredShops = shops.filter(function(shop) {
    return shop.city.includes(checkboxName);
  })

  // print filtered list to the screen
  console.log(checkboxName);

  console.log(filteredShops);


 });


// read and store input

// if manhattan is checked, only display shops w/ manhattan

// else, display all shops w/ brooklyn


// 


// var location = ["brooklyn", "manhattan"]


// test



    // if ($('input[type="checkbox"]:checked').length > 0) {
    //     $('.wrap').prepend($('.wrap > div[class=' + this.id + ']'));
    //     $('.wrap > div').hide();
    //     $('input[type="checkbox"]:checked').each(function() {
    //         $('.wrap >div[class=' + this.id + ']').fadeIn("slow");
    //     });
    // } else {
    //     var array  = ['entry1', 'entry2', 'entry3', 'entry4'] ;
    //      $.each(array,function(index,value){
    //        $('.wrap').append($('.'+value));    // add . here
    //       });
    //     $('.wrap > div').fadeIn("slow");
   
// end test



});