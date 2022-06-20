import React from 'react'
import { Link } from 'react-router-dom'

const MenuBlock = () => {
  return (
    <>
      <div className="c_menu_block">
        <div className="header">Мой профиль <i></i></div>
        <ul>
          <li><Link className="active" to="/user/15/page">Моя страница</Link></li>
          <li><Link to="/user/15/friend">Мои друзья</Link></li>
          <li><Link to="/user/15/mess"><span className="c_menu-orange-block">20</span> Сообщения</Link></li>
          <li><Link to="/user/15/photo">Фото галерея</Link></li>
          <li><Link to="/user/15/video">Видео галерея</Link></li>
        </ul>
      </div>
      <div className="c_menu_block">
        <div className="header">Публичная активность <i></i></div>
        <ul>
          <li><Link to="/user/15/blog">Мой блог</Link></li>
          <li><Link to="/user/15/announcement">Мои объявления</Link></li>
          <li><Link to="/user/15/consultation">Участие в консультациях</Link></li>
          <li><Link to="/user/15/comment">Мои комментарии</Link></li>
        </ul>
      </div>
      <div className="c_menu_block">
        <div className="header">Сервисы <i></i></div>
        <ul>
          <li><Link to="/user/15/cart"><span className="c_menu-orange-block">4</span> Корзина товаров</Link></li>
          <li><Link to="/user/15/my_list">Мой список</Link></li>
          <li><Link to="/user/15/plan">Планировщик</Link></li>
          <li><Link to="/user/15/calculator">Калькулятор расходов</Link></li>
          <li><Link to="/user/15/edit_profile">Настройки анкеты</Link></li>
        </ul>
      </div>

    </>
  )
}

export default MenuBlock
