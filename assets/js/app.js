document.getElementById('main').classList.add('none')


const pastList = [
    {'listName': 'upcoming', 'pastID':JSON.parse(localStorage.getItem('upcoming'))},
    {'listName': 'now_playing', 'pastID':JSON.parse(localStorage.getItem('now_playing'))},
    {'listName': 'popular', 'pastID':JSON.parse(localStorage.getItem('popular'))},
];
var newFilmCount = 0;
var x = 0;
var listActual = [
    {'listName' : 'upcoming', 'actualID':[], 'title':[]},
    {'listName' : 'now_playing', 'actualID':[], 'title':[]},
    {'listName' : 'popular', 'actualID':[], 'title':[]}
];
var nouveauFilms = '';


// Loader



var loaderInit = document.createElement('div');
    loaderInit.id = 'loader';
    loaderInit.innerHTML = `
    
    <svg class="icone" width="447" height="113" viewBox="0 0 447 113" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g id="Frame-1" >
                <rect width="447" height="113" fill="black" />
                <g id="AlloJyve">
                    <path
                        d="M12.224 82L35.84 20.176H47.552L70.976 82H60.224L54.08 66.064H29.216L23.072 82H12.224ZM30.848 58H52.352L41.6 29.68L30.848 58Z"
                        fill="#FBDD00" />
                    <path
                        d="M92.5948 82.96C88.8828 82.96 86.0668 82.064 84.1468 80.272C82.2268 78.416 81.2668 75.376 81.2668 71.152V17.296H91.7308V70.192C91.7308 71.984 92.0508 73.2 92.6908 73.84C93.3308 74.48 94.2908 74.8 95.5708 74.8C97.1068 74.8 98.5788 74.608 99.9868 74.224V81.808C98.7708 82.256 97.5868 82.544 96.4348 82.672C95.3468 82.864 94.0668 82.96 92.5948 82.96ZM117.064 82.96C113.352 82.96 110.536 82.064 108.616 80.272C106.696 78.416 105.736 75.376 105.736 71.152V17.296H116.2V70.192C116.2 71.984 116.52 73.2 117.16 73.84C117.8 74.48 118.76 74.8 120.04 74.8C121.576 74.8 123.048 74.608 124.456 74.224V81.808C123.24 82.256 122.056 82.544 120.904 82.672C119.816 82.864 118.536 82.96 117.064 82.96ZM154.434 82.96C146.242 82.96 140.226 80.912 136.386 76.816C132.61 72.72 130.722 66.864 130.722 59.248C130.722 51.632 132.642 45.776 136.482 41.68C140.322 37.584 146.306 35.536 154.434 35.536C162.626 35.536 168.642 37.584 172.482 41.68C176.322 45.776 178.242 51.632 178.242 59.248C178.242 66.864 176.322 72.72 172.482 76.816C168.706 80.912 162.69 82.96 154.434 82.96ZM154.434 74.128C159.234 74.128 162.626 72.976 164.61 70.672C166.658 68.304 167.682 64.496 167.682 59.248C167.682 54 166.658 50.224 164.61 47.92C162.626 45.616 159.234 44.464 154.434 44.464C149.698 44.464 146.306 45.616 144.258 47.92C142.274 50.224 141.282 54 141.282 59.248C141.282 64.496 142.274 68.304 144.258 70.672C146.306 72.976 149.698 74.128 154.434 74.128ZM198.023 82.96C192.775 82.96 188.295 82.224 184.583 80.752V71.92C186.119 72.56 187.911 73.104 189.959 73.552C192.071 73.936 194.151 74.128 196.199 74.128C200.487 74.128 203.463 73.264 205.127 71.536C206.855 69.744 207.719 66.896 207.719 62.992V20.176H218.183V64.72C218.183 70.608 216.487 75.12 213.095 78.256C209.767 81.392 204.743 82.96 198.023 82.96ZM240.039 98.896C236.583 98.896 233.639 98.448 231.207 97.552V89.776C232.295 90.16 233.287 90.416 234.183 90.544C235.143 90.672 236.103 90.736 237.063 90.736C239.047 90.736 240.647 90.416 241.863 89.776C243.079 89.136 244.135 88.112 245.031 86.704C245.991 85.36 247.015 83.6 248.103 81.424L227.847 36.496H238.695L253.287 70.288L268.071 36.496H278.823L260.295 79.408C258.695 83.248 256.967 86.608 255.111 89.488C253.319 92.432 251.207 94.736 248.775 96.4C246.407 98.064 243.495 98.896 240.039 98.896ZM298.861 82L280.909 36.496H291.757L304.525 71.824L317.293 36.496H328.045L310.189 82H298.861ZM348.631 31.888L355.831 14.896H365.047L356.983 31.888H348.631ZM356.119 82.96C348.183 82.96 342.039 81.008 337.687 77.104C333.335 73.2 331.159 67.216 331.159 59.152C331.159 51.856 333.015 46.096 336.727 41.872C340.439 37.648 346.071 35.536 353.623 35.536C360.535 35.536 365.719 37.36 369.175 41.008C372.695 44.592 374.455 49.232 374.455 54.928V63.376H341.143C341.655 67.792 343.255 70.832 345.943 72.496C348.631 74.16 352.727 74.992 358.231 74.992C360.535 74.992 362.903 74.768 365.335 74.32C367.767 73.872 369.879 73.296 371.671 72.592V80.272C369.623 81.168 367.255 81.84 364.567 82.288C361.943 82.736 359.127 82.96 356.119 82.96ZM341.143 56.56H365.239V53.392C365.239 50.256 364.375 47.824 362.647 46.096C360.919 44.304 358.007 43.408 353.911 43.408C349.047 43.408 345.687 44.464 343.831 46.576C342.039 48.688 341.143 52.016 341.143 56.56Z"
                        fill="white" stroke="white" stroke-width="2" />
                </g>
                <path id="Line 1" d="M7.99999 108L386.999 109.011" stroke="#FBDD00" stroke-width="10" />
                <g id="Rectangle1">
                    <rect id="carre1" x="390" y="57" width="25" height="25" fill="#FBDD00" />
                </g>
                <g id="Rectangle2">
                    <rect id="carre2" x="415" y="32" width="25" height="25" fill="#FBDD00" />
                </g>
            </g>
            <defs>
                <clippath id="clip0_1_2">
                    <rect width="447" height="113" fill="white" />
                </clippath>
            </defs>
        </svg>
    
    
    `;
