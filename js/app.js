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
    },

    {
      name: "cedars",
      city: ["brooklyn"],
      criteria: ["unique", "nofrills", "otherfood", "international", "pints"],
    },

    {
      name: "chinatown",
      city: ["manhattan"],
      criteria: ["choices", "international"],
    },

    {
      name: "cones",
      city: ["manhattan"],
      criteria: ["choices", "vegan", "international"],
    },

    {
      name: "gelato",
      city: ["manhattan"],
      criteria: ["choices", "adventurous flavors", "vegan"],
    },

    {
      name: "iceandvice",
      city: ["manhattan"],
      criteria: ["adventurous", "funcones", "vegan", "sundaes"],
    },

    {
      name: "morgansterns",
      city: ["manhattan"],
      criteria: ["sundaes", "adventurous", "vegan", "choices"],
    },

    {
      name: "oddfellows",
      city: ["manhattan", "brooklyn"],
      criteria: ["adventurous"],
    },

    {
      name: "softswerve",
      city: ["manhattan"],
      criteria: ["soft serve", "toppings", "sundaes", "funcones"],
    },

    {
      name: "superiorityburger",
      city: ["manhattan"],
      criteria: ["adventurous", "vegan", "otherfood"],
    },

    {
      name: "vanleeuwen",
      city: ["manhattan", "brooklyn"],
      criteria: ["vegan", "sundaes", "nofrills", "pints"],
    },
  ]

// check box


  $('input[type="checkbox"]').click(function() {
    // console.log("checked box");
    var checkboxName = $(this).attr("value");

    var filteredShops = shops.filter(function(shop) {
      return shop.city.includes(checkboxName);
});







  // console.log(checkboxName);

  // console.log(filteredShops);


  // print filtered list to the screen


// function to clear all cards (before printing filtered cards)

function clearBoxes() {
  $(".card").css("display", "none");
  console.log("hid boxes");
};




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