# Let's Code Blog 🚀

Este é o projeto final desenvolvido para o curso da Let's Code. A proposta era criar um blog com um tema livre, aplicando conceitos de desenvolvimento web.

## 📖 Sobre o Projeto
O tema escolhido para o blog foi Fotografia. O blog é uma plataforma informativa, com seções para artigos onde irá centralizar outros artigos, galeria de imagens, depoimentos, e mais.

## 🌐 Demonstração
Veja o projeto em funcionamento: [Let's Code Blog](https://davi-d18.github.io/blog_foto-arte)

### Funcionalidades

- **Galeria de Fotos Dinâmica**:
Exibe fotos organizadas de forma interativa, com carregamento preguiçoso (lazy loading) e visualização ampliada em um modal ao clicar nas imagens.
  - **`Observação`**:
  As imagens usadas como preview nos álbuns e as renderizadas na página principal são armazenadas em um álbum no Google Fotos. Isso foi feito para otimizar o carregamento das imagens, utilizando links diretos em vez de importá-las diretamente nos arquivos JavaScript.

- **Artigos sobre Fotografia**:
Uma seção dedicada a conteúdos informativos sobre fotografia, que são renderizados dinamicamente.

- **Álbuns de Pessoas**: Os usuários podem conferir os álbuns criados por outras pessoas

## 🔧 Estrutura e Tecnologias
O projeto é construído com **HTML**, **CSS** e **JavaScript** puro, organizados em uma estrutura simples.

## Estrutura do Projeto

```bash
  FotoArte/
  ├── index.html
  ├── src/ 
  │   ├── assets/ 
  │   │   ├── favicon
  │   │   └── icons
  │   ├── data/ 
  │   │   ├── albuns.js
  │   │   ├── artigos.js
  │   │   └── imagens.js
  │   ├── js/
  │   │   ├── index.js
  │   │   └── renderArtigos.js
  │   ├── pages/
  │   │   └── Albuns
  │   │       ├── js
  │   │       │   └── renderAlbum.js
  │   │       ├── style
  │   │       │   ├── album.css
  │   │       │   └── mediaQuerie.css
  │   │       └── album.html
  │   └── styles/
  │       ├── global.css 
  │       ├── index.css
  │       └── mediaQuerie.css
```

## Descrição dos Arquivos:
- **`index.html`**:  
  É a página principal do blog, servindo como ponto de entrada para os usuários.

- **`src/`**:  
  Diretório que contém os arquivos essenciais do projeto, como recursos visuais, dados, scripts e estilos organizados em subpastas:

---

### Subpastas do Diretório `src/`

#### **`assets/`**  
Armazena recursos visuais do projeto:
  - **`favicon/`**:  
    Contém o ícone do site exibido no navegador.
  - **`icons/`**:  
    Inclui ícones utilizados em diferentes partes do blog.

#### **`data/`**  
Diretório onde estão os arquivos de dados em JavaScript que centralizam informações para o blog:
  - **`albuns.js`**:  
    Contém dados sobre os álbuns de fotografia disponíveis no site.
  - **`artigos.js`**:  
    Centraliza conteúdos de fotografia coletados de diversas fontes, incluindo links e imagens, organizados para alimentar o blog.
  - **`imagens.js`**:  
    Lista imagens e seus detalhes para renderização na seção de galeria.

#### **`js/`**  
Scripts JavaScript principais:
  - **`index.js`**:  
    Gerencia a exibição dinâmica da galeria de fotos e implementa um modal interativo para visualizar imagens com mais informações.
  - **`renderArtigos.js`**:  
    É responsável por renderizar os conteúdos de fotografia na página, dinamicamente.

#### **`pages/`**  
Diretório dedicado às páginas específicas do blog:
  - **`Albuns/`**:  
    Pasta para a página de álbuns de fotografia:
    - **`js/`**:  
      Contém o arquivo **`renderAlbum.js`**, que lida com a renderização dinâmica dos álbuns.
    - **`style/`**:  
      Abriga os arquivos de estilo específicos da página:
      - **`album.css`**:  
        Estiliza os elementos visuais dos álbuns.
      - **`mediaQuerie.css`**:  
        Define regras CSS responsivas para a página.
    - **`album.html`**:  
      Página HTML que exibe os álbuns de fotografia.

#### **`styles/`**  
Pasta que centraliza os arquivos CSS do projeto:
  - **`global.css`**:  
    Define os estilos globais aplicados em todas as páginas.
  - **`index.css`**:  
    Estilos específicos para a página principal.
  - **`mediaQuerie.css`**:  
    Define regras responsivas para garantir uma boa experiência em diferentes tamanhos de tela.
