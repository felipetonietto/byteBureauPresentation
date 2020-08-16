import React from "react";
// import ScrollAnimation from "react-animate-on-scroll";
import novousuario from "../novousuario.svg";
import blockchain from "../blockchain.svg";
import privatekeys from "../privatekeys.svg";
import mining from "../mining.svg";
import Panel from "./Panel";

class Introducao extends React.Component {
  render() {
    return (
      <div>
        <div className="hero text-center" id="introducao">
          <Panel></Panel>
          <h1 className="text-light pt-5">Introdução</h1>
          <h1 className="text-light">O Dinheiro como Tecnologia</h1>
          <h2 className="text-muted">
            Breve Histórico e sua aplicação nos dias atuais
          </h2>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-md-center">
          <div className="flex-row d-sm-flex mb-4 texts">
            <div className="mx-2">
              <img
                className="img-fluid"
                src={novousuario}
                alt="novousuario"
              ></img>
            </div>
            <div
              className="col text-justify mt-4 mb-4"
              style={{ width: "30rem" }}
            >
              <h4>O Dinheiro: trocas, abstrações de valores, papel-moeda</h4>
              <p>
                Dinheiro é uma das tecnologias mais antigas da humanidade, que
                surge espontaneamente entre a relação de quaisquer indivíduos
                que decidam interagir comercialmente. Na história do dinheiro,
                que compreende dezenas de milhares de anos, aconteceram diversas
                grandes mudanças de padrões econômicos e monetários. Partindo de
                puras trocas por escambo, para a introdução das abstrações de
                valores, como conchas, penas, sementes, pedras, sal, gado, e
                metais preciosos, estes últimos deram início às instituições de
                custódia que, com o respaldo dos governantes, emitiam os
                certificados de custódia que foram o embrião do papel-moeda como
                conhecemos hoje. O dinheiro padronizado e em ampla circulação,
                conseguindo permear todas as camadas econômicas, permitiu que
                fossem criados mercados complexos pela simples interação dos
                indivíduos, que, sem se dar conta, eram coordenados por leis
                econômicas formadas pelos sistemas de preços.
              </p>
            </div>
          </div>
          <div className="flex-row d-sm-flex mb-4 texts">
            <div
              className="col text-justify mt-4 mb-4"
              style={{ width: "30rem" }}
            >
              <h4>Inovação como consequência da interação</h4>
              <p>
                A interação de muito mais pessoas na economia teve como efeito
                uma explosão de inovação numa reação em cadeia em escala
                exponencial, cada uma com a sua devida importância, embora
                algumas mais notórias que outras. O surgimento da internet como
                uma das consequências do processo inovador e evolutivo
                revolucionou cada aspecto da vida humana. Foi uma revolução de
                descentralização, em que cada pessoa passou a poder se comunicar
                diretamente com outra, aumentando a escala com que as pessoas
                poderiam interagir, e novamente, por sua vez, gerando cada vez
                mais criação e inovação. Não obstante, a internet nunca
                conseguiu ser disruptiva no mercado financeiro da mesma forma
                que foi em outros setores. Desde a criação dos bancos, o sistema
                financeiro nunca passou por nenhuma grande mudança, e internet
                serviu apenas para implementar os sistemas bancários e
                financeiros já existentes.
              </p>
            </div>
            <div>
              <img
                className="img-fluid"
                src={blockchain}
                alt="blockchain"
              ></img>
            </div>
          </div>
          <div className="flex-row d-sm-flex mb-4 texts">
            <div className="mx-2">
              <img
                className="img-fluid"
                src={privatekeys}
                alt="privatekeys"
              ></img>
            </div>
            <div
              className="col text-justify mt-4 mb-4"
              style={{ width: "30rem" }}
            >
              <h4>Sistema Financeiro</h4>
              <p>
                Uma revolução no sistema financeiro proveniente da criação da
                internet falhou em acontecer por dois grandes motivos. O
                primeiro foi por causa da resistência imposta pelos bancos e os
                Estados, os quais tinham interesse em manter a centralização do
                poder decorrente do controle das economias. O segundo foi pelo
                fato de ninguém nunca ter conseguido criar um sistema de larga
                escala em que ficassem registradas as informações das ações dos
                participantes, de maneira que todos conseguissem se sincronizar
                de acordo com essas informações, sem que houvesse a necessidade
                de um intermediário central dizendo quais são as informações
                verdadeiras e falsas. No caso dos bancos, por exemplo, eles são
                os intermediários que dizem quais são as transações financeiras
                válidas, e detêm o controle dos registros dos saldos dos
                participantes.
              </p>
            </div>
          </div>
          <div className="flex-row d-sm-flex mb-4 texts">
            <div
              className="col text-justify mt-4 mb-4"
              style={{ width: "30rem" }}
            >
              <h4>Bitcoin</h4>
              <p>
                O Bitcoin foi criado em 2008 com a proposta de solucionar o
                segundo problema do porquê nunca ter acontecido uma grande
                revolução da internet no sistema financeiro. Ele nada mais é do
                que uma metodologia, uma forma de registrar informações que
                envolvem a relação de quaisquer participantes, sem a necessidade
                de que haja alguma autoridade dizendo quais são as informações
                verdadeiras e quais são as falsas, pois é um sistema em que
                qualquer um pode verificar por si mesmo. Quando essa metodologia
                é aplicada em escala por meio da internet, tem-se hoje o que é
                um potencial grande sistema financeiro com o envolvimento de
                qualquer um que queira participar, e que não está sob o controle
                de nenhuma autoridade central. É a internet de um sistema
                financeiro, concorrente ao sistema financeiro convencional dos
                bancos e governos, eliminando, assim, o conflito de interesses
                que existe entre os que hoje detêm o controle da economia e os
                participantes das economias.
              </p>
            </div>
            <div>
              <img className="img-fluid" src={mining} alt="mining"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Introducao;
