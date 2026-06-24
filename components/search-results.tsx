"use client";

import { motion } from "framer-motion";
import {
  Search,
  ArrowLeft,
  ExternalLink,
  Globe,
  FileText,
  Image as ImageIcon,
} from "lucide-react";

interface SearchResultsProps {
  query: string;
  onBack: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearch: () => void;
}

// Mock search results - these would come from Elasticsearch in the real implementation
const mockResults = [
  {
    title: "Granma - Órgano oficial del PCC",
    url: "https://www.granma.cu",
    description:
      "Periódico oficial con las últimas noticias de Cuba, política, economía, deportes y cultura.",
    type: "news",
  },
  {
    title: "Cubadebate - Noticias y opinión",
    url: "https://www.cubadebate.cu",
    description:
      "Portal de noticias cubano con análisis, opiniones y cobertura de eventos nacionales e internacionales.",
    type: "news",
  },
  {
    title: "Universidad de La Habana",
    url: "https://www.uh.cu",
    description:
      "Sitio oficial de la Universidad de La Habana, la más antigua y prestigiosa institución de educación superior de Cuba.",
    type: "education",
  },
  {
    title: "Ministerio de Salud Pública",
    url: "https://www.minsap.gob.cu",
    description:
      "Portal oficial del Ministerio de Salud Pública de Cuba con información sobre servicios de salud y campañas sanitarias.",
    type: "government",
  },
  {
    title: "Cubatur - Turismo en Cuba",
    url: "https://www.cubatur.cu",
    description:
      "Agencia de viajes y turismo oficial. Descubre los destinos más hermosos de Cuba.",
    type: "tourism",
  },
  {
    title: "ETECSA - Telecomunicaciones",
    url: "https://www.etecsa.cu",
    description:
      "Empresa de Telecomunicaciones de Cuba S.A. Servicios de telefonía, internet y comunicaciones.",
    type: "services",
  },

  // Nuevos sitios

  {
    title: "Juventud Rebelde",
    url: "https://www.juventudrebelde.cu",
    description:
      "Diario nacional cubano con noticias, reportajes y análisis sobre la actualidad del país.",
    type: "news",
  },
  {
    title: "Radio Habana Cuba",
    url: "https://www.radiohc.cu",
    description:
      "Emisora internacional cubana con noticias, programas culturales y cobertura informativa.",
    type: "news",
  },
  {
    title: "Prensa Latina",
    url: "https://www.prensa-latina.cu",
    description:
      "Agencia informativa latinoamericana con cobertura de noticias nacionales e internacionales.",
    type: "news",
  },
  {
    title: "Periódico Trabajadores",
    url: "https://www.trabajadores.cu",
    description:
      "Publicación dedicada a temas laborales, económicos y sociales de Cuba.",
    type: "news",
  },
  {
    title: "Portal CubaEduca",
    url: "https://www.cubaeduca.cu",
    description:
      "Recursos educativos, materiales didácticos e información para estudiantes y profesores.",
    type: "education",
  },
  {
    title: "Universidad Central Marta Abreu de Las Villas",
    url: "https://www.uclv.edu.cu",
    description:
      "Institución de educación superior reconocida por su excelencia académica e investigativa.",
    type: "education",
  },
  {
    title: "Ministerio de Educación Superior",
    url: "https://www.mes.gob.cu",
    description:
      "Información oficial sobre universidades, investigación y formación profesional en Cuba.",
    type: "government",
  },
  {
    title: "Ministerio de Educación",
    url: "https://www.mined.gob.cu",
    description:
      "Portal oficial del sistema educativo cubano y sus programas académicos.",
    type: "government",
  },
  {
    title: "Gobierno de Cuba",
    url: "https://www.presidencia.gob.cu",
    description:
      "Información oficial sobre la presidencia, gobierno y políticas públicas de Cuba.",
    type: "government",
  },
  {
    title: "Gaceta Oficial de la República de Cuba",
    url: "https://www.gacetaoficial.gob.cu",
    description:
      "Publicación oficial de leyes, decretos y normativas vigentes en Cuba.",
    type: "government",
  },
  {
    title: "Infomed",
    url: "https://www.sld.cu",
    description:
      "Red de salud de Cuba con información médica, científica y recursos para profesionales.",
    type: "health",
  },
  {
    title: "CubaTravel",
    url: "https://www.cubatravel.cu",
    description:
      "Portal oficial de promoción turística con información sobre destinos y experiencias en Cuba.",
    type: "tourism",
  },
  {
    title: "Habana Radio",
    url: "https://www.habanaradio.cu",
    description:
      "Noticias culturales, patrimonio histórico y eventos de La Habana.",
    type: "culture",
  },
  {
    title: "Cubarte",
    url: "https://www.cubarte.cu",
    description: "Portal de promoción del arte y la cultura cubana.",
    type: "culture",
  },
  {
    title: "Instituto Cubano de Radio y Televisión",
    url: "https://www.icrt.cu",
    description:
      "Información institucional y acceso a medios de radio y televisión cubanos.",
    type: "media",
  },
  {
    title: "Joven Club de Computación",
    url: "https://www.jovenclub.cu",
    description:
      "Red nacional de tecnología, informática y capacitación digital para la población.",
    type: "technology",
  },
  {
    title: "Empresa de Aplicaciones Informáticas DESOFT",
    url: "https://www.desoft.cu",
    description:
      "Empresa cubana dedicada al desarrollo de software y soluciones tecnológicas.",
    type: "technology",
  },
  {
    title: "Universidad de las Ciencias Informáticas",
    url: "https://www.uci.cu",
    description:
      "Universidad especializada en informática, software y tecnologías de la información.",
    type: "education",
  },
  {
    title: "Cubasí",
    url: "https://www.cubasi.cu",
    description:
      "Portal de noticias, deportes, cultura y actualidad nacional e internacional.",
    type: "news",
  },
  {
    title: "Canal Caribe",
    url: "https://www.canalcaribe.icrt.cu",
    description:
      "Canal informativo cubano con cobertura de noticias y programas de actualidad.",
    type: "news",
  },
  {
    title: "Portal del Ciudadano de Cuba",
    url: "https://www.ciudadania.gob.cu",
    description: "Información y trámites digitales para ciudadanos cubanos.",
    type: "government",
  },
  {
    title: "Tribuna de La Habana",
    url: "https://www.tribuna.cu",
    description:
      "Periódico de la capital cubana con noticias locales, cultura y actualidad.",
    type: "news",
  },
  {
    title: "Ahora",
    url: "https://www.ahora.cu",
    description:
      "Periódico digital de Holguín con noticias provinciales y nacionales.",
    type: "news",
  },
  {
    title: "Escambray",
    url: "https://www.escambray.cu",
    description:
      "Diario digital de Sancti Spíritus con cobertura informativa y reportajes.",
    type: "news",
  },
  {
    title: "Invasor",
    url: "https://www.invasor.cu",
    description:
      "Periódico de Ciego de Ávila con noticias y análisis de actualidad.",
    type: "news",
  },
  {
    title: "Venceremos",
    url: "https://www.venceremos.cu",
    description:
      "Medio informativo de Guantánamo con noticias locales y nacionales.",
    type: "news",
  },
  {
    title: "Sierra Maestra",
    url: "https://www.sierramaestra.cu",
    description:
      "Periódico de Santiago de Cuba con información política, social y cultural.",
    type: "news",
  },
  {
    title: "Adelante",
    url: "https://www.adelante.cu",
    description:
      "Diario digital de Camagüey con noticias y reportajes sobre la provincia.",
    type: "news",
  },
  {
    title: "Guerrillero",
    url: "https://www.guerrillero.cu",
    description:
      "Periódico de Pinar del Río con cobertura de temas económicos y sociales.",
    type: "news",
  },
  {
    title: "Perlavisión",
    url: "https://www.perlavision.cu",
    description: "Canal informativo y cultural de Cienfuegos.",
    type: "media",
  },
  {
    title: "Tele Pinar",
    url: "https://www.telepinar.cu",
    description:
      "Canal provincial de televisión con programación informativa y cultural.",
    type: "media",
  },
  {
    title: "Cubavisión Internacional",
    url: "https://www.cvi.icrt.cu",
    description:
      "Canal internacional de televisión cubana dirigido a la audiencia global.",
    type: "media",
  },
  {
    title: "Radio Rebelde",
    url: "https://www.radiorebelde.cu",
    description:
      "Emisora nacional con noticias, deportes y programación variada.",
    type: "media",
  },
  {
    title: "Radio Reloj",
    url: "https://www.radioreloj.cu",
    description: "Emisora cubana de noticias continuas y servicio informativo.",
    type: "media",
  },
  {
    title: "Universidad de Oriente",
    url: "https://www.uo.edu.cu",
    description:
      "Institución de educación superior ubicada en Santiago de Cuba.",
    type: "education",
  },
  {
    title: "Universidad de Camagüey",
    url: "https://www.reduc.edu.cu",
    description: "Centro universitario con programas de pregrado y posgrado.",
    type: "education",
  },
  {
    title: "Universidad de Holguín",
    url: "https://www.uho.edu.cu",
    description: "Universidad pública cubana con amplia oferta académica.",
    type: "education",
  },
  {
    title: "BioCubaFarma",
    url: "https://www.biocubafarma.cu",
    description:
      "Grupo empresarial líder en biotecnología e industria farmacéutica cubana.",
    type: "health",
  },
  {
    title: "Centro de Ingeniería Genética y Biotecnología",
    url: "https://www.cigb.edu.cu",
    description:
      "Institución científica dedicada a la investigación biotecnológica.",
    type: "science",
  },
  {
    title: "Finlay Vaccine Institute",
    url: "https://www.finlay.edu.cu",
    description:
      "Centro de investigación especializado en vacunas y biomedicina.",
    type: "science",
  },
  {
    title: "Cubaindustria",
    url: "https://www.cubaindustria.cu",
    description:
      "Información sobre el desarrollo industrial y manufacturero en Cuba.",
    type: "industry",
  },
  {
    title: "Ministerio de Energía y Minas",
    url: "https://www.minem.gob.cu",
    description: "Portal oficial sobre energía, minería y recursos naturales.",
    type: "government",
  },
  {
    title: "Ministerio de Ciencia, Tecnología y Medio Ambiente",
    url: "https://www.citma.gob.cu",
    description:
      "Información sobre ciencia, innovación y sostenibilidad ambiental.",
    type: "government",
  },
  {
    title: "Correos de Cuba",
    url: "https://www.correos.cu",
    description: "Servicios postales, paquetería y seguimiento de envíos.",
    type: "services",
  },
  {
    title: "Transfermóvil",
    url: "https://www.transfermovil.etecsa.cu",
    description:
      "Plataforma de pagos electrónicos y servicios financieros móviles.",
    type: "services",
  },
  {
    title: "EnZona",
    url: "https://www.enzona.net",
    description:
      "Pasarela de pagos digitales para compras y servicios en Cuba.",
    type: "services",
  },
  {
    title: "CubaNoticias360",
    url: "https://www.cubanoticias360.com",
    description: "Agregador de noticias y actualidad cubana.",
    type: "news",
  },
  {
    title: "Cubadeportes",
    url: "https://www.jit.cu",
    description:
      "Portal especializado en noticias deportivas cubanas e internacionales.",
    type: "sports",
  },
  {
    title: "Cubacine",
    url: "https://www.cubacine.cult.cu",
    description:
      "Portal dedicado al cine cubano y la industria audiovisual nacional.",
    type: "culture",
  },
  {
    title: "Casa de las Américas",
    url: "https://www.casadelasamericas.org",
    description:
      "Institución cultural dedicada a la promoción del arte y la literatura latinoamericana.",
    type: "culture",
  },
  {
    title: "5 de Septiembre",
    url: "https://www.5septiembre.cu",
    description:
      "Periódico digital de Cienfuegos con noticias locales, nacionales e internacionales.",
    type: "news",
  },
  {
    title: "Victoria",
    url: "https://www.victoria.cu",
    description:
      "Periódico de la Isla de la Juventud con cobertura de actualidad y desarrollo local.",
    type: "news",
  },
  {
    title: "26",
    url: "https://www.periodico26.cu",
    description:
      "Periódico digital de Las Tunas con noticias, reportajes y análisis.",
    type: "news",
  },
  {
    title: "La Demajagua",
    url: "https://www.lademajagua.cu",
    description:
      "Periódico provincial de Granma con información económica, social y cultural.",
    type: "news",
  },
  {
    title: "Girón",
    url: "https://www.giron.cu",
    description:
      "Periódico de Matanzas con noticias y reportajes sobre la actualidad cubana.",
    type: "news",
  },
  {
    title: "ACN - Agencia Cubana de Noticias",
    url: "https://www.acn.cu",
    description:
      "Agencia nacional de noticias con cobertura informativa de toda Cuba.",
    type: "news",
  },
  {
    title: "Bohemia",
    url: "https://www.bohemia.cu",
    description:
      "Revista cubana de información general, historia y actualidad.",
    type: "news",
  },
  {
    title: "Opciones",
    url: "https://www.opciones.cu",
    description: "Publicación especializada en economía, negocios y turismo.",
    type: "business",
  },
  {
    title: "Negocios en Cuba",
    url: "https://www.negociosencuba.cu",
    description:
      "Información sobre inversiones, empresas y oportunidades económicas.",
    type: "business",
  },
  {
    title: "ONAT",
    url: "https://www.onat.gob.cu",
    description:
      "Oficina Nacional de Administración Tributaria. Servicios e información fiscal.",
    type: "government",
  },
  {
    title: "Aduana General de la República",
    url: "https://www.aduana.gob.cu",
    description:
      "Información sobre regulaciones aduaneras y trámites de importación.",
    type: "government",
  },
  {
    title: "Ministerio de Justicia",
    url: "https://www.minjus.gob.cu",
    description: "Portal oficial con servicios y normativas jurídicas.",
    type: "government",
  },
  {
    title: "Ministerio de Trabajo y Seguridad Social",
    url: "https://www.mtss.gob.cu",
    description:
      "Información sobre empleo, seguridad social y legislación laboral.",
    type: "government",
  },
  {
    title: "Ministerio de Cultura",
    url: "https://www.mincult.gob.cu",
    description: "Portal oficial de la cultura cubana y sus instituciones.",
    type: "government",
  },
  {
    title: "Ministerio de Turismo",
    url: "https://www.mintur.gob.cu",
    description:
      "Información oficial sobre destinos y desarrollo turístico en Cuba.",
    type: "government",
  },
  {
    title: "CubaGob",
    url: "https://www.cubagob.cu",
    description: "Portal del Gobierno Electrónico de Cuba.",
    type: "government",
  },
  {
    title: "EcuRed",
    url: "https://www.ecured.cu",
    description:
      "Enciclopedia colaborativa cubana con miles de artículos educativos.",
    type: "education",
  },
  {
    title: "Red Cubana de la Ciencia",
    url: "https://www.redciencia.cu",
    description: "Portal dedicado a la divulgación científica y tecnológica.",
    type: "science",
  },
  {
    title: "Academia de Ciencias de Cuba",
    url: "https://www.acc.cu",
    description:
      "Institución dedicada al desarrollo y promoción de la ciencia en Cuba.",
    type: "science",
  },
  {
    title: "CubaSí Deportes",
    url: "https://www.cubasi.cu/es/deporte",
    description: "Sección deportiva con cobertura nacional e internacional.",
    type: "sports",
  },
  {
    title: "INDER",
    url: "https://www.inder.gob.cu",
    description:
      "Instituto Nacional de Deportes, Educación Física y Recreación.",
    type: "sports",
  },
  {
    title: "ArteCubano",
    url: "https://www.artecubano.gob.cu",
    description:
      "Portal dedicado a las artes visuales y la creación artística cubana.",
    type: "culture",
  },
  {
    title: "Biblioteca Nacional José Martí",
    url: "https://www.bnjm.cu",
    description:
      "Acceso a colecciones, publicaciones y patrimonio documental cubano.",
    type: "culture",
  },
  {
    title: "Instituto Cubano del Libro",
    url: "https://www.cubaliteraria.cu",
    description: "Promoción de la literatura cubana y actividades editoriales.",
    type: "culture",
  },
  {
    title: "Habana Cultura",
    url: "https://www.habanacultura.com",
    description: "Agenda cultural, eventos y proyectos artísticos en Cuba.",
    type: "culture",
  },
  {
    title: "Cubadefensa",
    url: "https://www.cubadefensa.cu",
    description:
      "Información institucional relacionada con la defensa nacional.",
    type: "government",
  },
  {
    title: "CITMATEL",
    url: "https://www.citmatel.cu",
    description:
      "Servicios tecnológicos, publicaciones digitales y comercio electrónico.",
    type: "technology",
  },
  {
    title: "XETID",
    url: "https://www.xetid.cu",
    description:
      "Empresa cubana de tecnologías de la información y desarrollo de software.",
    type: "technology",
  },
  {
    title: "Segurmática",
    url: "https://www.segurmatica.cu",
    description: "Soluciones cubanas de ciberseguridad y antivirus.",
    type: "technology",
  },
  {
    title: "GELECT",
    url: "https://www.gelect.cu",
    description: "Grupo Empresarial de la Electrónica de Cuba.",
    type: "technology",
  },
  {
    title: "Cubahora",
    url: "https://www.cubahora.cu",
    description:
      "Revista digital cubana con noticias, análisis y contenidos multimedia.",
    type: "news",
  },
  {
    title: "La Jiribilla",
    url: "https://www.lajiribilla.cu",
    description:
      "Revista cultural cubana dedicada al arte, literatura y pensamiento.",
    type: "culture",
  },
  {
    title: "Mujeres",
    url: "https://www.mujeres.cu",
    description:
      "Revista cubana enfocada en temas sociales, culturales y de actualidad.",
    type: "culture",
  },
  {
    title: "Radio Progreso",
    url: "https://www.radioprogreso.cu",
    description:
      "Emisora nacional cubana con programación informativa y cultural.",
    type: "media",
  },
  {
    title: "El Economista de Cuba",
    url: "https://www.eleconomista.cu",
    description:
      "Publicación especializada en economía y desarrollo empresarial.",
    type: "business",
  },
  {
    title: "Banco Central de Cuba",
    url: "https://www.bc.gob.cu",
    description: "Portal oficial del sistema bancario y financiero cubano.",
    type: "government",
  },
  {
    title: "Ministerio de Economía y Planificación",
    url: "https://www.mep.gob.cu",
    description:
      "Información sobre planificación económica y desarrollo nacional.",
    type: "government",
  },
  {
    title: "Ministerio de Finanzas y Precios",
    url: "https://www.mfp.gob.cu",
    description: "Normativas financieras, tributarias y económicas de Cuba.",
    type: "government",
  },
  {
    title: "Ministerio de Comunicaciones",
    url: "https://www.mincom.gob.cu",
    description:
      "Información sobre telecomunicaciones y transformación digital.",
    type: "government",
  },
  {
    title: "Ministerio de Agricultura",
    url: "https://www.minag.gob.cu",
    description: "Portal oficial del sector agrícola cubano.",
    type: "government",
  },
  {
    title: "Ministerio de Transporte",
    url: "https://www.mitrans.gob.cu",
    description: "Información sobre transporte terrestre, marítimo y aéreo.",
    type: "government",
  },
  {
    title: "Ministerio de Comercio Exterior e Inversión Extranjera",
    url: "https://www.mincex.gob.cu",
    description: "Promoción de comercio exterior e inversión en Cuba.",
    type: "government",
  },
  {
    title: "Ministerio de Comercio Interior",
    url: "https://www.mincin.gob.cu",
    description: "Información sobre comercio y servicios internos.",
    type: "government",
  },
  {
    title: "Ministerio de Industrias",
    url: "https://www.mindus.gob.cu",
    description: "Portal oficial de la industria cubana.",
    type: "government",
  },
  {
    title: "Ministerio de la Construcción",
    url: "https://www.micons.gob.cu",
    description:
      "Información sobre proyectos constructivos y desarrollo urbano.",
    type: "government",
  },
  {
    title: "Ministerio de la Industria Alimentaria",
    url: "https://www.minal.gob.cu",
    description: "Portal oficial de la industria alimentaria cubana.",
    type: "government",
  },
  {
    title: "Instituto Nacional de Recursos Hidráulicos",
    url: "https://www.hidro.gob.cu",
    description: "Información sobre gestión del agua y recursos hidráulicos.",
    type: "government",
  },
  {
    title: "Universidad de Ciencias Médicas de La Habana",
    url: "https://www.sld.cu/sitios/ucmh",
    description: "Institución líder en formación de profesionales de la salud.",
    type: "education",
  },
  {
    title: "Instituto Superior de Tecnologías y Ciencias Aplicadas",
    url: "https://www.instec.cu",
    description: "Centro universitario especializado en ciencias aplicadas.",
    type: "education",
  },
  {
    title: "Universidad de Matanzas",
    url: "https://www.umcc.cu",
    description:
      "Universidad pública con programas de formación e investigación.",
    type: "education",
  },
  {
    title: "Universidad de Cienfuegos",
    url: "https://www.ucf.edu.cu",
    description: "Centro de educación superior e investigación científica.",
    type: "education",
  },
  {
    title: "Universidad de Granma",
    url: "https://www.udg.co.cu",
    description: "Institución universitaria de la provincia Granma.",
    type: "education",
  },
  {
    title: "Apklis",
    url: "https://www.apklis.cu",
    description: "Tienda cubana de aplicaciones para dispositivos Android.",
    type: "technology",
  },
  {
    title: "Picta",
    url: "https://www.picta.cu",
    description:
      "Plataforma cubana de video bajo demanda y contenidos audiovisuales.",
    type: "technology",
  },
  {
    title: "Cubava",
    url: "https://www.cubava.cu",
    description: "Plataforma cubana para la creación y alojamiento de blogs.",
    type: "technology",
  },
  {
    title: "Reflejos",
    url: "https://www.reflejos.cu",
    description: "Red de blogs y contenidos digitales cubanos.",
    type: "technology",
  },
  {
    title: "Universo",
    url: "https://www.universo.cu",
    description: "Portal cubano de servicios digitales y alojamiento web.",
    type: "technology",
  },
  {
    title: "CubaEmprende",
    url: "https://www.cubaemprende.org",
    description: "Iniciativa de apoyo al emprendimiento y pequeños negocios.",
    type: "business",
  },
  {
    title: "Habaguanex",
    url: "https://www.habaguanexhotels.com",
    description:
      "Cadena hotelera y turística vinculada al patrimonio habanero.",
    type: "tourism",
  },
  {
    title: "Gaviota Turismo",
    url: "https://www.gaviota-grupo.com",
    description: "Grupo turístico con hoteles y servicios en toda Cuba.",
    type: "tourism",
  },
  {
    title: "Islazul",
    url: "https://www.islazul.cu",
    description:
      "Cadena hotelera cubana orientada al turismo nacional e internacional.",
    type: "tourism",
  },
  {
    title: "Cubanacán",
    url: "https://www.cubanacan.cu",
    description:
      "Grupo hotelero con instalaciones en múltiples destinos cubanos.",
    type: "tourism",
  },
  {
    title: "Havanatur",
    url: "https://www.havanatur.cu",
    description: "Agencia de viajes y operador turístico cubano.",
    type: "tourism",
  },
  {
    title: "Artex",
    url: "https://www.artex.cu",
    description: "Empresa dedicada a la promoción y comercialización cultural.",
    type: "culture",
  },
  {
    title: "Uneac",
    url: "https://www.uneac.org.cu",
    description: "Unión de Escritores y Artistas de Cuba.",
    type: "culture",
  },
  {
    title: "Casa de África",
    url: "https://www.casadeafrica.cu",
    description:
      "Institución cultural dedicada al patrimonio afrodescendiente.",
    type: "culture",
  },
  {
    title: "Museo Nacional de Bellas Artes",
    url: "https://www.bellasartes.co.cu",
    description: "Principal museo de arte de Cuba.",
    type: "culture",
  },
  {
    title: "Instituto Cubano de Investigación Cultural Juan Marinello",
    url: "https://www.marinello.cu",
    description: "Centro de investigación sobre cultura e identidad cubana.",
    type: "science",
  },
];

