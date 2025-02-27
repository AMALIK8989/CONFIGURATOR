document.addEventListener("DOMContentLoaded", function () {
    new WOW().init();
});


//$(document).ready(function() {
  // Initialize Owl Carousel
 // $(".owl-carousel").owlCarousel({
 //     loop: true,
//      margin: 10,
 //     nav: false,
     // autoplay: true,
  //    autoplayTimeout: 3000,  // 3 seconds per item
 //     items: 1,  // Show one item at a time
//      dots: true,
//  });
//});


// document.addEventListener("DOMContentLoaded", () => {
// 	const isDesktop = () => window.innerWidth > 767.9;

// 	let gap = 15;

// 	if (isDesktop()) gap = 0.0285 * window.innerWidth;

// 	const sliders = [];

// 	["#horizontal-ticker-rtl", "#horizontal-ticker-ltr"].forEach(
// 		(query, index) => {
// 			sliders.push(
// 				new Swiper(query, {
// 					loop: true,
// 					slidesPerView: "auto",
// 					spaceBetween: gap,
// 					speed: 8000,
// 					allowTouchMove: false,
// 					autoplay: {
// 						delay: 0,
// 						reverseDirection: index,
// 						disableOnInteraction: false
// 					}
// 				})
// 			);
// 		}
// 	);

// 	window.addEventListener("resize", () => {
// 		isDesktop() ? (gap = 0.0285 * window.innerWidth) : (gap = 15);

// 		sliders.forEach((slider) => {
// 			slider.params.spaceBetween = gap;
// 			slider.update();
// 		});
// 	});
// }); 

// var swiperOptions = {
//   loop: true,
//   freeMode: true,
//   autoplay: {
//     delay: 0,
//     // pauseOnMouseEnter:true,
//     disableOnInteraction:false,
//   },
//   loopAddBlankSlides:true,
//   cssMode:true,
//   slidesPerView: 2,
//   speed: 5000,
//   grabCursor: true,
//   loopAdditionalSlides: 2,
// };

//$(document).ready(function () {
//  const swiper = new Swiper('.swiper', {
//    spaceBetween: 0,
//    speed: 5000,
//    direction: 'horizontal',
//    autoplay: { delay: 0, disableOnInteraction: false },
//    loop: true,
//    slidesPerView: 1,
//    freeMode: true,
//    lazy: { loadPrevNext: true },
 //   breakpoints: {
 //     640: { slidesPerView: 2 },
//      768: { slidesPerView: 3 },
//      1024: { slidesPerView: 5 },
//    },
//  });
//});


//var swiper = new Swiper(".swiper-container", swiperOptions);

// const $card = document.querySelector('.card');
// let bounds;

// function rotateToMouse(e) {
//   const mouseX = e.clientX;
//   const mouseY = e.clientY;
//   const leftX = mouseX - bounds.x;
//   const topY = mouseY - bounds.y;
//   const center = {
//     x: leftX - bounds.width / 2,
//     y: topY - bounds.height / 2
//   }
//   const distance = Math.sqrt(center.x**2 + center.y**2);
  
//   $card.style.transform = `
//     scale3d(1.07, 1.07, 1.07)
//     rotate3d(
//       ${center.y / 100},
//       ${-center.x / 100},
//       0,
//       ${Math.log(distance)* 2}deg
//     )
//   `;
  
//   $card.querySelector('.glow').style.backgroundImage = `
//     radial-gradient(
//       circle at
//       ${center.x * 2 + bounds.width/2}px
//       ${center.y * 2 + bounds.height/2}px,
//       #ffffff55,
//       #0000000f
//     )
//   `;
// }

// $card.addEventListener('mouseenter', () => {
//   bounds = $card.getBoundingClientRect();
//   document.addEventListener('mousemove', rotateToMouse);
// });

// $card.addEventListener('mouseleave', () => {
//   document.removeEventListener('mousemove', rotateToMouse);
//   $card.style.transform = '';
//   $card.style.background = '';
// });
// const cards = document.querySelectorAll(".team-card");

// cards.forEach((card) => {
//   card.addEventListener("mousemove", (e) => {
//     const rect = card.getBoundingClientRect();
    
//     // Get center position of the card
//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;
    
//     // Mouse position relative to the card
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
    
//     // Calculate the rotation effect based on mouse position
//     const rotationFactor = 10;
//     const rotateX = (y - centerY) / rotationFactor;
//     const rotateY = (centerX - x) / rotationFactor;
    
//     // Apply transformation to the card
//     card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.1, 1.1, 1.1)`;
//   });