document.getElementsByTagName('body')[0].prepend(loaderInit);
setTimeout(() => {
    document.getElementById('loader').classList.add('none');
    document.getElementById('main').classList.remove('none');
}, 6800)










const schema = [
    {'type':'header','id':'header','position':'main','classes':'','src':'','textContent':''},
    {'type':'h1','id':'h1','position':'header','classes':'none','src':'','textContent':'Allojyvé'},
    {'type':'nav','id':'nav','position':'header','classes':'','src':'','textContent':''},
    {'type':'img','id':'logoNav','position':'nav','classes':'','src':'assets/img/allojyve_logo.png','textContent':''},
    {'type':'p','id':'upcoming','position':'nav','classes':'navBtn','src':'','textContent':'Prochainement'},
    {'type':'p','id':'nowPlayings','position':'nav','classes':'navBtn','src':'','textContent':'À l\'affiche'},
    {'type':'p','id':'popular','position':'nav','classes':'navBtn','src':'','textContent':'Populaires'},
    {'type':'div','id':'mobileNav','position':'header','classes':'heightMobileNav','src':'','textContent':''},
    {'type':'div','id':'topMobileNav','position':'mobileNav','classes':'','src':'','textContent':''},
    {'type':'img','id':'logoMobileNav','position':'topMobileNav','classes':'logoMobileNav','src':'assets/img/allojyve_logo.png','textContent':''},
    {'type':'i','id':'menuBurger','position':'topMobileNav','classes':'fa-solid fa-bars fa-3x','src':'','textContent':''},
    {'type':'div','id':'menuMobile','position':'mobileNav','classes':'','src':'','textContent':''},
    {'type':'div','id':'firstRow','position':'menuMobile','classes':'','src':'','textContent':''},
    {'type':'img','id':'','position':'firstRow','classes':'logoMobileNav','src':'assets/img/allojyve_logo.png','textContent':''},
    {'type':'i','id':'closeMenu','position':'firstRow','classes':'fa-solid fa-xmark fa-3x','src':'','textContent':''},
    {'type':'div','id':'linkTo','position':'menuMobile','classes':'','src':'','textContent':''},
    {'type':'div','id':'upcoming','position':'linkTo','classes':'mobileNavBtn','src':'','textContent':'Prochainement'},
    {'type':'div','id':'nowPlayings','position':'linkTo','classes':'mobileNavBtn','src':'','textContent':'À l\'affiche'},
    {'type':'div','id':'popular','position':'linkTo','classes':'mobileNavBtn','src':'','textContent':'Populaires'},
    {'type':'div','id':'socialsNavTop','position':'menuMobile','classes':'','src':'','textContent':''},
    {'type':'h3','id':'titleSocialsTop','position':'socialsNavTop','classes':'','src':'','textContent':'Suivez-nous!'},
    {'type':'div','id':'socialsLinkTop','position':'socialsNavTop','classes':'','src':'','textContent':''},
    {'type':'i','id':'facebookNavTop','position':'socialsLinkTop','classes':'fa-brands fa-facebook-square fa-3x','src':'fa-facebook-square fa-3x','textContent':''},
    {'type':'i','id':'twitterNavTop','position':'socialsLinkTop','classes':'fa-brands fa-twitter fa-3x','src':'','textContent':''},
    {'type':'i','id':'instagramNavTop','position':'socialsLinkTop','classes':'fa-brands fa-instagram fa-3x','src':'','textContent':''},
    {'type':'div','id':'mainContent','position':'main','classes':'','src':'','textContent':''},    
    {'type':'div','id':'leftCol','position':'mainContent','classes':'','src':'','textContent':''},
    {'type':'div','id':'allSlider','position':'mainContent','classes':'','src':'','textContent':''},
    {'type':'div','id':'rightCol','position':'mainContent','classes':'','src':'','textContent':''},
    {'type':'footer','id':'footer','position':'main','classes':'','src':'','textContent':''},
    {'type':'div','id':'socialsFooter','position':'footer','classes':'','src':'','textContent':''},
    {'type':'div','id':'logoCopy','position':'footer','classes':'','src':'','textContent':''},
    {'type':'div','id':'legals','position':'footer','classes':'','src':'','textContent':''},
    {'type':'h3','id':'titleSocialsFooter','position':'socialsFooter','classes':'','src':'','textContent':'Suivez-nous !'},
    {'type':'div','id':'socialsLinkFooter','position':'socialsFooter','classes':'','src':'','textContent':''},
    {'type':'i','id':'facebookFooter','position':'socialsLinkFooter','classes':'fa-brands fa-facebook-square fa-3x','src':'','textContent':''},
    {'type':'i','id':'twitterFooter','position':'socialsLinkFooter','classes':'fa-brands fa-twitter fa-3x','src':'','textContent':''},
    {'type':'i','id':'instagramFooter','position':'socialsLinkFooter','classes':'fa-brands fa-instagram fa-3x','src':'','textContent':''},
    {'type':'img','id':'logoFooter','position':'logoCopy','classes':'','src':'assets/img/allojyve_logo_white.png','textContent':''},
    {'type':'p','id':'copyright','position':'logoCopy','classes':'','src':'','textContent':'Copyright \u00a9 - Allojyvé 2022'},
    {'type':'h3','id':'mentionsLegals','position':'legals','classes':'','src':'','textContent':'Mentions Légales'},
    {'type':'p','id':'cgu','position':'legals','classes':'','src':'','textContent':'CGU'},
    {'type':'p','id':'cookiePolicy','position':'legals','classes':'','src':'','textContent':'Politiques de cookies'},
    {'type':'p','id':'rgpd','position':'legals','classes':'','src':'','textContent':'Réglement RGPD'}
]
for (let i = 0; i < schema.length; i++) {
    createElement(schema[i].type, schema[i].id, schema[i].position, schema[i].classes, schema[i].src, schema[i].textContent)
}
var modalGeneral = document.createElement('div');
modalGeneral.id = 'modal'
modalGeneral.classList = 'modal'
document.getElementsByTagName('body')[0].append(modalGeneral)
// Contenu Principal

