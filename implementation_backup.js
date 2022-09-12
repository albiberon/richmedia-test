

alert('implementation.js in action4')

var firstAd = `    <div id="first-ad">
                        <h1 id="ad-text" style="                        width: 50%;
                        position: absolute;
                        left: 5%;
                        font-family: 'Dosis', sans-serif;
                        color: #222;
                        top: 20%;
                        font-weight: 600;
                        font-size: 38px;"> Rich Media Ads for Maximum ROI</h1>
                        <div id="ad-solutions-logo" style="">
                            <img src="https://www.adsolutions.com/wp-content/uploads/2018/05/Untitled-3-1.png"
                                width="60%" height="auto" />
                        </div>
                        <img id="money" src="img/money.png" width="171" height="124" />
                        <img id="hand" src="img/hand.png" width="283" height="166" />
                        <img id="computer" src="img/computer.png" width="293" height="280" />
                        <img id="design1" src="img/design1.png" width="195" height="30" />
                        <img id="design2" src="img/design2.png" width="195" height="14" />

                    </div>`

// let secondAd = '<div id="second-ad"><h1>Second ad</h1></div>'
// let thirdAd = '<div id="third-ad"><h1>Third ad</h1><div>'

var jqueryUIScript = document.createElement('script');
jqueryUIScript.setAttribute('src','https://code.jquery.com/ui/1.13.2/jquery-ui.js')
jqueryUIScript.setAttribute("type", "text/javascript")
jqueryUIScript.setAttribute("integrity","sha256-xLD7nhI62fcsEZK2/v8LsBcb4lG7dgULkuXoXB/j91c=")
jqueryUIScript.setAttribute("crossorigin","anonymous")
document.head.insertBefore(jqueryUIScript, document.head.lastChild);

var jqueryScript = document.createElement('script');
jqueryScript.setAttribute('src','https://code.jquery.com/jquery-3.6.1.js');
jqueryScript.setAttribute("integrity","sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=")
jqueryScript.setAttribute("type", "text/javascript");
jqueryScript.setAttribute("crossorigin","anonymous");
document.head.insertBefore(jqueryScript, document.head.firstChild);


// let jqueryHeader = `
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@600&display=swap" rel="stylesheet">
// <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>             
// <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js" integrity="sha256-xLD7nhI62fcsEZK2/v8LsBcb4lG7dgULkuXoXB/j91c=" crossorigin="anonymous"></script>                    
// `;   
// document.getElementsByTagName('head')[0].appendChild(jqueryHeader);
// let jqueryHeader = `
//                         <link rel="preconnect" href="https://fonts.googleapis.com">
//                         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//                         <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@600&display=swap" rel="stylesheet">
//                         <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>             
//                         <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js" integrity="sha256-xLD7nhI62fcsEZK2/v8LsBcb4lG7dgULkuXoXB/j91c=" crossorigin="anonymous"></script>                    
//                         `

