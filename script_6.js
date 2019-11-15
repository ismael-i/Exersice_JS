function Decoding(ARN) {
    //Table des acides aminés
    let AcideAmines = [];
    let serine = ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"];
    let proline = ["CCU", "CCC", "CCA", "CCG"];
    let phenylalanine = ["UUU", "UUC"];
    let arginine = ["CGU", "CGC", "CGA", "AGA", "CGG", "AGG"];
    let tyrosine = ["UAU", "UAC"];
    let leucine = ["UUA", "UUG"];
    let AA_Hash = { Serine: serine, Proline: proline, Phenylalanine: phenylalanine, Arginine: arginine, Tyrosine: tyrosine, Leucine: leucine };
    //fonction de decodage de l'ARN
    for (let AA_index in AA_Hash) {
        for (let index in AA_Hash[AA_index]) {
            if (ARN == AA_Hash[AA_index][index]) {
                AcideAmines.push(`${AA_index}`)
            };
        };
    };
    return AcideAmines;
};

function codingLife(ARN) {

    //separation 3 par 3 de l'ARN
    let result = [];
    let ARN_Array = (ARN.match(/.{1,3}/g));
    ARN_Array.forEach(ARNcode => {
        result.push(Decoding(ARNcode));
    });
    console.log(ARN + " = " + result.join("-"));
};

codingLife("UUACGCAGUAGA");
codingLife("CCGUCGUUGCGCUACAGC");
codingLife("CCUCGCCGGUACUUCUCG");