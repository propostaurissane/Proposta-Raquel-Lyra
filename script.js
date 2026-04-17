/* =========================================================
   GATE DE ACESSO — Raquel Lyra 2026
   -----------------------------------------------------------
   Proteção: SHA-256 hash comparison + sessionStorage
   Observação: Proteção client-side, adequada para uso interno
   da equipe. Para blindagem criptográfica do conteúdo, usar
   StatiCrypt ou similar (ver README).
   ========================================================= */

(function () {
    'use strict';

    // Hash SHA-256 do código de acesso
    const EXPECTED_HASH = '56b94c7c5961519de77b6f6c4e10b7d8c6537130c72e9cb4d75e74b52e2bb994';
    const STORAGE_KEY   = 'rl2026_gate';

    const gate      = document.getElementById('gate');
    const content   = document.getElementById('content');
    const form      = document.getElementById('gate-form');
    const input     = document.getElementById('gate-input');
    const errorEl   = document.getElementById('gate-error');
    const logoutBtn = document.getElementById('logout');

    // -----------------------------------------------------
    // SHA-256 via Web Crypto API
    // -----------------------------------------------------
    async function sha256(text) {
        const buf = new TextEncoder().encode(text);
        const hashBuf = await crypto.subtle.digest('SHA-256', buf);
        return Array.from(new Uint8Array(hashBuf))
            .map(b => b.toString(16).padStart(2, '0'))
            .join('');
    }

    // -----------------------------------------------------
    // Normaliza o input (tira acento, espaço, caixa)
    // -----------------------------------------------------
    function normalize(value) {
        return (value || '')
            .toString()
            .trim()
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s+/g, '');
    }

    // -----------------------------------------------------
    // Libera o conteúdo
    // -----------------------------------------------------
    function unlock() {
        document.body.classList.remove('is-locked');
        gate.classList.add('is-hidden');
        content.hidden = false;
        // remove o overlay depois da transição
        setTimeout(() => { gate.style.display = 'none'; }, 550);
        try { sessionStorage.setItem(STORAGE_KEY, '1'); } catch (_) {}
    }

    // -----------------------------------------------------
    // Erro no gate
    // -----------------------------------------------------
    function showError(msg) {
        errorEl.textContent = msg;
        input.value = '';
        input.focus();
        form.animate(
            [
                { transform: 'translateX(0)' },
                { transform: 'translateX(-8px)' },
                { transform: 'translateX(8px)' },
                { transform: 'translateX(-4px)' },
                { transform: 'translateX(0)' }
            ],
            { duration: 360, easing: 'ease-out' }
        );
    }

    // -----------------------------------------------------
    // Submit
    // -----------------------------------------------------
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        errorEl.textContent = '';
        const attempt = normalize(input.value);
        if (!attempt) {
            showError('Digite o código para continuar.');
            return;
        }
        try {
            const hash = await sha256(attempt);
            if (hash === EXPECTED_HASH) {
                unlock();
            } else {
                showError('Código incorreto. Verifique com a equipe.');
            }
        } catch (err) {
            showError('Erro ao validar. Tente novamente.');
        }
    });

    // -----------------------------------------------------
    // Persistência na sessão (não precisa digitar a cada reload)
    // -----------------------------------------------------
    try {
        if (sessionStorage.getItem(STORAGE_KEY) === '1') {
            unlock();
        }
    } catch (_) {}

    // -----------------------------------------------------
    // Logout
    // -----------------------------------------------------
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            try { sessionStorage.removeItem(STORAGE_KEY); } catch (_) {}
            location.reload();
        });
    }

    // -----------------------------------------------------
    // Foco no input ao carregar
    // -----------------------------------------------------
    window.addEventListener('load', () => {
        if (!content.hidden) return; // já desbloqueado
        setTimeout(() => input && input.focus(), 200);
    });

})();

/* =========================================================
   INTERAÇÕES DE CONTEÚDO
   ========================================================= */
(function () {
    'use strict';

    // Animação das barras de pesquisa quando entram na viewport
    const bars = document.querySelectorAll('.poll-row__fill');
    if (bars.length && 'IntersectionObserver' in window) {
        bars.forEach(b => {
            const pct = b.style.getPropertyValue('--pct');
            b.style.setProperty('--pct', '0%');
            b.dataset.target = pct;
        });
        const io = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    requestAnimationFrame(() => {
                        el.style.setProperty('--pct', el.dataset.target);
                    });
                    obs.unobserve(el);
                }
            });
        }, { threshold: 0.4 });
        bars.forEach(b => io.observe(b));
    }

    // Smooth scroll offset para o nav sticky
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            const id = a.getAttribute('href').slice(1);
            const target = document.getElementById(id);
            if (!target) return;
            e.preventDefault();
            const y = target.getBoundingClientRect().top + window.scrollY - 70;
            window.scrollTo({ top: y, behavior: 'smooth' });
        });
    });

})();
