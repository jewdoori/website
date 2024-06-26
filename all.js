document.addEventListener('DOMContentLoaded', function() {
    const audio1 = document.getElementById('audio1');
    const audio2 = document.getElementById('audio2');
    const textSpans1 = document.querySelectorAll('.p1 span');
    const textSpans2 = document.querySelectorAll('.p2 span');

    function highlightText(audio, textSpans) {
        const currentTime = audio.currentTime;
        
        textSpans.forEach(span => {
            const start = parseFloat(span.getAttribute('data-start'));
            const end = parseFloat(span.getAttribute('data-end'));
            
            if (currentTime >= start && currentTime <= end) {
                span.classList.add('yellow');
            } else {
                span.classList.remove('yellow');
            }
        });
    }

    audio1.addEventListener('timeupdate', function() {
        highlightText(audio1, textSpans1);
    });

    audio2.addEventListener('timeupdate', function() {
        highlightText(audio2, textSpans2);
    });
});