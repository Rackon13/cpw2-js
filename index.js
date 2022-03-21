
/**
 * Recebe um array com os nomes de pessoas e retorna um array invertido
 *
 * @param {*} people : Um array contendo um conjunto de nomes
 * @returns Um array com os nomes invertidos
 */
function invert(people){
    let x;
    if(people.lenght===0){x = []}
    else {x = people.reverse()}

    return x;
}

/**
 * Essa função recebe um array de notas e retorna uma média
 *
 * @param {*} grades : Um array de notas
 * @returns Uma média a partir do array de notas
 */
function mean(grades){
    let x;
    if(grades.lenght===0){x = 0;}
    else {
        x = 0;
        grades.forEach(element => {
            x += element;
        })
        x /=3;
    }
    
    return x;
}

/**
 * Função recebe uma média e informa textualmente se um estudante está aprovado ou não
 *
 * @param {*} mean : Um número que representa uma média
 * @returns Uma string dizendo se um estudante está aprovado ou não
 */
function isApproved(mean){
    let x;
    if(mean>=7){x = "aprovado"}
    else {x = "reprovado"}

    return x;
}

/**
 * Recebe uma data no formato de string e transforma em um formato textual
 *
 * @param {*} strDate : Uma string no formato de data
 * @returns Uma descrição da data informada
 */
function wide(strDate){
    meses =["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
    let x;
    if(!(strDate.includes("/"))){x = "";}
    else {
        l = strDate.split("/");
        l[1] = meses[Number(l[1])-1];
        x = `${l[0]} de ${l[1]} de ${l[2]}`; 
    }

    return x;
}

// Trecho utilizado pelos testes
exports._test = {
    invert: invert,
    mean: mean,
    isApproved: isApproved,
    wide: wide
}