//   // Reset the transform when mouse leaves
//   card.addEventListener("mouseleave", () => {
//     card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
//   });
// });

  // Initialize tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  $(document).ready(function() {
    // Define an array of celebrations with their respective dates, images, and wishes
    var celebrations = [
      {
        name: "New Year",
        date: new Date(new Date().getFullYear(), 0, 1), 
        image: "new_year.jpg",
        wish: "Happy New Year!"
      },
      {
        name: "Pride Day",
        date: new Date(new Date().getFullYear(), 6, 28), 
        image: "../Assets/Img/Footer Pride.png",
        wish: "Happy Pride Day!"
      },
      {
        name: "Thanksgiving Day",
        date: new Date(new Date().getFullYear(), 10, new Date('November ' + (new Date().getFullYear()) + ' ' + '4').getDate()), 
        image: "thanksgiving.jpg",
        wish: "Happy Thanksgiving!"
      },
      {
        name: "Independence Day (USA)",
        date: new Date(new Date().getFullYear(), 6, 4), 
        image: "4th_july.jpg",
        wish: "Happy 4th of July!"
      },
      {
        name: "Independence Day (India/Pakistan)",
        date: new Date(new Date().getFullYear(), 7, 14), 
        image: "15th_august.jpg",
        wish: "Happy Independence Day!"
      },
      {
        name: "Christmas",
        date: new Date(new Date().getFullYear(), 11, 25), 
        image: "christmas.jpg",
        wish: "Merry Christmas!"
      },
      {
        name: "Hanukkah",
        date: new Date(new Date().getFullYear(), 11, getHanukkahStartDate(new Date().getFullYear())), 
        image: "hanukkah.jpg",
        wish: "Happy Hanukkah!"
      }
      // Add more celebrations here
    ];
  
    // Function to get the start date of Hanukkah
    function getHanukkahStartDate(year) {
      // Implement your Hanukkah start date calculation logic here
      // This is a simplified example, you might need a more accurate calculation
      return 25 + Math.floor((234 - 23 * year / 4 + 19 * Math.floor(year / 4)) % 19) - Math.floor(year / 4); 
    }
  
    // Check for upcoming celebrations
    var today = new Date();
    var upcomingCelebrations = celebrations.filter(function(celebration) {
      return celebration.date >= today;
    });
  
    // Sort upcoming celebrations by date
    upcomingCelebrations.sort(function(a, b) {
      return a.date - b.date;
    });
  
    // Display the image and wish for the nearest upcoming celebration
    if (upcomingCelebrations.length > 0) {
      var nearestCelebration = upcomingCelebrations[0];
      $(".celebration-images").html(
        "<img src='" + nearestCelebration.image + "' alt='" + nearestCelebration.name + "'>"
      );
      $(".celebration-images").append("<p>" + nearestCelebration.wish + "</p>");
    }
  });
//  $(document).ready(function() {
    // Toggle navbar collapse on mobile
//    $('.navbar-toggler').click(function() {
    //    $('.navbar-collapse').collapse('toggle'); // Use Bootstrap's toggle
//    });

    // Toggle dropdown menu on mobile view
//    $('.nav-item.dropdown > a').click(function(event) {
    //    event.stopPropagation(); // Prevent event bubbling to document click
    //    $(this).next('.dropdown-menu').toggleClass('show'); // Toggle the show class for dropdown menu
 //   });

    // Close dropdown and navbar collapse if clicked outside
 //   $(document).click(function(event) {
     //   if (!$(event.target).closest('.nav-item.dropdown').length) {
        //    $('.nav-item.dropdown .dropdown-menu').removeClass('show'); // Remove show class to close dropdown
   //     }
    //    if (!$(event.target).closest('.navbar-toggler, .navbar-collapse').length) {
    //        $('.navbar-collapse').collapse('hide'); // Use Bootstrap's hide
     //   }
 //   });

    // Close navbar collapse when a link inside is clicked
   // $('.navbar-collapse').on('click', 'a', function() {
     //   $('.navbar-collapse').collapse('hide'); // Use Bootstrap's hide
  //  });
