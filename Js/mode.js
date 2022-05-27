document.querySelector('.header__mode').addEventListener('click', () => {
    if (document.querySelector('#night')) {
        let btnN = document.body.querySelector('#night');
        let dark = 'Assets/Icons/mode-dark.png';
    
        btnN.addEventListener("click", () => {
    
            if (document.body.querySelector('style'))
                document.body.removeChild(document.body.querySelector('style'));
            let link = document.body.appendChild(document.createElement("style"));
    
            link.innerHTML = `
            .background-area {
                /* background-color: rgba(255, 255, 255, 0.9); */
                background-color: var(--just-white);
                box-shadow: 9px 9px 31px rgba(1, 24, 51, 0.12);
            }
    
            h1,
            h3 {
                color: var(--Oxford-Blue-Strong);
            }
    
            p {
                color: var(--Sapphire-Blue);
            }
    
            #particles-js {
                background-color: var(--White);
            }
    
            .main-container .header .header__mode {
                width: 40px;
                height: 40px;
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
            btnN.removeAttribute("id");
            document.body.querySelector('.header__mode').setAttribute("id", "light");
        });
    } else if (document.querySelector('#light')){
        let btnL = document.body.querySelector('#light');
        let light = 'Assets/Icons/mode-light.png';
    
        btnL.addEventListener("click", () => {
            if (document.body.querySelector('style'))
                document.body.removeChild(document.body.querySelector('style'));
            
            let link = document.body.appendChild(document.createElement("style"));
            link.innerHTML = `
            .background-area {
                /* background-color: rgba(1, 30, 64, 0.9); */
                background-color: var(--Oxford-Blue);
                box-shadow: 9px 9px 31px rgba(255, 255, 255, 0.12);
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
            }
    
            .main-container .header .header__nav a {
                color: var(--Sapphire-Blue);
            }
    
            .main-container .header .header__mode {
                width: 40px;
                height: 40px;
                background-image: url(${light});
            }
    
            .main-container .main .main__form form label input,
            .main-container .main .main__form form label textarea {
                color: var(--Oxford-Blue-Strong);
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
            `;
            btnL.removeAttribute("id");
            document.body.querySelector('.header__mode').setAttribute("id", "night");
        });
    }
})

