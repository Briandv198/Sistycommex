document.querySelector('.header__mode').addEventListener('click', () => {
    if (document.querySelector('#night') != null) {
        let btnN = document.body.querySelector('#night');
        let dark = 'Assets/Icons/mode-dark.png';

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
        btnN.removeAttribute("id");
        document.body.querySelector('.header__mode').setAttribute("id", "light");

    } else if (document.querySelector('#light') != null) {
        let btnL = document.body.querySelector('#light');
        let light = 'Assets/Icons/mode-light.png';

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
        btnL.removeAttribute("id");
        document.body.querySelector('.header__mode').setAttribute("id", "night");
    }
});

