$(function(){

  var shops = [
    { 
      name: "amplehills",
      city: ["manhattan", "brooklyn"],
      criteria: ["pints", "adventurous", "funcones", "sundaes", "all"],
    },

    {
      name: "biggayicecream",
      city: ["manhattan"],
      criteria: ["toppings", "softserve", "sundaes", "all"],
    },

    {
      name: "cedars",
      city: ["brooklyn"],
      criteria: ["international", "pints", "all"],
    },

    {
      name: "chinatown",
      city: ["manhattan"],
      criteria: ["choices", "international", "all"],
    },

    {
      name: "cones",
      city: ["manhattan"],
      criteria: ["choices", "vegan", "international", "all"],
    },

    {
      name: "gelato",
      city: ["manhattan"],
      criteria: ["choices", "adventurous flavors", "vegan", "all"],
    },

    {
      name: "iceandvice",
      city: ["manhattan"],
      criteria: ["adventurous", "funcones", "vegan", "sundaes", "all"],
    },

    {
      name: "morgensterns",
      city: ["manhattan"],
      criteria: ["sundaes", "adventurous", "vegan", "choices", "softserve", "pints", "all"],
    },

    {
      name: "oddfellows",
      city: ["manhattan", "brooklyn", "all"],
      criteria: ["adventurous"],
    },

    {
      name: "softswerve",
      city: ["manhattan"],
      criteria: ["softserve", "toppings", "sundaes", "funcones", "all"],
    },

    {
      name: "superiorityburger",
      city: ["manhattan"],
      criteria: ["adventurous", "vegan", "all"],
    },

    {
      name: "vanleeuwen",
      city: ["manhattan", "brooklyn"],
      criteria: ["vegan", "sundaes", "pints", "all"],
    },

  ]

// // check box


//   $('input[type="checkbox"]').click(function() {
//     // console.log("checked box");
//     var checkboxName = $(this).attr("value");


  
//     var filteredShops = shops.filter(function(shop) {
//       return shop.city.includes(checkboxName);

  

//   });


  // listener for location checkboxes
  $('.location input[type="radio"]').click(function() {
    console.log("clicked location");
    // determine which checkboxes are checked
    var checkedElements = $('.location input[type="radio"]').filter(':checked');

    // create an empty array that will contain a list of selected
    // options
    var selectedLocations = [];


    // iterate through the list of selected options and pull out the id
    // store the id into an array
    $.each(checkedElements, function(index, element) {
      selectedLocations.push(element.id);
    });

    // print the array to the console
    console.log(selectedLocations);

  });

  // CRITERIA RADIO BUTTONS SECTION //

  // listener for criteria checkbox buttons
  $('.criteria input[type="radio"]').click(function() {
    console.log("clicked criteria");
    clearBoxes();
    // CHANGE TO RADIO BUTTONS // 

    // determine which checkboxes are checked
    var checkedElements = $('.criteria input[type="radio"]').filter(':checked');


    // create an empty array that will contain a list of selected
    // options
    var selectedAttributes = [];

    // iterate through the list of selected options and pull out the id
    // store the id into an array
    $.each(checkedElements, function(index, element) {
      selectedAttributes.push(element.id);
    });


    // print the array to the console
    // console.log(selectedAttributes);

    console.log(selectedAttributes);

    filterCriteria(selectedAttributes[0]);

    // if shop.location.includes(selectedAttributes) {
    //   $(".card").css("display", "show"); 
    //   }
    // else {
    //     $(".card").css("display", "hide");
    //  }


  });


  function filterCriteria(criteria) {

    var selectedShops = [];

    selectedShops = _.filter(shops, function(shop) {
      return shop.criteria.includes(criteria);
    });

   displayResults(selectedShops);
  }


  function displayResults(filteredShops) {
    clearBoxes();

    filteredShops.forEach(function(shop) {
      // use jQuery to search shops container for element with that matches the "name"
      // then change display property to block

      var shopId = "#" + shop.name;
      console.log(shopId);
      $(shopId).css("display", "block");
    })

  }

// function to clear all cards (before printing filtered cards)

function clearBoxes() {
  $(".card").css("display", "none");
};

// function to show all cards

function showBoxes() {
  $(".card").css("display", "block");
}

$(".all").click(showBoxes);

});