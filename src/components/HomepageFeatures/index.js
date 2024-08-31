import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Whats this book about?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        This book offers open-source guidance to help businesses and communities build strong security architectures and it’s all free—because robust security should be accessible to everyone.
      </>
    ),
  },
  {
    title: 'How to use this book?',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        This book is designed for flexibility—take the sections that matter most to your organisation and tailor them to fit your unique needs. It’s a toolkit, not a one-size-fits-all solution, so you can adapt it to protect what matters most to you.
      </>
    ),
  },
  {
    title: 'Want to contact us?',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
We’d love to hear from you! If you have ideas, suggestions, or improvements you'd like to see incorporated into our book, reach out to us. Your feedback helps us make this resource even better.
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
