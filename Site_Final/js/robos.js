/* ═══════════════════════════════════════════════════════════════
   SITE UNIFICADO — Robôs Industriais & Sensores IoT
   Módulo de dados e interatividade para catálogos
═══════════════════════════════════════════════════════════════ */

'use strict';

// ── Dados dos Robôs Industriais ────────────────────────────────
const robotsData = [
  {
    id: "cartesiano", nome: "Robô Cartesiano", tipo: "Cartesiano / Gantry", emoji: "📐",
    imagem: "img/RoboCartesiano.webp",
    conceito: "O robô cartesiano, também conhecido como robô de pórtico (gantry), movimenta-se em três eixos lineares ortogonais (X, Y e Z). Sua estrutura baseada no sistema de coordenadas cartesianas confere movimentos retilíneos altamente precisos.",
    funcionamento: "Baseia-se em atuadores lineares (fusos de esferas, correias dentadas ou atuadores pneumáticos) que movimentam o efetuador final ao longo de guias lineares nos três eixos. Cada eixo é controlado independentemente por servomotores ou motores de passo.",
    caracteristicas: ["Três eixos lineares ortogonais (X, Y, Z)", "Alta precisão de posicionamento (±0,01 mm)", "Amplo volume de trabalho retangular", "Alta rigidez estrutural e capacidade de carga", "Programação simplificada e intuitiva", "Estrutura modular e escalável"],
    aplicacoes: ["Pick and place em linhas de produção", "Impressão 3D industrial", "Máquinas CNC e corte a laser", "Soldagem automatizada", "Paletização e empacotamento", "Inspeção automatizada de qualidade"],
    iot: "Os robôs cartesianos podem ser integrados a plataformas IoT para monitoramento remoto de posição, velocidade e aceleração em cada eixo. Dados de produtividade são enviados à nuvem para análise de eficiência OEE.",
    fabricantes: [{ modelo: "EXCM Linear Gantry", marca: "Festo", descricao: "Sistema de pórtico cartesiano modular da Festo, oferecendo alta dinâmica e precisão para aplicações de manuseio e montagem." }, { modelo: "RCP6 Series", marca: "IAI", descricao: "Atuadores cartesianos elétricos de alta precisão, amplamente utilizados em aplicações de pick and place." }, { modelo: "CKR Compact Module", marca: "Bosch Rexroth", descricao: "Módulos cartesianos compactos com alta rigidez e precisão, ideais para manuseio e montagem." }],
    specs: { eixos: "3 Lineares", precisao: "±0.01mm", carga: "Até 100kg", alcance: "Variável", velocidade: "Até 5 m/s", repetibilidade: "±0.005mm" }
  },
  {
    id: "scara", nome: "Robô SCARA", tipo: "SCARA", emoji: "🔄",
    imagem: "img/robo_scara.jpg",
    conceito: "O robô SCARA (Selective Compliance Articulated Robot Arm) possui duas articulações rotativas em um plano horizontal e um eixo linear vertical. Desenvolvido em 1981 no Japão, foi projetado para operações de montagem rápida.",
    funcionamento: "Dois braços articulados movem-se no plano horizontal (eixos Theta 1 e Theta 2), um eixo vertical (Z) para movimentos de subida/descida, e um eixo de rotação (R) no efetuador. Servomotores de alta velocidade garantem movimentos rápidos e precisos.",
    caracteristicas: ["Dois eixos rotativos horizontais + 1 vertical + 1 rotação", "Altíssima velocidade (ciclos de 0,3 segundos)", "Complacência seletiva no plano horizontal", "Rigidez no eixo vertical para inserções precisas", "Área de trabalho circular/anular", "Precisão típica de ±0,01 mm"],
    aplicacoes: ["Montagem de componentes eletrônicos (PCBs)", "Parafusamento automatizado", "Pick and place de alta velocidade", "Soldagem seletiva", "Embalagem e rotulagem", "Dispensação de adesivos"],
    iot: "Robôs SCARA integrados com IoT transmitem dados em tempo real sobre ciclos de produção e taxas de erro. A conectividade com sistemas MES permite rastreabilidade total e ajuste automático de parâmetros.",
    fabricantes: [{ modelo: "T6 SCARA", marca: "Epson Robots", descricao: "Um dos SCARAs mais vendidos do mundo, com alcance de 600mm e ciclos ultrarrápidos de 0,37 segundos." }, { modelo: "YK-XE Series", marca: "Yamaha Robotics", descricao: "Série de alto desempenho com alcance de até 1200mm e integração nativa com sistemas de visão." }, { modelo: "IRB 910INV", marca: "ABB", descricao: "SCARA invertido da ABB, montado no teto, que libera espaço no chão de fábrica." }],
    specs: { eixos: "4 (2R+Z+θ)", precisao: "±0.01mm", carga: "Até 20kg", alcance: "Até 1200mm", velocidade: "0.3s/ciclo", repetibilidade: "±0.01mm" }
  },
  {
    id: "articulado", nome: "Robô Articulado", tipo: "Articulado / Antropomórfico", emoji: "🦾",
    imagem: "img/robo_articulado.jpg",
    conceito: "O robô articulado é o tipo mais comum e versátil de robô industrial. Possui múltiplas articulações rotativas (tipicamente 6 eixos) que se assemelham ao braço humano, oferecendo máxima flexibilidade de movimento.",
    funcionamento: "Cada articulação é acionada por servomotores acoplados a redutores de precisão. O controlador utiliza cinemática inversa para calcular os ângulos necessários em cada junta para atingir uma posição e orientação desejadas no espaço tridimensional.",
    caracteristicas: ["6 ou mais eixos de liberdade rotacionais", "Volume de trabalho esférico de grande alcance", "Máxima flexibilidade e destreza de movimento", "Capacidade de carga de gramas até toneladas", "Repetibilidade de ±0,02 a ±0,05 mm", "Capacidade de trabalhar em posições invertidas"],
    aplicacoes: ["Soldagem a arco e por pontos (automotiva)", "Pintura industrial automatizada", "Montagem complexa de componentes", "Carga e descarga de máquinas CNC", "Corte e desbaste de materiais", "Manipulação de cargas pesadas em logística"],
    iot: "Robôs articulados modernos possuem conectividade nativa com protocolos industriais (OPC UA, MQTT, PROFINET). Digital Twins replicam o comportamento do robô em tempo real na nuvem para simulação e manutenção preditiva.",
    fabricantes: [{ modelo: "M-20iD/25", marca: "FANUC", descricao: "Robô articulado de 6 eixos com 25kg de carga útil e 1831mm de alcance. Amplamente utilizado na indústria automotiva mundial." }, { modelo: "IRB 6700", marca: "ABB", descricao: "A 7ª geração da família mais vendida da ABB. Carga de 150 a 300kg, ideal para soldagem e prensagem." }, { modelo: "KR QUANTEC", marca: "KUKA", descricao: "Cargas de 120 a 300kg e alcance de até 3100mm. Alta eficiência energética para aplicações pesadas." }],
    specs: { eixos: "6 Rotativos", precisao: "±0.02mm", carga: "Até 300kg", alcance: "Até 3100mm", velocidade: "200°/s", repetibilidade: "±0.05mm" }
  },
  {
    id: "cilindrico", nome: "Robô Cilíndrico", tipo: "Cilíndrico", emoji: "🔧",
    imagem: "img/robo_cilindrico.jpg",
    conceito: "O robô cilíndrico opera em coordenadas cilíndricas, combinando um eixo rotativo na base com eixos lineares vertical e radial. Sua área de trabalho forma um volume cilíndrico, proporcionando bom alcance radial com pegada compacta.",
    funcionamento: "A base gira em torno de um eixo vertical (θ), enquanto um atuador linear move o braço verticalmente (Z) e outro estende ou retrai radialmente (R). Esta combinação permite posicionar o efetuador final em qualquer ponto dentro do volume cilíndrico.",
    caracteristicas: ["Um eixo rotativo (base) + dois eixos lineares (Z e R)", "Volume de trabalho cilíndrico", "Design compacto e robusto", "Boa capacidade de carga relativa ao tamanho", "Estrutura simples e de fácil manutenção", "Custo intermediário"],
    aplicacoes: ["Operações de montagem rotacional", "Manuseio de materiais em torno de máquinas", "Aplicação de revestimentos em peças cilíndricas", "Carga e descarga de tornos CNC", "Soldagem circunferencial", "Transferência de peças entre estações"],
    iot: "Robôs cilíndricos em ambientes IoT transmitem dados de posição angular e linear em tempo real. A integração com sistemas SCADA permite análise de ciclos operacionais e otimização de rotas.",
    fabricantes: [{ modelo: "RS Series", marca: "Seiko Epson", descricao: "Série de robôs com configuração cilíndrica, projetados para manuseio compacto com alta velocidade e precisão." }, { modelo: "RV-FR Series", marca: "Mitsubishi Electric", descricao: "Robôs industriais com capacidade de operação em configurações cilíndricas e alta performance." }, { modelo: "RV Series", marca: "Reis Robotics (Kuka)", descricao: "Robôs de configuração cilíndrica utilizados em soldagem e manuseio com alta capacidade de carga." }],
    specs: { eixos: "3 (R+Z+θ)", precisao: "±0.05mm", carga: "Até 50kg", alcance: "Até 1000mm", velocidade: "150°/s", repetibilidade: "±0.02mm" }
  },
  {
    id: "delta", nome: "Robô Delta", tipo: "Delta / Paralelo", emoji: "🕷️",
    imagem: "img/robo_delta.jpg",
    conceito: "Inventado em 1985 por Reymond Clavel, é um robô de cinemática paralela composto por três braços leves conectados a uma base fixa superior e a uma plataforma móvel inferior. Permite velocidades e acelerações extraordinárias.",
    funcionamento: "Os três braços são acionados por servomotores montados na base fixa, reduzindo a massa em movimento. Cada braço é composto por um elo superior e um par de barras paralelas que mantêm a orientação constante. A plataforma pode se mover em X, Y e Z.",
    caracteristicas: ["Cinemática paralela com três braços articulados", "Altíssima velocidade (até 300 picks/minuto)", "Aceleração de até 150 m/s² (15G)", "Baixa inércia e massa em movimento reduzida", "Montagem invertida (fixo no teto)", "Ideal para cargas leves (0,5 a 12 kg)"],
    aplicacoes: ["Pick and place ultrarrápido em alimentos", "Embalagem de produtos farmacêuticos", "Classificação por visão artificial", "Manuseio de produtos frágeis", "Operações em ambientes cleanroom", "Embalagem em blister e flow-pack"],
    iot: "Robôs Delta são frequentemente integrados com sistemas de visão artificial via IoT para rastreamento e classificação em tempo real. Dados de velocidade e temperatura dos motores são transmitidos para edge computing.",
    fabricantes: [{ modelo: "IRB 360 FlexPicker", marca: "ABB", descricao: "O FlexPicker da ABB é o robô Delta mais vendido do mundo, com 8kg e 150 picks/minuto. Certificado para contato com alimentos." }, { modelo: "M-1iA/0.5S", marca: "FANUC", descricao: "Robô Delta com 6 eixos de liberdade e proteção IP67 para ambientes exigentes. Ideal para montagem de precisão." }, { modelo: "Quattro s650H", marca: "Omron (Adept)", descricao: "Robô Delta de 4 braços com maior volume de trabalho, carga de até 6kg e visão artificial integrada." }],
    specs: { eixos: "3+1 Paralelos", precisao: "±0.1mm", carga: "Até 12kg", alcance: "Até 1600mm", velocidade: "300 picks/min", repetibilidade: "±0.05mm" }
  },
  {
    id: "polar", nome: "Robô Polar", tipo: "Polar / Esférico", emoji: "🌐",
    imagem: "img/robo_polar.jpg",
    conceito: "Opera em coordenadas polares (esféricas), utilizando duas articulações rotativas e uma prismática. Seu volume de trabalho forma uma esfera parcial. O Unimate (1961), primeiro robô industrial da história, era do tipo polar.",
    funcionamento: "A base rotativa (θ, rotação horizontal), articulação de elevação (φ, rotação vertical) e atuador linear telescópico (R, extensão radial) permitem alcançar pontos em um volume esférico. O controlador converte coordenadas cartesianas em coordenadas esféricas.",
    caracteristicas: ["Duas articulações rotativas + uma prismática (telescópica)", "Volume de trabalho esférico parcial", "Bom alcance radial com base compacta", "Estrutura robusta para cargas moderadas", "Design historicamente pioneiro na robótica", "Versatilidade moderada"],
    aplicacoes: ["Manuseio de materiais em fundições", "Soldagem em posições variadas", "Carga e descarga de máquinas-ferramenta", "Pintura em peças de geometria complexa", "Operações de corte e rebarbação", "Manuseio em ambientes hostis"],
    iot: "Robôs polares conectados via MQTT e OPC UA transmitem dados operacionais. Sensores IoT monitoram a condição do atuador telescópico. Algoritmos de manutenção preditiva previnem falhas e otimizam intervalos de manutenção.",
    fabricantes: [{ modelo: "Unimate (Histórico)", marca: "Unimation", descricao: "Criado em 1961, foi o primeiro robô industrial do mundo, instalado na linha de montagem da General Motors." }, { modelo: "TX2-90 Series", marca: "Stäubli", descricao: "Robôs de 6 eixos da Stäubli com cinemática de alcance esférico e alta precisão em ambientes limpos." }, { modelo: "RS Series", marca: "Kawasaki Robotics", descricao: "Robôs industriais com alta confiabilidade para aplicações pesadas em configurações esféricas." }],
    specs: { eixos: "3 (2R+1P)", precisao: "±0.05mm", carga: "Até 80kg", alcance: "Até 2000mm", velocidade: "180°/s", repetibilidade: "±0.1mm" }
  },
  {
    id: "colaborativo", nome: "Robô Colaborativo", tipo: "Cobot", emoji: "🤝",
    imagem: "img/robo_colaborativo.jpg",
    conceito: "Os cobots são robôs industriais projetados para trabalhar lado a lado com operadores humanos sem barreiras de segurança. Incorporam sensores de força/torque em todas as juntas e sistemas avançados de detecção de colisão conforme ISO/TS 15066.",
    funcionamento: "Sensores de torque em cada articulação medem continuamente a força exercida. Se uma colisão é detectada, o robô para imediatamente. A programação é frequentemente feita por demonstração: o operador move fisicamente o braço pela trajetória desejada.",
    caracteristicas: ["Sensores de força/torque em todas as juntas", "Limitação de potência e força (ISO/TS 15066)", "Programação por demonstração (hand-guiding)", "Não requer barreiras de segurança", "Design leve e arredondado", "Interfaces gráficas intuitivas (tablet/touchscreen)"],
    aplicacoes: ["Montagem colaborativa com operadores humanos", "Inspeção de qualidade com visão integrada", "Machine tending (carga/descarga de CNCs)", "Paletização e embalagem leve", "Testes e ensaios laboratoriais", "Dispensação e colagem de precisão"],
    iot: "Cobots são nativamente projetados para integração IoT, com interfaces REST API, MQTT e ROS. Dados de produção, consumo energético e saúde das juntas são transmitidos em tempo real para dashboards de gestão.",
    fabricantes: [{ modelo: "UR10e", marca: "Universal Robots", descricao: "Cobot de 6 eixos com 12,5kg de carga útil e 1300mm de alcance. Líder mundial em cobots com ecossistema UR+." }, { modelo: "CRX-10iA", marca: "FANUC", descricao: "Cobot com 10kg de carga, interface de programação por tablet e proteção IP67 para ambientes exigentes." }, { modelo: "YuMi (IRB 14000)", marca: "ABB", descricao: "Robô colaborativo de dois braços para montagem de pequenas peças lado a lado com operadores. 7 eixos por braço." }],
    specs: { eixos: "6-7 Rotativos", precisao: "±0.03mm", carga: "Até 25kg", alcance: "Até 1750mm", velocidade: "1 m/s (seg.)", repetibilidade: "±0.03mm" }
  }
];

