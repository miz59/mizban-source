import componentJson from "../../../../commands/componentJson.js";

const category = {
    components: {id: "components_category", label: "Components",open: true  },
    heading: {id: "heading_category", label: "Heading", open: false},
    basic: {id: "basic_category", label: "Basic", open: true},
    form: {id: "form_category", label: "Forms", open: false},
    layouts: {id: "layouts_category", label: "Layouts",open: true},
}
function base_blocks(editor) {

    Object.keys(componentJson).forEach(key => {
        const componentCode = componentJson[key].code;
        const componentName = key.replace('.html', '');    
        try {
            editor.Blocks.add(key, {
                label: `${componentJson[key].icon}<span>${componentName}</span>`,
                attributes: {class: "flex"},
                category: category.components,
                content: componentCode
            });
        } catch (error) {}
    });
    
    
    editor.Blocks.add("column", {
        label: `<i class="fa-regular fa-square"></i><span>column</span>`,
        attributes: {class: "block"},
        category: category.layouts,
        content: {
            tagName: "div",
            attributes: {class: "row"},
            components: [
                {
                    tagName: "div",
                    attributes: {class: "cell"},
                }
            ]
        },
    });

    editor.Blocks.add("column_2", {
        label: `<i class="fa-solid fa-table-columns"></i><span>column 2</span>`,
        attributes: {class: "block"},
        category: category.layouts,
        content: {
            tagName: "div",
            attributes: {class: "row"},
            components: [
                {
                    tagName: "div",
                    attributes: {class: "cell"},
                },
                {
                    tagName: "div",
                    attributes: {class: "cell"},
                }
            ]
        },
    });


    editor.Blocks.add("column_3", {
        label: `<i class="fas fa-columns"></i><span>column 3</span>`,
        attributes: {class: "block"},
        category: category.layouts,
        content: {
            tagName: "div",
            attributes: {class: "row"},
            components: [
                {
                    tagName: "div",
                    attributes: {class: "cell"},
                },
                {
                    tagName: "div",
                    attributes: {class: "cell"},
                },
                {
                    tagName: "div",
                    attributes: {class: "cell"},
                }
            ]
        },
    });


    editor.Blocks.add("2_column_3_7", {
        label: `<i class="fas fa-columns"></i><span>2 column 3/7</span>`,
        attributes: {class: "block"},
        category: category.layouts,
        content: {
            tagName: "div",
            attributes: {class: "row"},
            components: [
                {
                    tagName: "div",
                    attributes: {class: "cell"},
                    style: {'flex-basis': "30%"}
                },
                {
                    tagName: "div",
                    attributes: {class: "cell"},
                    style: {'flex-basis': "70%"}

                }
            ]
        },
    });


    editor.Blocks.add(`p_tag`, {
        activate: !0,
        label: `<i>T</i><span>text</span>`,
        attributes: {class: `block`},
        category: category.basic,
        content: {
            type: "text",
            tagName: "p",
            content: `this is a paragraph `,
            draggable: true,
            droppable: true,
        },

    });


    editor.Blocks.add(`link`, {
        label: `<i class="fa fa-link"></i><span>link</span>`,
        attributes: {class: `block`},
        category: category.basic,

        content: {
            type: "link",
            tagName: `a`,
            attributes: {class: "blocks"},
            content: `Link`,
            draggable: true,
            droppable: true,

        },
    });
    editor.Blocks.add(`miz-link`, {
        label: `<i class="fa fa-link"></i><span>miz link</span>`,
        attributes: {class: `block`},
        category: category.basic,

        content: {
            type: "link",
            tagName: `p`,
            attributes: {class: "d-none"},
            content: `Link`,
            draggable: true,
            droppable: true,

        },
    });


    editor.Blocks.add("image", {
        label: `<i class="fa fa-image"></i><span>image</span>`,
        attributes: {class: "block"},
        draggable: true,
        category: category.basic,
        tagName: "img",
        content: `<img />`,
        type: "image"

    });
    editor.Blocks.add("video", {
        label: `<i class="fa fa-play"></i><span>video</span>`,
        attributes: {class: "block"},
        category: category.basic,

        content: {
            type: "video",
            tagName: "video",
            attributes: {'allowfullscreen': "allowfullscreen", controls: true},
        }

    })

    editor.Blocks.add("map", {
        label: `<i class="fa fa-map"></i><span>map</span>`,
        attributes: {class: "block"},
        category: category.basic,

        content: {
            type: "map",
            tagName: "iframe",
            attributes: {
                'frameborder': "0",
                'src': "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d861.272843549974!2d57.06735306954719!3d30.291460256430028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f02184bfc0355cd%3A0xce133debff159061!2sEsperlos!5e0!3m2!1sen!2sae!4v1720520144670!5m2!1sen!2sae",
                'width': "600",
                'height': "350",
                'loading': "lazy",
                'referrerpolicy': "no-referrer-when-downgrade",
            },

        }
    });


    editor.Blocks.add(`link_block`, {
        label: `<i class="fa fa-paperclip"></i><span>link block</span>`,
        attributes: {class: `block`},
        category: category.basic,

        content: {
            type: "link",
            tagName: `a`,
            attributes: {class: "blocks"},
            content: ``,
            draggable: true,
            droppable: true,

        },
    });

    editor.Blocks.add("quote", {
        label: `<i class="fa fa-quote-right"></i><span>quote</span>`,
        attributes: {class: "block"},
        category: category.basic,
        content: {
            type: "text",
            tagName: 'blockquote',
            attributes: {class: "quote"},
            content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit",
        }

    })

    editor.Blocks.add("text_section", {
        label: `<i class="fa fa-align-center"></i><span>text section</span>`,
        attributes: {class: "block"},
        category: category.basic,

        content: {
            tagName: "section",
            attributes: {class: "bdg-sect"},
            components: [
                {
                    tagName: "h1",
                    type: "text",
                    attributes: {class: "heading"},
                    content: `insert title here`
                },
                {
                    tagName: "p",
                    type: "text",
                    attributes: {class: "paragraph"},
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`

                }
            ]
        }
    })

    //basic blocks end
    // form blocks start

    editor.Blocks.add('form', {
        label: `<i class="fa fa-table"></i></i><span>form</span>`,
        attributes: {class: "block"},
        category: category.form,

        content: {
            tagName: "form",
            attributes: {method: "get"},
            components: [
                {
                    components: [
                        {
                            tagName: "label",
                            type: "text",
                            content: "Name"
                        },
                        {
                            tagName: "input",
                            attributes: {type: "text"}
                        }
                    ]
                },
                {
                    components: [
                        {
                            tagName: "label",
                            type: "text",
                            content: "email"
                        },

                        {
                            tagName: "input",
                            attributes: {type: "email"}
                        },
                    ]
                },
                {
                    components: [
                        {
                            tagName: "label",
                            type: "text",
                            content: "gender"
                        },
                        {
                            tagName: "input",
                            attributes: {type: "checkbox", value: "M"}
                        },
                        {
                            tagName: "label",
                            type: "text",
                            content: "M"
                        },
                        {
                            tagName: "input",
                            attributes: {type: "checkbox", value: "F"}
                        },
                        {
                            tagName: "label",
                            type: "text",
                            content: "F"
                        }

                    ]
                },
                {
                    components: [
                        {
                            tagName: "label",
                            type: "text",
                            content: "Message"
                        },
                        {
                            tagName: "textarea",

                        }
                    ]
                },
                {
                    components: [
                        {
                            tagName: "button",
                            type: "text",
                            attributes: {type: "button"},
                            content: "send",
                        }
                    ]
                }

            ]
        }
    });

    editor.Blocks.add("input_form", {
        label: `<i class="fa fa-nfc-symbol"></i><span>input</span>`,
        attributes: {class: "block"},
        category: category.form,

        content: {
            tagName: "input",
            type:"input",
            attributes: {type: "text"},
        }
    });

    editor.Blocks.add("textarea_form", {
        label: `<i class="fa fa-align-center"></i><span>text area</span>`,
        attributes: {class: "block"},
        category: category.form,

        content: {
            type:"textAria",
            tagName: "textarea",
        }
    });

    editor.Blocks.add("select_input_form", {
        label: `<i class="fa fa-align-center"></i><span>select</span>`,
        attributes: {class: "block"},
        category: category.form,

        content: {
            //todo درست کردن بخش تایپ برای سلکت که با هر سلکت تریت های مختلفی ظاهر شود
            tagName: "select",
            attributes: {type: "text"},
            components: [
                {tagName: "option", attributes: {value: "opt1"}, content: "Option 1 "},
                {tagName: "option", attributes: {value: "opt2"}, content: "Option 2 "},
                {tagName: "option", attributes: {value: "opt3"}, content: "Option 3 "},
            ],
        }
    });

    editor.Blocks.add("button_form", {
        label: `<i class="fa fa-align-center"></i><span>button</span>`,
        attributes: {class: "block"},
        category: category.form,

        content: {
            //todo درست کردن تایپ مدل button
            type: ["text"],
            tagName: "button",
            attributes: {type: "button"},
            content: "send",
        },
    });

    editor.Blocks.add("label_form", {
        label: `<i class="fa fa-align-center"></i><span>label</span>`,
        attributes: {class: "block"},
        category: category.form,
        content: {
            type:"label",
            tagName: "label",
            content: "label",
        }
    });

    editor.Blocks.add("checkbox_form", {
        label: `<i class="fa fa-align-center"></i><span>check box</span>`,
        attributes: {class: "block"},
        category: category.form,

        content: {
            type:"checkBox",
            tagName: "input",
            attributes: {type: "checkbox"},
        }
    });


    editor.Blocks.add("radio_form", {
        label: `<i class="fa fa-align-center"></i><span>radio</span>`,
        attributes: {class: "block"},
        category: category.form,

        content: {
            type:"radio",
            tagName: "input",
            attributes: {type: "radio"},
        }
    });


    // form blocks end

    //heading blocks start
    editor.Blocks.add(`h1`, {
        label: `<i class="fa-solid fa-heading">H</i><span>heading 1</span>`,
        attributes: {class: `block`},
        category: category.heading,

        content: {
            tagName: `h1`,
            type: "text",
            attributes: {class: "blocks"},
            content: ` this is header 1`,
            draggable: true,
            droppable: true,
        },

    });


    editor.Blocks.add(`h2`, {
        label: `<i class="fa-solid fa-heading">H</i><span>heading 2</span>`,
        attributes: {class: `block`},
        category: category.heading,

        content: {
            tagName: `h2`,
            type: "text",
            attributes: {class: "blocks"},
            content: ` this is header 2`,
            draggable: true,
            droppable: true,
        },
    });


    editor.Blocks.add(`h3`, {
        label: `<i class="fa-solid fa-heading">H</i><span>heading 3</span>`,
        attributes: {class: `block`},
        category: category.heading,

        content: {
            tagName: `h3`,
            type: "text",
            attributes: {class: "blocks"},
            content: ` this is header 3`,
            draggable: true,
            droppable: true,
        },
    });

    editor.Blocks.add(`h4`, {
        label: `<i class="fa-solid fa-heading">H</i><span>heading 4</span>`,
        attributes: {class: `block`},
        category: category.heading,

        content: {
            tagName: `h4`,
            type: "text",
            attributes: {class: "blocks"},
            content: ` this is header 4`,
            draggable: true,
            droppable: true,
        },

    });


    editor.Blocks.add(`h5`, {
        label: `<i class="fa-solid fa-heading">H</i><span>heading 5</span>`,
        attributes: {class: `block`},
        category: category.heading,

        content: {
            tagName: `h5`,
            type: "text",
            attributes: {class: "blocks"},
            content: ` this is header 5`,
            draggable: true,
            droppable: true,
        },

    });


    editor.Blocks.add(`h6`, {
        label: `<i class="fa-solid fa-heading">H</i><span>heading 6</span>`,
        attributes: {class: `block`},
        category: category.heading,

        content: {
            tagName: `h6`,
            type: "text",
            attributes: {class: "blocks"},
            content: ` this is header 6`,
            draggable: true,
            droppable: true,
        },

    });

    //heading blocks end

}


export {base_blocks}