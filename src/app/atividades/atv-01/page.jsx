import style from "./page.module.css"

function Atividade01() {
    return (
        <div>
            <h1 className={style.containerh1}>Atividade 1</h1>
            <h2 className={style.containerh2}>Curiosidades sobre os Polvos</h2>
            <p className={style.containerP}>Os polvos são alguns dos animais mais estranhos e inteligentes do planeta. Um fato curioso é que cerca de dois terços dos neurônios de um polvo não ficam no cérebro principal, mas sim espalhados pelos seus tentáculos. Isso significa que cada tentáculo consegue realizar certas ações de forma quase independente, como explorar objetos, abrir conchas ou se movimentar sem precisar de uma “ordem direta” do cérebro.
                Essa característica faz com que o sistema nervoso dos polvos seja muito diferente do dos humanos e de outros vertebrados. Enquanto nosso corpo depende quase totalmente do cérebro para controlar movimentos, os tentáculos do polvo possuem uma espécie de “autonomia”. Por isso, mesmo quando um tentáculo é separado do corpo, ele ainda pode se mover por um curto período.
                Além disso, polvos também demonstram comportamentos considerados avançados, como resolver problemas, abrir recipientes para pegar comida e até usar objetos do ambiente como ferramentas. Essas habilidades fazem deles um dos invertebrados mais inteligentes já estudados pelos cientistas.</p>

            <br />
            <label>Escreva um comentario sobre o texto acima:</label>

            <br /> <br />
            <textarea></textarea>

            <br /> <br />
            <button>Enviar</button>
        </div>
    )
}

export default Atividade01;