// ── Dados dos Sensores IoT ─────────────────────────────────────
const sensorsData = [
  { id: "dht11", name: "DHT11", category: "Temperatura e Umidade", concept: "Sensor digital básico e de baixo custo para medir temperatura e umidade relativa do ar.", principle: "Utiliza sensor capacitivo de umidade e termistor, convertendo a leitura em sinal digital via microcontrolador interno.", specs: "Tensão: 3.3V a 5V; Umidade: 20-80%; Temperatura: 0-50°C; Precisão: ±5% RH, ±2°C.", signalType: "Digital (protocolo proprietário de fio único).", applications: "Monitoramento ambiental, estufas, sistemas de HVAC.", projectExample: "Estação meteorológica caseira com Arduino ou ESP32 enviando dados para dashboard via WiFi.", image: "img/sensor_dht11.svg", manufacturers: "Aosong Electronics, Waveshare, Adafruit." },
  { id: "dht22", name: "DHT22 (AM2302)", category: "Temperatura e Umidade", concept: "Versão aprimorada do DHT11, com maior precisão e amplitude de medição.", principle: "Mesmo princípio do DHT11, mas com componentes sensíveis de maior qualidade para melhor resolução.", specs: "Tensão: 3.3V a 5V; Umidade: 0-100%; Temperatura: -40 a 80°C; Precisão: ±2% RH, ±0.5°C.", signalType: "Digital (protocolo proprietário de fio único).", applications: "Controle rigoroso de clima em laboratórios, câmaras frias, data centers.", projectExample: "Sistema de monitoramento de temperatura para armazenamento de vacinas e medicamentos.", image: "img/sensor_dht22.svg", manufacturers: "Aosong Electronics, SparkFun." },
  { id: "lm35", name: "LM35", category: "Temperatura", concept: "Sensor de temperatura em circuito integrado com saída linearmente proporcional à temperatura em °C.", principle: "Baseado na tensão de junção p-n, gera 10mV para cada grau Celsius sem calibração externa.", specs: "Tensão: 4V a 30V; Faixa: -55°C a 150°C; Precisão: ±0.5°C.", signalType: "Analógico (10mV/°C).", applications: "Termômetros eletrônicos, proteção térmica de circuitos e motores.", projectExample: "Controle PID de temperatura de tanque de aquecimento industrial com CLP ou Arduino.", image: "img/sensor_lm35.svg", manufacturers: "Texas Instruments (TI)." },
  { id: "ds18b20", name: "DS18B20", category: "Temperatura", concept: "Sensor de temperatura digital com resolução programável de 9 a 12 bits e endereço único para redes multiponto.", principle: "Termômetro digital interno transmite pelo barramento 1-Wire, onde cada sensor possui endereço serial único de 64 bits.", specs: "Tensão: 3.0V a 5.5V; Faixa: -55°C a +125°C; Precisão: ±0.5°C.", signalType: "Digital (Protocolo 1-Wire).", applications: "Monitoramento de líquidos, aquários, controle térmico em tubulações industriais.", projectExample: "Monitoramento de temperatura da água em cervejaria artesanal autônoma.", image: "img/sensor_ds18b20.svg", manufacturers: "Maxim Integrated (Analog Devices)." },
  { id: "ldr", name: "LDR", category: "Luminosidade", concept: "Resistor cuja resistência elétrica varia de acordo com a intensidade da luz incidente.", principle: "Material semicondutor de alta resistência. Quando luz incide, elétrons são liberados, aumentando a condutividade.", specs: "Resistência no escuro: >1 MΩ; Resistência na luz: ~10-20 kΩ; Tensão máxima: 150V DC.", signalType: "Analógico (variação de resistência).", applications: "Acionamento de relés fotoelétricos, sensores crepusculares, sistemas de segurança.", projectExample: "Sistema de iluminação pública inteligente que acende automaticamente ao anoitecer.", image: "img/sensor_ldr.svg", manufacturers: "Diversos (componente genérico)." },
  { id: "bh1750", name: "BH1750", category: "Luminosidade", concept: "Sensor digital de intensidade luminosa ambiente capaz de medir diretamente em lux com alta precisão.", principle: "Fotodiodo sensível ao espectro visível combinado com conversor ADC interno de 16 bits, transmitindo via I2C.", specs: "Tensão: 2.4V a 3.6V (módulos suportam 5V); Faixa: 1 a 65535 Lux.", signalType: "Digital (I2C).", applications: "Controle de backlight em telas, iluminação adaptativa de escritórios, automação residencial.", projectExample: "Controle automático do brilho de display industrial e regulação de persianas baseadas na luz solar.", image: "img/sensor_bh1750.svg", manufacturers: "ROHM Semiconductor." },
  { id: "hcsr04", name: "HC-SR04", category: "Distância", concept: "Sensor ultrassônico popular para medição de distâncias sem contato físico.", principle: "Emite pulso de som de alta frequência e mede o tempo que o eco leva para retornar. Distância = (velocidade do som × tempo) / 2.", specs: "Tensão: 5V; Faixa: 2cm a 400cm; Precisão: ~3mm; Ângulo do feixe: <15°.", signalType: "Digital (pulsos PWM / Trigger e Echo).", applications: "Robôs móveis, medição de nível em tanques, sistemas de estacionamento.", projectExample: "Robô AGV que desvia de obstáculos no chão de fábrica.", image: "img/sensor_hcsr04.svg", manufacturers: "Elecfreaks, Cytron (módulo genérico)." },
  { id: "pir", name: "PIR HC-SR501", category: "Movimento", concept: "Sensor infravermelho passivo para detectar presença ou movimento de pessoas e animais.", principle: "Mede a luz infravermelha de objetos. Quando um corpo quente se move, a variação térmica nas lentes de Fresnel dispara o sensor piroelétrico.", specs: "Tensão: 4.5V a 20V; Alcance: 3 a 7 metros; Ângulo de detecção: 110°.", signalType: "Digital (nível alto/baixo - HIGH/LOW).", applications: "Sistemas de alarme, acendimento automático de luzes, controle de presença.", projectExample: "Sistema de segurança IoT que envia notificação push ao celular quando detecta movimento fora do expediente.", image: "img/sensor_pir.svg", manufacturers: "D-SUN, Genérico." },
  { id: "indutivo", name: "Sensor Indutivo LJ12A3", category: "Proximidade", concept: "Sensor industrial para detectar objetos metálicos sem contato físico.", principle: "Gera campo eletromagnético oscilante. Quando um metal se aproxima, correntes de Foucault amortizam a oscilação, disparando a saída.", specs: "Tensão: 6 a 36V DC; Distância: 4mm; Saída: NPN Normalmente Aberto.", signalType: "Digital (sinal discreto On/Off).", applications: "Contagem de peças em esteiras, limites de curso de CNCs, detecção de engrenagens.", projectExample: "Contagem precisa de tampas metálicas em esteira de envase de alta velocidade.", image: "img/sensor_indutivo.svg", manufacturers: "OMRON (similar), Fotek." },
  { id: "capacitivo", name: "Sensor Capacitivo LJC18A3", category: "Proximidade", concept: "Sensor de proximidade para objetos metálicos e não metálicos (plástico, madeira, água).", principle: "A face do sensor age como placa de capacitor. A aproximação de qualquer material altera a capacitância, mudando a amplitude da oscilação.", specs: "Tensão: 6 a 36V DC; Distância de detecção: 1 a 10mm (ajustável).", signalType: "Digital (sinal discreto On/Off).", applications: "Detecção de nível em reservatórios plásticos, contagem de caixas de papelão.", projectExample: "Verificação de envase que detecta através de garrafa plástica se o líquido atingiu o nível correto.", image: "img/sensor_capacitivo.svg", manufacturers: "Fotek, Heschen." },
  { id: "mq2", name: "MQ-2", category: "Gás", concept: "Sensor eletroquímico para detectar gases inflamáveis (GLP, Propano, Metano) e fumaça.", principle: "Utiliza dióxido de estanho (SnO2) aquecido. A presença de gás aumenta a condutividade elétrica proporcionalmente à concentração.", specs: "Tensão: 5V; Gases: GLP, Propano, Metano, H2 e Fumaça; Faixa: 300 a 10000 ppm.", signalType: "Analógico (proporcional) e Digital (limite ajustável).", applications: "Sistemas de alarme de vazamento de gás, detectores de incêndio.", projectExample: "Dispositivo que corta o fornecimento de gás e aciona sirene ao detectar vazamento.", image: "img/sensor_mq2.svg", manufacturers: "Winsen, Hanwei Electronics." },
  { id: "mq135", name: "MQ-135", category: "Gás", concept: "Sensor para monitoramento de qualidade do ar, sensível a gases nocivos como NH3, benzeno e CO2.", principle: "Mesmo princípio do MQ-2, mas com material sensível otimizado para gases nocivos ao ambiente.", specs: "Tensão: 5V; Gases: NH3, NOx, Benzeno, CO2; Faixa de concentração variável.", signalType: "Analógico e Digital.", applications: "Monitoramento de qualidade do ar em escritórios, escolas e indústrias.", projectExample: "Sistema de ventilação automática que aciona exaustores quando CO2 ultrapassa limites.", image: "img/sensor_mq135.svg", manufacturers: "Winsen, Hanwei Electronics." },
  { id: "fc37", name: "FC-37 (Sensor de Chuva)", category: "Ambiente", concept: "Detecta a presença e intensidade de chuva ou qualquer líquido na superfície do sensor.", principle: "Painel sensor com trilhas de cobre expostas. A presença de água reduz a resistência entre as trilhas, alterando a tensão de saída.", specs: "Tensão: 3.3V a 5V; Saída analógica: 0-5V; Saída digital com trimpot.", signalType: "Analógico e Digital.", applications: "Fechar janelas automaticamente, irrigação inteligente, alertas meteorológicos.", projectExample: "Sistema de irrigação de jardim que desliga automaticamente ao detectar chuva.", image: "img/sensor_fc37.svg", manufacturers: "Genérico." },
  { id: "hx711", name: "HX711 (Célula de Carga)", category: "Peso e Força", concept: "Módulo amplificador e conversor ADC de 24 bits para células de carga (strain gauges).", principle: "Amplifica o sinal analógico da célula de carga e converte para digital em 24 bits de resolução via protocolo serial.", specs: "Tensão: 2.6V a 5.5V; Resolução: 24 bits; Taxa de amostragem: 10 ou 80 SPS.", signalType: "Digital (protocolo serial de 2 fios).", applications: "Balanças industriais, silos de armazenamento, controle de dosagem.", projectExample: "Balança de precisão industrial para dosagem automática em farmácias.", image: "img/sensor_hx711.svg", manufacturers: "AVIA Semiconductor." },
  { id: "ky040", name: "KY-040 (Encoder Rotativo)", category: "Posição e Movimento", concept: "Encoder rotativo de quadratura para medir rotação, velocidade e posição angular.", principle: "Dois pulsos em quadratura (A e B) permitem determinar direção e número de passos. Botão push integrado para seleção.", specs: "Tensão: 5V; Resolução: 20 pulsos por rotação; Sem limite de giros.", signalType: "Digital (pulsos em quadratura).", applications: "Menus de seleção em projetos, controle de velocidade de motores, posicionamento.", projectExample: "Controle de volume e menu de seleção em um painel de controle industrial.", image: "img/sensor_ky040.svg", manufacturers: "Genérico (Bourns similar)." },
  { id: "sw420", name: "SW-420 (Vibração)", category: "Posição e Movimento", concept: "Sensor que detecta vibração e movimento, ideal para alertas de segurança.", principle: "Contém um resorte metálico interno que fecha o circuito ao vibrar, enviando um pulso digital.", specs: "Tensão: 3.3V a 5V; Saída digital com potenciômetro de ajuste de sensibilidade.", signalType: "Digital.", applications: "Alarmes de segurança, detecção de quebra de vidros, monitoramento de máquinas.", projectExample: "Alarme antifurto para veículos que dispara ao detectar vibração.", image: "img/sensor_sw420.svg", manufacturers: "Genérico." },
  { id: "acs712", name: "ACS712 (Corrente)", category: "Elétrico", concept: "Sensor de corrente elétrica AC/DC baseado no efeito Hall, para até 30A.", principle: "O efeito Hall gera uma tensão proporcional ao campo magnético induzido pela corrente, isolando galvanicamente o circuito.", specs: "Tensão: 5V; Corrente: até 5A, 20A ou 30A (modelos); Sensibilidade: 66-185 mV/A.", signalType: "Analógico.", applications: "Monitoramento de consumo energético, proteção de motores, medidores de energia.", projectExample: "Monitor de consumo energético IoT que registra o consumo de cada equipamento da fábrica.", image: "img/sensor_acs712.svg", manufacturers: "Allegro MicroSystems." },
  { id: "zmpt101b", name: "ZMPT101B (Tensão AC)", category: "Elétrico", concept: "Módulo transformador de isolamento para medição de tensão AC até 250V.", principle: "Micro-transformador de precisão reduz e isola a tensão da rede para um nível seguro (0-5V) compatível com ADC do microcontrolador.", specs: "Tensão de entrada: até 250V AC; Saída: 0-5V; Frequência: 50/60 Hz.", signalType: "Analógico.", applications: "Medição de tensão da rede elétrica, monitores de qualidade de energia.", projectExample: "Analisador de qualidade de energia para detectar picos e quedas de tensão na fábrica.", image: "img/sensor_zmpt101b.svg", manufacturers: "ZMPT (Zhongming)." },
  { id: "mfrc522", name: "MFRC522 (RFID)", category: "Comunicação e ID", concept: "Módulo leitor/escritor RFID de 13.56 MHz para controle de acesso e identificação.", principle: "Gera campo eletromagnético que alimenta e comunica com as tags RFID passivas (cartões e chaveiros MIFARE) via protocolo ISO 14443.", specs: "Tensão: 3.3V; Frequência: 13.56 MHz; Alcance: até 5cm; Interface: SPI.", signalType: "Digital (SPI).", applications: "Controle de acesso, registro de ponto, rastreamento de ativos e produtos.", projectExample: "Sistema de controle de acesso em empresa que registra entrada e saída de funcionários.", image: "img/sensor_mfrc522.svg", manufacturers: "NXP Semiconductors." },
  { id: "a3144", name: "A3144 (Hall Effect)", category: "Posição e Movimento", concept: "Sensor de efeito Hall para detectar campos magnéticos e posição de imãs.", principle: "Gera tensão proporcional ao campo magnético perpendicular ao fluxo de corrente (efeito Hall), comutando a saída quando o campo supera o limiar.", specs: "Tensão: 4.5V a 24V; Saída: NPN Open Collector; Frequência máxima: 100 kHz.", signalType: "Digital (Open Collector).", applications: "Contagem de rotações de motores, detecção de posição de eixos, odômetros.", projectExample: "Tacômetro IoT para monitoramento de RPM de motores industriais em tempo real.", image: "img/sensor_a3144.svg", manufacturers: "Allegro MicroSystems." },
  { id: "boia", name: "Sensor de Boia (Nível)", category: "Nível de Líquido", concept: "Interruptor de flutuação magnético para detecção de nível de líquidos em reservatórios.", principle: "Um imã dentro de um flutuador fecha/abre um reed switch quando sobe ou desce com o nível do líquido.", specs: "Tensão: até 100V AC/DC; Corrente: até 0.5A; Temperatura: -10°C a 85°C.", signalType: "Digital (reed switch).", applications: "Controle de enchimento/esvaziamento de tanques, caixas d'água e reservatórios.", projectExample: "Sistema de controle automático de bomba que enche o reservatório ao atingir o nível mínimo.", image: "img/sensor_boia.svg", manufacturers: "Genérico." },
  { id: "umidade_solo", name: "Sensor de Umidade do Solo", category: "Ambiente", concept: "Detecta o nível de umidade do solo para sistemas de irrigação inteligente.", principle: "Dois eletrodos medem a resistência (condutividade) do solo. Solo úmido conduz melhor, reduzindo a resistência e alterando a tensão de saída.", specs: "Tensão: 3.3V a 5V; Saída analógica (0-5V) e digital com potenciômetro.", signalType: "Analógico e Digital.", applications: "Irrigação automatizada, monitoramento agrícola, estufas inteligentes.", projectExample: "Sistema de irrigação inteligente para horta doméstica controlado via smartphone.", image: "img/sensor_umidade_solo.svg", manufacturers: "Genérico." },
  { id: "yfs201", name: "YF-S201 (Fluxo de Água)", category: "Nível de Líquido", concept: "Sensor de fluxo de água que mede o volume e a vazão de líquidos.", principle: "Uma turbina interna gira proporcionalmente ao fluxo de água, e um sensor de efeito Hall gera pulsos elétricos contados pelo microcontrolador.", specs: "Tensão: 5V a 18V; Faixa de fluxo: 1 a 30 L/min; Precisão: ±10%.", signalType: "Digital (pulsos de frequência).", applications: "Medidores de consumo de água, controle de dosagem em processos industriais.", projectExample: "Sistema de cobrança de água IoT que monitora o consumo por unidade em tempo real.", image: "img/sensor_yfs201.svg", manufacturers: "Genérico." },
  { id: "flama", name: "Sensor de Chama IR", category: "Ambiente", concept: "Detecta a presença de chamas ou fontes de luz infravermelha intensa.", principle: "Fotodiodo sensível ao espectro infravermelho (760 a 1100nm) detecta a radiação emitida por chamas.", specs: "Tensão: 3.3V a 5V; Ângulo de detecção: 60°; Distância: até 1 metro.", signalType: "Analógico e Digital.", applications: "Sistemas de segurança contra incêndio, robôs apaga-chamas, alertas de segurança.", projectExample: "Sistema de supressão automática de incêndio em servidores e painéis elétricos.", image: "img/sensor_flama.svg", manufacturers: "Genérico." },
  { id: "ky037", name: "KY-037 (Som/Ruído)", category: "Ambiente", concept: "Sensor de detecção de som para palmas, voz ou outros sons ambientes.", principle: "Microfone eletret capta variações de pressão sonora, convertendo em sinal elétrico amplificado. Saída digital com comparador.", specs: "Tensão: 3.3V a 5V; Saída digital e analógica; Sensibilidade ajustável via potenciômetro.", signalType: "Analógico e Digital.", applications: "Controle por palmas, detecção de níveis de ruído, ativação por voz básica.", projectExample: "Controle de luzes por palmas em um cômodo doméstico.", image: "img/sensor_ky037.svg", manufacturers: "Genérico." }
];

