import { NotFoundContainer } from "./style.js";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <img src="https://media2.giphy.com/media/l2YWsLzUTibpLQure/200w.webp?cid=ecf05e47pgfbzoem2l7fepjm88rkxrp1ilq39s8cb4y9xl23&ep=v1_gifs_search&rid=200w.webp&ct=g" alt="gif de um gremlin segurando chocolates"/>
     
      <h3> 404 - pagina não encontrada</h3>
      <p>Ops! Parece que alguém escondeu esta página. Talvez tenha sido um gremlin travesso.</p>
      <p>Mas não se preocupe, você pode voltar à <a href='/search'>página inicial</a> e tentar novamente.</p>
    </NotFoundContainer>
  );
}

export default NotFound;