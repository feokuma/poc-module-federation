# poc-module-federation
Este projeto é uma poc para estudos sobre o funcionamento do module federation com aplicações React e Vite

## Tecnologia
- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Module Federation](https://github.com/originjs/vite-plugin-federation)

## Executando as aplicações
Neste repositório há uma aplicação [`host-poc`](/host-poc/), que é um agregador de outros frontends e foi criado para carregar e renderizar componentes de aplicações remota, e temos a aplicação [`remote-poc`](/remote-poc/) onde está implementado o botão utilizado como 'cobaia' para ser renderizado no host.

É importante executar primeiro a aplicação [remote-poc](/remote-poc/) e depois o [host-poc](/host-poc/) para garantir que o componente exportado ([Button](/remote-poc/src/components/Button.tsx)) já esteja disponível.

### Baixando os pacotes
Este passo deve ser feito nos nas duas aplicações, portanto vou colocar a instrução somente uma vez, mas este comando deve ser executado na raiz dos diretórios das duas aplicações

```shell
npm install
```

### Executando a aplicação remota
Para fazer o teste é necessário que a aplicação seja compilada porque é apartir do bundle que os componentes exportados são carregados. Para fazer isso, na raiz do projeto [remote-poc](/remote-poc/) execute a seguinte combinação de comandos

```shell
npm run build && npm run preview
```
Você provavelmente verá a seguinte saída

```shell
> remote-poc@0.0.0 preview
> vite preview --port 3001

  ➜  Local:   http://localhost:3001/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Ao executar este comando notará que a aplicação estará executando na porta 3001. Abra o browser neste endereço e verá a implementação rodando normalmente como uma aplicação ***React*** comum.

### Executando a aplicação host
A aplicação [host-poc](/host-poc/) irá buscar o componente compartilhado e é por este motivo que o remote já deve estar em execução para que o host consiga se conectar e baixar o bundle. Para executá-la utilize o seguinte comando:

```shell
npm run dev
``` 

Ao executar este comando, tudo já deve estar certo para que a aplicação host-poc esteja apresentando em sua única página o Botão exportado pela aplicação remote-poc