// ── Inicialização dos módulos de robôs e sensores ──────────────
document.addEventListener('DOMContentLoaded', () => {
  initRobotsModule();
  initSensorsModule();
  initRobotsModal();
  initSensorsModal();
  initReadingProgress();
  initScrollToTopUnified();
  initAnimateOnScroll();
});

// ── Módulo Robôs ───────────────────────────────────────────────
function initRobotsModule() {
  const grid = document.getElementById('robots-grid');
  if (!grid) return;

  renderRobotsGrid(robotsData);

  // Tabs de filtro
  document.querySelectorAll('.robot-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.robot-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      const filtered = filter === 'todos' ? robotsData : robotsData.filter(r => r.id === filter);
      renderRobotsGrid(filtered);
    });
  });

  // Busca de robôs
  const searchInput = document.getElementById('robot-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      document.querySelectorAll('.robot-tab').forEach(t => t.classList.remove('active'));
      const allTab = document.querySelector('.robot-tab[data-filter="todos"]');
      if (allTab) allTab.classList.add('active');
      const filtered = query === '' ? robotsData : robotsData.filter(r =>
        `${r.nome} ${r.conceito} ${r.tipo} ${r.aplicacoes.join(' ')}`.toLowerCase().includes(query)
      );
      renderRobotsGrid(filtered);
    });
  }
}

