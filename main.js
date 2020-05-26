var rolesText = $("#roles");
var bannerText = $("#banner");
var main = $(".main");
var topSection = $("#top-section");
var topDiv = $(".top");

$('a[href^="#"]').click(function () {
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 500);

    return false;
});

var roles = ["👉Full Stack iOS Developer", "👉Full Stack Web Developer", "👉Currently: Software Engineering Intern @ Microsoft", "👉Prev: Software Engineering Intern @ Apple", "👉CS/Business @ USC"];
var earlyLate = ["Working late or up early?", "Are you a night owl?", "Good...morning?"];
var morning = ["Morning, traveler!", "Rise and shine", "Another day, another "];
var afternoon = ["Afternoon, traveler!", "Today's a great day!", "On the grind"];
var night = ["Night, traveler!", "Working late?", "Are you a night owl?"];
var colors = ["#12CBC4", "#E84393", "#FDCB6E", "#6C5CE7"];

var counter = 0;
setInterval(function() { changeRoles(rolesText); }, 4000);
timeChange(bannerText);

function changeRoles(e) {
  e.fadeOut(function() {
    e.text(roles[counter]);
    counter++;
    console.log(counter);
    if (counter >= roles.length) {
      counter = 0;
    }
    e.fadeIn();
  });
}

function timeChange(e) {
  var d = new Date(); // for now
  var hour = d.getHours();
  var rand = Math.floor(Math.random() * 3);

  if(hour >= 0 && hour < 6) {
    bannerText.text(earlyLate[rand]);
  }
  else if(hour >= 6 && hour < 12) {
    bannerText.text(morning[rand]);
  }
  else if(hour >= 12 && hour < 18) {
    bannerText.text(afternoon[rand]);
  }
  else if(hour >= 18 && hour < 24) {
    bannerText.text(night[rand]);
  }
}

chooseBackgroundColor();

function chooseBackgroundColor() {
  var rand = Math.floor(Math.random() * colors.length);
  var color = colors[rand];
  main.css("background-color", color);
  topSection.css("background-color", color);
  topDiv.css("background-color", color);
}
