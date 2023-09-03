import css from './TextBlock.module.css';

const TextBlock = ({  title, text }) => {

  return (
    <div className={css.textBlock}>
        <div className={css.title}>
            <h1>{title}</h1>
        </div>
        <p>{text}</p>            
    </div>
  );
};

export default TextBlock;