function renderRobotsGrid(data) {
  const grid = document.getElementById('robots-grid');
  if (!grid) return;
  grid.innerHTML = data.map(robot => `
    <div class="robot-card unified-card" data-robot-id="${robot.id}" onclick="openRobotModal('${robot.id}')">
      <div class="unified-card-image">
        ${robot.imagem ? `<img src="${robot.imagem}" alt="${robot.nome}" loading="lazy">` : `<div class="unified-card-emoji">${robot.emoji}</div>`}
        <span class="unified-card-badge">${robot.tipo}</span>
      </div>
      <div class="unified-card-content">
        <h3>${robot.nome}</h3>
        <p>${robot.conceito.substring(0, 150)}...</p>
        <div class="unified-card-tags">
          ${robot.aplicacoes.slice(0, 3).map(a => `<span>${a.split(' ').slice(0, 3).join(' ')}</span>`).join('')}
        </div>
        <span class="unified-card-link">Ver detalhes completos →</span>
      </div>
    </div>
  `).join('');
}

// ── Módulo Sensores ────────────────────────────────────────────
function initSensorsModule() {
  const grid = document.getElementById('sensors-grid');
  if (!grid) return;

  const categories = [...new Set(sensorsData.map(s => s.category))];
  const navEl = document.getElementById('sensor-categories-nav');
  if (navEl) {
    navEl.innerHTML = `
      <button class="robot-tab active" data-cat="todos">Todos</button>
      ${categories.map(cat => `<button class="robot-tab" data-cat="${cat}">${cat}</button>`).join('')}
    `;
    navEl.querySelectorAll('.robot-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        navEl.querySelectorAll('.robot-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.cat;
        const filtered = cat === 'todos' ? sensorsData : sensorsData.filter(s => s.category === cat);
        renderSensorsGrid(filtered);
      });
    });
  }

  const searchInput = document.getElementById('sensor-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (navEl) navEl.querySelectorAll('.robot-tab').forEach(b => b.classList.remove('active'));
      const allBtn = navEl ? navEl.querySelector('[data-cat="todos"]') : null;
      if (allBtn) allBtn.classList.add('active');
      const filtered = query === '' ? sensorsData : sensorsData.filter(s =>
        `${s.name} ${s.concept} ${s.category} ${s.applications}`.toLowerCase().includes(query)
      );
      renderSensorsGrid(filtered);
    });
  }

  renderSensorsGrid(sensorsData);
}

