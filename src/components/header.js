import React from "react";
import { Link } from "gatsby";

/**
 * обратите внимание на то что изображение для логотипа
 * импортируется также, как и в обычном React-проекте.
 * Это временное и не оптимальное решение, потому что картинка
 * поставляется "как есть". Немного далее мы рассмотрим
 * как это делать "правильно" используя GraphQL и gatsby-плагины
 */
import logoSrc from "../images/logo.png";

let  Header = () => (
  <header>
    <Link to="/">
      <img src={logoSrc} alt="logo" width="64px" height="64px" />
    </Link>
    That is header
  </header>
);

export default Header