import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/happy.svg').default,
    description: (
      <>
        All the Assets being sold are easy to use,
        stable and focus on customizability.
        These Products are designed and updated on your feedback and suggestions.
      </>
    ),
  },
  {
    title: 'Fair Pricing',
    Svg: require('@site/static/img/pricing.svg').default,
    description: (
      <>
        The assets are designed to be affordable for everyone to make their dreams happen.
      </>
    ),
  },
  {
    title: '24/7 Support',
    Svg: require('@site/static/img/support.svg').default,
    description: (
      <>
        Report bugs or suggest new features to make the assets even better
        by joining the Community Discord Server.
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
        <h3>{title}</h3>
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