function renderSensorsGrid(data) {
  const grid = document.getElementById('sensors-grid');
  if (!grid) return;
  grid.innerHTML = data.map(sensor => `
    <div class="robot-card unified-card" data-sensor-id="${sensor.id}" onclick="openSensorModal('${sensor.id}')">
      <div class="unified-card-image sensor-card-img">
        <img src="${sensor.image}" alt="${sensor.name}" loading="lazy" onerror="this.style.display='none'">
        <span class="unified-card-badge">${sensor.category}</span>
      </div>
      <div class="unified-card-content">
        <h3>${sensor.name}</h3>
        <p>${sensor.concept}</p>
        <div class="unified-card-tags">
          <span>${sensor.signalType.split('(')[0].trim()}</span>
          <span>${sensor.category}</span>
        </div>
        <span class="unified-card-link">Ver especificações →</span>
      </div>
    </div>
  `).join('');
}

// ── Modal Robôs ────────────────────────────────────────────────
function initRobotsModal() {
  const modal = document.getElementById('robot-modal');
  const closeBtn = document.getElementById('modal-close');
  if (!modal) return;
  if (closeBtn) closeBtn.addEventListener('click', closeRobotModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeRobotModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeRobotModal(); });
}

function openRobotModal(robotId) {
  const robot = robotsData.find(r => r.id === robotId);
  if (!robot) return;
  const modal = document.getElementById('robot-modal');
  const content = document.getElementById('modal-inner');
  content.innerHTML = `
    <button class="modal-close" id="modal-close" onclick="closeRobotModal()" aria-label="Fechar">✕</button>
    <div class="modal-hero">
      ${robot.imagem ? `<img src="${robot.imagem}" alt="${robot.nome}" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover">` : `<div class="robot-illustration-large">${robot.emoji}</div>`}
      <div class="modal-hero-overlay"></div>
      <div class="modal-hero-content">
        <span class="robot-type-badge">${robot.tipo}</span>
        <h2>${robot.nome}</h2>
      </div>
    </div>
    <div class="modal-body">
      <div class="modal-tabs">
        <button class="modal-tab active" data-tab="conceito">Conceito</button>
        <button class="modal-tab" data-tab="funcionamento">Funcionamento</button>
        <button class="modal-tab" data-tab="caracteristicas">Características</button>
        <button class="modal-tab" data-tab="aplicacoes">Aplicações</button>
        <button class="modal-tab" data-tab="iot">IoT</button>
        <button class="modal-tab" data-tab="fabricantes">Fabricantes</button>
      </div>
      <div class="modal-tab-content active" id="tab-conceito">
        <div class="info-block"><h3>📖 Conceito</h3><p>${robot.conceito}</p></div>
        <div class="specs-grid">${Object.entries(robot.specs).map(([k,v]) => `<div class="spec-item"><div class="spec-value">${v}</div><div class="spec-label">${k}</div></div>`).join('')}</div>
      </div>
      <div class="modal-tab-content" id="tab-funcionamento">
        <div class="info-block"><h3>⚙️ Princípio de Funcionamento</h3><p>${robot.funcionamento}</p></div>
      </div>
      <div class="modal-tab-content" id="tab-caracteristicas">
        <div class="info-block"><h3>📋 Características Técnicas</h3><ul>${robot.caracteristicas.map(c => `<li>${c}</li>`).join('')}</ul></div>
      </div>
      <div class="modal-tab-content" id="tab-aplicacoes">
        <div class="info-block"><h3>🏭 Aplicações Industriais</h3><ul>${robot.aplicacoes.map(a => `<li>${a}</li>`).join('')}</ul></div>
      </div>
      <div class="modal-tab-content" id="tab-iot">
        <div class="info-block"><h3>🌐 Integração IoT</h3><p>${robot.iot}</p></div>
      </div>
      <div class="modal-tab-content" id="tab-fabricantes">
        <div class="info-block"><h3>🏢 Modelos Comerciais</h3>
          <div class="manufacturers-grid">${robot.fabricantes.map(f => `<div class="manufacturer-card"><h4>${f.modelo}</h4><div class="brand">${f.marca}</div><p>${f.descricao}</p></div>`).join('')}</div>
        </div>
      </div>
    </div>
  `;
  // Init modal tabs
  content.querySelectorAll('.modal-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      content.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
      content.querySelectorAll('.modal-tab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      content.querySelector(`#tab-${tab.dataset.tab}`).classList.add('active');
    });
  });
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeRobotModal() {
  const modal = document.getElementById('robot-modal');
  if (modal) { modal.classList.remove('active'); document.body.style.overflow = ''; }
}

