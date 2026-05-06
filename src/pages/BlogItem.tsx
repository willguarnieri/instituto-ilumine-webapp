import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BlogPostCard } from '../components/BlogPostCard';
import postsJson from '../data/posts.json';
import type { Post } from '../types/post';
import { formatPostDate } from '../lib/formatDate';

const ALL: Post[] = postsJson as Post[];

export function BlogItem() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const postId = Number(id);
  const data = ALL.find((p) => p.id === postId);

  const itemsPerPage = 4;
  const sidebarPool = useMemo(() => ALL.filter((p) => p.id !== postId), [postId]);
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);
  const posts = sidebarPool.slice(0, visibleCount);
  const canLoadMore = visibleCount < sidebarPool.length;

  if (!data) {
    return (
      <>
        <Header />
        <section className="container py-20 text-center">
          <p className="font-museoRegular text-darkGray">Post não encontrado.</p>
          <button type="button" className="mt-4 underline text-green" onClick={() => navigate('/blog')}>
            Voltar ao blog
          </button>
        </section>
        <Footer />
      </>
    );
  }

  const { date, time } = formatPostDate(data.dataCriacao);

  return (
    <>
      <Header />

      <section className="py-9 md:py-8 w-9/12 mx-auto">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="cursor-pointer font-museoRegular text-darkGray underline mb-12 ml-24 block text-left bg-transparent border-none"
        >
          &lt; Voltar
        </button>

        <div
          className="w-full background-cover bg-center h-420"
          style={{ backgroundImage: `url(${data.imagem})` }}
        />

        <div className="w-10/12">
          <h1 className="font-museoRegular text-orange text-3xl mt-12 mb-3">{data.titulo}</h1>
          <p className="font-museoRegular text-sm text-darkGray mb-2">
            Publicado {date} às {time}
          </p>

          <div
            className="font-museoRegular text-darkGray my-8 md:my-24"
            dangerouslySetInnerHTML={{ __html: data.texto }}
          />
        </div>
      </section>

      <section className="py-9 md:py-24 bg-snowWhite">
        <div className="w-10/12 mx-auto">
          <h2 className="font-museoRegular text-2xl text-orange text-center">Outras Publicações</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {posts.map((item) => (
              <BlogPostCard key={item.id} post={item} />
            ))}
          </div>
          {canLoadMore && (
            <div className="text-center mt-8">
              <button
                type="button"
                className="font-museoRegular rounded-button bg-orange text-md h-12 px-8 uppercase border-2 border-solid border-orange text-center hover:bg-white hover:text-orange focus:outline-none"
                onClick={() => setVisibleCount((c) => Math.min(c + itemsPerPage, sidebarPool.length))}
              >
                Carregar mais
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
