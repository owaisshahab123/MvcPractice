/* ------------------------------------------------------------------------------
 *
 *  # Bootstrap modals and extensions
 *
 *  Demo JS code for components_modals.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var Modals = function () {


    //
    // Setup module components
    //

    // Load remote content
    var _componentModalRemote = function() {
        $('#modal_remote').on('show.bs.modal', function() {
            $(this).find('.modal-body').load('', function() {
                _componentSelect2();
            });
        });
    };

    // Modal callbacks
    var _componentModalCallbacks = function() {

        // onShow callback
        $('#modal_onshow').on('show.bs.modal', function() {
            alert('onShow callback fired.')
        });

        // onShown callback
        $('#modal_onshown').on('shown.bs.modal', function() {
            alert('onShown callback fired.')
        });

        // onHide callback
        $('#modal_onhide').on('hide.bs.modal', function() {
            alert('onHide callback fired.')
        });

        // onHidden callback
        $('#modal_onhidden').on('hidden.bs.modal', function() {
            alert('onHidden callback fired.')
        });
    };

    // Bootbox extension
    var _componentModalBootbox = function() {
        if (typeof bootbox == 'undefined') {
            //console.warn('Warning - bootbox.min.js is not loaded.');
            return;
        }

        // Alert dialog
        $('#alert').on('click', function() {
            bootbox.alert({
                title: 'Check this out!',
                message: 'Native alert dialog has been replaced with Bootbox alert box.'
            });
        });

        // Confirmation dialog
        $('#confirm').on('click', function() {
            bootbox.confirm({
                title: 'Confirm dialog',
                message: 'Native confirm dialog has been replaced with Bootbox confirm box.',
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-primary'
                    },
                    cancel: {
                        label: 'Cancel',
                        className: 'btn-link'
                    }
                },
                callback: function (result) {
                    bootbox.alert({
                        title: 'Confirmation result',
                        message: 'Confirm result: ' + result
                    });
                }
            });
        });

        // Prompt dialog
        $('#prompt').on('click', function() {
            bootbox.prompt({
                title: 'Please enter your name',
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-primary'
                    },
                    cancel: {
                        label: 'Cancel',
                        className: 'btn-link'
                    }
                },
                callback: function (result) {
                    if (result === null) {                                             
                        bootbox.alert({
                            title: 'Prompt dismissed',
                            message: 'You have cancelled this damn thing'
                        });                              
                    } else {
                        bootbox.alert({
                            title: 'Hi <strong>' + result + '</strong>',
                            message: 'How are you doing today?'
                        });                              
                    }
                }
            });
        });

        // Prompt dialog with default value
        $('#prompt_value').on('click', function() {
            bootbox.prompt({
                title: 'What is your real name?',
                value: 'Eugene Kopyov',
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-primary'
                    },
                    cancel: {
                        label: 'Cancel',
                        className: 'btn-link'
                    }
                },
                callback: function(result) {
                    if (result === null) {                                             
                        bootbox.alert({
                            title: 'Prompt dismissed',
                            message: 'You have cancelled this damn thing'
                        });                              
                    } else {
                        bootbox.alert({
                            title: 'Hi <strong>' + result + '</strong>',
                            message: 'How are you doing today?'
                        });                              
                    }
                }
            });
        });

        // Custom bootbox dialog
        $('#bootbox_custom').on('click', function() {
            bootbox.dialog({
                message: 'I am a custom dialog',
                title: 'Custom title',
                buttons: {
                    success: {
                        label: 'Success!',
                        className: 'btn-success',
                        callback: function() {
                            bootbox.alert({
                                title: 'Success!',
                                message: 'This is a great success!'
                            });
                        }
                    },
                    danger: {
                        label: 'Danger!',
                        className: 'btn-danger',
                        callback: function() {
                            bootbox.alert({
                                title: 'Ohh noooo!',
                                message: 'Uh oh, look out!'
                            });
                        }
                    },
                    main: {
                        label: 'Click ME!',
                        className: 'btn-primary',
                        callback: function() {
                            bootbox.alert({
                                title: 'Hooray!',
                                message: 'Something awesome just happened!'
                            });
                        }
                    }
                }
            });
        });

        // Custom bootbox dialog with form
        $('#bootbox_form').on('click', function() {
            bootbox.dialog({
                    title: 'This is a form in a modal.',
                    message: '<div class="row">  ' +
                        '<div class="col-md-12">' +
                            '<form action="">' +
                                '<div class="form-group row">' +
                                    '<label class="col-md-4 col-form-label">Name</label>' +
                                    '<div class="col-md-8">' +
                                        '<input id="name" name="name" type="text" placeholder="Your name" class="form-control">' +
                                        '<span class="form-text text-muted">Here goes your name</span>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="form-group row">' +
                                    '<label class="col-md-4 col-form-label">How awesome is this?</label>' +
                                    '<div class="col-md-8">' +
                                        '<div class="form-check">' +
                                            '<label class="form-check-label">' +
                                                '<input type="radio" class="form-check-input" name="awesomeness" id="awesomeness-0" value="Really awesome" checked>' +
                                                'Really awesomeness' +
                                            '</label>' +
                                        '</div>' +
                                        '<div class="form-check">' +
                                            '<label class="form-check-label">' +
                                                '<input type="radio" class="form-check-input" name="awesomeness" id="awesomeness-1" value="Super awesome">' +
                                                'Super awesome' +
                                            '</label>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>' +
                            '</form>' +
                        '</div>' +
                    '</div>',
                    buttons: {
                        success: {
                            label: 'Save',
                            className: 'btn-success',
                            callback: function () {
                                var name = $('#name').val();
                                var answer = $('input[name="awesomeness"]:checked').val()
                                bootbox.alert({
                                    title: 'Hello ' + name + '!',
                                    message: 'You have chosen <strong>' + answer + '</strong>.'
                                });
                            }
                        }
                    }
                }
            );
        });
    };

    // Select2
    var _componentSelect2 = function() {
        if (!$().select2) {
            console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-control-select2').select2({
            minimumResultsForSearch: Infinity
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        initComponents: function() {
            _componentModalRemote();
            _componentModalCallbacks();
            _componentModalBootbox();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Modals.initComponents();
});

/* ------------------------------------------------------------------------------
 *
 *  # CSS3 animations
 *
 *  Demo JS code for animations_css3.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var AnimationsCSS3 = function() {


    //
    // Setup module components
    //

    // CSS3 animations
    var _componentAnimationCSS = function() {

        // Toggle animations
        $('body').on('click', '.animation', function (e) {

            // Get animation class from 'data' attribute
            var animation = $(this).data('animation');

            // Apply animation once per click
            $(this).parents('.card').addClass('animated ' + animation).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $(this).removeClass('animated ' + animation);
            });
            e.preventDefault();
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentAnimationCSS();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    AnimationsCSS3.init();
});



/* ------------------------------------------------------------------------------
 *
 *  # Velocity animations - basic examples
 *
 *  Demo JS code for animations_velocity_basic.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var AnimationsVelocityBasic = function() {


    //
    // Setup module components
    //

    // Velocity basic
    var _componentAnimationVelocityBasic = function() {
        if (!$().velocity) {
            //console.warn('Warning - velocity.min.js is not loaded.');
            return;
        }

        // Run basic animations
        $('.velocity-property').on('click', function (e) {
            e.preventDefault();
            
            // Get animation class and panel
            var property = $(this).data('property');
            var value = $(this).data('value');

            var property2 = $(this).data('property2');
            var value2 = $(this).data('value2');

            var property3 = $(this).data('property3');
            var value3 = $(this).data('value3');

            // Add options
            var animateMap = {},
            animateOptions = {
                easing: 'easeInOut',
                duration: 250
            };
            animateMap[property] = value;
            animateMap[property2] = value2;
            animateMap[property3] = value3;


            // Add animation class to panel element
            $(this).parents('.demo-velocity-box')
            .velocity(animateMap, animateOptions)
            .velocity("reverse", {
                delay: 1000,
                complete: function() {
                    $(this).removeAttr('style');
                }
            });
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentAnimationVelocityBasic();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    AnimationsVelocityBasic.init();
});


/* ------------------------------------------------------------------------------
 *
 *  # Velocity animations - advanced examples
 *
 *  Demo JS code for animations_velocity_examples.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var AnimationsVelocityAdvanced = function() {


    //
    // Setup module components
    //

    // Velocity advanced
    var _componentAnimationVelocityAdvanced = function() {
        if (!$().velocity) {
            //console.warn('Warning - velocity.min.js is not loaded.');
            return;
        }

        // Properties animation
        $('.velocity-properties').on('click', function (e) {
            e.preventDefault();

            $(this).parent().next().find('.card').velocity({
                marginLeft: 20,
                marginRight: 20,
                opacity: 0.5
            }).velocity('reverse', {
                delay: 1000,
                complete: function() {
                    $(this).removeAttr('style');
                }
            })
        });

        // Chained animation
        $('.velocity-chained').on('click', function (e) {
            e.preventDefault();

            $(this).parent().next().find('.card').velocity({
                marginLeft: 20
            }).velocity('reverse', {
                delay: 1000
            }).velocity({
                marginRight: 20 
            }).velocity('reverse', {
                delay: 1000
            }).velocity({
                opacity: 0.5
            }).velocity('reverse', {
                delay: 1000,
                complete: function() {
                    $(this).removeAttr('style');
                }
            })
        });

        // Stagger animation
        $('.velocity-stagger').on('click', function (e) {
            e.preventDefault();

            $(this).parent().next().find('.card').velocity('transition.slideUpIn', {
                stagger: 500
            });
        });

        // Drag animation
        $('.velocity-drag').on('click', function (e) {
            e.preventDefault();

            $(this).parent().next().find('.card').velocity('transition.slideUpBigIn', {
                duration: 1000,
                drag: true
            });
        });

        // Backwards animation
        $('.velocity-backwards').on('click', function (e) {
            e.preventDefault();

            $(this).parent().next().find('.card').velocity('transition.slideDownOut', {
                stagger: 400,
                backwards: true
            })
            .velocity({ opacity: 1 }, {
              duration: 500,
              display: 'block'
            });
        });


        //
        // Animation callbacks
        //

        // Begin callback
        $('.velocity-begin').on('click', function (e) {
            e.preventDefault();

            $(this).parent().next('.row').velocity({
                marginLeft: 20,
                marginRight: 20,
                opacity: 0.5
            }, {
                begin: function() {
                    alert('Begin callback example');
                }
            }).velocity('reverse', {
                delay: 1000,
                complete: function() {
                    $(this).removeAttr('style');
                }
            })
        });

        // Complete callback
        $('.velocity-complete').on('click', function (e) {
            e.preventDefault();

            $(this).parent().next('.row').velocity({
                marginLeft: 20,
                marginRight: 20,
                opacity: 0.5
            }, {
                complete: function() {
                    alert('Complete callback example');
                }
            }).velocity('reverse', {
                delay: 1000,
                complete: function() {
                    $(this).removeAttr('style');
                }
            })
        });

        // Progress callback animation
        $('.velocity-progress').on('click', function (e) {
            e.preventDefault();

            var $percentComplete = $('#percentComplete'),
                $timeRemaining = $('#timeRemaining');

            $(this).parent().next('.row').velocity({
                marginLeft: 20,
                marginRight: 20,
                opacity: 0.5
            }, {
                duration: 1000,
                progress: function(elements, percentComplete, timeRemaining, timeStart) {
                    $percentComplete.html(Math.round(percentComplete * 100) + '% complete.');
                    $timeRemaining.html(timeRemaining + 'ms remaining.');
                }
            }).velocity('reverse', {
                delay: 1000,
                complete: function() {
                    $(this).removeAttr('style');
                }
            })
        });


        //
        // Animate layout on page load
        //

        // Hide elements first
        $('.sidebar, .navbar, .navbar-brand, .navbar-text, .navbar-nav .nav-item, .page-header, .page-title, .page-header .header-elements, .breadcrumb, .breadcrumb-elements-item, .content > .card, .content .row > [class*=col-], .footer')
            .css('opacity', 0);
    };


    // Animate layout on window load
    var _componentAnimationVelocityLayout = function() {
        if (!$().velocity) {
            //console.warn('Warning - velocity.min.js is not loaded.');
            return;
        }

        // Layout parts - flex
        $('.navbar, .page-title, .page-header .header-elements, .breadcrumb, .content > .card, .footer')
            .css('opacity', 1)
            .velocity('transition.slideDownIn', {
                stagger: 200,
                duration: 200,
                display: 'flex',
                complete: function(elements) {
                    $(this).removeAttr('style');
                }
        });

        // Layout parts - block
        $('.navbar-brand, .navbar-text, .navbar-nav .nav-item, .page-header, .content .row > [class*=col-], .breadcrumb-elements-item')
            .css('opacity', 1)
            .velocity('transition.slideUpIn', {
                stagger: 200,
                duration: 200,
                complete: function(elements) {
                    $(this).removeAttr('style');
                }
        });

        // Sidebar
        $('.sidebar')
            .css({opacity: 0, borderColor: 'transparent'})
            .velocity('transition.slideUpIn', {
                delay: 100,
                duration: 500,
                complete: function(elements) {
                    $(this).removeAttr('style');
                }
        });

        // Navigation list on load
        $('.nav-sidebar > .nav-item, .nav-sidebar > .nav-item-header')
            .css('opacity', 0)
            .velocity('transition.slideLeftIn', {
                delay: 500,
                stagger: 75,
                duration: 200,
                complete: function(elements) {
                    $(this).removeAttr('style')
                }
        });

        // Navigation list on click
        $('.nav-sidebar .nav-item-submenu > .nav-link').on('click', function() {
            if (!$(this).parent().hasClass('nav-item-open')) {
                $(this).next('.nav-group-sub').children('.nav-item').css('opacity', 0).velocity('transition.fadeIn', {
                    delay: 100,
                    stagger: 30,
                    duration: 200,
                    complete: function(elements) {
                        $(this).removeAttr('style')
                    }
                });
            } else {
                $(this).next('.nav-group-sub').children('.nav-item').css('opacity', 0).velocity('transition.fadeOut', {
                    duration: 200,
                    complete: function(elements) {
                        $(this).removeAttr('style')
                    }
                });
            }
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentAnimationVelocityAdvanced();
        },
        initOnLoad: function() {
            _componentAnimationVelocityLayout();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    AnimationsVelocityAdvanced.init();
});

$(window).on('load', function() {
    AnimationsVelocityAdvanced.initOnLoad();
});

/* ------------------------------------------------------------------------------
 *
 *  # Velocity animations - UI effects
 *
 *  Demo JS code for animations_velocity_ui.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var AnimationsVelocityUi = function() {


    //
    // Setup module components
    //

    // Velocity UI
    var _componentAnimationVelocityUi = function() {
        if (!$().velocity) {
            //console.warn('Warning - velocity.min.js is not loaded.');
            return;
        }

        // Run animations
        $('.velocity-animation').on('click', function (e) {

            // Get animation class and card
            var animation = $(this).data('animation');

            // Add animation class to card element
            $(this).parents('.card').velocity('callout.' + animation, { stagger: 500 });
            e.preventDefault();
        });

        // Run transitions
        $('.velocity-transition').on('click', function (e) {

            // Get animation class and card
            var transition = $(this).data('transition');

            // Add animation class to card element
            $(this).parents('.card').velocity('transition.' + transition, { 
                stagger: 1000,
                duration: 1000
            });

            e.preventDefault();
        });

        // Clear styles after 2 seconds
        window.setInterval(function(){
            $('.velocity-transition').parents('.card').removeAttr('style');
        }, 2000);
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentAnimationVelocityUi();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    AnimationsVelocityUi.init();
});

/* ------------------------------------------------------------------------------
 *
 *  # Blog page - detailed
 *
 *  Demo JS code for blog page kit - detailed view
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var BlogSingle = function() {


    //
    // Setup module components
    //

    // CKEditor
    var _componentCKEditor = function() {
        if (typeof CKEDITOR == 'undefined') {
            //console.warn('Warning - ckeditor.js is not loaded.');
            return;
        }

        // Initialize
        CKEDITOR.replace('add-comment', {
            height: 200,
            removeButtons: 'Subscript,Superscript',
            toolbarGroups: [
                { name: 'styles' },
                { name: 'editing',     groups: [ 'find', 'selection' ] },
                { name: 'basicstyles', groups: [ 'basicstyles' ] },
                { name: 'paragraph',   groups: [ 'list', 'blocks', 'align' ] },
                { name: 'links' },
                { name: 'insert' },
                { name: 'colors' },
                { name: 'tools' },
                { name: 'others' },
                { name: 'document',    groups: [ 'mode', 'document', 'doctools' ] }
            ]
        });
    };

    // Lightbox
    var _componentFancybox = function() {
        if (!$().fancybox) {
            //console.warn('Warning - fancybox.min.js is not loaded.');
            return;
        }

        // Image lightbox
        $('[data-popup="lightbox"]').fancybox({
            padding: 3
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentCKEditor();
            _componentFancybox();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    BlogSingle.init();
});

/* ------------------------------------------------------------------------------
 *
 *  # Buttons and button dropdowns
 *
 *  Demo JS code for components_buttons.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var Buttons = function() {


    //
    // Setup module components
    //

    // Progress buttons
    var _componentLadda = function() {
        if (typeof Ladda == 'undefined') {
            //console.warn('Warning - ladda.min.js is not loaded.');
            return;
        }

        // Button with spinner
        Ladda.bind('.btn-ladda-spinner', {
            dataSpinnerSize: 16,
            timeout: 2000
        });

        // Button with progress
        Ladda.bind('.btn-ladda-progress', {
            callback: function(instance) {
                var progress = 0;
                var interval = setInterval(function() {
                    progress = Math.min(progress + Math.random() * 0.1, 1);
                    instance.setProgress(progress);

                    if( progress === 1 ) {
                        instance.stop();
                        clearInterval(interval);
                    }
                }, 200);
            }
        });
    };

    // Loading button
    var _componentLoadingButton = function() {
        $('.btn-loading').on('click', function () {
            var btn = $(this),
                initialText = btn.data('initial-text'),
                loadingText = btn.data('loading-text');
            btn.html(loadingText).addClass('disabled');
            setTimeout(function () {
                btn.html(initialText).removeClass('disabled');
            }, 3000)
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentLadda();
            _componentLoadingButton();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Buttons.init();
});

/* ------------------------------------------------------------------------------
 *
 *  # Collapsible, accordion and other navs
 *
 *  Demo JS code for components_navs.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var ComponentsCollapsible = function() {


    //
    // Setup module components
    //

    // Pickadate picker
    var _componentSortable = function() {
        if (!$().sortable) {
            //console.warn('Warning - interactions.min.js from jQuery UI library is not loaded.');
            return;
        }

        // Accordion component sorting
        $('.accordion-sortable').sortable({
            connectWith: '.accordion-sortable',
            items: '.card',
            helper: 'original',
            cursor: 'move',
            handle: '[data-action=move]:not(.disabled)',
            revert: 100,
            containment: '.content',
            forceHelperSize: true,
            placeholder: 'sortable-placeholder',
            forcePlaceholderSize: true,
            tolerance: 'pointer',
            start: function(e, ui){
                ui.placeholder.height(ui.item.outerHeight());
            }
        });


        // Collapsible component sorting
        $('.collapsible-sortable').sortable({
            connectWith: '.collapsible-sortable',
            items: '.card',
            helper: 'original',
            cursor: 'move',
            handle: '[data-action=move]:not(.disabled)',
            revert: 100,
            containment: '.content',
            forceHelperSize: true,
            placeholder: 'sortable-placeholder',
            forcePlaceholderSize: true,
            tolerance: 'pointer',
            start: function(e, ui){
                ui.placeholder.height(ui.item.outerHeight());
            }
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentSortable();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    ComponentsCollapsible.init();
});

/* ------------------------------------------------------------------------------
 *
 *  # Bootstrap dropdowns
 *
 *  Demo configuration of Dropdown component showcase
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var Dropdowns = function () {


    //
    // Setup module components
    //

    // Switchery
    var _componentSwitchery = function() {
        if (typeof Switchery == 'undefined') {
            //console.warn('Warning - switchery.min.js is not loaded.');
            return;
        }

        // Initialize multiple switches
        var toggle = Array.prototype.slice.call(document.querySelectorAll('.form-input-switchery'));
        
        toggle.forEach(function(html) {
            var switchery = new Switchery(html);
        });
    };

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            //console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-input-styled').uniform();
    };


    //
    // Return objects assigned to module
    //

    return {
        initComponents: function() {
            _componentSwitchery();
            _componentUniform();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Dropdowns.initComponents();
});

/* ------------------------------------------------------------------------------
 *
 *  # Media objects
 *
 *  Demo JS code for components_media.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var Media = function () {


    //
    // Setup module components
    //

    // Switchery
    var _componentSwitchery = function() {
        if (typeof Switchery == 'undefined') {
            //console.warn('Warning - switchery.min.js is not loaded.');
            return;
        }

        // Initialize
        var elems = Array.prototype.slice.call(document.querySelectorAll('.form-control-switchery'));
        elems.forEach(function(html) {
            var switchery = new Switchery(html);
        });
    };

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            //console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-input-styled').uniform();
    };


    //
    // Return objects assigned to module
    //

    return {
        initComponents: function() {
            _componentSwitchery();
            _componentUniform();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Media.initComponents();
});

/* ------------------------------------------------------------------------------
 *
 *  # Bootstrap modals and extensions
 *
 *  Demo JS code for components_modals.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var Modals = function () {


    //
    // Setup module components
    //

    // Load remote content
    var _componentModalRemote = function() {
        $('#modal_remote').on('show.bs.modal', function() {
            $(this).find('.modal-body').load('', function() {
                _componentSelect2();
            });
        });
    };

    // Modal callbacks
    var _componentModalCallbacks = function() {

        // onShow callback
        $('#modal_onshow').on('show.bs.modal', function() {
            alert('onShow callback fired.')
        });

        // onShown callback
        $('#modal_onshown').on('shown.bs.modal', function() {
            alert('onShown callback fired.')
        });

        // onHide callback
        $('#modal_onhide').on('hide.bs.modal', function() {
            alert('onHide callback fired.')
        });

        // onHidden callback
        $('#modal_onhidden').on('hidden.bs.modal', function() {
            alert('onHidden callback fired.')
        });
    };

    // Bootbox extension
    var _componentModalBootbox = function() {
        if (typeof bootbox == 'undefined') {
            //console.warn('Warning - bootbox.min.js is not loaded.');
            return;
        }

        // Alert dialog
        $('#alert').on('click', function() {
            bootbox.alert({
                title: 'Check this out!',
                message: 'Native alert dialog has been replaced with Bootbox alert box.'
            });
        });

        // Confirmation dialog
        $('#confirm').on('click', function() {
            bootbox.confirm({
                title: 'Confirm dialog',
                message: 'Native confirm dialog has been replaced with Bootbox confirm box.',
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-primary'
                    },
                    cancel: {
                        label: 'Cancel',
                        className: 'btn-link'
                    }
                },
                callback: function (result) {
                    bootbox.alert({
                        title: 'Confirmation result',
                        message: 'Confirm result: ' + result
                    });
                }
            });
        });

        // Prompt dialog
        $('#prompt').on('click', function() {
            bootbox.prompt({
                title: 'Please enter your name',
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-primary'
                    },
                    cancel: {
                        label: 'Cancel',
                        className: 'btn-link'
                    }
                },
                callback: function (result) {
                    if (result === null) {                                             
                        bootbox.alert({
                            title: 'Prompt dismissed',
                            message: 'You have cancelled this damn thing'
                        });                              
                    } else {
                        bootbox.alert({
                            title: 'Hi <strong>' + result + '</strong>',
                            message: 'How are you doing today?'
                        });                              
                    }
                }
            });
        });

        // Prompt dialog with default value
        $('#prompt_value').on('click', function() {
            bootbox.prompt({
                title: 'What is your real name?',
                value: 'Eugene Kopyov',
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-primary'
                    },
                    cancel: {
                        label: 'Cancel',
                        className: 'btn-link'
                    }
                },
                callback: function(result) {
                    if (result === null) {                                             
                        bootbox.alert({
                            title: 'Prompt dismissed',
                            message: 'You have cancelled this damn thing'
                        });                              
                    } else {
                        bootbox.alert({
                            title: 'Hi <strong>' + result + '</strong>',
                            message: 'How are you doing today?'
                        });                              
                    }
                }
            });
        });

        // Custom bootbox dialog
        $('#bootbox_custom').on('click', function() {
            bootbox.dialog({
                message: 'I am a custom dialog',
                title: 'Custom title',
                buttons: {
                    success: {
                        label: 'Success!',
                        className: 'btn-success',
                        callback: function() {
                            bootbox.alert({
                                title: 'Success!',
                                message: 'This is a great success!'
                            });
                        }
                    },
                    danger: {
                        label: 'Danger!',
                        className: 'btn-danger',
                        callback: function() {
                            bootbox.alert({
                                title: 'Ohh noooo!',
                                message: 'Uh oh, look out!'
                            });
                        }
                    },
                    main: {
                        label: 'Click ME!',
                        className: 'btn-primary',
                        callback: function() {
                            bootbox.alert({
                                title: 'Hooray!',
                                message: 'Something awesome just happened!'
                            });
                        }
                    }
                }
            });
        });

        // Custom bootbox dialog with form
        $('#bootbox_form').on('click', function() {
            bootbox.dialog({
                    title: 'This is a form in a modal.',
                    message: '<div class="row">  ' +
                        '<div class="col-md-12">' +
                            '<form action="">' +
                                '<div class="form-group row">' +
                                    '<label class="col-md-4 col-form-label">Name</label>' +
                                    '<div class="col-md-8">' +
                                        '<input id="name" name="name" type="text" placeholder="Your name" class="form-control">' +
                                        '<span class="form-text text-muted">Here goes your name</span>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="form-group row">' +
                                    '<label class="col-md-4 col-form-label">How awesome is this?</label>' +
                                    '<div class="col-md-8">' +
                                        '<div class="form-check">' +
                                            '<label class="form-check-label">' +
                                                '<input type="radio" class="form-check-input" name="awesomeness" id="awesomeness-0" value="Really awesome" checked>' +
                                                'Really awesomeness' +
                                            '</label>' +
                                        '</div>' +
                                        '<div class="form-check">' +
                                            '<label class="form-check-label">' +
                                                '<input type="radio" class="form-check-input" name="awesomeness" id="awesomeness-1" value="Super awesome">' +
                                                'Super awesome' +
                                            '</label>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>' +
                            '</form>' +
                        '</div>' +
                    '</div>',
                    buttons: {
                        success: {
                            label: 'Save',
                            className: 'btn-success',
                            callback: function () {
                                var name = $('#name').val();
                                var answer = $('input[name="awesomeness"]:checked').val()
                                bootbox.alert({
                                    title: 'Hello ' + name + '!',
                                    message: 'You have chosen <strong>' + answer + '</strong>.'
                                });
                            }
                        }
                    }
                }
            );
        });
    };

    // Select2
    var _componentSelect2 = function() {
        if (!$().select2) {
            //console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-control-select2').select2({
            minimumResultsForSearch: Infinity
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        initComponents: function() {
            _componentModalRemote();
            _componentModalCallbacks();
            _componentModalBootbox();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Modals.initComponents();
});

/* ------------------------------------------------------------------------------
 *
 *  # Pagination
 *
 *  Specific JS code additions for components_pagination.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var Pagination = function () {


    //
    // Setup module components
    //

    // Dynamic pagination
    var _componentPaginationDynamic = function() {
        if (!$().twbsPagination) {
            //console.warn('Warning - sweet_alert.min.js is not loaded.');
            return;
        }

        // Basic
        $('.twbs-default').twbsPagination({
            totalPages: 35,
            visiblePages: 4,
            prev: 'Prev',
            first: null,
            last: null,
            onPageClick: function (event, page) {
                $('.twbs-content-default').text('Page #' + page + ' content');
            }
        });

        // Flat style
        $('.twbs-flat').twbsPagination({
            totalPages: 35,
            visiblePages: 4,
            prev: 'Prev',
            first: null,
            last: null,
            onPageClick: function (event, page) {
                $('.twbs-content-flat').text('Page #' + page + ' content');
            }
        });

        // Separated style
        $('.twbs-separated').twbsPagination({
            totalPages: 35,
            visiblePages: 4,
            prev: 'Prev',
            first: null,
            last: null,
            onPageClick: function (event, page) {
                $('.twbs-content-separated').text('Page #' + page + ' content');
            }
        });

        // Custom button text
        $('.twbs-prev-next').twbsPagination({
            totalPages: 35,
            visiblePages: 3,
            prev: '&#8672;',
            next: '&#8674;',
            first: '&#8676;',
            last: '&#8677;',
            onPageClick: function (event, page) {
                $('.twbs-content-prev-next').text('Page #' + page + ' content');
            }
        });

        // Custom start page
        $('.twbs-page-start').twbsPagination({
            totalPages: 35,
            visiblePages: 4,
            startPage: 3,
            prev: 'Prev',
            first: null,
            last: null,
            onPageClick: function (event, page) {
                $('.twbs-content-page-start').text('Page #' + page + ' content');
            }
        });

        // Set number of visible pages
        $('.twbs-visible-pages').twbsPagination({
            totalPages: 35,
            visiblePages: 2,
            prev: '&larr;',
            next: '&rarr;',
            first: null,
            last: null,
            onPageClick: function (event, page) {
                $('.twbs-content-visible-pages').text('Page #' + page + ' content');
            }
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        initComponents: function() {
            _componentPaginationDynamic();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Pagination.initComponents();
});
/* ------------------------------------------------------------------------------
 *
 *  # Tooltips and popovers
 *
 *  Demo JS code for components_popups.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var Popups = function () {


    //
    // Setup module components
    //

    // Custom tooltip color
    var _componentTooltipCustomColor = function() {
        $('[data-popup=tooltip-custom]').tooltip({
            template: '<div class="tooltip"><div class="arrow border-teal"></div><div class="tooltip-inner bg-teal"></div></div>'
        });
    };

    // Tooltip events
    var _componentTooltipEvents = function() {

        // onShow event
        $('#tooltip-show').tooltip({
            title: 'I am a tooltip',
            trigger: 'click'
        }).on('show.bs.tooltip', function() {
            alert('Show event fired.');
        });

        // onShown event
        $('#tooltip-shown').tooltip({
            title: 'I am a tooltip',
            trigger: 'click'
        }).on('shown.bs.tooltip', function() {
            alert('Shown event fired.');
        });

        // onHide event
        $('#tooltip-hide').tooltip({
            title: 'I am a tooltip',
            trigger: 'click'
        }).on('hide.bs.tooltip', function() {
            alert('Hide event fired.');
        });

        // onHidden event
        $('#tooltip-hidden').tooltip({
            title: 'I am a tooltip',
            trigger: 'click'
        }).on('hidden.bs.tooltip', function() {
            alert('Hidden event fired.');
        });
    };

    // Tooltip methods
    var _componentTooltipMethods = function() {

        // Show method
        $('#show-tooltip-method').on('click', function() {
            $('#show-tooltip-method-target').tooltip('show');
        });

        // Hide method
        $('#hide-tooltip-method-target').on('mouseenter', function() {
            $(this).tooltip('show')
        });
        $('#hide-tooltip-method').on('click', function() {
            $('#hide-tooltip-method-target').tooltip('hide');
        });

        // Toggle method
        $('#toggle-tooltip-method').on('click', function() {
            $('#toggle-tooltip-method-target').tooltip('toggle');
        })

        // Dispose method
        $('#dispose-tooltip-method').on('click', function() {
            $('#dispose-tooltip-method-target').tooltip('dispose');
        });

        // Toggle enable method
        $('#toggle-enabled-tooltip-method').on('click', function() {
            $('#toggle-enabled-tooltip-method-target').tooltip('toggleEnabled');
        });
    };


    // Custom popover color
    var _componentPopoverCustomHeaderColor = function() {
        $('[data-popup=popover-custom]').popover({
            template: '<div class="popover border-teal"><div class="arrow"></div><h3 class="popover-header bg-teal"></h3><div class="popover-body"></div></div>'
        });
    };

    // Custom popover background color
    var _componentPopoverCustomBackgroundColor = function() {
        $('[data-popup=popover-solid]').popover({
            template: '<div class="popover bg-primary border-primary"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body text-white"></div></div>'
        });
    };

    // Popover events
    var _componentPopoverEvents = function() {

        // onShow event
        $('#popover-show').popover({
            title: 'Popover title',
            content: 'And here\'s some amazing content. It\'s very engaging. Right?',
            trigger: 'click'
        }).on('show.bs.popover', function() {
            alert('Show event fired.');
        });

        // onShown event
        $('#popover-shown').popover({
            title: 'Popover title',
            content: 'And here\'s some amazing content. It\'s very engaging. Right?',
            trigger: 'click'
        }).on('shown.bs.popover', function() {
            alert('Shown event fired.');
        });

        // onHide event
        $('#popover-hide').popover({
            title: 'Popover title',
            content: 'And here\'s some amazing content. It\'s very engaging. Right?',
            placement: 'top',
            trigger: 'click'
        }).on('hide.bs.popover', function() {
            alert('Hide event fired.');
        });

        // onHidden event
        $('#popover-hidden').popover({
            title: 'Popover title',
            content: 'And here\'s some amazing content. It\'s very engaging. Right?',
            trigger: 'click'
        }).on('hidden.bs.popover', function() {
            alert('Hidden event fired.');
        });
    };

    // Popover methods
    var _componentPopoverMethods = function() {

        // Show method
        $('#show-popover-method').on('click', function() {
            $('#show-popover-method-target').popover('show');
        })

        // Hide method
        $('#hide-popover-method-target').on('mouseenter', function() {
            $(this).popover('show')
        });
        $('#hide-popover-method').on('click', function() {
            $('#hide-popover-method-target').popover('hide');
        });

        // Toggle method
        $('#toggle-popover-method').on('click', function() {
            $('#toggle-popover-method-target').popover('toggle');
        })

        // Dispose method
        $('#dispose-popover-method').on('click', function() {
            $('#dispose-popover-method-target').popover('dispose');
        });

        // Toggle enable method
        $('#toggle-enabled-popover-method').on('click', function() {
            $('#toggle-enabled-popover-method-target').popover('toggleEnabled');
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentTooltipCustomColor();
            _componentTooltipEvents();
            _componentTooltipMethods();
            _componentPopoverCustomHeaderColor();
            _componentPopoverCustomBackgroundColor();
            _componentPopoverEvents();
            _componentPopoverMethods();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Popups.init();
});

/* ------------------------------------------------------------------------------
 *
 *  # Progress bars & loaders
 *
 *  Demo JS code for components_progress.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var Progress = function() {


    //
    // Setup module components
    //

    // Enhanced progress bars
    var _componentProgress = function() {
        if (!$().progressbar) {
            //console.warn('Warning - progressbar.min.js is not loaded.');
            return;
        }


        // Basic progress bar
        // ------------------------------

        // Start
        $('#h-default-basic-start').on('click', function() {
            var $pb = $('#h-default-basic .progress-bar');
            $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
            $pb.progressbar();
        });

        // Reset
        $('#h-default-basic-reset').on('click', function() {
            $('#h-default-basic .progress-bar').attr('data-transitiongoal', 0).progressbar();
        });


        // Progress bar in right direction
        // ------------------------------

        // Start
        $('#h-right-basic-start').on('click', function() {
            var $pb = $('#h-right-basic .progress-bar');
            $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
            $pb.progressbar();
        });

        // Reset
        $('#h-right-basic-reset').on('click', function() {
            $('#h-right-basic .progress-bar').attr('data-transitiongoal', 0).progressbar();
        });


        // Progress bar with text fill
        // ------------------------------

        // Start
        $('#h-fill-basic-start').on('click', function() {
            var $pb = $('#h-fill-basic .progress-bar');
            $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
            $pb.progressbar({display_text: 'fill'});
        });

        // Reset
        $('#h-fill-basic-reset').on('click', function() {
            $('#h-fill-basic .progress-bar').attr('data-transitiongoal', 0).progressbar({display_text: 'fill'});
        });


        // Start
        $('#h-fill-basic-right-start').on('click', function() {
            var $pb = $('#h-fill-basic-right .progress-bar');
            $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
            $pb.progressbar({display_text: 'fill'});
        });

        // Reset
        $('#h-fill-basic-right-reset').on('click', function() {
            $('#h-fill-basic-right .progress-bar').attr('data-transitiongoal', 0).progressbar({display_text: 'fill'});
        });


        // Progress bar with non-percentage text
        // ------------------------------

        // Start
        $('#h-fill-nonpercentage-basic-start').on('click', function() {
            var $pb = $('#h-fill-nonpercentage-basic .progress-bar');
            $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
            $pb.progressbar({display_text: 'fill', use_percentage: false});
        });

        // Reset
        $('#h-fill-nonpercentage-basic-reset').on('click', function() {
            $('#h-fill-nonpercentage-basic .progress-bar').attr('data-transitiongoal', 0).progressbar({display_text: 'fill', use_percentage: false});
        });


        // Start
        $('#h-fill-nonpercentage-right-basic-start').on('click', function() {
            var $pb = $('#h-fill-nonpercentage-right-basic .progress-bar');
            $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
            $pb.progressbar({display_text: 'fill', use_percentage: false});
        });

        // Reset
        $('#h-fill-nonpercentage-right-basic-reset').on('click', function() {
            $('#h-fill-nonpercentage-right-basic .progress-bar').attr('data-transitiongoal', 0).progressbar({display_text: 'fill', use_percentage: false});
        });
            


        // Vertical progress bar
        // ------------------------------

        // Start
        $('#v-default-basic-start').on('click', function() {
            $('#v-default-basic .progress-bar').each(function () {
                var $pb = $(this);
                $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
                $pb.progressbar();
            });
        });

        // Reset
        $('#v-default-basic-reset').on('click', function() {
            $('#v-default-basic .progress-bar').attr('data-transitiongoal', 0).progressbar();
        });


        // Bottom direction
        // ------------------------------

        // Start
        $('#v-bottom-basic-start').on('click', function() {
            $('#v-bottom-basic .progress-bar').each(function () {
                var $pb = $(this);
                $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
                $pb.progressbar();
            });
        });

        // Reset
        $('#v-bottom-basic-reset').on('click', function() {
            $('#v-bottom-basic .progress-bar').attr('data-transitiongoal', 0).progressbar();
        });


        // Vertical progress bar with text fill
        // ------------------------------

        // Start
        $('#v-fill-basic-start').on('click', function() {
            $('#v-fill-basic .progress-bar').each(function () {
                var $pb = $(this);
                $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
                $pb.progressbar({display_text: 'fill'});
            });
        });

        // Reset
        $('#v-fill-basic-reset').on('click', function() {
            $('#v-fill-basic .progress-bar').attr('data-transitiongoal', 0).progressbar();
        });

        // Start
        $('#v-fill-bottom-start').on('click', function() {
            $('#v-fill-bottom .progress-bar').each(function () {
                var $pb = $(this);
                $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
                $pb.progressbar({display_text: 'fill'});
            });
        });

        // Reset
        $('#v-fill-bottom-reset').on('click', function() {
            $('#v-fill-bottom .progress-bar').attr('data-transitiongoal', 0).progressbar();
        });


        // Vertical progress bar with non-percentage text
        // ------------------------------

        // Start
        $('#v-fill-nonpercentage-basic-start').on('click', function() {
            $('#v-fill-nonpercentage-basic .progress-bar').each(function () {
                var $pb = $(this);
                $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
                $pb.progressbar({display_text: 'fill', use_percentage: false});
            });
        });

        // Reset
        $('#v-fill-nonpercentage-basic-reset').on('click', function() {
            $('#v-fill-nonpercentage-basic .progress-bar').attr('data-transitiongoal', 0).progressbar();
        });

        // Start
        $('#v-fill-nonpercentage-bottom-start').on('click', function() {
            $('#v-fill-nonpercentage-bottom .progress-bar').each(function () {
                var $pb = $(this);
                $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
                $pb.progressbar({display_text: 'fill', use_percentage: false});
            });
        });

        // Reset
        $('#v-fill-nonpercentage-bottom-reset').on('click', function() {
            $('#v-fill-nonpercentage-bottom .progress-bar').attr('data-transitiongoal', 0).progressbar();
        });
    };

    // BlockUI
    var _componentBlockui = function() {
        if (!$().block) {
            //console.warn('Warning - blockui.min.js is not loaded.');
            return;
        }


        // Spinner #1
        // ------------------------------

        // Light
        $('#spinner-light').on('click', function() {
            var light = $(this).closest('.card');
            $(light).block({
                message: '<i class="icon-spinner spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.8,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none'
                }
            });
            window.setTimeout(function () {
                $(light).unblock();
            }, 2000);
        });

        // Dark
        $('#spinner-dark').on('click', function() {
            var dark = $(this).closest('.card');
            $(dark).block({
                message: '<i class="icon-spinner spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#1B2024',
                    opacity: 0.85,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none',
                    color: '#fff'
                }
            });
            window.setTimeout(function () {
                $(dark).unblock();
            }, 2000);
        });



        // Spinner #2
        // ------------------------------

        // Light
        $('#spinner-light-2').on('click', function() {
            var light_2 = $(this).closest('.card');
            $(light_2).block({
                message: '<i class="icon-spinner2 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.8,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none'
                }
            });
            window.setTimeout(function () {
                $(light_2).unblock();
            }, 2000);
        });

        // Dark
        $('#spinner-dark-2').on('click', function() {
            var dark_2 = $(this).closest('.card');
            $(dark_2).block({
                message: '<i class="icon-spinner2 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#1B2024',
                    opacity: 0.85,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none',
                    color: '#fff'
                }
            });
            window.setTimeout(function () {
                $(dark_2).unblock();
            }, 2000);
        });



        // Spinner #3
        // ------------------------------

        // Light
        $('#spinner-light-3').on('click', function() {
            var light_3 = $(this).closest('.card');
            $(light_3).block({
                message: '<i class="icon-spinner3 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.8,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none'
                }
            });
            window.setTimeout(function () {
                $(light_3).unblock();
            }, 2000);
        });

        // Dark
        $('#spinner-dark-3').on('click', function() {
            var dark_3 = $(this).closest('.card');
            $(dark_3).block({
                message: '<i class="icon-spinner3 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#1B2024',
                    opacity: 0.85,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none',
                    color: '#fff'
                }
            });
            window.setTimeout(function () {
                $(dark_3).unblock();
            }, 2000);
        });



        // Spinner #4
        // ------------------------------

        // Light
        $('#spinner-light-4').on('click', function() {
            var light_4 = $(this).closest('.card');
            $(light_4).block({
                message: '<i class="icon-spinner4 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.8,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none'
                }
            });
            window.setTimeout(function () {
                $(light_4).unblock();
            }, 2000);
        });

        // Dark
        $('#spinner-dark-4').on('click', function() {
            var dark_4 = $(this).closest('.card');
            $(dark_4).block({
                message: '<i class="icon-spinner4 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#1B2024',
                    opacity: 0.85,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none',
                    color: '#fff'
                }
            });
            window.setTimeout(function () {
                $(dark_4).unblock();
            }, 2000);
        });



        // Spinner #5
        // ------------------------------

        // Light
        $('#spinner-light-5').on('click', function() {
            var light_5 = $(this).closest('.card');
            $(light_5).block({
                message: '<i class="icon-spinner6 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.8,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none'
                }
            });
            window.setTimeout(function () {
                $(light_5).unblock();
            }, 2000);
        });

        // Dark
        $('#spinner-dark-5').on('click', function() {
            var dark_5 = $(this).closest('.card');
            $(dark_5).block({
                message: '<i class="icon-spinner6 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#1B2024',
                    opacity: 0.85,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none',
                    color: '#fff'
                }
            });
            window.setTimeout(function () {
                $(dark_5).unblock();
            }, 2000);
        });



        // Spinner #6
        // ------------------------------

        // Light
        $('#spinner-light-6').on('click', function() {
            var light_6 = $(this).closest('.card');
            $(light_6).block({
                message: '<i class="icon-spinner9 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.8,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none'
                }
            });
            window.setTimeout(function () {
                $(light_6).unblock();
            }, 2000);
        });

        // Dark
        $('#spinner-dark-6').on('click', function() {
            var dark_6 = $(this).closest('.card');
            $(dark_6).block({
                message: '<i class="icon-spinner9 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#1B2024',
                    opacity: 0.85,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none',
                    color: '#fff'
                }
            });
            window.setTimeout(function () {
                $(dark_6).unblock();
            }, 2000);
        });



        // Spinner #7
        // ------------------------------

        // Light
        $('#spinner-light-7').on('click', function() {
            var light_7 = $(this).closest('.card');
            $(light_7).block({
                message: '<i class="icon-spinner10 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.8,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none'
                }
            });
            window.setTimeout(function () {
                $(light_7).unblock();
            }, 2000);
        });

        // Dark
        $('#spinner-dark-7').on('click', function() {
            var dark_7 = $(this).closest('.card');
            $(dark_7).block({
                message: '<i class="icon-spinner10 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#1B2024',
                    opacity: 0.85,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none',
                    color: '#fff'
                }
            });
            window.setTimeout(function () {
                $(dark_7).unblock();
            }, 2000);
        });



        // Spinner #8
        // ------------------------------

        // Light
        $('#spinner-light-8').on('click', function() {
            var light_8 = $(this).closest('.card');
            $(light_8).block({
                message: '<i class="icon-spinner11 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.8,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none'
                }
            });
            window.setTimeout(function () {
                $(light_8).unblock();
            }, 2000);
        });

        // Dark
        $('#spinner-dark-8').on('click', function() {
            var dark_8 = $(this).closest('.card');
            $(dark_8).block({
                message: '<i class="icon-spinner11 spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#1B2024',
                    opacity: 0.85,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none',
                    color: '#fff'
                }
            });
            window.setTimeout(function () {
                $(dark_8).unblock();
            }, 2000);
        });



        // Spinner #9
        // ------------------------------

        // Light
        $('#spinner-light-9').on('click', function() {
            var light_9 = $(this).closest('.card');
            $(light_9).block({
                message: '<i class="icon-sync spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#fff',
                    opacity: 0.8,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none'
                }
            });
            window.setTimeout(function () {
                $(light_9).unblock();
            }, 2000);
        });

        // Dark
        $('#spinner-dark-9').on('click', function() {
            var dark_9 = $(this).closest('.card');
            $(dark_9).block({
                message: '<i class="icon-sync spinner"></i>',
                overlayCSS: {
                    backgroundColor: '#1B2024',
                    opacity: 0.85,
                    cursor: 'wait'
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none',
                    color: '#fff'
                }
            });
            window.setTimeout(function () {
                $(dark_9).unblock();
            }, 2000);
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentProgress();
            _componentBlockui();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Progress.init();
});
/* ------------------------------------------------------------------------------
 *
 *  # Scrollspy
 *
 *  Demo JS code for components_scrollspy.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var Scrollspy = function () {


    //
    // Setup module components
    //

    // Sticky
    var _componentSticky = function() {
        if (!$().stick_in_parent) {
            //console.warn('Warning - sticky.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.sidebar-sticky .sidebar').stick_in_parent({
            offset_top: 20,
            parent: '.content'
        });

        // Detach on mobiles
        $('.sidebar-mobile-component-toggle').on('click', function() {
            $('.sidebar-sticky .sidebar').trigger("sticky_kit:detach");
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        initComponents: function() {
            _componentSticky();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Scrollspy.initComponents();
});

/* ------------------------------------------------------------------------------
 *
 *  # Cards content
 *
 *  Demo JS code for content_cards_content.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var CardsContent = function() {


    //
    // Setup module components
    //

    // Lightbox
    var _componentFancybox = function() {
        if (!$().fancybox) {
            //console.warn('Warning - fancybox.min.js is not loaded.');
            return;
        }

        // Image lightbox
        $('[data-popup="lightbox"]').fancybox({
            padding: 3
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentFancybox();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    CardsContent.init();
});
/* ------------------------------------------------------------------------------
 *
 *  # Draggable cards
 *
 *  Demo JS code for content_cards_draggable.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var CardsDraggable = function() {


    //
    // Setup module components
    //

    // jQuery UI Sortable
    var _componentSortable = function() {
        if (!$().sortable) {
            //console.warn('Warning - jquery_ui.js components are not loaded.');
            return;
        }

        // Sortable rows
        $('.row-sortable').sortable({
            connectWith: '.row-sortable',
            items: '.card',
            helper: 'original',
            cursor: 'move',
            handle: '[data-action=move]',
            revert: 100,
            containment: '.content-wrapper',
            forceHelperSize: true,
            placeholder: 'sortable-placeholder',
            forcePlaceholderSize: true,
            tolerance: 'pointer',
            start: function(e, ui){
                ui.placeholder.height(ui.item.outerHeight());
            }
        });

        // Sortable column
        $('.column-card-sortable').sortable({
            connectWith: '.column-sortable',
            items: '.card',
            helper: 'original',
            cursor: 'move',
            handle: '[data-action=move]',
            revert: 100,
            containment: '.content-wrapper',
            forceHelperSize: true,
            placeholder: 'sortable-placeholder',
            forcePlaceholderSize: true,
            tolerance: 'pointer',
            start: function(e, ui){
                ui.placeholder.height(ui.item.outerHeight());
            }
        });

        // Exclude element from sort
        $('.sortable-exclude').sortable({
            connectWith: '.custom-sortable',
            items: '.card:not(.skip-sort)',
            helper: 'original',
            cursor: 'move',
            handle: '[data-action=move]',
            revert: 100,
            containment: '.content-wrapper',
            forceHelperSize: true,
            placeholder: 'sortable-placeholder',
            forcePlaceholderSize: true,
            tolerance: 'pointer',
            start: function(e, ui){
                ui.placeholder.height(ui.item.outerHeight());
            }
        });

        // Change sort handle
        $('.sortable-heading').sortable({
            connectWith: '.heading-sortable',
            items: '.card',
            helper: 'original',
            cursor: 'move',
            handle: '.card-title, [data-action=move]',
            revert: 100,
            containment: '.content-wrapper',
            forceHelperSize: true,
            placeholder: 'sortable-placeholder',
            forcePlaceholderSize: true,
            tolerance: 'pointer',
            start: function(e, ui){
                ui.placeholder.height(ui.item.outerHeight());
            }
        });

        // Sortable card
        $('.sortable-card').sortable({
            connectWith: '.card-sortable',
            items: '.card',
            helper: 'original',
            cursor: 'move',
            revert: 100,
            containment: '.content-wrapper',
            forceHelperSize: true,
            placeholder: 'sortable-placeholder',
            forcePlaceholderSize: true,
            tolerance: 'pointer',
            start: function(e, ui){
                ui.placeholder.height(ui.item.outerHeight());
            }
        });

        // Sortable elements
        $('.elements-sortable').sortable({
            connectWith: '.elements-sortable',
            items: '.card-heading, .table-responsive',
            helper: 'original',
            cursor: 'move',
            handle: '[data-action=move]',
            revert: 100,
            containment: '.content-wrapper',
            forceHelperSize: true,
            placeholder: 'sortable-placeholder',
            forcePlaceholderSize: true,
            tolerance: 'pointer',
            start: function(e, ui){
                ui.placeholder.height(ui.item.outerHeight());
            }
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentSortable();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    CardsDraggable.init();
});

/* ------------------------------------------------------------------------------
 *
 *  # Card footer elements
 *
 *  Demo JS code for content_cards_footer.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var CardFooter = function() {


    //
    // Setup module components
    //

    // Switchery
    var _componentSwitchery = function() {
        if (typeof Switchery == 'undefined') {
            //console.warn('Warning - switchery.min.js is not loaded.');
            return;
        }

        // Initialize multiple switches
        var elems = Array.prototype.slice.call(document.querySelectorAll('.form-input-switchery'));
        elems.forEach(function(html) {
            var switchery = new Switchery(html);
        });
    };

    // Bootstrap switch
    var _componentBootstrapSwitch = function() {
        if (!$().bootstrapSwitch) {
            //console.warn('Warning - switch.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-input-switch').bootstrapSwitch();
    };

    // Select2
    var _componentSelect2 = function() {
        if (!$().select2) {
            //console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-control-select2').select2({
            minimumResultsForSearch: Infinity
        });
    };

    // Touchspin
    var _componentTouchSpin = function() {
        if (!$().TouchSpin) {
            //console.warn('Warning - touchspin.min.js is not loaded.');
            return;
        }

        // Horizontal
        $('.form-control-touchspin').TouchSpin({
            min: 0,
            max: 100,
            step: 0.1,
            decimals: 2,
            postfix: '%'
        });

        // Vertical
        $('.form-control-touchspin-vertical').TouchSpin({
            verticalbuttons: true,
            verticalupclass: 'icon-arrow-up22',
            verticaldownclass: 'icon-arrow-down22'
        });
    };

    // Multiselect
    var _componentMulti = function() {
        if (!$().multiselect) {
            //console.warn('Warning - bootstrap-multiselect.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-control-multiselect').multiselect();
    };

    // NoUI slider
    var _componentNouiSlider = function() {
        if (typeof noUiSlider == 'undefined') {
            //console.warn('Warning - nouislider.min.js is not loaded.');
            return;
        }


        //
        // Connect lower side
        //

        // Define element
        var slider_connect_lower = document.getElementById('noui-slider-demo');

        // Create slider
        noUiSlider.create(slider_connect_lower, {
            start: 60,
            connect: 'lower',
            tooltips: true,
            range: {
              'min': 0,
              'max': 100
            }
        });


        //
        // Drag behaviour
        //

        // Define element
        var noui_slider_demo = document.getElementById('noui-slider-demo2');

        // Create slider
        noUiSlider.create(noui_slider_demo, {
            start: [ 20, 80 ],
            behaviour: 'drag',
            connect: true,
            tooltips: true,
            range: {
                'min':  0,
                'max':  100
            }
        });
    };

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            //console.warn('Warning - switch.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-input-styled').uniform({
            fileButtonClass: 'action btn bg-pink-400 btn-icon',
            fileButtonHtml: '<i class="icon-plus2"></i>'
        });
    };

    // jQuery UI slider
    var _componentJuiSlider = function() {
        if (!$().slider) {
            //console.warn('Warning - jQuery UI components are not loaded.');
            return;
        }

        // Basic slider
        $('.jui-slider-basic').slider({
            range: 'min',
            value: 50,
            disabled: true
        });

        // Range slider
        $('.jui-slider-range').slider({
            range: true,
            min: 0,
            max: 60,
            values: [10, 50]
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentSwitchery();
            _componentBootstrapSwitch();

            _componentSelect2();
            _componentTouchSpin();
            _componentMulti();
            _componentNouiSlider();
            _componentUniform();
            _componentJuiSlider();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    CardFooter.init();
});

/* ------------------------------------------------------------------------------
 *
 *  # Card header elements
 *
 *  Demo JS code for content_cards_header.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var CardHeader = function() {


    //
    // Setup module components
    //

    // Switchery
    var _componentSwitchery = function() {
        if (typeof Switchery == 'undefined') {
            //console.warn('Warning - switchery.min.js is not loaded.');
            return;
        }

        // Initialize multiple switches
        var elems = Array.prototype.slice.call(document.querySelectorAll('.form-input-switchery'));
        elems.forEach(function(html) {
            var switchery = new Switchery(html);
        });
    };

    // Bootstrap switch
    var _componentBootstrapSwitch = function() {
        if (!$().bootstrapSwitch) {
            //console.warn('Warning - switch.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-input-switch').bootstrapSwitch();
    };

    // Select2
    var _componentSelect2 = function() {
        if (!$().select2) {
            //console.warn('Warning - select2.min.js is not loaded.');
            return;
        };

        // Initialize
        $('.form-control-select2').select2({
            minimumResultsForSearch: Infinity
        });
    };

    // Touchspin
    var _componentTouchSpin = function() {
        if (!$().TouchSpin) {
            //console.warn('Warning - touchspin.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-control-touchspin').TouchSpin({
            min: 0,
            max: 100,
            step: 0.1,
            decimals: 2,
            postfix: '%'
        });
    };

    // Multiselect
    var _componentMulti = function() {
        if (!$().multiselect) {
            //console.warn('Warning - bootstrap-multiselect.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-control-multiselect').multiselect();
    };

    // NoUI slider
    var _componentNouiSlider = function() {
        if (typeof noUiSlider == 'undefined') {
            //console.warn('Warning - nouislider.min.js is not loaded.');
            return;
        }

        // Define element
        var noui_slider_demo = document.getElementById('noui-slider-demo');

        // Create slider
        noUiSlider.create(noui_slider_demo, {
            start: [ 20, 80 ],
            behaviour: 'drag',
            connect: true,
            tooltips: true,
            range: {
                'min':  0,
                'max':  100
            }
        });
    };

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            //console.warn('Warning - switch.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-input-styled').uniform({
            fileButtonClass: 'action btn bg-pink-400 btn-icon',
            fileButtonHtml: '<i class="icon-plus2"></i>'
        });
    };

    // jQuery UI Sortable
    var _componentSortable = function() {
        if (!$().sortable) {
            //console.warn('Warning - jQuery UI components are not loaded.');
            return;
        }

        // Sortable demo
        $('.row-sortable').sortable({
            connectWith: '.row-sortable',
            items: '.card',
            helper: 'original',
            cursor: 'move',
            handle: '[data-action=move]:not(.disabled)',
            revert: 100,
            containment: '.row-sortable',
            forceHelperSize: true,
            placeholder: 'sortable-placeholder',
            forcePlaceholderSize: true,
            tolerance: 'pointer',
            start: function(e, ui){
                ui.placeholder.height(ui.item.outerHeight());
            }
        });
    };

    // jQuery UI slider
    var _componentJuiSlider = function() {
        if (!$().slider) {
            //console.warn('Warning - jQuery UI components are not loaded.');
            return;
        }

        // Initialize
        $('.jui-slider').slider({
            range: true,
            min: 0,
            max: 60,
            values: [10, 50]
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentSwitchery();
            _componentBootstrapSwitch();
            _componentSelect2();
            _componentTouchSpin();
            _componentMulti();
            _componentNouiSlider();
            _componentSortable();
            _componentUniform();
            _componentJuiSlider();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    CardHeader.init();
});

/* ------------------------------------------------------------------------------
 *
 *  # Page header
 *
 *  Demo JS code for components_page_header.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var PageHeader = function () {


    //
    // Setup module components
    //

    // Daterange picker
    var _componentDateRange = function() {
        if (!$().daterangepicker) {
            //console.warn('Warning - daterangepicker.min.js is not loaded.');
            return;
        }

        //
        // Custom display
        //

        // Initialize with options
        $('#reportrange').daterangepicker(
            {
                startDate: moment().subtract(29, 'days'),
                endDate: moment(),
                minDate: '01/01/2016',
                maxDate: '12/31/2019',
                dateLimit: { days: 60 },
                ranges: {
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                },
                opens: $('html').attr('dir') == 'rtl' ? 'right' : 'left',
                buttonClasses: ['btn'],
                applyClass: 'btn-small btn-info btn-block',
                cancelClass: 'btn-small btn-light btn-block',
                locale: {
                    applyLabel: 'Submit',
                    fromLabel: 'From',
                    toLabel: 'To',
                    customRangeLabel: 'Custom Range',
                    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
                    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    firstDay: 1,
                    direction: $('html').attr('dir') == 'rtl' ? 'rtl' : 'ltr'
                }
            },
            function(start, end) {
                $('#reportrange .daterange-custom-display').html(start.format('<i>D</i> <b><i>MMM</i> <i>YYYY</i></b>') + '<em> &#8211; </em>' + end.format('<i>D</i> <b><i>MMM</i> <i>YYYY</i></b>'));
            }
        );

        // Custom date display layout
        $('#reportrange .daterange-custom-display').html(moment().subtract(29, 'days').format('<i>D</i> <b><i>MMM</i> <i>YYYY</i></b>') + '<em> &#8211; </em>' + moment().format('<i>D</i> <b><i>MMM</i> <i>YYYY</i></b>'));


        //
        // As a button
        //

        // Setup
        $('.daterange-ranges').daterangepicker(
            {
                startDate: moment().subtract(29, 'days'),
                endDate: moment(),
                minDate: '01/01/2014',
                maxDate: '12/31/2016',
                dateLimit: { days: 60 },
                ranges: {
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                },
                opens: $('html').attr('dir') == 'rtl' ? 'right' : 'left',
                applyClass: 'btn-small btn-primary btn-block',
                cancelClass: 'btn-small btn-light btn-block',
                locale: {
                    direction: $('html').attr('dir') == 'rtl' ? 'rtl' : 'ltr'
                }
            },
            function(start, end) {

                // Format date
                $('.daterange-ranges span').html(end.format('MMM D, YYYY') + ' - ' + start.format('MMM D, YYYY'));
            }
        );

        // Format date
        $('.daterange-ranges span').html(moment().format('MMM D, YYYY') + ' - ' + moment().subtract(29, 'days').format('MMM D, YYYY'));
    };

    // Select2 selects
    var _componentSelect2 = function() {
        if (!$().select2) {
            //console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-control-select2').select2({
            minimumResultsForSearch: Infinity
        });
    };

    // Bootstrap multiselect
    var _componentMultiselect = function() {
        if (!$().multiselect) {
            //console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-control-multiselect').multiselect({
            dropRight: true
        });
    };

    // Switchery
    var _componentSwitchery = function() {
        if (typeof Switchery == 'undefined') {
            //console.warn('Warning - switchery.min.js is not loaded.');
            return;
        }

        // Initialize
        var elems = Array.prototype.slice.call(document.querySelectorAll('.form-input-switchery'));
        elems.forEach(function(html) {
            var switchery = new Switchery(html);
        });
    };

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            //console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-input-styled').uniform({
            fileButtonClass: 'action btn bg-warning-400 btn-icon',
            fileButtonHtml: '<i class="icon-upload"></i>'
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        initComponents: function() {
            _componentDateRange();
            _componentSelect2();
            _componentMultiselect();
            _componentSwitchery();
            _componentUniform();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    PageHeader.initComponents();
});

/* ------------------------------------------------------------------------------
 *
 *  # Dashboard configuration
 *
 *  Demo dashboard configuration. Contains charts and plugin initializations
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var Dashboard = function () {


    //
    // Setup module components
    //

    // Setup Switchery
    var _componentSwitchery = function() {
        if (typeof Switchery == 'undefined') {
            //console.warn('Warning - switchery.min.js is not loaded.');
            return;
        }

        // Initialize multiple switches
        var switches = Array.prototype.slice.call(document.querySelectorAll('.form-input-switchery'));
        switches.forEach(function(html) {
            var switchery = new Switchery(html);
        });
    };

    // Setup Daterangepicker
    var _componentDaterange = function() {
        if (!$().daterangepicker) {
            //console.warn('Warning - daterangepicker.js is not loaded.');
            return;
        }

        // Initialize
        $('.daterange-ranges').daterangepicker(
            {
                startDate: moment().subtract(29, 'days'),
                endDate: moment(),
                minDate: '01/01/2015',
                maxDate: '12/31/2019',
                dateLimit: { days: 60 },
                ranges: {
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                },
                opens: $('html').attr('dir') == 'rtl' ? 'right' : 'left',
                applyClass: 'btn-sm bg-slate-600 btn-block',
                cancelClass: 'btn-sm btn-light btn-block',
                locale: {
                    format: 'MM/DD/YYYY',
                    direction: $('html').attr('dir') == 'rtl' ? 'rtl' : 'ltr'
                }
            },
            function(start, end) {
                $('.daterange-ranges span').html(start.format('MMMM D') + ' - ' + end.format('MMMM D'));
            }
        );
        $('.daterange-ranges span').html(moment().subtract(29, 'days').format('MMMM D') + ' - ' + moment().format('MMMM D'));
    };

    // Use first letter as an icon
    var _componentIconLetter = function() {

        // Grab first letter and insert to the icon
        $('.table tr').each(function() {

            // Title
            var $title = $(this).find('.letter-icon-title'),
                letter = $title.eq(0).text().charAt(0).toUpperCase();

            // Icon
            var $icon = $(this).find('.letter-icon');
                $icon.eq(0).text(letter);
        });
    };


    //
    // Charts configs
    //

    // Traffic sources stream chart
    var _TrafficSourcesStreamChart = function(element, height) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if($(element).length > 0) {

            // Basic setup
            // ------------------------------

            // Define main variables
            var d3Container = d3.select(element),
                margin = {top: 5, right: 50, bottom: 40, left: 50},
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                height = height - margin.top - margin.bottom,
                tooltipOffset = 30;

            // Tooltip
            var tooltip = d3Container
                .append('div')
                .attr('class', 'd3-tip e')
                .style('display', 'none')

            // Format date
            var format = d3.time.format('%m/%d/%y %H:%M');
            var formatDate = d3.time.format('%H:%M');

            // Colors
            var colorrange = ['#03A9F4', '#29B6F6', '#4FC3F7', '#81D4FA', '#B3E5FC', '#E1F5FE'];



            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.time.scale().range([0, width]);

            // Vertical
            var y = d3.scale.linear().range([height, 0]);

            // Colors
            var z = d3.scale.ordinal().range(colorrange);



            // Create axes
            // ------------------------------

            // Horizontal
            var xAxis = d3.svg.axis()
                .scale(x)
                .orient('bottom')
                .ticks(d3.time.hours, 4)
                .innerTickSize(4)
                .tickPadding(8)
                .tickFormat(d3.time.format('%H:%M')); // Display hours and minutes in 24h format

            // Left vertical
            var yAxis = d3.svg.axis()
                .scale(y)
                .ticks(6)
                .innerTickSize(4)
                .outerTickSize(0)
                .tickPadding(8)
                .tickFormat(function (d) { return (d/1000) + 'k'; });

            // Right vertical
            var yAxis2 = yAxis;

            // Dash lines
            var gridAxis = d3.svg.axis()
                .scale(y)
                .orient('left')
                .ticks(6)
                .tickPadding(8)
                .tickFormat('')
                .tickSize(-width, 0, 0);



            // Create chart
            // ------------------------------

            // Container
            var container = d3Container.append('svg')

            // SVG element
            var svg = container
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                    .append('g')
                    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');



            // Construct chart layout
            // ------------------------------

            // Stack
            var stack = d3.layout.stack()
                .offset('silhouette')
                .values(function(d) { return d.values; })
                .x(function(d) { return d.date; })
                .y(function(d) { return d.value; });

            // Nest
            var nest = d3.nest()
                .key(function(d) { return d.key; });

            // Area
            var area = d3.svg.area()
                .interpolate('cardinal')
                .x(function(d) { return x(d.date); })
                .y0(function(d) { return y(d.y0); })
                .y1(function(d) { return y(d.y0 + d.y); });



            // Load data
            // ------------------------------

            d3.csv('/parco/global_assets/demo_data/dashboard/traffic_sources.csv', function (error, data) {

                // Pull out values
                data.forEach(function (d) {
                    d.date = format.parse(d.date);
                    d.value = +d.value;
                });

                // Stack and nest layers
                var layers = stack(nest.entries(data));



                // Set input domains
                // ------------------------------

                // Horizontal
                x.domain(d3.extent(data, function(d, i) { return d.date; }));

                // Vertical
                y.domain([0, d3.max(data, function(d) { return d.y0 + d.y; })]);



                // Add grid
                // ------------------------------

                // Horizontal grid. Must be before the group
                svg.append('g')
                    .attr('class', 'd3-grid-dashed')
                    .call(gridAxis);



                //
                // Append chart elements
                //

                // Stream layers
                // ------------------------------

                // Create group
                var group = svg.append('g')
                    .attr('class', 'streamgraph-layers-group');

                // And append paths to this group
                var layer = group.selectAll('.streamgraph-layer')
                    .data(layers)
                    .enter()
                        .append('path')
                        .attr('class', 'streamgraph-layer')
                        .attr('d', function(d) { return area(d.values); })                    
                        .style('stroke', '#fff')
                        .style('stroke-width', 0.5)
                        .style('fill', function(d, i) { return z(i); });

                // Add transition
                var layerTransition = layer
                    .style('opacity', 0)
                    .transition()
                        .duration(750)
                        .delay(function(d, i) { return i * 50; })
                        .style('opacity', 1)



                // Append axes
                // ------------------------------

                //
                // Left vertical
                //

                svg.append('g')
                    .attr('class', 'd3-axis d3-axis-left d3-axis-solid')
                    .call(yAxis.orient('left'));

                // Hide first tick
                d3.select(svg.selectAll('.d3-axis-left .tick text')[0][0])
                    .style('visibility', 'hidden');


                //
                // Right vertical
                //

                svg.append('g')
                    .attr('class', 'd3-axis d3-axis-right d3-axis-solid')
                    .attr('transform', 'translate(' + width + ', 0)')
                    .call(yAxis2.orient('right'));

                // Hide first tick
                d3.select(svg.selectAll('.d3-axis-right .tick text')[0][0])
                    .style('visibility', 'hidden');


                //
                // Horizontal
                //

                var xaxisg = svg.append('g')
                    .attr('class', 'd3-axis d3-axis-horizontal d3-axis-solid')
                    .attr('transform', 'translate(0,' + height + ')')
                    .call(xAxis);

                // Add extra subticks for hidden hours
                xaxisg.selectAll('.d3-axis-subticks')
                    .data(x.ticks(d3.time.hours), function(d) { return d; })
                    .enter()
                    .append('line')
                    .attr('class', 'd3-axis-subticks')
                    .attr('y1', 0)
                    .attr('y2', 4)
                    .attr('x1', x)
                    .attr('x2', x);



                // Add hover line and pointer
                // ------------------------------

                // Append group to the group of paths to prevent appearance outside chart area
                var hoverLineGroup = group.append('g')
                    .attr('class', 'hover-line');

                // Add line
                var hoverLine = hoverLineGroup
                    .append('line')
                    .attr('y1', 0)
                    .attr('y2', height)
                    .style('fill', 'none')
                    .style('stroke', '#fff')
                    .style('stroke-width', 1)
                    .style('pointer-events', 'none')
                    .style('shape-rendering', 'crispEdges')
                    .style('opacity', 0);

                // Add pointer
                var hoverPointer = hoverLineGroup
                    .append('rect')
                    .attr('x', 2)
                    .attr('y', 2)
                    .attr('width', 6)
                    .attr('height', 6)
                    .style('fill', '#03A9F4')
                    .style('stroke', '#fff')
                    .style('stroke-width', 1)
                    .style('shape-rendering', 'crispEdges')
                    .style('pointer-events', 'none')
                    .style('opacity', 0);



                // Append events to the layers group
                // ------------------------------

                layerTransition.each('end', function() {
                    layer
                        .on('mouseover', function (d, i) {
                            svg.selectAll('.streamgraph-layer')
                                .transition()
                                .duration(250)
                                .style('opacity', function (d, j) {
                                    return j != i ? 0.75 : 1; // Mute all except hovered
                                });
                        })

                        .on('mousemove', function (d, i) {
                            mouse = d3.mouse(this);
                            mousex = mouse[0];
                            mousey = mouse[1];
                            datearray = [];
                            var invertedx = x.invert(mousex);
                            invertedx = invertedx.getHours();
                            var selected = (d.values);
                            for (var k = 0; k < selected.length; k++) {
                                datearray[k] = selected[k].date
                                datearray[k] = datearray[k].getHours();
                            }
                            mousedate = datearray.indexOf(invertedx);
                            pro = d.values[mousedate].value;


                            // Display mouse pointer
                            hoverPointer
                                .attr('x', mousex - 3)
                                .attr('y', mousey - 6)
                                .style('opacity', 1);

                            hoverLine
                                .attr('x1', mousex)
                                .attr('x2', mousex)
                                .style('opacity', 1);

                            //
                            // Tooltip
                            //

                            // Tooltip data
                            tooltip.html(
                                '<ul class="list-unstyled mb-1">' +
                                    '<li>' + '<div class="font-size-base my-1"><i class="icon-circle-left2 mr-2"></i>' + d.key + '</div>' + '</li>' +
                                    '<li>' + 'Visits: &nbsp;' + "<span class='font-weight-semibold float-right'>" + pro + '</span>' + '</li>' +
                                    '<li>' + 'Time: &nbsp; ' + '<span class="font-weight-semibold float-right">' + formatDate(d.values[mousedate].date) + '</span>' + '</li>' + 
                                '</ul>'
                            )
                            .style('display', 'block');

                            // Tooltip arrow
                            tooltip.append('div').attr('class', 'd3-tip-arrow');
                        })

                        .on('mouseout', function (d, i) {

                            // Revert full opacity to all paths
                            svg.selectAll('.streamgraph-layer')
                                .transition()
                                .duration(250)
                                .style('opacity', 1);

                            // Hide cursor pointer
                            hoverPointer.style('opacity', 0);

                            // Hide tooltip
                            tooltip.style('display', 'none');

                            hoverLine.style('opacity', 0);
                        });
                    });



                // Append events to the chart container
                // ------------------------------

                d3Container
                    .on('mousemove', function (d, i) {
                        mouse = d3.mouse(this);
                        mousex = mouse[0];
                        mousey = mouse[1];

                        // Move tooltip vertically
                        tooltip.style('top', (mousey - ($('.d3-tip').outerHeight() / 2)) - 2 + 'px') // Half tooltip height - half arrow width

                        // Move tooltip horizontally
                        if(mousex >= ($(element).outerWidth() - $('.d3-tip').outerWidth() - margin.right - (tooltipOffset * 2))) {
                            tooltip
                                .style('left', (mousex - $('.d3-tip').outerWidth() - tooltipOffset) + 'px') // Change tooltip direction from right to left to keep it inside graph area
                                .attr('class', 'd3-tip w');
                        }
                        else {
                            tooltip
                                .style('left', (mousex + tooltipOffset) + 'px' )
                                .attr('class', 'd3-tip e');
                        }
                    });
            });



            // Resize chart
            // ------------------------------

            // Call function on window resize
            $(window).on('resize', resizeStream);

            // Call function on sidebar width change
            $(document).on('click', '.sidebar-control', resizeStream);

            // Resize function
            // 
            // Since D3 doesn't support SVG resize by default,
            // we need to manually specify parts of the graph that need to 
            // be updated on window resize
            function resizeStream() {

                // Layout
                // -------------------------

                // Define width
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;

                // Main svg width
                container.attr('width', width + margin.left + margin.right);

                // Width of appended group
                svg.attr('width', width + margin.left + margin.right);

                // Horizontal range
                x.range([0, width]);


                // Chart elements
                // -------------------------

                // Horizontal axis
                svg.selectAll('.d3-axis-horizontal').call(xAxis);

                // Horizontal axis subticks
                svg.selectAll('.d3-axis-subticks').attr('x1', x).attr('x2', x);

                // Grid lines width
                svg.selectAll('.d3-grid-dashed').call(gridAxis.tickSize(-width, 0, 0))

                // Right vertical axis
                svg.selectAll('.d3-axis-right').attr('transform', 'translate(' + width + ', 0)');

                // Area paths
                svg.selectAll('.streamgraph-layer').attr('d', function(d) { return area(d.values); });
            }
        }
    };

    // App sales line chart
    var _AppSalesLinesChart = function(element, height) {
        if (typeof d3 == 'undefined' || typeof d3.tip == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if($(element).length > 0) {


            // Basic setup
            // ------------------------------

            // Define main variables
            var d3Container = d3.select(element),
                margin = {top: 5, right: 30, bottom: 30, left: 50},
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                height = height - margin.top - margin.bottom;

            // Tooltip
            var tooltip = d3.tip()
                .attr('class', 'd3-tip')
                .html(function (d) {
                    return '<ul class="list-unstyled mb-1">' +
                        '<li>' + '<div class="font-size-base my-1"><i class="icon-circle-left2 mr-2"></i>' + d.name + ' app' + '</div>' + '</li>' +
                        '<li>' + 'Sales: &nbsp;' + '<span class="font-weight-semibold float-right">' + d.value + '</span>' + '</li>' +
                        '<li>' + 'Revenue: &nbsp; ' + '<span class="font-weight-semibold float-right">' + '$' + (d.value * 25).toFixed(2) + '</span>' + '</li>' + 
                    '</ul>';
                });

            // Format date
            var parseDate = d3.time.format('%Y/%m/%d').parse,
                formatDate = d3.time.format('%b %d, %y');

            // Line colors
            var scale = ['#4CAF50', '#FF5722', '#5C6BC0'],
                color = d3.scale.ordinal().range(scale);


            // Create chart
            // ------------------------------

            // Container
            var container = d3Container.append('svg');

            // SVG element
            var svg = container
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
                    .call(tooltip);



            // Add date range switcher
            // ------------------------------

            // Menu
            var menu = $('#select_date').multiselect({
                buttonClass: 'text-default font-weight-semibold bg-transparent border-0 cursor-pointer outline-0 py-0 pl-0',
                enableHTML: true,
                dropRight: $('html').attr('dir') == 'rtl' ? false : true,
                onChange: function() {
                    change();
                },
                buttonText: function (options, element) {
                    var selected = '';
                    options.each(function() {
                        selected += $(this).html() + ', ';
                    });
                    return '<span class="badge badge-mark border-warning mr-2"></span>' + selected.substr(0, selected.length -2);
                }
            });



            // Load data
            // ------------------------------

            d3.csv('/parco/global_assets/demo_data/dashboard/app_sales.csv', function(error, data) {
                formatted = data;
                redraw();
            });


            // Construct layout
            // ------------------------------

            // Add events
            var altKey;
            d3.select(window)
                .on('keydown', function() { altKey = d3.event.altKey; })
                .on('keyup', function() { altKey = false; });
        
            // Set terms of transition on date change   
            function change() {
              d3.transition()
                  .duration(altKey ? 7500 : 500)
                  .each(redraw);
            }



            // Main chart drawing function
            // ------------------------------

            function redraw() {

                // Construct chart layout
                // ------------------------------

                // Create data nests
                var nested = d3.nest()
                    .key(function(d) { return d.type; })
                    .map(formatted)
                
                // Get value from menu selection
                // the option values correspond
                //to the [type] value we used to nest the data  
                var series = menu.val();
                
                // Only retrieve data from the selected series using nest
                var data = nested[series];
                
                // For object constancy we will need to set 'keys', one for each type of data (column name) exclude all others.
                color.domain(d3.keys(data[0]).filter(function(key) { return (key !== 'date' && key !== 'type'); }));

                // Setting up color map
                var linedata = color.domain().map(function(name) {
                    return {
                                name: name,
                                values: data.map(function(d) {
                                    return {name: name, date: parseDate(d.date), value: parseFloat(d[name], 10)};
                                })
                            };
                        });

                // Draw the line
                var line = d3.svg.line()
                    .x(function(d) { return x(d.date); })
                    .y(function(d) { return y(d.value); })
                    .interpolate('cardinal');



                // Construct scales
                // ------------------------------

                // Horizontal
                var x = d3.time.scale()
                    .domain([
                        d3.min(linedata, function(c) { return d3.min(c.values, function(v) { return v.date; }); }),
                        d3.max(linedata, function(c) { return d3.max(c.values, function(v) { return v.date; }); })
                    ])
                    .range([0, width]);

                // Vertical
                var y = d3.scale.linear()
                    .domain([
                        d3.min(linedata, function(c) { return d3.min(c.values, function(v) { return v.value; }); }),
                        d3.max(linedata, function(c) { return d3.max(c.values, function(v) { return v.value; }); })
                    ])
                    .range([height, 0]);



                // Create axes
                // ------------------------------

                // Horizontal
                var xAxis = d3.svg.axis()
                    .scale(x)
                    .orient('bottom')
                    .tickPadding(8)
                    .ticks(d3.time.days)
                    .innerTickSize(4)
                    .tickFormat(d3.time.format('%a')); // Display hours and minutes in 24h format

                // Vertical
                var yAxis = d3.svg.axis()
                    .scale(y)
                    .orient('left')
                    .ticks(6)
                    .tickSize(0 -width)
                    .tickPadding(8);
                


                //
                // Append chart elements
                //

                // Append axes
                // ------------------------------

                // Horizontal
                svg.append('g')
                    .attr('class', 'd3-axis d3-axis-horizontal d3-axis-solid')
                    .attr('transform', 'translate(0,' + height + ')');

                // Vertical
                svg.append('g')
                    .attr('class', 'd3-axis d3-axis-vertical d3-axis-transparent');



                // Append lines
                // ------------------------------

                // Bind the data
                var lines = svg.selectAll('.lines')
                    .data(linedata)
             
                // Append a group tag for each line
                var lineGroup = lines
                    .enter()
                    .append('g')
                        .attr('class', 'lines')
                        .attr('id', function(d){ return d.name + '-line'; });

                // Append the line to the graph
                lineGroup.append('path')
                    .attr('class', 'd3-line d3-line-medium')
                    .style('stroke', function(d) { return color(d.name); })
                    .style('opacity', 0)
                    .attr('d', function(d) { return line(d.values[0]); })
                    .transition()
                        .duration(500)
                        .delay(function(d, i) { return i * 200; })
                        .style('opacity', 1);
              


                // Append circles
                // ------------------------------

                var circles = lines.selectAll('circle')
                    .data(function(d) { return d.values; })
                    .enter()
                    .append('circle')
                        .attr('class', 'd3-line-circle d3-line-circle-medium')
                        .attr('cx', function(d,i){return x(d.date)})
                        .attr('cy',function(d,i){return y(d.value)})
                        .attr('r', 3)
                        .style('fill', '#fff')
                        .style('stroke', function(d) { return color(d.name); });

                // Add transition
                circles
                    .style('opacity', 0)
                    .transition()
                        .duration(500)
                        .delay(500)
                        .style('opacity', 1);



                // Append tooltip
                // ------------------------------

                // Add tooltip on circle hover
                circles
                    .on('mouseover', function (d) {
                        tooltip.offset([-15, 0]).show(d);

                        // Animate circle radius
                        d3.select(this).transition().duration(250).attr('r', 4);
                    })
                    .on('mouseout', function (d) {
                        tooltip.hide(d);

                        // Animate circle radius
                        d3.select(this).transition().duration(250).attr('r', 3);
                    });

                // Change tooltip direction of first point
                // to always keep it inside chart, useful on mobiles
                lines.each(function (d) { 
                    d3.select(d3.select(this).selectAll('circle')[0][0])
                        .on('mouseover', function (d) {
                            tooltip.offset([0, 15]).direction('e').show(d);

                            // Animate circle radius
                            d3.select(this).transition().duration(250).attr('r', 4);
                        })
                        .on('mouseout', function (d) {
                            tooltip.direction('n').hide(d);

                            // Animate circle radius
                            d3.select(this).transition().duration(250).attr('r', 3);
                        });
                })

                // Change tooltip direction of last point
                // to always keep it inside chart, useful on mobiles
                lines.each(function (d) { 
                    d3.select(d3.select(this).selectAll('circle')[0][d3.select(this).selectAll('circle').size() - 1])
                        .on('mouseover', function (d) {
                            tooltip.offset([0, -15]).direction('w').show(d);

                            // Animate circle radius
                            d3.select(this).transition().duration(250).attr('r', 4);
                        })
                        .on('mouseout', function (d) {
                            tooltip.direction('n').hide(d);

                            // Animate circle radius
                            d3.select(this).transition().duration(250).attr('r', 3);
                        })
                })



                // Update chart on date change
                // ------------------------------

                // Set variable for updating visualization
                var lineUpdate = d3.transition(lines);
                
                // Update lines
                lineUpdate.select('path')
                    .attr('d', function(d, i) { return line(d.values); });

                // Update circles
                lineUpdate.selectAll('circle')
                    .attr('cy',function(d,i){return y(d.value)})
                    .attr('cx', function(d,i){return x(d.date)});

                // Update vertical axes
                d3.transition(svg)
                    .select('.d3-axis-vertical')
                    .call(yAxis);   

                // Update horizontal axes
                d3.transition(svg)
                    .select('.d3-axis-horizontal')
                    .attr('transform', 'translate(0,' + height + ')')
                    .call(xAxis);



                // Resize chart
                // ------------------------------

                // Call function on window resize
                $(window).on('resize', appSalesResize);

                // Call function on sidebar width change
                $(document).on('click', '.sidebar-control', appSalesResize);

                // Resize function
                // 
                // Since D3 doesn't support SVG resize by default,
                // we need to manually specify parts of the graph that need to 
                // be updated on window resize
                function appSalesResize() {

                    // Layout
                    // -------------------------

                    // Define width
                    width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;

                    // Main svg width
                    container.attr('width', width + margin.left + margin.right);

                    // Width of appended group
                    svg.attr('width', width + margin.left + margin.right);

                    // Horizontal range
                    x.range([0, width]);

                    // Vertical range
                    y.range([height, 0]);


                    // Chart elements
                    // -------------------------

                    // Horizontal axis
                    svg.select('.d3-axis-horizontal').call(xAxis);

                    // Vertical axis
                    svg.select('.d3-axis-vertical').call(yAxis.tickSize(0-width));

                    // Lines
                    svg.selectAll('.d3-line').attr('d', function(d, i) { return line(d.values); });

                    // Circles
                    svg.selectAll('.d3-line-circle').attr('cx', function(d,i){return x(d.date)})
                }
            }
        }
    };

    // Monthly sales area chart
    var _MonthlySalesAreaChart = function(element, height, color) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if($(element).length > 0) {


            // Basic setup
            // ------------------------------

            // Define main variables
            var d3Container = d3.select(element),
                margin = {top: 20, right: 35, bottom: 40, left: 35},
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                height = height - margin.top - margin.bottom;

            // Date and time format
            var parseDate = d3.time.format('%Y-%m-%d').parse,
                bisectDate = d3.bisector(function(d) { return d.date; }).left,
                formatDate = d3.time.format('%b %d');


            // Create SVG
            // ------------------------------

            // Container
            var container = d3Container.append('svg');

            // SVG element
            var svg = container
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')



            // Construct chart layout
            // ------------------------------

            // Area
            var area = d3.svg.area()
                .x(function(d) { return x(d.date); })
                .y0(height)
                .y1(function(d) { return y(d.value); })
                .interpolate('monotone')


            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.time.scale().range([0, width ]);

            // Vertical
            var y = d3.scale.linear().range([height, 0]);


            // Create axes
            // ------------------------------

            // Horizontal
            var xAxis = d3.svg.axis()
                .scale(x)
                .orient('bottom')
                .ticks(d3.time.days, 6)
                .innerTickSize(4)
                .tickPadding(8)
                .tickFormat(d3.time.format('%b %d'));


            // Load data
            // ------------------------------

            d3.json('/parco/global_assets/demo_data/dashboard/monthly_sales.json', function (error, data) {

                // Show what's wrong if error
                if (error) return console.error(error);

                // Pull out values
                data.forEach(function (d) {
                    d.date = parseDate(d.date);
                    d.value = +d.value;
                });

                // Get the maximum value in the given array
                var maxY = d3.max(data, function(d) { return d.value; });

                // Reset start data for animation
                var startData = data.map(function(datum) {
                    return {
                        date: datum.date,
                        value: 0
                    };
                });


                // Set input domains
                // ------------------------------

                // Horizontal
                x.domain(d3.extent(data, function(d, i) { return d.date; }));

                // Vertical
                y.domain([0, d3.max( data, function(d) { return d.value; })]);



                //
                // Append chart elements
                //

                // Append axes
                // -------------------------

                // Horizontal
                var horizontalAxis = svg.append('g')
                    .attr('class', 'd3-axis d3-axis-horizontal d3-axis-solid')
                    .attr('transform', 'translate(0,' + height + ')')
                    .call(xAxis);

                // Add extra subticks for hidden hours
                horizontalAxis.selectAll('.d3-axis-subticks')
                    .data(x.ticks(d3.time.days), function(d) { return d; })
                    .enter()
                        .append('line')
                        .attr('class', 'd3-axis-subticks')
                        .attr('y1', 0)
                        .attr('y2', 4)
                        .attr('x1', x)
                        .attr('x2', x);



                // Append area
                // -------------------------

                // Add area path
                svg.append('path')
                    .datum(data)
                    .attr('class', 'd3-area')
                    .attr('d', area)
                    .style('fill', color)
                    .transition() // begin animation
                        .duration(1000)
                        .attrTween('d', function() {
                            var interpolator = d3.interpolateArray(startData, data);
                            return function (t) {
                                return area(interpolator (t));
                            }
                        });



                // Append crosshair and tooltip
                // -------------------------

                //
                // Line
                //

                // Line group
                var focusLine = svg.append('g')
                    .attr('class', 'd3-crosshair-line')
                    .style('display', 'none');

                // Line element
                focusLine.append('line')
                    .attr('class', 'vertical-crosshair')
                    .attr('y1', 0)
                    .attr('y2', -maxY)
                    .style('stroke', '#e5e5e5')
                    .style('shape-rendering', 'crispEdges')


                //
                // Pointer
                //

                // Pointer group
                var focusPointer = svg.append('g')
                    .attr('class', 'd3-crosshair-pointer')
                    .style('display', 'none');

                // Pointer element
                focusPointer.append('circle')
                    .attr('r', 3)
                    .style('fill', '#fff')
                    .style('stroke', color)
                    .style('stroke-width', 1)


                //
                // Text
                //

                // Text group
                var focusText = svg.append('g')
                    .attr('class', 'd3-crosshair-text')
                    .style('display', 'none');

                // Text element
                focusText.append('text')
                    .attr('dy', -10)
                    .style('font-size', 12);


                //
                // Overlay with events
                //

                svg.append('rect')
                    .attr('class', 'd3-crosshair-overlay')
                    .style('fill', 'none')
                    .style('pointer-events', 'all')
                    .attr('width', width)
                    .attr('height', height)
                        .on('mouseover', function() {
                            focusPointer.style('display', null);        
                            focusLine.style('display', null)
                            focusText.style('display', null);
                        })
                        .on('mouseout', function() {
                            focusPointer.style('display', 'none'); 
                            focusLine.style('display', 'none');
                            focusText.style('display', 'none');
                        })
                        .on('mousemove', mousemove);


                // Display tooltip on mousemove
                function mousemove() {

                    // Define main variables
                    var mouse = d3.mouse(this),
                        mousex = mouse[0],
                        mousey = mouse[1],
                        x0 = x.invert(mousex),
                        i = bisectDate(data, x0),
                        d0 = data[i - 1],
                        d1 = data[i],
                        d = x0 - d0.date > d1.date - x0 ? d1 : d0;

                    // Move line
                    focusLine.attr('transform', 'translate(' + x(d.date) + ',' + height + ')');

                    // Move pointer
                    focusPointer.attr('transform', 'translate(' + x(d.date) + ',' + y(d.value) + ')');

                    // Reverse tooltip at the end point
                    if(mousex >= (d3Container.node().getBoundingClientRect().width - focusText.select('text').node().getBoundingClientRect().width - margin.right - margin.left)) {
                        focusText.select('text').attr('text-anchor', 'end').attr('x', function () { return (x(d.date) - 15) + 'px' }).text(formatDate(d.date) + ' - ' + d.value + ' sales');
                    }
                    else {
                        focusText.select('text').attr('text-anchor', 'start').attr('x', function () { return (x(d.date) + 15) + 'px' }).text(formatDate(d.date) + ' - ' + d.value + ' sales');
                    }
                }



                // Resize chart
                // ------------------------------

                // Call function on window resize
                $(window).on('resize', monthlySalesAreaResize);

                // Call function on sidebar width change
                $(document).on('click', '.sidebar-control', monthlySalesAreaResize);

                // Resize function
                // 
                // Since D3 doesn't support SVG resize by default,
                // we need to manually specify parts of the graph that need to 
                // be updated on window resize
                function monthlySalesAreaResize() {

                    // Layout variables
                    width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;


                    // Layout
                    // -------------------------

                    // Main svg width
                    container.attr('width', width + margin.left + margin.right);

                    // Width of appended group
                    svg.attr('width', width + margin.left + margin.right);


                    // Axes
                    // -------------------------

                    // Horizontal range
                    x.range([0, width]);

                    // Horizontal axis
                    svg.selectAll('.d3-axis-horizontal').call(xAxis);

                    // Horizontal axis subticks
                    svg.selectAll('.d3-axis-subticks').attr('x1', x).attr('x2', x);


                    // Chart elements
                    // -------------------------

                    // Area path
                    svg.selectAll('.d3-area').datum(data).attr('d', area);

                    // Crosshair
                    svg.selectAll('.d3-crosshair-overlay').attr('width', width);
                }
            });
        }
    };

    // Daily sales heatmap
    var _AppSalesHeatmap = function(element) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if($(element).length > 0) {

            // Load data
            d3.csv('/parco/global_assets/demo_data/dashboard/app_sales_heatmap.csv', function(error, data) {


                // Bind data
                // ------------------------------

                // Nest data
                var nested_data = d3.nest().key(function(d) { return d.app; }),
                    nest = nested_data.entries(data);

                // Format date
                var format = d3.time.format('%Y/%m/%d %H:%M'),
                    formatTime = d3.time.format('%H:%M');

                // Pull out values
                data.forEach(function(d, i) { 
                    d.date = format.parse(d.date),
                    d.value = +d.value
                });



                // Layout setup
                // ------------------------------

                // Define main variables
                var d3Container = d3.select(element);
                    margin = { top: 20, right: 0, bottom: 30, left: 0 },
                    width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                    gridSize = width / new Date(data[data.length - 1].date).getHours(), // dynamically set grid size
                    rowGap = 40, // vertical gap between rows
                    height = (rowGap + gridSize) * (d3.max(nest, function(d,i) {return i+1})) - margin.top,
                    buckets = 5, // number of colors in range
                    colors = ['#DCEDC8','#C5E1A5','#9CCC65','#7CB342','#558B2F'];



                // Construct scales
                // ------------------------------

                // Horizontal
                var x = d3.time.scale().range([0, width]);

                // Vertical
                var y = d3.scale.linear().range([height, 0]);

                // Colors
                var colorScale = d3.scale.quantile()
                    .domain([0, buckets - 1, d3.max(data, function (d) { return d.value; })])
                    .range(colors);



                // Set input domains
                // ------------------------------

                // Horizontal
                x.domain([new Date(data[0].date), d3.time.hour.offset(new Date(data[data.length - 1].date), 1)]);

                // Vertical
                y.domain([0, d3.max(data, function(d) { return d.app; })]);



                // Create chart
                // ------------------------------

                // Container
                var container = d3Container.append('svg');

                // SVG element
                var svg = container
                    .attr('width', width + margin.left + margin.right)
                    .attr('height', height + margin.bottom)
                    .append('g')
                        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');



                //
                // Append chart elements
                //

                // App groups
                // ------------------------------

                // Add groups for each app
                var hourGroup = svg.selectAll('.hour-group')
                    .data(nest)
                    .enter()
                    .append('g')
                        .attr('class', 'hour-group')
                        .attr('transform', function(d, i) { return 'translate(0, ' + ((gridSize + rowGap) * i) +')'; });

                // Add app name
                hourGroup
                    .append('text')
                        .attr('class', 'app-label')
                        .attr('x', 0)
                        .attr('y', -(margin.top/2))
                        .text(function (d, i) { return d.key; });

                // Sales count text
                hourGroup
                    .append('text')
                        .attr('class', 'sales-count')
                        .attr('x', width)
                        .attr('y', -(margin.top/2))
                        .style('text-anchor', 'end')
                        .text(function (d, i) { return d3.sum(d.values, function(d) { return d.value; }) + ' sales today' });



                // Add map elements
                // ------------------------------

                // Add map squares
                var heatMap = hourGroup.selectAll('.heatmap-hour')
                    .data(function(d) {return d.values})
                    .enter()
                    .append('rect')
                        .attr('x', function(d,i) { return x(d.date); })
                        .attr('y', 0)
                        .attr('class', 'heatmap-hour')
                        .attr('width', gridSize)
                        .attr('height', gridSize)
                        .style('fill', '#fff')
                        .style('stroke', '#fff')
                        .style('cursor', 'pointer')
                        .style('shape-rendering', 'crispEdges');

                // Add loading transition    
                heatMap.transition()
                    .duration(250)
                    .delay(function(d, i) { return i * 20; })
                    .style('fill', function(d) { return colorScale(d.value); })

                // Add user interaction
                hourGroup.each(function(d) {
                    heatMap
                        .on('mouseover', function (d, i) {
                            d3.select(this).style('opacity', 0.75);
                            d3.select(this.parentNode).select('.sales-count').text(function(d) { return d.values[i].value + ' sales at ' + formatTime(d.values[i].date); })
                        })
                        .on('mouseout', function (d, i) {
                            d3.select(this).style('opacity', 1);
                            d3.select(this.parentNode).select('.sales-count').text(function (d, i) { return d3.sum(d.values, function(d) { return d.value; }) + ' sales today' })
                        })
                })



                // Add legend
                // ------------------------------

                // Get min and max values
                var minValue, maxValue;
                data.forEach(function(d, i) { 
                    maxValue = d3.max(data, function (d) { return d.value; });
                    minValue = d3.min(data, function (d) { return d.value; });
                });

                // Place legend inside separate group
                var legendGroup = svg.append('g')
                    .attr('class', 'legend-group')
                    .attr('width', width)
                    .attr('transform', 'translate(' + ((width/2) - ((buckets * gridSize))/2) + ',' + (height + (margin.bottom - margin.top)) + ')');

                // Then group legend elements
                var legend = legendGroup.selectAll('.heatmap-legend')
                    .data([0].concat(colorScale.quantiles()), function(d) { return d; })
                    .enter()
                    .append('g')
                        .attr('class', 'heatmap-legend');

                // Add legend items
                legend.append('rect')
                    .attr('class', 'heatmap-legend-item')
                    .attr('x', function(d, i) { return gridSize * i; })
                    .attr('y', -8)
                    .attr('width', gridSize)
                    .attr('height', 5)
                    .style('stroke', '#fff')
                    .style('shape-rendering', 'crispEdges')
                    .style('fill', function(d, i) { return colors[i]; });

                // Add min value text label
                legendGroup.append('text')
                    .attr('class', 'min-legend-value')
                    .attr('x', -10)
                    .attr('y', -2)
                    .style('text-anchor', 'end')
                    .style('font-size', 11)
                    .style('fill', '#999')
                    .text(minValue);

                // Add max value text label
                legendGroup.append('text')
                    .attr('class', 'max-legend-value')
                    .attr('x', (buckets * gridSize) + 10)
                    .attr('y', -2)
                    .style('font-size', 11)
                    .style('fill', '#999')
                    .text(maxValue);



                // Resize chart
                // ------------------------------

                // Call function on window resize
                $(window).on('resize', resizeHeatmap);

                // Call function on sidebar width change
                $(document).on('click', '.sidebar-control', resizeHeatmap);

                // Resize function
                // 
                // Since D3 doesn't support SVG resize by default,
                // we need to manually specify parts of the graph that need to 
                // be updated on window resize
                function resizeHeatmap() {

                    // Layout
                    // -------------------------

                    // Width
                    width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,

                    // Grid size
                    gridSize = width / new Date(data[data.length - 1].date).getHours(),

                    // Height
                    height = (rowGap + gridSize) * (d3.max(nest, function(d,i) {return i+1})) - margin.top,

                    // Main svg width
                    container.attr('width', width + margin.left + margin.right).attr('height', height + margin.bottom);

                    // Width of appended group
                    svg.attr('width', width + margin.left + margin.right).attr('height', height + margin.bottom);

                    // Horizontal range
                    x.range([0, width]);


                    // Chart elements
                    // -------------------------

                    // Groups for each app
                    svg.selectAll('.hour-group')
                        .attr('transform', function(d, i) { return 'translate(0, ' + ((gridSize + rowGap) * i) +')'; });

                    // Map squares
                    svg.selectAll('.heatmap-hour')
                        .attr('width', gridSize)
                        .attr('height', gridSize)
                        .attr('x', function(d,i) { return x(d.date); });

                    // Legend group
                    svg.selectAll('.legend-group')
                        .attr('transform', 'translate(' + ((width/2) - ((buckets * gridSize))/2) + ',' + (height + margin.bottom - margin.top) + ')');

                    // Sales count text
                    svg.selectAll('.sales-count')
                        .attr('x', width);

                    // Legend item
                    svg.selectAll('.heatmap-legend-item')
                        .attr('width', gridSize)
                        .attr('x', function(d, i) { return gridSize * i; });

                    // Max value text label
                    svg.selectAll('.max-legend-value')
                        .attr('x', (buckets * gridSize) + 10);
                }
            });
        }
    };

    // Messages area chart
    var _MessagesAreaChart = function(element, height, color) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if($(element).length > 0) {


            // Basic setup
            // ------------------------------

            // Define main variables
            var d3Container = d3.select(element),
                margin = {top: 0, right: 0, bottom: 0, left: 0},
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                height = height - margin.top - margin.bottom;

            // Date and time format
            var parseDate = d3.time.format('%Y-%m-%d').parse;


            // Create SVG
            // ------------------------------

            // Container
            var container = d3Container.append('svg');

            // SVG element
            var svg = container
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')


            // Construct chart layout
            // ------------------------------

            // Area
            var area = d3.svg.area()
                .x(function(d) { return x(d.date); })
                .y0(height)
                .y1(function(d) { return y(d.value); })
                .interpolate('monotone')


            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.time.scale().range([0, width ]);

            // Vertical
            var y = d3.scale.linear().range([height, 0]);


            // Load data
            // ------------------------------

            d3.json('/parco/global_assets/demo_data/dashboard/monthly_sales.json', function (error, data) {

                // Show what's wrong if error
                if (error) return console.error(error);

                // Pull out values
                data.forEach(function (d) {
                    d.date = parseDate(d.date);
                    d.value = +d.value;
                });

                // Get the maximum value in the given array
                var maxY = d3.max(data, function(d) { return d.value; });

                // Reset start data for animation
                var startData = data.map(function(datum) {
                    return {
                        date: datum.date,
                        value: 0
                    };
                });


                // Set input domains
                // ------------------------------

                // Horizontal
                x.domain(d3.extent(data, function(d, i) { return d.date; }));

                // Vertical
                y.domain([0, d3.max( data, function(d) { return d.value; })]);



                //
                // Append chart elements
                //

                // Add area path
                svg.append('path')
                    .datum(data)
                    .attr('class', 'd3-area')
                    .style('fill', color)
                    .attr('d', area)
                    .transition() // begin animation
                        .duration(1000)
                        .attrTween('d', function() {
                            var interpolator = d3.interpolateArray(startData, data);
                            return function (t) {
                                return area(interpolator (t));
                            }
                        });


                // Resize chart
                // ------------------------------

                // Call function on window resize
                $(window).on('resize', messagesAreaResize);

                // Call function on sidebar width change
                $(document).on('click', '.sidebar-control', messagesAreaResize);

                // Resize function
                // 
                // Since D3 doesn't support SVG resize by default,
                // we need to manually specify parts of the graph that need to 
                // be updated on window resize
                function messagesAreaResize() {

                    // Layout variables
                    width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;


                    // Layout
                    // -------------------------

                    // Main svg width
                    container.attr('width', width + margin.left + margin.right);

                    // Width of appended group
                    svg.attr('width', width + margin.left + margin.right);

                    // Horizontal range
                    x.range([0, width]);


                    // Chart elements
                    // -------------------------

                    // Area path
                    svg.selectAll('.d3-area').datum( data ).attr('d', area);
                }
            });
        }
    };

    // Sparklines chart
    var _chartSparkline = function(element, chartType, qty, height, interpolation, duration, interval, color) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if($(element).length > 0) {


            // Basic setup
            // ------------------------------

            // Define main variables
            var d3Container = d3.select(element),
                margin = {top: 0, right: 0, bottom: 0, left: 0},
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                height = height - margin.top - margin.bottom;


            // Generate random data (for demo only)
            var data = [];
            for (var i=0; i < qty; i++) {
                data.push(Math.floor(Math.random() * qty) + 5)
            }


            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.scale.linear().range([0, width]);

            // Vertical
            var y = d3.scale.linear().range([height - 5, 5]);


            // Set input domains
            // ------------------------------

            // Horizontal
            x.domain([1, qty - 3])

            // Vertical
            y.domain([0, qty])
                


            // Construct chart layout
            // ------------------------------

            // Line
            var line = d3.svg.line()
                .interpolate(interpolation)
                .x(function(d, i) { return x(i); })
                .y(function(d, i) { return y(d); });

            // Area
            var area = d3.svg.area()
                .interpolate(interpolation)
                .x(function(d, i) { 
                    return x(i); 
                })
                .y0(height)
                .y1(function(d) { 
                    return y(d); 
                });



            // Create SVG
            // ------------------------------

            // Container
            var container = d3Container.append('svg');

            // SVG element
            var svg = container
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append("g")
                    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');



            // Add mask for animation
            // ------------------------------

            // Add clip path
            var clip = svg.append('defs')
                .append('clipPath')
                .attr('id', function(d, i) { return 'load-clip-' + element.substring(1) })

            // Add clip shape
            var clips = clip.append('rect')
                .attr('class', 'load-clip')
                .attr('width', 0)
                .attr('height', height);

            // Animate mask
            clips
                .transition()
                    .duration(1000)
                    .ease('linear')
                    .attr('width', width);



            //
            // Append chart elements
            //

            // Main path
            var path = svg.append('g')
                .attr('clip-path', function(d, i) { return 'url(#load-clip-' + element.substring(1) + ')'})
                .append('path')
                    .datum(data)
                    .attr('transform', 'translate(' + x(0) + ',0)');

            // Add path based on chart type
            if(chartType == 'area') {
                path.attr('d', area).attr('class', 'd3-area').style('fill', color); // area
            }
            else {
                path.attr('d', line).attr('class', 'd3-line d3-line-medium').style('stroke', color); // line
            }

            // Animate path
            path
                .style('opacity', 0)
                .transition()
                    .duration(750)
                    .style('opacity', 1);



            // Set update interval. For demo only
            // ------------------------------

            setInterval(function() {

                // push a new data point onto the back
                data.push(Math.floor(Math.random() * qty) + 5);

                // pop the old data point off the front
                data.shift();

                update();

            }, interval);



            // Update random data. For demo only
            // ------------------------------

            function update() {

                // Redraw the path and slide it to the left
                path
                    .attr('transform', null)
                    .transition()
                        .duration(duration)
                        .ease('linear')
                        .attr('transform', 'translate(' + x(0) + ',0)');

                // Update path type
                if(chartType == 'area') {
                    path.attr('d', area).attr('class', 'd3-area').style('fill', color)
                }
                else {
                    path.attr('d', line).attr('class', 'd3-line d3-line-medium').style('stroke', color);
                }
            }



            // Resize chart
            // ------------------------------

            // Call function on window resize
            $(window).on('resize', resizeSparklines);

            // Call function on sidebar width change
            $(document).on('click', '.sidebar-control', resizeSparklines);

            // Resize function
            // 
            // Since D3 doesn't support SVG resize by default,
            // we need to manually specify parts of the graph that need to 
            // be updated on window resize
            function resizeSparklines() {

                // Layout variables
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;


                // Layout
                // -------------------------

                // Main svg width
                container.attr('width', width + margin.left + margin.right);

                // Width of appended group
                svg.attr('width', width + margin.left + margin.right);

                // Horizontal range
                x.range([0, width]);


                // Chart elements
                // -------------------------

                // Clip mask
                clips.attr('width', width);

                // Line
                svg.select('.d3-line').attr('d', line);

                // Area
                svg.select('.d3-area').attr('d', area);
            }
        }
    };

    // Daily revenue line chart
    var _DailyRevenueLineChart = function(element, height) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if($(element).length > 0) {


            // Basic setup
            // ------------------------------

            // Add data set
            var dataset = [
                {
                    'date': '04/13/14',
                    'alpha': '60'
                }, {
                    'date': '04/14/14',
                    'alpha': '35'
                }, {
                    'date': '04/15/14',
                    'alpha': '65'
                }, {
                    'date': '04/16/14',
                    'alpha': '50'
                }, {
                    'date': '04/17/14',
                    'alpha': '65'
                }, {
                    'date': '04/18/14',
                    'alpha': '20'
                }, {
                    'date': '04/19/14',
                    'alpha': '60'
                }
            ];

            // Main variables
            var d3Container = d3.select(element),
                margin = {top: 0, right: 0, bottom: 0, left: 0},
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                height = height - margin.top - margin.bottom,
                padding = 20;

            // Format date
            var parseDate = d3.time.format('%m/%d/%y').parse,
                formatDate = d3.time.format('%a, %B %e');



            // Add tooltip
            // ------------------------------

            var tooltip = d3.tip()
                .attr('class', 'd3-tip')
                .html(function (d) {
                    return '<ul class="list-unstyled mb-1">' +
                        '<li>' + '<div class="font-size-base my-1"><i class="icon-check2 mr-2"></i>' + formatDate(d.date) + '</div>' + '</li>' +
                        '<li>' + 'Sales: &nbsp;' + '<span class="font-weight-semibold float-right">' + d.alpha + '</span>' + '</li>' +
                        '<li>' + 'Revenue: &nbsp; ' + '<span class="font-weight-semibold float-right">' + '$' + (d.alpha * 25).toFixed(2) + '</span>' + '</li>' + 
                    '</ul>';
                });



            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append('svg');

            // Add SVG group
            var svg = container
                    .attr('width', width + margin.left + margin.right)
                    .attr('height', height + margin.top + margin.bottom)
                    .append('g')
                        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
                        .call(tooltip);



            // Load data
            // ------------------------------

            dataset.forEach(function (d) {
                d.date = parseDate(d.date);
                d.alpha = +d.alpha;
            });



            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.time.scale()
                .range([padding, width - padding]);

            // Vertical
            var y = d3.scale.linear()
                .range([height, 5]);



            // Set input domains
            // ------------------------------

            // Horizontal
            x.domain(d3.extent(dataset, function (d) {
                return d.date;
            }));

            // Vertical
            y.domain([0, d3.max(dataset, function (d) {
                return Math.max(d.alpha);
            })]);



            // Construct chart layout
            // ------------------------------

            // Line
            var line = d3.svg.line()
                .x(function(d) {
                    return x(d.date);
                })
                .y(function(d) {
                    return y(d.alpha)
                });



            //
            // Append chart elements
            //

            // Add mask for animation
            // ------------------------------

            // Add clip path
            var clip = svg.append('defs')
                .append('clipPath')
                .attr('id', 'clip-line-small');

            // Add clip shape
            var clipRect = clip.append('rect')
                .attr('class', 'clip')
                .attr('width', 0)
                .attr('height', height);

            // Animate mask
            clipRect
                  .transition()
                      .duration(1000)
                      .ease('linear')
                      .attr('width', width);



            // Line
            // ------------------------------

            // Path
            var path = svg.append('path')
                .attr({
                    'd': line(dataset),
                    'clip-path': 'url(#clip-line-small)',
                    'class': 'd3-line d3-line-medium'
                })
                .style('stroke', '#fff');

            // Animate path
            svg.select('.line-tickets')
                .transition()
                    .duration(1000)
                    .ease('linear');



            // Add vertical guide lines
            // ------------------------------

            // Bind data
            var guide = svg.append('g')
                .selectAll('.d3-line-guides-group')
                .data(dataset);

            // Append lines
            guide
                .enter()
                .append('line')
                    .attr('class', 'd3-line-guides')
                    .attr('x1', function (d, i) {
                        return x(d.date);
                    })
                    .attr('y1', function (d, i) {
                        return height;
                    })
                    .attr('x2', function (d, i) {
                        return x(d.date);
                    })
                    .attr('y2', function (d, i) {
                        return height;
                    })
                    .style('stroke', 'rgba(255,255,255,0.3)')
                    .style('stroke-dasharray', '4,2')
                    .style('shape-rendering', 'crispEdges');

            // Animate guide lines
            guide
                .transition()
                    .duration(1000)
                    .delay(function(d, i) { return i * 150; })
                    .attr('y2', function (d, i) {
                        return y(d.alpha);
                    });



            // Alpha app points
            // ------------------------------

            // Add points
            var points = svg.insert('g')
                .selectAll('.d3-line-circle')
                .data(dataset)
                .enter()
                .append('circle')
                    .attr('class', 'd3-line-circle d3-line-circle-medium')
                    .attr('cx', line.x())
                    .attr('cy', line.y())
                    .attr('r', 3)
                    .style('stroke', '#fff')
                    .style('fill', '#29B6F6');



            // Animate points on page load
            points
                .style('opacity', 0)
                .transition()
                    .duration(250)
                    .ease('linear')
                    .delay(1000)
                    .style('opacity', 1);


            // Add user interaction
            points
                .on('mouseover', function (d) {
                    tooltip.offset([-10, 0]).show(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 4);
                })

                // Hide tooltip
                .on('mouseout', function (d) {
                    tooltip.hide(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 3);
                });

            // Change tooltip direction of first point
            d3.select(points[0][0])
                .on('mouseover', function (d) {
                    tooltip.offset([0, 10]).direction('e').show(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 4);
                })
                .on('mouseout', function (d) {
                    tooltip.direction('n').hide(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 3);
                });

            // Change tooltip direction of last point
            d3.select(points[0][points.size() - 1])
                .on('mouseover', function (d) {
                    tooltip.offset([0, -10]).direction('w').show(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 4);
                })
                .on('mouseout', function (d) {
                    tooltip.direction('n').hide(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 3);
                })



            // Resize chart
            // ------------------------------

            // Call function on window resize
            $(window).on('resize', revenueResize);

            // Call function on sidebar width change
            $(document).on('click', '.sidebar-control', revenueResize);

            // Resize function
            // 
            // Since D3 doesn't support SVG resize by default,
            // we need to manually specify parts of the graph that need to 
            // be updated on window resize
            function revenueResize() {

                // Layout variables
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;


                // Layout
                // -------------------------

                // Main svg width
                container.attr('width', width + margin.left + margin.right);

                // Width of appended group
                svg.attr('width', width + margin.left + margin.right);

                // Horizontal range
                x.range([padding, width - padding]);


                // Chart elements
                // -------------------------

                // Mask
                clipRect.attr('width', width);

                // Line path
                svg.selectAll('.d3-line').attr('d', line(dataset));

                // Circles
                svg.selectAll('.d3-line-circle').attr('cx', line.x());

                // Guide lines
                svg.selectAll('.d3-line-guides')
                    .attr('x1', function (d, i) {
                        return x(d.date);
                    })
                    .attr('x2', function (d, i) {
                        return x(d.date);
                    });
            }
        }
    };

    // Small progress pie chart
    var _ProgressPieChart = function(element, width, height, color) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if($(element).length > 0) {


            // Basic setup
            // ------------------------------

            // Main variables
            var d3Container = d3.select(element),
                border = 2,
                radius = Math.min(width / 2, height / 2) - border,
                twoPi = 2 * Math.PI,
                progress = $(element).data('progress'),
                total = 100;



            // Construct chart layout
            // ------------------------------

            // Arc
            var arc = d3.svg.arc()
                .startAngle(0)
                .innerRadius(0)
                .outerRadius(radius)
                .endAngle(function(d) {
                  return (d.value / d.size) * 2 * Math.PI; 
                })



            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append('svg');

            // Add SVG group
            var svg = container
                .attr('width', width)
                .attr('height', height)
                .append('g')
                    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');



            //
            // Append chart elements
            //

            // Progress group
            var meter = svg.append('g')
                .attr('class', 'progress-meter');

            // Background
            meter.append('path')
                .attr('d', arc.endAngle(twoPi))
                .style('fill', '#fff')
                .style('stroke', color)
                .style('stroke-width', 1.5);

            // Foreground
            var foreground = meter.append('path')
                .style('fill', color);

            // Animate foreground path
            foreground
                .transition()
                    .ease('cubic-out')
                    .duration(2500)
                    .attrTween('d', arcTween);


            // Tween arcs
            function arcTween() {
                var i = d3.interpolate(0, progress);
                return function(t) {
                    var currentProgress = progress / (100/t);
                    var endAngle = arc.endAngle(twoPi * (currentProgress));
                    return arc(i(endAngle));
                };
            }
        }
    };

    // Marketing campaigns donut chart
    var _MarketingCampaignsDonutChart = function(element, size) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if($(element).length > 0) {


            // Basic setup
            // ------------------------------

            // Add data set
            var data = [
                {
                    "browser": "Google Adwords",
                    "icon": "<i class='icon-google mr-2'></i>",
                    "value": 1047,
                    "color" : "#66BB6A"
                }, {
                    "browser": "Social media",
                    "icon": "<i class='icon-share4 mr-2'></i>",
                    "value": 2948,
                    "color": "#9575CD"
                }, {
                    "browser": "Youtube video",
                    "icon": "<i class='icon-youtube mr-2'></i>",
                    "value": 3909,
                    "color": "#FF7043"
                }
            ];

            // Main variables
            var d3Container = d3.select(element),
                distance = 2, // reserve 2px space for mouseover arc moving
                radius = (size/2) - distance,
                sum = d3.sum(data, function(d) { return d.value; });



            // Tooltip
            // ------------------------------

            var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0])
                .direction('e')
                .html(function (d) {
                    return '<ul class="list-unstyled mb-1">' +
                        '<li>' + '<div class="font-size-base mb-1 mt-1">' + d.data.icon + d.data.browser + '</div>' + '</li>' +
                        '<li>' + 'Visits: &nbsp;' + '<span class="font-weight-semibold float-right">' + d.value + '</span>' + '</li>' +
                        '<li>' + 'Share: &nbsp;' + '<span class="font-weight-semibold float-right">' + (100 / (sum / d.value)).toFixed(2) + '%' + '</span>' + '</li>' +
                    '</ul>';
                });


            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append('svg').call(tip);
            
            // Add SVG group
            var svg = container
                .attr('width', size)
                .attr('height', size)
                .append('g')
                    .attr('transform', 'translate(' + (size / 2) + ',' + (size / 2) + ')');  



            // Construct chart layout
            // ------------------------------

            // Pie
            var pie = d3.layout.pie()
                .sort(null)
                .startAngle(Math.PI)
                .endAngle(3 * Math.PI)
                .value(function (d) { 
                    return d.value;
                }); 

            // Arc
            var arc = d3.svg.arc()
                .outerRadius(radius)
                .innerRadius(radius / 2);



            //
            // Append chart elements
            //

            // Group chart elements
            var arcGroup = svg.selectAll('.d3-arc')
                .data(pie(data))
                .enter()
                .append('g') 
                    .attr('class', 'd3-arc')
                    .style('stroke', '#fff')
                    .style('cursor', 'pointer');
            
            // Append path
            var arcPath = arcGroup
                .append('path')
                .style('fill', function (d) { return d.data.color; });

            // Add tooltip
            arcPath
                .on('mouseover', function (d, i) {

                    // Transition on mouseover
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('elastic')
                        .attr('transform', function (d) {
                            d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
                            var x = Math.sin(d.midAngle) * distance;
                            var y = -Math.cos(d.midAngle) * distance;
                            return 'translate(' + x + ',' + y + ')';
                        });
                })

                .on('mousemove', function (d) {
                    
                    // Show tooltip on mousemove
                    tip.show(d)
                        .style('top', (d3.event.pageY - 40) + 'px')
                        .style('left', (d3.event.pageX + 30) + 'px');
                })

                .on('mouseout', function (d, i) {

                    // Mouseout transition
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('bounce')
                        .attr('transform', 'translate(0,0)');

                    // Hide tooltip
                    tip.hide(d);
                });

            // Animate chart on load
            arcPath
                .transition()
                    .delay(function(d, i) { return i * 500; })
                    .duration(500)
                    .attrTween('d', function(d) {
                        var interpolate = d3.interpolate(d.startAngle,d.endAngle);
                        return function(t) {
                            d.endAngle = interpolate(t);
                            return arc(d);  
                        }; 
                    });
        }
    };

    // Campaign status donut chart
    var _CampaignStatusDonutChart = function(element, size) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if($(element).length > 0) {


            // Basic setup
            // ------------------------------

            // Add data set
            var data = [
                {
                    "status": "Active campaigns",
                    "icon": "<span class='status-mark border-blue-300 mr-2'></span>",
                    "value": 439,
                    "color": "#29B6F6"
                }, {
                    "status": "Closed campaigns",
                    "icon": "<span class='status-mark border-danger-300 mr-2'></span>",
                    "value": 290,
                    "color": "#EF5350"
                }, {
                    "status": "Pending campaigns",
                    "icon": "<span class='status-mark border-success-300 mr-2'></span>",
                    "value": 190,
                    "color": "#81C784"
                }, {
                    "status": "Campaigns on hold",
                    "icon": "<span class='status-mark border-grey-300 mr-2'></span>",
                    "value": 148,
                    "color": "#999"
                }
            ];

            // Main variables
            var d3Container = d3.select(element),
                distance = 2, // reserve 2px space for mouseover arc moving
                radius = (size/2) - distance,
                sum = d3.sum(data, function(d) { return d.value; })



            // Tooltip
            // ------------------------------

            var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0])
                .direction('e')
                .html(function (d) {
                    return '<ul class="list-unstyled mb-1">' +
                        '<li>' + '<div class="font-size-base mb-1 mt-1">' + d.data.icon + d.data.status + '</div>' + '</li>' +
                        '<li>' + 'Total: &nbsp;' + '<span class="font-weight-semibold float-right">' + d.value + '</span>' + '</li>' +
                        '<li>' + 'Share: &nbsp;' + '<span class="font-weight-semibold float-right">' + (100 / (sum / d.value)).toFixed(2) + '%' + '</span>' + '</li>' +
                    '</ul>';
                });



            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append('svg').call(tip);
            
            // Add SVG group
            var svg = container
                .attr('width', size)
                .attr('height', size)
                .append('g')
                    .attr('transform', 'translate(' + (size / 2) + ',' + (size / 2) + ')');  



            // Construct chart layout
            // ------------------------------

            // Pie
            var pie = d3.layout.pie()
                .sort(null)
                .startAngle(Math.PI)
                .endAngle(3 * Math.PI)
                .value(function (d) { 
                    return d.value;
                }); 

            // Arc
            var arc = d3.svg.arc()
                .outerRadius(radius)
                .innerRadius(radius / 2);



            //
            // Append chart elements
            //

            // Group chart elements
            var arcGroup = svg.selectAll('.d3-arc')
                .data(pie(data))
                .enter()
                .append('g') 
                    .attr('class', 'd3-arc')
                    .style('stroke', '#fff')
                    .style('cursor', 'pointer');
            
            // Append path
            var arcPath = arcGroup
                .append('path')
                .style('fill', function (d) { return d.data.color; });

            // Add tooltip
            arcPath
                .on('mouseover', function (d, i) {

                    // Transition on mouseover
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('elastic')
                        .attr('transform', function (d) {
                            d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
                            var x = Math.sin(d.midAngle) * distance;
                            var y = -Math.cos(d.midAngle) * distance;
                            return 'translate(' + x + ',' + y + ')';
                        });
                })

                .on('mousemove', function (d) {
                    
                    // Show tooltip on mousemove
                    tip.show(d)
                        .style('top', (d3.event.pageY - 40) + 'px')
                        .style('left', (d3.event.pageX + 30) + 'px');
                })

                .on('mouseout', function (d, i) {

                    // Mouseout transition
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('bounce')
                        .attr('transform', 'translate(0,0)');

                    // Hide tooltip
                    tip.hide(d);
                });

            // Animate chart on load
            arcPath
                .transition()
                    .delay(function(d, i) { return i * 500; })
                    .duration(500)
                    .attrTween('d', function(d) {
                        var interpolate = d3.interpolate(d.startAngle,d.endAngle);
                        return function(t) {
                            d.endAngle = interpolate(t);
                            return arc(d);  
                        }; 
                    });
        }
    };

    // Tickets status donut chart
    var _TicketStatusDonutChart = function(element, size) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if($(element).length > 0) {


            // Basic setup
            // ------------------------------

            // Add data set
            var data = [
                {
                    "status": "Pending tickets",
                    "icon": "<i class='status-mark border-blue-300 mr-2'></i>",
                    "value": 295,
                    "color": "#29B6F6"
                }, {
                    "status": "Resolved tickets",
                    "icon": "<i class='status-mark border-success-300 mr-2'></i>",
                    "value": 189,
                    "color": "#66BB6A"
                }, {
                    "status": "Closed tickets",
                    "icon": "<i class='status-mark border-danger-300 mr-2'></i>",
                    "value": 277,
                    "color": "#EF5350"
                }
            ];

            // Main variables
            var d3Container = d3.select(element),
                distance = 2, // reserve 2px space for mouseover arc moving
                radius = (size/2) - distance,
                sum = d3.sum(data, function(d) { return d.value; })



            // Tooltip
            // ------------------------------

            var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0])
                .direction('e')
                .html(function (d) {
                    return '<ul class="list-unstyled mb-1">' +
                        '<li>' + '<div class="font-size-base mb-1 mt-1">' + d.data.icon + d.data.status + '</div>' + '</li>' +
                        '<li>' + 'Total: &nbsp;' + '<span class="font-weight-semibold float-right">' + d.value + '</span>' + '</li>' +
                        '<li>' + 'Share: &nbsp;' + '<span class="font-weight-semibold float-right">' + (100 / (sum / d.value)).toFixed(2) + '%' + '</span>' + '</li>' +
                    '</ul>';
                })



            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append('svg').call(tip);
            
            // Add SVG group
            var svg = container
                .attr('width', size)
                .attr('height', size)
                .append('g')
                    .attr('transform', 'translate(' + (size / 2) + ',' + (size / 2) + ')');  



            // Construct chart layout
            // ------------------------------

            // Pie
            var pie = d3.layout.pie()
                .sort(null)
                .startAngle(Math.PI)
                .endAngle(3 * Math.PI)
                .value(function (d) { 
                    return d.value;
                }); 

            // Arc
            var arc = d3.svg.arc()
                .outerRadius(radius)
                .innerRadius(radius / 2);



            //
            // Append chart elements
            //

            // Group chart elements
            var arcGroup = svg.selectAll('.d3-arc')
                .data(pie(data))
                .enter()
                .append('g') 
                    .attr('class', 'd3-arc')
                    .style('stroke', '#fff')
                    .style('cursor', 'pointer');
            
            // Append path
            var arcPath = arcGroup
                .append('path')
                .style('fill', function (d) { return d.data.color; });

            // Add tooltip
            arcPath
                .on('mouseover', function (d, i) {

                    // Transition on mouseover
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('elastic')
                        .attr('transform', function (d) {
                            d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
                            var x = Math.sin(d.midAngle) * distance;
                            var y = -Math.cos(d.midAngle) * distance;
                            return 'translate(' + x + ',' + y + ')';
                        });
                })

                .on('mousemove', function (d) {
                    
                    // Show tooltip on mousemove
                    tip.show(d)
                        .style('top', (d3.event.pageY - 40) + 'px')
                        .style('left', (d3.event.pageX + 30) + 'px');
                })

                .on('mouseout', function (d, i) {

                    // Mouseout transition
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('bounce')
                        .attr('transform', 'translate(0,0)');

                    // Hide tooltip
                    tip.hide(d);
                });

            // Animate chart on load
            arcPath
                .transition()
                    .delay(function(d, i) { return i * 500; })
                    .duration(500)
                    .attrTween('d', function(d) {
                        var interpolate = d3.interpolate(d.startAngle,d.endAngle);
                        return function(t) {
                            d.endAngle = interpolate(t);
                            return arc(d);  
                        }; 
                    });
        }
    };

    // Bar charts
    var _BarChart = function(element, barQty, height, animate, easing, duration, delay, color, tooltip) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if($(element).length > 0) {


            // Basic setup
            // ------------------------------

            // Add data set
            var bardata = [];
            for (var i=0; i < barQty; i++) {
                bardata.push(Math.round(Math.random()*10) + 10);
            }

            // Main variables
            var d3Container = d3.select(element),
                width = d3Container.node().getBoundingClientRect().width;
            


            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.scale.ordinal()
                .rangeBands([0, width], 0.3);

            // Vertical
            var y = d3.scale.linear()
                .range([0, height]);



            // Set input domains
            // ------------------------------

            // Horizontal
            x.domain(d3.range(0, bardata.length));

            // Vertical
            y.domain([0, d3.max(bardata)]);



            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append('svg');

            // Add SVG group
            var svg = container
                .attr('width', width)
                .attr('height', height)
                .append('g');



            //
            // Append chart elements
            //

            // Bars
            var bars = svg.selectAll('rect')
                .data(bardata)
                .enter()
                .append('rect')
                    .attr('class', 'd3-random-bars')
                    .attr('width', x.rangeBand())
                    .attr('x', function(d,i) {
                        return x(i);
                    })
                    .style('fill', color);



            // Tooltip
            // ------------------------------

            var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0]);

            // Show and hide
            if(tooltip == 'hours' || tooltip == 'goal' || tooltip == 'members') {
                bars.call(tip)
                    .on('mouseover', tip.show)
                    .on('mouseout', tip.hide);
            }

            // Daily meetings tooltip content
            if(tooltip == 'hours') {
                tip.html(function (d, i) {
                    return '<div class="text-center">' +
                            '<h6 class="m-0">' + d + '</h6>' +
                            '<span class="font-size-sm">meetings</span>' +
                            '<div class="font-size-sm">' + i + ':00' + '</div>' +
                        '</div>'
                });
            }

            // Statements tooltip content
            if(tooltip == 'goal') {
                tip.html(function (d, i) {
                    return '<div class="text-center">' +
                            '<h6 class="m-0">' + d + '</h6>' +
                            '<span class="font-size-sm">statements</span>' +
                            '<div class="font-size-sm">' + i + ':00' + '</div>' +
                        '</div>'
                });
            }

            // Online members tooltip content
            if(tooltip == 'members') {
                tip.html(function (d, i) {
                    return '<div class="text-center">' +
                            '<h6 class="m-0">' + d + '0' + '</h6>' +
                            '<span class="font-size-sm">members</span>' +
                            '<div class="font-size-sm">' + i + ':00' + '</div>' +
                        '</div>'
                });
            }



            // Bar loading animation
            // ------------------------------

            // Choose between animated or static
            if(animate) {
                withAnimation();
            } else {
                withoutAnimation();
            }

            // Animate on load
            function withAnimation() {
                bars
                    .attr('height', 0)
                    .attr('y', height)
                    .transition()
                        .attr('height', function(d) {
                            return y(d);
                        })
                        .attr('y', function(d) {
                            return height - y(d);
                        })
                        .delay(function(d, i) {
                            return i * delay;
                        })
                        .duration(duration)
                        .ease(easing);
            }

            // Load without animateion
            function withoutAnimation() {
                bars
                    .attr('height', function(d) {
                        return y(d);
                    })
                    .attr('y', function(d) {
                        return height - y(d);
                    })
            }



            // Resize chart
            // ------------------------------

            // Call function on window resize
            $(window).on('resize', barsResize);

            // Call function on sidebar width change
            $(document).on('click', '.sidebar-control', barsResize);

            // Resize function
            // 
            // Since D3 doesn't support SVG resize by default,
            // we need to manually specify parts of the graph that need to 
            // be updated on window resize
            function barsResize() {

                // Layout variables
                width = d3Container.node().getBoundingClientRect().width;


                // Layout
                // -------------------------

                // Main svg width
                container.attr('width', width);

                // Width of appended group
                svg.attr('width', width);

                // Horizontal range
                x.rangeBands([0, width], 0.3);


                // Chart elements
                // -------------------------

                // Bars
                svg.selectAll('.d3-random-bars')
                    .attr('width', x.rangeBand())
                    .attr('x', function(d,i) {
                        return x(i);
                    });
            }
        }
    };

    // Rounded progress charts
    var _RoundedProgressChart = function(element, radius, border, color, end, iconClass, textTitle, textAverage) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if($(element).length > 0) {


            // Basic setup
            // ------------------------------

            // Main variables
            var d3Container = d3.select(element),
                startPercent = 0,
                iconSize = 32,
                endPercent = end,
                twoPi = Math.PI * 2,
                formatPercent = d3.format('.0%'),
                boxSize = radius * 2;

            // Values count
            var count = Math.abs((endPercent - startPercent) / 0.01);

            // Values step
            var step = endPercent < startPercent ? -0.01 : 0.01;



            // Create chart
            // ------------------------------

            // Add SVG element
            var container = d3Container.append('svg');

            // Add SVG group
            var svg = container
                .attr('width', boxSize)
                .attr('height', boxSize)
                .append('g')
                    .attr('transform', 'translate(' + (boxSize / 2) + ',' + (boxSize / 2) + ')');



            // Construct chart layout
            // ------------------------------

            // Arc
            var arc = d3.svg.arc()
                .startAngle(0)
                .innerRadius(radius)
                .outerRadius(radius - border);



            //
            // Append chart elements
            //

            // Paths
            // ------------------------------

            // Background path
            svg.append('path')
                .attr('class', 'd3-progress-background')
                .attr('d', arc.endAngle(twoPi))
                .style('fill', '#eee');

            // Foreground path
            var foreground = svg.append('path')
                .attr('class', 'd3-progress-foreground')
                .attr('filter', 'url(#blur)')
                .style('fill', color)
                .style('stroke', color);

            // Front path
            var front = svg.append('path')
                .attr('class', 'd3-progress-front')
                .style('fill', color)
                .style('fill-opacity', 1);



            // Text
            // ------------------------------

            // Percentage text value
            var numberText = d3.select(element)
                .append('h2')
                    .attr('class', 'pt-1 mt-2 mb-1')

            // Icon
            d3.select(element)
                .append('i')
                    .attr('class', iconClass + ' counter-icon')
                    .attr('style', 'top: ' + ((boxSize - iconSize) / 2) + 'px');

            // Title
            d3.select(element)
                .append('div')
                    .text(textTitle);

            // Subtitle
            d3.select(element)
                .append('div')
                    .attr('class', 'font-size-sm text-muted mb-3')
                    .text(textAverage);



            // Animation
            // ------------------------------

            // Animate path
            function updateProgress(progress) {
                foreground.attr('d', arc.endAngle(twoPi * progress));
                front.attr('d', arc.endAngle(twoPi * progress));
                numberText.text(formatPercent(progress));
            }

            // Animate text
            var progress = startPercent;
            (function loops() {
                updateProgress(progress);
                if (count > 0) {
                    count--;
                    progress += step;
                    setTimeout(loops, 10);
                }
            })();
        }
    };

    // Bullet chart
    var _BulletChart = function(element, height) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if($(element).length > 0) {


            // Bullet chart core
            // ------------------------------

            function bulletCore() {

                // Construct
                d3.bullet = function() {

                    // Default layout variables
                    var orient = 'left',
                        reverse = false,
                        duration = 750,
                        ranges = bulletRanges,
                        markers = bulletMarkers,
                        measures = bulletMeasures,
                        height = 30,
                        tickFormat = null;

                    // For each small multiple…
                    function bullet(g) {
                        g.each(function(d, i) {

                            // Define variables
                            var rangez = ranges.call(this, d, i).slice().sort(d3.descending),
                                markerz = markers.call(this, d, i).slice().sort(d3.descending),
                                measurez = measures.call(this, d, i).slice().sort(d3.descending),
                                g = d3.select(this);

                            // Compute the new x-scale.
                            var x1 = d3.scale.linear()
                                .domain([0, Math.max(rangez[0], markerz[0], measurez[0])])
                                .range(reverse ? [width, 0] : [0, width]);

                            // Retrieve the old x-scale, if this is an update.
                            var x0 = this.__chart__ || d3.scale.linear()
                                .domain([0, Infinity])
                                .range(x1.range());

                            // Stash the new scale.
                            this.__chart__ = x1;

                            // Derive width-scales from the x-scales.
                            var w0 = bulletWidth(x0),
                                w1 = bulletWidth(x1);



                            // Setup range
                            // ------------------------------

                            // Update the range rects
                            var range = g.selectAll('.bullet-range')
                                .data(rangez);

                            // Append range rect
                            range.enter()
                                .append('rect')
                                    .attr('class', function(d, i) { return 'bullet-range bullet-range-' + (i + 1); })
                                    .attr('width', w0)
                                    .attr('height', height)
                                    .attr('rx', 2)
                                    .attr('x', reverse ? x0 : 0)

                            // Add loading animation
                            .transition()
                                .duration(duration)
                                .attr('width', w1)
                                .attr('x', reverse ? x1 : 0);

                            // Add update animation
                            range.transition()
                                .duration(duration)
                                .attr('x', reverse ? x1 : 0)
                                .attr('width', w1)
                                .attr('height', height);



                            // Setup measures
                            // ------------------------------

                            // Update the measure rects
                            var measure = g.selectAll('.bullet-measure')
                                .data(measurez);

                            // Append measure rect
                            measure.enter()
                                .append('rect')
                                    .attr('class', function(d, i) { return 'bullet-measure bullet-measure-' + (i + 1); })
                                    .attr('width', w0)
                                    .attr('height', height / 5)
                                    .attr('x', reverse ? x0 : 0)
                                    .attr('y', height / 2.5)
                                    .style('shape-rendering', 'crispEdges');

                            // Add loading animation
                            measure.transition()
                                .duration(duration)
                                .attr('width', w1)
                                .attr('x', reverse ? x1 : 0);

                            // Add update animation
                            measure.transition()
                                .duration(duration)
                                .attr('width', w1)
                                .attr('height', height / 5)
                                .attr('x', reverse ? x1 : 0)
                                .attr('y', height / 2.5);



                            // Setup markers
                            // ------------------------------

                            // Update the marker lines
                            var marker = g.selectAll('.bullet-marker')
                                .data(markerz);

                            // Append marker line
                            marker.enter()
                                .append('line')
                                    .attr('class', function(d, i) { return 'bullet-marker bullet-marker-' + (i + 1); })
                                    .attr('x1', x0)
                                    .attr('x2', x0)
                                    .attr('y1', height / 6)
                                    .attr('y2', height * 5 / 6);

                            // Add loading animation
                            marker.transition()
                                .duration(duration)
                                .attr('x1', x1)
                                .attr('x2', x1);

                            // Add update animation
                            marker.transition()
                                .duration(duration)
                                .attr('x1', x1)
                                .attr('x2', x1)
                                .attr('y1', height / 6)
                                .attr('y2', height * 5 / 6);



                            // Setup axes
                            // ------------------------------

                            // Compute the tick format.
                            var format = tickFormat || x1.tickFormat(8);

                            // Update the tick groups.
                            var tick = g.selectAll('.bullet-tick')
                                .data(x1.ticks(8), function(d) {
                                    return this.textContent || format(d);
                                });

                            // Initialize the ticks with the old scale, x0.
                            var tickEnter = tick.enter()
                                .append('g')
                                    .attr('class', 'bullet-tick')
                                    .attr('transform', bulletTranslate(x0))
                                    .style('opacity', 1e-6);

                            // Append line
                            tickEnter.append('line')
                                .attr('y1', height)
                                .attr('y2', (height * 7 / 6) + 3);

                            // Append text
                            tickEnter.append('text')
                                .attr('text-anchor', 'middle')
                                .attr('dy', '1em')
                                .attr('y', (height * 7 / 6) + 4)
                                .text(format);

                            // Transition the entering ticks to the new scale, x1.
                            tickEnter.transition()
                                .duration(duration)
                                .attr('transform', bulletTranslate(x1))
                                .style('opacity', 1);

                            // Transition the updating ticks to the new scale, x1.
                            var tickUpdate = tick.transition()
                                .duration(duration)
                                .attr('transform', bulletTranslate(x1))
                                .style('opacity', 1);

                            // Update tick line
                            tickUpdate.select('line')
                                .attr('y1', height + 3)
                                .attr('y2', (height * 7 / 6) + 3);

                            // Update tick text
                            tickUpdate.select('text')
                                .attr('y', (height * 7 / 6) + 4);

                            // Transition the exiting ticks to the new scale, x1.
                            tick.exit()
                                .transition()
                                    .duration(duration)
                                    .attr('transform', bulletTranslate(x1))
                                    .style('opacity', 1e-6)
                                    .remove();



                            // Resize chart
                            // ------------------------------

                            // Call function on window resize
                            $(window).on('resize', resizeBulletsCore);

                            // Call function on sidebar width change
                            $(document).on('click', '.sidebar-control', resizeBulletsCore);

                            // Resize function
                            // 
                            // Since D3 doesn't support SVG resize by default,
                            // we need to manually specify parts of the graph that need to 
                            // be updated on window resize
                            function resizeBulletsCore() {

                                // Layout variables
                                width = d3.select('#bullets').node().getBoundingClientRect().width - margin.left - margin.right;
                                w1 = bulletWidth(x1);


                                // Layout
                                // -------------------------

                                // Horizontal range
                                x1.range(reverse ? [width, 0] : [0, width]);


                                // Chart elements
                                // -------------------------

                                // Measures
                                g.selectAll('.bullet-measure').attr('width', w1).attr('x', reverse ? x1 : 0);

                                // Ranges
                                g.selectAll('.bullet-range').attr('width', w1).attr('x', reverse ? x1 : 0);

                                // Markers
                                g.selectAll('.bullet-marker').attr('x1', x1).attr('x2', x1)

                                // Ticks
                                g.selectAll('.bullet-tick').attr('transform', bulletTranslate(x1))
                            }
                        });

                        d3.timer.flush();
                    }


                    // Constructor functions
                    // ------------------------------

                    // Left, right, top, bottom
                    bullet.orient = function(x) {
                        if (!arguments.length) return orient;
                        orient = x;
                        reverse = orient == 'right' || orient == 'bottom';
                        return bullet;
                    };

                    // Ranges (bad, satisfactory, good)
                    bullet.ranges = function(x) {
                        if (!arguments.length) return ranges;
                        ranges = x;
                        return bullet;
                    };

                    // Markers (previous, goal)
                    bullet.markers = function(x) {
                        if (!arguments.length) return markers;
                        markers = x;
                        return bullet;
                    };

                    // Measures (actual, forecast)
                    bullet.measures = function(x) {
                        if (!arguments.length) return measures;
                        measures = x;
                        return bullet;
                    };

                    // Width
                    bullet.width = function(x) {
                        if (!arguments.length) return width;
                        width = x;
                        return bullet;
                    };

                    // Height
                    bullet.height = function(x) {
                        if (!arguments.length) return height;
                        height = x;
                        return bullet;
                    };

                    // Axex tick format
                    bullet.tickFormat = function(x) {
                        if (!arguments.length) return tickFormat;
                        tickFormat = x;
                        return bullet;
                    };

                    // Transition duration
                    bullet.duration = function(x) {
                        if (!arguments.length) return duration;
                        duration = x;
                        return bullet;
                    };

                    return bullet;
                };

                // Ranges
                function bulletRanges(d) {
                    return d.ranges;
                }

                // Markers
                function bulletMarkers(d) {
                    return d.markers;
                }

                // Measures
                function bulletMeasures(d) {
                    return d.measures;
                }

                // Positioning
                function bulletTranslate(x) {
                    return function(d) {
                        return 'translate(' + x(d) + ',0)';
                    };
                }

                // Width
                function bulletWidth(x) {
                    var x0 = x(0);
                    return function(d) {
                        return Math.abs(x(d) - x0);
                    };
                }
            }
            bulletCore();



            // Basic setup
            // ------------------------------

            // Main variables
            var d3Container = d3.select(element),
                margin = {top: 20, right: 10, bottom: 35, left: 10},
                width = width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                height = height - margin.top - margin.bottom;



            // Construct chart layout
            // ------------------------------

            var chart = d3.bullet()
                .width(width)
                .height(height);



            // Load data
            // ------------------------------

            d3.json('/parco/global_assets/demo_data/dashboard/bullets.json', function(error, data) {

                // Show what's wrong if error
                if (error) return console.error(error);


                // Create SVG
                // ------------------------------

                // SVG container
                var container = d3Container.selectAll('svg')
                    .data(data)
                    .enter()
                    .append('svg');

                // SVG group
                var svg = container
                    .attr('class', function(d, i) { return 'bullet-' + (i + 1); })
                    .attr('width', width + margin.left + margin.right)
                    .attr('height', height + margin.top + margin.bottom)
                    .append('g')
                        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
                        .call(chart);



                // Add title
                // ------------------------------

                // Title group
                var title = svg.append('g')
                    .style('text-anchor', 'start');

                // Bullet title text
                title.append('text')
                    .attr('class', 'bullet-title')
                    .attr('y', -10)
                    .text(function(d) { return d.title; });

                // Bullet subtitle text
                title.append('text')
                    .attr('class', 'bullet-subtitle')
                    .attr('x', width)
                    .attr('y', -10)
                    .style('text-anchor', 'end')
                    .text(function(d) { return d.subtitle; })
                    .style('opacity', 0)
                    .transition()
                        .duration(500)
                        .delay(500)
                        .style('opacity', 1);



                // Add random transition for demo
                // ------------------------------

                // Bind data
                var interval = function() {
                    svg.datum(randomize).call(chart.duration(750));
                }

                // Set interval
                var intervalIds = [];
                intervalIds.push(
                    setInterval(function() {
                        interval()
                    }, 5000)
                );

                // Enable or disable real time update
                document.getElementById('realtime').onchange = function() {
                    if(realtime.checked) {
                        intervalIds.push(setInterval(function() { interval() }, 5000));
                    }
                    else {
                        for (var i=0; i < intervalIds.length; i++) {
                            clearInterval(intervalIds[i]);
                        }
                    }
                };



                // Resize chart
                // ------------------------------

                // Call function on window resize
                $(window).on('resize', bulletResize);

                // Call function on sidebar width change
                $(document).on('click', '.sidebar-control', bulletResize);

                // Resize function
                // 
                // Since D3 doesn't support SVG resize by default,
                // we need to manually specify parts of the graph that need to 
                // be updated on window resize
                function bulletResize() {

                    // Layout variables
                    width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;


                    // Layout
                    // -------------------------

                    // Main svg width
                    container.attr('width', width + margin.left + margin.right);

                    // Width of appended group
                    svg.attr('width', width + margin.left + margin.right);


                    // Chart elements
                    // -------------------------

                    // Subtitle
                    svg.selectAll('.bullet-subtitle').attr('x', width);
                }
            });



            // Randomizers
            // ------------------------------

            function randomize(d) {
                if (!d.randomizer) d.randomizer = randomizer(d);
                d.ranges = d.ranges.map(d.randomizer);
                d.markers = d.markers.map(d.randomizer);
                d.measures = d.measures.map(d.randomizer);
                return d;
            }
            function randomizer(d) {
                var k = d3.max(d.ranges) * .2;
                return function(d) {
                    return Math.max(0, d + k * (Math.random() - .5));
                };
            }
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        initComponents: function() {
            _componentSwitchery();
            _componentDaterange();
            _componentIconLetter();
        },
        initCharts: function() {

            // Sparklines
            _chartSparkline('#new-visitors', 'line', 30, 35, 'basis', 750, 2000, '#26A69A');
            _chartSparkline('#new-sessions', 'line', 30, 35, 'basis', 750, 2000, '#FF7043');
            _chartSparkline('#total-online', 'line', 30, 35, 'basis', 750, 2000, '#5C6BC0');
            _chartSparkline('#server-load', 'area', 30, 50, 'basis', 750, 2000, 'rgba(255,255,255,0.5)');

            // Streamgraph
            _TrafficSourcesStreamChart('#traffic-sources', 330);

            // Line charts
            _AppSalesLinesChart('#app_sales', 255);
            _DailyRevenueLineChart('#today-revenue', 50);

            // Area charts
            _MonthlySalesAreaChart('#monthly-sales-stats', 100, '#4DB6AC');
            _MessagesAreaChart('#messages-stats', 40, '#5C6BC0');

            // Progress charts
            _ProgressPieChart('#today-progress', 20, 20, '#7986CB');
            _ProgressPieChart('#yesterday-progress', 20, 20, '#7986CB');
            _RoundedProgressChart('#hours-available-progress', 38, 2, '#F06292', 0.68, 'icon-watch text-pink-400', 'Hours available', '64% average');
            _RoundedProgressChart('#goal-progress', 38, 2, '#5C6BC0', 0.82, 'icon-trophy3 text-indigo-400', 'Productivity goal', '87% average');

            // Donut charts
            _MarketingCampaignsDonutChart('#campaigns-donut', 42);
            _CampaignStatusDonutChart('#campaign-status-pie', 42);
            _TicketStatusDonutChart('#tickets-status', 42);

            // Bar charts
            _BarChart('#hours-available-bars', 24, 40, true, 'elastic', 1200, 50, '#EC407A', 'hours');
            _BarChart('#goal-bars', 24, 40, true, 'elastic', 1200, 50, '#5C6BC0', 'goal');
            _BarChart('#members-online', 24, 50, true, 'elastic', 1200, 50, 'rgba(255,255,255,0.5)', 'members');

            // Heatmap
            _AppSalesHeatmap('#sales-heatmap');

            // Bullet charts
            _BulletChart("#bullets", 80);
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Dashboard.initComponents();
    Dashboard.initCharts();
});

/* ------------------------------------------------------------------------------
 *
 *  # Dashboard configuration for boxed layout
 *
 *  Demo dashboard configuration. Contains charts and plugin initializations
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var Dashboard = function () {


    //
    // Setup module components
    //

    // Setup Switchery
    var _componentSwitchery = function() {
        if (typeof Switchery == 'undefined') {
            //console.warn('Warning - switchery.min.js is not loaded.');
            return;
        }

        // Initialize multiple switches
        var switches = Array.prototype.slice.call(document.querySelectorAll('.form-input-switchery'));
        switches.forEach(function(html) {
            var switchery = new Switchery(html);
        });
    };

    // Setup Daterangepicker
    var _componentDaterange = function() {
        if (!$().daterangepicker) {
            //console.warn('Warning - daterangepicker.js is not loaded.');
            return;
        }

        // Initialize
        $('.daterange-ranges').daterangepicker(
            {
                startDate: moment().subtract(29, 'days'),
                endDate: moment(),
                minDate: '01/01/2015',
                maxDate: '12/31/2019',
                dateLimit: { days: 60 },
                ranges: {
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                },
                opens: $('html').attr('dir') == 'rtl' ? 'right' : 'left',
                applyClass: 'btn-sm bg-slate-600 btn-block',
                cancelClass: 'btn-sm btn-light btn-block',
                locale: {
                    format: 'MM/DD/YYYY',
                    direction: $('html').attr('dir') == 'rtl' ? 'rtl' : 'ltr'
                }
            },
            function(start, end) {
                $('.daterange-ranges span').html(start.format('MMMM D') + ' - ' + end.format('MMMM D'));
            }
        );
        $('.daterange-ranges span').html(moment().subtract(29, 'days').format('MMMM D') + ' - ' + moment().format('MMMM D'));
    };

    // Use first letter as an icon
    var _componentIconLetter = function() {

        // Grab first letter and insert to the icon
        $('.table tr').each(function() {

            // Title
            var $title = $(this).find('.letter-icon-title'),
                letter = $title.eq(0).text().charAt(0).toUpperCase();

            // Icon
            var $icon = $(this).find('.letter-icon');
                $icon.eq(0).text(letter);
        });
    };


    //
    // Charts configs
    //

    // Traffic sources stream chart
    var _TrafficSourcesStreamChart = function(element, height) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if($(element).length > 0) {

            // Basic setup
            // ------------------------------

            // Define main variables
            var d3Container = d3.select(element),
                margin = {top: 5, right: 50, bottom: 40, left: 50},
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                height = height - margin.top - margin.bottom,
                tooltipOffset = 30;

            // Tooltip
            var tooltip = d3Container
                .append('div')
                .attr('class', 'd3-tip e')
                .style('display', 'none')

            // Format date
            var format = d3.time.format('%m/%d/%y %H:%M');
            var formatDate = d3.time.format('%H:%M');

            // Colors
            var colorrange = ['#03A9F4', '#29B6F6', '#4FC3F7', '#81D4FA', '#B3E5FC', '#E1F5FE'];



            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.time.scale().range([0, width]);

            // Vertical
            var y = d3.scale.linear().range([height, 0]);

            // Colors
            var z = d3.scale.ordinal().range(colorrange);



            // Create axes
            // ------------------------------

            // Horizontal
            var xAxis = d3.svg.axis()
                .scale(x)
                .orient('bottom')
                .ticks(d3.time.hours, 4)
                .innerTickSize(4)
                .tickPadding(8)
                .tickFormat(d3.time.format('%H:%M')); // Display hours and minutes in 24h format

            // Left vertical
            var yAxis = d3.svg.axis()
                .scale(y)
                .ticks(6)
                .innerTickSize(4)
                .outerTickSize(0)
                .tickPadding(8)
                .tickFormat(function (d) { return (d/1000) + 'k'; });

            // Right vertical
            var yAxis2 = yAxis;

            // Dash lines
            var gridAxis = d3.svg.axis()
                .scale(y)
                .orient('left')
                .ticks(6)
                .tickPadding(8)
                .tickFormat('')
                .tickSize(-width, 0, 0);



            // Create chart
            // ------------------------------

            // Container
            var container = d3Container.append('svg')

            // SVG element
            var svg = container
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                    .append('g')
                    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');



            // Construct chart layout
            // ------------------------------

            // Stack
            var stack = d3.layout.stack()
                .offset('silhouette')
                .values(function(d) { return d.values; })
                .x(function(d) { return d.date; })
                .y(function(d) { return d.value; });

            // Nest
            var nest = d3.nest()
                .key(function(d) { return d.key; });

            // Area
            var area = d3.svg.area()
                .interpolate('cardinal')
                .x(function(d) { return x(d.date); })
                .y0(function(d) { return y(d.y0); })
                .y1(function(d) { return y(d.y0 + d.y); });



            // Load data
            // ------------------------------

            d3.csv('/parco/global_assets/demo_data/dashboard/traffic_sources.csv', function (error, data) {

                // Pull out values
                data.forEach(function (d) {
                    d.date = format.parse(d.date);
                    d.value = +d.value;
                });

                // Stack and nest layers
                var layers = stack(nest.entries(data));



                // Set input domains
                // ------------------------------

                // Horizontal
                x.domain(d3.extent(data, function(d, i) { return d.date; }));

                // Vertical
                y.domain([0, d3.max(data, function(d) { return d.y0 + d.y; })]);



                // Add grid
                // ------------------------------

                // Horizontal grid. Must be before the group
                svg.append('g')
                    .attr('class', 'd3-grid-dashed')
                    .call(gridAxis);



                //
                // Append chart elements
                //

                // Stream layers
                // ------------------------------

                // Create group
                var group = svg.append('g')
                    .attr('class', 'streamgraph-layers-group');

                // And append paths to this group
                var layer = group.selectAll('.streamgraph-layer')
                    .data(layers)
                    .enter()
                        .append('path')
                        .attr('class', 'streamgraph-layer')
                        .attr('d', function(d) { return area(d.values); })                    
                        .style('stroke', '#fff')
                        .style('stroke-width', 0.5)
                        .style('fill', function(d, i) { return z(i); });

                // Add transition
                var layerTransition = layer
                    .style('opacity', 0)
                    .transition()
                        .duration(750)
                        .delay(function(d, i) { return i * 50; })
                        .style('opacity', 1)



                // Append axes
                // ------------------------------

                //
                // Left vertical
                //

                svg.append('g')
                    .attr('class', 'd3-axis d3-axis-left d3-axis-solid')
                    .call(yAxis.orient('left'));

                // Hide first tick
                d3.select(svg.selectAll('.d3-axis-left .tick text')[0][0])
                    .style('visibility', 'hidden');


                //
                // Right vertical
                //

                svg.append('g')
                    .attr('class', 'd3-axis d3-axis-right d3-axis-solid')
                    .attr('transform', 'translate(' + width + ', 0)')
                    .call(yAxis2.orient('right'));

                // Hide first tick
                d3.select(svg.selectAll('.d3-axis-right .tick text')[0][0])
                    .style('visibility', 'hidden');


                //
                // Horizontal
                //

                var xaxisg = svg.append('g')
                    .attr('class', 'd3-axis d3-axis-horizontal d3-axis-solid')
                    .attr('transform', 'translate(0,' + height + ')')
                    .call(xAxis);

                // Add extra subticks for hidden hours
                xaxisg.selectAll('.d3-axis-subticks')
                    .data(x.ticks(d3.time.hours), function(d) { return d; })
                    .enter()
                    .append('line')
                    .attr('class', 'd3-axis-subticks')
                    .attr('y1', 0)
                    .attr('y2', 4)
                    .attr('x1', x)
                    .attr('x2', x);



                // Add hover line and pointer
                // ------------------------------

                // Append group to the group of paths to prevent appearance outside chart area
                var hoverLineGroup = group.append('g')
                    .attr('class', 'hover-line');

                // Add line
                var hoverLine = hoverLineGroup
                    .append('line')
                    .attr('y1', 0)
                    .attr('y2', height)
                    .style('fill', 'none')
                    .style('stroke', '#fff')
                    .style('stroke-width', 1)
                    .style('pointer-events', 'none')
                    .style('shape-rendering', 'crispEdges')
                    .style('opacity', 0);

                // Add pointer
                var hoverPointer = hoverLineGroup
                    .append('rect')
                    .attr('x', 2)
                    .attr('y', 2)
                    .attr('width', 6)
                    .attr('height', 6)
                    .style('fill', '#03A9F4')
                    .style('stroke', '#fff')
                    .style('stroke-width', 1)
                    .style('shape-rendering', 'crispEdges')
                    .style('pointer-events', 'none')
                    .style('opacity', 0);



                // Append events to the layers group
                // ------------------------------

                layerTransition.each('end', function() {
                    layer
                        .on('mouseover', function (d, i) {
                            svg.selectAll('.streamgraph-layer')
                                .transition()
                                .duration(250)
                                .style('opacity', function (d, j) {
                                    return j != i ? 0.75 : 1; // Mute all except hovered
                                });
                        })

                        .on('mousemove', function (d, i) {
                            mouse = d3.mouse(this);
                            mousex = mouse[0];
                            mousey = mouse[1];
                            datearray = [];
                            var invertedx = x.invert(mousex);
                            invertedx = invertedx.getHours();
                            var selected = (d.values);
                            for (var k = 0; k < selected.length; k++) {
                                datearray[k] = selected[k].date
                                datearray[k] = datearray[k].getHours();
                            }
                            mousedate = datearray.indexOf(invertedx);
                            pro = d.values[mousedate].value;


                            // Display mouse pointer
                            hoverPointer
                                .attr('x', mousex - 3)
                                .attr('y', mousey - 6)
                                .style('opacity', 1);

                            hoverLine
                                .attr('x1', mousex)
                                .attr('x2', mousex)
                                .style('opacity', 1);

                            //
                            // Tooltip
                            //

                            // Tooltip data
                            tooltip.html(
                                '<ul class="list-unstyled mb-1">' +
                                    '<li>' + '<div class="font-size-base my-1"><i class="icon-circle-left2 mr-2"></i>' + d.key + '</div>' + '</li>' +
                                    '<li>' + 'Visits: &nbsp;' + "<span class='font-weight-semibold float-right'>" + pro + '</span>' + '</li>' +
                                    '<li>' + 'Time: &nbsp; ' + '<span class="font-weight-semibold float-right">' + formatDate(d.values[mousedate].date) + '</span>' + '</li>' + 
                                '</ul>'
                            )
                            .style('display', 'block');

                            // Tooltip arrow
                            tooltip.append('div').attr('class', 'd3-tip-arrow');
                        })

                        .on('mouseout', function (d, i) {

                            // Revert full opacity to all paths
                            svg.selectAll('.streamgraph-layer')
                                .transition()
                                .duration(250)
                                .style('opacity', 1);

                            // Hide cursor pointer
                            hoverPointer.style('opacity', 0);

                            // Hide tooltip
                            tooltip.style('display', 'none');

                            hoverLine.style('opacity', 0);
                        });
                    });



                // Append events to the chart container
                // ------------------------------

                d3Container
                    .on('mousemove', function (d, i) {
                        mouse = d3.mouse(this);
                        mousex = mouse[0];
                        mousey = mouse[1];

                        // Move tooltip vertically
                        tooltip.style('top', (mousey - ($('.d3-tip').outerHeight() / 2)) - 2 + 'px') // Half tooltip height - half arrow width

                        // Move tooltip horizontally
                        if(mousex >= ($(element).outerWidth() - $('.d3-tip').outerWidth() - margin.right - (tooltipOffset * 2))) {
                            tooltip
                                .style('left', (mousex - $('.d3-tip').outerWidth() - tooltipOffset) + 'px') // Change tooltip direction from right to left to keep it inside graph area
                                .attr('class', 'd3-tip w');
                        }
                        else {
                            tooltip
                                .style('left', (mousex + tooltipOffset) + 'px' )
                                .attr('class', 'd3-tip e');
                        }
                    });
            });



            // Resize chart
            // ------------------------------

            // Call function on window resize
            $(window).on('resize', resizeStream);

            // Call function on sidebar width change
            $(document).on('click', '.sidebar-control', resizeStream);

            // Resize function
            // 
            // Since D3 doesn't support SVG resize by default,
            // we need to manually specify parts of the graph that need to 
            // be updated on window resize
            function resizeStream() {

                // Layout
                // -------------------------

                // Define width
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;

                // Main svg width
                container.attr('width', width + margin.left + margin.right);

                // Width of appended group
                svg.attr('width', width + margin.left + margin.right);

                // Horizontal range
                x.range([0, width]);


                // Chart elements
                // -------------------------

                // Horizontal axis
                svg.selectAll('.d3-axis-horizontal').call(xAxis);

                // Horizontal axis subticks
                svg.selectAll('.d3-axis-subticks').attr('x1', x).attr('x2', x);

                // Grid lines width
                svg.selectAll('.d3-grid-dashed').call(gridAxis.tickSize(-width, 0, 0))

                // Right vertical axis
                svg.selectAll('.d3-axis-right').attr('transform', 'translate(' + width + ', 0)');

                // Area paths
                svg.selectAll('.streamgraph-layer').attr('d', function(d) { return area(d.values); });
            }
        }
    };

    // App sales line chart
    var _AppSalesLinesChart = function(element, height) {
        if (typeof d3 == 'undefined' || typeof d3.tip == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if($(element).length > 0) {


            // Basic setup
            // ------------------------------

            // Define main variables
            var d3Container = d3.select(element),
                margin = {top: 5, right: 30, bottom: 30, left: 50},
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                height = height - margin.top - margin.bottom;

            // Tooltip
            var tooltip = d3.tip()
                .attr('class', 'd3-tip')
                .html(function (d) {
                    return '<ul class="list-unstyled mb-1">' +
                        '<li>' + '<div class="font-size-base my-1"><i class="icon-circle-left2 mr-2"></i>' + d.name + ' app' + '</div>' + '</li>' +
                        '<li>' + 'Sales: &nbsp;' + '<span class="font-weight-semibold float-right">' + d.value + '</span>' + '</li>' +
                        '<li>' + 'Revenue: &nbsp; ' + '<span class="font-weight-semibold float-right">' + '$' + (d.value * 25).toFixed(2) + '</span>' + '</li>' + 
                    '</ul>';
                });

            // Format date
            var parseDate = d3.time.format('%Y/%m/%d').parse,
                formatDate = d3.time.format('%b %d, %y');

            // Line colors
            var scale = ['#4CAF50', '#FF5722', '#5C6BC0'],
                color = d3.scale.ordinal().range(scale);


            // Create chart
            // ------------------------------

            // Container
            var container = d3Container.append('svg');

            // SVG element
            var svg = container
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
                    .call(tooltip);



            // Add date range switcher
            // ------------------------------

            // Menu
            var menu = $('#select_date').multiselect({
                buttonClass: 'text-default font-weight-semibold bg-transparent border-0 cursor-pointer outline-0 py-0 pl-0',
                enableHTML: true,
                dropRight: $('html').attr('dir') == 'rtl' ? false : true,
                onChange: function() {
                    change();
                },
                buttonText: function (options, element) {
                    var selected = '';
                    options.each(function() {
                        selected += $(this).html() + ', ';
                    });
                    return '<span class="badge badge-mark border-warning mr-2"></span>' + selected.substr(0, selected.length -2);
                }
            });



            // Load data
            // ------------------------------

            d3.csv('/parco/global_assets/demo_data/dashboard/app_sales.csv', function(error, data) {
                formatted = data;
                redraw();
            });


            // Construct layout
            // ------------------------------

            // Add events
            var altKey;
            d3.select(window)
                .on('keydown', function() { altKey = d3.event.altKey; })
                .on('keyup', function() { altKey = false; });
        
            // Set terms of transition on date change   
            function change() {
              d3.transition()
                  .duration(altKey ? 7500 : 500)
                  .each(redraw);
            }



            // Main chart drawing function
            // ------------------------------

            function redraw() {

                // Construct chart layout
                // ------------------------------

                // Create data nests
                var nested = d3.nest()
                    .key(function(d) { return d.type; })
                    .map(formatted)
                
                // Get value from menu selection
                // the option values correspond
                //to the [type] value we used to nest the data  
                var series = menu.val();
                
                // Only retrieve data from the selected series using nest
                var data = nested[series];
                
                // For object constancy we will need to set 'keys', one for each type of data (column name) exclude all others.
                color.domain(d3.keys(data[0]).filter(function(key) { return (key !== 'date' && key !== 'type'); }));

                // Setting up color map
                var linedata = color.domain().map(function(name) {
                    return {
                                name: name,
                                values: data.map(function(d) {
                                    return {name: name, date: parseDate(d.date), value: parseFloat(d[name], 10)};
                                })
                            };
                        });

                // Draw the line
                var line = d3.svg.line()
                    .x(function(d) { return x(d.date); })
                    .y(function(d) { return y(d.value); })
                    .interpolate('cardinal');



                // Construct scales
                // ------------------------------

                // Horizontal
                var x = d3.time.scale()
                    .domain([
                        d3.min(linedata, function(c) { return d3.min(c.values, function(v) { return v.date; }); }),
                        d3.max(linedata, function(c) { return d3.max(c.values, function(v) { return v.date; }); })
                    ])
                    .range([0, width]);

                // Vertical
                var y = d3.scale.linear()
                    .domain([
                        d3.min(linedata, function(c) { return d3.min(c.values, function(v) { return v.value; }); }),
                        d3.max(linedata, function(c) { return d3.max(c.values, function(v) { return v.value; }); })
                    ])
                    .range([height, 0]);



                // Create axes
                // ------------------------------

                // Horizontal
                var xAxis = d3.svg.axis()
                    .scale(x)
                    .orient('bottom')
                    .tickPadding(8)
                    .ticks(d3.time.days)
                    .innerTickSize(4)
                    .tickFormat(d3.time.format('%a')); // Display hours and minutes in 24h format

                // Vertical
                var yAxis = d3.svg.axis()
                    .scale(y)
                    .orient('left')
                    .ticks(6)
                    .tickSize(0 -width)
                    .tickPadding(8);
                


                //
                // Append chart elements
                //

                // Append axes
                // ------------------------------

                // Horizontal
                svg.append('g')
                    .attr('class', 'd3-axis d3-axis-horizontal d3-axis-solid')
                    .attr('transform', 'translate(0,' + height + ')');

                // Vertical
                svg.append('g')
                    .attr('class', 'd3-axis d3-axis-vertical d3-axis-transparent');



                // Append lines
                // ------------------------------

                // Bind the data
                var lines = svg.selectAll('.lines')
                    .data(linedata)
             
                // Append a group tag for each line
                var lineGroup = lines
                    .enter()
                    .append('g')
                        .attr('class', 'lines')
                        .attr('id', function(d){ return d.name + '-line'; });

                // Append the line to the graph
                lineGroup.append('path')
                    .attr('class', 'd3-line d3-line-medium')
                    .style('stroke', function(d) { return color(d.name); })
                    .style('opacity', 0)
                    .attr('d', function(d) { return line(d.values[0]); })
                    .transition()
                        .duration(500)
                        .delay(function(d, i) { return i * 200; })
                        .style('opacity', 1);
              


                // Append circles
                // ------------------------------

                var circles = lines.selectAll('circle')
                    .data(function(d) { return d.values; })
                    .enter()
                    .append('circle')
                        .attr('class', 'd3-line-circle d3-line-circle-medium')
                        .attr('cx', function(d,i){return x(d.date)})
                        .attr('cy',function(d,i){return y(d.value)})
                        .attr('r', 3)
                        .style('fill', '#fff')
                        .style('stroke', function(d) { return color(d.name); });

                // Add transition
                circles
                    .style('opacity', 0)
                    .transition()
                        .duration(500)
                        .delay(500)
                        .style('opacity', 1);



                // Append tooltip
                // ------------------------------

                // Add tooltip on circle hover
                circles
                    .on('mouseover', function (d) {
                        tooltip.offset([-15, 0]).show(d);

                        // Animate circle radius
                        d3.select(this).transition().duration(250).attr('r', 4);
                    })
                    .on('mouseout', function (d) {
                        tooltip.hide(d);

                        // Animate circle radius
                        d3.select(this).transition().duration(250).attr('r', 3);
                    });

                // Change tooltip direction of first point
                // to always keep it inside chart, useful on mobiles
                lines.each(function (d) { 
                    d3.select(d3.select(this).selectAll('circle')[0][0])
                        .on('mouseover', function (d) {
                            tooltip.offset([0, 15]).direction('e').show(d);

                            // Animate circle radius
                            d3.select(this).transition().duration(250).attr('r', 4);
                        })
                        .on('mouseout', function (d) {
                            tooltip.direction('n').hide(d);

                            // Animate circle radius
                            d3.select(this).transition().duration(250).attr('r', 3);
                        });
                })

                // Change tooltip direction of last point
                // to always keep it inside chart, useful on mobiles
                lines.each(function (d) { 
                    d3.select(d3.select(this).selectAll('circle')[0][d3.select(this).selectAll('circle').size() - 1])
                        .on('mouseover', function (d) {
                            tooltip.offset([0, -15]).direction('w').show(d);

                            // Animate circle radius
                            d3.select(this).transition().duration(250).attr('r', 4);
                        })
                        .on('mouseout', function (d) {
                            tooltip.direction('n').hide(d);

                            // Animate circle radius
                            d3.select(this).transition().duration(250).attr('r', 3);
                        })
                })



                // Update chart on date change
                // ------------------------------

                // Set variable for updating visualization
                var lineUpdate = d3.transition(lines);
                
                // Update lines
                lineUpdate.select('path')
                    .attr('d', function(d, i) { return line(d.values); });

                // Update circles
                lineUpdate.selectAll('circle')
                    .attr('cy',function(d,i){return y(d.value)})
                    .attr('cx', function(d,i){return x(d.date)});

                // Update vertical axes
                d3.transition(svg)
                    .select('.d3-axis-vertical')
                    .call(yAxis);   

                // Update horizontal axes
                d3.transition(svg)
                    .select('.d3-axis-horizontal')
                    .attr('transform', 'translate(0,' + height + ')')
                    .call(xAxis);



                // Resize chart
                // ------------------------------

                // Call function on window resize
                $(window).on('resize', appSalesResize);

                // Call function on sidebar width change
                $(document).on('click', '.sidebar-control', appSalesResize);

                // Resize function
                // 
                // Since D3 doesn't support SVG resize by default,
                // we need to manually specify parts of the graph that need to 
                // be updated on window resize
                function appSalesResize() {

                    // Layout
                    // -------------------------

                    // Define width
                    width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;

                    // Main svg width
                    container.attr('width', width + margin.left + margin.right);

                    // Width of appended group
                    svg.attr('width', width + margin.left + margin.right);

                    // Horizontal range
                    x.range([0, width]);

                    // Vertical range
                    y.range([height, 0]);


                    // Chart elements
                    // -------------------------

                    // Horizontal axis
                    svg.select('.d3-axis-horizontal').call(xAxis);

                    // Vertical axis
                    svg.select('.d3-axis-vertical').call(yAxis.tickSize(0-width));

                    // Lines
                    svg.selectAll('.d3-line').attr('d', function(d, i) { return line(d.values); });

                    // Circles
                    svg.selectAll('.d3-line-circle').attr('cx', function(d,i){return x(d.date)})
                }
            }
        }
    };

    // Monthly sales area chart
    var _MonthlySalesAreaChart = function(element, height, color) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if($(element).length > 0) {


            // Basic setup
            // ------------------------------

            // Define main variables
            var d3Container = d3.select(element),
                margin = {top: 20, right: 35, bottom: 40, left: 35},
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                height = height - margin.top - margin.bottom;

            // Date and time format
            var parseDate = d3.time.format('%Y-%m-%d').parse,
                bisectDate = d3.bisector(function(d) { return d.date; }).left,
                formatDate = d3.time.format('%b %d');


            // Create SVG
            // ------------------------------

            // Container
            var container = d3Container.append('svg');

            // SVG element
            var svg = container
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')



            // Construct chart layout
            // ------------------------------

            // Area
            var area = d3.svg.area()
                .x(function(d) { return x(d.date); })
                .y0(height)
                .y1(function(d) { return y(d.value); })
                .interpolate('monotone')


            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.time.scale().range([0, width ]);

            // Vertical
            var y = d3.scale.linear().range([height, 0]);


            // Create axes
            // ------------------------------

            // Horizontal
            var xAxis = d3.svg.axis()
                .scale(x)
                .orient('bottom')
                .ticks(d3.time.days, 6)
                .innerTickSize(4)
                .tickPadding(8)
                .tickFormat(d3.time.format('%b %d'));


            // Load data
            // ------------------------------

            d3.json('/parco/global_assets/demo_data/dashboard/monthly_sales.json', function (error, data) {

                // Show what's wrong if error
                if (error) return console.error(error);

                // Pull out values
                data.forEach(function (d) {
                    d.date = parseDate(d.date);
                    d.value = +d.value;
                });

                // Get the maximum value in the given array
                var maxY = d3.max(data, function(d) { return d.value; });

                // Reset start data for animation
                var startData = data.map(function(datum) {
                    return {
                        date: datum.date,
                        value: 0
                    };
                });


                // Set input domains
                // ------------------------------

                // Horizontal
                x.domain(d3.extent(data, function(d, i) { return d.date; }));

                // Vertical
                y.domain([0, d3.max( data, function(d) { return d.value; })]);



                //
                // Append chart elements
                //

                // Append axes
                // -------------------------

                // Horizontal
                var horizontalAxis = svg.append('g')
                    .attr('class', 'd3-axis d3-axis-horizontal d3-axis-solid')
                    .attr('transform', 'translate(0,' + height + ')')
                    .call(xAxis);

                // Add extra subticks for hidden hours
                horizontalAxis.selectAll('.d3-axis-subticks')
                    .data(x.ticks(d3.time.days), function(d) { return d; })
                    .enter()
                        .append('line')
                        .attr('class', 'd3-axis-subticks')
                        .attr('y1', 0)
                        .attr('y2', 4)
                        .attr('x1', x)
                        .attr('x2', x);



                // Append area
                // -------------------------

                // Add area path
                svg.append('path')
                    .datum(data)
                    .attr('class', 'd3-area')
                    .attr('d', area)
                    .style('fill', color)
                    .transition() // begin animation
                        .duration(1000)
                        .attrTween('d', function() {
                            var interpolator = d3.interpolateArray(startData, data);
                            return function (t) {
                                return area(interpolator (t));
                            }
                        });



                // Append crosshair and tooltip
                // -------------------------

                //
                // Line
                //

                // Line group
                var focusLine = svg.append('g')
                    .attr('class', 'd3-crosshair-line')
                    .style('display', 'none');

                // Line element
                focusLine.append('line')
                    .attr('class', 'vertical-crosshair')
                    .attr('y1', 0)
                    .attr('y2', -maxY)
                    .style('stroke', '#e5e5e5')
                    .style('shape-rendering', 'crispEdges')


                //
                // Pointer
                //

                // Pointer group
                var focusPointer = svg.append('g')
                    .attr('class', 'd3-crosshair-pointer')
                    .style('display', 'none');

                // Pointer element
                focusPointer.append('circle')
                    .attr('r', 3)
                    .style('fill', '#fff')
                    .style('stroke', color)
                    .style('stroke-width', 1)


                //
                // Text
                //

                // Text group
                var focusText = svg.append('g')
                    .attr('class', 'd3-crosshair-text')
                    .style('display', 'none');

                // Text element
                focusText.append('text')
                    .attr('dy', -10)
                    .style('font-size', 12);


                //
                // Overlay with events
                //

                svg.append('rect')
                    .attr('class', 'd3-crosshair-overlay')
                    .style('fill', 'none')
                    .style('pointer-events', 'all')
                    .attr('width', width)
                    .attr('height', height)
                        .on('mouseover', function() {
                            focusPointer.style('display', null);        
                            focusLine.style('display', null)
                            focusText.style('display', null);
                        })
                        .on('mouseout', function() {
                            focusPointer.style('display', 'none'); 
                            focusLine.style('display', 'none');
                            focusText.style('display', 'none');
                        })
                        .on('mousemove', mousemove);


                // Display tooltip on mousemove
                function mousemove() {

                    // Define main variables
                    var mouse = d3.mouse(this),
                        mousex = mouse[0],
                        mousey = mouse[1],
                        x0 = x.invert(mousex),
                        i = bisectDate(data, x0),
                        d0 = data[i - 1],
                        d1 = data[i],
                        d = x0 - d0.date > d1.date - x0 ? d1 : d0;

                    // Move line
                    focusLine.attr('transform', 'translate(' + x(d.date) + ',' + height + ')');

                    // Move pointer
                    focusPointer.attr('transform', 'translate(' + x(d.date) + ',' + y(d.value) + ')');

                    // Reverse tooltip at the end point
                    if(mousex >= (d3Container.node().getBoundingClientRect().width - focusText.select('text').node().getBoundingClientRect().width - margin.right - margin.left)) {
                        focusText.select('text').attr('text-anchor', 'end').attr('x', function () { return (x(d.date) - 15) + 'px' }).text(formatDate(d.date) + ' - ' + d.value + ' sales');
                    }
                    else {
                        focusText.select('text').attr('text-anchor', 'start').attr('x', function () { return (x(d.date) + 15) + 'px' }).text(formatDate(d.date) + ' - ' + d.value + ' sales');
                    }
                }



                // Resize chart
                // ------------------------------

                // Call function on window resize
                $(window).on('resize', monthlySalesAreaResize);

                // Call function on sidebar width change
                $(document).on('click', '.sidebar-control', monthlySalesAreaResize);

                // Resize function
                // 
                // Since D3 doesn't support SVG resize by default,
                // we need to manually specify parts of the graph that need to 
                // be updated on window resize
                function monthlySalesAreaResize() {

                    // Layout variables
                    width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;


                    // Layout
                    // -------------------------

                    // Main svg width
                    container.attr('width', width + margin.left + margin.right);

                    // Width of appended group
                    svg.attr('width', width + margin.left + margin.right);


                    // Axes
                    // -------------------------

                    // Horizontal range
                    x.range([0, width]);

                    // Horizontal axis
                    svg.selectAll('.d3-axis-horizontal').call(xAxis);

                    // Horizontal axis subticks
                    svg.selectAll('.d3-axis-subticks').attr('x1', x).attr('x2', x);


                    // Chart elements
                    // -------------------------

                    // Area path
                    svg.selectAll('.d3-area').datum(data).attr('d', area);

                    // Crosshair
                    svg.selectAll('.d3-crosshair-overlay').attr('width', width);
                }
            });
        }
    };

    // Messages area chart
    var _MessagesAreaChart = function(element, height, color) {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if($(element).length > 0) {


            // Basic setup
            // ------------------------------

            // Define main variables
            var d3Container = d3.select(element),
                margin = {top: 0, right: 0, bottom: 0, left: 0},
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                height = height - margin.top - margin.bottom;

            // Date and time format
            var parseDate = d3.time.format('%Y-%m-%d').parse;


            // Create SVG
            // ------------------------------

            // Container
            var container = d3Container.append('svg');

            // SVG element
            var svg = container
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')


            // Construct chart layout
            // ------------------------------

            // Area
            var area = d3.svg.area()
                .x(function(d) { return x(d.date); })
                .y0(height)
                .y1(function(d) { return y(d.value); })
                .interpolate('monotone')


            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.time.scale().range([0, width ]);

            // Vertical
            var y = d3.scale.linear().range([height, 0]);


            // Load data
            // ------------------------------

            d3.json('/parco/global_assets/demo_data/dashboard/monthly_sales.json', function (error, data) {

                // Show what's wrong if error
                if (error) return console.error(error);

                // Pull out values
                data.forEach(function (d) {
                    d.date = parseDate(d.date);
                    d.value = +d.value;
                });

                // Get the maximum value in the given array
                var maxY = d3.max(data, function(d) { return d.value; });

                // Reset start data for animation
                var startData = data.map(function(datum) {
                    return {
                        date: datum.date,
                        value: 0
                    };
                });


                // Set input domains
                // ------------------------------

                // Horizontal
                x.domain(d3.extent(data, function(d, i) { return d.date; }));

                // Vertical
                y.domain([0, d3.max( data, function(d) { return d.value; })]);



                //
                // Append chart elements
                //

                // Add area path
                svg.append('path')
                    .datum(data)
                    .attr('class', 'd3-area')
                    .style('fill', color)
                    .attr('d', area)
                    .transition() // begin animation
                        .duration(1000)
                        .attrTween('d', function() {
                            var interpolator = d3.interpolateArray(startData, data);
                            return function (t) {
                                return area(interpolator (t));
                            }
                        });


                // Resize chart
                // ------------------------------

                // Call function on window resize
                $(window).on('resize', messagesAreaResize);

                // Call function on sidebar width change
                $(document).on('click', '.sidebar-control', messagesAreaResize);

                // Resize function
                // 
                // Since D3 doesn't support SVG resize by default,
                // we need to manually specify parts of the graph that need to 
                // be updated on window resize
                function messagesAreaResize() {

                    // Layout variables
                    width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;


                    // Layout
                    // -------------------------

                    // Main svg width
                    container.attr('width', width + margin.left + margin.right);

                    // Width of appended group
                    svg.attr('width', width + margin.left + margin.right);

                    // Horizontal range
                    x.range([0, width]);


                    // Chart elements
                    // -------------------------

                    // Area path
                    svg.selectAll('.d3-area').datum( data ).attr('d', area);
                }
            });
        }
    };

    // Sparklines chart
    var _chartSparkline = function(element, chartType, qty, height, interpolation, duration, interval, color) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if($(element).length > 0) {


            // Basic setup
            // ------------------------------

            // Define main variables
            var d3Container = d3.select(element),
                margin = {top: 0, right: 0, bottom: 0, left: 0},
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                height = height - margin.top - margin.bottom;


            // Generate random data (for demo only)
            var data = [];
            for (var i=0; i < qty; i++) {
                data.push(Math.floor(Math.random() * qty) + 5)
            }


            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.scale.linear().range([0, width]);

            // Vertical
            var y = d3.scale.linear().range([height - 5, 5]);


            // Set input domains
            // ------------------------------

            // Horizontal
            x.domain([1, qty - 3])

            // Vertical
            y.domain([0, qty])
                


            // Construct chart layout
            // ------------------------------

            // Line
            var line = d3.svg.line()
                .interpolate(interpolation)
                .x(function(d, i) { return x(i); })
                .y(function(d, i) { return y(d); });

            // Area
            var area = d3.svg.area()
                .interpolate(interpolation)
                .x(function(d, i) { 
                    return x(i); 
                })
                .y0(height)
                .y1(function(d) { 
                    return y(d); 
                });



            // Create SVG
            // ------------------------------

            // Container
            var container = d3Container.append('svg');

            // SVG element
            var svg = container
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append("g")
                    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');



            // Add mask for animation
            // ------------------------------

            // Add clip path
            var clip = svg.append('defs')
                .append('clipPath')
                .attr('id', function(d, i) { return 'load-clip-' + element.substring(1) })

            // Add clip shape
            var clips = clip.append('rect')
                .attr('class', 'load-clip')
                .attr('width', 0)
                .attr('height', height);

            // Animate mask
            clips
                .transition()
                    .duration(1000)
                    .ease('linear')
                    .attr('width', width);



            //
            // Append chart elements
            //

            // Main path
            var path = svg.append('g')
                .attr('clip-path', function(d, i) { return 'url(#load-clip-' + element.substring(1) + ')'})
                .append('path')
                    .datum(data)
                    .attr('transform', 'translate(' + x(0) + ',0)');

            // Add path based on chart type
            if(chartType == 'area') {
                path.attr('d', area).attr('class', 'd3-area').style('fill', color); // area
            }
            else {
                path.attr('d', line).attr('class', 'd3-line d3-line-medium').style('stroke', color); // line
            }

            // Animate path
            path
                .style('opacity', 0)
                .transition()
                    .duration(750)
                    .style('opacity', 1);



            // Set update interval. For demo only
            // ------------------------------

            setInterval(function() {

                // push a new data point onto the back
                data.push(Math.floor(Math.random() * qty) + 5);

                // pop the old data point off the front
                data.shift();

                update();

            }, interval);



            // Update random data. For demo only
            // ------------------------------

            function update() {

                // Redraw the path and slide it to the left
                path
                    .attr('transform', null)
                    .transition()
                        .duration(duration)
                        .ease('linear')
                        .attr('transform', 'translate(' + x(0) + ',0)');

                // Update path type
                if(chartType == 'area') {
                    path.attr('d', area).attr('class', 'd3-area').style('fill', color)
                }
                else {
                    path.attr('d', line).attr('class', 'd3-line d3-line-medium').style('stroke', color);
                }
            }



            // Resize chart
            // ------------------------------

            // Call function on window resize
            $(window).on('resize', resizeSparklines);

            // Call function on sidebar width change
            $(document).on('click', '.sidebar-control', resizeSparklines);

            // Resize function
            // 
            // Since D3 doesn't support SVG resize by default,
            // we need to manually specify parts of the graph that need to 
            // be updated on window resize
            function resizeSparklines() {

                // Layout variables
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;


                // Layout
                // -------------------------

                // Main svg width
                container.attr('width', width + margin.left + margin.right);

                // Width of appended group
                svg.attr('width', width + margin.left + margin.right);

                // Horizontal range
                x.range([0, width]);


                // Chart elements
                // -------------------------

                // Clip mask
                clips.attr('width', width);

                // Line
                svg.select('.d3-line').attr('d', line);

                // Area
                svg.select('.d3-area').attr('d', area);
            }
        }
    };

    // Daily revenue line chart
    var _DailyRevenueLineChart = function(element, height) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if($(element).length > 0) {


            // Basic setup
            // ------------------------------

            // Add data set
            var dataset = [
                {
                    'date': '04/13/14',
                    'alpha': '60'
                }, {
                    'date': '04/14/14',
                    'alpha': '35'
                }, {
                    'date': '04/15/14',
                    'alpha': '65'
                }, {
                    'date': '04/16/14',
                    'alpha': '50'
                }, {
                    'date': '04/17/14',
                    'alpha': '65'
                }, {
                    'date': '04/18/14',
                    'alpha': '20'
                }, {
                    'date': '04/19/14',
                    'alpha': '60'
                }
            ];

            // Main variables
            var d3Container = d3.select(element),
                margin = {top: 0, right: 0, bottom: 0, left: 0},
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                height = height - margin.top - margin.bottom,
                padding = 20;

            // Format date
            var parseDate = d3.time.format('%m/%d/%y').parse,
                formatDate = d3.time.format('%a, %B %e');



            // Add tooltip
            // ------------------------------

            var tooltip = d3.tip()
                .attr('class', 'd3-tip')
                .html(function (d) {
                    return '<ul class="list-unstyled mb-1">' +
                        '<li>' + '<div class="font-size-base my-1"><i class="icon-check2 mr-2"></i>' + formatDate(d.date) + '</div>' + '</li>' +
                        '<li>' + 'Sales: &nbsp;' + '<span class="font-weight-semibold float-right">' + d.alpha + '</span>' + '</li>' +
                        '<li>' + 'Revenue: &nbsp; ' + '<span class="font-weight-semibold float-right">' + '$' + (d.alpha * 25).toFixed(2) + '</span>' + '</li>' + 
                    '</ul>';
                });



            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append('svg');

            // Add SVG group
            var svg = container
                    .attr('width', width + margin.left + margin.right)
                    .attr('height', height + margin.top + margin.bottom)
                    .append('g')
                        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
                        .call(tooltip);



            // Load data
            // ------------------------------

            dataset.forEach(function (d) {
                d.date = parseDate(d.date);
                d.alpha = +d.alpha;
            });



            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.time.scale()
                .range([padding, width - padding]);

            // Vertical
            var y = d3.scale.linear()
                .range([height, 5]);



            // Set input domains
            // ------------------------------

            // Horizontal
            x.domain(d3.extent(dataset, function (d) {
                return d.date;
            }));

            // Vertical
            y.domain([0, d3.max(dataset, function (d) {
                return Math.max(d.alpha);
            })]);



            // Construct chart layout
            // ------------------------------

            // Line
            var line = d3.svg.line()
                .x(function(d) {
                    return x(d.date);
                })
                .y(function(d) {
                    return y(d.alpha)
                });



            //
            // Append chart elements
            //

            // Add mask for animation
            // ------------------------------

            // Add clip path
            var clip = svg.append('defs')
                .append('clipPath')
                .attr('id', 'clip-line-small');

            // Add clip shape
            var clipRect = clip.append('rect')
                .attr('class', 'clip')
                .attr('width', 0)
                .attr('height', height);

            // Animate mask
            clipRect
                  .transition()
                      .duration(1000)
                      .ease('linear')
                      .attr('width', width);



            // Line
            // ------------------------------

            // Path
            var path = svg.append('path')
                .attr({
                    'd': line(dataset),
                    'clip-path': 'url(#clip-line-small)',
                    'class': 'd3-line d3-line-medium'
                })
                .style('stroke', '#fff');

            // Animate path
            svg.select('.line-tickets')
                .transition()
                    .duration(1000)
                    .ease('linear');



            // Add vertical guide lines
            // ------------------------------

            // Bind data
            var guide = svg.append('g')
                .selectAll('.d3-line-guides-group')
                .data(dataset);

            // Append lines
            guide
                .enter()
                .append('line')
                    .attr('class', 'd3-line-guides')
                    .attr('x1', function (d, i) {
                        return x(d.date);
                    })
                    .attr('y1', function (d, i) {
                        return height;
                    })
                    .attr('x2', function (d, i) {
                        return x(d.date);
                    })
                    .attr('y2', function (d, i) {
                        return height;
                    })
                    .style('stroke', 'rgba(255,255,255,0.3)')
                    .style('stroke-dasharray', '4,2')
                    .style('shape-rendering', 'crispEdges');

            // Animate guide lines
            guide
                .transition()
                    .duration(1000)
                    .delay(function(d, i) { return i * 150; })
                    .attr('y2', function (d, i) {
                        return y(d.alpha);
                    });



            // Alpha app points
            // ------------------------------

            // Add points
            var points = svg.insert('g')
                .selectAll('.d3-line-circle')
                .data(dataset)
                .enter()
                .append('circle')
                    .attr('class', 'd3-line-circle d3-line-circle-medium')
                    .attr('cx', line.x())
                    .attr('cy', line.y())
                    .attr('r', 3)
                    .style('stroke', '#fff')
                    .style('fill', '#29B6F6');



            // Animate points on page load
            points
                .style('opacity', 0)
                .transition()
                    .duration(250)
                    .ease('linear')
                    .delay(1000)
                    .style('opacity', 1);


            // Add user interaction
            points
                .on('mouseover', function (d) {
                    tooltip.offset([-10, 0]).show(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 4);
                })

                // Hide tooltip
                .on('mouseout', function (d) {
                    tooltip.hide(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 3);
                });

            // Change tooltip direction of first point
            d3.select(points[0][0])
                .on('mouseover', function (d) {
                    tooltip.offset([0, 10]).direction('e').show(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 4);
                })
                .on('mouseout', function (d) {
                    tooltip.direction('n').hide(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 3);
                });

            // Change tooltip direction of last point
            d3.select(points[0][points.size() - 1])
                .on('mouseover', function (d) {
                    tooltip.offset([0, -10]).direction('w').show(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 4);
                })
                .on('mouseout', function (d) {
                    tooltip.direction('n').hide(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 3);
                })



            // Resize chart
            // ------------------------------

            // Call function on window resize
            $(window).on('resize', revenueResize);

            // Call function on sidebar width change
            $(document).on('click', '.sidebar-control', revenueResize);

            // Resize function
            // 
            // Since D3 doesn't support SVG resize by default,
            // we need to manually specify parts of the graph that need to 
            // be updated on window resize
            function revenueResize() {

                // Layout variables
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;


                // Layout
                // -------------------------

                // Main svg width
                container.attr('width', width + margin.left + margin.right);

                // Width of appended group
                svg.attr('width', width + margin.left + margin.right);

                // Horizontal range
                x.range([padding, width - padding]);


                // Chart elements
                // -------------------------

                // Mask
                clipRect.attr('width', width);

                // Line path
                svg.selectAll('.d3-line').attr('d', line(dataset));

                // Circles
                svg.selectAll('.d3-line-circle').attr('cx', line.x());

                // Guide lines
                svg.selectAll('.d3-line-guides')
                    .attr('x1', function (d, i) {
                        return x(d.date);
                    })
                    .attr('x2', function (d, i) {
                        return x(d.date);
                    });
            }
        }
    };

    // Small progress pie chart
    var _ProgressPieChart = function(element, width, height, color) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if($(element).length > 0) {


            // Basic setup
            // ------------------------------

            // Main variables
            var d3Container = d3.select(element),
                border = 2,
                radius = Math.min(width / 2, height / 2) - border,
                twoPi = 2 * Math.PI,
                progress = $(element).data('progress'),
                total = 100;



            // Construct chart layout
            // ------------------------------

            // Arc
            var arc = d3.svg.arc()
                .startAngle(0)
                .innerRadius(0)
                .outerRadius(radius)
                .endAngle(function(d) {
                  return (d.value / d.size) * 2 * Math.PI; 
                })



            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append('svg');

            // Add SVG group
            var svg = container
                .attr('width', width)
                .attr('height', height)
                .append('g')
                    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');



            //
            // Append chart elements
            //

            // Progress group
            var meter = svg.append('g')
                .attr('class', 'progress-meter');

            // Background
            meter.append('path')
                .attr('d', arc.endAngle(twoPi))
                .style('fill', '#fff')
                .style('stroke', color)
                .style('stroke-width', 1.5);

            // Foreground
            var foreground = meter.append('path')
                .style('fill', color);

            // Animate foreground path
            foreground
                .transition()
                    .ease('cubic-out')
                    .duration(2500)
                    .attrTween('d', arcTween);


            // Tween arcs
            function arcTween() {
                var i = d3.interpolate(0, progress);
                return function(t) {
                    var currentProgress = progress / (100/t);
                    var endAngle = arc.endAngle(twoPi * (currentProgress));
                    return arc(i(endAngle));
                };
            }
        }
    };

    // Marketing campaigns donut chart
    var _MarketingCampaignsDonutChart = function(element, size) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if($(element).length > 0) {


            // Basic setup
            // ------------------------------

            // Add data set
            var data = [
                {
                    "browser": "Google Adwords",
                    "icon": "<i class='icon-google mr-2'></i>",
                    "value": 1047,
                    "color" : "#66BB6A"
                }, {
                    "browser": "Social media",
                    "icon": "<i class='icon-share4 mr-2'></i>",
                    "value": 2948,
                    "color": "#9575CD"
                }, {
                    "browser": "Youtube video",
                    "icon": "<i class='icon-youtube mr-2'></i>",
                    "value": 3909,
                    "color": "#FF7043"
                }
            ];

            // Main variables
            var d3Container = d3.select(element),
                distance = 2, // reserve 2px space for mouseover arc moving
                radius = (size/2) - distance,
                sum = d3.sum(data, function(d) { return d.value; });



            // Tooltip
            // ------------------------------

            var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0])
                .direction('e')
                .html(function (d) {
                    return '<ul class="list-unstyled mb-1">' +
                        '<li>' + '<div class="font-size-base mb-1 mt-1">' + d.data.icon + d.data.browser + '</div>' + '</li>' +
                        '<li>' + 'Visits: &nbsp;' + '<span class="font-weight-semibold float-right">' + d.value + '</span>' + '</li>' +
                        '<li>' + 'Share: &nbsp;' + '<span class="font-weight-semibold float-right">' + (100 / (sum / d.value)).toFixed(2) + '%' + '</span>' + '</li>' +
                    '</ul>';
                });


            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append('svg').call(tip);
            
            // Add SVG group
            var svg = container
                .attr('width', size)
                .attr('height', size)
                .append('g')
                    .attr('transform', 'translate(' + (size / 2) + ',' + (size / 2) + ')');  



            // Construct chart layout
            // ------------------------------

            // Pie
            var pie = d3.layout.pie()
                .sort(null)
                .startAngle(Math.PI)
                .endAngle(3 * Math.PI)
                .value(function (d) { 
                    return d.value;
                }); 

            // Arc
            var arc = d3.svg.arc()
                .outerRadius(radius)
                .innerRadius(radius / 2);



            //
            // Append chart elements
            //

            // Group chart elements
            var arcGroup = svg.selectAll('.d3-arc')
                .data(pie(data))
                .enter()
                .append('g') 
                    .attr('class', 'd3-arc')
                    .style('stroke', '#fff')
                    .style('cursor', 'pointer');
            
            // Append path
            var arcPath = arcGroup
                .append('path')
                .style('fill', function (d) { return d.data.color; });

            // Add tooltip
            arcPath
                .on('mouseover', function (d, i) {

                    // Transition on mouseover
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('elastic')
                        .attr('transform', function (d) {
                            d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
                            var x = Math.sin(d.midAngle) * distance;
                            var y = -Math.cos(d.midAngle) * distance;
                            return 'translate(' + x + ',' + y + ')';
                        });
                })

                .on('mousemove', function (d) {
                    
                    // Show tooltip on mousemove
                    tip.show(d)
                        .style('top', (d3.event.pageY - 40) + 'px')
                        .style('left', (d3.event.pageX + 30) + 'px');
                })

                .on('mouseout', function (d, i) {

                    // Mouseout transition
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('bounce')
                        .attr('transform', 'translate(0,0)');

                    // Hide tooltip
                    tip.hide(d);
                });

            // Animate chart on load
            arcPath
                .transition()
                    .delay(function(d, i) { return i * 500; })
                    .duration(500)
                    .attrTween('d', function(d) {
                        var interpolate = d3.interpolate(d.startAngle,d.endAngle);
                        return function(t) {
                            d.endAngle = interpolate(t);
                            return arc(d);  
                        }; 
                    });
        }
    };

    // Campaign status donut chart
    var _CampaignStatusDonutChart = function(element, size) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if($(element).length > 0) {


            // Basic setup
            // ------------------------------

            // Add data set
            var data = [
                {
                    "status": "Active campaigns",
                    "icon": "<span class='status-mark border-blue-300 mr-2'></span>",
                    "value": 439,
                    "color": "#29B6F6"
                }, {
                    "status": "Closed campaigns",
                    "icon": "<span class='status-mark border-danger-300 mr-2'></span>",
                    "value": 290,
                    "color": "#EF5350"
                }, {
                    "status": "Pending campaigns",
                    "icon": "<span class='status-mark border-success-300 mr-2'></span>",
                    "value": 190,
                    "color": "#81C784"
                }, {
                    "status": "Campaigns on hold",
                    "icon": "<span class='status-mark border-grey-300 mr-2'></span>",
                    "value": 148,
                    "color": "#999"
                }
            ];

            // Main variables
            var d3Container = d3.select(element),
                distance = 2, // reserve 2px space for mouseover arc moving
                radius = (size/2) - distance,
                sum = d3.sum(data, function(d) { return d.value; })



            // Tooltip
            // ------------------------------

            var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0])
                .direction('e')
                .html(function (d) {
                    return '<ul class="list-unstyled mb-1">' +
                        '<li>' + '<div class="font-size-base mb-1 mt-1">' + d.data.icon + d.data.status + '</div>' + '</li>' +
                        '<li>' + 'Total: &nbsp;' + '<span class="font-weight-semibold float-right">' + d.value + '</span>' + '</li>' +
                        '<li>' + 'Share: &nbsp;' + '<span class="font-weight-semibold float-right">' + (100 / (sum / d.value)).toFixed(2) + '%' + '</span>' + '</li>' +
                    '</ul>';
                });



            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append('svg').call(tip);
            
            // Add SVG group
            var svg = container
                .attr('width', size)
                .attr('height', size)
                .append('g')
                    .attr('transform', 'translate(' + (size / 2) + ',' + (size / 2) + ')');  



            // Construct chart layout
            // ------------------------------

            // Pie
            var pie = d3.layout.pie()
                .sort(null)
                .startAngle(Math.PI)
                .endAngle(3 * Math.PI)
                .value(function (d) { 
                    return d.value;
                }); 

            // Arc
            var arc = d3.svg.arc()
                .outerRadius(radius)
                .innerRadius(radius / 2);



            //
            // Append chart elements
            //

            // Group chart elements
            var arcGroup = svg.selectAll('.d3-arc')
                .data(pie(data))
                .enter()
                .append('g') 
                    .attr('class', 'd3-arc')
                    .style('stroke', '#fff')
                    .style('cursor', 'pointer');
            
            // Append path
            var arcPath = arcGroup
                .append('path')
                .style('fill', function (d) { return d.data.color; });

            // Add tooltip
            arcPath
                .on('mouseover', function (d, i) {

                    // Transition on mouseover
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('elastic')
                        .attr('transform', function (d) {
                            d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
                            var x = Math.sin(d.midAngle) * distance;
                            var y = -Math.cos(d.midAngle) * distance;
                            return 'translate(' + x + ',' + y + ')';
                        });
                })

                .on('mousemove', function (d) {
                    
                    // Show tooltip on mousemove
                    tip.show(d)
                        .style('top', (d3.event.pageY - 40) + 'px')
                        .style('left', (d3.event.pageX + 30) + 'px');
                })

                .on('mouseout', function (d, i) {

                    // Mouseout transition
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('bounce')
                        .attr('transform', 'translate(0,0)');

                    // Hide tooltip
                    tip.hide(d);
                });

            // Animate chart on load
            arcPath
                .transition()
                    .delay(function(d, i) { return i * 500; })
                    .duration(500)
                    .attrTween('d', function(d) {
                        var interpolate = d3.interpolate(d.startAngle,d.endAngle);
                        return function(t) {
                            d.endAngle = interpolate(t);
                            return arc(d);  
                        }; 
                    });
        }
    };

    // Tickets status donut chart
    var _TicketStatusDonutChart = function(element, size) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if($(element).length > 0) {


            // Basic setup
            // ------------------------------

            // Add data set
            var data = [
                {
                    "status": "Pending tickets",
                    "icon": "<i class='status-mark border-blue-300 mr-2'></i>",
                    "value": 295,
                    "color": "#29B6F6"
                }, {
                    "status": "Resolved tickets",
                    "icon": "<i class='status-mark border-success-300 mr-2'></i>",
                    "value": 189,
                    "color": "#66BB6A"
                }, {
                    "status": "Closed tickets",
                    "icon": "<i class='status-mark border-danger-300 mr-2'></i>",
                    "value": 277,
                    "color": "#EF5350"
                }
            ];

            // Main variables
            var d3Container = d3.select(element),
                distance = 2, // reserve 2px space for mouseover arc moving
                radius = (size/2) - distance,
                sum = d3.sum(data, function(d) { return d.value; })



            // Tooltip
            // ------------------------------

            var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0])
                .direction('e')
                .html(function (d) {
                    return '<ul class="list-unstyled mb-1">' +
                        '<li>' + '<div class="font-size-base mb-1 mt-1">' + d.data.icon + d.data.status + '</div>' + '</li>' +
                        '<li>' + 'Total: &nbsp;' + '<span class="font-weight-semibold float-right">' + d.value + '</span>' + '</li>' +
                        '<li>' + 'Share: &nbsp;' + '<span class="font-weight-semibold float-right">' + (100 / (sum / d.value)).toFixed(2) + '%' + '</span>' + '</li>' +
                    '</ul>';
                })



            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append('svg').call(tip);
            
            // Add SVG group
            var svg = container
                .attr('width', size)
                .attr('height', size)
                .append('g')
                    .attr('transform', 'translate(' + (size / 2) + ',' + (size / 2) + ')');  



            // Construct chart layout
            // ------------------------------

            // Pie
            var pie = d3.layout.pie()
                .sort(null)
                .startAngle(Math.PI)
                .endAngle(3 * Math.PI)
                .value(function (d) { 
                    return d.value;
                }); 

            // Arc
            var arc = d3.svg.arc()
                .outerRadius(radius)
                .innerRadius(radius / 2);



            //
            // Append chart elements
            //

            // Group chart elements
            var arcGroup = svg.selectAll('.d3-arc')
                .data(pie(data))
                .enter()
                .append('g') 
                    .attr('class', 'd3-arc')
                    .style('stroke', '#fff')
                    .style('cursor', 'pointer');
            
            // Append path
            var arcPath = arcGroup
                .append('path')
                .style('fill', function (d) { return d.data.color; });

            // Add tooltip
            arcPath
                .on('mouseover', function (d, i) {

                    // Transition on mouseover
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('elastic')
                        .attr('transform', function (d) {
                            d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
                            var x = Math.sin(d.midAngle) * distance;
                            var y = -Math.cos(d.midAngle) * distance;
                            return 'translate(' + x + ',' + y + ')';
                        });
                })

                .on('mousemove', function (d) {
                    
                    // Show tooltip on mousemove
                    tip.show(d)
                        .style('top', (d3.event.pageY - 40) + 'px')
                        .style('left', (d3.event.pageX + 30) + 'px');
                })

                .on('mouseout', function (d, i) {

                    // Mouseout transition
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('bounce')
                        .attr('transform', 'translate(0,0)');

                    // Hide tooltip
                    tip.hide(d);
                });

            // Animate chart on load
            arcPath
                .transition()
                    .delay(function(d, i) { return i * 500; })
                    .duration(500)
                    .attrTween('d', function(d) {
                        var interpolate = d3.interpolate(d.startAngle,d.endAngle);
                        return function(t) {
                            d.endAngle = interpolate(t);
                            return arc(d);  
                        }; 
                    });
        }
    };

    // Bar charts
    var _BarChart = function(element, barQty, height, animate, easing, duration, delay, color, tooltip) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if($(element).length > 0) {


            // Basic setup
            // ------------------------------

            // Add data set
            var bardata = [];
            for (var i=0; i < barQty; i++) {
                bardata.push(Math.round(Math.random()*10) + 10);
            }

            // Main variables
            var d3Container = d3.select(element),
                width = d3Container.node().getBoundingClientRect().width;
            


            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.scale.ordinal()
                .rangeBands([0, width], 0.3);

            // Vertical
            var y = d3.scale.linear()
                .range([0, height]);



            // Set input domains
            // ------------------------------

            // Horizontal
            x.domain(d3.range(0, bardata.length));

            // Vertical
            y.domain([0, d3.max(bardata)]);



            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append('svg');

            // Add SVG group
            var svg = container
                .attr('width', width)
                .attr('height', height)
                .append('g');



            //
            // Append chart elements
            //

            // Bars
            var bars = svg.selectAll('rect')
                .data(bardata)
                .enter()
                .append('rect')
                    .attr('class', 'd3-random-bars')
                    .attr('width', x.rangeBand())
                    .attr('x', function(d,i) {
                        return x(i);
                    })
                    .style('fill', color);



            // Tooltip
            // ------------------------------

            var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0]);

            // Show and hide
            if(tooltip == 'hours' || tooltip == 'goal' || tooltip == 'members') {
                bars.call(tip)
                    .on('mouseover', tip.show)
                    .on('mouseout', tip.hide);
            }

            // Daily meetings tooltip content
            if(tooltip == 'hours') {
                tip.html(function (d, i) {
                    return '<div class="text-center">' +
                            '<h6 class="m-0">' + d + '</h6>' +
                            '<span class="font-size-sm">meetings</span>' +
                            '<div class="font-size-sm">' + i + ':00' + '</div>' +
                        '</div>'
                });
            }

            // Statements tooltip content
            if(tooltip == 'goal') {
                tip.html(function (d, i) {
                    return '<div class="text-center">' +
                            '<h6 class="m-0">' + d + '</h6>' +
                            '<span class="font-size-sm">statements</span>' +
                            '<div class="font-size-sm">' + i + ':00' + '</div>' +
                        '</div>'
                });
            }

            // Online members tooltip content
            if(tooltip == 'members') {
                tip.html(function (d, i) {
                    return '<div class="text-center">' +
                            '<h6 class="m-0">' + d + '0' + '</h6>' +
                            '<span class="font-size-sm">members</span>' +
                            '<div class="font-size-sm">' + i + ':00' + '</div>' +
                        '</div>'
                });
            }



            // Bar loading animation
            // ------------------------------

            // Choose between animated or static
            if(animate) {
                withAnimation();
            } else {
                withoutAnimation();
            }

            // Animate on load
            function withAnimation() {
                bars
                    .attr('height', 0)
                    .attr('y', height)
                    .transition()
                        .attr('height', function(d) {
                            return y(d);
                        })
                        .attr('y', function(d) {
                            return height - y(d);
                        })
                        .delay(function(d, i) {
                            return i * delay;
                        })
                        .duration(duration)
                        .ease(easing);
            }

            // Load without animateion
            function withoutAnimation() {
                bars
                    .attr('height', function(d) {
                        return y(d);
                    })
                    .attr('y', function(d) {
                        return height - y(d);
                    })
            }



            // Resize chart
            // ------------------------------

            // Call function on window resize
            $(window).on('resize', barsResize);

            // Call function on sidebar width change
            $(document).on('click', '.sidebar-control', barsResize);

            // Resize function
            // 
            // Since D3 doesn't support SVG resize by default,
            // we need to manually specify parts of the graph that need to 
            // be updated on window resize
            function barsResize() {

                // Layout variables
                width = d3Container.node().getBoundingClientRect().width;


                // Layout
                // -------------------------

                // Main svg width
                container.attr('width', width);

                // Width of appended group
                svg.attr('width', width);

                // Horizontal range
                x.rangeBands([0, width], 0.3);


                // Chart elements
                // -------------------------

                // Bars
                svg.selectAll('.d3-random-bars')
                    .attr('width', x.rangeBand())
                    .attr('x', function(d,i) {
                        return x(i);
                    });
            }
        }
    };

    // Rounded progress charts
    var _RoundedProgressChart = function(element, radius, border, color, end, iconClass, textTitle, textAverage) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if($(element).length > 0) {


            // Basic setup
            // ------------------------------

            // Main variables
            var d3Container = d3.select(element),
                startPercent = 0,
                iconSize = 32,
                endPercent = end,
                twoPi = Math.PI * 2,
                formatPercent = d3.format('.0%'),
                boxSize = radius * 2;

            // Values count
            var count = Math.abs((endPercent - startPercent) / 0.01);

            // Values step
            var step = endPercent < startPercent ? -0.01 : 0.01;



            // Create chart
            // ------------------------------

            // Add SVG element
            var container = d3Container.append('svg');

            // Add SVG group
            var svg = container
                .attr('width', boxSize)
                .attr('height', boxSize)
                .append('g')
                    .attr('transform', 'translate(' + (boxSize / 2) + ',' + (boxSize / 2) + ')');



            // Construct chart layout
            // ------------------------------

            // Arc
            var arc = d3.svg.arc()
                .startAngle(0)
                .innerRadius(radius)
                .outerRadius(radius - border);



            //
            // Append chart elements
            //

            // Paths
            // ------------------------------

            // Background path
            svg.append('path')
                .attr('class', 'd3-progress-background')
                .attr('d', arc.endAngle(twoPi))
                .style('fill', '#eee');

            // Foreground path
            var foreground = svg.append('path')
                .attr('class', 'd3-progress-foreground')
                .attr('filter', 'url(#blur)')
                .style('fill', color)
                .style('stroke', color);

            // Front path
            var front = svg.append('path')
                .attr('class', 'd3-progress-front')
                .style('fill', color)
                .style('fill-opacity', 1);



            // Text
            // ------------------------------

            // Percentage text value
            var numberText = d3.select(element)
                .append('h2')
                    .attr('class', 'pt-1 mt-2 mb-1')

            // Icon
            d3.select(element)
                .append('i')
                    .attr('class', iconClass + ' counter-icon')
                    .attr('style', 'top: ' + ((boxSize - iconSize) / 2) + 'px');

            // Title
            d3.select(element)
                .append('div')
                    .text(textTitle);

            // Subtitle
            d3.select(element)
                .append('div')
                    .attr('class', 'font-size-sm text-muted mb-3')
                    .text(textAverage);



            // Animation
            // ------------------------------

            // Animate path
            function updateProgress(progress) {
                foreground.attr('d', arc.endAngle(twoPi * progress));
                front.attr('d', arc.endAngle(twoPi * progress));
                numberText.text(formatPercent(progress));
            }

            // Animate text
            var progress = startPercent;
            (function loops() {
                updateProgress(progress);
                if (count > 0) {
                    count--;
                    progress += step;
                    setTimeout(loops, 10);
                }
            })();
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        initComponents: function() {
            _componentSwitchery();
            _componentDaterange();
            _componentIconLetter();
        },
        initCharts: function() {

            // Sparklines
            _chartSparkline('#new-visitors', 'line', 30, 35, 'basis', 750, 2000, '#26A69A');
            _chartSparkline('#new-sessions', 'line', 30, 35, 'basis', 750, 2000, '#FF7043');
            _chartSparkline('#total-online', 'line', 30, 35, 'basis', 750, 2000, '#5C6BC0');
            _chartSparkline('#server-load', 'area', 30, 50, 'basis', 750, 2000, 'rgba(255,255,255,0.5)');

            // Streamgraph
            _TrafficSourcesStreamChart('#traffic-sources', 330);

            // Line charts
            _AppSalesLinesChart('#app_sales', 255);
            _DailyRevenueLineChart('#today-revenue', 50);

            // Area charts
            _MonthlySalesAreaChart('#monthly-sales-stats', 100, '#4DB6AC');
            _MessagesAreaChart('#messages-stats', 40, '#5C6BC0');

            // Progress charts
            _ProgressPieChart('#today-progress', 20, 20, '#7986CB');
            _ProgressPieChart('#yesterday-progress', 20, 20, '#7986CB');
            _RoundedProgressChart('#hours-available-progress', 38, 2, '#F06292', 0.68, 'icon-watch text-pink-400', 'Hours available', '64% average');
            _RoundedProgressChart('#goal-progress', 38, 2, '#5C6BC0', 0.82, 'icon-trophy3 text-indigo-400', 'Productivity goal', '87% average');

            // Donut charts
            _MarketingCampaignsDonutChart('#campaigns-donut', 42);
            _CampaignStatusDonutChart('#campaign-status-pie', 42);
            _TicketStatusDonutChart('#tickets-status', 42);

            // Bar charts
            _BarChart('#hours-available-bars', 24, 40, true, 'elastic', 1200, 50, '#EC407A', 'hours');
            _BarChart('#goal-bars', 24, 40, true, 'elastic', 1200, 50, '#5C6BC0', 'goal');
            _BarChart('#members-online', 24, 50, true, 'elastic', 1200, 50, 'rgba(255,255,255,0.5)', 'members');
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Dashboard.initComponents();
    Dashboard.initCharts();
});

/* ------------------------------------------------------------------------------
 *
 *  # Form actions
 *
 *  Demo JS code for form_actions.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var FormActions = function() {


    //
    // Setup module components
    //

    // Uniform
    var _componentUniform = function(element) {
        if (!$().uniform) {
            //console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Default initialization
        $('.form-control-styled').uniform();
    };

    // Switchery
    var _componentSwitchery = function() {
        if (typeof Switchery == 'undefined') {
            //console.warn('Warning - switchery.min.js is not loaded.');
            return;
        }

        // Initialize
        var elems = Array.prototype.slice.call(document.querySelectorAll('.form-control-switchery'));
        elems.forEach(function(html) {
            var switchery = new Switchery(html);
        });
    };

    // Select2
    var _componentSelect2 = function(element) {
        if (!$().select2) {
            //console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // Default initialization
        $('.form-control-select2').select2({
            minimumResultsForSearch: Infinity
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentUniform();
            _componentSwitchery();
            _componentSelect2();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    FormActions.init();
});

/* ------------------------------------------------------------------------------
 *
 *  # Checkboxes and radios
 *
 *  Demo JS code for form_checkboxes_radios.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var InputsCheckboxesRadios = function () {


    //
    // Setup components
    //

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            //console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Default initialization
        $('.form-check-input-styled').uniform();


        //
        // Contextual colors
        //

        // Primary
        $('.form-check-input-styled-primary').uniform({
            wrapperClass: 'border-primary-600 text-primary-800'
        });

        // Danger
        $('.form-check-input-styled-danger').uniform({
            wrapperClass: 'border-danger-600 text-danger-800'
        });

        // Success
        $('.form-check-input-styled-success').uniform({
            wrapperClass: 'border-success-600 text-success-800'
        });

        // Warning
        $('.form-check-input-styled-warning').uniform({
            wrapperClass: 'border-warning-600 text-warning-800'
        });

        // Info
        $('.form-check-input-styled-info').uniform({
            wrapperClass: 'border-info-600 text-info-800'
        });

        // Custom color
        $('.form-check-input-styled-custom').uniform({
            wrapperClass: 'border-indigo-600 text-indigo-800'
        });
    };

    // Switchery
    var _componentSwitchery = function() {
        if (typeof Switchery == 'undefined') {
            //console.warn('Warning - switchery.min.js is not loaded.');
            return;
        }

        // Initialize multiple switches
        var elems = Array.prototype.slice.call(document.querySelectorAll('.form-check-input-switchery'));
        elems.forEach(function(html) {
          var switchery = new Switchery(html);
        });

        // Colored switches
        var primary = document.querySelector('.form-check-input-switchery-primary');
        var switchery = new Switchery(primary, { color: '#2196F3' });

        var danger = document.querySelector('.form-check-input-switchery-danger');
        var switchery = new Switchery(danger, { color: '#EF5350' });

        var warning = document.querySelector('.form-check-input-switchery-warning');
        var switchery = new Switchery(warning, { color: '#FF7043' });

        var info = document.querySelector('.form-check-input-switchery-info');
        var switchery = new Switchery(info, { color: '#00BCD4'});
    };

    // Bootstrap switch
    var _componentBootstrapSwitch = function() {
        if (!$().bootstrapSwitch) {
            //console.warn('Warning - switch.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-check-input-switch').bootstrapSwitch();
    };


    //
    // Return objects assigned to module
    //

    return {
        initComponents: function() {
            _componentUniform();
            _componentSwitchery();
            _componentBootstrapSwitch();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    InputsCheckboxesRadios.initComponents();
});

/* ------------------------------------------------------------------------------
 *
 *  # Extended form controls
 *
 *  Demo JS code for form_controls_extended.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var ExtendedFormControls = function() {


    //
    // Setup module components
    //

    // Input formatter
    var _componentInputFormatter = function() {
        if (!$().formatter) {
            //console.warn('Warning - formatter.min.js is not loaded.');
            return;
        }

        // Date
        $('[name="format-date"]').formatter({
            pattern: '{{99}}/{{99}}/{{9999}}'
        });

        // Credit card
        $('[name="format-credit-card"]').formatter({
            pattern: '{{9999}} - {{9999}} - {{9999}} - {{9999}}'
        });

        // Phone #
        $('.format-phone-number').formatter({
            pattern: '({{999}}) {{999}} - {{9999}}'
        });

        // Phone ext
        $('[name="format-phone-ext"]').formatter({
            pattern: '({{999}}) {{999}} - {{9999}} / {{a999}}'
        });

        // Currency
        $('[name="format-currency"]').formatter({
            pattern: '${{999}}.{{99}}'
        });

        // International phone
        $('[name="format-international-phone"]').formatter({
            pattern: '+3{{9}} {{999}} {{999}} {{999}}'
        });

        // Tax id
        $('[name="format-tax-id"]').formatter({
            pattern: '{{99}} - {{9999999}}'
        });

        // SSN
        $('[name="format-ssn"]').formatter({
            pattern: '{{999}} - {{99}} - {{9999}}'
        });

        // Product key
        $('[name="format-product-key"]').formatter({
            pattern: '{{a*}} - {{999}} - {{a999}}'
        });

        // Order #
        $('[name="format-order-number"]').formatter({
            pattern: '{{aaa}} - {{999}} - {{***}}'
        });

        // ISBN
        $('[name="format-isbn"]').formatter({
            pattern: '{{999}} - {{99}} - {{999}} - {{9999}} - {{9}}'
        });

        // Persistent
        $('[name="format-persistent"]').formatter({
            pattern: '+3 ({{999}}) {{999}} - {{99}} - {{99}}'
        });
    };

    // Autosize
    var _componentAutosize = function() {
        if (typeof autosize == 'undefined') {
            //console.warn('Warning - autosize.min.js is not loaded.');
            return;
        }

        // Basic example
        autosize($('.elastic'));

        // Manual trigger
        $('.elastic-manual-trigger').on('click', function() {
            var manual = autosize($('.elastic-manual'));
            $('.elastic-manual').val('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed ultricies nibh, sed faucibus eros. Vivamus tristique fringilla ante, vitae pellentesque quam porta vel. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc vehicula gravida nisl non imperdiet. Mauris felis odio, vehicula et laoreet non, tempor non enim. Cras convallis sapien hendrerit nibh sagittis sollicitudin. Fusce nec ultricies justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ac urna in dui consequat cursus vel sit amet mauris. Proin nec bibendum arcu. Aenean sit amet nisi mi. Sed non leo nisl. Mauris leo odio, ultricies interdum ornare ac, posuere eu risus. Suspendisse adipiscing sapien sit amet gravida sollicitudin. Maecenas laoreet velit in dui adipiscing, vel fermentum tellus ullamcorper. Nullam et mi rhoncus, tempus nulla sit amet, varius ipsum.');
            autosize.update(manual);
        });

        // Destroy method
        var destroyAutosize = autosize($('.elastic-destroy'));
        $('.elastic-destroy-trigger').on('click', function() {
            autosize.destroy(destroyAutosize);
        });
    };

    // Passy
    var _componentPassy = function() {
        if (!$().passy) {
            //console.warn('Warning - passy.js is not loaded.');
            return;
        }

        // Input badges
        var $inputLabel = $('.badge-indicator input');
        var $inputLabelAbsolute = $('.badge-indicator-absolute input');
        var $inputGroup = $('.group-indicator input');

        // Output badges
        var $outputLabel = $('.badge-indicator > span');
        var $outputLabelAbsolute = $('.badge-indicator-absolute > span');
        var $outputGroup = $('.group-indicator .input-group-text');

        // [Material theme]
        var $inputGroupMaterial = $('.group-indicator-material input');
        var $outputGroupMaterial = $('.group-indicator-material .input-group-text');


        // Min input length
        $.passy.requirements.length.min = 4;


        // Strength meter
        var feedback = [
            {color: '#D55757', text: 'Weak', textColor: '#fff'},
            {color: '#EB7F5E', text: 'Normal', textColor: '#fff'},
            {color: '#3BA4CE', text: 'Good', textColor: '#fff'},
            {color: '#40B381', text: 'Strong', textColor: '#fff'}
        ];


        //
        // Setup strength meter
        //

        // Label indicator
        $inputLabel.passy(function(strength) {
            $outputLabel.text(feedback[strength].text);
            $outputLabel.css({
                'display': 'block',
                'background-color': feedback[strength].color,
                'color': feedback[strength].textColor
            });
        });

        // Absolute positioned badge
        $inputLabelAbsolute.passy(function(strength) {
            $outputLabelAbsolute.text(feedback[strength].text);
            $outputLabelAbsolute.css({
                'background-color': feedback[strength].color,
                'color': feedback[strength].textColor
            });
        });

        // Input group indicator
        $inputGroup.passy(function(strength) {
            $outputGroup.text(feedback[strength].text);
            $outputGroup.css({
                'background-color': feedback[strength].color,
                'border-color': feedback[strength].color,
                'color': feedback[strength].textColor
            });
        });

        // [Material theme] Input group indicator
        $inputGroupMaterial.passy(function(strength) {
            $outputGroupMaterial.text(feedback[strength].text);
            $outputGroupMaterial.css({
                'color': feedback[strength].color
            });
        });


        //
        // Initialize
        //

        // Label
        $('.generate-badge').on('click', function() {
            $inputLabel.passy('generate', 12);
        });

        // Absolute badge
        $('.generate-badge-absolute').on('click', function() {
            $inputLabelAbsolute.passy('generate', 10);
        });

        // Group badge
        $('.generate-group').on('click', function() {
            $inputGroup.passy('generate', 8);
        });

        // [Material theme] Group badge
        $('.generate-group-material').on('click', function() {
            $inputGroupMaterial.passy('generate', 8);
        });
    };

    // Maxlength
    var _componentMaxlength = function() {
        if (!$().maxlength) {
            //console.warn('Warning - maxlength.min.js is not loaded.');
            return;
        }

        // Basic example
        $('.maxlength').maxlength();

        // Threshold
        $('.maxlength-threshold').maxlength({
            threshold: 15
        });

        // Custom badge color
        $('.maxlength-custom').maxlength({
            threshold: 10,
            warningClass: 'badge badge-primary form-text',
            limitReachedClass: 'badge badge-danger form-text'
        });

        // Options
        $('.maxlength-options').maxlength({
            alwaysShow: true,
            threshold: 10,
            warningClass: 'text-success form-text',
            limitReachedClass: 'text-danger form-text',
            separator: ' of ',
            preText: 'You have ',
            postText: ' chars remaining.',
            validate: true
        });

        // Always show badge
        $('.maxlength-textarea').maxlength({
            alwaysShow: true
        });

        // Badge position
        $('.maxlength-badge-position').maxlength({
            alwaysShow: true,
            placement: 'top'
        });
    };

    // Typeahead
    var _componentTypeahead = function() {
        if (!$().typeahead) {
            //console.warn('Warning - typeahead.bundle.min.js is not loaded.');
            return;
        }

        //
        // Basic example
        //

        // Substring matches
        var substringMatcher = function(strs) {
            return function findMatches(q, cb) {
                var matches, substringRegex;

                // an array that will be populated with substring matches
                matches = [];

                // regex used to determine if a string contains the substring `q`
                substrRegex = new RegExp(q, 'i');

                // iterate through the pool of strings and for any string that
                // contains the substring `q`, add it to the `matches` array
                $.each(strs, function(i, str) {
                    if (substrRegex.test(str)) {

                        // the typeahead jQuery plugin expects suggestions to a
                        // JavaScript object, refer to typeahead docs for more info
                        matches.push({ value: str });
                    }
                });

                cb(matches);
            };
        };

        // Add data
        var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
            'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
            'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
            'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
            'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
            'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
            'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
            'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ];

        // Initialize
        $('.typeahead-basic').typeahead(
            {
                hint: true,
                highlight: true,
                minLength: 1
            },
            {
                name: 'states',
                displayKey: 'value',
                source: substringMatcher(states)
            }
        );


        //
        // Bloodhound engine
        //

        // Constructs the suggestion engine
        var states = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,

            // `states` is an array of state names defined in "The Basics"
            local: $.map(states, function(state) { return { value: state }; })
        });

        // Initialize engine
        states.initialize();

        // Initialize
        $('.typeahead-bloodhound').typeahead(
            {
                hint: true,
                highlight: true,
                minLength: 1
            },
            {
                name: 'states',
                displayKey: 'value',

                // `ttAdapter` wraps the suggestion engine in an adapter that
                // is compatible with the typeahead jQuery plugin
                source: states.ttAdapter()
            }
        );


        //
        // Prefetched data
        //

        // Constructs the suggestion engine
        var countries = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            limit: 10,
            prefetch: {

                // url points to a json file that contains an array of country names, see
                // https://github.com/twitter/typeahead.js/blob/gh-pages/data/countries.json
                url: '../../../../global_assets/demo_data/typeahead/countries.json',

                // the json file contains an array of strings, but the Bloodhound
                // suggestion engine expects JavaScript objects so this converts all of
                // those strings
                filter: function(list) {
                    return $.map(list, function(country) { return { name: country }; });
                }
            }
        });

        // Initialize engine
        countries.initialize();

        // Passing in `null` for the `options` arguments will result in the default options being used
        $('.typeahead-prefetched').typeahead(null, {
            name: 'countries',
            displayKey: 'name',

            // `ttAdapter` wraps the suggestion engine in an adapter that
            // is compatible with the typeahead jQuery plugin
            source: countries.ttAdapter()
        });


        //
        // Remote data
        //

        // Constructs the suggestion engine
        var bestPictures = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            prefetch: '../../../../global_assets/demo_data/typeahead/movies.json',
            remote: '../../../../global_assets/json/queries/%QUERY.json'
        });

        // Initialize engine
        bestPictures.initialize();

        // Initialize
        $('.typeahead-remote').typeahead(null, {
            name: 'best-pictures',
            displayKey: 'value',
            source: bestPictures.ttAdapter()
        });


        //
        // Custom templates
        //

        // Initialize with opitons
        $('.typeahead-custom-templates').typeahead(null, {
            name: 'best-pictures',
            displayKey: 'value',
            source: bestPictures.ttAdapter(),
            templates: {
                empty: [
                    '<div class="empty-message px-2 text-center text-muted">',
                    'Unable to find any Best Picture winners that match the current query',
                    '</div>'
                ].join('\n'),
                suggestion: Handlebars.compile('<div><strong>{{value}}</strong> – {{year}}</div>')
            }
        });


        //
        // Multiple datasets
        //

        // Constructs the suggestion engine for 1st dataset
        var nbaTeams = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            prefetch: '../../../../global_assets/demo_data/typeahead/nba.json'
        });

        // Constructs the suggestion engine for 2nd dataset
        var nhlTeams = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            prefetch: '../../../../global_assets/demo_data/typeahead/nhl.json'
        });

        // Initialize engines
        nbaTeams.initialize();
        nhlTeams.initialize();

        // Initialize 1st dataset
        $('.typeahead-multiple-datasets').typeahead(
            {
                highlight: true
            },
            {
                name: 'group',
                displayKey: 'team',
                source: nbaTeams.ttAdapter(),
                templates: {
                    header: '<span class="tt-heading">NBA Teams</span>'
                }
            },
            {
                name: 'group',
                displayKey: 'team',
                source: nhlTeams.ttAdapter(),
                templates: {
                    header: '<span class="tt-heading">NHL Teams</span>'
                }
            }
        );


        //
        // Dropdown height
        //

        // Initialize with options
        $('.typeahead-scrollable-menu').typeahead(null, {
            name: 'countries',
            displayKey: 'name',
            source: countries.ttAdapter()
        });


        //
        // RTL support
        //

        // Constructs the suggestion engine
        var arabicPhrases = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('word'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: [
                { word: 'الإنجليزية' },
                { word: 'نعم' },
                { word: 'لا' },
                { word: 'مرحبا' },
                { word: 'أهلا' }
            ]
        });

        // Initialize engine
        arabicPhrases.initialize();

        // Initialize
        $('.typeahead-rtl-support').typeahead(
            {
                hint: false
            },
            {
                name: 'arabic-phrases',
                displayKey: 'word',
                source: arabicPhrases.ttAdapter()
            }
        );
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentInputFormatter();
            _componentAutosize();
            _componentPassy();
            _componentMaxlength();
            _componentTypeahead();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    ExtendedFormControls.init();
});

/* ------------------------------------------------------------------------------
 *
 *  # Dual listboxes
 *
 *  Demo JS code for form_dual_listboxes.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var DualListboxes = function() {


    //
    // Setup module components
    //

    // Dual listbox
    var _componentDualListbox = function() {
        if (!$().bootstrapDualListbox) {
            //console.warn('Warning - duallistbox.min.js is not loaded.');
            return;
        }

        // Basic example
        $('.listbox').bootstrapDualListbox();

        // Multiple selection
        $('.listbox-no-selection').bootstrapDualListbox({
            preserveSelectionOnMove: 'moved',
            moveOnSelect: false
        });

        // Filtered results
        $('.listbox-filtered-results').bootstrapDualListbox({
            nonSelectedListLabel: 'Non-selected',
            selectedListLabel: 'Selected',
            preserveSelectionOnMove: 'moved',
            moveOnSelect: false,
            nonSelectedFilter: 'Biophysics|Econophysics|Geophysics|Thermodynamics'
        });

        // Disable filtering
        $('.listbox-filter-disabled').bootstrapDualListbox({
            showFilterInputs: false
        });

        // Control container height
        $('.listbox-tall').bootstrapDualListbox({
            selectorMinimalHeight: 300
        });

        // Custom text
        $('.listbox-custom-text').bootstrapDualListbox({
            moveOnSelect: false,
            infoText: 'Показать все {0}',
            infoTextFiltered: '<span class="badge bg-warning-400">Отфильтровано</span> {0} из {1}',
            infoTextEmpty: 'Пустой лист',
            filterPlaceHolder: 'Фильтр',
            filterTextClear: 'Показать все'
        });


        //
        // Add options dynamically
        //

        // Initialize
        $('.listbox-dynamic-options').bootstrapDualListbox({
            moveOnSelect: false
        });

        // Add options
        $('.listbox-add').on('click', function(){
            $('.listbox-dynamic-options').append('<option value="apples">Apples</option><option value="oranges" selected>Oranges</option>');
            $('.listbox-dynamic-options').trigger('bootstrapDualListbox.refresh');
        });

        // Add options with clearing highlights
        $('.listbox-add-clear').on('click', function(){
            $('.listbox-dynamic-options').append('<option value="apples">Apples</option><option value="oranges" selected>Oranges</option>');
            $('.listbox-dynamic-options').trigger('bootstrapDualListbox.refresh', true);
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentDualListbox();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    DualListboxes.init();
});

/* ------------------------------------------------------------------------------
 *
 *  # Floating labels
 *
 *  Demo JS code for form_floating_labels.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var FloatingLabels = function() {


    //
    // Setup module components
    //

    // Floating labels config
    var _componentFloatingLabels = function() {

        // Variables
        var showClass = 'is-visible',
            animateClass = 'animate',
            labelWrapperClass = 'form-group-float',
            labelClass = 'form-group-float-label';

        // Setup
        $('input:not(.token-input):not(.bootstrap-tagsinput > input), textarea, select').on('checkval change', function () {

            // Define label
            var label = $(this).parents('.' + labelWrapperClass).children('.' + labelClass);

            // Toggle label
            if (this.value !== '') {
                label.addClass(showClass);
            }
            else {
                label.removeClass(showClass).addClass(animateClass);
            }

        }).on('keyup', function () {
            $(this).trigger('checkval');
        }).trigger('checkval').trigger('change');


        // Remove animation on page load
        $(window).on('load', function() {
            $('.' + labelWrapperClass).find('.' + showClass).removeClass(animateClass);
        });
    };

    // Tokenfield
    var _componentTokenfield = function() {
        if (!$().tokenfield) {
            //console.warn('Warning - tokenfield.min.js is not loaded.');
            return;
        }

        // Basic initialization
        $('.token-field').tokenfield();

        // Configure labels
        $('.token-field').on('tokenfield:createdtoken tokenfield:removedtoken change', function (e) {
            if($(this).parent().children().hasClass('token')) {
                $(this).parent().find('.token-input').attr('placeholder', '');
            }
            else {
                $(this).parent().find('.token-input').attr('placeholder', '- Tokenfield');
            }
        }).trigger('change');
    };

    // Tags input
    var _componentTagsinput = function() {
        if (!$().tagsinput) {
            //console.warn('Warning - tagsinput.min.js is not loaded.');
            return;
        }

        // Basic initialization
        $('.tags-input').tagsinput();

        // Configure labels
        var tagsinputClass = 'bootstrap-tagsinput';
        $('.tags-input').on('itemAdded itemRemoved change', function (e) {
            if($(this).parent().find('.' + tagsinputClass).children().hasClass('label')) {
                $(this).parent().find('.' + tagsinputClass).children('input[type=text]').attr('placeholder', '');
            }
            else {
                $(this).parent().find('.' + tagsinputClass).children('input[type=text]').attr('placeholder', '- Bootstrap tags input');
            }
        }).trigger('change');
    };

    // Typeahead
    var _componentTypeahead = function() {
        if (!$().typeahead) {
            //console.warn('Warning - typeahead.bundle.min.js is not loaded.');
            return;
        }

        // Substring matches
        var substringMatcher = function(strs) {
            return function findMatches(q, cb) {
                var matches, substringRegex;

                // an array that will be populated with substring matches
                matches = [];

                // regex used to determine if a string contains the substring `q`
                substrRegex = new RegExp(q, 'i');

                // iterate through the pool of strings and for any string that
                // contains the substring `q`, add it to the `matches` array
                $.each(strs, function(i, str) {
                    if (substrRegex.test(str)) {

                        // the typeahead jQuery plugin expects suggestions to a
                        // JavaScript object, refer to typeahead docs for more info
                        matches.push({ value: str });
                    }
                });

                cb(matches);
            };
        };

        // Add data
        var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
            'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
            'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
            'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
            'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
            'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
            'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
            'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ];

        // Initialize
        $('.typeahead-basic').typeahead(
            {
                hint: true,
                highlight: true,
                minLength: 1
            },
            {
                name: 'states',
                displayKey: 'value',
                source: substringMatcher(states)
            }
        );
    };

    // Touchspin
    var _componentTouchspin = function() {
        if (!$().TouchSpin) {
            //console.warn('Warning - touchspin.min.js is not loaded.');
            return;
        }

        // Basic initialization
        $('.touchspin-basic').TouchSpin({
            postfix: '<i class="icon-paragraph-justify2"></i>'
        });
    };

    // Input formatter
    var _componentFormatter = function() {
        if (!$().formatter) {
            //console.warn('Warning - formatter.min.js is not loaded.');
            return;
        }

        // Date format
        $('[name="format-date"]').formatter({
            pattern: '{{99}}/{{99}}/{{9999}}'
        });
    };

    // Maxlength
    var _componentMaxlength = function() {
        if (!$().maxlength) {
            //console.warn('Warning - maxlength.min.js is not loaded.');
            return;
        }

        // Basic example
        $('.form-control-maxlength').maxlength();
    };

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            //console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-control-uniform').uniform({
            fileButtonClass: 'action btn bg-pink-400'
        });
    };

    // Multiselect
    var _componentMultiselect = function() {
        if (!$().multiselect) {
            //console.warn('Warning - bootstrap-multiselect.js is not loaded.');
            return;
        }

        // Basic initialization
        $('.form-control-multiselect').multiselect({
            nonSelectedText: 'Bootstrap multiselect'
        });
    };

    // Select2
    var _componentSelect2 = function() {
        if (!$().select2) {
            //console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // Basic select
        $('.form-control-select2').select2();
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentFloatingLabels();
            _componentTokenfield();
            _componentTagsinput();
            _componentTypeahead();
            _componentTouchspin();
            _componentFormatter();
            _componentMaxlength();
            _componentUniform();
            _componentMultiselect();
            _componentSelect2();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    FloatingLabels.init();
});
/* ------------------------------------------------------------------------------
 *
 *  # Input groups
 *
 *  Demo JS code for form_input_groups.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var InputGroups = function() {


    //
    // Setup module components
    //

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            //console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Default initialization
        $('.form-control-styled').uniform();

        // Update uniform when select between styled and unstyled
        $('.input-group-prepend input[type=radio]').on('change', function() {
            $.uniform.update('[name=addon-radio]');
        });
    };

    // Switchery
    var _componentSwitchery = function() {
        if (typeof Switchery == 'undefined') {
            //console.warn('Warning - switchery.min.js is not loaded.');
            return;
        }

        // Initialize
        var elems = Array.prototype.slice.call(document.querySelectorAll('.form-control-switchery'));
        elems.forEach(function(html) {
            var switchery = new Switchery(html);
        });
    };

    // Touchspin
    var _componentTouchspin = function() {
        if (!$().TouchSpin) {
            //console.warn('Warning - touchspin.min.js is not loaded.');
            return;
        }

        // Basic example
        $('.touchspin-basic').TouchSpin({
            postfix: '<i class="icon-paragraph-justify3"></i>'
        });

        // Postfix
        $('.touchspin-postfix').TouchSpin({
            min: 0,
            max: 100,
            step: 0.1,
            decimals: 2,
            postfix: '%'
        });

        // Prefix
        $('.touchspin-prefix').TouchSpin({
            min: 0,
            max: 100,
            step: 0.1,
            decimals: 2,
            prefix: '$'
        });

        // Init with empty values
        $('.touchspin-empty').TouchSpin();

        // Disable mousewheel
        $('.touchspin-no-mousewheel').TouchSpin({
            mousewheel: false
        });

        // Incremental/decremental steps
        $('.touchspin-step').TouchSpin({
            step: 10
        });

        // Set value
        $('.touchspin-set-value').TouchSpin({
            initval: 40
        });

        // Inside button group
        $('.touchspin-button-group').TouchSpin({
            prefix: 'pre',
            postfix: 'post'
        });

        // Vertical spinners
        $('.touchspin-vertical').TouchSpin({
            verticalbuttons: true,
            verticalupclass: 'icon-arrow-up22',
            verticaldownclass: 'icon-arrow-down22'
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentUniform();
            _componentSwitchery();
            _componentTouchspin();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    InputGroups.init();
});

/* ------------------------------------------------------------------------------
 *
 *  # Basic form inputs
 *
 *  Demo JS code for form_inputs_basic.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var InputsBasic = function () {


    //
    // Setup module components
    //

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            //console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // File input
        $('.form-control-uniform').uniform();

        // Custom select
        $('.form-control-uniform-custom').uniform({
            fileButtonClass: 'action btn bg-blue',
            selectClass: 'uniform-select bg-pink-400 border-pink-400'
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentUniform();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    InputsBasic.init();
});

/* ------------------------------------------------------------------------------
 *
 *  # Form layouts
 *
 *  Demo JS code for form layouts pages
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var FormLayouts = function() {


    //
    // Setup module components
    //

    // Select2
    var _componentSelect2 = function() {
        if (!$().select2) {
            //console.warn('Warning - select2.min.js is not loaded.');
            return;
        };

        // Basic example
        $('.form-control-select2').select2();


        //
        // Select with icons
        //

        // Format icon
        function iconFormat(icon) {
            var originalOption = icon.element;
            if (!icon.id) { return icon.text; }
            var $icon = "<i class='icon-" + $(icon.element).data('icon') + "'></i>" + icon.text;

            return $icon;
        }

        // Initialize with options
        $('.form-control-select2-icons').select2({
            templateResult: iconFormat,
            minimumResultsForSearch: Infinity,
            templateSelection: iconFormat,
            escapeMarkup: function(m) { return m; }
        });
    };

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            //console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-input-styled').uniform({
            fileButtonClass: 'action btn bg-pink-400'
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentSelect2();
            _componentUniform();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    FormLayouts.init();
});



/* ------------------------------------------------------------------------------
 *
 *  # Select2 selects
 *
 *  Specific JS code additions for form_select2.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var Select2Selects = function() {


    //
    // Setup module components
    //

    // Select2 examples
    var _componentSelect2 = function() {
        if (!$().select2) {
            //console.warn('Warning - select2.min.js is not loaded.');
            return;
        }


        //
        // Basic examples
        //

        // Default initialization
        $('.select').select2({
            minimumResultsForSearch: Infinity
        });

        // Select with search
        $('.select-search').select2();

        // Fixed width. Single select
        $('.select-fixed-single').select2({
            minimumResultsForSearch: Infinity,
            width: 250
        });

        // Fixed width. Multiple selects
        $('.select-fixed-multiple').select2({
            minimumResultsForSearch: Infinity,
            width: 400
        });


        //
        // Advanced examples
        //

        // Minimum input length
        $('.select-minimum').select2({
            minimumInputLength: 2,
            minimumResultsForSearch: Infinity
        });

        // Allow clear selection
        $('.select-clear').select2({
            placeholder: 'Select a State',
            allowClear: true
        });

        // Tagging support
        $('.select-multiple-tags').select2({
            tags: true
        });

        // Maximum input length
        $('.select-multiple-maximum-length').select2({
            tags: true,
            maximumInputLength: 5
        });

        // Tokenization
        $('.select-multiple-tokenization').select2({
            tags: true,
            tokenSeparators: [',', ' ']
        });

        // Maximum selection
        $('.select-multiple-limited').select2({
            maximumSelectionLength: 3
        });

        // Maximum selections allowed
        $('.select-multiple-maximum').select2({
            maximumSelectionSize: 3
        });


        //
        // Drag and drop selected items
        //

        // Initialize with tags
        $('.select-multiple-drag').select2({
            containerCssClass: 'sortable-target'
        });

        // Add jQuery UI Sortable support
        $('.sortable-target .select2-selection__rendered').sortable({
            containment: '.sortable-target',
            items: '.select2-selection__choice:not(.select2-search--inline)'
        });


        //
        // Single select with icons
        //

        // Format icon
        function iconFormat(icon) {
            var originalOption = icon.element;
            if (!icon.id) { return icon.text; }
            var $icon = '<i class="icon-' + $(icon.element).data('icon') + '"></i>' + icon.text;

            return $icon;
        }

        // Initialize with options
        $('.select-icons').select2({
            templateResult: iconFormat,
            minimumResultsForSearch: Infinity,
            templateSelection: iconFormat,
            escapeMarkup: function(m) { return m; }
        });


        //
        // Customize matched results
        //

        // Setup matcher
        function matchStart (term, text) {
            if (text.toUpperCase().indexOf(term.toUpperCase()) == 0) {
                return true;
            }

            return false;
        }

        // Initialize
        $.fn.select2.amd.require(['select2/compat/matcher'], function (oldMatcher) {
            $('.select-matched-customize').select2({
                minimumResultsForSearch: Infinity,
                placeholder: 'Select a State',
                matcher: oldMatcher(matchStart)
            });
        });


        //
        // Loading arrays of data
        //

        // Data
        var array_data = [
            {id: 0, text: 'enhancement'},
            {id: 1, text: 'bug'},
            {id: 2, text: 'duplicate'},
            {id: 3, text: 'invalid'},
            {id: 4, text: 'wontfix'}
        ];

        // Loading array data
        $('.select-data-array').select2({
            placeholder: 'Click to load data',
            minimumResultsForSearch: Infinity,
            data: array_data
        });


        //
        // Loading remote data
        //

        // Format displayed data
        function formatRepo (repo) {
            if (repo.loading) return repo.text;

            var markup = '<div class="select2-result-repository clearfix">' +
                '<div class="select2-result-repository__avatar"><img src="' + repo.owner.avatar_url + '" /></div>' +
                '<div class="select2-result-repository__meta">' +
                '<div class="select2-result-repository__title">' + repo.full_name + '</div>';

            if (repo.description) {
                markup += '<div class="select2-result-repository__description">' + repo.description + '</div>';
            }

            markup += '<div class="select2-result-repository__statistics">' +
                '<div class="select2-result-repository__forks">' + repo.forks_count + ' Forks</div>' +
                '<div class="select2-result-repository__stargazers">' + repo.stargazers_count + ' Stars</div>' +
                '<div class="select2-result-repository__watchers">' + repo.watchers_count + ' Watchers</div>' +
                '</div>' +
                '</div></div>';

            return markup;
        }

        // Format selection
        function formatRepoSelection (repo) {
            return repo.full_name || repo.text;
        }

        // Initialize
        $('.select-remote-data').select2({
            ajax: {
                url: 'https://api.github.com/search/repositories',
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    return {
                        q: params.term, // search term
                        page: params.page
                    };
                },
                processResults: function (data, params) {

                    // parse the results into the format expected by Select2
                    // since we are using custom formatting functions we do not need to
                    // alter the remote JSON data, except to indicate that infinite
                    // scrolling can be used
                    params.page = params.page || 1;

                    return {
                        results: data.items,
                        pagination: {
                            more: (params.page * 30) < data.total_count
                        }
                    };
                },
                cache: true
            },
            escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
            minimumInputLength: 1,
            templateResult: formatRepo, // omitted for brevity, see the source of this page
            templateSelection: formatRepoSelection // omitted for brevity, see the source of this page
        });


        //
        // Programmatic access (single)
        //

        // Set/get value
        $('.select-access-value').select2({
            minimumResultsForSearch: Infinity,
            placeholder: 'Select State...'
        });
        $('.access-get').on('click', function () { alert('Selected value is: '+$('.select-access-value').val()); });
        $('.access-set').on('click', function () { $('.select-access-value').val('CA').trigger('change'); });


        // Open/close menu
        $('.select-access-open').select2({
            minimumResultsForSearch: Infinity,
            placeholder: 'Select State...'
        });
        $('.access-open').on('click', function () { $('.select-access-open').select2('open'); });
        $('.access-close').on('click', function () { $('.select-access-open').select2('close'); });


        // Enable/disable menu
        $('.select-access-enable').select2({
            minimumResultsForSearch: Infinity,
            placeholder: 'Select State...'
        });
        $('.access-disable').on('click', function () { $('.select-access-enable').prop('disabled', true); });
        $('.access-enable').on('click', function () { $('.select-access-enable').prop('disabled', false); });


        // Destroy/create menu
        function create_menu() {
            $('.select-access-create').select2({
                minimumResultsForSearch: Infinity,
                placeholder: 'Select State...'
            });
        }
        create_menu();
        $('.access-create').on('click', function () { return create_menu()});
        $('.access-destroy').on('click', function () { $('.select-access-create').select2('destroy'); });


        //
        // Programmatic access (multiple)
        //

        // Reacting to external value changes
        $('.select-access-multiple-value').select2();
        $('.change-to-ca').on('click', function() { $('.select-access-multiple-value').val('CA').trigger('change'); });
        $('.change-to-ak-co').on('click', function() { $('.select-access-multiple-value').val(['AK','CO']).trigger('change'); });


        // Open/close menu
        $('.select-access-multiple-open').select2({
            minimumResultsForSearch: Infinity
        });
        $('.access-multiple-open').on('click', function () { $('.select-access-multiple-open').select2('open'); });
        $('.access-multiple-close').on('click', function () { $('.select-access-multiple-open').select2('close'); });


        // Enable/disable menu
        $('.select-access-multiple-enable').select2({
            minimumResultsForSearch: Infinity
        });
        $('.access-multiple-disable').on('click', function () { $('.select-access-multiple-enable').prop('disabled', true); });
        $('.access-multiple-enable').on('click', function () { $('.select-access-multiple-enable').prop('disabled', false); });


        // Destroy/create menu
        function create_menu_multiple() {
            $('.select-access-multiple-create').select2({
                minimumResultsForSearch: Infinity
            });
        }
        create_menu_multiple();
        $('.access-multiple-create').on('click', function () { return create_menu_multiple()});
        $('.access-multiple-destroy').on('click', function () { $('.select-access-multiple-create').select2('destroy'); });


        // Clear selection
        $('.select-access-multiple-clear').select2({
            minimumResultsForSearch: Infinity
        });
        $('.access-multiple-clear').on('click', function () { $('.select-access-multiple-clear').val(null).trigger('change'); });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentSelect2();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Select2Selects.init();
});

/* ------------------------------------------------------------------------------
 *
 *  # Tag inputs
 *
 *  Demo JS code for form_tag_inputs.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var TagInputs = function() {


    //
    // Setup module components
    //

    // Tokenfield
    var _componentTokenfield = function() {
        if (!$().tokenfield) {
            //console.warn('Warning - tokenfield.min.js is not loaded.');
            return;
        }

        // Basic initialization
        $('.tokenfield').tokenfield();

        // Create token on blur
        $('.tokenfield-blur').tokenfield({
            createTokensOnBlur: true
        });

        // Custom delimiter
        $('.tokenfield-delimiter').tokenfield({
            delimiter: ';'
        });


        //
        // Primary color
        //

        // Add class on init
        $('.tokenfield-primary').on('tokenfield:initialize', function (e) {
            $(this).parent().find('.token').addClass('bg-primary text-white');
        });

        // Initialize plugin
        $('.tokenfield-primary').tokenfield();

        // Add class when token is created
        $('.tokenfield-primary').on('tokenfield:createdtoken', function (e) {
            $(e.relatedTarget).addClass('bg-primary text-white');
        });


        //
        // Teal color
        //

        // Add class on init
        $('.tokenfield-teal').on('tokenfield:initialize', function (e) {
            $(this).parent().find('.token').addClass('bg-teal text-white');
        });

        // Initialize plugin
        $('.tokenfield-teal').tokenfield();

        // Add class when token is created
        $('.tokenfield-teal').on('tokenfield:createdtoken', function (e) {
            $(e.relatedTarget).addClass('bg-teal text-white');
        });


        //
        // Success color
        //

        // Add class on init
        $('.tokenfield-success').on('tokenfield:initialize', function (e) {
            $(this).parent().addClass('border-success');
            $(this).parent().find('.token').addClass('bg-success text-white');
        });

        // Initialize plugin
        $('.tokenfield-success').tokenfield();

        // Add class when token is created
        $('.tokenfield-success').on('tokenfield:createdtoken', function (e) {
            $(e.relatedTarget).addClass('bg-success text-white');
        });


        //
        // Danger color
        //

        // Add class on init
        $('.tokenfield-danger').on('tokenfield:initialize', function (e) {
            $(this).parent().addClass('border-danger');
            $(this).parent().find('.token').addClass('bg-danger text-white');
        });

        // Initialize plugin
        $('.tokenfield-danger').tokenfield();

        // Add class when token is created
        $('.tokenfield-danger').on('tokenfield:createdtoken', function (e) {
            $(e.relatedTarget).addClass('bg-danger text-white');
        });


        //
        // Typeahead support
        //

        // Use Bloodhound engine
        var engine = new Bloodhound({
            local: [
                {value: 'red'},
                {value: 'blue'},
                {value: 'green'} ,
                {value: 'yellow'},
                {value: 'violet'},
                {value: 'brown'},
                {value: 'purple'},
                {value: 'black'},
                {value: 'white'}
            ],
            datumTokenizer: function(d) {
                return Bloodhound.tokenizers.whitespace(d.value);
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace
        });

        // Initialize engine
        engine.initialize();

        // Initialize tokenfield
        $('.tokenfield-typeahead').tokenfield({
            typeahead: [null, {
                displayKey: 'value',
                source: engine.ttAdapter()
            }]
        });


        //
        // Set tokens method
        //

        $('#set-tokens').on('click', function() {
            $('#set-tokens-field').tokenfield('setTokens', ['blue','red','white']);
        });


        //
        // Get tokens method
        //

        $('#get-tokens').on('click', function() {
            var tokens = $('#get-tokens-field').tokenfield('getTokensList');
            alert(tokens);
        });


        //
        // Create tokens method
        //

        $('#create-token').on('click', function() {
            $('#create-token-field').tokenfield('createToken', { value: 'new', label: 'New token' });
        });


        //
        // Disable, enable
        //

        // Initialize plugin
        $('.tokenfield-disable').tokenfield();

        // Disable on click
        $('#disable').on('click', function() {
            $('.tokenfield-disable').tokenfield('disable');
        });

        // Enabe on click
        $('#enable').on('click', function() {
            $('.tokenfield-disable').tokenfield('enable');
        });


        //
        // Readonly, writeable
        //

        // Initialize plugin
        $('.tokenfield-readonly').tokenfield();

        // Readonly on click
        $('#readonly').on('click', function() {
            $('.tokenfield-readonly').tokenfield('readonly');
        });

        // Writeable on click
        $('#writeable').on('click', function() {
            $('.tokenfield-readonly').tokenfield('writeable');
        });


        //
        // Destroy, create
        //

        // initialize plugin
        $('.tokenfield-destroy').tokenfield();

        // Destroy on click
        $('#destroy').on('click', function() {
            $('.tokenfield-destroy').removeAttr('data-fouc').tokenfield('destroy');
        });

        // Create on click
        $('#create').on('click', function() {
            $('.tokenfield-destroy').tokenfield();
        });
    };

    // Tags input
    var _componentTagsinput = function() {
        if (!$().tagsinput) {
            //console.warn('Warning - tagsinput.min.js is not loaded.');
            return;
        }

        // Display values
        $('.tags-input, [data-role="tagsinput"], .tagsinput-max-tags, .tagsinput-custom-tag-class').on('change', function(event) {
            var $element = $(event.target),
                $container = $element.parent().parent('.mb-3');

            if (!$element.data('tagsinput'))
            return;

            var val = $element.val();
            if (val === null)
            val = "null";
        
            $('pre.val > code', $container).html( ($.isArray(val) ? JSON.stringify(val) : "\"" + val.replace('"', '\\"') + "\"") );
            $('pre.items > code', $container).html(JSON.stringify($element.tagsinput('items')));
            Prism.highlightAll();
        }).trigger('change');



        // Basic examples
        // ------------------------------

        // Basic initialization
        $('.tags-input').tagsinput();


        // Allow dublicates
        $('.tags-input-dublicates').tagsinput({
            allowDuplicates: true
        });


        // Set maximum allowed tags
        $('.tagsinput-max-tags').tagsinput({
            maxTags: 5
        });


        // Custom tag class
        $('.tagsinput-custom-tag-class').tagsinput({
            tagClass: function(item){
                return 'bg-success text-white';
            }
        });


        //
        // Typeahead implementation
        //

        // Use Bloodhound engine
        var citynames = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            prefetch: {
                url: '../../../../global_assets/demo_data/tags_input/citynames.json',
                filter: function(list) {
                    return $.map(list, function(cityname) {
                    return { name: cityname }; });
                }
            }
        });

        // Initialize
        citynames.initialize();

        // Attach typeahead
        $('.tagsinput-typeahead').tagsinput({
            typeaheadjs: {
                name: 'citynames',
                displayKey: 'name',
                valueKey: 'name',
                source: citynames.ttAdapter()
            }
        });


        //
        // Objects as tags
        //

        // Use Bloodhound engine
        var countries = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            limit: 10,
            prefetch: {
                url: '../../../../global_assets/demo_data/tags_input/cities.json'
            }
        });

        // Kicks off the loading/processing of `local` and `prefetch`
        countries.initialize();

        // Define element
        var elt = $('.tagsinput-tag-objects');

        // Initialize
        elt.tagsinput({
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'countries',
                displayKey: 'text',
                source: countries.ttAdapter()
            }
        });

        // Add data
        elt.tagsinput('add', { "value": 1 , "text": "Amsterdam"   , "continent": "Europe"    });
        elt.tagsinput('add', { "value": 4 , "text": "Washington"  , "continent": "America"   });
        elt.tagsinput('add', { "value": 7 , "text": "Sydney"      , "continent": "Australia" });
        elt.tagsinput('add', { "value": 10, "text": "Beijing"     , "continent": "Asia"      });
        elt.tagsinput('add', { "value": 13, "text": "Cairo"       , "continent": "Africa"    });


        //
        // Categorize tags
        //

        // Use Bloodhound engine
        var continents = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('continent'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            limit: 10,
            prefetch: {
                url: '../../../../global_assets/demo_data/tags_input/cities.json'
            }
        });

        // Kicks off the loading/processing of `local` and `prefetch`
        continents.initialize();

        // Define element
        var elt2 = $('.tagsinput-tag-categorizing');

        // Initialize
        elt2.tagsinput({
            tagClass: function(item) {
                switch (item.continent) {
                    case 'Europe'   : return 'text-white bg-indigo-400';
                    case 'America'  : return 'text-white bg-danger';
                    case 'Australia': return 'text-white bg-success';
                    case 'Africa'   : return 'text-white bg-primary';
                    case 'Asia'     : return 'text-white bg-pink-400';
                }
            },
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'continents',
                displayKey: 'text',
                source: continents.ttAdapter()
            }
        });

        // Add data
        elt2.tagsinput('add', { "value": 1 , "text": "Amsterdam"   , "continent": "Europe"    });
        elt2.tagsinput('add', { "value": 4 , "text": "Washington"  , "continent": "America"   });
        elt2.tagsinput('add', { "value": 7 , "text": "Sydney"      , "continent": "Australia" });
        elt2.tagsinput('add', { "value": 10, "text": "Beijing"     , "continent": "Asia"      });
        elt2.tagsinput('add', { "value": 13, "text": "Cairo"       , "continent": "Africa"    });


        //
        // Methods
        //

        // Define elements
        var tagsMethods = $('.tagsinput-add-tag, .tagsinput-remove-tag, .tagsinput-remove-tags, .tagsinput-destroy, .tagsinput-refresh');

        // Initialize
        tagsMethods.tagsinput({
            itemValue: 'id',
            itemText: 'text'
        });

        // Add values
        tagsMethods.tagsinput('add', {id: 1, text: 'Amsterdam'});
        tagsMethods.tagsinput('add', {id: 2, text: 'Washington'});
        tagsMethods.tagsinput('add', {id: 3, text: 'Sydney'});

        // "Add" methos
        $('.add-tag-button').on('click', function() {
            $('.tagsinput-add-tag').tagsinput('add', {id: 4, text: 'Beijing'});
            $(this).addClass('disabled');
        });

        // "Remove" method
        $('.remove-tag-button').on('click', function() {
            $('.tagsinput-remove-tag').tagsinput('remove', {id: 3, text: 'Sydney'});
            $(this).addClass('disabled');
        });

        // "Remove all" method
        $('.remove-all-tags-button').on('click', function() {
            $('.tagsinput-remove-tags').tagsinput('removeAll');
            $(this).addClass('disabled');
        });

        // "Destroy" method
        $('.destroy-tagsinput-button').on('click', function() {
            $('.tagsinput-destroy').removeAttr('data-fouc').tagsinput('destroy');
            $(this).addClass('disabled');
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentTokenfield();
            _componentTagsinput();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    TagInputs.init();
});

/* ------------------------------------------------------------------------------
 *
 *  # Form validation
 *
 *  Demo JS code for form_validation.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var FormValidation = function() {


    //
    // Setup module components
    //

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            //console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-input-styled').uniform({
            fileButtonClass: 'action btn bg-blue'
        });
    };

    // Switchery
    var _componentSwitchery = function() {
        if (typeof Switchery == 'undefined') {
            //console.warn('Warning - switchery.min.js is not loaded.');
            return;
        }

        // Initialize single switch
        var elems = Array.prototype.slice.call(document.querySelectorAll('.form-input-switchery'));
        elems.forEach(function(html) {
            var switchery = new Switchery(html);
        });
    };

    // Bootstrap switch
    var _componentBootstrapSwitch = function() {
        if (!$().bootstrapSwitch) {
            //console.warn('Warning - bootstrap_switch.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-input-switch').bootstrapSwitch({
            onSwitchChange: function(state) {
                if(state) {
                    $(this).valid(true);
                }
                else {
                    $(this).valid(false);
                }
            }
        });
    };

    // Touchspin
    var _componentTouchspin = function() {
        if (!$().TouchSpin) {
            //console.warn('Warning - touchspin.min.js is not loaded.');
            return;
        }

        // Define variables
        var $touchspinContainer = $('.touchspin-postfix');

        // Initialize
        $touchspinContainer.TouchSpin({
            min: 0,
            max: 100,
            step: 0.1,
            decimals: 2,
            postfix: '%'
        });

        // Trigger value change when +/- buttons are clicked
        $touchspinContainer.on('touchspin.on.startspin', function() {
            $(this).trigger('blur');
        });
    };

    // Select2 select
    var _componentSelect2 = function() {
        if (!$().select2) {
            //console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // Initialize
        var $select = $('.form-control-select2').select2({
            minimumResultsForSearch: Infinity
        });

        // Trigger value change when selection is made
        $select.on('change', function() {
            $(this).trigger('blur');
        });
    };

    // Validation config
    var _componentValidation = function() {
        if (!$().validate) {
            //console.warn('Warning - validate.min.js is not loaded.');
            return;
        }

        // Initialize
        var validator = $('.form-validate-jquery').validate({
            ignore: 'input[type=hidden], .select2-search__field', // ignore hidden fields
            errorClass: 'validation-invalid-label',
            successClass: 'validation-valid-label',
            validClass: 'validation-valid-label',
            highlight: function(element, errorClass) {
                $(element).removeClass(errorClass);
            },
            unhighlight: function(element, errorClass) {
                $(element).removeClass(errorClass);
            },
            success: function(label) {
                label.addClass('validation-valid-label').text('Success.'); // remove to hide Success message
            },

            // Different components require proper error label placement
            errorPlacement: function(error, element) {

                // Unstyled checkboxes, radios
                if (element.parents().hasClass('form-check')) {
                    error.appendTo( element.parents('.form-check').parent() );
                }

                // Input with icons and Select2
                else if (element.parents().hasClass('form-group-feedback') || element.hasClass('select2-hidden-accessible')) {
                    error.appendTo( element.parent() );
                }

                // Input group, styled file input
                else if (element.parent().is('.uniform-uploader, .uniform-select') || element.parents().hasClass('input-group')) {
                    error.appendTo( element.parent().parent() );
                }

                // Other elements
                else {
                    error.insertAfter(element);
                }
            },
            rules: {
                password: {
                    minlength: 5
                },
                repeat_password: {
                    equalTo: '#password'
                },
                email: {
                    email: true
                },
                repeat_email: {
                    equalTo: '#email'
                },
                minimum_characters: {
                    minlength: 10
                },
                maximum_characters: {
                    maxlength: 10
                },
                minimum_number: {
                    min: 10
                },
                maximum_number: {
                    max: 10
                },
                number_range: {
                    range: [10, 20]
                },
                url: {
                    url: true
                },
                date: {
                    date: true
                },
                date_iso: {
                    dateISO: true
                },
                numbers: {
                    number: true
                },
                digits: {
                    digits: true
                },
                creditcard: {
                    creditcard: true
                },
                basic_checkbox: {
                    minlength: 2
                },
                styled_checkbox: {
                    minlength: 2
                },
                switchery_group: {
                    minlength: 2
                },
                switch_group: {
                    minlength: 2
                }
            },
            messages: {
                custom: {
                    required: 'This is a custom error message'
                },
                basic_checkbox: {
                    minlength: 'Please select at least {0} checkboxes'
                },
                styled_checkbox: {
                    minlength: 'Please select at least {0} checkboxes'
                },
                switchery_group: {
                    minlength: 'Please select at least {0} switches'
                },
                switch_group: {
                    minlength: 'Please select at least {0} switches'
                },
                agree: 'Please accept our policy'
            }
        });

        // Reset form
        $('#reset').on('click', function() {
            validator.resetForm();
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentUniform();
            _componentSwitchery();
            _componentBootstrapSwitch();
            _componentTouchspin();
            _componentSelect2();
            _componentValidation();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    FormValidation.init();
});

/* ------------------------------------------------------------------------------
 *
 *  # Content widgets
 *
 *  Demo JS code for widgets_content.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var ContentWidgets = function() {


    //
    // Setup module components
    //

    // Dropzone file uploader
    var _componentDropzone = function() {
        if (typeof Dropzone == 'undefined') {
            //console.warn('Warning - dropzone.min.js is not loaded.');
            return;
        }

        // Configure dropzone
        Dropzone.options.dropzoneMultiple = {
            paramName: 'file',
            dictDefaultMessage: 'Drop file to upload <span>or CLICK</span>',
            maxFilesize: 0.1
        };
    };

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            //console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-input-styled').uniform({
            fileButtonClass: 'action btn bg-pink-400',
            fileButtonHtml: '<i class="icon-plus2"></i>'
        });
    };

    // Switchery
    var _componentSwitchery = function() {
        if (typeof Switchery == 'undefined') {
            //console.warn('Warning - switchery.min.js is not loaded.');
            return;
        }

        // Initialize multiple switches
        var elems = Array.prototype.slice.call(document.querySelectorAll('.form-input-switchery'));
        elems.forEach(function(html) {
            var switchery = new Switchery(html);
        });
    };

    // Select2 
    var _componentSelect2 = function() {
        if (!$().select2) {
            //console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-control-select2').select2({
            minimumResultsForSearch: Infinity
        });
    };

    // Datepicker
    var _componentUiDatepicker = function() {
        if (!$().datepicker) {
            //console.warn('Warning - jQuery UI components are not loaded.');
            return;
        }

        // Initialize
        $('.form-control-datepicker').datepicker();
    };

    // Chart
    var _chatMessagesStats = function() {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Main variables
        var element = document.getElementById('messages-stats'),
            height = 60,
            color = '#26A69A';


        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Define main variables
            var d3Container = d3.select(element),
                margin = {top: 0, right: 0, bottom: 0, left: 0},
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                height = height - margin.top - margin.bottom;

            // Date and time format
            var parseDate = d3.time.format('%Y-%m-%d').parse;


            // Create SVG
            // ------------------------------

            // Container
            var container = d3Container.append('svg');

            // SVG element
            var svg = container
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')


            // Construct chart layout
            // ------------------------------

            // Area
            var area = d3.svg.area()
                .x(function(d) { return x(d.date); })
                .y0(height)
                .y1(function(d) { return y(d.value); })
                .interpolate('monotone')


            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.time.scale().range([0, width ]);

            // Vertical
            var y = d3.scale.linear().range([height, 0]);


            // Load data
            // ------------------------------

            d3.json('/parco/global_assets/demo_data/dashboard/monthly_sales.json', function (error, data) {

                // Show what's wrong if error
                if (error) return console.error(error);

                // Pull out values
                data.forEach(function (d) {
                    d.date = parseDate(d.date);
                    d.value = +d.value;
                });

                // Get the maximum value in the given array
                var maxY = d3.max(data, function(d) { return d.value; });

                // Reset start data for animation
                var startData = data.map(function(datum) {
                    return {
                        date: datum.date,
                        value: 0
                    };
                });


                // Set input domains
                // ------------------------------

                // Horizontal
                x.domain(d3.extent(data, function(d, i) { return d.date; }));

                // Vertical
                y.domain([0, d3.max( data, function(d) { return d.value; })]);



                //
                // Append chart elements
                //

                // Add area path
                svg.append('path')
                    .datum(data)
                    .attr('class', 'd3-area')
                    .style('fill', color)
                    .attr('d', area)
                    .transition() // begin animation
                        .duration(1000)
                        .attrTween('d', function() {
                            var interpolator = d3.interpolateArray(startData, data);
                            return function (t) {
                                return area(interpolator (t));
                            }
                        });


                // Resize chart
                // ------------------------------

                // Call function on window resize
                $(window).on('resize', messagesAreaResize);

                // Call function on sidebar width change
                $(document).on('click', '.sidebar-control', messagesAreaResize);

                // Resize function
                // 
                // Since D3 doesn't support SVG resize by default,
                // we need to manually specify parts of the graph that need to 
                // be updated on window resize
                function messagesAreaResize() {

                    // Layout variables
                    width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;


                    // Layout
                    // -------------------------

                    // Main svg width
                    container.attr("width", width + margin.left + margin.right);

                    // Width of appended group
                    svg.attr("width", width + margin.left + margin.right);

                    // Horizontal range
                    x.range([0, width]);


                    // Chart elements
                    // -------------------------

                    // Area path
                    svg.selectAll('.d3-area').datum( data ).attr("d", area);
                }
            });
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentUniform();
            _componentSwitchery();
            _componentSelect2();
            _componentUiDatepicker();
            _chatMessagesStats();
        },
        initDropzone: function() {
            _componentDropzone();
        }
    }
}();


// Initialize module
// ------------------------------

// When content loaded
document.addEventListener('DOMContentLoaded', function() {
    ContentWidgets.init();
});

// Dropzone has specific condition
ContentWidgets.initDropzone();


/* ------------------------------------------------------------------------------
 *
 *  # Statistics widgets
 *
 *  Demo JS code for widgets_stats.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var StatisticWidgets = function() {


    //
    // Setup module components
    //

    // Messages area chart
    var _areaChartWidget = function(element, chartHeight, color) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {


            // Basic setup
            // ------------------------------

            // Define main variables
            var d3Container = d3.select(element),
                margin = {top: 0, right: 0, bottom: 0, left: 0},
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                height = chartHeight - margin.top - margin.bottom;

            // Date and time format
            var parseDate = d3.time.format('%Y-%m-%d').parse;


            // Create SVG
            // ------------------------------

            // Container
            var container = d3Container.append('svg');

            // SVG element
            var svg = container
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


            // Construct chart layout
            // ------------------------------

            // Area
            var area = d3.svg.area()
                .x(function(d) { return x(d.date); })
                .y0(height)
                .y1(function(d) { return y(d.value); })
                .interpolate('monotone');


            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.time.scale().range([0, width ]);

            // Vertical
            var y = d3.scale.linear().range([height, 0]);


            // Load data
            // ------------------------------

            d3.json("/parco/global_assets/demo_data/dashboard/monthly_sales.json", function (error, data) {

                // Show what's wrong if error
                if (error) return console.error(error);

                // Pull out values
                data.forEach(function (d) {
                    d.date = parseDate(d.date);
                    d.value = +d.value;
                });

                // Get the maximum value in the given array
                var maxY = d3.max(data, function(d) { return d.value; });

                // Reset start data for animation
                var startData = data.map(function(datum) {
                    return {
                        date: datum.date,
                        value: 0
                    };
                });


                // Set input domains
                // ------------------------------

                // Horizontal
                x.domain(d3.extent(data, function(d, i) { return d.date; }));

                // Vertical
                y.domain([0, d3.max( data, function(d) { return d.value; })]);



                //
                // Append chart elements
                //

                // Add area path
                svg.append("path")
                    .datum(data)
                    .attr("class", "d3-area")
                    .style('fill', color)
                    .attr("d", area)
                    .transition() // begin animation
                        .duration(1000)
                        .attrTween('d', function() {
                            var interpolator = d3.interpolateArray(startData, data);
                            return function (t) {
                                return area(interpolator (t));
                            };
                        });


                // Resize chart
                // ------------------------------

                // Call function on window resize
                $(window).on('resize', messagesAreaResize);

                // Call function on sidebar width change
                $(document).on('click', '.sidebar-control', messagesAreaResize);

                // Resize function
                // 
                // Since D3 doesn't support SVG resize by default,
                // we need to manually specify parts of the graph that need to 
                // be updated on window resize
                function messagesAreaResize() {

                    // Layout variables
                    width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;


                    // Layout
                    // -------------------------

                    // Main svg width
                    container.attr("width", width + margin.left + margin.right);

                    // Width of appended group
                    svg.attr("width", width + margin.left + margin.right);

                    // Horizontal range
                    x.range([0, width]);


                    // Chart elements
                    // -------------------------

                    // Area path
                    svg.selectAll('.d3-area').datum( data ).attr("d", area);
                }
            });
        }
    };

    // Simple bar charts
    var _barChartWidget = function(element, barQty, height, animate, easing, duration, delay, color, tooltip) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {


            // Basic setup
            // ------------------------------

            // Add data set
            var bardata = [];
            for (var i=0; i < barQty; i++) {
                bardata.push(Math.round(Math.random() * 10) + 10);
            }

            // Main variables
            var d3Container = d3.select(element),
                width = d3Container.node().getBoundingClientRect().width;
            


            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.scale.ordinal()
                .rangeBands([0, width], 0.3);

            // Vertical
            var y = d3.scale.linear()
                .range([0, height]);



            // Set input domains
            // ------------------------------

            // Horizontal
            x.domain(d3.range(0, bardata.length));

            // Vertical
            y.domain([0, d3.max(bardata)]);



            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append('svg');

            // Add SVG group
            var svg = container
                .attr('width', width)
                .attr('height', height)
                .append('g');



            //
            // Append chart elements
            //

            // Bars
            var bars = svg.selectAll('rect')
                .data(bardata)
                .enter()
                .append('rect')
                    .attr('class', 'd3-random-bars')
                    .attr('width', x.rangeBand())
                    .attr('x', function(d,i) {
                        return x(i);
                    })
                    .style('fill', color);



            // Tooltip
            // ------------------------------

            // Initiate
            var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0]);

            // Show and hide
            if(tooltip == "hours" || tooltip == "goal" || tooltip == "members") {
                bars.call(tip)
                    .on('mouseover', tip.show)
                    .on('mouseout', tip.hide);
            }

            // Daily meetings tooltip content
            if(tooltip == "hours") {
                tip.html(function (d, i) {
                    return "<div class='text-center'>" +
                            "<h6 class='mb-0'>" + d + "</h6>" +
                            "<span class='font-size-sm'>meetings</span>" +
                            "<div class='font-size-sm'>" + i + ":00" + "</div>" +
                        "</div>";
                });
            }

            // Statements tooltip content
            if(tooltip == "goal") {
                tip.html(function (d, i) {
                    return "<div class='text-center'>" +
                            "<h6 class='mb-0'>" + d + "</h6>" +
                            "<span class='font-size-sm'>statements</span>" +
                            "<div class='font-size-sm'>" + i + ":00" + "</div>" +
                        "</div>";
                });
            }

            // Online members tooltip content
            if(tooltip == "members") {
                tip.html(function (d, i) {
                    return "<div class='text-center'>" +
                            "<h6 class='mb-0'>" + d + "0" + "</h6>" +
                            "<span class='font-size-sm'>members</span>" +
                            "<div class='font-size-sm'>" + i + ":00" + "</div>" +
                        "</div>";
                });
            }



            // Bar loading animation
            // ------------------------------

            // Choose between animated or static
            if(animate) {
                withAnimation();
            } else {
                withoutAnimation();
            }

            // Animate on load
            function withAnimation() {
                bars
                    .attr('height', 0)
                    .attr('y', height)
                    .transition()
                        .attr('height', function(d) {
                            return y(d);
                        })
                        .attr('y', function(d) {
                            return height - y(d);
                        })
                        .delay(function(d, i) {
                            return i * delay;
                        })
                        .duration(duration)
                        .ease(easing);
            }

            // Load without animateion
            function withoutAnimation() {
                bars
                    .attr('height', function(d) {
                        return y(d);
                    })
                    .attr('y', function(d) {
                        return height - y(d);
                    });
            }



            // Resize chart
            // ------------------------------

            // Call function on window resize
            $(window).on('resize', barsResize);

            // Call function on sidebar width change
            $(document).on('click', '.sidebar-control', barsResize);

            // Resize function
            // 
            // Since D3 doesn't support SVG resize by default,
            // we need to manually specify parts of the graph that need to 
            // be updated on window resize
            function barsResize() {

                // Layout variables
                width = d3Container.node().getBoundingClientRect().width;


                // Layout
                // -------------------------

                // Main svg width
                container.attr("width", width);

                // Width of appended group
                svg.attr("width", width);

                // Horizontal range
                x.rangeBands([0, width], 0.3);


                // Chart elements
                // -------------------------

                // Bars
                svg.selectAll('.d3-random-bars')
                    .attr('width', x.rangeBand())
                    .attr('x', function(d,i) {
                        return x(i);
                    });
            }
        }
    };

    // Simple line chart
    var _lineChartWidget = function(element, chartHeight, lineColor, pathColor, pointerLineColor, pointerBgColor) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {


            // Basic setup
            // ------------------------------

            // Add data set
            var dataset = [
                {
                    "date": "04/13/14",
                    "alpha": "60"
                }, {
                    "date": "04/14/14",
                    "alpha": "35"
                }, {
                    "date": "04/15/14",
                    "alpha": "65"
                }, {
                    "date": "04/16/14",
                    "alpha": "50"
                }, {
                    "date": "04/17/14",
                    "alpha": "65"
                }, {
                    "date": "04/18/14",
                    "alpha": "20"
                }, {
                    "date": "04/19/14",
                    "alpha": "60"
                }
            ];

            // Main variables
            var d3Container = d3.select(element),
                margin = {top: 0, right: 0, bottom: 0, left: 0},
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                height = chartHeight - margin.top - margin.bottom,
                padding = 20;

            // Format date
            var parseDate = d3.time.format("%m/%d/%y").parse,
                formatDate = d3.time.format("%a, %B %e");


            // Add tooltip
            // ------------------------------

            var tooltip = d3.tip()
                .attr('class', 'd3-tip')
                .html(function (d) {
                    return "<ul class='list-unstyled mb-1'>" +
                        "<li>" + "<div class='font-size-base my-1'><i class='icon-check2 mr-2'></i>" + formatDate(d.date) + "</div>" + "</li>" +
                        "<li>" + "Sales: &nbsp;" + "<span class='font-weight-semibold float-right'>" + d.alpha + "</span>" + "</li>" +
                        "<li>" + "Revenue: &nbsp; " + "<span class='font-weight-semibold float-right'>" + "$" + (d.alpha * 25).toFixed(2) + "</span>" + "</li>" + 
                    "</ul>";
                });


            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append('svg');

            // Add SVG group
            var svg = container
                    .attr('width', width + margin.left + margin.right)
                    .attr('height', height + margin.top + margin.bottom)
                    .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                        .call(tooltip);


            // Load data
            // ------------------------------

            dataset.forEach(function (d) {
                d.date = parseDate(d.date);
                d.alpha = +d.alpha;
            });


            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.time.scale()
                .range([padding, width - padding]);

            // Vertical
            var y = d3.scale.linear()
                .range([height, 5]);


            // Set input domains
            // ------------------------------

            // Horizontal
            x.domain(d3.extent(dataset, function (d) {
                return d.date;
            }));

            // Vertical
            y.domain([0, d3.max(dataset, function (d) {
                return Math.max(d.alpha);
            })]);


            // Construct chart layout
            // ------------------------------

            // Line
            var line = d3.svg.line()
                .x(function(d) {
                    return x(d.date);
                })
                .y(function(d) {
                    return y(d.alpha);
                });


            //
            // Append chart elements
            //

            // Add mask for animation
            // ------------------------------

            // Add clip path
            var clip = svg.append("defs")
                .append("clipPath")
                .attr("id", "clip-line-small");

            // Add clip shape
            var clipRect = clip.append("rect")
                .attr('class', 'clip')
                .attr("width", 0)
                .attr("height", height);

            // Animate mask
            clipRect
                  .transition()
                      .duration(1000)
                      .ease('linear')
                      .attr("width", width);


            // Line
            // ------------------------------

            // Path
            var path = svg.append('path')
                .attr({
                    'd': line(dataset),
                    "clip-path": "url(#clip-line-small)",
                    'class': 'd3-line d3-line-medium'
                })
                .style('stroke', lineColor);

            // Animate path
            svg.select('.line-tickets')
                .transition()
                    .duration(1000)
                    .ease('linear');


            // Add vertical guide lines
            // ------------------------------

            // Bind data
            var guide = svg.append('g')
                .selectAll('.d3-line-guides-group')
                .data(dataset);

            // Append lines
            guide
                .enter()
                .append('line')
                    .attr('class', 'd3-line-guides')
                    .attr('x1', function (d, i) {
                        return x(d.date);
                    })
                    .attr('y1', function (d, i) {
                        return height;
                    })
                    .attr('x2', function (d, i) {
                        return x(d.date);
                    })
                    .attr('y2', function (d, i) {
                        return height;
                    })
                    .style('stroke', pathColor)
                    .style('stroke-dasharray', '4,2')
                    .style('shape-rendering', 'crispEdges');

            // Animate guide lines
            guide
                .transition()
                    .duration(1000)
                    .delay(function(d, i) { return i * 150; })
                    .attr('y2', function (d, i) {
                        return y(d.alpha);
                    });


            // Alpha app points
            // ------------------------------

            // Add points
            var points = svg.insert('g')
                .selectAll('.d3-line-circle')
                .data(dataset)
                .enter()
                .append('circle')
                    .attr('class', 'd3-line-circle d3-line-circle-medium')
                    .attr("cx", line.x())
                    .attr("cy", line.y())
                    .attr("r", 3)
                    .style({
                        'stroke': pointerLineColor,
                        'fill': pointerBgColor
                    });

            // Animate points on page load
            points
                .style('opacity', 0)
                .transition()
                    .duration(250)
                    .ease('linear')
                    .delay(1000)
                    .style('opacity', 1);

            // Add user interaction
            points
                .on("mouseover", function (d) {
                    tooltip.offset([-10, 0]).show(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 4);
                })

                // Hide tooltip
                .on("mouseout", function (d) {
                    tooltip.hide(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 3);
                });

            // Change tooltip direction of first point
            d3.select(points[0][0])
                .on("mouseover", function (d) {
                    tooltip.offset([0, 10]).direction('e').show(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 4);
                })
                .on("mouseout", function (d) {
                    tooltip.direction('n').hide(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 3);
                });

            // Change tooltip direction of last point
            d3.select(points[0][points.size() - 1])
                .on("mouseover", function (d) {
                    tooltip.offset([0, -10]).direction('w').show(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 4);
                })
                .on("mouseout", function (d) {
                    tooltip.direction('n').hide(d);

                    // Animate circle radius
                    d3.select(this).transition().duration(250).attr('r', 3);
                });


            // Resize chart
            // ------------------------------

            // Call function on window resize
            $(window).on('resize', lineChartResize);

            // Call function on sidebar width change
            $(document).on('click', '.sidebar-control', lineChartResize);

            // Resize function
            // 
            // Since D3 doesn't support SVG resize by default,
            // we need to manually specify parts of the graph that need to 
            // be updated on window resize
            function lineChartResize() {

                // Layout variables
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;


                // Layout
                // -------------------------

                // Main svg width
                container.attr("width", width + margin.left + margin.right);

                // Width of appended group
                svg.attr("width", width + margin.left + margin.right);

                // Horizontal range
                x.range([padding, width - padding]);


                // Chart elements
                // -------------------------

                // Mask
                clipRect.attr("width", width);

                // Line path
                svg.selectAll('.d3-line').attr("d", line(dataset));

                // Circles
                svg.selectAll('.d3-line-circle').attr("cx", line.x());

                // Guide lines
                svg.selectAll('.d3-line-guides')
                    .attr('x1', function (d, i) {
                        return x(d.date);
                    })
                    .attr('x2', function (d, i) {
                        return x(d.date);
                    });
            }
        }
    };

    // Simple sparklines
    var _sparklinesWidget = function(element, chartType, qty, chartHeight, interpolation, duration, interval, color) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {


            // Basic setup
            // ------------------------------

            // Define main variables
            var d3Container = d3.select(element),
                margin = {top: 0, right: 0, bottom: 0, left: 0},
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
                height = chartHeight - margin.top - margin.bottom;


            // Generate random data (for demo only)
            var data = [];
            for (var i=0; i < qty; i++) {
                data.push(Math.floor(Math.random() * qty) + 5);
            }


            // Construct scales
            // ------------------------------

            // Horizontal
            var x = d3.scale.linear().range([0, width]);

            // Vertical
            var y = d3.scale.linear().range([height - 5, 5]);


            // Set input domains
            // ------------------------------

            // Horizontal
            x.domain([1, qty - 3]);

            // Vertical
            y.domain([0, qty]);
                

            // Construct chart layout
            // ------------------------------

            // Line
            var line = d3.svg.line()
                .interpolate(interpolation)
                .x(function(d, i) { return x(i); })
                .y(function(d, i) { return y(d); });

            // Area
            var area = d3.svg.area()
                .interpolate(interpolation)
                .x(function(d,i) { 
                    return x(i); 
                })
                .y0(height)
                .y1(function(d) { 
                    return y(d); 
                });


            // Create SVG
            // ------------------------------

            // Container
            var container = d3Container.append('svg');

            // SVG element
            var svg = container
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


            // Add mask for animation
            // ------------------------------

            // Add clip path
            var clip = svg.append("defs")
                .append("clipPath")
                .attr('id', function(d, i) { return "load-clip-" + element.substring(1); });

            // Add clip shape
            var clips = clip.append("rect")
                .attr('class', 'load-clip')
                .attr("width", 0)
                .attr("height", height);

            // Animate mask
            clips
                .transition()
                    .duration(1000)
                    .ease('linear')
                    .attr("width", width);


            //
            // Append chart elements
            //

            // Main path
            var path = svg.append("g")
                .attr("clip-path", function(d, i) { return "url(#load-clip-" + element.substring(1) + ")"; })
                .append("path")
                    .datum(data)
                    .attr("transform", "translate(" + x(0) + ",0)");

            // Add path based on chart type
            if(chartType == "area") {
                path.attr("d", area).attr('class', 'd3-area').style("fill", color); // area
            }
            else {
                path.attr("d", line).attr("class", "d3-line d3-line-medium").style('stroke', color); // line
            }

            // Animate path
            path
                .style('opacity', 0)
                .transition()
                    .duration(500)
                    .style('opacity', 1);



            // Set update interval. For demo only
            // ------------------------------

            setInterval(function() {

                // push a new data point onto the back
                data.push(Math.floor(Math.random() * qty) + 5);

                // pop the old data point off the front
                data.shift();

                update();

            }, interval);



            // Update random data. For demo only
            // ------------------------------

            function update() {

                // Redraw the path and slide it to the left
                path
                    .attr("transform", null)
                    .transition()
                        .duration(duration)
                        .ease("linear")
                        .attr("transform", "translate(" + x(0) + ",0)");

                // Update path type
                if(chartType == "area") {
                    path.attr("d", area).attr('class', 'd3-area').style("fill", color);
                }
                else {
                    path.attr("d", line).attr("class", "d3-line d3-line-medium").style('stroke', color);
                }
            }



            // Resize chart
            // ------------------------------

            // Call function on window resize
            $(window).on('resize', resizeSparklines);

            // Call function on sidebar width change
            $(document).on('click', '.sidebar-control', resizeSparklines);

            // Resize function
            // 
            // Since D3 doesn't support SVG resize by default,
            // we need to manually specify parts of the graph that need to 
            // be updated on window resize
            function resizeSparklines() {

                // Layout variables
                width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;


                // Layout
                // -------------------------

                // Main svg width
                container.attr("width", width + margin.left + margin.right);

                // Width of appended group
                svg.attr("width", width + margin.left + margin.right);

                // Horizontal range
                x.range([0, width]);


                // Chart elements
                // -------------------------

                // Clip mask
                clips.attr("width", width);

                // Line
                svg.select(".d3-line").attr("d", line);

                // Area
                svg.select(".d3-area").attr("d", area);
            }
        }
    };

    // Animated progress with icon
    var _progressIcon = function(element, radius, border, backgroundColor, foregroundColor, end, iconClass) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {


            // Basic setup
            // ------------------------------

            // Main variables
            var d3Container = d3.select(element),
                startPercent = 0,
                iconSize = 32,
                endPercent = end,
                twoPi = Math.PI * 2,
                formatPercent = d3.format('.0%'),
                boxSize = radius * 2;

            // Values count
            var count = Math.abs((endPercent - startPercent) / 0.01);

            // Values step
            var step = endPercent < startPercent ? -0.01 : 0.01;


            // Create chart
            // ------------------------------

            // Add SVG element
            var container = d3Container.append('svg');

            // Add SVG group
            var svg = container
                .attr('width', boxSize)
                .attr('height', boxSize)
                .append('g')
                    .attr('transform', 'translate(' + (boxSize / 2) + ',' + (boxSize / 2) + ')');


            // Construct chart layout
            // ------------------------------

            // Arc
            var arc = d3.svg.arc()
                .startAngle(0)
                .innerRadius(radius)
                .outerRadius(radius - border)
                .cornerRadius(20);


            //
            // Append chart elements
            //

            // Paths
            // ------------------------------

            // Background path
            svg.append('path')
                .attr('class', 'd3-progress-background')
                .attr('d', arc.endAngle(twoPi))
                .style('fill', backgroundColor);

            // Foreground path
            var foreground = svg.append('path')
                .attr('class', 'd3-progress-foreground')
                .attr('filter', 'url(#blur)')
                .style({
                    'fill': foregroundColor,
                    'stroke': foregroundColor
                });

            // Front path
            var front = svg.append('path')
                .attr('class', 'd3-progress-front')
                .style({
                    'fill': foregroundColor,
                    'fill-opacity': 1
                });


            // Text
            // ------------------------------

            // Percentage text value
            var numberText = d3.select('.progress-percentage')
                    .attr('class', 'pt-1 mt-2 mb-1');

            // Icon
            d3.select(element)
                .append("i")
                    .attr("class", iconClass + " counter-icon")
                    .style({
                        'color': foregroundColor,
                        'top': ((boxSize - iconSize) / 2) + 'px'
                    });


            // Animation
            // ------------------------------

            // Animate path
            function updateProgress(progress) {
                foreground.attr('d', arc.endAngle(twoPi * progress));
                front.attr('d', arc.endAngle(twoPi * progress));
                numberText.text(formatPercent(progress));
            }

            // Animate text
            var progress = startPercent;
            (function loops() {
                updateProgress(progress);
                if (count > 0) {
                    count--;
                    progress += step;
                    setTimeout(loops, 10);
                }
            })();
        }
    };

    // Animated progress with percentage count
    var _progressPercentage = function(element, radius, border, backgroundColor, foregroundColor, end) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {


            // Basic setup
            // ------------------------------

            // Main variables
            var d3Container = d3.select(element),
                startPercent = 0,
                fontSize = 22,
                endPercent = end,
                twoPi = Math.PI * 2,
                formatPercent = d3.format('.0%'),
                boxSize = radius * 2;

            // Values count
            var count = Math.abs((endPercent - startPercent) / 0.01);

            // Values step
            var step = endPercent < startPercent ? -0.01 : 0.01;


            // Create chart
            // ------------------------------

            // Add SVG element
            var container = d3Container.append('svg');

            // Add SVG group
            var svg = container
                .attr('width', boxSize)
                .attr('height', boxSize)
                .append('g')
                    .attr('transform', 'translate(' + radius + ',' + radius + ')');


            // Construct chart layout
            // ------------------------------

            // Arc
            var arc = d3.svg.arc()
                .startAngle(0)
                .innerRadius(radius)
                .outerRadius(radius - border)
                .cornerRadius(20);


            //
            // Append chart elements
            //

            // Paths
            // ------------------------------

            // Background path
            svg.append('path')
                .attr('class', 'd3-progress-background')
                .attr('d', arc.endAngle(twoPi))
                .style('fill', backgroundColor);

            // Foreground path
            var foreground = svg.append('path')
                .attr('class', 'd3-progress-foreground')
                .attr('filter', 'url(#blur)')
                .style({
                    'fill': foregroundColor,
                    'stroke': foregroundColor
                });

            // Front path
            var front = svg.append('path')
                .attr('class', 'd3-progress-front')
                .style({
                    'fill': foregroundColor,
                    'fill-opacity': 1
                });


            // Text
            // ------------------------------

            // Percentage text value
            var numberText = svg
                .append('text')
                    .attr('dx', 0)
                    .attr('dy', (fontSize / 2) - border)
                    .style({
                        'font-size': fontSize + 'px',
                        'line-height': 1,
                        'fill': foregroundColor,
                        'text-anchor': 'middle'
                    });


            // Animation
            // ------------------------------

            // Animate path
            function updateProgress(progress) {
                foreground.attr('d', arc.endAngle(twoPi * progress));
                front.attr('d', arc.endAngle(twoPi * progress));
                numberText.text(formatPercent(progress));
            }

            // Animate text
            var progress = startPercent;
            (function loops() {
                updateProgress(progress);
                if (count > 0) {
                    count--;
                    progress += step;
                    setTimeout(loops, 10);
                }
            })();
        }
    };

    // Simple pie
    var _animatedPie = function(element, size) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Add data set
            var data = [
                {
                    "status": "Pending tickets",
                    "icon": "<i class='badge badge-mark border-blue-300 mr-2'></i>",
                    "value": 938,
                    "color": "#29B6F6"
                }, {
                    "status": "Resolved tickets",
                    "icon": "<i class='badge badge-mark border-success-300 mr-2'></i>",
                    "value": 490,
                    "color": "#66BB6A"
                }, {
                    "status": "Closed tickets",
                    "icon": "<i class='badge badge-mark border-danger-300 mr-2'></i>",
                    "value": 789,
                    "color": "#EF5350"
                }
            ];

            // Main variables
            var d3Container = d3.select(element),
                distance = 2, // reserve 2px space for mouseover arc moving
                radius = (size/2) - distance,
                sum = d3.sum(data, function(d) { return d.value; });


            // Tooltip
            // ------------------------------

            var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0])
                .direction('e')
                .html(function (d) {
                    return "<ul class='list-unstyled mb-1'>" +
                        "<li>" + "<div class='font-size-base my-1'>" + d.data.icon + d.data.status + "</div>" + "</li>" +
                        "<li>" + "Total: &nbsp;" + "<span class='font-weight-semibold float-right'>" + d.value + "</span>" + "</li>" +
                        "<li>" + "Share: &nbsp;" + "<span class='font-weight-semibold float-right'>" + (100 / (sum / d.value)).toFixed(2) + "%" + "</span>" + "</li>" +
                    "</ul>";
                });


            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append("svg").call(tip);
            
            // Add SVG group
            var svg = container
                .attr("width", size)
                .attr("height", size)
                .append("g")
                    .attr("transform", "translate(" + (size / 2) + "," + (size / 2) + ")");  


            // Construct chart layout
            // ------------------------------

            // Pie
            var pie = d3.layout.pie()
                .sort(null)
                .startAngle(Math.PI)
                .endAngle(3 * Math.PI)
                .value(function (d) { 
                    return d.value;
                }); 

            // Arc
            var arc = d3.svg.arc()
                .outerRadius(radius);


            //
            // Append chart elements
            //

            // Group chart elements
            var arcGroup = svg.selectAll(".d3-arc")
                .data(pie(data))
                .enter()
                .append("g") 
                    .attr("class", "d3-arc")
                    .style({
                        'stroke': '#fff',
                        'stroke-width': 2,
                        'cursor': 'pointer'
                    });
            
            // Append path
            var arcPath = arcGroup
                .append("path")
                .style("fill", function (d) {
                    return d.data.color;
                });

            // Add tooltip
            arcPath
                .on('mouseover', function (d, i) {

                    // Transition on mouseover
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('elastic')
                        .attr('transform', function (d) {
                            d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
                            var x = Math.sin(d.midAngle) * distance;
                            var y = -Math.cos(d.midAngle) * distance;
                            return 'translate(' + x + ',' + y + ')';
                        });
                })
                .on("mousemove", function (d) {
                    
                    // Show tooltip on mousemove
                    tip.show(d)
                        .style("top", (d3.event.pageY - 40) + "px")
                        .style("left", (d3.event.pageX + 30) + "px");
                })
                .on('mouseout', function (d, i) {

                    // Mouseout transition
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('bounce')
                        .attr('transform', 'translate(0,0)');

                    // Hide tooltip
                    tip.hide(d);
                });

            // Animate chart on load
            arcPath
                .transition()
                    .delay(function(d, i) { return i * 500; })
                    .duration(500)
                    .attrTween("d", function(d) {
                        var interpolate = d3.interpolate(d.startAngle,d.endAngle);
                        return function(t) {
                            d.endAngle = interpolate(t);
                            return arc(d);  
                        }; 
                    });


            //
            // Append counter
            //

            // Append element
            d3Container
                .append('h2')
                .attr('class', 'pt-1 mt-2 mb-1 font-weight-semibold');

            // Animate counter
            d3Container.select('h2')
                .transition()
                .duration(1500)
                .tween("text", function(d) {
                    var i = d3.interpolate(this.textContent, sum);

                    return function(t) {
                        this.textContent = d3.format(",d")(Math.round(i(t)));
                    };
                });
        }
    };

    // Pie with legend
    var _animatedPieWithLegend = function(element, size) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Add data set
            var data = [
                {
                    "status": "New",
                    "value": 578,
                    "color": "#29B6F6"
                }, {
                    "status": "Pending",
                    "value": 983,
                    "color": "#66BB6A"
                }, {
                    "status": "Shipped",
                    "value": 459,
                    "color": "#EF5350"
                }
            ];

            // Main variables
            var d3Container = d3.select(element),
                distance = 2, // reserve 2px space for mouseover arc moving
                radius = (size/2) - distance,
                sum = d3.sum(data, function(d) { return d.value; });


            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append("svg");
            
            // Add SVG group
            var svg = container
                .attr("width", size)
                .attr("height", size)
                .append("g")
                    .attr("transform", "translate(" + (size / 2) + "," + (size / 2) + ")");  


            // Construct chart layout
            // ------------------------------

            // Pie
            var pie = d3.layout.pie()
                .sort(null)
                .startAngle(Math.PI)
                .endAngle(3 * Math.PI)
                .value(function (d) { 
                    return d.value;
                }); 

            // Arc
            var arc = d3.svg.arc()
                .outerRadius(radius);


            //
            // Append chart elements
            //

            // Group chart elements
            var arcGroup = svg.selectAll(".d3-arc")
                .data(pie(data))
                .enter()
                .append("g") 
                    .attr("class", "d3-arc")
                    .style({
                        'stroke': '#fff',
                        'stroke-width': 2,
                        'cursor': 'pointer'
                    });
            
            // Append path
            var arcPath = arcGroup
                .append("path")
                .style("fill", function (d) {
                    return d.data.color;
                });


            // Add interactions
            arcPath
                .on('mouseover', function (d, i) {

                    // Transition on mouseover
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('elastic')
                        .attr('transform', function (d) {
                            d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
                            var x = Math.sin(d.midAngle) * distance;
                            var y = -Math.cos(d.midAngle) * distance;
                            return 'translate(' + x + ',' + y + ')';
                        });

                    // Animate legend
                    $(element + ' [data-slice]').css({
                        'opacity': 0.3,
                        'transition': 'all ease-in-out 0.15s'
                    });
                    $(element + ' [data-slice=' + i + ']').css({'opacity': 1});
                })
                .on('mouseout', function (d, i) {

                    // Mouseout transition
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('bounce')
                        .attr('transform', 'translate(0,0)');

                    // Revert legend animation
                    $(element + ' [data-slice]').css('opacity', 1);
                });

            // Animate chart on load
            arcPath
                .transition()
                    .delay(function(d, i) { return i * 500; })
                    .duration(500)
                    .attrTween("d", function(d) {
                        var interpolate = d3.interpolate(d.startAngle,d.endAngle);
                        return function(t) {
                            d.endAngle = interpolate(t);
                            return arc(d);  
                        }; 
                    });


            //
            // Append counter
            //

            // Append element
            d3Container
                .append('h2')
                .attr('class', 'pt-1 mt-2 mb-1 font-weight-semibold');

            // Animate counter
            d3Container.select('h2')
                .transition()
                .duration(1500)
                .tween("text", function(d) {
                    var i = d3.interpolate(this.textContent, sum);

                    return function(t) {
                        this.textContent = d3.format(",d")(Math.round(i(t)));
                    };
                });


            //
            // Append legend
            //

            // Add element
            var legend = d3.select(element)
                .append('ul')
                .attr('class', 'chart-widget-legend')
                .selectAll('li').data(pie(data))
                .enter().append('li')
                .attr('data-slice', function(d, i) {
                    return i;
                })
                .attr('style', function(d, i) {
                    return 'border-bottom: 2px solid ' + d.data.color;
                })
                .text(function(d, i) {
                    return d.data.status + ': ';
                });

            // Add value
            legend.append('span')
                .text(function(d, i) {
                    return d.data.value;
                });
        }
    };

    // Pie arc with legend
    var _pieArcWithLegend = function(element, size) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {


            // Basic setup
            // ------------------------------

            // Add data set
            var data = [
                {
                    "status": "Pending",
                    "icon": "<i class='badge badge-mark border-blue-300 mr-2'></i>",
                    "value": 720,
                    "color": "#29B6F6"
                }, {
                    "status": "Resolved",
                    "icon": "<i class='badge badge-mark border-success-300 mr-2'></i>",
                    "value": 990,
                    "color": "#66BB6A"
                }, {
                    "status": "Closed",
                    "icon": "<i class='badge badge-mark border-danger-300 mr-2'></i>",
                    "value": 720,
                    "color": "#EF5350"
                }
            ];

            // Main variables
            var d3Container = d3.select(element),
                distance = 2, // reserve 2px space for mouseover arc moving
                radius = (size/2) - distance,
                sum = d3.sum(data, function(d) { return d.value; });



            // Tooltip
            // ------------------------------

            var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0])
                .direction('e')
                .html(function (d) {
                    return "<ul class='list-unstyled mb-1'>" +
                        "<li>" + "<div class='font-size-base my-1'>" + d.data.icon + d.data.status + "</div>" + "</li>" +
                        "<li>" + "Total: &nbsp;" + "<span class='font-weight-semibold float-right'>" + d.value + "</span>" + "</li>" +
                        "<li>" + "Share: &nbsp;" + "<span class='font-weight-semibold float-right'>" + (100 / (sum / d.value)).toFixed(2) + "%" + "</span>" + "</li>" +
                    "</ul>";
                });



            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append("svg").call(tip);
            
            // Add SVG group
            var svg = container
                .attr("width", size)
                .attr("height", size / 2)
                .append("g")
                    .attr("transform", "translate(" + (size / 2) + "," + (size / 2) + ")");  



            // Construct chart layout
            // ------------------------------

            // Pie
            var pie = d3.layout.pie()
                .sort(null)
                .startAngle(-Math.PI / 2)
                .endAngle(Math.PI / 2)
                .value(function (d) { 
                    return d.value;
                }); 

            // Arc
            var arc = d3.svg.arc()
                .outerRadius(radius)
                .innerRadius(radius / 1.3);



            //
            // Append chart elements
            //

            // Group chart elements
            var arcGroup = svg.selectAll(".d3-arc")
                .data(pie(data))
                .enter()
                .append("g") 
                    .attr("class", "d3-arc")
                    .style({
                        'stroke': '#fff',
                        'stroke-width': 2,
                        'cursor': 'pointer'
                    });
            
            // Append path
            var arcPath = arcGroup
                .append("path")
                .style("fill", function (d) {
                    return d.data.color;
                });


            //
            // Interactions
            //

            // Mouse
            arcPath
                .on('mouseover', function(d, i) {

                    // Transition on mouseover
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('elastic')
                        .attr('transform', function (d) {
                            d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
                            var x = Math.sin(d.midAngle) * distance;
                            var y = -Math.cos(d.midAngle) * distance;
                            return 'translate(' + x + ',' + y + ')';
                        });

                    $(element + ' [data-slice]').css({
                        'opacity': 0.3,
                        'transition': 'all ease-in-out 0.15s'
                    });
                    $(element + ' [data-slice=' + i + ']').css({'opacity': 1});
                })
                .on('mouseout', function(d, i) {

                    // Mouseout transition
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('bounce')
                        .attr('transform', 'translate(0,0)');

                    $(element + ' [data-slice]').css('opacity', 1);
                });

            // Animate chart on load
            arcPath
                .transition()
                    .delay(function(d, i) {
                        return i * 500;
                    })
                    .duration(500)
                    .attrTween("d", function(d) {
                        var interpolate = d3.interpolate(d.startAngle,d.endAngle);
                        return function(t) {
                            d.endAngle = interpolate(t);
                            return arc(d);  
                        }; 
                    });


            //
            // Append total text
            //

            svg.append('text')
                .attr('class', 'text-muted')
                .attr({
                    'class': 'half-donut-total',
                    'text-anchor': 'middle',
                    'dy': -33
                })
                .style({
                    'font-size': '12px',
                    'fill': '#999'
                })
                .text('Total');


            //
            // Append count
            //

            // Text
            svg
                .append('text')
                .attr('class', 'half-conut-count')
                .attr('text-anchor', 'middle')
                .attr('dy', -5)
                .style({
                    'font-size': '21px',
                    'font-weight': 500
                });

            // Animation
            svg.select('.half-conut-count')
                .transition()
                .duration(1500)
                .ease('linear')
                .tween("text", function(d) {
                    var i = d3.interpolate(this.textContent, sum);

                    return function(t) {
                        this.textContent = d3.format(",d")(Math.round(i(t)));
                    };
                });


            //
            // Legend
            //

            // Add legend list
            var legend = d3.select(element)
                .append('ul')
                .attr('class', 'chart-widget-legend')
                .selectAll('li')
                .data(pie(data))
                .enter()
                .append('li')
                .attr('data-slice', function(d, i) {
                    return i;
                })
                .attr('style', function(d, i) {
                    return 'border-bottom: solid 2px ' + d.data.color;
                })
                .text(function(d, i) {
                    return d.data.status + ': ';
                });

            // Legend text
            legend.append('span')
                .text(function(d, i) {
                    return d.data.value;
                });
        }
    };

    // Simple donut
    var _animatedDonut = function(element, size) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Add data set
            var data = [
                {
                    "status": "Pending tickets",
                    "icon": "<i class='badge badge-mark border-blue-300 mr-2'></i>",
                    "value": 567,
                    "color": "#29B6F6"
                }, {
                    "status": "Resolved tickets",
                    "icon": "<i class='badge badge-mark border-success-300 mr-2'></i>",
                    "value": 234,
                    "color": "#66BB6A"
                }, {
                    "status": "Closed tickets",
                    "icon": "<i class='badge badge-mark border-danger-300 mr-2'></i>",
                    "value": 642,
                    "color": "#EF5350"
                }
            ];

            // Main variables
            var d3Container = d3.select(element),
                distance = 2, // reserve 2px space for mouseover arc moving
                radius = (size/2) - distance,
                sum = d3.sum(data, function(d) { return d.value; });


            // Tooltip
            // ------------------------------

            var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0])
                .direction('e')
                .html(function (d) {
                    return "<ul class='list-unstyled mb-1'>" +
                        "<li>" + "<div class='font-size-base my-1'>" + d.data.icon + d.data.status + "</div>" + "</li>" +
                        "<li>" + "Total: &nbsp;" + "<span class='font-weight-semibold float-right'>" + d.value + "</span>" + "</li>" +
                        "<li>" + "Share: &nbsp;" + "<span class='font-weight-semibold float-right'>" + (100 / (sum / d.value)).toFixed(2) + "%" + "</span>" + "</li>" +
                    "</ul>";
                });


            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append("svg").call(tip);
            
            // Add SVG group
            var svg = container
                .attr("width", size)
                .attr("height", size)
                .append("g")
                    .attr("transform", "translate(" + (size / 2) + "," + (size / 2) + ")");  


            // Construct chart layout
            // ------------------------------

            // Pie
            var pie = d3.layout.pie()
                .sort(null)
                .startAngle(Math.PI)
                .endAngle(3 * Math.PI)
                .value(function (d) { 
                    return d.value;
                }); 

            // Arc
            var arc = d3.svg.arc()
                .outerRadius(radius)
                .innerRadius(radius / 1.5);


            //
            // Append chart elements
            //

            // Group chart elements
            var arcGroup = svg.selectAll(".d3-arc")
                .data(pie(data))
                .enter()
                .append("g") 
                    .attr("class", "d3-arc")
                    .style({
                        'stroke': '#fff',
                        'stroke-width': 2,
                        'cursor': 'pointer'
                    });
            
            // Append path
            var arcPath = arcGroup
                .append("path")
                .style("fill", function (d) {
                    return d.data.color;
                });

            // Add tooltip
            arcPath
                .on('mouseover', function (d, i) {

                    // Transition on mouseover
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('elastic')
                        .attr('transform', function (d) {
                            d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
                            var x = Math.sin(d.midAngle) * distance;
                            var y = -Math.cos(d.midAngle) * distance;
                            return 'translate(' + x + ',' + y + ')';
                        });
                })
                .on("mousemove", function (d) {
                    
                    // Show tooltip on mousemove
                    tip.show(d)
                        .style("top", (d3.event.pageY - 40) + "px")
                        .style("left", (d3.event.pageX + 30) + "px");
                })
                .on('mouseout', function (d, i) {

                    // Mouseout transition
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('bounce')
                        .attr('transform', 'translate(0,0)');

                    // Hide tooltip
                    tip.hide(d);
                });

            // Animate chart on load
            arcPath
                .transition()
                    .delay(function(d, i) { return i * 500; })
                    .duration(500)
                    .attrTween("d", function(d) {
                        var interpolate = d3.interpolate(d.startAngle,d.endAngle);
                        return function(t) {
                            d.endAngle = interpolate(t);
                            return arc(d);  
                        }; 
                    });


            //
            // Append counter
            //

            // Append text
            svg
                .append('text')
                .attr('text-anchor', 'middle')
                .attr('dy', 6)
                .style({
                    'font-size': '17px',
                    'font-weight': 500
                });

            // Animate text
            svg.select('text')
                .transition()
                .duration(1500)
                .tween("text", function(d) {
                    var i = d3.interpolate(this.textContent, sum);
                    return function(t) {
                        this.textContent = d3.format(",d")(Math.round(i(t)));
                    };
                });
        }
    };

    // Donut with legend
    var _animatedDonutWithLegend = function(element, size) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Add data set
            var data = [
                {
                    "status": "New",
                    "value": 790,
                    "color": "#29B6F6"
                }, {
                    "status": "Pending",
                    "value": 850,
                    "color": "#66BB6A"
                }, {
                    "status": "Shipped",
                    "value": 760,
                    "color": "#EF5350"
                }
            ];

            // Main variables
            var d3Container = d3.select(element),
                distance = 2, // reserve 2px space for mouseover arc moving
                radius = (size/2) - distance,
                sum = d3.sum(data, function(d) { return d.value; });


            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append("svg");
            
            // Add SVG group
            var svg = container
                .attr("width", size)
                .attr("height", size)
                .append("g")
                    .attr("transform", "translate(" + (size / 2) + "," + (size / 2) + ")");  


            // Construct chart layout
            // ------------------------------

            // Pie
            var pie = d3.layout.pie()
                .sort(null)
                .startAngle(Math.PI)
                .endAngle(3 * Math.PI)
                .value(function (d) { 
                    return d.value;
                }); 

            // Arc
            var arc = d3.svg.arc()
                .outerRadius(radius)
                .innerRadius(radius / 1.5);


            //
            // Append chart elements
            //

            // Group chart elements
            var arcGroup = svg.selectAll(".d3-arc")
                .data(pie(data))
                .enter()
                .append("g") 
                    .attr("class", "d3-arc")
                    .style({
                        'stroke': '#fff',
                        'stroke-width': 2,
                        'cursor': 'pointer'
                    });
            
            // Append path
            var arcPath = arcGroup
                .append("path")
                .style("fill", function (d) {
                    return d.data.color;
                });


            // Add interactions
            arcPath
                .on('mouseover', function (d, i) {

                    // Transition on mouseover
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('elastic')
                        .attr('transform', function (d) {
                            d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
                            var x = Math.sin(d.midAngle) * distance;
                            var y = -Math.cos(d.midAngle) * distance;
                            return 'translate(' + x + ',' + y + ')';
                        });

                    // Animate legend
                    $(element + ' [data-slice]').css({
                        'opacity': 0.3,
                        'transition': 'all ease-in-out 0.15s'
                    });
                    $(element + ' [data-slice=' + i + ']').css({'opacity': 1});
                })
                .on('mouseout', function (d, i) {

                    // Mouseout transition
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('bounce')
                        .attr('transform', 'translate(0,0)');

                    // Revert legend animation
                    $(element + ' [data-slice]').css('opacity', 1);
                });

            // Animate chart on load
            arcPath
                .transition()
                    .delay(function(d, i) {
                        return i * 500;
                    })
                    .duration(500)
                    .attrTween("d", function(d) {
                        var interpolate = d3.interpolate(d.startAngle,d.endAngle);
                        return function(t) {
                            d.endAngle = interpolate(t);
                            return arc(d);  
                        }; 
                    });


            //
            // Append counter
            //

            // Append text
            svg
                .append('text')
                .attr('text-anchor', 'middle')
                .attr('dy', 6)
                .style({
                    'font-size': '17px',
                    'font-weight': 500
                });

            // Animate text
            svg.select('text')
                .transition()
                .duration(1500)
                .tween("text", function(d) {
                    var i = d3.interpolate(this.textContent, sum);
                    return function(t) {
                        this.textContent = d3.format(",d")(Math.round(i(t)));
                    };
                });


            //
            // Append legend
            //

            // Add element
            var legend = d3.select(element)
                .append('ul')
                .attr('class', 'chart-widget-legend')
                .selectAll('li').data(pie(data))
                .enter().append('li')
                .attr('data-slice', function(d, i) {
                    return i;
                })
                .attr('style', function(d, i) {
                    return 'border-bottom: 2px solid ' + d.data.color;
                })
                .text(function(d, i) {
                    return d.data.status + ': ';
                });

            // Add value
            legend.append('span')
                .text(function(d, i) {
                    return d.data.value;
                });
        }
    };

    // Donut with details
    var _donutWithDetails = function(element, size) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {


            // Basic setup
            // ------------------------------

            // Add data set
            var data = [
                {
                    "status": "Pending",
                    "icon": "<i class='badge badge-mark border-blue-300 mr-2'></i>",
                    "value": 720,
                    "color": "#29B6F6"
                }, {
                    "status": "Resolved",
                    "icon": "<i class='badge badge-mark border-success-300 mr-2'></i>",
                    "value": 990,
                    "color": "#66BB6A"
                }, {
                    "status": "Closed",
                    "icon": "<i class='badge badge-mark border-danger-300 mr-2'></i>",
                    "value": 720,
                    "color": "#EF5350"
                }
            ];

            // Main variables
            var d3Container = d3.select(element),
                distance = 2, // reserve 2px space for mouseover arc moving
                radius = (size/2) - distance,
                sum = d3.sum(data, function(d) { return d.value; });


            // Tooltip
            // ------------------------------

            var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0])
                .direction('e')
                .html(function (d) {
                    return "<ul class='list-unstyled mb-1'>" +
                        "<li>" + "<div class='font-size-base my-1'>" + d.data.icon + d.data.status + "</div>" + "</li>" +
                        "<li>" + "Total: &nbsp;" + "<span class='font-weight-semibold float-right'>" + d.value + "</span>" + "</li>" +
                        "<li>" + "Share: &nbsp;" + "<span class='font-weight-semibold float-right'>" + (100 / (sum / d.value)).toFixed(2) + "%" + "</span>" + "</li>" +
                    "</ul>";
                });


            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append("svg").call(tip);
            
            // Add SVG group
            var svg = container
                .attr("width", size)
                .attr("height", size)
                .append("g")
                    .attr("transform", "translate(" + (size / 2) + "," + (size / 2) + ")");  


            // Construct chart layout
            // ------------------------------

            // Pie
            var pie = d3.layout.pie()
                .sort(null)
                .startAngle(Math.PI)
                .endAngle(3 * Math.PI)
                .value(function (d) { 
                    return d.value;
                }); 

            // Arc
            var arc = d3.svg.arc()
                .outerRadius(radius)
                .innerRadius(radius / 1.35);


            //
            // Append chart elements
            //

            // Group chart elements
            var arcGroup = svg.selectAll(".d3-arc")
                .data(pie(data))
                .enter()
                .append("g") 
                    .attr("class", "d3-arc")
                    .style({
                        'stroke': '#fff',
                        'stroke-width': 2,
                        'cursor': 'pointer'
                    });
            
            // Append path
            var arcPath = arcGroup
                .append("path")
                .style("fill", function (d) {
                    return d.data.color;
                });


            //
            // Add interactions
            //

            // Mouse
            arcPath
                .on('mouseover', function(d, i) {

                    // Transition on mouseover
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('elastic')
                        .attr('transform', function (d) {
                            d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
                            var x = Math.sin(d.midAngle) * distance;
                            var y = -Math.cos(d.midAngle) * distance;
                            return 'translate(' + x + ',' + y + ')';
                        });

                    $(element + ' [data-slice]').css({
                        'opacity': 0.3,
                        'transition': 'all ease-in-out 0.15s'
                    });
                    $(element + ' [data-slice=' + i + ']').css({'opacity': 1});
                })
                .on('mouseout', function(d, i) {

                    // Mouseout transition
                    d3.select(this)
                    .transition()
                        .duration(500)
                        .ease('bounce')
                        .attr('transform', 'translate(0,0)');

                    $(element + ' [data-slice]').css('opacity', 1);
                });

            // Animate chart on load
            arcPath
                .transition()
                .delay(function(d, i) {
                    return i * 500;
                })
                .duration(500)
                .attrTween("d", function(d) {
                    var interpolate = d3.interpolate(d.startAngle,d.endAngle);
                    return function(t) {
                        d.endAngle = interpolate(t);
                        return arc(d);  
                    }; 
                });


            //
            // Add text
            //

            // Total
            svg.append('text')
                .attr('class', 'text-muted')
                .attr({
                    'class': 'half-donut-total',
                    'text-anchor': 'middle',
                    'dy': -13
                })
                .style({
                    'font-size': '12px',
                    'fill': '#999'
                })
                .text('Total');

            // Count
            svg
                .append('text')
                .attr('class', 'half-donut-count')
                .attr('text-anchor', 'middle')
                .attr('dy', 14)
                .style({
                    'font-size': '21px',
                    'font-weight': 500
                });

            // Animate count
            svg.select('.half-donut-count')
                .transition()
                .duration(1500)
                .ease('linear')
                .tween("text", function(d) {
                    var i = d3.interpolate(this.textContent, sum);

                    return function(t) {
                        this.textContent = d3.format(",d")(Math.round(i(t)));
                    };
                });


            //
            // Add legend
            //

            // Append list
            var legend = d3.select(element)
                .append('ul')
                .attr('class', 'chart-widget-legend')
                .selectAll('li')
                .data(pie(data))
                .enter()
                .append('li')
                .attr('data-slice', function(d, i) {
                    return i;
                })
                .attr('style', function(d, i) {
                    return 'border-bottom: solid 2px ' + d.data.color;
                })
                .text(function(d, i) {
                    return d.data.status + ': ';
                });

            // Append text
            legend.append('span')
                .text(function(d, i) {
                    return d.data.value;
                });
        }
    };

    // Progress arc - single color
    var _progressArcSingle = function(element, size) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Main variables
            var d3Container = d3.select(element),
                radius = size,
                thickness = 20,
                color = '#29B6F6';


            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append("svg");
            
            // Add SVG group
            var svg = container
                .attr('width', radius * 2)
                .attr('height', radius + 20)
                .attr('class', 'gauge');


            // Construct chart layout
            // ------------------------------

            // Pie
            var arc = d3.svg.arc()
                .innerRadius(radius - thickness)
                .outerRadius(radius)
                .startAngle(-Math.PI / 2);


            // Append chart elements
            // ------------------------------

            //
            // Group arc elements
            //

            // Group
            var chart = svg.append('g')
                .attr('transform', 'translate(' + radius + ',' + radius + ')');

            // Background
            var background = chart.append('path')
                .datum({
                    endAngle: Math.PI / 2
                })
                .attr({
                    'd': arc,
                    'fill': '#eee'
                });

            // Foreground
            var foreground = chart.append('path')
                .datum({
                    endAngle: -Math.PI / 2
                })
                .style('fill', color)
                .attr('d', arc);

            // Counter value
            var value = svg.append('g')
                .attr('transform', 'translate(' + radius + ',' + (radius * 0.9) + ')')
                .append('text')
                .text(0 + '%')
                .attr({
                    'text-anchor': 'middle',
                    'fill': '#555'
                })
                .style({
                    'font-size': 19,
                    'font-weight': 400
                });


            //
            // Min and max text
            //

            // Group
            var scale = svg.append('g')
                .attr('transform', 'translate(' + radius + ',' + (radius + 15) + ')')
                .style({
                    'font-size': 12,
                    'fill': '#999'
                });

            // Max
            scale.append('text')
                .text(100)
                .attr({
                    'text-anchor': 'middle',
                    'x': (radius - thickness / 2)
                });

            // Min
            scale.append('text')
                .text(0)
                .attr({
                    'text-anchor': 'middle',
                    'x': -(radius - thickness / 2)
                });


            //
            // Animation
            //

            // Interval
            setInterval(function() {
                update(Math.random() * 100);
            }, 1500);

            // Update
            function update(v) {
                v = d3.format('.0f')(v);
                foreground.transition()
                    .duration(750)
                    .call(arcTween, v);

                value.transition()
                    .duration(750)
                    .call(textTween, v);
            }

            // Arc
            function arcTween(transition, v) {
                var newAngle = v / 100 * Math.PI - Math.PI / 2;
                transition.attrTween('d', function(d) {
                    var interpolate = d3.interpolate(d.endAngle, newAngle);
                    return function(t) {
                        d.endAngle = interpolate(t);
                        return arc(d);
                    };
                });
            }

            // Text
            function textTween(transition, v) {
                transition.tween('text', function() {
                    var interpolate = d3.interpolate(this.innerHTML, v),
                        split = (v + '').split('.'),
                        round = (split.length > 1) ? Math.pow(10, split[1].length) : 1;
                    return function(t) {
                        this.innerHTML = d3.format('.0f')(Math.round(interpolate(t) * round) / round) + '<tspan>%</tspan>';
                    };
                });
            }
        }
    };

    // Progress arc - multiple colors
    var _progressArcMulti = function(element, size, goal) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Main variables
            var d3Container = d3.select(element),
                radius = size,
                thickness = 20,
                startColor = '#66BB6A',
                midColor = '#FFA726',
                endColor = '#EF5350';

            // Colors
            var color = d3.scale.linear()
                .domain([0, 70, 100])
                .range([startColor, midColor, endColor]);


            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append("svg");
            
            // Add SVG group
            var svg = container
                .attr('width', radius * 2)
                .attr('height', radius + 20);


            // Construct chart layout
            // ------------------------------

            // Pie
            var arc = d3.svg.arc()
                .innerRadius(radius - thickness)
                .outerRadius(radius)
                .startAngle(-Math.PI / 2);


            // Append chart elements
            // ------------------------------

            //
            // Group arc elements
            //

            // Group
            var chart = svg.append('g')
                .attr('transform', 'translate(' + radius + ',' + radius + ')');

            // Background
            var background = chart.append('path')
                .datum({
                    endAngle: Math.PI / 2
                })
                .attr({
                    'd': arc,
                    'fill': '#eee'
                });

            // Foreground
            var foreground = chart.append('path')
                .datum({
                    endAngle: -Math.PI / 2
                })
                .style('fill', startColor)
                .attr('d', arc);

            // Counter value
            var value = svg.append('g')
                .attr('transform', 'translate(' + radius + ',' + (radius * 0.9) + ')')
                .append('text')
                .text(0 + '%')
                .attr({
                    'text-anchor': 'middle',
                    'fill': '#555'
                })
                .style({
                    'font-size': 19,
                    'font-weight': 400
                });


            //
            // Min and max text
            //

            // Group
            var scale = svg.append('g')
                .attr('transform', 'translate(' + radius + ',' + (radius + 15) + ')')
                .style({
                    'font-size': 12,
                    'fill': '#999'
                });

            // Max
            scale.append('text')
                .text(100)
                .attr({
                    'text-anchor': 'middle',
                    'x': (radius - thickness / 2)
                });

            // Min
            scale.append('text')
                .text(0)
                .attr({
                    'text-anchor': 'middle',
                    'x': -(radius - thickness / 2)
                });


            //
            // Animation
            //

            // Interval
            setInterval(function() {
                update(Math.random() * 100);
            }, 1500);

            // Update
            function update(v) {
                v = d3.format('.0f')(v);
                foreground.transition()
                    .duration(750)
                    .style('fill', function() {
                        return color(v);
                    })
                    .call(arcTween, v);

                value.transition()
                    .duration(750)
                    .call(textTween, v);
            }

            // Arc
            function arcTween(transition, v) {
                var newAngle = v / 100 * Math.PI - Math.PI / 2;
                transition.attrTween('d', function(d) {
                    var interpolate = d3.interpolate(d.endAngle, newAngle);
                    return function(t) {
                        d.endAngle = interpolate(t);
                        return arc(d);
                    };
                });
            }

            // Text
            function textTween(transition, v) {
                transition.tween('text', function() {
                    var interpolate = d3.interpolate(this.innerHTML, v),
                        split = (v + '').split('.'),
                        round = (split.length > 1) ? Math.pow(10, split[1].length) : 1;
                    return function(t) {
                        this.innerHTML = d3.format('.0f')(Math.round(interpolate(t) * round) / round) + '<tspan>%</tspan>';
                    };
                });
            }
        }
    };

    // Rounded progress - single arc
    var _roundedProgressSingle = function(element, size, goal, color) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Add random data
            var dataset = function () {
                return [
                    {percentage: Math.random() * 100}
                ];
            };

            // Main variables
            var d3Container = d3.select(element),
                padding = 2,
                strokeWidth = 16,
                width = size,
                height = size,
                τ = 2 * Math.PI;


            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append("svg");
            
            // Add SVG group
            var svg = container
                .attr("width", width)
                .attr("height", height)
                .append("g")
                    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


            // Construct chart layout
            // ------------------------------

            // Foreground arc
            var arc = d3.svg.arc()
                .startAngle(0)
                .endAngle(function (d) {
                    return d.percentage / 100 * τ;
                })
                .innerRadius((size / 2) - strokeWidth)
                .outerRadius((size / 2) - padding)
                .cornerRadius(20);

            // Background arc
            var background = d3.svg.arc()
                .startAngle(0)
                .endAngle(τ)
                .innerRadius((size / 2) - strokeWidth)
                .outerRadius((size / 2) - padding);


            // Append chart elements
            // ------------------------------

            //
            // Group arc elements
            //

            // Group
            var field = svg.selectAll("g")
                .data(dataset)
                .enter().append("g");

            // Foreground arc
            field
                .append("path")
                .attr("class", "arc-foreground")
                .attr('fill', color);

            // Background arc
            field
                .append("path")
                .attr("d", background)
                .style({
                    "fill": color,
                    "opacity": 0.2
                });


            //
            // Text
            //

            // Goal
            field
                .append("text")
                .text("Out of " + goal)
                .attr("transform", "translate(0,20)")
                .style({
                    'font-size': 11,
                    'fill': '#999',
                    'font-weight': 500,
                    'text-transform': 'uppercase',
                    'text-anchor': 'middle'
                });

            // Count
            field
                .append("text")
                .attr('class', 'arc-goal-completed')
                .attr("transform", "translate(0,0)")
                .style({
                    'font-size': 23,
                    'font-weight': 500,
                    'text-anchor': 'middle'
                });


            //
            // Animate elements
            //

            // Add transition
            d3.transition().duration(2500).each(update);


            // Animation
            function update() {
                field = field
                    .each(function (d) {
                        this._value = d.percentage;
                    })
                    .data(dataset)
                    .each(function (d) {
                        d.previousValue = this._value;
                    });

                // Foreground arc
                field
                    .select(".arc-foreground")
                    .transition()
                    .duration(600)
                    .ease("easeInOut")
                    .attrTween("d", arcTween);
                    
                // Update count text
                field
                    .select(".arc-goal-completed")
                    .text(function (d) {
                        return Math.round(d.percentage /100 * goal);
                    });

                // Animate count text
                svg.select('.arc-goal-completed')
                    .transition()
                    .duration(600)
                    .tween("text", function(d) {
                        var i = d3.interpolate(this.textContent, d.percentage);
                        return function(t) {
                            this.textContent = Math.floor(d.percentage/100 * goal);
                        };
                    });

                // Update every 4 seconds (for demo)
                setTimeout(update, 4000);
            }

            // Arc animation
            function arcTween(d) {
                var i = d3.interpolateNumber(d.previousValue, d.percentage);
                return function (t) {
                    d.percentage = i(t);
                    return arc(d);
                };
            }
        }
    };

    // Rounded progress - multiple arcs
    var _roundedProgressMultiple = function(element, size) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Add random data
            var data = [
                    {index: 0, name: 'Memory', percentage: 0},
                    {index: 1, name: 'CPU', percentage: 0},
                    {index: 2, name: 'Sessions', percentage: 0}
                ];

            // Main variables
            var d3Container = d3.select(element),
                padding = 2,
                strokeWidth = 8,
                width = size,
                height = size,
                τ = 2 * Math.PI;

            // Colors
            var colors = ['#78909C', '#F06292', '#4DB6AC'];


            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append("svg");
            
            // Add SVG group
            var svg = container
                .attr("width", width)
                .attr("height", height)
                .append("g")
                    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


            // Construct chart layout
            // ------------------------------

            // Foreground arc
            var arc = d3.svg.arc()
                .startAngle(0)
                .endAngle(function (d) {
                    return d.percentage / 100 * τ;
                })
                .innerRadius(function (d) {
                    return (size / 2) - d.index * (strokeWidth + padding);
                })
                .outerRadius(function (d) {
                    return ((size / 2) - d.index * (strokeWidth + padding)) - strokeWidth;
                })
                .cornerRadius(20);

            // Background arc
            var background = d3.svg.arc()
                .startAngle(0)
                .endAngle(τ)
                .innerRadius(function (d) {
                    return (size / 2) - d.index * (strokeWidth + padding);
                })
                .outerRadius(function (d) {
                    return ((size / 2) - d.index * (strokeWidth + padding)) - strokeWidth;
                });


            // Append chart elements
            // ------------------------------

            //
            // Group arc elements
            //

            // Group
            var field = svg.selectAll("g")
                .data(data)
                .enter().append("g");

            // Foreground arcs
            field
                .append("path")
                .attr("class", "arc-foreground")
                .style("fill", function (d, i) {
                    return colors[i];
                });

            // Background arcs
            field
                .append("path")
                .style("fill", function (d, i) {
                    return colors[i];
                })
                .style("opacity", 0.1)
                .attr("d", background);


            //
            // Add legend
            //

            // Append list
            var legend = d3.select(element)
                .append('ul')
                .attr('class', 'chart-widget-legend text-muted')
                .selectAll('li')
                .data(data)
                .enter()
                .append('li')
                .attr('data-slice', function(d, i) {
                    return i;
                })
                .attr('style', function(d, i) {
                    return 'border-bottom: solid 2px ' + colors[i];
                })
                .text(function(d, i) {
                    return d.name;
                });


            //
            // Animate elements
            //

            // Add transition
            d3.transition().each(update);

            // Animation
            function update() {
                field = field
                    .each(function (d) {
                        this._value = d.percentage;
                    })
                    .data(data)
                    .each(function (d) {
                        d.previousValue = this._value;
                        d.percentage = Math.round(Math.random() * 100) + 1;
                    });

                // Foreground arcs
                field
                    .select("path.arc-foreground")
                    .transition()
                    .duration(750)
                    .ease("easeInOut")
                    .attrTween("d", arcTween);
                    
                // Update every 4 seconds
                setTimeout(update, 4000);
            }

            // Arc animation
            function arcTween(d) {
                var i = d3.interpolateNumber(d.previousValue, d.percentage);
                return function (t) {
                    d.percentage = i(t);
                    return arc(d);
                };
            }
        }
    };

    // Pie with progress bar
    var _pieWithProgress = function(element, size) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Demo dataset
            var dataset = [
                    { name: 'New', count: 639 },
                    { name: 'Pending', count: 255 },
                    { name: 'Shipped', count: 215 }
                ];

            // Main variables
            var d3Container = d3.select(element),
                total = 0,
                width = size,
                height = size,
                progressSpacing = 6,
                progressSize = (progressSpacing + 2),
                arcSize = 20,
                outerRadius = (width / 2),
                innerRadius = (outerRadius - arcSize);

            // Colors
            var color = d3.scale.ordinal()
                .range(['#EF5350', '#29b6f6', '#66BB6A']);


            // Create chart
            // ------------------------------

            // Add svg element
            var container = d3Container.append("svg");
            
            // Add SVG group
            var svg = container
                .attr("width", width)
                .attr("height", height)
                .append("g")
                    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


            // Construct chart layout
            // ------------------------------

            // Add dataset
            dataset.forEach(function(d){
                total+= d.count;
            });

            // Pie layout
            var pie = d3.layout.pie()
                .value(function(d){ return d.count; })
                .sort(null);

            // Inner arc
            var arc = d3.svg.arc()
                .innerRadius(innerRadius)
                .outerRadius(outerRadius);

            // Line arc
            var arcLine = d3.svg.arc()
                .innerRadius(innerRadius - progressSize)
                .outerRadius(innerRadius - progressSpacing)
                .startAngle(0);


            // Append chart elements
            // ------------------------------

            //
            // Animations
            //
            var arcTween = function(transition, newAngle) {
                transition.attrTween("d", function (d) {
                    var interpolate = d3.interpolate(d.endAngle, newAngle);
                    var interpolateCount = d3.interpolate(0, dataset[0].count);
                    return function (t) {
                        d.endAngle = interpolate(t);
                        middleCount.text(d3.format(",d")(Math.floor(interpolateCount(t))));
                        return arcLine(d);
                    };
                });
            };


            //
            // Donut paths
            //

            // Donut
            var path = svg.selectAll('path')
                .data(pie(dataset))
                .enter()
                .append('path')
                .attr('d', arc)
                .attr('fill', function(d, i) {
                    return color(d.data.name);
                })
                .style({
                    'stroke': '#fff',
                    'stroke-width': 2,
                    'cursor': 'pointer'
                });

            // Animate donut
            path
                .transition()
                .delay(function(d, i) { return i; })
                .duration(600)
                .attrTween("d", function(d) {
                    var interpolate = d3.interpolate(d.startAngle, d.endAngle);
                    return function(t) {
                        d.endAngle = interpolate(t);
                        return arc(d);  
                    }; 
                });


            //
            // Line path 
            //

            // Line
            var pathLine = svg.append('path')
                .datum({endAngle: 0})
                .attr('d', arcLine)
                .style({
                    fill: color('New')
                });

            // Line animation
            pathLine.transition()
                .duration(600)
                .delay(300)
                .call(arcTween, (2 * Math.PI) * (dataset[0].count / total));


            //
            // Add count text
            //

            var middleCount = svg.append('text')
                .datum(0)
                .attr('dy', 6)
                .style({
                    'font-size': '21px',
                    'font-weight': 500,
                    'text-anchor': 'middle'
                })
                .text(function(d){
                    return d;
                });            


            //
            // Add interactions
            //

            // Mouse
            path
                .on('mouseover', function(d, i) {
                    $(element + ' [data-slice]').css({
                        'opacity': 0.3,
                        'transition': 'all ease-in-out 0.15s'
                    });
                    $(element + ' [data-slice=' + i + ']').css({'opacity': 1});
                })
                .on('mouseout', function(d, i) {
                    $(element + ' [data-slice]').css('opacity', 1);
                });


            //
            // Add legend
            //

            // Append list
            var legend = d3.select(element)
                .append('ul')
                .attr('class', 'chart-widget-legend')
                .selectAll('li')
                .data(pie(dataset))
                .enter()
                .append('li')
                .attr('data-slice', function(d, i) {
                    return i;
                })
                .attr('style', function(d, i) {
                    return 'border-bottom: solid 2px ' + color(d.data.name);
                })
                .text(function(d, i) {
                    return d.data.name + ': ';
                });

            // Append legend text
            legend.append('span')
                .text(function(d, i) {
                    return d.data.count;
                });
        }
    };

    // Segmented gauge
    var _segmentedGauge = function(element, size, min, max, sliceQty) {
        if (typeof d3 == 'undefined') {
            //console.warn('Warning - d3.min.js is not loaded.');
            return;
        }

        // Initialize chart only if element exsists in the DOM
        if(element) {

            // Main variables
            var d3Container = d3.select(element),
                width = size,
                height = (size / 2) + 20,
                radius = (size / 2),
                ringInset = 15,
                ringWidth = 20,

                pointerWidth = 10,
                pointerTailLength = 5,
                pointerHeadLengthPercent = 0.75,
                
                minValue = min,
                maxValue = max,
                
                minAngle = -90,
                maxAngle = 90,
                
                slices = sliceQty,
                range = maxAngle - minAngle,
                pointerHeadLength = Math.round(radius * pointerHeadLengthPercent);

            // Colors
            var colors = d3.scale.linear()
                .domain([0, slices - 1])
                .interpolate(d3.interpolateHsl)
                .range(['#66BB6A', '#EF5350']);


            // Create chart
            // ------------------------------

            // Add SVG element
            var container = d3Container.append('svg');

            // Add SVG group
            var svg = container
                .attr('width', width)
                .attr('height', height);


            // Construct chart layout
            // ------------------------------
            
            // Donut  
            var arc = d3.svg.arc()
                .innerRadius(radius - ringWidth - ringInset)
                .outerRadius(radius - ringInset)
                .startAngle(function(d, i) {
                    var ratio = d * i;
                    return deg2rad(minAngle + (ratio * range));
                })
                .endAngle(function(d, i) {
                    var ratio = d * (i + 1);
                    return deg2rad(minAngle + (ratio * range));
                });

            // Linear scale that maps domain values to a percent from 0..1
            var scale = d3.scale.linear()
                .range([0, 1])
                .domain([minValue, maxValue]);
                
            // Ticks
            var ticks = scale.ticks(slices);
            var tickData = d3.range(slices)
                .map(function() {
                    return 1 / slices;
                });

            // Calculate angles
            function deg2rad(deg) {
                return deg * Math.PI / 180;
            }
                
            // Calculate rotation angle
            function newAngle(d) {
                var ratio = scale(d);
                var newAngle = minAngle + (ratio * range);
                return newAngle;
            }


            // Append chart elements
            // ------------------------------

            //
            // Append arc
            //

            // Wrap paths in separate group
            var arcs = svg.append('g')
                .attr('transform', "translate(" + radius + "," + radius + ")")
                .style({
                    'stroke': '#fff',
                    'stroke-width': 2,
                    'shape-rendering': 'crispEdges'
                });

            // Add paths
            arcs.selectAll('path')
                .data(tickData)
                .enter()
                .append('path')
                .attr('fill', function(d, i) {
                    return colors(i);
                })
                .attr('d', arc);


            //
            // Text labels
            //

            // Wrap text in separate group
            var arcLabels = svg.append('g')
                .attr('transform', "translate(" + radius + "," + radius + ")");

            // Add text
            arcLabels.selectAll('text')
                .data(ticks)
                .enter()
                .append('text')
                .attr('transform', function(d) {
                    var ratio = scale(d);
                    var newAngle = minAngle + (ratio * range);
                    return 'rotate(' + newAngle + ') translate(0,' + (10 - radius) + ')';
                })
                .style({
                    'text-anchor': 'middle',
                    'font-size': 11,
                    'fill': '#999'
                })
                .text(function(d) { return d + "%"; });


            //
            // Pointer
            //

            // Line data
            var lineData = [
                [pointerWidth / 2, 0], 
                [0, -pointerHeadLength],
                [-(pointerWidth / 2), 0],
                [0, pointerTailLength],
                [pointerWidth / 2, 0]
            ];

            // Create line
            var pointerLine = d3.svg.line()
                .interpolate('monotone');

            // Wrap all lines in separate group
            var pointerGroup = svg
                .append('g')
                .data([lineData])
                .attr('transform', "translate(" + radius + "," + radius + ")");

            // Paths
            pointer = pointerGroup
                .append('path')
                .attr('d', pointerLine)
                .attr('transform', 'rotate(' + minAngle + ')');


            // Random update
            // ------------------------------

            // Update values
            function update() {
                var ratio = scale(Math.random() * max);
                var newAngle = minAngle + (ratio * range);
                pointer.transition()
                    .duration(2500)
                    .ease('elastic')
                    .attr('transform', 'rotate(' + newAngle + ')');
            }
            update();

            // Update values every 5 seconds
            setInterval(function() {
                update();
            }, 5000);
        }
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _areaChartWidget("#chart_area_basic", 50, '#5C6BC0');
            _areaChartWidget("#chart_area_color", 50, 'rgba(255,255,255,0.75)');

            _barChartWidget("#chart_bar_basic", 24, 50, true, "elastic", 1200, 50, "#EF5350", "members");
            _barChartWidget("#chart_bar_color", 24, 50, true, "elastic", 1200, 50, "rgba(255,255,255,0.75)", "members");

            _lineChartWidget('#line_chart_simple', 50, '#2196F3', 'rgba(33,150,243,0.5)', '#2196F3', '#fff');
            _lineChartWidget('#line_chart_color', 50, '#fff', 'rgba(255,255,255,0.5)', '#fff', '#29B6F6');

            _sparklinesWidget("#sparklines_basic", "area", 30, 50, "basis", 750, 2000, "#66BB6A");
            _sparklinesWidget("#sparklines_color", "area", 30, 50, "basis", 750, 2000, "rgba(255,255,255,0.75)");

            _progressIcon('#progress_icon_one', 42, 2.5, "#eee", "#EF5350", 0.68, "icon-heart6");
            _progressIcon('#progress_icon_two', 42, 2.5, "#eee", "#5C6BC0", 0.82, "icon-trophy3");
            _progressIcon('#progress_icon_three', 42, 2.5, "#00897B", "#fff", 0.73, "icon-bag");
            _progressIcon('#progress_icon_four', 42, 2.5, "#673AB7", "#fff", 0.49, "icon-truck");

            _progressPercentage('#progress_percentage_one', 46, 3, "#eee", "#2196F3", 0.79);
            _progressPercentage('#progress_percentage_two', 46, 3, "#eee", "#EF5350", 0.62);
            _progressPercentage('#progress_percentage_three', 46, 3, "#039BE5", "#fff", 0.69);
            _progressPercentage('#progress_percentage_four', 46, 3, "#E53935", "#fff", 0.43);

            _animatedPie("#pie_basic", 120);
            _animatedPieWithLegend("#pie_basic_legend", 120);
            _pieArcWithLegend("#pie_arc_legend", 170);
            _animatedDonut("#donut_basic_stats", 120);
            _animatedDonutWithLegend("#donut_basic_legend", 120);
            _donutWithDetails("#donut_basic_details", 146);
            _progressArcSingle("#arc_single", 78);
            _progressArcMulti("#arc_multi", 78, 700);
            _roundedProgressSingle("#rounded_progress_single", 150, 700, '#EC407A');
            _roundedProgressMultiple("#rounded_progress_multiple", 140);
            _pieWithProgress("#pie_progress_bar", 146);
            _segmentedGauge("#segmented_gauge", 200, 0, 100, 5);
        }
    }
}();


// Initialize module
// ------------------------------

// When content loaded
document.addEventListener('DOMContentLoaded', function() {
    StatisticWidgets.init();
});








