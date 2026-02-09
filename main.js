
        /* NAVBAR */
        const toggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        toggle.onclick = () => navLinks.classList.toggle('active');

        /* GLOW */
        const items = document.querySelectorAll('.nav-links li');
        const glow = document.querySelector('.nav-glow');
        items.forEach(item => {
            item.addEventListener('mouseenter', () => {
                glow.style.width = item.offsetWidth + 'px';
                glow.style.left = item.offsetLeft + 'px';
            });
        });

        /* MODAL */
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-img');
        document.querySelectorAll('.cert-grid img').forEach(img => {
            img.onclick = () => {
                modal.style.display = 'flex';
                modalImg.src = img.src;
            }
        });
        modal.onclick = () => modal.style.display = 'none';

        /* COUNTER */
        document.querySelectorAll('.number').forEach(counter => {
            const target = +counter.dataset.target;
            let count = 0;
            const run = () => {
                count += Math.ceil(target / 50);
                if (count < target) {
                    counter.innerText = count;
                    requestAnimationFrame(run);
                } else {
                    counter.innerText = target + '+';
                }
            };
            run();
        });
