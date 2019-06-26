function addBlockMenu(jQueryId,newId){
        $(jQueryId).append(jQuery('<div/>', {
            class: 'drag col-md-4',
            css: {
                "max-width" : "15rem"
            },
            id : newId
        }).append(
            jQuery('<div/>', {
                class: 'card border-dark mb-3',
                css: {
                    'maxWidth': '18rem',
                }
            }).append(
                jQuery('<div/>', {
                    class: 'form-group',
                }).append(jQuery('<textarea/>', {
                    name: 'menu_name',
                    class: 'form-control',
                    id: 'menuName-'+newId,
                    rows: 1,
                    placeholder: "Введите название меню",
                    css: {
                        resize: "none"
                    }
                })),
                    jQuery('<div/>', {
                        class:'up_bar_outside',
                        align:'left'
                    }).append( jQuery('<div/>', {
                            class: 'button_close_outside',
                        }).append(jQuery('<button/>', {
                            type: 'button',
                            class: 'close',
                            'aria-label': 'Close',
                            id : 'remove-'+newId

                        }).append(jQuery('<span/>' , {'aria-hidden': true, text: '×'}))),
                            jQuery('<div/>',{
                                 class:'number_button',
                                align:'left'

                        }).append(
                             jQuery('<button/>',{
                                 class:'btn btn-outline-danger',
                                 type:'button',
                                 id:'shluz-' + newId
                        })
                )),

                jQuery('<div/>', {
                    class: 'card-body text-dark',
                    id:'containerMenu-'+ newId

                }),
                jQuery('<div/>', {
                    class: "bnt",
                    align: "right"
                }).append(jQuery('<div/>', {
                    class: "add_button_outside",
                }).append(jQuery('<button/>', {
                    type: "button",
                    class: "btn btn-success",
                    "aria-haspopup": true,
                    "aria-hidden": true,
                    text: "+",
                    id:'addItemMenu-'+newId
                })))
            )
        ))
        let text = ("#menuName-blockMenu-0").val();
        console.log("text", text);
}


function addItemInMenu(jQueryId,newId) {
    $(jQueryId).append(jQuery('<div/>', {
        class: 'card border-dark mb-3',
        css: {
            'maxWidth': '16rem',
                }
    }).append(jQuery('<div/>',{
            class: 'bnt',
            align: 'right',
            position: 'right'
          }).append(jQuery('<div/>', {
            class: 'button_close_inside',
            align: 'right',
        }).append(jQuery('<button/>', {
            type: 'button',
            class: 'close',
            id:'remove-'+newId,
            position: 'right',
            'aria-label': 'Close'
        }).append(jQuery('<span/>', {'aria-hidden': true, text: '×'}))),
        //////////////////////////
        jQuery('<div/>', {
            class: 'header',
            align: 'center',
        }).append(jQuery('<input/>', {
            class: "form-control",
            name: "menu_name",
            id: "item-"+newId,
            type: "text",
            placeholder: "Введите название пункта"
        })),
        //////////////////////////
        jQuery('<div/>', {
            class: 'bnt',
            align: 'right',
        }).append(jQuery('<div/>', {
            class: "add_button_inside",
        }).append(jQuery('<button/>', {
            type: "button",
            class: "btn btn-primary",
            "aria-haspopup": "true",
            "aria-hidden": "true",
            text: "+",
            id : "addArrowBTN-"+newId
        }))),
)))}
