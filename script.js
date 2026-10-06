/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById("menuBtn");

const nav =
    document.querySelector(".nav-links");


menuButton.addEventListener("click", function () {

    nav.classList.toggle("active");

});



/* =====================================================
   ⭐ DARK / LIGHT THEME TOGGLE
===================================================== */

const themeToggle =
    document.getElementById("themeToggle");


/* Check if the user already selected a theme */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-theme");

}



/* When the toggle is clicked */

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-theme");


    /* Save the selected theme */

    if (document.body.classList.contains("dark-theme")) {

        localStorage.setItem("theme", "dark");

    }

    else {

        localStorage.setItem("theme", "light");

    }

});



/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

const navItems =
    document.querySelectorAll(".nav-links a");


navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        nav.classList.remove("active");

    });

});



/* =====================================================
   PROJECT CURSOR TILT EFFECT
===================================================== */

const projects =
    document.querySelectorAll(".project");


projects.forEach(function (project) {


    project.addEventListener(
        "mousemove",
        function (event) {


            const rect =
                project.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            const rotateX =
                ((y / rect.height) - 0.5) * -3;


            const rotateY =
                ((x / rect.width) - 0.5) * 3;


            project.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;


        }
    );


    project.addEventListener(
        "mouseleave",
        function () {

            project.style.transform =
                "perspective(1000px) rotateX(0) rotateY(0)";

        }
    );

});



/* =====================================================
   SCROLL REVEAL
===================================================== */

const sections =
    document.querySelectorAll(
        ".section, .project, .journey-item"
    );


const observer =
    new IntersectionObserver(

        function (entries) {


            entries.forEach(function (entry) {


                if (entry.isIntersecting) {


                    entry.target.style.opacity = "1";


                    entry.target.style.transform =
                        "translateY(0)";


                    observer.unobserve(entry.target);


                }


            });


        },

        {
            threshold: 0.1
        }

    );


sections.forEach(function (section) {


    section.style.opacity = "0";


    section.style.transform =
        "translateY(25px)";


    section.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";


    observer.observe(section);


});