 // Load your images on page-load
    function preloader() {
        const imagesPaths = [
           "./images/thermal.png",
           "./images/solar.png",
           "./images/wind.png"
        ];
        const images = [];
        for (let i = 0; i < imagesPaths.length; i++) {
            images[i] = new Image();
            images[i].src = imagesPaths[i];
        }

        // Images ready to be used:
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };    
    window.addEventListener("load", preloader);

//create resources
const resources = [
    {
        heading: "Thermal Energy", 
        path: "./images/thermal.png",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas maecenas pharetra convallis posuere. Vestibulum morbi blandit cursus risus at ultrices mi tempus. Mauris cursus mattis molestie a iaculis. Amet porttitor eget dolor morbi non arcu risus quis. Tincidunt lobortis feugiat vivamus at augue eget arcu. Vitae sapien pellentesque habitant morbi tristique senectus et. Metus aliquam eleifend mi in nulla. Purus ut faucibus pulvinar elementum integer enim neque. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Nam libero justo laoreet sit. Risus in hendrerit gravida rutrum. Cras sed felis eget velit aliquet sagittis id consectetur purus. Velit euismod in pellentesque massa placerat duis ultricies. Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Netus et malesuada fames ac turpis egestas."
    },
    {
        heading: "Solar Energy",
        path: "./images/solar.png",
        body: "Ultrices gravida dictum fusce ut placerat orci nulla. Amet consectetur adipiscing elit ut aliquam purus. Viverra accumsan in nisl nisi. Massa tincidunt dui ut ornare lectus sit amet est placerat. Donec pretium vulputate sapien nec. Non diam phasellus vestibulum lorem. Pulvinar sapien et ligula ullamcorper malesuada. Consectetur libero id faucibus nisl tincidunt eget nullam. Integer enim neque volutpat ac. Et magnis dis parturient montes nascetur. Fusce ut placerat orci nulla pellentesque dignissim enim sit. Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Nunc congue nisi vitae suscipit tellus. Sit amet facilisis magna etiam. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Vehicula ipsum a arcu cursus. Ultrices neque ornare aenean euismod elementum. Odio pellentesque diam volutpat commodo sed egestas."
    },
    {
        heading: "Wind Energy", 
        path: "./images/wind.png",
        body: "Blandit turpis cursus in hac habitasse platea dictumst. Cursus vitae congue mauris rhoncus aenean. Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Neque sodales ut etiam sit amet nisl purus. Tincidunt dui ut ornare lectus. Elementum integer enim neque volutpat. Elit sed vulputate mi sit. Porta nibh venenatis cras sed felis eget velit. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Posuere urna nec tincidunt praesent. Eget nulla facilisi etiam dignissim diam."

    }
];

/* GETTING REFERENCES TO ACTIVE ELEMENTS */
const btns = document.querySelectorAll("button");
const currentContent = document.querySelector(".current-content");

//first content is loaded on the page load
currentContent.innerHTML = `<article>
                            <h2>${resources[0].heading}</h2>
                            <img src="${resources[0].path}">
                            <p>${resources[0].body}</p>
                            </article>`;

/*CREATING EVENT-HANDLER*/
function contentLoader(ev) {
    console.log(ev.target.textContent);
    /*console.log("content loader works");*/

    let eventTarget = ev.target.textContent;
    //console.log(eventTarget);

    if (eventTarget === "Thermal Energy") {
        currentContent.innerHTML = `<article>
                                    <h2>${resources[0].heading}</h2>
                                    <img src="${resources[0].path}">
                                    <p>${resources[0].body}</p>
                                    </article>`;
    } else if (eventTarget === "Solar Energy") {
        currentContent.innerHTML = `<article>
                                    <h2>${resources[1].heading}</h2>
                                    <img src="${resources[1].path}">
                                    <p>${resources[1].body}</p>
                                    </article>`;
    } else {
        currentContent.innerHTML = `<article>
                                    <h2>${resources[2].heading}</h2>
                                    <img src="${resources[2].path}">
                                    <p>${resources[2].body}</p>
                                    </article>`;
    }

    //move id to curent button
    //removing id from the element that previously had it
    for (let btn of btns) {
        //resource: https://developer.mozilla.org/en-US/docs/Web/API/Element/id*/
        if (btn.id) {
            //resource: https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute*/
            btn.removeAttribute("id");
        }
    }
    //adding the ID to the current element
    ev.target.id = "active";

}

/* REGISTERING EVENT CONTENT */
btns[0].addEventListener("click", contentLoader);
btns[1].addEventListener("click", contentLoader);
btns[2].addEventListener("click", contentLoader);