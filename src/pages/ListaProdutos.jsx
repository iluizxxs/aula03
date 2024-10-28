import styles from '../styles/listaProdutos.module.css'

export default function ListaProdutos({ produtos }) {
    return (
       <>
        <ul className={styles.bloco}>
            {produtos.map(produto => (
                <li key={produto.id}>
                    <h2>{produto.title}</h2>
                    <p>{produto.description}</p>
                    <p>Preço: {produto.price}</p>
                    <img src={produto.image} alt={produto.title}
                    </li>
            ))}
        </ul>
    </>
  );
}