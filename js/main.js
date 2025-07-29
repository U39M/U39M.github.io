document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');

        // アクセシビリティ対応
        const isOpen = hamburger.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isOpen);
        nav.setAttribute('aria-hideen', !isOpen);
    });

    // メニューの外側をクリックした時の処理
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav') && !e.target.closest('.hamburger') && nav.classList.contains('active')){
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            hamburger.setAttribute('aria-expanded', false);
            nav.setAttribute('aria-hidden', true);
        }
    });
});

$(function() {
    var topLinkIcon = $('.top-link-icon');
    // スクロールしてページトップから100に達したらボタンを表示
    $(window).on('load scroll', function() {
        if ($(this).scrollTop() > 100) {
            topLinkIcon.addClass('active');
        }else{
            topLinkIcon.removeClass('active');
        }
    });
});
