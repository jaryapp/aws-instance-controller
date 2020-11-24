import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import styles from '../styles/Menu.module.scss';

const cx = classNames.bind(styles);

export default function Menu() {
  const router = useRouter();

  console.log(router);

  const menus = [
    {
      key: '/',
      label: '인스턴스',
    },
    {
      key: '/images',
      label: '이미지',
    },
    {
      key: '/zones',
      label: 'zones',
    },
    {
      key: '/regions',
      label: 'regions',
    },
    {
      key: '/config',
      label: '설정',
    },
  ];
  return (
    <div className={cx('menu-box')}>
      {menus.map((menu) => {
        return (
          <div
            className={cx('menu', router.pathname == menu.key ? 'select' : '')}
            onClick={() => {
              router.push(menu.key);
            }}
          >
            {menu.label}
          </div>
        );
      })}
    </div>
  );
}