export function SearchResults({
  query,
  onBack,
  searchQuery,
  setSearchQuery,
  onSearch,
}: SearchResultsProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  const filteredResults = mockResults.filter(
    (result) =>
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.description.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <motion.div
      key="results"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen"
    >
      {/* Header with search */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            {/* Back button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-muted-foreground" />
            </motion.button>

            {/* Logo */}
            <button onClick={onBack} className="flex items-center gap-1">
              <span className="text-xl font-bold">
                <span className="text-primary">Cuba</span>
                <span className="text-secondary">.</span>
                <span className="text-foreground">Entera</span>
              </span>
            </button>

            {/* Search bar */}
            <div className="flex-1 max-w-2xl relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full h-11 pl-11 pr-4 bg-muted rounded-full border border-border focus:border-primary focus:outline-none transition-colors text-sm"
                placeholder="Buscar en Cuba..."
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 mt-4 text-sm">
            <button className="flex items-center gap-2 text-primary border-b-2 border-primary pb-2 font-medium">
              <Globe className="w-4 h-4" />
              Todos
            </button>
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground pb-2 transition-colors">
              <FileText className="w-4 h-4" />
              Noticias
            </button>
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground pb-2 transition-colors">
              <ImageIcon className="w-4 h-4" />
              Imágenes
            </button>
          </div>
        </div>
      </header>

      {/* Results */}
      <main className="max-w-3xl mx-auto px-4 py-6">
        <p className="text-sm text-muted-foreground mb-6">
          Aproximadamente {filteredResults.length} resultados para &quot;{query}
          &quot; en dominios .cu
        </p>

        <div className="space-y-6">
          {filteredResults.map((result, index) => (
            <motion.article
              key={result.url}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <a
                href={result.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                    <Globe className="w-3 h-3" />
                  </div>
                  <span className="group-hover:text-primary transition-colors">
                    {result.url}
                  </span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-medium text-secondary group-hover:underline underline-offset-2 mb-1">
                  {result.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {result.description}
                </p>
              </a>
            </motion.article>
          ))}
        </div>

        {filteredResults.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">
              No se encontraron resultados para &quot;{query}&quot;
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Intenta con otros términos de búsqueda
            </p>
          </motion.div>
        )}

        {/* Pagination mock */}
        {filteredResults.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center items-center gap-2 mt-12 pb-8"
          >
            <span className="text-primary text-lg font-bold">C</span>
            <span className="text-secondary text-lg font-bold">u</span>
            <span className="text-primary text-lg font-bold">b</span>
            <span className="text-secondary text-lg font-bold">a</span>
            <span className="text-muted-foreground mx-4">|</span>
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`w-8 h-8 rounded-full text-sm transition-colors ${
                  page === 1
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted text-muted-foreground"
                }`}
              >
                {page}
              </button>
            ))}
          </motion.div>
        )}
      </main>
    </motion.div>
  );
}
