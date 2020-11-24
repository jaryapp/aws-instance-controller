import styles from '../styles/Table.module.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

function Table({ head, datas }) {
  return (
    <table className={cx('table')}>
      <thead>
        <tr>
          {head.map((item) => (
            <th>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {datas.map((data) => (
          <tr>
            {head.map((item) => (
              <td>{data[item]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
