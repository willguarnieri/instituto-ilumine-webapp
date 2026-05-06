import { useMemo, useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BlogPostCard } from '../components/BlogPostCard';
import postsJson from '../data/posts.json';
import type { Post } from '../types/post';

const ALL: Post[] = postsJson as Post[];

export function Blog() {
  const itemsPerPage = 6;

  const { destaque, pool } = useMemo(() => {
    const featured = ALL.find((p) => p.destaque) ?? ALL[0];
    const rest = ALL.filter((p) => p.id !== featured.id);
    return { destaque: featured, pool: rest };
  }, []);

  const [visibleCount, setVisibleCount] = useState(itemsPerPage);
  const posts = pool.slice(0, visibleCount);
  const canLoadMore = visibleCount < pool.length;

  function loadMore() {
    setVisibleCount((c) => Math.min(c + itemsPerPage, pool.length));
  }

  return (
    <>
      <Header />
      <section className="container mt-8 mx-auto w-10/12">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3 md:col-span-1">
            <h1 className="font-zerocalcare text-6xl text-orange mb-20">FIQUE POR DENTRO</h1>
          </div>
          <div className="col-span-3 md:col-span-2">
            {destaque && <BlogPostCard post={destaque} destaque />}
          </div>
        </div>
      </section>
      <section className="container relative text-center mx-auto w-10/12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {posts.map((item) => (
            <BlogPostCard key={item.id} post={item} />
          ))}
        </div>
        {canLoadMore && (
          <button
            type="button"
            className="mt-8 font-museoRegular rounded-button bg-orange text-md h-12 px-8 uppercase border-2 border-solid border-orange text-center hover:bg-white hover:text-orange focus:outline-none"
            onClick={loadMore}
          >
            Carregar mais
          </button>
        )}
      </section>
      <Footer />
    </>
  );
}