//});
$(document).ready(function() {
  
  // Handle Navbar Toggler for small screens (Collapse/Expand)
  $(".navbar-toggler").click(function() {
    var navbarCollapse = $("#navbarNav");
    navbarCollapse.collapse('toggle');  // Use Bootstrap's toggle for navbar collapse
  });

  // Close Navbar Collapse when clicking outside
  $(document).click(function(event) {
    var navbarCollapse = $(".navbar-collapse");

    // Close navbar collapse if clicked outside of the toggler or navbar
    if (!$(event.target).closest(".navbar-toggler, .navbar-collapse").length) {
      // Only close if it's open
      if (navbarCollapse.hasClass('show')) {
        navbarCollapse.collapse('hide');  // Close navbar collapse using Bootstrap's collapse method
      }
    }
  });

  // Handle Dropdown for Large Screens (>= 992px)
  $(".nav-item.dropdown").each(function() {
    var dropdownMenu = $(this).find(".dropdown-menu");

    $(this).find(".dropdown-toggle").click(function(event) {
      if ($(window).width() >= 992) {
        event.preventDefault();  // Prevent default link behavior
        dropdownMenu.toggleClass("show");  // Toggle the 'show' class for dropdown
      }
    });

    // Handle hover for mobile (< 992px) - show/hide dropdown
    $(this).hover(
      function() {
        if ($(window).width() < 992) {
          dropdownMenu.addClass("show");  // Show dropdown on hover
        }
      },
      function() {
        if ($(window).width() < 992) {
          dropdownMenu.removeClass("show");  // Hide dropdown on mouse leave
        }
      }
    );
  });
});



  // document.addEventListener("DOMContentLoaded", function () {
  //   fetch("vehicles.json") // Replace with your actual JSON file path
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const container = document.getElementById("trikes-container");

  //       // Group vehicles by their type or base model name
  //       const groupedVehicles = data.vehicles.reduce((acc, vehicle) => {
  //         const baseName = vehicle.name.split(" ")[0] + " " + vehicle.name.split(" ")[1]; // Extract first two words
  //         if (!acc[baseName]) {
  //           acc[baseName] = [];
  //         }
  //         acc[baseName].push(vehicle);
  //         return acc;
  //       }, {});

  //       // Generate HTML for each group
  //       Object.keys(groupedVehicles).forEach((groupName) => {
  //         let sectionHTML = `
  //           <h1 class="text-center mb-4 text-dark text-head">${groupName}</h1>
  //           <div class="row justify-content-center">
  //         `;

  //         groupedVehicles[groupName].forEach((trike) => {
  //           sectionHTML += `
  //             <div class="col-md-6 col-sm-12 col-lg-3 col-xl-4">
  //               <div class="model-card card">
  //                 <img src="${trike.preview_image}" alt="${trike.name}" class="img-fluid img-bike">
  //                 <div class="card-body card-details">
  //                   <p class="text-dark text-dak">${trike.name}</p>
  //                 </div>
  //               </div>
  //             </div>
  //           `;
  //         });

  //         sectionHTML += `</div>`; // Close row

  //         container.innerHTML += sectionHTML; // Append the generated section
  //       });
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // });

  $(document).ready(function() {
    // Load the trikes.json file
    $.getJSON("./Assets/Js/trikes.json", function(data) {
        
        console.log('JSON data loaded'); // Check if JSON is loaded

        // When a model card (inside <a>) is clicked
        $('a[data-id]').on('click', function(e) {
            e.preventDefault(); // Prevent default anchor link behavior
            console.log('Card clicked'); // Check if the event is triggered

            // Get the data-id of the clicked card
            var cardId = $(this).data('id');
            console.log('Card ID: ' + cardId); // Log the ID of the clicked card

            // Find the corresponding item from the JSON data
            var selectedItem = data.trikles.find(function(item) {
                return item.id === cardId;
            });

            console.log('Selected Item: ', selectedItem); // Check if the correct item is found

            // Check if the item exists
            if (selectedItem) {
                // Store the features and price in local storage
                localStorage.setItem('selectedItemFeatures', JSON.stringify(selectedItem.features));
                localStorage.setItem('selectedItemPrice', selectedItem.Price); // Price field is "Price" in your JSON

                // Redirect to the model.html
                window.location.href = './model.html';
            } else {
                alert('No features or price found for this model.');
            }
        });
    }).fail(function() {
        alert("Failed to load the JSON data.");
    });
});

$(document).ready(function() {
  // Click event for the info button
  $('.btn-dark.icon').on('click', function() {
      // Retrieve the features and price from localStorage
      var features = JSON.parse(localStorage.getItem('selectedItemFeatures'));
      var price = localStorage.getItem('selectedItemPrice');

      // Check if features and price are available in localStorage
      if (features && price) {
          console.log('Features:', features);  // Logs the features array to the console
          console.log('Price:', price);        // Logs the price to the console

          // Clear the features list before appending new items
          $('#featuresList').empty();

          // Insert the features into the modal
          features.forEach(function(feature) {
              $('#featuresList').append('<li class="list-group-item">' + feature + '</li>');
          });

          // Insert the price into the price element with your existing classes
          $('.price').html('<p><strong>Price: </strong>' + price + '</p>');

          // Show the modal
          $('#featuresModal').modal('show');
      } else {
          alert('No data available for this model.');
      }
  });
});
$(document).ready(function() {
  // When the close button is clicked
  $('.btn-close').on('click', function() {
      // Select the modal element and hide it
      $('#featuresModal').modal('hide');
  });
});