/**
 ////////////////////////////////////////////////////////////////////////
 //              **** Добавление main block****                        //
 ////////////////////////////////////////////////////////////////////////
 */
function addBlockMenu(jQueryId,newId){
        $(jQueryId).append(jQuery('<div/>', {
            class: 'drag col-md-4',
            css: {
                "z-index":"10",
                "position":"absolute",
                "max-width" : "20rem",
                'margin':'10px'
            },
            id : newId
        }).append(
            jQuery('<div/>', {
                class: 'card border-dark mb-3',
                css: {
                    'maxWidth': '18rem',
                    'padding': '1.25rem'
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
/**
 ////////////////////////////////////////////////////////////////////////
 //              **** Добавление подменю в main block****              //
 ////////////////////////////////////////////////////////////////////////
 */
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

        }),
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

)))))}
/**
 ////////////////////////////////////////////////////////////////////////
 //              **** Добавление ключевого меню****                    //
 ////////////////////////////////////////////////////////////////////////
 */
function addBlockMenuKey(jQueryId,newIdK){
    $(jQueryId).append(jQuery('<div/>', {

        class: 'drag col-md-4',
        id : newIdK,
        css: {
            "max-width": "20em",
            "z-index":"10",
            "position":"absolute",
            'margin':'10px'
        },

    }).append(
        jQuery('<div/>', {
            class: 'card border-dark mb-3',
            css: {
                'max-width': '18rem',
                'padding': '1.25rem'

            }
        }).append(
            jQuery('<div/>', {
                class: 'form-group',
            }).append(jQuery('<textarea/>', {
                class: 'form-control',
                id: 'menuName-'+newIdK,
                rows: 1,
                placeholder: "Ключевых слова",
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
            jQuery('<div/>', {
                class: 'card-body text-dark',
                id:'ContainerSubMenuKeyWord'

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
            }))))))

}
/**
 ////////////////////////////////////////////////////////////////////////
 //              **** Ключевые слова|подменю|****                    //
 ////////////////////////////////////////////////////////////////////////
 */
function addSubMenuKeyWord(jQueryId,newIdSmK) {

    $(jQueryId).append(jQuery('<div/>',{
        class:'card border-dark mb-3',
        css:{
            position: 'relative'
        }
        }).append(jQuery('<div/>',{
           class: 'bnt',
        }).append(jQuery('<div/>', {
        class:'up_bar_outside',
        align:'left'
        }).append( jQuery('<div/>', {
            class: 'button_close_outside',
        }).append(jQuery('<button/>', {
            type: 'button',
        class: 'close',
        'aria-label': 'Close',
        id : 'remove-'+newIdSmK
        }).append(jQuery('<span/>' , {'aria-hidden': true, text: '×'}))),
 //////////////////////////////////////////////////////////////////////////
        jQuery('<div/>', {class: 'header',
            id:'ContainerKeyWords-'+newIdSmK,
            align: 'center'
         }).append(jQuery("<button/>",{
            type: "button",
            class: "btn btn-success",
            "aria-haspopup": "true",
            "aria-hidden": "true",
            text: "+",
            id : 'addKeyWord-'+newIdSmK
         }),jQuery('<button/>',{
            type: "button",
            class: "btn btn-primary",
            "aria-haspopup": "true",
            "aria-hidden": "true",
            text: "+",
            id : "Row-WordKey-"+newIdSmK,
            css:{
                position: 'absolute',
                right: "-40px",
            }

        })
        )))))
}
/**
 ////////////////////////////////////////////////////////////////////////
 //              **** Ключевые слова в подменю****                    //
 ////////////////////////////////////////////////////////////////////////
 */
function addWordKey(jQueryId,newIdK) {
    $(jQueryId).append(jQuery('<div/>', {
        id:'Block-WordKey'+newIdK,
        align: 'center'

    }).append(jQuery('<div/>', {
            class: 'button_close_inside',
            align: 'right',
            css:{
                position: "relative",

            }
        }).append(jQuery('<button/>', {
                type: 'button',
                class: 'close',
                id:'remove-'+newIdK,
                position: 'right',
                'aria-label': 'Close'
             }).append(jQuery('<span/>', {
                 'aria-hidden': true, text: '×',
                    css:{
                        position: "absolute",
                        right:"20px",
                        bottom:"10px",

                    }
             }))).append(jQuery('<input/>', {
                    class: "form-control",
                    name: "menu_name",
                    id: "item-"+newIdK,
                    type: "text",
                    placeholder: "Слово"
        })),

        (jQuery('<div/>', {
            class: 'number_button',
            align: 'right',
            }))
        ),
    )
}
/**
 ////////////////////////////////////////////////////////////////////////
 //              **** Добавление статических слов****                  //
 ////////////////////////////////////////////////////////////////////////
 */
function addBlockMenuStaticKey(jQueryId,newIdSK) {
    $(jQueryId).append(jQuery('<div/>', {
        class: 'drag col-md-4',
        css:{
            "position":"absolute",
            "z-index":"10",
            "max-width": "20em",
        },
        id: newIdSK,
        'margin': '10px',

    }).append(
        jQuery('<div/>', {
            class: 'card border-dark mb-3',
            css: {
                'max-width': '18rem',
                'padding': '1.25rem'

            }
        }).append(
            jQuery('<div/>', {
                class: 'form-group',
            }).append(jQuery('<textarea/>', {
                class: 'form-control',
                id: 'menuName-' + newIdSK,
                rows: 1,
                placeholder: "Cтатические слова",
                css: {
                    resize: "none"
                }
            })),
            jQuery('<div/>', {
                class: 'up_bar_outside',
                align: 'left'
            }).append(jQuery('<div/>', {
                    class: 'button_close_outside',
                }).append(jQuery('<button/>', {
                    type: 'button',
                    class: 'close',
                    'aria-label': 'Close',
                    id: 'remove-' + newIdSK

                }).append(jQuery('<span/>', {'aria-hidden': true, text: '×'}))),
                jQuery('<div/>', {
                    class: 'number_button',
                    align: 'left'

                }).append(
                    jQuery('<button/>', {
                        class: 'btn btn-outline-danger',
                        type: 'button',
                        id: 'shluz-' + newIdSK
                    })
                )),
            jQuery('<div/>', {
                class: 'card-body text-dark',
                id: 'Prosto-block-4tobi-porasivee-bilo'

            }),

            jQuery('<div/>', {
                class: "card border-dark mb-3",
                'maxWidth': '16rem',
            }).append(jQuery('<div/>', {
                    class: 'bnt',
                    align: 'right',
                    position: 'right'
                }),
                //////////////////////////

                jQuery('<div/>', {
                    class: 'header',
                    id: 'ContainerStaticWords',
                    align: 'center',
                }).append(
                    jQuery("<div/>", {
                        class: "add_button_outside",
                        align: "center"

                    }).append(jQuery("<button/>", {
                        type: "button",
                        class: "btn btn-success",
                        "aria-haspopup": "true",
                        "aria-hidden": "true",
                        text: "+",
                        id: 'addItemMenu-' + newIdSK
                    })),

                )
            ),
        )
    ))
}
/**
 ////////////////////////////////////////////////////////////////////////
 //              **** Добавление статических слов****                    //
 ////////////////////////////////////////////////////////////////////////
 */
function addStaticWords(jQueryId,newIdSK) {
    $(jQueryId).append(jQuery('<div/>', {
            id:'Block-StaticWord'+newIdSK,
            align: 'center'

        }).append(jQuery('<div/>', {
            class: 'button_close_inside',
            align: 'right',
        }).append(jQuery('<button/>', {
            type: 'button',
            class: 'close',
            id:'remove-'+newIdSK,
            position: 'right',
            'aria-label': 'Close'
        }).append(jQuery('<span/>', {'aria-hidden': true, text: '×'}))).append(jQuery('<input/>', {
            class: "form-control",
            name: "menu_name",
            id: "item-"+newIdSK,
            type: "text",
            placeholder: "Слово"
        })),
        (jQuery('<div/>', {
            class: 'number_button',
            align: 'right',
        }).append(jQuery('<button/>', {
            type: "button",
            class: "btn btn-primary",
            "aria-haspopup": "true",
            "aria-hidden": "true",
            text: "+",
            id : "Row-StaticWord-"+newIdSK
        }))
        )
    ))
}

