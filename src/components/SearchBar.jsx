import styles from '../styles/SearchBar.module.css';

export default function SearchBar({ value, onChange }) {
  return (
    <div className={styles.searchbar}>
      <input
        type='text'
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      {value && <button onClick={() => onChange('')}>Clear</button>}
    </div>
  );
}
