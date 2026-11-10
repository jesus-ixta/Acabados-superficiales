export interface Question {
  id: number;
  pregunta: string;
  opciones: string[];
  correcta: number;
  tema?: string;
  explicacion?: string;
}

export const QUESTIONS_BANK: Question[] = [
  {
    id: 1,
    pregunta: "¿Qué utilizaban los artesanos prehistóricos como abrasivos naturales para nivelar la rugosidad?",
    opciones: ["Arena, piedra pómez y agua", "Diamante sintético y óxido de aluminio", "Esmeril industrial y aceite", "Carburo de silicio y resina"],
    correcta: 0,
    tema: "Historia y Evolución",
    explicacion: "En las primeras etapas de la manufactura humana, se utilizaban abrasivos naturales como arena de sílice, rocas volcánicas como la piedra pómez y agua como fluido lubricante para pulir herramientas de piedra y metal."
  },
  {
    id: 2,
    pregunta: "¿Cuál era el objetivo principal de los tratamientos superficiales en la era preindustrial?",
    opciones: ["Lograr tolerancias IT4 a IT6", "Crear una barrera física básica contra corrosión y degradación", "Generar capas de nitruro de titanio", "Disminuir la rugosidad a Ra < 0.02 µm"],
    correcta: 1,
    tema: "Historia y Evolución",
    explicacion: "Antes de la revolución industrial, el propósito era primordialmente protector contra la intemperie y la corrosión ambiental mediante aceitado, engrasado o aplicación de resinas y ceras naturales."
  },
  {
    id: 3,
    pregunta: "¿Qué evento tecnológico del siglo XIX impulsó la necesidad de ajustes mecánicos precisos y menor fricción?",
    opciones: ["La invención de la fotolitografía", "La máquina de vapor y la fabricación masiva de mecanismos", "El desarrollo de la nitruración por plasma", "La patente del electropulido"],
    correcta: 1,
    tema: "Historia y Evolución",
    explicacion: "La máquina de vapor y la estandarización de componentes mecánicos exigieron tolerancias dimensionales estrechas y superficies de contacto con baja fricción para evitar fugas y desgaste rápido."
  },
  {
    id: 4,
    pregunta: "¿Qué máquinas nacieron en la Revolución Industrial para abandonar el trabajo manual de pulido?",
    opciones: ["Cámaras de vacío PVD", "Tinas de cataforesis KTL", "Rectificadoras mecánicas impulsadas por poleas", "Lapeadoras orbitales CNC"],
    correcta: 2,
    tema: "Historia y Evolución",
    explicacion: "Las rectificadoras mecánicas accionadas por sistemas de poleas y correas centralizadas permitieron desbastar y dar acabado uniforme con muelas abrasivas aglutinadas."
  },
  {
    id: 5,
    pregunta: "¿Entre qué décadas del siglo XX se estandarizaron procesos como el electrozincado, cromado duro y anodizado?",
    opciones: ["1880 y 1890", "1920 y 1930", "1960 y 1970", "1990 y 2000"],
    correcta: 1,
    tema: "Historia y Evolución",
    explicacion: "Durante los años 1920 y 1930, con la maduración de la electroquímica industrial y la industria automotriz y aeronáutica, se formalizaron el cromado duro, el galvanizado y el anodizado de aluminio."
  },
  {
    id: 6,
    pregunta: "¿Qué conflicto histórico actuó como catalizador para acelerar el uso de fosfatizado y pavonado en armamento?",
    opciones: ["La Guerra de Independencia", "La Primera y Segunda Guerra Mundial", "La Guerra de Vietnam", "La Revolución Francesa"],
    correcta: 1,
    tema: "Historia y Evolución",
    explicacion: "Ambas Guerras Mundiales demandaron millones de armas y proyectiles con protección anticorrosiva rápida y acabado antirreflejante mate, popularizando el fosfatizado (Parkerizado) y pavonado."
  },
  {
    id: 7,
    pregunta: "En la era moderna, ¿a qué escala busca la ingeniería modificar las propiedades tribológicas y térmicas?",
    opciones: ["Milimétrica y centimétrica", "Micrométrica y nanométrica", "Macroscópica y estructural", "Únicamente visible a simple vista"],
    correcta: 1,
    tema: "Ingeniería de Superficies",
    explicacion: "La ingeniería de superficies moderna diseña películas y capas a escala de micrómetros (µm) y nanómetros (nm) para modificar dureza, fricción, resistencia térmica y biocompatibilidad."
  },
  {
    id: 8,
    pregunta: "¿Cuáles son los dos componentes principales que conforman la textura superficial a diferentes longitudes de onda?",
    opciones: ["Dureza y tenacidad", "Rugosidad y ondulación", "Elasticidad y ductilidad", "Calamina y porosidad"],
    correcta: 1,
    tema: "Textura Superficial",
    explicacion: "La textura superficial total se compone de la rugosidad (longitudes de onda cortas por filos o granos abrasivos) y la ondulación (longitudes de onda más largas por vibraciones o deflexiones)."
  },
  {
    id: 9,
    pregunta: "¿Qué representa la rugosidad superficial en un componente mecanizado?",
    opciones: ["Desviaciones causadas por deflexiones de la máquina a gran escala", "Microirregularidades producidas por la herramienta de corte o el grano abrasivo", "El espesor total del recubrimiento de pintura", "La deformación térmica del núcleo del material"],
    correcta: 1,
    tema: "Textura Superficial",
    explicacion: "La rugosidad representa las huellas e irregularidades microscópicas inherentes a la cinemática de corte o al grano abrasivo durante el arranque de viruta."
  },
  {
    id: 10,
    pregunta: "¿Qué causa comúnmente la ondulación en una pieza mecanizada?",
    opciones: ["Disolución anódica", "Vibraciones, deflexiones de la máquina o distorsiones térmicas", "El grano abrasivo de diamante", "Inmersión en ácido cítrico"],
    correcta: 1,
    tema: "Textura Superficial",
    explicacion: "La ondulación surge de factores dinámicos del sistema máquina-herramienta-pieza, como vibraciones (chatter), holguras en guías mecánicas o tensiones térmicas residuales."
  },
  {
    id: 11,
    pregunta: "¿Qué mide el parámetro de rugosidad Ra?",
    opciones: ["La distancia entre el pico más alto y el valle más profundo", "El promedio aritmético de las desviaciones del perfil respecto a la línea media", "El diámetro del grano abrasivo empleado", "La dureza Vickers en la capa externa"],
    correcta: 1,
    tema: "Metrología Superficial",
    explicacion: "Ra (Roughness Average) es la integral del valor absoluto de la altura del perfil dividida entre la longitud de muestreo L, es decir, el promedio aritmético de las desviaciones respecto a la línea media."
  },
  {
    id: 12,
    pregunta: "¿Cuál es la principal limitación del parámetro Ra en metrología?",
    opciones: ["No se puede medir con rugosímetros de contacto", "No distingue entre crestas y valles en el perfil", "Se mide únicamente en milímetros", "Solo aplica a polímeros"],
    correcta: 1,
    tema: "Metrología Superficial",
    explicacion: "Como Ra promedia valores absolutos, un perfil con picos afilados y otro con valles profundos idénticos arrojan el mismo Ra numérico, requiriendo parámetros como Rz, Rsk o Rku para caracterización funcional completa."
  },
  {
    id: 13,
    pregunta: "¿Cómo se define el parámetro de rugosidad Rz según la norma ISO 4287?",
    opciones: ["Promedio entre los 5 picos más altos y los 5 valles más profundos", "Altura total del recubrimiento electrolítico", "Desviación estándar de la ondulación", "Distancia horizontal entre crestas adyacentes"],
    correcta: 0,
    tema: "Metrología Superficial",
    explicacion: "Según ISO 4287, Rz es la altura media entre los 5 picos más altos y los 5 valles más profundos dentro de la longitud de evaluación."
  },
  {
    id: 14,
    pregunta: "¿En qué unidades se expresa habitualmente el parámetro Ra?",
    opciones: ["Milímetros (mm)", "Micrómetros (µm) o micropulgadas (µin)", "Nanómetros (nm) únicamente", "Pascales (Pa)"],
    correcta: 1,
    tema: "Metrología Superficial",
    explicacion: "El parámetro Ra se expresa en micrómetros (µm, 10^-6 m) en el sistema internacional y en micropulgadas (µin, 1 µm ≈ 40 µin) en el sistema anglosajón."
  },
  {
    id: 15,
    pregunta: "¿Qué norma rige los parámetros metrológicos de textura superficial como Ra y Rz?",
    opciones: ["ISO 9001", "ISO 4287 / ANSI B46.1", "ASTM F136", "DIN 50190"],
    correcta: 1,
    tema: "Normativa y Estándares",
    explicacion: "ISO 4287 (y en EE.UU. ANSI/ASME B46.1) establece las definiciones matemáticas y operacionales de los parámetros de rugosidad, ondulación y perfil primario."
  },
  {
    id: 16,
    pregunta: "¿Cuáles son los dos mecanismos principales de los procesos mecánicos de acabado?",
    opciones: ["Disolución iónica y electrólisis", "Remoción abrasiva a microescala y deformación plástica en frío", "Difusión atómica de nitrógeno y carbono", "Polimerización térmica y cura en horno"],
    correcta: 1,
    tema: "Procesos Mecánicos",
    explicacion: "Los acabados mecánicos operan por microarranque de viruta mediante granos abrasivos (rectificado, lapeado) o por flujo plástico superficial en frío (bruñido por rodillos, peening)."
  },
  {
    id: 17,
    pregunta: "¿Qué valores de rugosidad Ra se obtienen típicamente mediante el rectificado?",
    opciones: ["0.02 a 0.1 µm", "0.2 a 0.8 µm", "1.6 a 3.2 µm", "5.0 a 10.0 µm"],
    correcta: 1,
    tema: "Procesos Mecánicos - Rectificado",
    explicacion: "El rectificado de precisión comercial produce rangos de Ra de entre 0.2 y 0.8 µm en aceros templados y piezas mecánicas de precisión."
  },
  {
    id: 18,
    pregunta: "¿Qué abrasivos son comúnmente utilizados en las muelas de rectificado?",
    opciones: ["Grano de cuarzo y yeso", "Óxido de aluminio, carburo de silicio, CBN o diamante", "Polvo de hierro y grafito", "Carbonato de calcio y arena fina"],
    correcta: 1,
    tema: "Procesos Mecánicos - Rectificado",
    explicacion: "Los granos abrasivos industriales estándar son el óxido de aluminio (corindón), carburo de silicio (carborundo) y superabrasivos como CBN (nitruro de boro cúbico) y diamante sintético."
  },
  {
    id: 19,
    pregunta: "En el proceso de lapeado, ¿dónde se encuentran los granos abrasivos?",
    opciones: ["Fijos en una muela rígida de alta velocidad", "Libres en una suspensión líquida o pasta entre la pieza y el plato", "Unidos por galvanoplastia a un cable de acero", "Gaseosos en una cámara de alto vacío"],
    correcta: 1,
    tema: "Procesos Mecánicos - Lapeado",
    explicacion: "El lapeado utiliza granos abrasivos libres suspendidos en un líquido portador (slurry) o pasta, que ruedan y deslizan entre el plato lapeador y la superficie de trabajo."
  },
  {
    id: 20,
    pregunta: "¿Qué rugosidades ultra finas logra alcanzar el proceso de lapeado?",
    opciones: ["Ra = 0.02 a 0.1 µm", "Ra = 1.0 a 2.5 µm", "Ra = 5.0 a 8.0 µm", "Ra = 10 a 20 µm"],
    correcta: 0,
    tema: "Procesos Mecánicos - Lapeado",
    explicacion: "El lapeado produce superficies ultraplanas y especulares con rugosidades de Ra de 0.02 a 0.1 µm, común en sellos mecánicos y bloques patrón de calibración."
  },
  {
    id: 21,
    pregunta: "¿Qué tipo de movimiento realiza el cabezal en el proceso de bruñido de cilindros?",
    opciones: ["Rotación pura sin avance", "Movimiento lineal longitudinal único", "Rotación combinada con vaivén axial alternado", "Movimiento orbital planetario de alta frecuencia"],
    correcta: 2,
    tema: "Procesos Mecánicos - Bruñido",
    explicacion: "El bruñido (honing) emplea una herramienta con piedras abrasivas expansibles que gira mientras realiza un vaivén axial oscilante alternado continuo."
  },
  {
    id: 22,
    pregunta: "¿Cuál es la función del patrón de rayado cruzado (cross-hatch) generado por el bruñido?",
    opciones: ["Aumentar la resistencia a la fatiga del acero", "Albergar y retener la película de aceite lubricante", "Permitir la adhesión de pintura electrostática", "Eliminar la capa blanca martensítica"],
    correcta: 1,
    tema: "Procesos Mecánicos - Bruñido",
    explicacion: "El rayado helicoidal cruzado a ~45° retiene el lubricante para reducir el rozamiento entre los anillos del pistón y la camisa del cilindro en motores de combustión interna."
  },
  {
    id: 23,
    pregunta: "¿En qué consiste el proceso de granallado de peening (Shot Peening)?",
    opciones: ["En sumergir la pieza en ácidos fosfórico y sulfórico", "En el bombardeo controlado con microesferas a alta velocidad", "En depositar nitruro de titanio en estado gaseoso", "En frotar la pieza con discos de hierro fundido dúctil"],
    correcta: 1,
    tema: "Procesos Mecánicos - Shot Peening",
    explicacion: "El Shot Peening impacta la superficie con microesferas de acero, vidrio o cerámica aceleradas por aire comprimido o turbina centrífuga bajo control riguroso de intensidad Almen."
  },
  {
    id: 24,
    pregunta: "¿Qué tipo de esfuerzos induce el Shot Peening en la superficie del metal?",
    opciones: ["Esfuerzos residuales de tensión", "Esfuerzos residuales de compresión", "Esfuerzos de corte cortante puro", "Esfuerzos térmicos de dilatación"],
    correcta: 1,
    tema: "Procesos Mecánicos - Shot Peening",
    explicacion: "Cada impacto de microesfera genera una pequeña huella plástica superficial contenida por el núcleo elástico inferior, induciendo esfuerzos residuales compresivos muy beneficiosos."
  },
  {
    id: 25,
    pregunta: "¿Cuál es el beneficio principal de inducir esfuerzos compresivos con Shot Peening?",
    opciones: ["Mejorar la conductividad eléctrica de la pieza", "Prevenir la iniciación y propagación de grietas por fatiga", "Lograr un acabado reflejante tipo espejo", "Reducir el peso del componente aeronáutico"],
    correcta: 1,
    tema: "Procesos Mecánicos - Shot Peening",
    explicacion: "Las grietas por fatiga se inician y propagan bajo esfuerzos de tensión cíclicos; la capa compresiva neutraliza las tensiones aplicadas, multiplicando la vida útil a la fatiga."
  },
  {
    id: 26,
    pregunta: "¿En qué consiste el electropulido anódico?",
    opciones: ["La pieza actúa como cátodo en un baño de níquel", "La pieza actúa como ánodo en un baño ácido y disuelve picos microestructurales", "Se pulveriza pintura cargada electrostáticamente", "Se difunde nitrógeno atómico a 900 °C"],
    correcta: 1,
    tema: "Procesos Electroquímicos - Electropulido",
    explicacion: "En el electropulido la pieza se conecta al polo positivo (ánodo). La densidad de corriente es mayor en las microcrestas, disolviéndolas preferentemente y nivelando la superficie."
  },
  {
    id: 27,
    pregunta: "¿Qué mezcla de ácidos se utiliza comúnmente en el baño electrolítico de electropulido?",
    opciones: ["Ácido clorhídrico y acético", "Ácido fosfórico y ácido sulfúrico", "Ácido fluorhídrico y nítrico puro", "Ácido cítrico y agua desionizada"],
    correcta: 1,
    tema: "Procesos Electroquímicos - Electropulido",
    explicacion: "El electrolito estándar para aceros inoxidables es una mezcla viscosa concentrada de ácido fosfórico (H3PO4) y ácido sulfúrico (H2SO4) a temperaturas controladas de 50-70 °C."
  },
  {
    id: 28,
    pregunta: "¿Qué rugosidad y acabado produce el electropulido en acero inoxidable 316L?",
    opciones: ["Ra < 0.1 µm con superficie nivelada, brillante y pasiva", "Ra > 2.0 µm con textura mate porosa", "Capa de óxido de aluminio de 50 µm", "Recubrimiento cobrizo de alta fricción"],
    correcta: 0,
    tema: "Procesos Electroquímicos - Electropulido",
    explicacion: "El electropulido genera superficies ultra limpias con Ra < 0.1 µm, libres de tensiones mecánicas, con alto enriquecimiento de cromo y acabado espejo de grado farmacéutico."
  },
  {
    id: 29,
    pregunta: "¿Qué es el anodizado de aluminio?",
    opciones: ["Un depósito mecánico de zinc mediante impacto", "Un proceso electrolítico que fuerza el crecimiento de una capa protectora de Al2O3", "La disolución completa del aluminio en ácido clorhídrico", "La aplicación de pintura horneada a 200 °C"],
    correcta: 1,
    tema: "Tratamientos Electroquímicos - Anodizado",
    explicacion: "El anodizado es una oxidación anódica forzada en un baño ácido (generalmente sulfúrico), donde el aluminio libera oxígeno para formar una capa densa y ordenada de óxido de aluminio (alúmina Al2O3)."
  },
  {
    id: 30,
    pregunta: "¿Qué diferencia al Anodizado Tipo II del Anodizado Tipo III?",
    opciones: ["El Tipo II es de alta temperatura y el III usa diamantes", "El Tipo II es decorativo (5-25 µm) y el III es Duro (25-100 µm a 0-5 °C)", "El Tipo II es para aceros y el III para titanio", "El Tipo II usa plasma y el III usa gas metano"],
    correcta: 1,
    tema: "Tratamientos Electroquímicos - Anodizado",
    explicacion: "Según MIL-A-8625, el Tipo II es convencional/decorativo (5-25 µm a ~20 °C) y el Tipo III es Anodizado Duro (Hardcoat, 25-100 µm a 0-5 °C con alta densidad de corriente)."
  },
  {
    id: 31,
    pregunta: "¿Qué dureza superficial puede alcanzar el Anodizado Duro (Tipo III)?",
    opciones: ["10 a 20 HRC", "30 a 40 HRC", "Hasta 50 - 60 HRC", "85 a 90 HRC"],
    correcta: 2,
    tema: "Tratamientos Electroquímicos - Anodizado",
    explicacion: "La capa de alúmina densa del anodizado duro alcanza durezas comparables a 50 - 60 HRC (400-500 HV), superando al acero templado convencional."
  },
  {
    id: 32,
    pregunta: "¿Cuál es la función del proceso de decapado químico?",
    opciones: ["Eliminar óxidos térmicos, calamina e incrustaciones de soldadura", "Aumentar el brillo óptico mediante dispersión de pigmentos", "Depositar una capa de zinc de sacrificio", "Difundir boro en la red cristalina"],
    correcta: 0,
    tema: "Tratamientos Químicos - Decapado",
    explicacion: "El decapado disuelve químicamente las capas de cascarilla de laminación (calamina), óxidos de soldadura e incrustaciones de la superficie metálica antes de procesos posteriores."
  },
  {
    id: 33,
    pregunta: "¿En qué consiste el pasivado de aceros inoxidables?",
    opciones: ["En disolver la pieza en ácidos concentrados a 100 °C", "En remover el hierro libre para estimular la formación espontánea de Cr2O3", "En aplicar una película de barniz transparente", "En bombardear la pieza con microesferas de vidrio"],
    correcta: 1,
    tema: "Tratamientos Químicos - Pasivado",
    explicacion: "El pasivado disuelve partículas de hierro libre y contaminantes exógenos incrustados, permitiendo al cromo del acero reaccionar con el oxígeno para formar una capa pasiva inerte continua de óxido de cromo (Cr2O3)."
  },
  {
    id: 34,
    pregunta: "¿Qué reactivos se emplean comúnmente para el pasivado de aceros inoxidables según norma ASTM A967?",
    opciones: ["Ácido clorhídrico concentrado", "Ácido nítrico o ácido cítrico diluido", "Sulfato de cobre y cianuro", "Gas propano y metano"],
    correcta: 1,
    tema: "Tratamientos Químicos - Pasivado",
    explicacion: "La norma ASTM A967 especifica baños de pasivado con base en soluciones de ácido nítrico (HNO3) o ácido cítrico ecológico (C6H8O7)."
  },
  {
    id: 35,
    pregunta: "¿Cuál es el objetivo principal de los tratamientos termoquímicos de difusión?",
    opciones: ["Modificar solo el color estético de la pieza", "Alterar la composición química superficial difundiendo átomos a alta temperatura", "Reducir las dimensiones de la pieza en varios milímetros", "Pintar la pieza con resinas híbridas"],
    correcta: 1,
    tema: "Tratamientos Termoquímicos",
    explicacion: "Los tratamientos termoquímicos aprovechan la activación térmica para difundir elementos intersticiales (C, N, B) en la red cristalina de la superficie, creando una capa endurecida y resistente al desgaste con núcleo tenaz."
  },
  {
    id: 36,
    pregunta: "¿Qué elemento se difunde en el proceso de carburación o cementación?",
    opciones: ["Nitrógeno", "Carbono", "Boro", "Cromo"],
    correcta: 1,
    tema: "Tratamientos Termoquímicos - Carburación",
    explicacion: "La carburación o cementación difunde carbono en aceros de bajo contenido de carbono (0.15-0.25% C) para enriquecer la periferia hasta 0.8-1.0% C."
  },
  {
    id: 37,
    pregunta: "¿A qué rango de temperaturas se lleva a cabo la carburación en fase austenítica?",
    opciones: ["200 °C a 400 °C", "480 °C a 560 °C", "880 °C a 950 °C", "1200 °C a 1500 °C"],
    correcta: 2,
    tema: "Tratamientos Termoquímicos - Carburación",
    explicacion: "Se realiza entre 880 °C y 950 °C, donde la red de hierro se encuentra en fase austenítica (FCC), cuya solubilidad y coeficiente de difusión para el carbono son óptimos."
  },
  {
    id: 38,
    pregunta: "¿Qué tratamiento posterior requiere obligatoriamente una pieza carburada para alcanzar 58-64 HRC?",
    opciones: ["Electropulido anódico", "Temple en aceite o polímero seguido de revenido", "Decapado con ácido fluorhídrico", "Anodizado duro"],
    correcta: 1,
    tema: "Tratamientos Termoquímicos - Carburación",
    explicacion: "La carburación solo aporta el carbono; para transformarlo en martensita dura de 58-64 HRC es indispensable templar rápidamente desde temperatura de austenización y realizar un revenido de alivio."
  },
  {
    id: 39,
    pregunta: "¿Cuál es la principal ventaja de la nitruración frente a la carburación?",
    opciones: ["Es un proceso mucho más económico y rápido", "Se opera a menor temperatura (480-560 °C) sin cambio de fase ni temple, evitando distorsión", "Logra capas de más de 5 mm de espesor", "Se aplica sobre madera y polímeros"],
    correcta: 1,
    tema: "Tratamientos Termoquímicos - Nitruración",
    explicacion: "La nitruración opera en fase ferrítica (480-560 °C) por debajo de la temperatura de transformación A1, por lo que no requiere temple y minimiza drásticamente las deformaciones dimensionales."
  },
  {
    id: 40,
    pregunta: "¿En qué consiste la nitruración por plasma o iónica?",
    opciones: ["En sumergir la pieza en sales de nitrato fundidas a 1000 °C", "En ionizar gas nitrógeno mediante potencial eléctrico en cámara de vacío", "En pintar la pieza con nitruro de titanio líquido", "En frotar la pieza con polvo de nitrógeno sólido"],
    correcta: 1,
    tema: "Tratamientos Termoquímicos - Nitruración",
    explicacion: "En una cámara de vacío con descarga luminiscente (glow discharge), los iones N+ bombardean la pieza que actúa como cátodo, implantando y difundiendo nitrógeno de forma muy limpia y controlada."
  },
  {
    id: 41,
    pregunta: "¿Qué durezas alcanza la capa nitrada en aceros de aleación?",
    opciones: ["20 a 30 HRC", "40 a 50 HRC", "65 a 72 HRC", "95 a 100 HRC"],
    correcta: 2,
    tema: "Tratamientos Termoquímicos - Nitruración",
    explicacion: "La precipitación de nitruros de cromo, molibdeno, aluminio o vanadio produce capas duras que alcanzan de 65 a 72 HRC (900-1200 HV)."
  },
  {
    id: 42,
    pregunta: "¿Qué elementos se difunden simultáneamente en la carbonitruración?",
    opciones: ["Cobre y Zinc", "Carbono y Nitrógeno", "Boro y Aluminio", "Cromo y Níquel"],
    correcta: 1,
    tema: "Tratamientos Termoquímicos - Carbonitruración",
    explicacion: "En la carbonitruración gaseosa se introduce una mezcla de gas portador carburante y amoníaco (NH3) para difundir conjuntamente carbono y nitrógeno."
  },
  {
    id: 43,
    pregunta: "¿A qué temperatura aproximada se realiza la carbonitruración gaseosa?",
    opciones: ["400 °C a 500 °C", "800 °C a 870 °C", "1050 °C a 1200 °C", "150 °C a 200 °C"],
    correcta: 1,
    tema: "Tratamientos Termoquímicos - Carbonitruración",
    explicacion: "Se realiza a temperaturas intermedias entre 800 °C y 870 °C, aprovechando el nitrógeno para aumentar la templabilidad de aceros de bajo costo."
  },
  {
    id: 44,
    pregunta: "¿Cómo actúa el zinc en el proceso de galvanizado sobre acero estructural?",
    opciones: ["Como barrera opaca de alta fricción", "Como ánodo de sacrificio para brindar protección galvánica", "Como elemento de difusión que forma nitruros", "Como aislante térmico a 1000 °C"],
    correcta: 1,
    tema: "Recubrimientos Metálicos - Galvanizado",
    explicacion: "El zinc posee un potencial electroquímico más electronegativo que el hierro (-0.76 V vs -0.44 V); si se raya el recubrimiento, el zinc se corroe preferentemente sacrificándose para proteger el acero."
  },
  {
    id: 45,
    pregunta: "¿Qué características aporta el recubrimiento de cromado duro electrolítico?",
    opciones: ["Alta rugosidad y color negro mate", "Baja fricción, alta resistencia al desgaste y dureza de 65-70 HRC", "Espesor microscópico de 2 nm sin resistencia mecánica", "Alta porosidad para absorción de tintas"],
    correcta: 1,
    tema: "Recubrimientos Metálicos - Cromado",
    explicacion: "El cromo duro industrial ofrece extraordinaria dureza superficial (65-70 HRC / 900-1100 HV), muy bajo coeficiente de fricción y resistencia al desgaste abrasivo en vástagos hidráulicos."
  },
  {
    id: 46,
    pregunta: "¿Qué ventajas ofrece el niquelado químico (Electroless Nickel) sobre la galvanoplastia convencional?",
    opciones: ["Requiere voltajes de más de 1000 V", "Deposita un espesor 100% uniforme en geometrías complejas e internas sin corriente", "Es un proceso que se realiza a -20 °C", "Genera una capa de pintura poliéster"],
    correcta: 1,
    tema: "Recubrimientos - Niquelado Químico",
    explicacion: "Al ser una reacción autocatalítica en fase acuosa sin corriente eléctrica externa, no sufre efecto de concentración de líneas de campo, logrando espesor uniforme en orificios ciegos, roscas y canales internos."
  },
  {
    id: 47,
    pregunta: "¿Qué significan las siglas PVD en recubrimientos industriales?",
    opciones: ["Process Vacuum Deposition", "Physical Vapor Deposition (Deposición Física en Fase Vapor)", "Polymer Vapor Drive", "Protective Vacuum Device"],
    correcta: 1,
    tema: "Recubrimientos Avanzados - PVD",
    explicacion: "PVD corresponde a Physical Vapor Deposition (Deposición Física en Fase Vapor), tecnología que vaporiza material sólido en alto vacío para condensarlo como película fina."
  },
  {
    id: 48,
    pregunta: "¿Qué espesores típicos presentan las películas cerámicas aplicadas por PVD (ej. TiN, TiAlN)?",
    opciones: ["0.01 a 0.05 mm", "1 a 5 micrómetros (µm)", "50 a 100 micrómetros (µm)", "2 a 5 milímetros (mm)"],
    correcta: 1,
    tema: "Recubrimientos Avanzados - PVD",
    explicacion: "Las capas PVD en herramientas de corte e insertos de mecanizado miden típicamente de 1 a 5 micrómetros (µm), manteniendo los filos de corte afilados y precisos."
  },
  {
    id: 49,
    pregunta: "¿Qué temperatura de proceso utiliza la Deposición Química en Fase Vapor (CVD)?",
    opciones: ["50 °C a 100 °C", "200 °C a 400 °C", "800 °C a 1000 °C", "1500 °C a 2000 °C"],
    correcta: 2,
    tema: "Recubrimientos Avanzados - CVD",
    explicacion: "El CVD clásico térmico requiere temperaturas elevadas de 800 °C a 1000 °C para activar la reacción química termoquímica de los precursores gaseosos (ej. TiCl4 + CH4)."
  },
  {
    id: 50,
    pregunta: "¿Cómo se aplica la pintura en polvo polimérica en el proceso Powder Coating?",
    opciones: ["Por inmersión en tinas de ácido hirviendo", "Mediante pistolas electrostáticas que cargan las partículas atraídas al metal conectado a tierra", "Con brochas de cerda natural a alta temperatura", "Por condensación de vapor de nitrógeno"],
    correcta: 1,
    tema: "Recubrimientos Poliméricos - Powder Coating",
    explicacion: "Las partículas de pintura en polvo se cargan electrostáticamente (efecto corona o triboeléctrico) con alto voltaje y son atraídas fuertemente a la pieza metálica conectada a potencial de tierra."
  },
  {
    id: 51,
    pregunta: "¿A qué temperatura se cura habitualmente la pintura electrostática en polvo en el horno?",
    opciones: ["80 °C a 100 °C", "180 °C a 200 °C", "450 °C a 500 °C", "850 °C a 900 °C"],
    correcta: 1,
    tema: "Recubrimientos Poliméricos - Powder Coating",
    explicacion: "El horno de curado opera habitualmente entre 180 °C y 200 °C durante 10 a 20 minutos para fundir, nivelar y polimerizar (entrecruzamiento térmico) la resina."
  },
  {
    id: 52,
    pregunta: "Por qué NO se puede aplicar anodizado sobre componentes de acero al carbón?",
    opciones: ["Porque el acero se funde a 20 °C", "Porque el anodizado es un proceso exclusivo del aluminio y titanio que crea su propio óxido", "Porque el acero se vuelve transparente", "Porque la corriente eléctrica no pasa por el acero"],
    correcta: 1,
    tema: "Compatibilidad de Materiales",
    explicacion: "El anodizado aprovecha la formación de un óxido coherente, insoluble y dieléctrico (Al2O3 o TiO2). El acero sometido a electrólisis anódica simplemente se disolvería y oxidaría como herrumbre sin formar capa coherente."
  },
  {
    id: 53,
    pregunta: "¿Por qué las aleaciones de aluminio NO pueden someterse a carburación gaseosa?",
    opciones: ["Porque el aluminio se oxida a 0 °C", "Porque la temperatura de carburación (900 °C) supera el punto de fusión del aluminio (660 °C)", "Porque el aluminio absorbe todo el carbono y se convierte en diamante", "Porque el aluminio no conduce calor"],
    correcta: 1,
    tema: "Compatibilidad de Materiales",
    explicacion: "El aluminio puro funde a 660 °C y sus aleaciones entre 580 y 650 °C. Someterlo a los 900 °C de la carburación provocaría la fusión catastrófica inmediata de la pieza."
  },
  {
    id: 54,
    pregunta: "¿Qué precaución exige la nitruración en aceros inoxidables austenícos a más de 500 °C?",
    opciones: ["Evitar la formación de nitruros de cromo que empobrecen la matriz y reducen la resistencia a la corrosión", "Que la pieza cambie de color a amarillo", "Que el acero se vuelva líquido", "Que la rugosidad aumente a Ra > 50 µm"],
    correcta: 0,
    tema: "Tratamientos Termoquímicos y Metalurgia",
    explicacion: "A más de 450-500 °C el nitrógeno secuestra el cromo para formar CrN o Cr2N, dejando la matriz de hierro desprotegida contra la corrosión (sensibilización por nitruros)."
  },
  {
    id: 55,
    pregunta: "¿Qué tratamiento superficial se aplica en la cabeza femoral de prótesis de cadera de titanio?",
    opciones: ["Granallado de arena fina", "Electropulido intensivo a acabado espejo (Ra < 0.02 µm)", "Pintura electrostática en polvo", "Carburación gaseosa a 950 °C"],
    correcta: 1,
    tema: "Aplicaciones Industriales - Biomédica",
    explicacion: "La superficie articular requiere una rugosidad ultrabaja (Ra < 0.02 µm) para minimizar la fricción y el desgaste contra la copa acetabular de polietileno (UHMWPE)."
  },
  {
    id: 56,
    pregunta: "¿Qué tratamiento se aplica en el vástago de un implante óseo de titanio para favorecer la osteointegración?",
    opciones: ["Lapeado a espejo", "Texturizado rugoso por granallado cerámico o spray de hidroxiapatita", "Cromado duro espejo", "Niquelado químico de alto fósforo"],
    correcta: 1,
    tema: "Aplicaciones Industriales - Biomédica",
    explicacion: "A diferencia de la cabeza articular, el vástago debe ser microporoso y rugoso para que los osteoblastos proliferen y el hueso se integre mecánicamente a la superficie del titanio."
  },
  {
    id: 57,
    pregunta: "En el sector aeroespacial, ¿para qué se aplica el Shot Peening en trenes de aterrizaje de acero 300M?",
    opciones: ["Para darle brillo estético brillante", "Para prevenir la falla por fatiga estructural mediante esfuerzos compresivos", "Para reducir el peso del tren de aterrizaje", "Para eliminar la capa de pintura"],
    correcta: 1,
    tema: "Aplicaciones Industriales - Aeroespacial",
    explicacion: "Los trenes de aterrizaje soportan cargas de impacto y fatiga cíclica extrema durante el despegue y aterrizaje; el Shot Peening sella microfisuras e inhibe la propagación de grietas por fatiga."
  },
  {
    id: 58,
    pregunta: "¿Qué rugosidad Ra máxima se exige en tuberías y tanques sanitarios de acero inoxidable 316L (Sector Alimentario)?",
    opciones: ["Ra <= 0.38 µm (15 µin)", "Ra <= 3.2 µm", "Ra <= 12.5 µm", "Ra <= 50 µm"],
    correcta: 0,
    tema: "Aplicaciones Industriales - Alimentaria y Farmacéutica",
    explicacion: "Normas sanitarias como ASME BPE (Bioprocessing Equipment) exigen Ra <= 0.38 µm (15 µin) electropulido para evitar la formación de biofilms bacterianos."
  },
  {
    id: 59,
    pregunta: "¿Qué significa la sigla CIP en la industria farmacéutica y alimentaria?",
    opciones: ["Clean-In-Place (Limpieza Automatizada en Sitio)", "Carburizing In Process", "Chromium Ion Passivation", "Coat Inspection Protocol"],
    correcta: 0,
    tema: "Aplicaciones Industriales - Alimentaria y Farmacéutica",
    explicacion: "CIP (Clean-In-Place) es la metodología de limpieza y desinfección interna automatizada sin desmontar tuberías ni recipientes de proceso."
  },
  {
    id: 60,
    pregunta: "En la industria automotriz, ¿qué es la cataforesis o proceso KTL?",
    opciones: ["Un rectificado de alta velocidad", "La electrodeposición catódica de una capa primaria anticorrosiva en inmersión total", "El curado de resina de poliéster con llama directa", "La difusividad de nitrógeno en plasma"],
    correcta: 1,
    tema: "Aplicaciones Industriales - Automotriz",
    explicacion: "La cataforesis (KTL / E-coat) sumerge la carrocería completa en una tina de pintura base agua donde se aplica campo eléctrico catódico, garantizando recubrimiento anticorrosivo uniforme incluso en huecos ocultos."
  },
  {
    id: 61,
    pregunta: "En el marcado de planos según ISO 1302, ¿qué representa el símbolo de raíz básica?",
    opciones: ["El diámetro de la pieza", "El requerimiento de textura superficial / rugosidad", "El límite de tolerancia dimensional H7", "El tipo de soldadura TIG"],
    correcta: 1,
    tema: "Simbología Técnica - ISO 1302",
    explicacion: "El símbolo básico formado por dos trazos desiguales inclinados a 60° representa el requisito general de estado o textura superficial de una cara."
  },
  {
    id: 62,
    pregunta: "¿Qué información se coloca sobre el brazo superior del símbolo ISO 1302?",
    opciones: ["El precio de la pieza", "El método de producción o proceso de acabado (ej. FRESADO, RECTIFICADO)", "La fecha de fabricación", "El nombre del operador"],
    correcta: 1,
    tema: "Simbología Técnica - ISO 1302",
    explicacion: "Sobre la línea horizontal o brazo superior del símbolo ISO 1302 se especifica el método de fabricación obligatorio (ej. RECTIFICAR, ELECTROPULIR, PVD)."
  },
  {
    id: 63,
    pregunta: "¿Qué norma especifica el ensayo de adherencia por corte de trama en recubrimientos?",
    opciones: ["ISO 2409 / ASTM D3359", "ISO 9001", "DIN 50190", "ASME B16.5"],
    correcta: 0,
    tema: "Control de Calidad y Ensayos",
    explicacion: "ISO 2409 y ASTM D3359 estandarizan la prueba de corte en cuadrícula (cross-cut test) con cinta adhesiva normalizada para calificar la adherencia de recubrimientos orgánicos."
  },
  {
    id: 64,
    pregunta: "En el ensayo ISO 2409, ¿qué representa una clasificación de 'Clase 0'?",
    opciones: ["Falla total y desprendimiento mayor al 50%", "Bordes de corte completamente lisos sin desprendimiento de retícula (100% adherencia)", "Presencia de ampollas llena de gas", "Quemado anódico severo"],
    correcta: 1,
    tema: "Control de Calidad y Ensayos",
    explicacion: "Clase 0 es la máxima calificación: los bordes de los cortes son perfectamente lisos y ninguno de los cuadrados de la cuadrícula se desprende."
  },
  {
    id: 65,
    pregunta: "¿Qué es el defecto de 'Piel de Naranja' en pintura en polvo?",
    opciones: ["Una coloración anaranjada por óxido de hierro", "Una nivelación deficiente de la resina que deja una superficie ondulada rugosa", "Un orificio circular causado por silicona", "La fractura del metal base"],
    correcta: 1,
    tema: "Defectología de Superficie",
    explicacion: "Es una apariencia visual rugosa u ondulada semejante a la cáscara de naranja, causada por deficiente coalescencia y flujo viscoso de la resina durante el calentamiento."
  },
  {
    id: 66,
    pregunta: "¿Cuál es una causa común de la aparición de 'Piel de Naranja' en Powder Coating?",
    opciones: ["Espesor de capa excesivo (>120 µm) o temperatura de curado inadecuada", "Uso de baño de ácido fluorhídrico", "Lavado con agua ultrapura desmineralizada", "Nitruración a baja temperatura"],
    correcta: 0,
    tema: "Defectología de Superficie",
    explicacion: "Espesores excesivos de película seca (>100-120 µm) impiden la fluidez homogénea antes de gelificar, o una rampa de calentamiento demasiado lenta en el horno provoca reticulación prematura."
  },
  {
    id: 67,
    pregunta: "¿Qué voltaje electrostático se recomienda habitualmente en la pistola para aplicar pintura en polvo?",
    opciones: ["5 a 10 V", "60 a 80 kV", "500 a 1000 kV", "220 V de corriente alterna"],
    correcta: 1,
    tema: "Parámetros Operacionales",
    explicacion: "Las pistolas electrostáticas industriales de efecto corona operan típicamente entre 60 y 80 kilovoltios (kV) con corrientes mínimas de microamperios para ionizar el polvo de forma segura."
  },
  {
    id: 68,
    pregunta: "¿Qué provoca el defecto de ampollamiento (Blistering) en recubrimientos?",
    opciones: ["Atrapamiento de humedad o presión osmótica por sales solubles retenidas bajo la película", "Exceso de nitrógeno ionizado", "Uso de muelas abrasivas de diamante", "Velocidad de corte elevada"],
    correcta: 0,
    tema: "Defectología de Superficie",
    explicacion: "Sales residuales no lavadas en el pretratamiento atraen agua a través de la película por ósmosis, creando ampollas con líquido o gas que rompen la adherencia."
  },
  {
    id: 69,
    pregunta: "¿Cómo se evita el ampollamiento en piezas de fundición de aluminio o hierro poroso?",
    opciones: ["Aumentando la rugosidad a Ra > 10 µm", "Aplicando un precalentamiento de desgasificación antes de pintar", "Sumergiendo la pieza en aceite frío", "Nitrurando la pieza durante 48 horas"],
    correcta: 1,
    tema: "Defectología y Prevención",
    explicacion: "El precalentamiento (outgassing) a una temperatura superior a la de curado desaloja el aire y humedad atrapados en la microporosidad de la fundición antes de rociar el polvo."
  },
  {
    id: 70,
    pregunta: "¿Qué es el 'Quemado Anódico' (Anodizing Burn)?",
    opciones: ["Un incendio en el horno de pintura", "Ataque térmico y disolución descontrolada de la capa de alúmina por exceso de corriente o falta de chilling", "El cambio de color de acero a azul", "La congelación del agua de enjuague"],
    correcta: 1,
    tema: "Defectología de Superficie",
    explicacion: "Ocurre cuando la densidad de corriente es excesiva o la refrigeración (chilling) de la tina falla; el calor Joule localizado disuelve rápidamente la película de óxido produciendo un cráter blanquecino calcinado."
  },
  {
    id: 71,
    pregunta: "¿A qué temperatura se debe mantener la tina para un proceso de Anodizado Duro (Tipo III)?",
    opciones: ["-50 °C", "0 °C a 5 °C", "50 °C a 60 °C", "100 °C"],
    correcta: 1,
    tema: "Parámetros Operacionales",
    explicacion: "El anodizado duro requiere tinas enfriadas rigurosamente entre 0 °C y 5 °C para ralentizar la tasa de redisolución química de la alúmina por el ácido sulfúrico."
  },
  {
    id: 72,
    pregunta: "¿Qué provoca el defecto de 'Ojos de Pescado' (Cratering / Fish-eyes) en pintura?",
    opciones: ["Partículas de diamantes flotando en el aire", "Contaminación con siliconas o aceites en las líneas de aire comprimido", "Uso de tinas de acero inoxidable", "Inmersión en ácido cítrico"],
    correcta: 1,
    tema: "Defectología de Superficie",
    explicacion: "Gotas microscópicas de aceite o vapores de silicona poseen una tensión superficial mucho menor que la pintura líquida, provocando que la resina se retire radialmente formando cráteres circulares."
  },
  {
    id: 73,
    pregunta: "¿Qué solución técnica elimina los 'Ojos de Pescado' en la cabina de pintura?",
    opciones: ["Instalar trampas de aceite y agua en las líneas de aire y purgar el sistema", "Aumentar la temperatura a 1000 °C", "Usar granalla de acero más gruesa", "Añadir más ácido sulfúrico"],
    correcta: 0,
    tema: "Defectología y Prevención",
    explicacion: "Se requiere un sistema de filtración coalescente de aire comprimido con secador frigorífico y trampas de carbón activado, además de prohibir aerosoles de silicona en la planta."
  },
  {
    id: 74,
    pregunta: "¿Qué es la delaminación o descascaramiento en recubrimientos PVD?",
    opciones: ["La fusión completa del sustrato de carburo", "La separación de la película cerámica ultradura del sustrato por falta de adherencia", "El cambio de forma de rectangular a esférica", "El crecimiento de óxido de hierro positivo"],
    correcta: 1,
    tema: "Defectología de Superficie",
    explicacion: "Es el desprendimiento prematuro de la película delgada de TiN o TiAlN debido a esfuerzos cortantes interfacial no resistidos por contaminación o mala adherencia al sustrato."
  },
  {
    id: 75,
    pregunta: "¿Qué etapa en la cámara de vacío es crucial para evitar la delaminación en PVD?",
    opciones: ["El decapado por plasma / grabado iónico (ion etching) con argón", "El llenado con oxígeno puro", "La inyección de agua desionizada", "El soplado con aire húmedo"],
    correcta: 0,
    tema: "Procesos PVD - Aseguramiento de Calidad",
    explicacion: "El grabado iónico (ion etching) bombardea la superficie con iones Ar+ a alto voltaje antes del recubrimiento, atomizando óxidos nativos y limpiando atómicamente la interfaz."
  },
  {
    id: 76,
    pregunta: "En un reporte CAPA de no conformidad, ¿qué significan las siglas CAPA?",
    opciones: ["Control And Process Analysis", "Corrective And Preventive Action (Acción Correctiva y Preventiva)", "Coat Application Parameter Audit", "Computer Aided Process Automation"],
    correcta: 1,
    tema: "Gestión de Calidad Industrial",
    explicacion: "CAPA significa Corrective And Preventive Action (Acción Correctiva y Preventiva), el protocolo fundamental de calidad según ISO 9001 / IATF 16949 para evitar la recurrencia de no conformidades."
  },
  {
    id: 77,
    pregunta: "¿Qué norma rige la medición no destructiva de espesores de película seca en recubrimientos?",
    opciones: ["ISO 2808 / ISO 2178", "ISO 9001", "ASTM E112", "DIN 4768"],
    correcta: 0,
    tema: "Control de Calidad y Ensayos",
    explicacion: "ISO 2808 e ISO 2178 (método de inducción magnética y corrientes de Foucault) norman la medición de espesores de recubrimientos sobre metales ferrosos y no ferrosos."
  },
  {
    id: 78,
    pregunta: "En las plantillas de planos técnicos, ¿cuál es la longitud de corte estándar (cut-off λc) para evaluar Ra <= 0.38 µm?",
    opciones: ["0.001 mm", "0.8 mm", "25.4 mm", "100 mm"],
    correcta: 1,
    tema: "Metrología y Planos Técnicos",
    explicacion: "Para rangos de Ra entre 0.1 y 2.0 µm, la norma ISO 4288 establece una longitud de corte de filtro (cut-off λc) estándar de 0.8 mm."
  },
  {
    id: 79,
    pregunta: "Para evaluar la adherencia de capas PVD mediante indentación Rockwell C, ¿qué norma visual se utiliza?",
    opciones: ["VDI 3198 (Clase HF1 a HF6)", "ISO 9001", "AWS D1.1", "API 5L"],
    correcta: 0,
    tema: "Control de Calidad - PVD",
    explicacion: "La norma alemana VDI 3198 clasifica la adherencia de capas duras PVD/CVD desde HF1 (adherencia perfecta sin desprendimientos en la huella) hasta HF6 (desprendimiento total catastrófico)."
  },
  {
    id: 80,
    pregunta: "¿Qué ensayo certifica la efectividad del pasivado en acero inoxidable contra picaduras?",
    opciones: ["Prueba de cámara de niebla salina (ASTM B117)", "Prueba de lapeado orbital", "Medición con micrómetro digital", "Ensayo de tracción uniaxial"],
    correcta: 0,
    tema: "Control de Calidad y Ensayos",
    explicacion: "El ensayo de niebla salina ASTM B117 (o ASTM A967 con ensayo de alta humedad o sulfato de cobre) valida que no existan picaduras ni manchas de óxido ferroso."
  },
  {
    id: 81,
    pregunta: "Qué proceso de acabado añade mayor espesor dimensional al componente?",
    opciones: ["PVD (1-5 µm)", "Nitruración por plasma (0.3 mm)", "Pintura Electrostática en Polvo / Galvanizado (50-150 µm)", "Electropulido (Remueve 10 µm)"],
    correcta: 2,
    tema: "Criterios de Selección de Acabados",
    explicacion: "La pintura electrostática (Powder Coating) y el galvanizado por inmersión en caliente añaden entre 50 y 150 µm de espesor neto sobre la cota exterior."
  },
  {
    id: 82,
    pregunta: "¿Cuál es la función de la capa intermedia de titanio puro (Ti) en un recubrimiento PVD de TiAlN?",
    opciones: ["Darle color rojo al acabado", "Graduar los esfuerzos residuales y mejorar la adherencia al sustrato", "Reducir la dureza del carburo", "Aumentar la rugosidad a Ra > 10 µm"],
    correcta: 1,
    tema: "Recubrimientos Avanzados - PVD",
    explicacion: "La capa intermedia metálica (interlayer) amortigua la discrepancia de módulos elásticos entre el sustrato de acero/carburo y la capa cerámica dura, asegurando una transición gradual de tensiones."
  },
  {
    id: 83,
    pregunta: "¿Qué gas reactivo se introduce en la cámara de PVD para formar Nitruro de Titanio (TiN)?",
    opciones: ["Oxígeno puro", "Nitrógeno (N2)", "Helio líquido", "Dióxido de carbono"],
    correcta: 1,
    tema: "Recubrimientos Avanzados - PVD",
    explicacion: "Al introducir nitrógeno gas (N2) en la cámara de evaporación de titanio, los átomos metálicos reaccionan en estado plasma formando el compuesto estequiométrico cerámico TiN."
  },
  {
    id: 84,
    pregunta: "¿Qué color característico presenta un recubrimiento PVD de Nitruro de Titanio (TiN)?",
    opciones: ["Verde brillante", "Dorado metálico resplandeciente", "Negro mate poroso", "Blanco marfil"],
    correcta: 1,
    tema: "Recubrimientos Avanzados - PVD",
    explicacion: "El Nitruro de Titanio (TiN) posee un color dorado oro característico muy reconocible en brocas, fresas y piezas decorativas."
  },
  {
    id: 85,
    pregunta: "¿Qué color presenta habitualmente el recubrimiento PVD de TiAlN en insertos de corte?",
    opciones: ["Azul pastel", "Violeta oscuro / cobrizo satinado", "Amarillo fosforescente", "Plateado espejo"],
    correcta: 1,
    tema: "Recubrimientos Avanzados - PVD",
    explicacion: "El Nitruro de Titanio y Aluminio (TiAlN) presenta una tonalidad violeta oscura, carbón antracita o bronce satinado, con resistencia térmica hasta 800 °C gracias a la formación de Al2O3 superficial."
  },
  {
    id: 86,
    pregunta: "¿Qué instrumento se utiliza para verificar la rugosidad Ra y Rz de forma cuantitativa?",
    opciones: ["Pie de rey / Vernier digital", "Rugosímetro de contacto con aguja o palpador de diamante", "Durómetro Brinell de bola", "Micrómetro de exteriores"],
    correcta: 1,
    tema: "Metrología Superficial",
    explicacion: "El rugosímetro de contacto (profilómetro) utiliza un palpador inductivo con aguja de punta de diamante con radio de 2 o 5 µm que rastrea el perfil superficial."
  },
  {
    id: 87,
    pregunta: "¿Qué velocidad promedio se utiliza en la muela de una rectificadora de superficies?",
    opciones: ["1 a 2 m/s", "20 a 35 m/s", "500 a 1000 m/s", "Velocidad del sonido"],
    correcta: 1,
    tema: "Procesos Mecánicos - Rectificado",
    explicacion: "Las muelas convencionales de rectificado plano y cilíndrico giran a velocidades periféricas típicas de 25 a 35 metros por segundo (m/s)."
  },
  {
    id: 88,
    pregunta: "En la especificación técnica de planos, ¿qué significa la sigla NFT o DFT en recubrimientos?",
    opciones: ["Nominal Film Tolerance", "Dry Film Thickness (Espesor de Película Seca)", "Direct Friction Test", "Dual Finish Treatment"],
    correcta: 1,
    tema: "Control de Calidad y Ensayos",
    explicacion: "DFT significa Dry Film Thickness (Espesor de Película Seca), parámetro metrológico clave que mide el espesor curado y endurecido del recubrimiento."
  },
  {
    id: 89,
    pregunta: "¿Por qué los componentes electropulidos son ideales para la industria biotecnológica?",
    opciones: ["Porque son extremadamente frágiles", "Porque eliminan la micro-rugosidad retenedora de bacterias y aumentan la capa pasiva de cromo", "Porque reducen el costo a cero", "Porque reemplazan al titanio por plástico"],
    correcta: 1,
    tema: "Aplicaciones Industriales - Biotecnología",
    explicacion: "Al eliminar hendiduras microscópicas donde las bacterias e impurezas se anclan, facilitan la esterilización absoluta y elevan la proporción Cr/Fe a más de 1.5 en la capa pasiva."
  },
  {
    id: 90,
    pregunta: "¿Qué tratamiento termoquímico difunde Boro para formar boruros de hierro de alta dureza (1500-2000 HV)?",
    opciones: ["Cementación", "Nitruración", "Borurado", "Electropulido"],
    correcta: 2,
    tema: "Tratamientos Termoquímicos - Borurado",
    explicacion: "El borurado difunde átomos de boro entre 850 °C y 1000 °C formando capas de FeB y Fe2B con durezas extremas de hasta 2000 HV, ideales para resistencia a erosión por lodos abrasivos."
  },
  {
    id: 91,
    pregunta: "¿Cuál es la función del enjuague con agua desmineralizada al final de las tinas de tratamiento químico?",
    opciones: ["Enfriar la pieza a -50 °C", "Evitar la retención de sales solubles que causen corrosión bajo la película", "Pintar la pieza de azul", "Aumentar el peso de la pieza"],
    correcta: 1,
    tema: "Procesos Químicos y Limpieza",
    explicacion: "El agua desmineralizada (conductividad < 10 µS/cm) remueve sales minerales que de lo contrario se secarían en la superficie, originando centros osmóticos de corrosión y ampollas."
  },
  {
    id: 92,
    pregunta: "¿Qué parámetro metrológico mide el espaciamiento horizontal medio entre crestas del perfil?",
    opciones: ["Ra", "Rz", "Sm", "HRC"],
    correcta: 2,
    tema: "Metrología Superficial",
    explicacion: "Sm (o RSm según ISO 4287) mide la distancia horizontal media entre cruces de la línea media de los elementos del perfil de rugosidad."
  },
  {
    id: 93,
    pregunta: "¿Por qué el niquelado químico se denomina 'autocatalítico'?",
    opciones: ["Porque utiliza un motor de automóvil", "Porque la reacción de deposición ocurre por reducción química continua sobre el metal sin corriente externa", "Porque se aplica con brocha automática", "Porque requiere luz solar para activarse"],
    correcta: 1,
    tema: "Recubrimientos - Niquelado Químico",
    explicacion: "Es autocatalítico porque el níquel recién depositado sirve de catalizador para continuar la reacción de reducción del hipofosfito, permitiendo el crecimiento ilimitado de la película sin electrodos."
  },
  {
    id: 94,
    pregunta: "¿Qué compuesto forma la capa pasiva espontánea en el acero inoxidable pasivado?",
    opciones: ["Óxido de Hierro (Fe2O3)", "Óxido de Cromo (Cr2O3)", "Nitruro de Silicio (Si3N4)", "Carburo de Titanio (TiC)"],
    correcta: 1,
    tema: "Tratamientos Químicos - Pasivado",
    explicacion: "La capa pasiva protectora que hace inoxidable al acero es una película nanométrica (1-3 nm) continua y adherente de sesquióxido de cromo (Cr2O3)."
  },
  {
    id: 95,
    pregunta: "¿Qué norma internacional regula las llamadas generales de textura superficial en planos de ingeniería?",
    opciones: ["ISO 1302 / ASME Y14.36M", "ISO 14001", "AWS D1.2", "ASTM A36"],
    correcta: 0,
    tema: "Simbología Técnica y Planos",
    explicacion: "ISO 1302 y la norma estadounidense ASME Y14.36M regulan la indicación de la textura superficial en la documentación técnica de productos."
  },
  {
    id: 96,
    pregunta: "¿Qué ventaja tiene el uso de ácido cítrico sobre el ácido nítrico en el pasivado industrial?",
    opciones: ["Es más agresivo y destruye el acero", "Es más seguro ecológicamente, no emite vapores nitrosos nocivos y es biodegradable", "Requiere temperaturas de 2000 °C", "Cambia el color del acero a dorado"],
    correcta: 1,
    tema: "Tratamientos Químicos - Sostenibilidad",
    explicacion: "El ácido cítrico es orgánico, seguro para el operador, no genera óxidos de nitrógeno (NOx) tóxicos ni efluentes peligrosos y remueve el hierro selectivamente sin atacar el cromo ni el níquel."
  },
  {
    id: 97,
    pregunta: "¿Qué sucede si se aplica pintura en polvo sobre un sustrato metálico con presencia de grasa o aceite?",
    opciones: ["La pintura se adhiere con doble fuerza", "Ocurre una falla de delaminación / falta de adherencia inmediata", "El metal se vuelve más dúctil", "Se genera una capa de PVD automáticamente"],
    correcta: 1,
    tema: "Defectología y Pretratamiento",
    explicacion: "Las grasas impiden el humedecimiento interfacial entre la resina fundida y el sustrato metálico, provocando desprendimientos catastróficos por adherencia deficiente."
  },
  {
    id: 98,
    pregunta: "¿Qué tipo de resina polimérica se utiliza ampliamente en Powder Coating para alta resistencia UV exterior?",
    opciones: ["Resina Epóxica pura", "Resina Poliéster o Híbrida Poliéster-Epóxica", "Caucho natural", "PVC flexible"],
    correcta: 1,
    tema: "Recubrimientos Poliméricos",
    explicacion: "Las resinas de poliéster curadas con TGIC o Primid resisten el caleo (chalking) y degradación ultravioleta del sol, haciéndolas ideales para fachadas y perfiles de aluminio exteriores."
  },
  {
    id: 99,
    pregunta: "¿Cuál es la tolerancia típica de variación de profundidad en una capa nitrada por plasma?",
    opciones: ["± 0.05 mm (50 µm)", "± 5.0 mm", "± 20.0 mm", "± 100 mm"],
    correcta: 0,
    tema: "Tratamientos Termoquímicos - Metrología",
    explicacion: "El control por plasma permite una repetibilidad dimensional extraordinaria con dispersión de profundidad de penetración dentro de ± 0.05 mm (50 µm)."
  },
  {
    id: 100,
    pregunta: "¿Cuál es el criterio metodológico final para la selección exitosa de un acabado superficial en Ingeniería Industrial?",
    opciones: ["Seleccionar siempre el proceso más caro", "Satisfacer los requerimientos funcionales y de seguridad del componente al menor costo global de procesamiento", "Evitar cualquier tipo de acabado en las piezas", "Usar siempre pintura independientemente del material"],
    correcta: 1,
    tema: "Ingeniería Industrial y Selección",
    explicacion: "El principio rector en ingeniería es optimizar el ciclo de vida: cumplir las exigencias mecánicas, tribológicas y de corrosión con el proceso más confiable y de mínimo costo total de manufactura."
  }
];
