import React, { useState } from "react";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Mineracao() {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <>
      <div className="col text-justify" style={{ width: "40rem" }}>
        <p>
          Os mineradores têm a função de coletar uma certa quantidade
          informações de transações propagadas na rede, compilar essas
          informações em o que é chamado de bloco, e aplicar sobre elas um
          grande esforço computacional na forma da resolução de um problema
          matemático, parecido com a tentativa de se encontrar a combinação de
          um cadeado de senha hexadecimal. Esse esforço demanda o uso de uma
          grande quantidade de energia elétrica para alimentar os computadores
          que realizam os cálculos, além de despesas operacionais, que se
          traduzem em um grande custo financeiro. Quando a combinação certa é
          encontrada – chamada de “nonce” –, ela é prontamente enviada para a
          rede junto ao bloco correspondente. Os outros nós da rede então
          verificam se a nonce realmente é a correta, que “abre o cadeado”, e,
          se for, atualizam os seus registros com as informações contidas no
          bloco.
        </p>
      </div>

      <div className="col text-justify" style={{ width: "40rem" }}>
        <p>
          Pode soar estranho, mas esse esforço computacional é chamado de prova
          de trabalho, e não tem finalidade nenhuma senão a de mostrar para
          todos os outros nós que esses recursos foram gastos sobre o bloco que
          o minerador escolheu. Os mineradores fazem isso, pois tem o interesse
          que os nós olhem para o bloco escolhido e atualizem suas blockchains
          com esse bloco. Antes de qualquer outra informação propagada, os nós
          tendem a olhar primeiro para as informações enviadas pelos
          mineradores, pois partem do pressuposto de que, se recursos foram
          gastos para chamar a atenção da rede para aquele bloco, as informações
          contidas neles devem estar verificadas e validadas, servindo assim de
          filtro da rede.
        </p>
      </div>

      <div className="col text-justify" style={{ width: "40rem" }}>
        <p>
          O tamanho do esforço computacional, ou também chamado de dificuldade
          da mineração, segue uma função variável que é determinada por mais uma
          das regras do protocolo, que diz que o problema matemático que valida
          o bloco deve ser difícil o suficiente para que a tentativa de todas as
          pessoas juntas buscando a solução só a encontrem a cada 10 minutos em
          média, e essa média é calculada em parcelas de 2016 blocos. Ou seja, a
          cada 14 dias, aproximadamente, um bloco deve ter sido encontrado a
          cada 10 minutos. Se foi encontrado mais do que um bloco a cada 10
          minutos, o problema fica mais difícil; se foi encontrado menos do que
          um bloco a cada 10 minutos, o problema fica mais fácil.
        </p>
      </div>

      <div className="col text-justify" style={{ width: "40rem" }}>
        <p>
          Existe então um alinhamento de interesses: os nós da rede têm
          interesse em registrar informações válidas, e os mineradores têm
          interesse em chamar a atenção da rede para propagar informações
          válidas. Se o nó registra informação que não seja válida, ele estará
          diferente do restante da rede e, a partir daí, fora da realidade de
          mercado, e o minerador tem o interesse em propagar apenas informações
          válidas. Caso contrário, os nós não registrarão seus blocos em suas
          respectivas blockchains, e, isso acontecendo, toda a prova de trabalho
          aplicada, que demandou gastos financeiros, será desperdiçada.
        </p>
      </div>

      <div className="col text-justify" style={{ width: "40rem" }}>
        <p>
          O sistema todo só é possível porque existe um incentivo financeiro dos
          mineradores em exercer essa prova de trabalho. Eles são autorizados
          por uma das regras do consenso a inserir uma informação dentro dos
          blocos, que é de uma determinada quantidade fixa de bitcoins passar a
          existir sob a custódia de uma de suas carteiras. Ou seja, quando a
          rede reconhece como válido o bloco emitido por um minerador,
          automaticamente também passam a reconhecer como válidos os bitcoins
          que antes não existiam, mas agora existem e passaram a fazer parte da
          custódia do minerador, remunerando, assim, o minerador pelo trabalho
          executado com sucesso. Além disso, o minerador também recebe uma
          compensação por escolher determinadas informações de transações
          emitidas por outros nós, que agregaram valores extras ao da transação
          para incentivar o minerador a escolher a sua transação e inseri-la no
          próximo bloco a ser minerado, tendo, assim, a sua transação
          reconhecida na rede o mais rápido possível.
        </p>
      </div>

      <div className="col text-justify mb-5" style={{ width: "40rem" }}>
        <p>
          Por ser uma atividade lucrativa, a crescente adoção do bitcoin e a
          grande valorização do preço acelerou a demanda por mineração e
          impulsionou toda uma indústria global de fabricação de hardwares
          específicos para essa finalidade, buscando a máxima eficiência entre
          gasto com eletricidade e potência computacional alcançada, para
          alimentar a concorrência entre os mineradores para ser o vencedor da
          corrida matemática e receber a recompensa agregada a cada bloco.
        </p>
      </div>
    </>
  );
  const linkName = readMore ? "Leia Menos << " : "Leia Mais >> ";

  return (
    <>
      <div className="hero text-center" id="mineracao">
        <h1 className="text-light">Mineração</h1>
        <h2 className="text-muted">O que é mineração de Bitcoin?</h2>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-md-center">
        <h4 className="text-center mt-5">
          Assista este vídeo explicativo para entender melhor sobre a mineração.
        </h4>

        <div className="nav justify-content-center mt-5">
          <ReactPlayer url="https://youtu.be/GmOzih6I1zs" />
        </div>

        <h4 className="text-center mt-5 m-5">Ainda sobre a Mineração</h4>

        <div className="col text-justify" style={{ width: "40rem" }}>
          <p>
            O Bitcoin, por ser um sistema descentralizado – ou seja, com ninguém
            controlando e ditando as regras do sistema, mas, sim, com o consenso
            entre os participantes –, tem como consequência a necessidade de
            haver um sistema de segurança também descentralizado. A mineração do
            bitcoin é esse sistema de segurança, que garante que nenhuma
            informação registrada na rede possa ser alterada ou que algum
            participante possa gastar seus recursos mais do que uma vez. Isso é
            possível graças à teoria de jogos aplicada às regras do sistema.
          </p>
        </div>

        <div className="col text-justify" style={{ width: "40rem" }}>
          <p>
            As pessoas que querem se comunicar umas com as outras dentro da rede
            do bitcoin devem seguir um protocolo, um conjunto de regras que são
            determinadas pelo consenso. Assim, passam a “falar o mesmo idioma”,
            tornando-se, então, um ponto de acesso à rede – ou, como é chamado,
            de “nó da rede” ou “node” –, podendo tanto enviar quanto receber
            informações diretamente. As informações recebidas por cada nó são
            verificadas individualmente e comparadas com os registros de outros
            nós quando estes emitem suas informações, e, se forem compatíveis e
            consideradas válidas por estarem dentro das regras, serão inseridas
            em seus respectivos registros, também chamados de “blockchain” ou
            “cadeia de blocos”. O interesse dos nós da rede então é atualizarem
            seus registros, ou blockchains, apenas com informações válidas
            consideradas pelo restante da rede. Caso contrário, não vão estar na
            mesma realidade de mercado, e as informações que propagarem a partir
            daí serão consideradas inválidas.
          </p>
        </div>

        <div>
          <button
            className="read-more-link"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            <h6>{linkName}</h6>
          </button>
          {readMore && extraContent}
        </div>

        {/* <div className="col text-justify" style={{ width: "40rem" }}>
          <p>
            Os mineradores têm a função de coletar uma certa quantidade
            informações de transações propagadas na rede, compilar essas
            informações em o que é chamado de bloco, e aplicar sobre elas um
            grande esforço computacional na forma da resolução de um problema
            matemático, parecido com a tentativa de se encontrar a combinação de
            um cadeado de senha hexadecimal. Esse esforço demanda o uso de uma
            grande quantidade de energia elétrica para alimentar os computadores
            que realizam os cálculos, além de despesas operacionais, que se
            traduzem em um grande custo financeiro. Quando a combinação certa é
            encontrada – chamada de “nonce” –, ela é prontamente enviada para a
            rede junto ao bloco correspondente. Os outros nós da rede então
            verificam se a nonce realmente é a correta, que “abre o cadeado”, e,
            se for, atualizam os seus registros com as informações contidas no
            bloco.
          </p>
        </div>

        <div className="col text-justify" style={{ width: "40rem" }}>
          <p>
            Pode soar estranho, mas esse esforço computacional é chamado de
            prova de trabalho, e não tem finalidade nenhuma senão a de mostrar
            para todos os outros nós que esses recursos foram gastos sobre o
            bloco que o minerador escolheu. Os mineradores fazem isso, pois tem
            o interesse que os nós olhem para o bloco escolhido e atualizem suas
            blockchains com esse bloco. Antes de qualquer outra informação
            propagada, os nós tendem a olhar primeiro para as informações
            enviadas pelos mineradores, pois partem do pressuposto de que, se
            recursos foram gastos para chamar a atenção da rede para aquele
            bloco, as informações contidas neles devem estar verificadas e
            validadas, servindo assim de filtro da rede.
          </p>
        </div>

        <div className="col text-justify" style={{ width: "40rem" }}>
          <p>
            O tamanho do esforço computacional, ou também chamado de dificuldade
            da mineração, segue uma função variável que é determinada por mais
            uma das regras do protocolo, que diz que o problema matemático que
            valida o bloco deve ser difícil o suficiente para que a tentativa de
            todas as pessoas juntas buscando a solução só a encontrem a cada 10
            minutos em média, e essa média é calculada em parcelas de 2016
            blocos. Ou seja, a cada 14 dias, aproximadamente, um bloco deve ter
            sido encontrado a cada 10 minutos. Se foi encontrado mais do que um
            bloco a cada 10 minutos, o problema fica mais difícil; se foi
            encontrado menos do que um bloco a cada 10 minutos, o problema fica
            mais fácil.
          </p>
        </div>

        <div className="col text-justify" style={{ width: "40rem" }}>
          <p>
            Existe então um alinhamento de interesses: os nós da rede têm
            interesse em registrar informações válidas, e os mineradores têm
            interesse em chamar a atenção da rede para propagar informações
            válidas. Se o nó registra informação que não seja válida, ele estará
            diferente do restante da rede e, a partir daí, fora da realidade de
            mercado, e o minerador tem o interesse em propagar apenas
            informações válidas. Caso contrário, os nós não registrarão seus
            blocos em suas respectivas blockchains, e, isso acontecendo, toda a
            prova de trabalho aplicada, que demandou gastos financeiros, será
            desperdiçada.
          </p>
        </div>

        <div className="col text-justify" style={{ width: "40rem" }}>
          <p>
            O sistema todo só é possível porque existe um incentivo financeiro
            dos mineradores em exercer essa prova de trabalho. Eles são
            autorizados por uma das regras do consenso a inserir uma informação
            dentro dos blocos, que é de uma determinada quantidade fixa de
            bitcoins passar a existir sob a custódia de uma de suas carteiras.
            Ou seja, quando a rede reconhece como válido o bloco emitido por um
            minerador, automaticamente também passam a reconhecer como válidos
            os bitcoins que antes não existiam, mas agora existem e passaram a
            fazer parte da custódia do minerador, remunerando, assim, o
            minerador pelo trabalho executado com sucesso. Além disso, o
            minerador também recebe uma compensação por escolher determinadas
            informações de transações emitidas por outros nós, que agregaram
            valores extras ao da transação para incentivar o minerador a
            escolher a sua transação e inseri-la no próximo bloco a ser
            minerado, tendo, assim, a sua transação reconhecida na rede o mais
            rápido possível.
          </p>
        </div>

        <div className="col text-justify mb-5" style={{ width: "40rem" }}>
          <p>
            Por ser uma atividade lucrativa, a crescente adoção do bitcoin e a
            grande valorização do preço acelerou a demanda por mineração e
            impulsionou toda uma indústria global de fabricação de hardwares
            específicos para essa finalidade, buscando a máxima eficiência entre
            gasto com eletricidade e potência computacional alcançada, para
            alimentar a concorrência entre os mineradores para ser o vencedor da
            corrida matemática e receber a recompensa agregada a cada bloco.
          </p>
        </div> */}
      </div>
    </>
  );
}

export default Mineracao;