getList('upcoming','Prochainement', 'upcomingTitle', 'upcomingSlide', 'cardUpcoming').then(res => {
    getList('now_playing','À l\'affiche','nowPlayingsTitle', 'nowPlayingSlide', 'cardNowPlaying');
    getList('popular', 'Populaires', 'popularTitle', 'popularSlide', 'cardPopular');
});

document.getElementById('menuBurger').addEventListener('click', function(){
    document.getElementById('mobileNav').classList.remove('heightMobileNav');
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    document.getElementById('menuMobile').classList.add('open');
    document.getElementById('menuBurger').classList.add('transparent');
    setTimeout(() => {
        document.getElementById('topMobileNav').classList.add('close');
        
    }, 100);
})

document.getElementById('closeMenu').addEventListener('click', function(){
    setTimeout(() => {
        document.getElementById('menuBurger').classList.remove('transparent');
    }, 200);
    document.getElementById('topMobileNav').classList.remove('close');
    document.getElementsByTagName('body')[0].style.overflowY = 'visible';

    setTimeout(() => {
        document.getElementById('mobileNav').classList.add('heightMobileNav');
        document.getElementById('menuMobile').classList.remove('open');
    }, 500);
})

var buttons = document.getElementsByClassName('navBtn');
for (let index = 0; index < buttons.length; index++) {
    const btn = buttons[index];
    btn.addEventListener('click', function (){
        var idBtn = document.getElementsByClassName('navBtn')[index].id;
        var offsetTop = document.getElementById(idBtn + 'Title').offsetTop - 180;
        var offsetLeft = document.getElementById(idBtn + 'Title').offsetLeft;
        window.scrollTo(offsetLeft, offsetTop);
    }) 
}
var mobileButtons = document.getElementsByClassName('mobileNavBtn');
for (let index = 0; index < mobileButtons.length; index++) {
    const btn = mobileButtons[index];
    btn.addEventListener('click', function (){
        var idBtn = document.getElementsByClassName('mobileNavBtn')[index].id;
        var offsetTop = document.getElementById(idBtn + 'Title').offsetTop - 180;
        var offsetLeft = document.getElementById(idBtn + 'Title').offsetLeft;
        window.scrollTo(offsetLeft, offsetTop);

        document.getElementById('mobileNav').classList.add('heightMobileNav')
        setTimeout(() => {
            document.getElementById('menuBurger').classList.remove('transparent')
        }, 200);
        document.getElementById('topMobileNav').classList.remove('close')
        document.getElementsByTagName('body')[0].style.overflowY = 'visible';
        document.getElementById('menuMobile').classList.remove('open')
    }) 
}
function getList(listName, titleContent, titleID, sliderID, cardClassSpec){
    return new Promise((resolve, reject) => {
        fetch('https://api.themoviedb.org/3/movie/'+listName+'?api_key=9e9d157f9d784170b706af996525a97c&language=fr-FR&page=1').then(res => {
            if (res.ok) {
                var titleSlider = document.createElement('h2')
                titleSlider.textContent = titleContent;
                titleSlider.id = titleID;
                titleSlider.classList ='sliderTitle';
                document.getElementById('allSlider').append(titleSlider);
                var Slide = document.createElement('div');
                Slide.id = sliderID;
                Slide.classList = 'slider';
                document.getElementById('allSlider').append(Slide);
                var listArray = [];
                res.json().then(response => {
                    console.log(response)
                    for (i = 0; i < 20; i++) {
                        var card = document.createElement('div');
                        card.classList = 'card '+cardClassSpec;
                        card.id = listName+response.results[i].id
                        card.value = response.results[i].id
                        document.getElementById(sliderID).append(card);
                        var img = document.createElement('img');
                        img.classList = 'imgSlider';
                        img.src = 'https://image.tmdb.org/t/p/original' + response.results[i].poster_path;
                        document.getElementsByClassName(cardClassSpec)[i].append(img);
                        var title = document.createElement('div');
                        title.classList = 'titleFilm';
                        title.textContent = response.results[i].title;
                        document.getElementsByClassName(cardClassSpec)[i].append(title);
                        listArray[i] = response.results[i].id;
                        localStorage.setItem( listName, JSON.stringify(listArray));
                        var idCard = listName+response.results[i].id;
                        document.getElementById(idCard).addEventListener('click', function(){
                            var id = this.value; 
                            fetch('https://api.themoviedb.org/3/movie/'+ id +'?api_key=9e9d157f9d784170b706af996525a97c&language=fr-FR').then(res => {
                                if (res.ok) {
                                    res.json().then(response => {
                                        var modalContent = document.createElement('div')
                                        modalContent.id = 'modalContent'
                                        modalContent.classList = 'modal-content'
                                        document.getElementById('modal').append(modalContent)
                                        document.getElementById('modal').classList.add('yes')
                                    
                                        var affiche = document.createElement('div')
                                        affiche.id = 'zoneAffiche'
                                        document.getElementById('modalContent').append(affiche)
                                        var poster_path = document.createElement('img')
                                        poster_path.id = 'poster'
                                        poster_path.src = 'https://image.tmdb.org/t/p/original' + response.poster_path
                                        document.getElementById('zoneAffiche').append(poster_path)
                                    
                                        var descriptif = document.createElement('div')
                                        descriptif.id = 'descriptif'
                                        document.getElementById('modalContent').append(descriptif)
                                        var titleFilmModal = document.createElement('div')
                                        titleFilmModal.id = 'titleFilm'
                                        titleFilmModal.textContent = response.original_title
                                        document.getElementById('descriptif').append(titleFilmModal)
                                        var release = document.createElement('div')
                                        release.id = 'releaseDate'
                                        release.textContent = response.release_date
                                        document.getElementById('descriptif').append(release)
                                        var actor = document.createElement('div')
                                        actor.id = 'actor'
                                        document.getElementById('descriptif').append(actor)
                                        var synopsis = document.createElement('div')
                                        synopsis.id = 'synopsis'
                                        if (response.overview === "") {
                                            synopsis.textContent = 'Aucun synopsis n\'a été fourni'
                                        }else{
                                            synopsis.textContent = response.overview
                                        }
                                        document.getElementById('descriptif').append(synopsis)
                                        var averageNoteUser = document.createElement('div')
                                        averageNoteUser.id = 'averageNoteUser'
                                        averageNoteUser.textContent = response.vote_average
                                        document.getElementById('descriptif').append(averageNoteUser)
                                        var spanModal = document.createElement('span')
                                        spanModal.id = 'spanModal'
                                        spanModal.textContent = '/10'
                                        document.getElementById('averageNoteUser').append(spanModal)
                                    
                                        var closingModal = document.createElement('i')
                                        closingModal.id = 'closingModal'
                                        closingModal.classList = 'fa-solid fa-xmark'
                                        document.getElementById('modalContent').append(closingModal)
                                        document.getElementById('modalContent').addEventListener('click', function(){
                                            document.getElementById('modal').removeChild(document.getElementById('modal').firstElementChild)
                                            document.getElementById('modal').classList.remove('yes');
                                        })
                                        window.onclick = function(event) {
                                            if (event.target == document.getElementById('modal')) {
                                                var removeTime = document.getElementById('modal');
                                                removeTime.removeChild(removeTime.firstElementChild);
                                                document.getElementById('modal').classList.remove('yes');
                                            }
                                        }
                                    })
                                }
                            })
                        })
                        listActual[x].actualID[i] = response.results[i].id;
                        listActual[x].title[i] = response.results[i].title;
                    }
                    resolve();
                    x++;
                })
            }
        })
    });
}
var listID = pastList[1].pastID
for (let y = 0; y < listID.length; y++) {
    if (pastList[1].pastID[y] !== listID[y]) {
        if ( y === 19){
            nouveauFilms = nouveauFilms + listActual[1].title[y];
            newFilmCount++;
        }
        else{
            nouveauFilms = nouveauFilms + listActual[1].title[y] + ', ';
            newFilmCount++;
        }
    }
    else{
        break;
    }
    console.log(y)    
}
setTimeout(() => {
    if (newFilmCount !== 0) {
        var modalGeneralGen = document.createElement('div');
        modalGeneralGen.id = 'modalAlert';
        modalGeneralGen.classList = 'modalAlert';
        document.getElementById('main').append(modalGeneralGen);
        var modalContentGen = document.getElementById('div');
        modalContentGen.id = 'modalAlertContent';
        modalContentGen.classList = 'modal-content-alert';
        document.getElementById('modalAlert').append(modalContentGen);
        var divMessage = document.createElement('div');
        divMessage.textContent = 'Voici les nouveaux films à l\'affiche:' + nouveauFilms;
        document.getElementById('modalAlertContent').append(divMessage);

    }
    else {
        var modalGeneralGen = document.createElement('div');
        modalGeneralGen.id = 'modalAlert';
        modalGeneralGen.classList = 'modalAlert';
        document.getElementById('main').append(modalGeneralGen);
        var modalContentGen = document.createElement('div');
        modalContentGen.id = 'modalAlertContent';
        modalContentGen.classList = 'modal-content-alert';
        document.getElementById('modalAlert').append(modalContentGen);
        var leftColAlert = document.createElement('div');
        leftColAlert.id  = 'leftColAlert';
        document.getElementById('modalAlertContent').append(leftColAlert);
        var divMessage = document.createElement('div');
        divMessage.id = 'messageNewFilm'
        divMessage.textContent = 'Pas de nouveaux film à l\'affiche depuis la dernière visite';
        document.getElementById('modalAlertContent').append(divMessage);
        var rightColAlert = document.createElement('div');
        rightColAlert.id  = 'rightColAlert';
        document.getElementById('modalAlertContent').append(rightColAlert);
        document.getElementById('modalAlertContent').addEventListener('click', function(){
            document.getElementById('modalAlert').style.display = "none";
        }) 
    }
}, 100);

function createElement(typeElement, elementID, elementIDLocation, elementClass, elementSrc, elementTextContent){
    var createElement = document.createElement(typeElement);
    createElement.id = elementID;
    createElement.classList = elementClass;
    createElement.src = elementSrc;
    createElement.textContent = elementTextContent;
    document.getElementById(elementIDLocation).append(createElement);
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modalAlert')) {
        document.getElementById('modalAlert').style.display = "none";
    }
}

document.getElementById('logoNav').addEventListener('click',function(){
    var offsetTop = document.getElementById('h1').offsetTop;
    console.log(offsetTop)
    var offsetLeft = document.getElementById('h1').offsetLeft;
    console.log(offsetLeft)
    window.scrollTo(offsetTop,offsetLeft)
})
document.getElementById('logoMobileNav').addEventListener('click',function(){
    var offsetTop = document.getElementById('h1').offsetTop;
    var offsetLeft = document.getElementById('h1').offsetLeft;
    window.scrollTo(offsetTop,offsetLeft)
})