let stylesCSS = `   <style>

                    #first-ad {
                        margin-left: auto;
                        margin-right: auto;
                        text-align: center;
                        color: white;
                        overflow: hidden;
                        width: 990px;
                        height: 100px;
                        display: block;
                        background: #ffb000;
                        opacity: 1;
                        position: relative
                    }

                    #money {
                        width: 100px;
                        height: auto;
                        position: absolute;
                        right: 28%;
                        top: -10%;
                        opacity: 0;
                        z-index: 3;
                        transform: rotate(20deg);
                    }

                    #hand {
                        width: 150px;
                        height: auto;
                        position: absolute;
                        right: 12%;
                        bottom: -105%;
                        z-index: 2;
                        transform: rotate(20deg);
                    }

                    #computer {
                        width: 155px;
                        height: auto;
                        position: absolute;
                        right: -20%;
                        top: -20%;
                        z-index: 1;
                    }

                    #ad-solutions-logo {
                        background: white;
                        opacity: 0;
                        z-index: 3;
                        position: absolute;
                        top: 15%;
                        left: 15%;
                        display: block;
                        width: 30%;
                        padding: 10px;
                        border-radius: 20px;
                        top: 25%;
                    }

                    #ad-text {
                        width: 50%;
                        position: absolute;
                        left: 5%;
                        font-family: 'Dosis', sans-serif;
                        color: #222;
                        font-size: 38px;
                    }

                    #design1 {
                        width: 165px;
                        height: auto;
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        z-index: 0;
                        opacity: 0
                    }

                    #design2 {
                        width: 165px;
                        height: auto;
                        position: absolute;
                        left: 0;
                        top: 0;
                        z-index: 0;
                        opacity: 0
                    }
                    </style>
                    `;
    // document.getElementsByTagName('body')[0].appendChild(stylesCSS);


    document.onreadystatechange = function () {
        if (document.readyState == "interactive") {
            // (async () => {
    //     await import('https://code.jquery.com/jquery-3.6.1.js')
    //     await import('https://code.jquery.com/ui/1.13.2/jquery-ui.js')
        $('head').append(stylesCSS)
        
        setTimeout(() => {
            // $(document.head).prepend(jqueryHeader)
            // $(document.body).prepend(stylesCSS)

            $('.advertising-container-top').first().prepend(firstAd)
        
            // $('#first-ad').css({
            //     'text-align': 'center',
            //     'color': 'white',
            //     'overflow': 'hidden',
            //     'width': '990px',
            //     'height': '100px',
            //     'display': 'block',
            //     'background': '#ffb000',
            //     'opacity': '1',
            //     'position': 'relative'
            // })
        
            setTimeout(() => {
            $.when(
                $('#design1').animate({ opacity: '1' }, { duration: 1000, easing: 'easeInOutBack' }).promise(),
                $('#design2').animate({ opacity: '1' }, { duration: 1000, easing: 'easeInOutBack' }).promise(),
                $('#computer').animate({ right: '23%' }, { duration: 1500, easing: 'easeInOutBack' }).promise()
            ).done(() => {
                $('#hand').animate({ right: '20%', bottom: '-40%' }, { duration: 1500, easing: 'easeInOutBack' }).promise()
            }).done(() => {
                $('#money').delay(500).animate({ opacity: '1', top: '-13px', right: '22%' }, { duration: 2200, easing: 'easeInOutBack' }).promise()
            }).done(() => {
                $('#ad-text').animate({ opacity: '0' }, { duration: 1000, easing: 'easeInOutBack' })
                $('#ad-solutions-logo').delay(1200).animate({ opacity: '1' }, { duration: 1200, easing: 'easeInOutBack' })
            })
            }, 500)
        
            // $('#first-ad').css({
            //     'text-align': 'center',
            //     'color': 'white',
            //     'overflow': 'hidden',
            //     'width': '990px',
            //     'height': '100px',
            //     'display': 'inline-block',
            //     'background': 'rgb(255,12,0);',
            //     'background': 'radial-gradient(circle, rgba(255,12,0,1) 0%, rgba(156,2,2,1) 100%)',
            //     'opacity': '0'
            // })
        
            // $('#left-ad').css({
            //     'background-color': 'purple',
            //     'position': 'absolute',
            //     'left': '0px',
            //     'heigth': '130vh',
            // })
        
        
            // $('.right-ad').css({
            //     'background-color': 'purple',
            //     'position': 'absolute',
            //     'right': '0px',
            //     'width': '100%',
            //     'heigth': '130vh',
            // })
            // let y;
        
        }, 500)
        }
    }
    


    // })()






// var eid = "ASI_" + (new Date().getTime());
// document.write(`<div id="${eid}"><img src="https://pay.coti.io/static/media/dark.f98ecf86.svg" width="125" height="88"/></div>`);



// var ePo = document.getElementById(eid);
// ePo.style.display = 'inline-block';
// ePo.style.width = '990px';
// ePo.style.height = '130px';
// ePo.style.backgroundColor = 'purple';


// let bybyby = 


// ePl = document.body.insertBefore(document.createElement("div"), document.body.firstChild);
// ePr = document.body.insertBefore(document.createElement("div"), document.body.firstChild);

// setTimeout(function () {
//     var pageContent = document.querySelector('.page-content .container');
//     var pagePos = pageContent.getBoundingClientRect();

//     ePl.style.backgroundColor = 'purple';
//     ePl.style.position = 'absolute';
//     ePl.style.left = 0 + 'px';
//     ePl.style.right = pagePos.left + 'px';
//     ePl.style.height = '130vh';

//     ePr.style.backgroundColor = 'purple';
//     ePr.style.position = 'absolute';
//     ePr.style.left = pagePos.right + 'px';
//     ePr.style.width = '100%';
//     ePr.style.height = '130vh';

// }, 2000);
