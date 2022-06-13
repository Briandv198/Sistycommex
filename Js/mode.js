var light = () => {
    let btnN = document.body.querySelector('#night');
    let dark = 'Assets/Icons/mode-dark.png';

    document.querySelector('.loader-background1').style.display = 'none';
    document.querySelector('.loader-background2').style.display = 'block';

    if (document.body.querySelector('style'))
        document.body.removeChild(document.body.querySelector('style'));
    let link = document.body.appendChild(document.createElement("style"));

    link.innerHTML = `
        *{
            transition: color 0.5s;
            transition: box-shadow 0.5s;
            transition: background-image 0.5s ease-out;
        }
        .background-area {
            /* background-color: rgba(255, 255, 255, 0.9); */
            background-color: var(--just-white);
            box-shadow: 9px 9px 31px rgba(1, 24, 51, 0.12);
            -webkit-transition: background-color 0.5s ease-out;
            -moz-transition: background-color 0.5s ease-out;
            -o-transition: background-color 0.5s ease-out;
            transition: background-color 0.5s ease-out;
        }
        
        h1,
        h3 {
            color: var(--Oxford-Blue-Strong);
        }
        
        p {
            color: var(--Sapphire-Blue);
            transition: color 0.5s;
        }
        
        #particles-js {
            background-color: var(--White);
            -webkit-transition: background-color 0.5s ease-out;
            -moz-transition: background-color 0.5s ease-out;
            -o-transition: background-color 0.5s ease-out;
            transition: background-color 0.5s ease-out;
        }
        
        .main-container .header .header__mode {
            background-image: url(${dark});
        }

        .main-container .header .header__nav a {
            color: var(--Sapphire-Blue);
        }
        
        .main-container .main .main__form form label input,
        .main-container .main .main__form form label textarea {
            color: var(--Oxford-Blue-Strong);
        }
        
        .main-container .main .main__form form .button {
            color: var(--just-white);
            background-color: var(--Oxford-Blue-Strong);
            box-shadow: 9px 9px 31px rgba(1, 24, 51, 0.30);
        }
        
        .main-container .footer {
            background-color: var(--Oxford-Blue-Strong);
        }
        
        .main-container .footer ul li a {
            color: var(--White);
        }
       `;

    if (btnN) {
        btnN.removeAttribute("id");
    }

    document.body.querySelector('.header__mode').setAttribute("id", "light");
}

var night = () => {
    let btnL = document.body.querySelector('#light');
    let light = 'Assets/Icons/mode-light.png';

    document.querySelector('.loader-background2').style.display = 'none';
    document.querySelector('.loader-background1').style.display = 'block';

    if (document.body.querySelector('style'))
        document.body.removeChild(document.body.querySelector('style'));

    let link = document.body.appendChild(document.createElement("style"));
    link.innerHTML = `
        *{
            transition: color 0.5s;
            transition: box-shadow 0.5s; 
            transition: background-image 0.5s ease-out;
        }
        .background-area {
            /* background-color: rgba(1, 30, 64, 0.9); */
            background-color: var(--Oxford-Blue);
            box-shadow: 9px 9px 31px rgba(255, 255, 255, 0.12);
            -webkit-transition: background-color 0.5s ease-out;
            -moz-transition: background-color 0.5s ease-out;
            -o-transition: background-color 0.5s ease-out;
            transition: background-color 0.5s ease-out;
        }

        h1,
        h3 {
            color: var(--just-white);
        }

        p {
            color: var(--just-white);
        }

        #particles-js {
            background-color: var(--Oxford-Blue-Strong);
            -webkit-transition: background-color 0.5s ease-out;
            -moz-transition: background-color 0.5s ease-out;
            -o-transition: background-color 0.5s ease-out;
            transition: background-color 0.5s ease-out;  
        }

        .main-container .header .header__nav a {
            color: var(--Sapphire-Blue);
        }

        .main-container .header .header__mode {
            background-image: url(${light});
        }

        .main-container .main .main__form form label input,
        .main-container .main .main__form form label textarea {
            color: var(--just-white);
        }

        .main-container .main .main__form form .button {
            color: var(--just-white);
            background-color: var(--Oxford-Blue);
            box-shadow: 9px 9px 32px rgba(255, 255, 255, 0.12);
        }

        .main-container .footer {
            background-color: var(--Oxford-Blue);
        }

        .main-container .footer ul li a {
            color: var(--White);
        }
        .main-container .footer ul li {
            color: var(--White);
        }
        `;
    
        if (btnL) {
            btnL.removeAttribute("id");
        }

    document.body.querySelector('.header__mode').setAttribute("id", "night");
}

function hazUnaVez() {
    if (document.cookie.replace(/(?:(?:^|.*;\s*)mode\s*\=\s*([^;]*).*$)|^.*$/, "$1") == "0") {
        night();
    } else if (document.cookie.replace(/(?:(?:^|.*;\s*)mode\s*\=\s*([^;]*).*$)|^.*$/, "$1") == "1") {
        light();
    } else {
        console.log('Hola');
        document.cookie = 'mode=1;max-age=60*60*24';
        document.querySelector('.loader-background2').style.display = 'block';
    }
}

hazUnaVez();

document.querySelector('.header__mode').addEventListener('click', () => {
    if (document.querySelector('#night') != null) {
        document.cookie = 'mode=1;max-age=60*60*24';

        light();

    } else if (document.querySelector('#light') != null) {
        document.cookie = 'mode=0;max-age=60*60*24';

        night();
    }
});

