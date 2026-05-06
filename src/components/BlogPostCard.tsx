import { Link } from 'react-router-dom';
import type { Post } from '../types/post';
import { formatPostDate } from '../lib/formatDate';

interface BlogPostCardProps {
  post: Post;
  destaque?: boolean;
}

export function BlogPostCard({ post, destaque = false }: BlogPostCardProps) {
  const { date, time } = formatPostDate(post.dataCriacao);

  return (
    <Link
      to={`/blog/${post.id}`}
      className={`bg-white rounded-2xl shadow-lg grid grid-cols-1 grid-flow-row gap-2 m-4 p-2 items-center cursor-pointer m ${
        destaque ? 'md:max-h-[12.5rem] md:grid-cols-3 mb-12' : 'md:max-h-32 md:grid-cols-4 h-full'
      }`}
    >
      <div
        className={`w-full bg-center bg-no-repeat bg-cover rounded-2xl ${
          destaque ? 'h-48 w-48' : 'h-32 md:h-28 md:w-28'
        }`}
        style={{ backgroundImage: `url(${post.imagem})` }}
      />
      <div className={`text-left col-span-2 ${destaque ? 'ml-6' : 'ml-2'}`}>
        <span className="font-museoRegular text-xs text-lightGray ">
          {date} às {time}
        </span>
        <p
          className={`font-museoRegular text-darkGray truncate ${
            destaque ? 'text-4xl my-6' : 'text-2xl mb-5'
          }`}
        >
          {post.titulo}
        </p>
        <p className="font-museoRegular text-sm text-darkGray truncate">{post.resumo}</p>

        {destaque && (
          <button
            type="button"
            className="mt-4 font-museoRegular text-center rounded-button bg-orange text-md h-12 w-20 uppercase border-2 border-solid border-orange p-0 hover:bg-white hover:text-orange focus:outline-none"
          >
            &gt;&gt;
          </button>
        )}
      </div>
      {!destaque && (
        <div className="md:flex justify-center">
          <span className="font-museoRegular text-center rounded-button bg-orange text-md h-12 w-20 uppercase border-2 border-solid border-orange p-0 hover:bg-white hover:text-orange focus:outline-none inline-flex items-center justify-center">
            &gt;&gt;
          </span>
        </div>
      )}
    </Link>
  );
}
