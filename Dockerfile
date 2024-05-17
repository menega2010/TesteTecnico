# Use a imagem Node.js 20.12.2
FROM node:20.12.2

# Instale uma versão específica do npm globalmente
RUN npm install -g npm@10.5.2

# Configure o diretório de trabalho dentro do container
WORKDIR /usr/app

# Copie o arquivo package.json para o diretório de trabalho
COPY package.json ./

# Instale as dependências, ignorando os problemas de dependências desatualizadas
RUN npm install --legacy-peer-deps

# Copie todo o restante do código-fonte para o diretório de trabalho
COPY . .

# Exponha a porta 5000 para acesso externo
EXPOSE 5000

# Defina o comando padrão para iniciar a aplicação em modo de desenvolvimento
CMD ["npm", "run", "dev"]