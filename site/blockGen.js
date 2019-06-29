//Главная менюшка
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

}
//main подблок
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
            css: {
                "border":"#446FBB outset 5px",
            }
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
    ////////////////////////////////
function addBlockMenuKey(jQueryId,newIdK){
    $(jQueryId).append(jQuery('<div/>', {
        class: 'drag col-md-4',
        css: {
            "max-width" : "15rem"
        },
        id : newIdK
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
                class: 'form-control',
                id: 'menuName-'+newIdK,
                rows: 1,
                placeholder: "Список ключевых слов",
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
                    id : 'remove-'+newIdK

                }).append(jQuery('<span/>' , {'aria-hidden': true, text: '×'}))),
                jQuery('<div/>',{
                    class:'number_button',
                    align:'left'

                }).append(
                    jQuery('<button/>',{
                        class:'btn btn-outline-danger',
                        type:'button',
                        id:'shluz-' + newIdK
                    })
                )),
            jQuery('<div/>',{
                class: "card border-dark mb-3",
                'maxWidth': '16rem',
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
                    id:'remove-'+newIdK,
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
                    id: "item-"+newIdK,
                    type: "text",
                    placeholder: "Слово"
                })).append(jQuery('<div/>', {
                    class: 'number_button',
                    align: 'right',
                }).append(jQuery('<button/>', {
                    type: "button",
                    class: "btn btn-primary",
                    "aria-haspopup": "true",
                    "aria-hidden": "true",
                    text: "+",
                    id : "addArrowBTN-"+newIdK
                }))),
                //////////////////////////

                jQuery("<div/>",{
                    class:"add_button_outside",
                    align:"center"

                }).append(jQuery("<button/>",{
                    type: "button",
                    class: "btn btn-success",
                    "aria-haspopup": "true",
                    "aria-hidden": "true",
                    text: "+",
                    id : "addArrowBTN-"+newIdK
                })),
            )),


            jQuery('<div/>', {
                class: 'card-body text-dark',
                id:'containerMenu-'+ newIdK

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
                id:'addItemMenu-'+newIdK
            })))
        )
    ))
/////////////////////////////////////////////////////////////////////////////////////
}
//подменюшка ключевых слов
function addItemInMenuKey(jQueryId,newIdK) {
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
            id:'remove-'+newIdK,
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
            id: "item-"+newIdK,
            type: "text",
            placeholder: "Слово"
        })),
        //////////////////////////
        jQuery('<div/>', {
            class: 'number_button',
            align: 'right',
        }).append(jQuery('<button/>', {
            type: "button",
            class: "btn btn-primary",
            "aria-haspopup": "true",
            "aria-hidden": "true",
            text: "+",
            id : "addArrowBTN-"+newIdK
        })),
        jQuery("<div/>",{
            class:"add_button_outside",
            align:"center"

        }).append(jQuery("<button/>",{
            type: "button",
            class: "btn btn-success",
            "aria-haspopup": "true",
            "aria-hidden": "true",
            text: "+",
            id : "addArrowBTN-"+newIdK
        })),
    )))}
function AddkeyWords(jQueryId,newIdK) {
   $(jQueryId).append()
}
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
// jQuery('<div/>', {
//     class: 'button_close_outside',
// }).append(jQuery('<button/>', {
//         type: 'button',
//         class: 'btn btn-outline-danger',
//     },
// jQuery('<div/>', {
//     class: 'button_close_outside',
// }).append(jQuery('<button/>', {
//     type: 'button',
//         class: 'btn btn-outline-danger',
//     },
//     jQuery('<div/>', {
//         class: 'card-body text-dark',
//     }),