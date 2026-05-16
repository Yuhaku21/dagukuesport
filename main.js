
        // Custom cursor
        const cursor = document.getElementById('cursor');
        const ring = document.getElementById('cursorRing');
        let mx = 0, my = 0, rx = 0, ry = 0;
        document.addEventListener('mousemove', e => {
            mx = e.clientX; my = e.clientY;
            cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
        });
        function animRing() {
            rx += (mx - rx) * 0.12;
            ry += (my - ry) * 0.12;
            ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
            requestAnimationFrame(animRing);
        }
        animRing();

        // Scroll reveal
        const reveals = document.querySelectorAll('.scroll-reveal');
        const observer = new IntersectionObserver(entries => {
            entries.forEach((e, i) => {
                if (e.isIntersecting) {
                    setTimeout(() => e.target.classList.add('visible'), i * 80);
                }
            });
        }, { threshold: 0.1 });
        reveals.forEach(el => observer.observe(el));

        // Team filter
        function filterTeam(div) {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            event.target.classList.add('active');
            document.querySelectorAll('.member-card').forEach(card => {
                if (div === 'all' || card.dataset.div === div) {
                    card.style.display = '';
                    card.style.animation = 'fadeUp 0.4s ease both';
                } else {
                    card.style.display = 'none';
                }
            });
        }


        // Stagger achievement cards
        document.querySelectorAll('.achievement-card').forEach((card, i) => {
            card.style.transitionDelay = (i * 0.06) + 's';
        });


   