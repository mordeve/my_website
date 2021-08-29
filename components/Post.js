import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Post({ post }) {
  return (
    <div className={styles.block_out}>   
      <h2 className={styles.blog_title_out}>
        <Link href = {`/posts/${post.slug}`}>
            <a>{post.frontmatter.title}</a>
        </Link>
      </h2>

      <div className={styles.blog_text_out}>{post.frontmatter.excerpt}</div>

      <Link href={`/posts/${post.slug}`}>
        <a className={styles.btn_read}>Read More</a>
      </Link>

      <div className={styles.blog_date}>{post.frontmatter.date}</div>
    </div>
  )
}