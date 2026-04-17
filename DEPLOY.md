# Passo a passo — Publicar no Netlify via GitHub

Guia para quem nunca fez isso. Sem terminal. Só cliques.

**Tempo estimado:** ~20 minutos.

---

## 📋 Antes de começar

Você vai precisar de:

1. Uma conta Gmail nova (você já planejou criar)
2. Acesso à pasta `code/` deste projeto

Tudo o mais a gente cria ao longo do caminho.

---

## PASSO 1 · Criar a conta no GitHub

> GitHub é onde o código do site fica guardado. Pense nele como uma "Dropbox só para código".

1. Abra <https://github.com/signup>
2. Use a **conta Gmail nova**
3. Escolha um nome de usuário (ex.: `raquel2026`, `estrategia-rl`, etc.)
4. Senha forte. Anote em um gerenciador de senhas.
5. Valide o e-mail no link que chegar no Gmail.
6. Quando perguntar sobre plano, escolha **Free** (é grátis pra sempre).

✅ Pronto. Você tem uma conta GitHub.

---

## PASSO 2 · Instalar o GitHub Desktop

> É o app que vai enviar os arquivos do seu computador pro GitHub de forma visual, sem linha de comando.

1. Abra <https://desktop.github.com/>
2. Clique em **Download for Windows**
3. Rode o instalador (próximo, próximo, finalizar)
4. Abra o **GitHub Desktop**
5. Clique em **Sign in to GitHub.com** e faça login com a conta que você acabou de criar
6. Na tela "Configure Git", ele pega seu nome/e-mail automaticamente — só clicar em **Finish**

✅ Instalado e logado.

---

## PASSO 3 · Publicar a pasta do site no GitHub

1. No GitHub Desktop, clique em **File → Add local repository** (ou **Add an Existing Repository from your Hard Drive**)
2. Em **Local path**, clique em **Choose…** e navegue até a pasta:
   ```
   G:\Meu Drive\_PROJETOS\TuiMari\_Dione\Página_Proposta_Dione\code
   ```
3. Ele vai avisar algo tipo _"This directory does not appear to be a Git repository. Would you like to create a repository here instead?"_ — clique em **create a repository** (o link azul).
4. Preencha:
   - **Name:** `raquel2026-estrategia` (ou outro nome que preferir)
   - **Description:** `Estratégia de pré-campanha - Raquel Lyra 2026`
   - **Local path:** (já está preenchido)
   - **Initialize with README:** ❌ deixe desmarcado (já temos um README)
   - **Git ignore:** deixe **None**
   - **License:** deixe **None**
5. Clique em **Create repository**.

Agora, no canto inferior esquerdo, você vai ver uma lista de arquivos. Na caixa de "Summary", escreva:
```
Primeira publicação
```
E clique em **Commit to main** (botão azul embaixo).

Depois, no topo da janela, clique no botão **Publish repository**.

Na janela que abrir:
- **Name:** (já preenchido)
- **Description:** (opcional)
- ✅ **Keep this code private** — MARQUE ESSA OPÇÃO (importante — seu código é confidencial)

Clique em **Publish Repository**.

✅ Seu código está no GitHub (privado).

> 💡 **Para conferir:** abra github.com, entre com sua conta, e você vai ver o repositório na página inicial.

---

## PASSO 4 · Criar a conta no Netlify

> Netlify é quem vai transformar seus arquivos em um site real na internet, com um link acessível.

1. Abra <https://app.netlify.com/signup>
2. Clique no botão **GitHub** (não precisa criar conta nova — usa a mesma)
3. Vai pedir permissão pro Netlify acessar seu GitHub → **Authorize Netlify**
4. Pode aparecer uma pergunta sobre "team name" — use seu nome mesmo e **Continue**

✅ Conta Netlify criada.

---

## PASSO 5 · Publicar o site

1. No painel do Netlify, clique em **Add new site → Import an existing project**.
2. Escolha **Deploy with GitHub**.
3. Ele vai pedir pra autorizar o acesso aos repositórios. Clique em **Configure the Netlify app on GitHub**.
4. Na página do GitHub que abrir:
   - Escolha **Only select repositories**
   - Selecione `raquel2026-estrategia` (ou o nome que você usou)
   - Clique em **Save**
5. Voltando pro Netlify, selecione o repositório na lista.
6. Na tela de configuração do deploy, deixe tudo como está:
   - **Branch to deploy:** `main`
   - **Build command:** (vazio)
   - **Publish directory:** `.`
   > O arquivo `netlify.toml` que já está no projeto cuida das configurações automaticamente.
7. Clique em **Deploy [nome-do-site]**.

Agora é esperar uns 30-60 segundos. Vai aparecer um status "Published" com um link tipo:
```
https://whimsical-unicorn-a1b2c3.netlify.app
```

✅ **Seu site está no ar!** Clique no link e teste.

> Pra acessar o conteúdo, digite o código: `vemfuturo2026`

---

## PASSO 6 · Escolher uma URL melhor (opcional)

O nome gerado é aleatório. Pra trocar:

1. No painel do site no Netlify, vá em **Site configuration → General → Site details**.
2. Clique em **Change site name**.
3. Digite algo como `rl-estrategia-2026` — fica `rl-estrategia-2026.netlify.app`.
4. Salve.

O link antigo para de funcionar, só o novo vale.

---

## 🔄 Como atualizar o site depois

Quando você quiser mudar texto, trocar foto, etc.:

1. Edite os arquivos na pasta `code/` (no seu computador).
2. Abra o **GitHub Desktop**.
3. Ele mostra os arquivos modificados automaticamente.
4. Na caixa "Summary", escreva uma frase do que mudou (ex.: `Atualiza texto do Eixo 2`).
5. Clique em **Commit to main**.
6. Clique em **Push origin** (botão no topo).
7. Pronto. O Netlify detecta e republica sozinho em ~30 segundos.

---

## 🔐 Sobre a senha

- **Código atual:** `vemfuturo2026`
- Quem tem o link + o código, entra. Quem só tem o link, não.
- Pra trocar o código: veja a seção "Trocar o código" no [README.md](README.md).

---

## ❓ Problemas comuns

**"O GitHub Desktop não aceita a pasta, diz que tem arquivos do Google Drive"**
→ O Google Drive cria uns arquivos ocultos (`desktop.ini`). Eles já estão no `.gitignore` — ignore o aviso e prossiga.

**"O Netlify não encontra meu repositório"**
→ Volte ao PASSO 5, item 3, e confira se você marcou o repositório na lista do GitHub.

**"Deploy falhou"**
→ Quase sempre é o publish directory. Confirme que está `.` (um ponto só). Se falhou mesmo assim, me manda o print do log que eu vejo.

**"Meu domínio próprio"**
→ Se você comprar um domínio tipo `estrategia-rl.com.br` depois, dá pra apontar pro Netlify sem custo. Me chama quando tiver.

---

## 📬 Quando terminar

Me passa o link do Netlify. A partir daí eu te ajudo a:
- Trocar os 3 placeholders pelas fotos reais
- Ajustar qualquer coisa no visual
- Configurar domínio próprio se for o caso
