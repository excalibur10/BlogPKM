//ready function
$(document).ready(function() {
    //height of browser
    var height = window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
    //set height of laptop background according to height of browser
    $("#wrapper").css({
        'height': height,
        'max-height': height
    });

    function displayTaskbar() {
        var widthScreen = $("#screen").width();
        var footerHeight = $('#footer').height()

        var bottomHeight = $('.bottom').height();
        var taskbarPos = footerHeight + bottomHeight;
        $('.bottom').css({
            'width': widthScreen,
            'bottom': footerHeight
        });
        $('.taskbar').css({
            'width': widthScreen,
            'bottom': taskbarPos
        });
    }
    // Call once on page load
    displayTaskbar();
    // Update on window resize
    $(window).resize(displayTaskbar);

    function showLap() {
        $('.image-gallery').click(function() {
            $('#main-container').hide(function() {
                $("#skill").show();
            });
        });
    }
    showLap();

    function showMenu() {
        $('.window').hover(function() {
                $('#vertical-nav').show();
                $('#screen').css('z-index', 6);

            },
            function() {
                $('#screen').css('z-index', 1);
                if ($('#vertical-nav:hover').length === 0) {
                    $('#vertical-nav').hide();
                } else {
                    $('#vertical-nav').mouseleave(function() {
                        $(this).hide();
                    });
                }
            });
    }
    showMenu();

    function openModal(buttonClick, modal, iconClass, color) {
        $(buttonClick).click(function() {
            showModal(modal);
            $('#taskbar > ul').append('<li class="usericon"><span class="fa ' + iconClass + '"></span></a></li>');
            $('.usericon').css('background-color',color);
        });
        // close modal
        $(".close").click(function() {
            closeModal(modal);
            $("#taskbar ul li").remove(".usericon");
        });
    }
    function showModal(modal) {
        modal.show();
    }

    function closeModal(modal, container) {
        modal.hide();
    }

    function openUser() {
        openModal($('.user'), $("#modalUser"), "fa-user","#5BB2FC");
    }

    function openLove(){
        openModal($(".love"), $("#modalLove"), "fa-heart","#FF7A85");
    }

    function openContact() {
        openModal($(".contact"), $("#modalContact"), "fa-phone", "#58EBD3");
    }
    openUser();
    openLove();
    openContact();
})
