import Head from 'next/head';

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="/">
            <time>23 de abril de 2021</time>
            <strong>Introdução</strong>
            <p>
              Leaflet é uma biblioteca JavaScript open-source para trabalhar com Mapas em aplicações
              web e mobile.
            </p>
          </a>
          <a href="/">
            <time>23 de abril de 2021</time>
            <strong>Introdução</strong>
            <p>
              Leaflet é uma biblioteca JavaScript open-source para trabalhar com Mapas em aplicações
              web e mobile.
            </p>
          </a>
          <a href="/">
            <time>23 de abril de 2021</time>
            <strong>Introdução</strong>
            <p>
              Leaflet é uma biblioteca JavaScript open-source para trabalhar com Mapas em aplicações
              web e mobile.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
