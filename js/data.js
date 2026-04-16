const equipmentData = [
    {
        id: 101,
        nome: "Betoneira 400L",
        categoria: "Betoneiras",
        descricao: "Betoneira Menegotti de 400 litros ideal para preparo de concreto e argamassa em obras de pequeno e médio porte.",
        imagens: [
            "./assets/images/betoneira-400-1.png",
            "./assets/images/betoneira-400-2.png"
        ],
        fichaTecnica: {
            Marca: "Menegotti",
            Capacidade: "400 litros",
            Aplicação: "Concreto e argamassa",
            Uso: "Obras residenciais e comerciais",
            Alimentação: "Elétrica",
            Disponibilidade: "Sob consulta"
        },
        locacao: {
            diaria: 120,
            semanal: 650,
            quinzenal: 1100,
            mensal: 1800
        }
    },
    {
        id: 102,
        nome: "Betoneira 600L",
        categoria: "Betoneiras",
        descricao: "Betoneira Menegotti de 600 litros para maior produtividade em obras de médio e grande porte.",
        imagens: [
            "./assets/images/betoneira-600-1.jpg",
            "./assets/images/betoneira-600-2.png",
            "./assets/images/betoneira-600-3.png"
        ],
        fichaTecnica: {
            Marca: "Menegotti",
            Capacidade: "600 litros",
            Aplicação: "Concreto e argamassa",
            Uso: "Obras de médio e grande porte",
            Alimentação: "Elétrica",
            Disponibilidade: "Sob consulta"
        }
    },
    {
        id: 103,
        nome: "Mini Grua",
        categoria: "Elevação",
        descricao: "Mini grua para movimentação vertical de materiais em obras, trazendo mais agilidade e segurança.",
        imagens: [
            "./assets/images/minigrua-1.jpg",
            "./assets/images/minigrua-2.jpg"
        ],
        fichaTecnica: {
            Aplicação: "Elevação de materiais",
            Estrutura: "Metálica",
            Uso: "Obras residenciais e comerciais",
            Instalação: "Em andaime ou laje",
            Capacidade: "Sob consulta"
        }
    },
    {
        id: 104,
        nome: "Guarda Corpo",
        categoria: "Segurança",
        descricao: "Sistema de guarda corpo para proteção em áreas elevadas e bordas de lajes.",
        imagens: [
            "./assets/images/guardacorpo-1.png",
            "./assets/images/guardacorpo-2.png",
            "./assets/images/guardacorpo-3.png"
        ],
        fichaTecnica: {
            Material: "Aço galvanizado",
            Aplicação: "Proteção em altura",
            Uso: "Lajes, sacadas e andaimes",
            Norma: "NR-18",
            Disponibilidade: "Sob consulta"
        }
    },

    {
        id: 105,
        nome: "Piso Metálico",
        categoria: "Estrutura",
        descricao: "Piso metálico para andaimes e estruturas temporárias, oferecendo segurança e estabilidade.",
        imagens: [
            "./assets/images/piso-metalico-1.jpg",
            "./assets/images/piso-metalico-2.jpg"
        ],
        fichaTecnica: {
            Material: "Aço",
            Aplicação: "Andaimes e passarelas",
            Acabamento: "Galvanizado",
            Uso: "Obras em altura"
        }
    },
    {
        id: 106,
        nome: "Escora 2m a 3,5m",
        categoria: "Estrutura",
        descricao: "Escora metálica regulável de 2 a 3,5 metros para sustentação de lajes e formas.",
        imagens: [
            "./assets/images/escora-35-1.png",
            "./assets/images/escora-35-2.png"
        ],
        fichaTecnica: {
            Altura: "2,0 a 3,5 metros",
            Material: "Aço",
            Aplicação: "Escoramento de lajes",
            Regulagem: "Manual"
        }
    },
    {
        id: 107,
        nome: "Escora 2m a 4,5m",
        categoria: "Estrutura",
        descricao: "Escora metálica regulável de 2 a 4,5 metros para escoramento em grandes alturas.",
        imagens: [
            "./assets/images/escora-45-1.png",
            "./assets/images/escora-45-2.jpg"
        ],
        fichaTecnica: {
            Altura: "2,0 a 4,5 metros",
            Material: "Aço",
            Aplicação: "Escoramento de lajes e vigas",
            Regulagem: "Manual"
        }
    },
    {
        id: 108,
        nome: "Gerador 5,5 kVA",
        categoria: "Energia",
        descricao: "Gerador portátil de 5,5 kVA para alimentação de ferramentas e equipamentos em obra.",
        imagens: [
            "./assets/images/gerador-55-1.jpg",
            "./assets/images/gerador-55-2.jpg",
            "./assets/images/gerador-55-3.jpg"
        ],
        fichaTecnica: {
            Potência: "5,5 kVA",
            Combustível: "Gasolina",
            Uso: "Ferramentas e iluminação",
            Partida: "Manual"
        }
    },
    {
        id: 109,
        nome: "Gerador 6 kVA",
        categoria: "Energia",
        descricao: "Gerador de 6 kVA indicado para canteiros de obra e equipamentos de maior consumo.",
        imagens: [
            "./assets/images/gerador-6-1.png",
            "./assets/images/gerador-6-2.png",
            "./assets/images/gerador-6-3.png"
        ],
        fichaTecnica: {
            Potência: "6 kVA",
            Combustível: "Gasolina",
            Uso: "Equipamentos de obra",
            Partida: "Manual"
        }
    },
    {
        id: 110,
        nome: "Gerador 8 kVA",
        categoria: "Energia",
        descricao: "Gerador de 8 kVA para maior autonomia e alimentação de múltiplos equipamentos.",
        imagens: [
            "./assets/images/gerador-8-1.png",
            "./assets/images/gerador-8-2.png",
            "./assets/images/gerador-8-3.png"
        ],
        fichaTecnica: {
            Potência: "8 kVA",
            Combustível: "Gasolina/Diesel",
            Uso: "Canteiros de obra",
            Partida: "Elétrica"
        }
    },
    {
        id: 111,
        nome: "Compactador de Percussão",
        categoria: "Compactação",
        descricao: "Compactador de percussão marca Buffalo para compactação de solo em áreas menores.",
        imagens: [
            "./assets/images/compactador-percussao-1.png",
            "./assets/images/compactador-percussao-2.png",
            "./assets/images/compactador-percussao-3.png"
        ],
        fichaTecnica: {
            Marca: "Buffalo",
            Aplicação: "Compactação de solo",
            Uso: "Valas e áreas estreitas",
            Combustível: "Gasolina"
        }
    },
    {
        id: 112,
        nome: "Compactador de Placa",
        categoria: "Compactação",
        descricao: "Compactador de placa para compactação de pisos, brita e solo em áreas planas.",
        imagens: [
            "./assets/images/compactador-placa-1.png",
            "./assets/images/compactador-placa-2.png",
            "./assets/images/compactador-placa-3.png"
        ],
        fichaTecnica: {
            Aplicação: "Solo e pavimentação",
            Uso: "Áreas planas",
            Combustível: "Gasolina",
            Estrutura: "Base metálica"
        }
    },
    {
        id: 113,
        nome: "Cortador de Piso Serra Clip",
        categoria: "Corte",
        descricao: "Cortador de piso tipo Serra Clip para cortes precisos em concreto e asfalto.",
        imagens: [
            "./assets/images/cortador-piso-1.png",
            "./assets/images/cortador-piso-2.png"
        ],
        fichaTecnica: {
            Aplicação: "Corte de concreto e asfalto",
            Disco: "Sob consulta",
            Combustível: "Gasolina",
            Uso: "Obras e pavimentação"
        }
    },
    {
        id: 114,
        nome: "Talha 1 Tonelada",
        categoria: "Elevação",
        descricao: "Talha para elevação de cargas de até 1 tonelada.",
        imagens: [
            "./assets/images/talha-1t-1.png",
            "./assets/images/talha-1t-2.png",
            "./assets/images/talha-1t-3.png"
        ],
        fichaTecnica: {
            Capacidade: "1 tonelada",
            Aplicação: "Movimentação de cargas",
            Estrutura: "Metálica"
        }
    },
    {
        id: 115,
        nome: "Talha 3 Toneladas",
        categoria: "Elevação",
        descricao: "Talha reforçada para movimentação de cargas de até 3 toneladas.",
        imagens: [
            "./assets/images/talha-3t-1.jpg"
        ],
        fichaTecnica: {
            Capacidade: "3 toneladas",
            Aplicação: "Elevação de cargas pesadas",
            Estrutura: "Metálica"
        }
    },
    {
        id: 116,
        nome: "Balancinho",
        categoria: "Elevação",
        descricao: "Balancinho suspenso para trabalhos em fachadas e manutenção predial.",
        imagens: [
            "./assets/images/balancinho-1.png"
        ],
        fichaTecnica: {
            Aplicação: "Trabalhos em altura",
            Uso: "Fachadas e manutenção",
            Capacidade: "Sob consulta"
        }
    },
    {
        id: 117,
        nome: "Cadeira Suspensa",
        categoria: "Elevação",
        descricao: "Cadeira suspensa para trabalhos de acabamento e manutenção em altura.",
        imagens: [
            "./assets/images/cadeira-1.png",
            "./assets/images/cadeira-2.png"
        ],
        fichaTecnica: {
            Aplicação: "Pintura e manutenção",
            Uso: "Trabalhos em altura",
            Segurança: "Compatível com cinto e trava-quedas"
        }
    },
    {
        id: 118,
        nome: "Alisadora de Piso",
        categoria: "Acabamento",
        descricao: "Alisadora de piso para acabamento e nivelamento de concreto fresco.",
        imagens: [
            "./assets/images/alisadora-1.png",
            "./assets/images/alisadora-2.png"
        ],
        fichaTecnica: {
            Aplicação: "Acabamento de concreto",
            Combustível: "Gasolina",
            Uso: "Pisos industriais e residenciais"
        }
    },
    {
        id: 119,
        nome: "Politriz",
        categoria: "Acabamento",
        descricao: "Politriz para polimento e acabamento de superfícies.",
        imagens: [
            "./assets/images/politriz-1.png",
            "./assets/images/politriz-2.png"
        ],
        fichaTecnica: {
            Aplicação: "Polimento",
            Uso: "Pisos e superfícies",
            Alimentação: "Elétrica"
        }
    },
    {
        id: 120,
        nome: "Motor Acionador para Mangote",
        categoria: "Concreto",
        descricao: "Motor acionador utilizado em mangotes vibradores para concretagem.",
        imagens: [
            "./assets/images/motor-acionador-1.png",
            "./assets/images/motor-acionador-2.png"
        ],
        fichaTecnica: {
            Aplicação: "Mangote vibrador",
            Alimentação: "Elétrica",
            Uso: "Concretagem"
        }
    },
    {
        id: 121,
        nome: "Motobomba",
        categoria: "Hidráulico",
        descricao: "Motobomba para sucção e remoção de água em obras e terrenos.",
        imagens: [
            "./assets/images/motobomba-1.png",
            "./assets/images/motobomba-2.png",
            "./assets/images/motobomba-3.png"
        ],
        fichaTecnica: {
            Aplicação: "Remoção de água",
            Combustível: "Gasolina",
            Uso: "Obras e drenagem"
        }
    },
    {
        id: 122,
        nome: "Martelete 2,5kg",
        categoria: "Demolição",
        descricao: "Martelete leve de 2,5kg ideal para pequenos reparos e demolições leves.",
        imagens: [
            "./assets/images/martelete-25-1.png",
            "./assets/images/martelete-25-2.png",
            "./assets/images/martelete-25-3.png"
        ],
        fichaTecnica: {
            Peso: "2,5 kg",
            Uso: "Pequenas demolições",
            Alimentação: "Elétrica"
        }
    },
    {
        id: 123,
        nome: "Martelete 11kg",
        categoria: "Demolição",
        descricao: "Martelete de 11kg para demolições pesadas e abertura de canaletas.",
        imagens: [
            "./assets/images/martelete-11-1.png",
            "./assets/images/martelete-11-2.png",
            "./assets/images/martelete-11-3.png"
        ],
        fichaTecnica: {
            Peso: "11 kg",
            Uso: "Demolições pesadas",
            Alimentação: "Elétrica"
        }
    },
    {
        id: 124,
        nome: "Martelete 15kg",
        categoria: "Demolição",
        descricao: "Martelete de 15kg para rompimento de concreto e pisos.",
        imagens: [
            "./assets/images/martelete-15-1.png",
            "./assets/images/martelete-15-2.png",
            "./assets/images/martelete-15-3.png"
        ],
        fichaTecnica: {
            Peso: "15 kg",
            Uso: "Rompimento de concreto",
            Alimentação: "Elétrica"
        }
    },
    {
        id: 125,
        nome: "Martelete 30kg",
        categoria: "Demolição",
        descricao: "Martelete de 30kg para demolições pesadas e alto desempenho.",
        imagens: [
            "./assets/images/martelete-30-1.png",
            "./assets/images/martelete-30-2.png",
        ],
        fichaTecnica: {
            Peso: "30 kg",
            Uso: "Demolição pesada",
            Alimentação: "Elétrica"
        }
    },
    {
        id: 126,
        nome: "Barra de Ancoragem",
        categoria: "Segurança",
        descricao: "Barra de ancoragem para sistemas de proteção e trabalho em altura.",
        imagens: [
            "./assets/images/barra-ancoragem-1.png",
            "./assets/images/barra-ancoragem-2.png",
            "./assets/images/barra-ancoragem-3.jpg"
        ],
        fichaTecnica: {
            Material: "Aço",
            Aplicação: "Trabalho em altura",
            Compatibilidade: "Cintos e trava-quedas"
        }
    },
    {
        id: 127,
        nome: "Container Almoxarifado",
        categoria: "Containers",
        descricao: "Container para gurdar e administrar equipamentos.",
        imagens: [
            "./assets/images/container-1.png",
            "./assets/images/container-2.png",
            "./assets/images/container-3.png"
        ],
        fichaTecnica: {
            Material: "Aço corten",
            Altura: "2,97 m",
            Largura: "2,35 m",
            Comprimento: "6 m"
        }
    },
    {
        id: 128,
        nome: "Politriz 7 pol",
        categoria: "Acabamento",
        descricao: "Politriz para polimento e acabamento de superfícies.",
        imagens: [
            "./assets/images/politriz7-1.png",
            "./assets/images/politriz7-2.png",
            "./assets/images/politriz7-3.png"
        ],
        fichaTecnica: {
            Aplicação: "Polimento",
            Uso: "Pisos e superfícies",
            Alimentação: "Elétrica",
            Potência: "1200 watts"

        }
    }

];
