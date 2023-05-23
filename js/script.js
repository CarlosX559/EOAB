const animations = document.querySelectorAll("[data-animation]");
const animationClass = "animate";

function animation_scroll() {
  const area_window = window.innerHeight * 0.21 * 4.8;

  animations.forEach((element) => {
    let posicaoAtual = element.getBoundingClientRect().top;

    if (area_window > posicaoAtual) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

if (animations.length) {
  window.addEventListener("scroll", animation_scroll);
}
function menu() {
    $(".menu_mobile_open").click(
        function () {

            $('.menu_mobile').css('display', 'flex').css('top', '100px').css('animation', 'move ease-in 400ms');
            setTimeout(() => {
                $('.menu_mobile_open').css('display', 'none');
                $('.menu_mobile_close').css('display', 'flex');
            }, 200);
        }
    );

    $(".menu_mobile_close").click(
        function () {
            $('.menu_mobile').css('top', '-500%').css('animation', 'move ease-out 400ms;');
            setTimeout(() => {
                if ($('.menu_mobile').css('top', '-500%')) {
                    $('.menu_mobile').css('display', 'none');
                }
            }, 600);

            setTimeout(() => {
                $('.menu_mobile_open').css('display', 'flex');
                $('.menu_mobile_close').css('display', 'none');
            }, 100);

        }

    );
}
menu();
function faq() {

    const quest = document.querySelectorAll(".faq_quests");
    const aswer = document.querySelectorAll(".aswer");
    const img_icon = document.querySelectorAll('.area_img_faq img');

    for (let i = 0; i < quest.length; i++) {

        quest[i].addEventListener("click", () => {

            if (quest[i].classList.contains("close")) {
                quest[i].classList.toggle("close");
                aswer[i].classList.toggle("open");
                img_icon[i].src = 'img/+.svg';
            } else {
                quest[i].classList.add("close");
                aswer[i].classList.add("open");

                img_icon[i].src = 'img/-.svg';
            }


        });

    }


}
faq();

function header() {
    
    let body = document.querySelector('body').getBoundingClientRect();

    if( body.top < -30 ) {
        $('.container_header').css( 'background-color', '#1F1F1F').css( 'top', '0px' );
        $('.container_header_aluno').css( 'top', '0px' );
    }else {
        $('.container_header').css( 'background-color', 'transparent' ).css( 'top', '54px' );
    }

    if(body.width <= 480) {
        $('.container_header').css( 'top', '0px' );
    }

}

window.addEventListener( 'scroll', header );
