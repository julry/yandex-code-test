export const postAnswers = [
    {
        id: '1',
        getText: (correct) => 'Упс, правильный ответ был совсем рядом... К счастью, ' +
            'у робота есть автоматический дебажинг кода, поэтому коллеги всё поняли, не переживай! \n' +
            '\n' +
            'Верный ответ: \n' + correct
    },
    {
        id: '2',
        getText: (correct) => 'Очень близко, верный ответ: \n«' + correct + '».' +
            '\n' +
            'Коллеги всё равно благодарны — пока шло обсуждение, свежие мысли стажёра-робота натолкнули их на новые идеи!'
    }
]
