import { LANGUAGE_TYPE } from './constants/languageTypes';

export const questions = {
    [LANGUAGE_TYPE.Java]: [
        {
            id: '1',
            question: 'Выбери верный код',
            buttonText: 'Поздороваться',
            answers: [
                {
                    id: '1',
                    text: 'public class Main\n' +
                        '{\n' +
                        '     public static void main(String() args) {\n' +
                        '               System.out.println("Hi, mates!");\n' +
                        '     }\n' +
                        '}',
                },
                {
                    id: '2',
                    text: 'public class Main\n' +
                        '{\n' +
                        '     public static void main(String[] args) {\n' +
                        '               System.out.println("Hi, mates!");\n' +
                        '     }\n' +
                        '}',
                    isCorrect: true
                },
                {
                    id: '3',
                    text: 'public class Main\n' +
                        '{\n' +
                        '      public static void main(String[] args)\n' +
                        '               System.out.println("Hi, mates!");\n' +
                        '     }\n' +
                        '}'
                }
            ],
        },
        {
            id: '2',
            text: 'Код должен вывести цифры\n' +
                'от 100 до 1. \n' +
                'Какая ошибка в него прокралась?',
            question: 'public class Main\n' +
                '{\n' +
                '   public static void main(String[] args) {\n' +
                '          for (int i = 1; i <= 100; i++)\n' +
                '          {\n' +
                '               System.out.print(i);\n' +
                '           }\n' +
                '    }\n' +
                '}',
            buttonText: 'Done',
            questionSize: 'sm',
            answers: [
                {
                    id: '1',
                    text: 'этот цикл выведет значения от 1 \n' +
                        'до 100',
                    isCorrect: true
                },
                {
                    id: '2',
                    text: 'необходимо использовать цикл while вместо for',
                },
                {
                    id: '3',
                    text: 'неверно задан класс',
                }
            ],
        }
    ],
    [LANGUAGE_TYPE.JS]: [
        {
            id: '1',
            question: 'Выбери верный код',
            buttonText: 'Поздороваться',
            answers: [
                {
                    id: '1',
                    text: 'console.log("Hi, mates!");',
                    isCorrect: true
                },
                {
                    id: '2',
                    text: 'console.log(Hi, mates!);',
                },
                {
                    id: '3',
                    text: 'consolelog("Hi, mates!");'
                }
            ],
        },
        {
            id: '2',
            text: 'Код должен вывести цифры\n' +
                'от 100 до 1. \n' +
                'Какая ошибка в него прокралась?',
            question: 'for (counter = 1; counter <= 100; counter ++) {\n' +
                '             console.log(counter);\n' +
                '}',
            buttonText: 'Done',
            questionSize: 'sm',
            answers: [
                {
                    id: '1',
                    text: 'этот цикл бесконечен, так как отсутствует ограничение',
                },
                {
                    id: '2',
                    text: 'этот цикл выведет значения от 1 \n' +
                        'до 100',
                    isCorrect: true
                },
                {
                    id: '3',
                    text: 'необходимо использовать функцию Nums'
                }
            ],
        }
    ],
    [LANGUAGE_TYPE.Python]: [
        {
            id: '1',
            question: 'Выбери верный код',
            buttonText: 'Поздороваться',
            answers: [
                {
                    id: '1',
                    text: 'print"Hi, mates!"',
                },
                {
                    id: '2',
                    text: 'print(Hi, mates!)',
                },
                {
                    id: '3',
                    text: 'print("Hi, mates!")',
                    isCorrect: true
                }
            ],
        },
        {
            id: '2',
            text: 'Код должен вывести цифры\n' +
                'от 100 до 1. \n' +
                'Какая ошибка в него прокралась?',
            question: 'print(range(100, 0, -1))',
            buttonText: 'Done',
            questionSize: 'md',
            answers: [
                {
                    id: '1',
                    text: 'неправильно использована функция range',
                    isCorrect: true
                },
                {
                    id: '2',
                    text: 'этот цикл выведет значения от 1 \n' +
                        'до 100',
                },
                {
                    id: '3',
                    text: 'неправильное ограничение «-1»'
                }
            ],
        }
    ],
    [LANGUAGE_TYPE.CPlus]: [
        {
            id: '1',
            question: 'Выбери верный код',
            buttonText: 'Поздороваться',
            answers: [
                {
                    id: '1',
                    text: '#include <iostream>\n' +
                        '\n' +
                        'using namespace std;\n' +
                        '\n' +
                        'int main()\n' +
                        '{\n' +
                        '   cout<<"Hi, mates!";\n' +
                        '\n' +
                        '   return 0;\n' +
                        '}',
                    isCorrect: true
                },
                {
                    id: '2',
                    text: '#include <iostream>\n' +
                        '\n' +
                        'using namespace std;\n' +
                        '\n' +
                        'int main\n' +
                        '{\n' +
                        '     cout<<"Hi, mates!";\n' +
                        '\n' +
                        '     return 0;\n' +
                        '}'
                },
                {
                    id: '3',
                    text: '#include <iostream>\n' +
                        '\n' +
                        'using namespace std;\n' +
                        '\n' +
                        'int main()\n' +
                        '{\n' +
                        '     cout<"Hi, mates!";\n' +
                        '\n' +
                        '     return 0;\n' +
                        '}'
                }
            ],
        },
        {
            id: '2',
            text: 'Код должен вывести цифры\n' +
                'от 100 до 1. \n' +
                'Какая ошибка в него прокралась?',
            question: '#include <iostream>\n' +
                'using namespace std;\n' +
                'int main(){\n' +
                '   for(int i=1;i<101;i++){\n' +
                '       cout << i << \'\\n\';\n' +
                '    }\n' +
                '}',
            buttonText: 'Done',
            questionSize: 'md',
            answers: [
                {
                    id: '1',
                    text: 'цикл выведет значения от 101 до 1'
                },
                {
                    id: '2',
                    text: 'этот цикл выведет значения от 1 до 100',
                    isCorrect: true
                },
                {
                    id: '3',
                    text: 'необходима ; после () цикла'
                }
            ],
        }
    ],
    [LANGUAGE_TYPE.Swift]: [
        {
            id: '1',
            question: 'Выбери верный код',
            buttonText: 'Поздороваться',
            answers: [
                {
                    id: '1',
                    text: 'import Swift\n' +
                        'print("Hi, mates!")',
                    isCorrect: true
                },
                {
                    id: '2',
                    text: 'import Swift\n' +
                        'print(Hi, mates!)',
                },
                {
                    id: '3',
                    text: 'import Swift\n' +
                        'print"Hi, mates!"',
                }
            ],
        },
        {
            id: '2',
            text: 'Код должен вывести цифры\n' +
                'от 100 до 1. \n' +
                'Какая ошибка в него прокралась?',
            question: 'for numbers in 1..<100 {\n' +
                '        print(numbers)\n' +
                '}',
            buttonText: 'Done',
            questionSize: 'md',
            answers: [
                {
                    id: '1',
                    text: 'этот цикл выведет значения от 1 \n' +
                        'до 100',
                    isCorrect: true
                },
                {
                    id: '2',
                    text: 'неправильно заданы границы цикла',
                },
                {
                    id: '3',
                    text: 'необходимо использовать in',
                }
            ],
        }
    ],
    [LANGUAGE_TYPE.Kotlin]: [
        {
            id: '1',
            question: 'Выбери верный код',
            buttonText: 'Поздороваться',
            answers: [
                {
                    id: '1',
                    text: 'fun main(args: Array<String>)\n' +
                        '     println("Hi, mates!")\n' +
                        '}',
                },
                {
                    id: '2',
                    text: 'fun main(args: Array<String>) {\n' +
                        '     println("Hi, mates!")\n' +
                        '}',
                    isCorrect: true
                },
                {
                    id: '3',
                    text: 'fun main(args: Array<String>) {\n' +
                        '     println"Hi, mates!"\n' +
                        '}',
                }
            ],
        },
        {
            id: '2',
            text: 'Код должен вывести цифры\n' +
                'от 100 до 1. \n' +
                'Какая ошибка в него прокралась?',
            question: 'for (i in 1..100){\n' +
                '    println(i)\n' +
                '}\n',
            buttonText: 'Done',
            questionSize: 'md',
            answers: [
                {
                    id: '1',
                    text: 'этот цикл выведет значения от 1 \n' +
                        'до 100',
                    isCorrect: true
                },
                {
                    id: '2',
                    text: 'необходимо использовать upTo'
                },
                {
                    id: '3',
                    text: 'диапазон должен быть задан переменной',
                }
            ],
        }
    ]
}

