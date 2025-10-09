# 🧩 Angular User Authentication App

Aplicação desenvolvida em **Angular 18** com **PrimeNG** e **JSON Server** para autenticação de usuários (registro e login).  

---

## 🚀 Tecnologias Utilizadas

- **Angular 18**
- **PrimeNG** (UI Components)
- **PrimeIcons**
- **JSON Server** (simulação de API REST)
- **RxJS / Observables**
- **TypeScript**

---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── login/
│   │   │   ├── login.component.ts
│   │   │   ├── login.component.html
│   │   │   └── login.component.css
│   │   └── register/
│   │       ├── register.component.ts
│   │       ├── register.component.html
│   │       └── register.component.css
│   ├── services/
│   │   └── auth.service.ts
│   ├── models/
│   │   └── user.model.ts
│   ├── app.routes.ts
│   └── app.component.ts
├── assets/
│   └── ...
└── db.json ← Mock de banco de dados para o JSON Server
```

---

## ⚙️ Instalação e Execução

### 1️⃣ Clonar o projeto

```bash
git clone https://github.com/seu-usuario/angular-login-primeng.git
cd angular-login-primeng
```

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Rodar o JSON Server

O JSON Server simula uma API REST que armazena os usuários registrados.

Crie (ou edite) o arquivo `db.json` na raiz do projeto com este conteúdo:

```json
{
  "users": []
}
```

E execute o servidor:

```bash
npx json-server --watch db.json --port 3000
```

O servidor ficará disponível em:  
http://localhost:3000/users

### 4️⃣ Rodar a aplicação Angular

Em outro terminal:

```bash
ng serve
```

A aplicação será executada em:  
http://localhost:4200

---

## 🔐 Funcionalidades

- ✅ Registro de usuário
- ✅ Login com validação
- ✅ Armazenamento de sessão (sessionStorage)
- ✅ Validações de formulário com ngModel e pattern
- ✅ Componentes visuais com PrimeNG
- ✅ Integração com JSON Server via HttpClient

---

## 🧠 Observações

- O pattern do campo de e-mail foi corrigido para evitar erro de regex no navegador:

  ```
  pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
  ```

- Caso o `getUserDetails()` retorne mais de um usuário, revise o mock ou os filtros aplicados no `auth.service.ts`.

---

## 💡 Possíveis Melhorias Futuras

- Adicionar guards para proteger rotas autenticadas
- Implementar logout e expiração de sessão
- Migrar o JSON Server para uma API real (Node, Nest, etc.)
- Criar validações customizadas com Reactive Forms
- Adicionar interceptors para headers e tratamento de erros globais

---

## 👩‍💻 Desenvolvido por

**Ana Maria**  
Frontend Developer — Angular | TypeScript | PrimeNG

---