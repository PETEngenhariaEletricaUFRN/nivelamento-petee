import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Importe suas imagens PNG aqui (certifique-se de que os arquivos estão na pasta static/img/)
import eletronicaImg from '@site/static/img/eletronicaehardware.png';
import imagemC from '@site/static/img/C++_imagem.png';
import pcb from '@site/static/img/PCB_imagem.png';

const FeatureList = [
  {
    title: 'Eletrônica e Hardware',
    Svg: (props) => (

      <img 
        src={eletronicaImg} 
        alt="Eletrônica e Hardware" 
        style={{ width: '100%', maxWidth: '320px', height: 'auto', display: 'block', margin: '42px auto 30px auto' }} 
      />
      
    ),
    description: (
      <>
        Fundamentos de instalações elétricas, técnicas de soldagem (PTH e SMD), análise de circuitos para os membros do PETee.
      </>
    ),
  },
  {
    title: 'C/C++ e Sistemas Embarcados',
    Svg: (props) => (

      <img 
        src={imagemC} 
        alt="Eletrônica e Hardware" 
        style={{ width: '100%', maxWidth: '320px', height: 'auto', display: 'block', margin: '20px auto 15px auto' }} 
      />
      
    ),
    description: (
      <>
        Domínio de ponteiros, modularização, gerenciamento de memória e protocolos de barramento (I2C, SPI, UART).
      </>
    ),
  },
  {
    title: 'Desenvolvimento de PCB',
    Svg: (props) => (

      <img 
        src={pcb} 
        alt="Eletrônica e Hardware" 
        style={{ width: '100%', maxWidth: '180px', height: 'auto', display: 'block', margin: '44px auto 48px auto' }} 
      />
      
    ),
    description: (
      <>
        Desenvolvimento de Placas de Ciruito impresso e Design de impressões 3D.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}