//vanilla JS implementation
document.addEventListener('DOMContentLoaded', function() {
    function readCssVar(name, fallback) {
        var value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
        return value || fallback;
    }
    //height of browser
    var height = window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
    //set height of laptop background according to height of browser
    var wrapper = document.getElementById('wrapper');
    wrapper.style.height = height + 'px';
    wrapper.style.maxHeight = height + 'px';

    function displayTaskbar() {
        var screen = document.getElementById('screen');
        var widthScreen = screen.offsetWidth;
        var footer = document.getElementById('footer');
        var footerHeight = footer.offsetHeight;

        var bottom = document.querySelector('.bottom');
        var bottomHeight = bottom.offsetHeight;
        var taskbarPos = footerHeight + bottomHeight;

        bottom.style.width = widthScreen + 'px';
        bottom.style.bottom = footerHeight + 'px';

        var taskbar = document.querySelector('.taskbar');
        taskbar.style.width = widthScreen + 'px';
        taskbar.style.bottom = taskbarPos + 'px';
    }
    // Call once on page load
    displayTaskbar();
    // Update on window resize
    window.addEventListener('resize', displayTaskbar);

    function showLap() {
        var imageGallery = document.querySelector('.image-gallery');
        imageGallery.addEventListener('click', function() {
            var mainContainer = document.getElementById('main-container');
            mainContainer.style.display = 'none';
            // Use setTimeout to mimic jQuery's callback after hide
            setTimeout(function() {
                var skill = document.getElementById('skill');
                skill.style.display = 'block';
            }, 0);
        });
    }
    showLap();

    function showMenu() {
        var windowElement = document.querySelector('.window');
        var verticalNav = document.getElementById('vertical-nav');
        var screen = document.getElementById('screen');

        windowElement.addEventListener('mouseenter', function() {
            verticalNav.style.display = 'block';
            screen.style.zIndex = '6';
        });

        windowElement.addEventListener('mouseleave', function() {
            screen.style.zIndex = '1';
            // Check if mouse is over vertical-nav
            if (!verticalNav.matches(':hover')) {
                verticalNav.style.display = 'none';
            }
        });

        verticalNav.addEventListener('mouseleave', function() {
            this.style.display = 'none';
        });
    }
    showMenu();

    function showModal(modal) {
        modal.style.display = 'block';
    }

    function closeModal(modal) {
        modal.style.display = 'none';
    }

    function openModal(buttonClick, modal, iconClass, color) {
        buttonClick.addEventListener('click', function() {
            showModal(modal);

            // Create and append the usericon
            var taskbarUl = document.querySelector('#taskbar > ul');
            var li = document.createElement('li');
            li.className = 'usericon';
            li.innerHTML = '<span class="fa ' + iconClass + '"></span>';
            taskbarUl.appendChild(li);

            // Set background color
            var userIcons = document.querySelectorAll('.usericon');
            userIcons.forEach(function(icon) {
                icon.style.backgroundColor = color;
            });
        });

        // Close modal
        var closeButtons = modal.querySelectorAll('.close');
        closeButtons.forEach(function(closeBtn) {
            closeBtn.addEventListener('click', function() {
                closeModal(modal);

                // Remove usericon
                var userIcons = document.querySelectorAll('#taskbar ul li.usericon');
                userIcons.forEach(function(icon) {
                    icon.parentNode.removeChild(icon);
                });
            });
        });
    }

    function openUser() {
        var userButton = document.querySelector('.user');
        var modalUser = document.getElementById('modalUser');
        openModal(userButton, modalUser, "fa-user", readCssVar('--taskbar-icon-user', '#5BB2FC'));
    }

    function openLove() {
        var loveButton = document.querySelector('.love');
        var modalLove = document.getElementById('modalLove');
        openModal(loveButton, modalLove, "fa-heart", readCssVar('--taskbar-icon-love', '#FF7A85'));
    }

    function openContact() {
        var contactButton = document.querySelector('.contact');
        var modalContact = document.getElementById('modalContact');
        openModal(contactButton, modalContact, "fa-phone", readCssVar('--taskbar-icon-contact', '#58EBD3'));
    }

    openUser();
    openLove();
    openContact();
});
