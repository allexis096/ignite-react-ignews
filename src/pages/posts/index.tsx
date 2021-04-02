import Head from 'next/head';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';

import { getPrismicClient } from '../../services/prismic';
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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([Prismic.predicates.at('document.type', 'publication')], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  });

  console.log(JSON.stringify(response, null, 2));

  return {
    props: {},
  };
};