// ── Modal Sensores ─────────────────────────────────────────────
function initSensorsModal() {
  const modal = document.getElementById('sensor-modal');
  if (!modal) return;
  modal.addEventListener('click', (e) => { if (e.target === modal) closeSensorModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSensorModal(); });
}

function openSensorModal(sensorId) {
  const sensor = sensorsData.find(s => s.id === sensorId);
  if (!sensor) return;
  const modal = document.getElementById('sensor-modal');
  const content = document.getElementById('sensor-modal-inner');
  if (!modal || !content) return;
  content.innerHTML = `
    <button class="modal-close" onclick="closeSensorModal()" aria-label="Fechar">✕</button>
    <div class="sensor-modal-header">
      <img src="${sensor.image}" alt="${sensor.name}" onerror="this.style.display='none'">
      <div class="sensor-modal-title">
        <span class="robot-type-badge">${sensor.category}</span>
        <h2>${sensor.name}</h2>
      </div>
    </div>
    <div class="modal-body sensor-modal-body">
      <div class="info-block"><h3>📖 Conceito</h3><p>${sensor.concept}</p></div>
      <div class="info-block"><h3>⚙️ Princípio de Funcionamento</h3><p>${sensor.principle}</p></div>
      <div class="info-block"><h3>📋 Especificações Técnicas</h3>
        <div class="sensor-specs-list">
          <div class="ssl-item"><strong>Especificações:</strong><span>${sensor.specs}</span></div>
          <div class="ssl-item"><strong>Tipo de Sinal:</strong><span>${sensor.signalType}</span></div>
          <div class="ssl-item"><strong>Fabricantes:</strong><span>${sensor.manufacturers}</span></div>
        </div>
      </div>
      <div class="info-block"><h3>🏭 Aplicações</h3><p>${sensor.applications}</p></div>
      <div class="info-block"><h3>💡 Exemplo de Projeto</h3><p>${sensor.projectExample}</p></div>
    </div>
  `;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSensorModal() {
  const modal = document.getElementById('sensor-modal');
  if (modal) { modal.classList.remove('active'); document.body.style.overflow = ''; }
}

// ── Barra de progresso de leitura ─────────────────────────────
function initReadingProgress() {
  const bar = document.getElementById('reading-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = docH > 0 ? `${(scrollTop / docH) * 100}%` : '0%';
  });
}

// ── Scroll to top ──────────────────────────────────────────────
function initScrollToTopUnified() {
  const btn = document.getElementById('scroll-top-unified');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── Animate on Scroll ──────────────────────────────────────────
function initAnimateOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (elements.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });

  elements.forEach(el => observer.observe(el));
}
