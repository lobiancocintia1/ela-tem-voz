function showScreen(screenId) {
            const screens = document.querySelectorAll('.screen');
            screens.forEach(screen => screen.classList.remove('active'));

            const targetScreen = document.getElementById(`screen-${screenId}`);
            if (targetScreen) targetScreen.classList.add('active');

            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => link.classList.remove('active'));
            
            const activeNav = document.getElementById(`nav-${screenId}`);
            if (activeNav) activeNav.classList.add('active');
        }

        function toggleContrast() {
            document.body.classList.toggle('high-contrast');
        }

        let fontSizeLevel = 1;
        function increaseFont() {
            if (fontSizeLevel < 1.35) {
                fontSizeLevel += 0.10;
                document.documentElement.style.fontSize = `${fontSizeLevel * 100}%`;
            }
        }

        function decreaseFont() {
            if (fontSizeLevel > 0.85) {
                fontSizeLevel -= 0.10;
                document.documentElement.style.fontSize = `${fontSizeLevel * 100}%`;
            }
        }

        // Inserção do Código JavaScript para Contatos (Sem a frase "ou acesse suportes especializados")
        document.addEventListener("DOMContentLoaded", function() {
            const subtituloContatos = document.getElementById("contatos-subtitulo");
            if (subtituloContatos) {
                subtituloContatos.textContent = "Fale conosco.";
            }

            const containerContatos = document.getElementById("container-contatos-js");
            if (containerContatos) {
                containerContatos.innerHTML = `
                    <div class="emergency-card" style="grid-column: 1 / -1;">
                        <h3>E-mail do Projeto</h3>
                        <a href="mailto:cintia.lobianco.elatemvoz@gmail.com" class="number" style="font-size: 1.4rem; word-break: break-all;">cintia.lobianco.elatemvoz@gmail.com</a>
                        <span>Contato oficial e parcerias</span>
                    </div>
                `;
            }

            const containerEmergencia = document.getElementById("container-emergencia-js");
            if (containerEmergencia) {
                containerEmergencia.innerHTML = `
                    <div class="emergency-card">
                        <h3>Delegacia Especializada (DEAM)</h3>
                        <a href="tel:197" class="number">Ligue 197</a>
                        <span>Polícia Civil (consulte unidades locais)</span>
                    </div>
                `;
            }
        });