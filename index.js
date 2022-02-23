$('body').css({
    "background-color": "#232323",
}).append(
    $('<div/>').attr("id", "pokedex").css({
        "height": "calc(360 * (((80)/480) * 1vmin))",
        "width": "calc(480 * (((80)/480) * 1vmin))",
        "position": "absolute",
        "left": "40%",
        "top": "20%",
        "transform": "translate(-50%,-50)",
        "background-color": "#232323"
    }).append(
        $('<div/>').attr("id", "rightPart").css({
            "position": "absolute",
            "width": "50%",
            "height": "100%",
            "left": "3%",
            "top": "15%",
            "border-radius": "3%",
            "border": "5px solid #8c0820",
            "background": "#dc0a2d"
        }).append(
            $('<div/>').attr("id", "hinge").css({
                "position": "absolute",
                "width": "15%",
                "height": "85%",
                "left": "85%",
                "top": "15%",
                "border-radius": "0%",
                "background": "linear-gradient(90deg,#8c0820,#f0667d,#dc0a2d,#8c0820"
            }).append(
                $('<div/>').attr("id", "upperhin").css({
                    "content": "",
                    "position": "absolute",
                    "width": "100%",
                    "height": "1%",
                    "left": "0%",
                    "top": "10%",
                    "background": "#8c0820"
                }),
                $('<div/>').attr("id", "lowerhin").css({
                    "content": "",
                    "position": "absolute",
                    "width": "100%",
                    "height": "1%",
                    "left": "0%",
                    "bottom": "10%",
                    "background": "#8c0820"
                })
            ),
            $('<div/>').attr("id", "blueLight").css({
                "position": "absolute",
                "width": "19%",
                "height": "13%",
                "left": "7%",
                "top": "4%",
                "border-radius": "50%",
                "border": "8px solid white",
                "background": "radial-gradient(#98d9ff, #21aefe)"
            }).append(
                $('<div/>').attr("id", "blueLight").css({
                    "position": "absolute",
                    "width": "15%",
                    "height": "13%",
                    "left": "17%",
                    "top": "20%",
                    "border-radius": "50%",
                    "background": "rgba(255,255,255,0.6)"
                })
            ),
            $('<div/>').attr("id", "rgblights").css({
                "position": "absolute",
                "width": "20%",
                "height": "3%",
                "left": "33%",
                "top": "3%",
                "display": "flex",
                "justify-content": "space-evenly"
            }).append(
                $('<div/>').attr("id", "red").css({
                    "width": "20%",
                    "height": "100%",
                    "border-radius": "50%",
                    "background": "radial-gradient(#fd7991, #f7103c)",
                    "border": "1px solid black"
                }),
                $('<div/>').attr("id", "yellow").css({
                    "width": "20%",
                    "height": "100%",
                    "border-radius": "50%",
                    "background": "radial-gradient(#fcf6dc, #ffdc40)",
                    "border": "1px solid black"
                }),
                $('<div/>').attr("id", "green").css({
                    "width": "20%",
                    "height": "100%",
                    "border-radius": "50%",
                    "background": "radial-gradient(#7fbf8d, #326b3e)",
                    "border": "1px solid black"
                })
            ),
            $('<div/>').attr("id", "line1").css({
                "position": "absolute",
                "width": "45%",
                "height": "0%",
                "left": "-1%",
                "top": "23%",
                "background": "#8c0820",
                "border-top": "5px solid #8c0820"
            }),
            $('<div/>').attr("id", "line2").css({
                "position": "absolute",
                "width": "17.6%",
                "height": "0%",
                "left": "41%",
                "top": "19%",
                "transform": "rotate(-45deg)",
                "background": "#8c0820",
                "border-top": "5px solid #8c0820"
            }),
            $('<div/>').attr("id", "line3").css({
                "position": "absolute",
                "width": "45%",
                "height": "0%",
                "left": "56%",
                "top": "15%",
                "background": "#8c0820",
                "border-top": "5px solid #8c0820"
            }),
            $('<div/>').attr("id", "screen").css({
                "position": "absolute",
                "width": "65%",
                "height": "37%",
                "left": "10%",
                "top": "30%",
                "border-radius": "3%",
                "background": "#dedede"
            }).append(
                $('<div/>').attr("id", "dot1").css({
                    "position": "absolute",
                    "width": "5%",
                    "height": "5%",
                    "left": "42%",
                    "top": "6%",
                    "border-radius": "50%",
                    "background": "#dc0a2d"
                }),
                $('<div/>').attr("id", "dot2").css({
                    "position": "absolute",
                    "width": "5%",
                    "height": "5%",
                    "left": "58%",
                    "top": "6%",
                    "border-radius": "50%",
                    "background": "#dc0a2d"
                }),
                $('<div/>').attr("id", "screen").css({
                    "position": "absolute",
                    "width": "72%",
                    "height": "66%",
                    "left": "14%",
                    "top": "15%",
                    "background": "#232323"
                }).append(
                   // ('<img/>').attr("id","pokemon")
                ),
                $('<div/>').attr("id", "dot3").css({
                    "position": "absolute",
                    "width": "7%",
                    "height": "8%",
                    "left": "14%",
                    "top": "86%",
                    "border-radius": "50%",
                    "border": "1px solid black",
                    "background": "#dc0a2d"
                }),
                $('<div/>').attr("id", "dot3").css({
                    "display": "flex",
                    "flex-direction": "column",
                    "justify-content": "space-between",
                    "position": "absolute",
                    "width": "13%",
                    "height": "12%",
                    "left": "82%",
                    "top": "84%"
                }).append(
                    $('<div/>').attr("id", "speaker").css({
                        "width": "100%",
                        "height": "17%",
                        "border-radius": "50px",
                        "background": "black",
                    }),
                    $('<div/>').attr("id", "speaker2").css({
                        "width": "100%",
                        "height": "17%",
                        "border-radius": "50px",
                        "background": "black",
                    }),
                    $('<div/>').attr("id", "speaker3").css({
                        "width": "100%",
                        "height": "17%",
                        "border-radius": "50px",
                        "background": "black",
                    }),
                    $('<div/>').attr("id", "speaker4").css({
                        "width": "100%",
                        "height": "17%",
                        "border-radius": "50px",
                        "background": "black",
                    })
                )
            ),
            $('<div/>').attr("id", "black-button").css({
                "position": "absolute",
                "width": "12%",
                "height": "8%",
                "left": "7%",
                "top": "74%",
                "border-radius": "50%",
                "border": "1px solid black",
                "background": "black"
            }),
            $('<div/>').attr("id", "red-button").css({
                "position": "absolute",
                "width": "12%",
                "height": "2%",
                "left": "21%",
                "top": "70%",
                "border-radius": "38%",
                "border": "1px solid black",
                "background": "#f7103c"
            }),
            $('<div/>').attr("id", "blue-button").css({
                "position": "absolute",
                "width": "12%",
                "height": "2%",
                "left": "38%",
                "top": "70%",
                "border-radius": "38%",
                "border": "1px solid black",
                "background": "#21aefe"
            }),
            $('<input/>').attr("id", "numberinp").css({
                "position": "absolute",
                "width": "30%",
                "height": "12%",
                "left": "22%",
                "top": "78%",
                "border-radius": "5%",
                "border": "1px solid black",
                "background": "#51ae5e"
            }),
            $('<div/>').attr("id", "cross").css({
                "content": "",
                "position": "absolute",
                "width": "20%",
                "height": "4%",
                "left": "60%",
                "top": "80%",
                "border-radius": "5%",
                "border": "1px solid black",
                "background": "black"
            }),
                $('<div/>').attr("id", "upperC").css({
                    "content": "",
                    "position": "absolute",
                    "width": "6%",
                    "height": "4%",
                    "left": "67%",
                    "top": "76%",
                    "border-radius": "5%",
                    "border": "1px solid black",
                    "background": "black"
                }),
                $('<div/>').attr("id", "lowerC").css({
                    "content": "",
                    "position": "absolute",
                    "width": "6%",
                    "height": "4%",
                    "left": "67%",
                    "top": "84%",
                    "border-radius": "5%",
                    "border": "1px solid black",
                    "background": "black"
                })  
            
        ),
        $('<div/>').attr("id", "leftPart"))
)

/*let divRight = document.createElement("div");
document.body.appendChild(divRight);*/