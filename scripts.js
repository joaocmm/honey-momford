
function calculateResult() {
    const styles = {
        'Ativo': [3, 5, 7, 9, 13, 20, 26, 27, 35, 37, 41, 43, 46, 48, 51, 61, 67, 74, 75, 77],
        'Reflexivo': [10, 16, 18, 19, 28, 31, 32, 34, 36, 39, 42, 44, 49, 58, 60, 63, 65, 69, 70, 79],
        'Teórico': [2, 4, 6, 11, 15, 17, 21, 23, 25, 29, 33, 45, 50, 54, 56, 64, 66, 71, 78, 80],
        'Pragmático': [1, 8, 12, 14, 22, 24, 30, 38, 40, 47, 52, 53, 55, 57, 59, 62, 68, 72, 73, 76]
    };

    let scores = {
        'Ativo': 0,
        'Reflexivo': 0,
        'Teórico': 0,
        'Pragmático': 0
    };

    for (const style in styles) {
        styles[style].forEach(qNum => {
            const checkbox = document.getElementById('q' + qNum);
            if (checkbox && checkbox.checked) {
                scores[style]++;
            }
        });
    }

    let dominantStyle = '';
    let maxScore = -1;

    for (const style in scores) {
        if (scores[style] > maxScore) {
            maxScore = scores[style];
            dominantStyle = style;
        }
    }

    const descriptions = {
        'Ativo': "Valoriza dados da experiência, entusiasma-se com tarefas novas e é muito ágil[cite: 73]. É quase impossível não perceber a sua presença; quando está em grupo, sempre está fazendo alguma coisa e, em geral são intempestivas[cite: 73, 74]. A rotina dos ativos é repleta de múltiplas atividades. Quando estão perdendo o prazer por certa atividade, são empolgados a procurar outras que lhes proporcionem satisfação ou prazer[cite: 75]. São pessoas participativas, inovadoras[cite: 76].",
        'Reflexivo': "Utiliza a observação, estuda, reflete e analisa antes de chegar a uma conclusão[cite: 77]. Pessoas desse estilo preferem escutar mais para depois agir, são mais ponderadas que o ativo[cite: 78]. Gostam de observar pessoas agindo[cite: 78]. Escutam atentamente outras pessoas e compreende o que está sendo discutido antes de se pronunciar[cite: 79]. Eles coletam dados, tanto de experiências próprias quanto de experiências de terceiros, e refletem sobre eles, antes de chegar a uma conclusão[cite: 80].",
        'Teórico': "É lógico, estabelece teorias, princípios, modelos, busca a racionalidade, a objetividade e a lógica[cite: 83]. Este estilo são os que buscam o sentido das coisas e como elas se relacionam, ou seja, abordam problemas sempre de forma lógica[cite: 84]. Pessoas desse grupo tendem a ser disciplinados, perfeccionistas. Não trabalham sem planejamento e cronograma[cite: 85].",
        'Pragmático': "Tende a colocar em prática as ideias, faz experimentos; tem como objetivo a funcionalidade[cite: 86]. São pessoas que ao aprenderem uma nova teoria, tem inúmeras ideias e não veem a hora de implementá-las[cite: 87]. Diferentemente do estilo teórico ou reflexivo, são pessoas impacientes para discussões longas e sem conclusões, pois, gostam de solucionar problemas e aplicar o que aprendeu[cite: 88]."
    };

    document.getElementById('style-name').innerText = dominantStyle;
    document.getElementById('style-description').innerText = descriptions[dominantStyle];
    document.getElementById('result').style.display = 'block';

    // Rola a página para o resultado
    document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
}