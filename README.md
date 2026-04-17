# Estratégia de Pré-Campanha — Raquel Lyra 2026

Página privada (single-page) apresentando o documento estratégico de pré-campanha, com gate de acesso por código e visual inspirado no banner oficial "Vem Futuro, Vem Raquel".

---

## 🔑 Código de acesso

```
vemfuturo2026
```

O gate aceita variações (maiúsculas/minúsculas, acentos, espaços) — são normalizadas antes da comparação.

> **Segurança:** o código é verificado por hash **SHA-256** no lado do cliente e guardado em `sessionStorage` (precisa digitar de novo a cada aba/sessão nova). É adequado para um link compartilhado com senha — não para conteúdo com proteção criptográfica forte. Para blindar o conteúdo de fato (até contra "ver código-fonte"), veja a seção **Segurança reforçada** no fim deste README.

### Trocar o código

1. Escolha uma nova frase (ex.: `pernambucoavanca2026`).
2. Calcule o SHA-256 dela. Opções:
   - **Online:** <https://emn178.github.io/online-tools/sha256.html>
   - **Terminal (Linux/Mac):** `echo -n "novafrase" | shasum -a 256`
   - **PowerShell:** `'novafrase' | Out-File -Encoding ASCII tmp.txt -NoNewline ; Get-FileHash tmp.txt -Algorithm SHA256`
   - **Python:** `python -c "import hashlib; print(hashlib.sha256('novafrase'.encode()).hexdigest())"`
3. Abra [`script.js`](script.js) e substitua o valor de `EXPECTED_HASH` pelo hash novo.
4. Faça commit e push — o Netlify publica em segundos.

---

## 📁 Estrutura

```
code/
├── index.html      # página única (gate + conteúdo)
├── styles.css      # todos os estilos (paleta do banner)
├── script.js       # gate, animações e navegação
├── netlify.toml    # headers de segurança + cache
├── robots.txt      # bloqueia indexação
├── .gitignore
└── README.md       # este arquivo
```

---

## 🖼️ Substituir as fotos

Existem **3 espaços reservados** para imagens oficiais:

| Local | ID no HTML | Onde aparece |
|---|---|---|
| Hero (banner principal) | `data-placeholder="hero"` | Primeira dobra, coluna direita |
| Break 1 | `data-placeholder="campanha-1"` | Depois do Diagnóstico |
| Break 2 | `data-placeholder="campanha-2"` | Depois do Posicionamento |

Para trocar um placeholder por imagem real:

1. Coloque a imagem na raiz do projeto (ou crie a pasta `images/`).
2. Em [`index.html`](index.html), substitua o bloco `<div class="photo-placeholder ...">…</div>` correspondente por:
   ```html
   <img src="images/hero.jpg" alt="Raquel Lyra" class="hero__photo-img">
   ```
3. Recomendo manter a mesma proporção:
   - Hero: **4:5** (ex.: 1200×1500)
   - Breaks: **21:9** (ex.: 1800×770)

Se preferir, me avise quando as imagens estiverem no ar (ex.: Cloudinary, S3, repositório `raquel2026/assets`) que ajusto os links no HTML.

---

## 🚀 Deploy no Netlify (grátis) via GitHub

### 1. Criar repositório no GitHub

Com a **nova conta Gmail** separada que você criou:

1. Cria a conta no GitHub com esse e-mail.
2. Novo repositório: `raquel2026-estrategia` (ou outro nome). Deixe **Private**.
3. No terminal, dentro da pasta `code/`:
   ```bash
   git init
   git add .
   git commit -m "Setup inicial — página de estratégia"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/raquel2026-estrategia.git
   git push -u origin main
   ```

### 2. Conectar ao Netlify

1. Cria conta em <https://app.netlify.com/signup> com a **mesma** conta Google.
2. **Add new site → Import an existing project → Deploy with GitHub**.
3. Autoriza e seleciona o repositório `raquel2026-estrategia`.
4. Configurações de build (o `netlify.toml` já faz isso):
   - Branch: `main`
   - Build command: *(vazio)*
   - Publish directory: `.`
5. **Deploy site.** Em ~30s o site estará no ar numa URL como `random-name-12345.netlify.app`.

### 3. Customizar URL (opcional)

- Em **Site settings → Change site name** — pode virar algo tipo `rl-estrategia-2026.netlify.app`.
- Quer domínio próprio (ex.: `estrategia.raquelyra.com.br`)? Dá pra apontar gratuitamente — me chama quando tiver o domínio que configuro.

### 4. Publicar atualizações

Edita os arquivos → commita → empurra pro GitHub. O Netlify detecta o push e republica automaticamente em segundos.

```bash
git add .
git commit -m "Atualiza copy do Eixo 2"
git push
```

---

## 🎨 Paleta (extraída do banner "Vem Futuro")

| Cor | Hex |
|---|---|
| Amarelo | `#FFE600` |
| Ciano | `#1BC7B2` |
| Verde | `#2CE07F` |
| Laranja | `#FF8E3C` |
| Rosa | `#FF3D7F` |
| Magenta | `#E83A8B` |
| Roxo | `#7B3FF2` |

Todas centralizadas em [`styles.css`](styles.css) na seção `:root` — dá pra ajustar tudo num só lugar.

---

## 🔐 Segurança reforçada (opcional — **recomendado** para confidencial)

O gate atual impede acesso casual, mas alguém tecnicamente versado pode ver o conteúdo inspecionando o HTML direto (a senha só desbloqueia o que já está na página). Se quiser blindar o conteúdo com **criptografia real**, a forma mais simples em Netlify grátis é o **StatiCrypt**:

```bash
npm install -g staticrypt
staticrypt index.html --password "vemfuturo2026" --short -o protegido.html
```

Isso gera um `protegido.html` com o conteúdo **criptografado com AES-256** — só quem digita a senha consegue ver qualquer coisa, nem pelo "View Source". Depois você renomeia `protegido.html` → `index.html` e publica.

Posso integrar isso no fluxo se você quiser — me avisa.

---

## ℹ️ Observações

- A página tem `noindex, nofollow` e `robots.txt` bloqueando indexação — não aparece em buscas.
- O conteúdo textual é **100% fiel** ao documento `Estrategia-Pre.docx` original.
- Fonte Datafolha mantida como no documento: **Abril de 2025**.
- A página é **responsiva** (mobile, tablet, desktop) e funciona sem JavaScript para a parte visual (só o gate exige JS).

---

**Dúvidas ou quiser ajustar o visual?** Me chama.
