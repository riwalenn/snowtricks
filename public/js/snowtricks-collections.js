/*      GESTION DES VIDEOS DANS LA COLLECTION     */

var videosHolder = $("#videos_list");
videosHolder.data("index", videosHolder.find(".card").length);

//ajouter une vidéo
var addNewVideoBtn = $("<a href='#videos_list' class='btn btn-info' style='margin-top:1rem;'>Ajouter une vidéo</a>");
videosHolder.append(addNewVideoBtn);

//supprimer une vidéo
function addRemoveVideoBtn(card) {
    var removeBtn = $("<a href='#videos_list' class='btn btn-danger'><i class='fas fa-trash'></i></a>");

    var removeDiv = $("<div class='col-1'></div>").append(removeBtn);

    removeBtn.click(function (e) {
        $(e.target).parents(".card.border-light").slideUp(1000, function () {
            e.preventDefault();
            $(this).remove();
        });
    });

    card.append(removeDiv);
}

videosHolder.find(".card-body").each(function () {
    var ids = $("[id^='trick_videos_']");
    ids.addClass("col-10");
    addRemoveVideoBtn($(this));
});

function addNewFormVideo() {
    var prototype = videosHolder.data("prototype");
    var index = videosHolder.data("index");
    var newForm = prototype;
    var card = $("<div class='card border-light'></div>");

    newForm = newForm.replace(/__name__/g, index);
    //index = index + 1
    videosHolder.data("index", ++index);
    var cardBody = $("<div class='card-body alert alert-secondary row'></div>").append(newForm);

    card.append(cardBody);
    addRemoveVideoBtn(cardBody);
    addNewVideoBtn.before(card);

    var ids = $("[id^='trick_videos_']");
    ids.addClass("col-10");
}

addNewVideoBtn.click(function (e) {
    e.preventDefault();
    addNewFormVideo();
});

/*      GESTION DES IMAGES DANS LA COLLECTION     */

var imagesHolder = $("#images_list");
imagesHolder.data("index", imagesHolder.find(".card").length);

//ajouter une image
var addNewImgBtn = $("<a href='#images_list' class='btn btn-info' style='margin-top:1rem;'>Ajouter une image</a>");
imagesHolder.append(addNewImgBtn);

//supprimer une image
function addRemoveImgBtn(card) {
    var removeBtn = $("<a href='#images_list' class='btn btn-danger'><i class='fas fa-trash'></i></a>");

    var removeDiv = $("<div class='col-1'></div>").append(removeBtn);

    removeBtn.click(function (e) {
        $(e.target).parents(".card.border-light").slideUp(1000, function () {
            e.preventDefault();
            $(this).remove();
        });
    });

    card.append(removeDiv);
}

imagesHolder.find(".card-body").each(function () {
    var ids = $("[id^='trick_images_']");
    ids.addClass("col-10");
    addRemoveImgBtn($(this));
});

function addNewFormImg() {
    var prototype = imagesHolder.data("prototype");
    var index = imagesHolder.data("index");
    var newForm = prototype;
    var card = $("<div class='card border-light'></div>");

    newForm = newForm.replace(/__name__/g, index);
    //index = index + 1
    imagesHolder.data("index", ++index);
    var cardBody = $("<div class='card-body alert alert-secondary row'></div>").append(newForm);

    card.append(cardBody);
    addRemoveImgBtn(cardBody);
    addNewImgBtn.before(card);

    var ids = $("[id^='trick_images_']");
    ids.addClass("col-10");
}

addNewImgBtn.click(function (e) {
    e.preventDefault();
    addNewFormImg();
});