alert("Working")

$("h1").addClass("big-title margin-50"); // ---> Multiply Class can be added

console.log($("img").attr("src"));
$("a").attr("href", "https://www.yahoo.com")

$("button").click(function(){
    $("h1").css("color", "purple");
});

$(".btn2").click(function(){
    $("h1").css("color", "green");
});

$(".btn1").click(function(){
    $("h1").css("color", "red");
});

$("input").keypress(function(event){
    $("h1").text(event.key);
});

$("h1").on("mouseover", function(event){
    $("h1").css("color", "red");
});
      
$("button").on("click", function(){
    $("h1").hide();
});

$("button").on("click", function(){
    $("h1").show();
});

$("button").on("click", function(){
    $("h1").fadeOut();
});


// .addClass ---> To add a class.                   $("h1").addClass("big-title);

// .removeClass ---> To remove a class              $("h1").removeClass("big-title");

// .hasClass ---> To see class is present or not.   $("h1").hasClass("title");

// .text ---> Change the text                       $("button").text("Dont click me")

// .html ---> to add html                           $("button").html("<em>Click me</em>")

// $("h1").attr("class")  ---> Shows all the class added to h1

// .click ---> Similar to click function in JS

         $("h1").click(function(){
           $("h1").css("color", "purple");
         });

// mouseover --> It is method through which when we take mouse on h1 it will change its color.

         $("h1").on("mouseover", function(event){
              $("h1").css("color", "red");
         });  
    
// .before ---> It will add bofore the query which has been selected.  $("h1").before("<button>New</button>")

// .after  ---> It will add after the query which has been selected.   $("h1").after("<button>New</button>")

// .prepend --> It will add the just before the closing tag.           $("h1").prepend("<button>New</button>")

// .append ---> It will add the just after the closing tag.            $("h1").append("<button>New</button>")

// .hide ---> It will hide the query which was selected.
        $("button").on("click", function(){
          $("h1").hide();
        });

//  .show ---> It will show the query which was selected as hidden.
        $("button").on("click", function(){
           $("h1").show();
        });

//  .toggle --> It will toggle the query which was selected.
        $("button").on("click", function(){
           $("h1").toggle();
        });

//  .fadeOut ---> It will hide but in fading way.
        $("button").on("click", function(){
           $("h1").fadeOut();
        });

//  .fadeIn ---> It will show but in fading way.
        $("button").on("click", function(){
           $("h1").fadeOut();
        });

//  .slideUp ---> It will show but in sliding way.
        $("button").on("click", function(){
           $("h1").slideUp();
        });

//  .slideDown ---> It will show but in sliding way.
        $("button").on("click", function(){
           $("h1").slideDown();
        });

//  .slidetoggle ---> It will toggle but in sliding way.
        $("button").on("click", function(){
           $("h1").toggle();
        });

//  .animate ---> It will help to provide animation.
        $("button").on("click", function(){
           $("h1").animate({opacity: 0.5});
        });
