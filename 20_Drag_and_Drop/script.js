let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for(let list of lists){
    list.addEventListener("dragstart", function(e){
        let selected = e.target;

        rightBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        rightBox.addEventListener("drop", function(e){
            rightBox.appendChild(selected);
            selected = null;
        });
        leftBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        leftBox.addEventListener("drop", function(e){
            leftBox.appendChild(selected);
            selected = null;
        });
    })
}

// for mobile - touch drag events
for (let list of lists) {
    list.addEventListener("touchstart", function (e) {
        selected = e.target;

        // make ghost copy
        ghost = selected.cloneNode(true);
        ghost.style.position = "fixed";
        ghost.style.width = selected.offsetWidth + "px";
        ghost.style.height = selected.offsetHeight + "px";
        ghost.style.opacity = "0.7";
        ghost.style.pointerEvents = "none";
        ghost.style.zIndex = "1000";
        document.body.appendChild(ghost);
    });

    list.addEventListener("touchmove", function (e) {
        if (ghost) {
            let touch = e.touches[0];
            ghost.style.left = touch.clientX - ghost.offsetWidth / 2 + "px";
            ghost.style.top = touch.clientY - ghost.offsetHeight / 2 + "px";
        }
    });

    list.addEventListener("touchend", function (e) {
        if (ghost) {
            ghost.remove();
            ghost = null;
        }

        let touch = e.changedTouches[0];
        let dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);

        if (dropTarget && (dropTarget.id === "right" || dropTarget.closest("#right"))) {
            rightBox.appendChild(selected);
        } else {
            leftBox.appendChild(selected);
        }

        selected = null;
    });
}


